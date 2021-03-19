class Admin::TypeOfExchangesController < ApplicationController
  def create
    new_type_of_exchanges = TypeOfExchange.new(type_of_exchange_params)
    render_created_data(new_type_of_exchanges, type_of_exchanges)
  end

  def destroy
    type_of_exchange.destroy

    render json: type_of_exchanges
  end

  def index
    render json: type_of_exchanges
  end

  private

  def type_of_exchange
    @type_of_exchange ||= TypeOfExchange.find(params[:id])
  end

  def type_of_exchanges
    @type_of_exchanges ||= TypeOfExchange.all
  end

  def type_of_exchange_params
    params.require(:type_of_exchange).permit(
      :name,
      :user_id
    )
  end
end
