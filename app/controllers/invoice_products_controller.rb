class InvoiceProductsController < ApplicationController
  def create
    temp = InvoiceProduct.create(invoice_products_params)
    if temp.save
      temp.destroy
      InvoiceProductsService::Create.call(invoice_products_params, current_user)
      render json: invoice_products
    else
      render json: { errors: temp.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    invoice_id = invoice_product.invoice_id

    invoice_product.destroy

    InvoiceProductsService::Destroy.call(invoice_id)

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
      :code,
      :price,
      :summa_vat,
      :count,
      :cost,
      :rate_vat_id,
      :unit_id,
      :product_subgroup_id,
      :invoice_id,
      :user_id
    )
  end
end
