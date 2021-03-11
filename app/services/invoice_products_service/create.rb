module InvoiceProductsService
  class Create
    include Service

    attr_accessor :params, :current_user

    def initialize(params, current_user)
      @params = params
      @current_user = current_user
    end

    def call
      invoice_product
      update_invoice_product
      generate_balance_product
      update_invoice
      invoice_product
    end

    private

    def rate_vat
      RateVat.find(params[:rate_vat_id]).rate
    end

    def invoice_product_summa_vat
      (invoice_product_cost * rate_vat).to_f / 100
    end

    def invoice_product_cost
      params[:price].to_f * params[:count].to_i
    end

    def invoice_product_cost_with_vat
      invoice_product_cost + invoice_product_summa_vat
    end

    def invoice_product
      @invoice_product ||= InvoiceProduct.create(params)
    end

    def update_invoice_product
      invoice_product.update(
        cost: invoice_product_cost,
        summa_vat: invoice_product_summa_vat,
        cost_with_vat: invoice_product_cost_with_vat
      )
    end

    def invoice
      Invoice.find(invoice_product.invoice_id)
    end

    def invoice_strings
      @invoice_strings ||= InvoiceProduct.where(invoice_id: invoice.id)
    end

    def invoice_total_count
      invoice_strings.sum(:count)
    end

    def invoice_summa
      @invoice_summa ||= invoice_strings.sum(:cost)
    end

    def invoice_summa_vat
      @invoice_summa_vat ||= invoice_strings.reduce(0) do |acc, item|
        acc + ((item.cost * item.rate_vat.rate).to_f / 100)
      end
    end

    def invoice_summa_with_vat
      invoice_summa + invoice_summa_vat
    end

    def update_invoice
      invoice.update(
        strings_count: invoice_strings.count,
        total_count: invoice_total_count,
        summa: invoice_summa,
        summa_vat: invoice_summa_vat,
        summa_with_vat: invoice_summa_with_vat
      )
    end

    def date_and_time
      invoice_product.invoice.date_and_time
    end

    def start_balance
      invoice_product.count
    end

    def generate_balance_product
      BalanceProduct.create(
        invoice_product: invoice_product,
        balance: start_balance,
        date_and_time: date_and_time,
        user: current_user
      )
    end
  end
end
