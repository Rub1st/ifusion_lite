class Admin::ProductSubgroupsController < ApplicationController
  def create
    new_product_subgroup = ProductSubgroup.new(product_subgroup_params)
    render_created_data(new_product_subgroup, product_subgroups)
  end

  def destroy
    product_subgroup.destroy

    render json: product_subgroups
  end

  def index
    render json: product_subgroups
  end

  private

  def product_subgroup
    @product_subgroup ||= ProductSubgroup.find(params[:id])
  end

  def product_subgroups
    @product_subgroups ||= ProductSubgroup.all
  end

  def product_subgroup_params
    params.require(:product_subgroup).permit(
      :name,
      :product_group_id,
      :user_id
    )
  end
end
