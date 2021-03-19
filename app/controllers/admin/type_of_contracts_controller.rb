class Admin::TypeOfContractsController < ApplicationController
  def create
    new_type_of_contract = TypeOfContract.new(type_of_contract_params)
    render_created_data(new_type_of_contract, type_of_contracts)
  end

  def destroy
    type_of_contract.destroy

    render json: type_of_contracts
  end

  def index
    render json: type_of_contracts
  end

  private

  def type_of_contract
    @type_of_contract ||= TypeOfContract.find(params[:id])
  end

  def type_of_contracts
    @type_of_contracts ||= TypeOfContract.all
  end

  def type_of_contract_params
    params.require(:type_of_contract).permit(
      :name,
      :user_id
    )
  end
end
