class ActOfDiscrepanciesProductsController < ApplicationController
  def create
    temp = ActOfDiscrepanciesProduct.create(act_of_discrepancies_products_params)
    if temp.save
      temp.destroy
      ActProductsService::Create.call(act_of_discrepancies_products_params, current_user)
      render json: act_of_discrepancies_products
    else
      render json: { errors: temp.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    act_id = act_of_discrepancies_product.act_of_discrepancy_id
    invoice_product_id = act_of_discrepancies_product.invoice_product_id

    act_of_discrepancies_product.destroy

    ActProductsService::Destroy.call(act_id, invoice_product_id)

    render json: act_of_discrepancies_products
  end

  def index
    render json: act_of_discrepancies_products
  end

  private

  def act_of_discrepancies_product
    @act_of_discrepancies_product ||= ActOfDiscrepanciesProduct.find(params[:id])
  end

  def act_of_discrepancies_products
    @act_of_discrepancies_products ||= ActOfDiscrepanciesProduct.all
  end

  def act_of_discrepancies_products_params
    params.require(:act_of_discrepancies_product).permit(
      :code,
      :count,
      :invoice_product_id,
      :act_of_discrepancy_id,
      :user_id
    )
  end
end
