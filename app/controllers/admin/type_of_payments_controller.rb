class Admin::TypeOfPaymentsController < ApplicationController
  def create
    new_type_of_payments = TypeOfPayment.new(type_of_payment_params)
    render_created_data(new_type_of_payments, type_of_payments)
  end

  def destroy
    type_of_payment.destroy

    render json: type_of_payments
  end

  def index
    render json: type_of_payments
  end

  private

  def type_of_payment
    @type_of_payment ||= TypeOfPayment.find(params[:id])
  end

  def type_of_payments
    @type_of_payments ||= TypeOfPayment.all
  end

  def type_of_payment_params
    params.require(:type_of_payment).permit(
      :name,
      :user_id
    )
  end
end
