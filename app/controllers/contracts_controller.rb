class ContractsController < ApplicationController
  def create
    new_contract = Contract.new(contracts_params)
    render_created_data(new_contract, contracts)
  end

  def destroy
    contract.destroy

    render json: contracts
  end

  def index
    render json: contracts
  end

  private

  def contract
    @contract ||= Contract.find(params[:id])
  end

  def contracts
    @contracts ||= Contract.all
  end

  def contracts_params
    params.require(:contract).permit(
      :series_and_number,
      :valid_from,
      :valid_for,
      :note,
      :currency_id,
      :type_of_exchange_id,
      :type_of_contract_id,
      :type_of_payment_id,
      :provider_id,
      :customer_id,
      :user_id
    )
  end
end
