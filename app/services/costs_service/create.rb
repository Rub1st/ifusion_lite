module CostsService
  class Create
    include Service

    attr_accessor :params, :current_user

    def initialize(params, current_user)
      @params = params
      @current_user = current_user
    end

    def call
      create_cost
    end

    private

    def invoice_product
      @invoice_product ||= InvoiceProduct.find(params[:invoice_product_id])
    end

    def price
      invoice_product.price
    end

    def count
      invoice_product.count
    end

    def vat_percent
      invoice_product.rate_vat.rate.to_f
    end

    def vat_value
      (vat_percent / 100.0) * (price + wholesale_value + commercial_value)
    end

    def wholesale_percent
      params[:wholesale_percent].to_f
    end

    def commercial_percent
      params[:commercial_percent].to_f
    end

    def wholesale_value
      (wholesale_percent / 100.0) * price
    end

    def commercial_value
      (commercial_percent / 100.0) * (price + wholesale_value)
    end

    def retail_price
      vat_value + price + commercial_value + wholesale_value
    end

    def total_cost
      retail_price * count
    end

    def create_cost
      Cost.new(
        wholesale_percent: wholesale_percent,
        commercial_percent: commercial_percent,
        invoice_product_id: invoice_product.id,
        user: current_user,
        wholesale_value: wholesale_value,
        commercial_value: commercial_value,
        vat_percent: vat_percent,
        vat_value: vat_value,
        retail_price: retail_price,
        cost: total_cost
      )
    end
  end
end
