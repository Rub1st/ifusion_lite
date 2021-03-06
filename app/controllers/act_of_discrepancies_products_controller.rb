class ActOfDiscrepanciesProductsController < ApplicationController
  def create
    new_act_of_discrepancies_product = ActOfDiscrepanciesProduct.new(act_of_discrepancies_products_params)
    render_created_data(new_act_of_discrepancies_product, act_of_discrepancies_products)
  end

  def destroy
    act_of_discrepancies_product.destroy

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
