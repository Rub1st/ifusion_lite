module ExpenseProductsService
  class Destroy
    include Service

    attr_accessor :invoice_product

    def initialize(invoice_product)
      @invoice_product = invoice_product
    end

    def call
      recalculate_balance_product
    end

    private

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
