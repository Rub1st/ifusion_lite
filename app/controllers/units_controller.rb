class UnitsController < ApplicationController
  def index
    render json: units
  end

  private

  def units
    @units ||= Unit.all
  end
end
