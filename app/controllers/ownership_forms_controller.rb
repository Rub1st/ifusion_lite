class OwnershipFormsController < ApplicationController
  def index
    render json: ownership_forms
  end

  private

  def ownership_forms
    @ownership_forms ||= OwnershipForm.all
  end
end
