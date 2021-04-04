class Admin::StudentsController < ApplicationController
  def create
    new_student = User.new(student_params)
    render_created_data(new_student, students)
  end

  def destroy
    student.destroy

    render json: students
  end

  def index
    render json: students
  end

  private

  def student
    @student ||= User.common.find(params[:id])
  end

  def students
    @students ||= User.common
  end

  def student_params
    params.require(:student).permit(
      :name,
      :password,
      :number,
      :user_role,
      :email
    )
  end
end
