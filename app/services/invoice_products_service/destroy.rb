module InvoiceProductsService
  class Destroy
    include Service

    attr_accessor :invoice_id

    def initialize(invoice_id)
      @invoice_id = invoice_id
    end

    def call
      recalculate_invoice
    end

    private

    def invoice
      Invoice.find(invoice_id)
    end

    def invoice_strings
      @invoice_strings ||= InvoiceProduct.where(invoice_id: invoice.id)
    end

    def invoice_total_count
      invoice_strings.sum(:count)
    end

    def invoice_summa
      @invoice_summa ||= invoice_strings.sum(:cost)
    end

    def invoice_summa_vat
      @invoice_summa_vat ||= invoice_strings.reduce(0) do |acc, item|
        acc + ((item.cost * item.rate_vat.rate).to_f / 100)
      end
    end

    def invoice_summa_with_vat
      invoice_summa + invoice_summa_vat
    end

    def recalculate_invoice
      invoice.update(
        strings_count: invoice_strings.count,
        total_count: invoice_total_count,
        summa: invoice_summa,
        summa_vat: invoice_summa_vat,
        summa_with_vat: invoice_summa_with_vat
      )
    end
  end
end
