class InvoicesController < ApplicationController
  def create
    new_invoice = Invoice.new(invoices_params)
    render_created_data(new_invoice, invoices)
  end

  def destroy
    invoice.destroy

    render json: invoices
  end

  def index
    render json: invoices
  end

  private

  def invoice
    @invoice ||= Invoice.find(params[:id])
  end

  def invoices
    @invoices ||= Invoice.all
  end

  def invoices_params
    params.require(:invoice).permit(
      :series_and_number,
      :date_and_time,
      :note,
      :operation_id,
      :currency_id,
      :contract_id,
      :agreement_id,
      :customer_warehouse_id,
      :provider_warehouse_id,
      :user_id
    )
  end
end
