#!/bin/bash

# rails generate model Operation name:string --force
# rails generate model Agreement name:string --force
# rails generate model StatusOfPriceTagPrinting name:string --force
# rails generate model StatusOfAcceptance name:string --force
# rails generate model StatusOfBootingInEquipment name:string --force
# rails generate model Unit short_name:string full_name:string gramms:float --force
# rails generate model Currency short_name:string full_name:string --force
# rails generate model TypeOfExchange name:string --force
# rails generate model TypeOfPayment name:string --force
# rails generate model TypeOfContract name:string --force
# rails generate model RateVAT rate:integer --force
# rails generate model OwnershipForm name:string --force
# rails generate model ProductGroup name:string --force
# rails generate model ProductSubgroup name:string product_group:references --force
# rails generate model Organization short_name:string full_name:string unp:string legal_address:string phone_or_fax:string email:string provider:boolean buyer:boolean company:boolean ownership_form:references --force
# rails generate model Warehouse address:string organization:references --force
# rails generate model Contract series_and_number:string valid_from:date valid_for:date note:text currency:references type_of_exchange:references type_of_payment:references type_of_contract:references --force
# rails generate model Invoice series_and_number:string date_and_time:datetime strings_count:int total_count:int summa:float summa_vat:float summa_with_vat:float record_summa:float retail_summa:float pre_assessment_summa:float write_down_summa:float note:string invoice_type:references operation:references currency:references contract:references agreement:references status_of_price_tag_printing:references status_of_acceptance:references status_of_booting_in_equipment:references --force
# rails generate model ActOfDiscrepancy series_and_number:string date_and_time:datetime strings_count:integer total_count:integer summa_nds:float summa_with_vat:float note:string invoice_type:references operation:references currency:references invoice:references --force
# rails generate model InvoiceProduct full_name:string short_name:string code:string price:float rate_vat:references summa_nds:float cost:float unit:references product_subgroup:references invoice:references --force
# rails generate model ActOfDiscrepanciesProduct code:string invoice_product:references act_of_discrepancy:references --force
# rails generate model Cost invoice_product:references wholesale_percent:float wholesale_value:float commercial_percent:float commercial_value:float vat_percent:float vat_value:float retail_price:float cost:float --force

# rails generate serializer Operation
# rails generate serializer Agreement
# rails generate serializer StatusOfAcceptance
# rails generate serializer StatusOfBootingInEquipment
# rails generate serializer StatusOfPriceTagPrinting
# rails generate serializer Unit
# rails generate serializer Currency
# rails generate serializer TypeOfContract
# rails generate serializer TypeOfExchange
# rails generate serializer TypeOfPayment
# rails generate serializer RateVAT
# rails generate serializer OwnershipForm
# rails generate serializer ProductGroup
# rails generate serializer ProductSubgroup
# rails generate serializer Organization
# rails generate serializer Warehouse
# rails generate serializer Contract
# rails generate serializer Invoice
# rails generate serializer ActOfDiscrepancy
# rails generate serializer InvoiceProduct
# rails generate serializer ActOfDiscrepanciesProduct
# rails generate serializer Cost
# rails generate serializer User

# rails g migration AddIndexToPGroup
# rails g migration AddIndexToPSubgroup

# common

# rails g controller ActOfDiscrepanciesController
# rails g controller ContractsController
# rails g controller InvoicesController
# rails g controller OrganizationsController
# rails g controller WarehousesController
# rails g controller ActOfDiscrepanciesProductsController
# rails g controller InvoiceProductsController
# rails g controller CostsController


# admin

# rails g controller admin/ActOfDiscrepanciesController
# rails g controller admin/AgreementsController
# rails g controller admin/ContractsController
# rails g controller admin/CurrenciesController
# rails g controller admin/InvoicesController
# rails g controller admin/OperationsController
# rails g controller admin/OrganizationsController
# rails g controller admin/OwnershipFormsController
# rails g controller admin/ProductGroupsController
# rails g controller admin/ProductSubgroupsController
# rails g controller admin/StatusOfAcceptancesController
# rails g controller admin/StatusOfBootingInEquipmentsController
# rails g controller admin/StatusOfPriceTagPrintingsController
# rails g controller admin/TypeOfContractsController
# rails g controller admin/TypeOfExchangesController
# rails g controller admin/TypeOfPaymentsController
# rails g controller admin/UnitsController
# rails g controller admin/WarehousesController
# rails g controller admin/RateVatsController
# rails g controller admin/ActOfDiscrepanciesProductsController
# rails g controller admin/InvoiceProductsController
# rails g controller admin/CostsController
# rails g controller admin/UsersController