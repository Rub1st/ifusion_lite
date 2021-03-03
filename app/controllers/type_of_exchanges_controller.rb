class TypeOfExchangesController < ApplicationController
  def index
    render json: type_of_exchanges
  end

  private

  def type_of_exchanges
    @type_of_exchanges ||= TypeOfExchange.all
  end
end
