class Admin::CurrenciesController < ApplicationController
  def create
    new_currency = Currency.new(currency_params)
    render_created_data(new_currency, currencies)
  end

  def destroy
    currency.destroy

    render json: currencies
  end

  def index
    render json: currencies
  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end

  def currencies
    @currencies ||= Currency.all
  end

  def currency_params
    params.require(:currency).permit(
      :full_name,
      :short_name,
      :user_id
    )
  end
end
