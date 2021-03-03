class CurrenciesController < ApplicationController
  def index
    render json: currencies
  end

  private

  def currencies
    @currencies ||= Currency.all
  end
end
