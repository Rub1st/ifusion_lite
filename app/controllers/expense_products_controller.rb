class ExpenseProductsController < ApplicationController
  def create
    temp = ExpenseProduct.create(expense_products_params)
    if temp.save
      temp.destroy
      ExpenseProductsService::Create.call(expense_products_params, current_user)
      render json: expense_products
    else
      render json: { errors: temp.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    invoice_product_id = expense_product.balance_product.invoice_product_id

    expense_product.destroy

    ExpenseProductsService::Destroy.call(invoice_product_id)

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
