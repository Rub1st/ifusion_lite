class ProductSubgroupsController < ApplicationController
  def index
    render json: product_subgroups
  end

  private

  def product_subgroups
    @product_subgroups ||= ProductSubgroup.all
  end
end
