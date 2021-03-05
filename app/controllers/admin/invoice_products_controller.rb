module Admin
  class InvoiceProductsController < ApplicationController
    def create
      new_invoice_product = InvoiceProduct.new(invoice_products_params)
      render_created_data(new_invoice_product, invoice_products)
    end

    def destroy
      invoice_product.destroy

      render json: invoice_products
    end

    def index
      render json: invoice_products
    end

    private

    def invoice_product
      @invoice_product ||= InvoiceProduct.find(params[:id])
    end

    def invoice_products
      @invoice_products ||= InvoiceProduct.all
    end

    def invoice_products_params
      params.require(:invoice_product).permit(
        :name,
        :short_name,
        :code,
        :price,
        :summa_vat,
        :cost,
        :rate_vat_id,
        :unit_id,
        :product_subgroup_id,
        :invoice_id,
        :user_id
      )
    end
  end
end
