class ExpenseProductsController < ApplicationController
  def create
    new_expense_product = ExpenseProduct.new(expense_products_params)
    render_created_data(new_expense_product, expense_products)
  end

  def destroy
    expense_product.destroy

    render json: expense_products
  end

  def index
    render json: expense_products
  end

  private

  def expense_product
    @expense_product ||= ExpenseProduct.find(params[:id])
  end

  def expense_products
    @expense_products ||= ExpenseProduct.all
  end

  def expense_products_params
    params.require(:expense_product).permit(
      :balance_product_id,
      :cash_register_id,
      :count,
      :date_and_time,
      :user_id
    )
  end
end
