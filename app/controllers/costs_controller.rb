class CostsController < ApplicationController
  def create
    temp = Cost.create(costs_params)
    if temp.save
      temp.destroy
      cost = CostsService::Create.call(costs_params, current_user)
      render_created_data(cost, costs)
    else
      render json: { errors: temp.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    cost.destroy

    render json: costs
  end

  def index
    render json: costs
  end

  private

  def cost
    @cost ||= Cost.find(params[:id])
  end

  def costs
    @costs ||= Cost.all
  end

  def costs_params
    params.require(:cost).permit(
      :wholesale_percent,
      :commercial_percent,
      :invoice_product_id,
      :user_id
    )
  end
end
