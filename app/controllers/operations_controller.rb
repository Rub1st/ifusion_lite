class OperationsController < ApplicationController
  def index
    render json: operations
  end

  private

  def operations
    @operations ||= Operation.all
  end
end
