module ActProductsService
  class Destroy
    include Service

    attr_accessor :act_id, :invoice_product

    def initialize(act_id, invoice_product)
      @invoice_product = invoice_product
      @act_id = act_id
    end

    def call
      recalculate_act
      recalculate_balance_product
    end

    private

    def act
      @act ||= ActOfDiscrepancy.find(act_id)
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

    def recalculate_act
      act.update(
        strings_count: act_strings.count,
        total_count: act_total_count,
        summa: act_summa,
        summa_vat: act_summa_vat,
        summa_with_vat: act_summa_with_vat
      )
    end

    def start_count
      InvoiceProduct.find(invoice_product).count
    end

    def act_products_usage
      ActOfDiscrepanciesProduct.where('invoice_product_id = ?', invoice_product).sum(:count)
    end

    def balance_product
      @balance_product ||= BalanceProduct.find_by(invoice_product_id: invoice_product)
    end

    def expose_products_usage
      ExpenseProduct.where('balance_product_id = ?', balance_product.id).sum(:count)
    end

    def new_balance
      start_count - act_products_usage - expose_products_usage
    end

    def recalculate_balance_product
        balance_product.update(balance: new_balance)
    end
  end
end
