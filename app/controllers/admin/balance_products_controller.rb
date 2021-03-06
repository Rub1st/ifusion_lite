class Admin::BalanceProductsController < ApplicationController
  def index
    render json: balance_products
  end

  private

  def balance_products
    @balance_products ||= BalanceProduct.all
  end
end
