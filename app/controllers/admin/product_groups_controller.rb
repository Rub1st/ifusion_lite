class Admin::ProductGroupsController < ApplicationController
  def create
    new_product_group = ProductGroup.new(product_group_params)
    render_created_data(new_product_group, product_groups)
  end

  def destroy
    product_group.destroy

    render json: product_groups
  end

  def index
    render json: product_groups
  end

  private

  def product_group
    @product_group ||= ProductGroup.find(params[:id])
  end

  def product_groups
    @product_groups ||= ProductGroup.all
  end

  def product_group_params
    params.require(:product_group).permit(
      :name,
      :user_id
    )
  end
end
