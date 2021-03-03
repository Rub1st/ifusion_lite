class AgreementsController < ApplicationController
  def index
    render json: agreements
  end

  private

  def agreements
    @agreements ||= Agreement.all
  end
end
