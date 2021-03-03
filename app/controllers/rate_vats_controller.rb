class RateVatsController < ApplicationController
  def index
    render json: rate_vats
  end

  private

  def rate_vats
    @rate_vats ||= RateVat.all
  end
end
