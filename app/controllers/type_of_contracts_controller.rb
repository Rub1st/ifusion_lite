class TypeOfContractsController < ApplicationController
  def index
    render json: type_of_contracts
  end

  private

  def type_of_contracts
    @type_of_contracts ||= TypeOfContract.all
  end
end
