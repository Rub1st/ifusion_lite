module Admin
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
        :strings_count,
        :total_count,
        :summa_vat,
        :summa,
        :summa_with_vat,
        :note,
        :operation_id,
        :currency_id,
        :contract_id,
        :agreement_id,
        :status_of_price_tag_printing_id,
        :status_of_acceptance_id,
        :status_of_booting_in_equipment_id,
        :user_id
      )
    end
  end
end
