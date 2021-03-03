module Admin
  class CostsController < ApplicationController
    def create
      new_cost = Cost.new(costs_params)
      render_created_data(new_cost, costs)
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
        :wholesale_value,
        :commercial_percent,
        :commercial_value,
        :vat_percent,
        :vat_value,
        :retail_price,
        :cost,
        :invoice_product_id,
        :user_id
      )
    end
  end
end
