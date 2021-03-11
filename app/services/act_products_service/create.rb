module ActProductsService
  class Create
    include Service

    attr_accessor :params, :current_user

    def initialize(params, current_user)
      @params = params
      @current_user = current_user
    end

    def call
      act_product
      update_act_product
      update_balance_product
      update_act
      act_product
    end

    private

    def act_product_cost
      act_product.invoice_product.price.to_f * params[:count].to_i
    end

    def act_product
      @act_product ||= ActOfDiscrepanciesProduct.create(params)
    end

    def update_act_product
      act_product.update(cost: act_product_cost)
    end

    def act
      ActOfDiscrepancy.find(act_product.act_of_discrepancy_id)
    end

    def act_strings
      @act_strings ||= ActOfDiscrepanciesProduct.where(act_of_discrepancy_id: act.id)
    end

    def act_total_count
      act_strings.sum(:count)
    end

    def act_summa
      @act_summa ||= act_strings.sum(:cost)
    end

    def act_summa_vat
      @act_summa_vat ||= act_strings.reduce(0) do |acc, item|
        acc + ((item.cost * item.invoice_product.rate_vat.rate).to_f / 100)
      end
    end

    def act_summa_with_vat
      act_summa + act_summa_vat
    end

    def update_act
      act.update(
        strings_count: act_strings.count,
        total_count: act_total_count,
        summa: act_summa,
        summa_vat: act_summa_vat,
        summa_with_vat: act_summa_with_vat
      )
    end

    def start_count
      act_product.invoice_product.count
    end

    def act_products_usage
      ActOfDiscrepanciesProduct.where('invoice_product_id = ?', act_product.invoice_product.id).sum(:count)
    end

    def balance_product
      @balance_product ||= BalanceProduct.find_by(invoice_product_id: act_product.invoice_product.id)
    end

    def expose_products_usage
      ExpenseProduct.where('balance_product_id = ?', balance_product.id).sum(:count)
    end

    def new_balance
      start_count - act_products_usage - expose_products_usage
    end

    def update_balance_product
      if new_balance >= 0
        balance_product.update(balance: new_balance)
      else
        act_product.errors.add(:act_product, :negative_balance, message: 'На балансе находится меньше единиц товара')
      end
    end
  end
end
