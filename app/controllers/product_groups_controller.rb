class ProductGroupsController < ApplicationController
  def index
    render json: product_groups
  end

  private

  def product_groups
    @product_groups ||= ProductGroup.all
  end
end
