class Admin::AgreementsController < ApplicationController
  def create
    new_agreement = Agreement.new(agreements_params)
    render_created_data(new_agreement, agreements)
  end

  def destroy
    agreement.destroy

    render json: agreements
  end

  def index
    render json: agreements
  end

  private

  def agreement
    @agreement ||= Agreement.find(params[:id])
  end

  def agreements
    @agreements ||= Agreement.all
  end

  def agreements_params
    params.require(:agreement).permit(
      :name,
      :user_id
    )
  end
end
