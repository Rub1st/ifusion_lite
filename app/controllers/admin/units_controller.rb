class Admin::UnitsController < ApplicationController
  def create
    new_unit = Unit.new(unit_params)
    render_created_data(new_unit, units)
  end

  def destroy
    unit.destroy

    render json: units
  end

  def index
    render json: units
  end

  private

  def unit
    @unit ||= Unit.find(params[:id])
  end

  def units
    @units ||= Unit.all
  end

  def unit_params
    params.require(:unit).permit(
      :full_name,
      :short_name,
      :gramms,
      :user_id
    )
  end
end
