class OrganizationsController < ApplicationController
  def create
    new_organization = Organization.new(organizations_params)
    render_created_data(new_organization, organizations)
  end

  def destroy
    organization.destroy

    render json: organizations
  end

  def index
    render json: organizations
  end

  private

  def organization
    @organization ||= Organization.find(params[:id])
  end

  def organizations
    @organizations ||= Organization.all
  end

  def organizations_params
    params.require(:organization).permit(
      :name,
      :unp,
      :address,
      :phone,
      :email,
      :provider,
      :buyer,
      :ownership_form_id,
      :user_id
    )
  end
end
