class Admin::OwnershipFormsController < ApplicationController
  def create
    new_ownership_form = OwnershipForm.new(ownership_form_params)
    render_created_data(new_ownership_form, ownership_forms)
  end

  def destroy
    ownership_form.destroy

    render json: operations
  end

  def index
    render json: operations
  end

  private

  def ownership_form
    @ownership_form ||= OwnershipForm.find(params[:id])
  end

  def ownership_forms
    @ownership_forms ||= OwnershipForm.all
  end

  def ownership_form_params
    params.require(:ownership_form).permit(
      :name,
      :user_id
    )
  end
end
