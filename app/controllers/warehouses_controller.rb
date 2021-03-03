class WarehousesController < ApplicationController
  def create
    new_warehouse = Warehouse.new(warehouses_params)
    render_created_data(new_warehouse, warehouses)
  end

  def destroy
    warehouse.destroy

    render json: warehouses
  end

  def index
    render json: warehouses
  end

  private

  def warehouse
    @warehouse ||= Warehouse.find(params[:id])
  end

  def warehouses
    @warehouses ||= Warehouse.all
  end

  def warehouses_params
    params.require(:warehouse).permit(
      :address,
      :organization_id,
      :user_id
    )
  end
end
