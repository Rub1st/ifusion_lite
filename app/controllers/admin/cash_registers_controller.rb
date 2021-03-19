class Admin::CashRegistersController < ApplicationController
  def create
    new_cash_register = CashRegister.new(cash_register_params)
    render_created_data(new_cash_register, cash_registers)
  end

  def destroy
    cash_register.destroy

    render json: cash_registers
  end

  def index
    render json: cash_registers
  end

  private

  def cash_register
    @cash_register ||= CashRegister.find(params[:id])
  end

  def cash_registers
    @cash_registers ||= CashRegister.all
  end

  def cash_register_params
    params.require(:cash_register).permit(
      :name,
      :user_id
    )
  end
end
