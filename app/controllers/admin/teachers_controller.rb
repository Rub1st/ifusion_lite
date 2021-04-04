class Admin::TeachersController < ApplicationController
  def create
    new_teacher = User.new(teacher_params)
    render_created_data(new_teacher, teachers)
  end

  def destroy
    teacher.destroy

    render json: teachers
  end

  def index
    render json: teachers
  end

  private

  def teacher
    @teacher ||= User.admin.find(params[:id])
  end

  def teachers
    @teachers ||= User.admin
  end

  def teacher_params
    params.require(:teacher).permit(
      :name,
      :password,
      :number,
      :user_role,
      :email
    )
  end
end
