class Admin::RateVatsController < ApplicationController
  def create
    new_rate_vat = RateVat.new(rate_vat_params)
    render_created_data(new_rate_vat, rate_vats)
  end

  def destroy
    rate_vat.destroy

    render json: rate_vats
  end

  def index
    render json: rate_vats
  end

  private

  def rate_vat
    @rate_vat ||= RateVat.find(params[:id])
  end

  def rate_vats
    @rate_vats ||= RateVat.all
  end

  def rate_vat_params
    params.require(:rate_vat).permit(
      :rate,
      :user_id
    )
  end
end
