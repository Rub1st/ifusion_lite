class ApplicationController < ActionController::Base
  def render_created_data(check, data)
    if check.save
      render json: data
    else
      render json: { errors: check.errors }, status: :unprocessable_entity
    end
  end
end
