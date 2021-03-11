module ExpenseProductsService
  class Create
    include Service

    attr_accessor :params, :current_user

    def initialize(params, current_user)
      @params = params
      @current_user = current_user
    end

    def call
      expense_product
      update_expense_product
      update_balance_product
      expense_product
    end

    private

    def expense_product_cost
      expense_product.balance_product.invoice_product.price.to_f * params[:count].to_i
    end

    def expense_product
      @expense_product ||= ExpenseProduct.create(params)
    end

    def update_expense_product
      expense_product.update(cost: expense_product_cost)
    end

    def start_count
      invoice_product.count
    end

    def invoice_product
      @invoice_product ||= expense_product.balance_product.invoice_product
    end

    def act_products_usage
      ActOfDiscrepanciesProduct.where('invoice_product_id = ?', invoice_product.id).sum(:count)
    end

    def balance_product
      @balance_product ||= BalanceProduct.find_by(invoice_product_id: invoice_product.id)
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
        expense_product.errors.add(
          :expense_product,
          :negative_balance,
          message: 'На балансе находится меньше единиц товара'
        )
      end
    end
  end
end
