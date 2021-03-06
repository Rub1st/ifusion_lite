class CashRegistersController < ApplicationController
  def index
    render json: cash_registers
  end

  private

  def cash_registers
    @cash_registers ||= CashRegister.all
  end
end
