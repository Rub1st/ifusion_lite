class ActOfDiscrepanciesController < ApplicationController
  def create
    new_act_of_discrepancy = ActOfDiscrepancy.new(act_of_discrepancies_params)
    render_created_data(new_act_of_discrepancy, act_of_discrepancies)
  end

  def destroy
    act_of_discrepancy.destroy

    render json: act_of_discrepancies
  end

  def index
    render json: act_of_discrepancies
  end

  private

  def act_of_discrepancy
    @act_of_discrepancy ||= ActOfDiscrepancy.find(params[:id])
  end

  def act_of_discrepancies
    @act_of_discrepancies ||= ActOfDiscrepancy.all
  end

  def act_of_discrepancies_params
    params.require(:act_of_discrepancy).permit(
      :date_and_time,
      :strings_count,
      :total_count,
      :summa_vat,
      :summa_with_vat,
      :summa,
      :note,
      :operation_id,
      :currency_id,
      :invoice_id,
      :provider_warehouse_id,
      :customer_warehouse_id,
      :user_id
    )
  end
end
