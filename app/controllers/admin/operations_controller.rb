class Admin::OperationsController < ApplicationController
  def create
    new_operation = Operation.new(operation_params)
    render_created_data(new_operation, operations)
  end

  def destroy
    operation.destroy

    render json: operations
  end

  def index
    render json: operations
  end

  private

  def operation
    @operation ||= Operation.find(params[:id])
  end

  def operations
    @operations ||= Operation.all
  end

  def operation_params
    params.require(:operation).permit(
      :name,
      :user_id
    )
  end
end
