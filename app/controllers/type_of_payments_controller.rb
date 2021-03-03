class TypeOfPaymentsController < ApplicationController
  def index
    render json: type_of_payments
  end

  private

  def type_of_payments
    @type_of_payments ||= TypeOfPayment.all
  end
end
