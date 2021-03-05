# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_02_01_163148) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "act_of_discrepancies", force: :cascade do |t|
    t.string "series_and_number", default: "", null: false
    t.datetime "date_and_time"
    t.integer "strings_count", default: 0, null: false
    t.integer "total_count", default: 0, null: false
    t.float "summa_vat", default: 0.0, null: false
    t.float "summa_with_vat", default: 0.0, null: false
    t.float "summa", default: 0.0, null: false
    t.string "note"
    t.bigint "operation_id", null: false
    t.bigint "currency_id", null: false
    t.bigint "invoice_id", null: false
    t.bigint "provider_warehouse_id"
    t.bigint "customer_warehouse_id"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["currency_id"], name: "index_act_of_discrepancies_on_currency_id"
    t.index ["customer_warehouse_id"], name: "index_act_of_discrepancies_on_customer_warehouse_id"
    t.index ["invoice_id"], name: "index_act_of_discrepancies_on_invoice_id"
    t.index ["operation_id"], name: "index_act_of_discrepancies_on_operation_id"
    t.index ["provider_warehouse_id"], name: "index_act_of_discrepancies_on_provider_warehouse_id"
    t.index ["user_id"], name: "index_act_of_discrepancies_on_user_id"
  end

  create_table "act_of_discrepancies_products", force: :cascade do |t|
    t.string "code", default: "", null: false
    t.bigint "invoice_product_id", null: false
    t.bigint "act_of_discrepancy_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["act_of_discrepancy_id"], name: "index_act_of_discrepancies_products_on_act_of_discrepancy_id"
    t.index ["invoice_product_id"], name: "index_act_of_discrepancies_products_on_invoice_product_id"
    t.index ["user_id"], name: "index_act_of_discrepancies_products_on_user_id"
  end

  create_table "agreements", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_agreements_on_user_id"
  end

  create_table "contracts", force: :cascade do |t|
    t.string "series_and_number", default: "", null: false
    t.date "valid_from"
    t.date "valid_for"
    t.text "note"
    t.bigint "currency_id", null: false
    t.bigint "type_of_exchange_id", null: false
    t.bigint "type_of_payment_id", null: false
    t.bigint "type_of_contract_id", null: false
    t.bigint "provider_id"
    t.bigint "customer_id"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["currency_id"], name: "index_contracts_on_currency_id"
    t.index ["customer_id"], name: "index_contracts_on_customer_id"
    t.index ["provider_id"], name: "index_contracts_on_provider_id"
    t.index ["type_of_contract_id"], name: "index_contracts_on_type_of_contract_id"
    t.index ["type_of_exchange_id"], name: "index_contracts_on_type_of_exchange_id"
    t.index ["type_of_payment_id"], name: "index_contracts_on_type_of_payment_id"
    t.index ["user_id"], name: "index_contracts_on_user_id"
  end

  create_table "costs", force: :cascade do |t|
    t.bigint "invoice_product_id", null: false
    t.float "wholesale_percent", null: false
    t.float "wholesale_value", default: 0.0, null: false
    t.float "commercial_percent", null: false
    t.float "commercial_value", default: 0.0, null: false
    t.float "vat_percent", default: 0.0, null: false
    t.float "vat_value", default: 0.0, null: false
    t.float "retail_price", default: 0.0, null: false
    t.float "cost", default: 0.0, null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["invoice_product_id"], name: "index_costs_on_invoice_product_id"
    t.index ["user_id"], name: "index_costs_on_user_id"
  end

  create_table "currencies", force: :cascade do |t|
    t.string "short_name", default: "", null: false
    t.string "full_name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_currencies_on_user_id"
  end

  create_table "invoice_products", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "code", default: "", null: false
    t.float "price", null: false
    t.integer "count", null: false
    t.float "summa_vat", default: 0.0, null: false
    t.float "cost", default: 0.0, null: false
    t.float "cost_with_vat", default: 0.0, null: false
    t.bigint "rate_vat_id", null: false
    t.bigint "unit_id", null: false
    t.bigint "product_subgroup_id", null: false
    t.bigint "invoice_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["invoice_id"], name: "index_invoice_products_on_invoice_id"
    t.index ["product_subgroup_id"], name: "index_invoice_products_on_product_subgroup_id"
    t.index ["rate_vat_id"], name: "index_invoice_products_on_rate_vat_id"
    t.index ["unit_id"], name: "index_invoice_products_on_unit_id"
    t.index ["user_id"], name: "index_invoice_products_on_user_id"
  end

  create_table "invoices", force: :cascade do |t|
    t.string "series_and_number", default: "", null: false
    t.datetime "date_and_time"
    t.integer "strings_count", default: 0, null: false
    t.integer "total_count", default: 0, null: false
    t.float "summa", default: 0.0, null: false
    t.float "summa_vat", default: 0.0, null: false
    t.float "summa_with_vat", default: 0.0, null: false
    t.string "note"
    t.bigint "operation_id", null: false
    t.bigint "currency_id", null: false
    t.bigint "contract_id", null: false
    t.bigint "agreement_id", null: false
    t.bigint "provider_warehouse_id"
    t.bigint "customer_warehouse_id"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["agreement_id"], name: "index_invoices_on_agreement_id"
    t.index ["contract_id"], name: "index_invoices_on_contract_id"
    t.index ["currency_id"], name: "index_invoices_on_currency_id"
    t.index ["customer_warehouse_id"], name: "index_invoices_on_customer_warehouse_id"
    t.index ["operation_id"], name: "index_invoices_on_operation_id"
    t.index ["provider_warehouse_id"], name: "index_invoices_on_provider_warehouse_id"
    t.index ["user_id"], name: "index_invoices_on_user_id"
  end

  create_table "operations", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_operations_on_user_id"
  end

  create_table "organizations", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "unp", default: "", null: false
    t.string "address", default: "", null: false
    t.string "phone", default: "", null: false
    t.string "email", default: "", null: false
    t.boolean "provider", default: false, null: false
    t.boolean "buyer", default: false, null: false
    t.bigint "ownership_form_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ownership_form_id"], name: "index_organizations_on_ownership_form_id"
    t.index ["user_id"], name: "index_organizations_on_user_id"
  end

  create_table "ownership_forms", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_ownership_forms_on_user_id"
  end

  create_table "product_groups", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_product_groups_on_user_id"
  end

  create_table "product_subgroups", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "product_group_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_group_id"], name: "index_product_subgroups_on_product_group_id"
    t.index ["user_id"], name: "index_product_subgroups_on_user_id"
  end

  create_table "rate_vats", force: :cascade do |t|
    t.integer "rate", default: 0, null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_rate_vats_on_user_id"
  end

  create_table "type_of_contracts", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_type_of_contracts_on_user_id"
  end

  create_table "type_of_exchanges", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_type_of_exchanges_on_user_id"
  end

  create_table "type_of_payments", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_type_of_payments_on_user_id"
  end

  create_table "units", force: :cascade do |t|
    t.string "short_name", default: "", null: false
    t.string "full_name", default: "", null: false
    t.float "gramms", default: 0.0, null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_units_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.integer "user_role", default: 0, null: false
    t.string "name", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "warehouses", force: :cascade do |t|
    t.string "address", default: "", null: false
    t.bigint "organization_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["organization_id"], name: "index_warehouses_on_organization_id"
    t.index ["user_id"], name: "index_warehouses_on_user_id"
  end

  add_foreign_key "act_of_discrepancies", "currencies"
  add_foreign_key "act_of_discrepancies", "invoices"
  add_foreign_key "act_of_discrepancies", "operations"
  add_foreign_key "act_of_discrepancies", "users"
  add_foreign_key "act_of_discrepancies", "warehouses", column: "customer_warehouse_id"
  add_foreign_key "act_of_discrepancies", "warehouses", column: "provider_warehouse_id"
  add_foreign_key "act_of_discrepancies_products", "act_of_discrepancies"
  add_foreign_key "act_of_discrepancies_products", "invoice_products"
  add_foreign_key "act_of_discrepancies_products", "users"
  add_foreign_key "agreements", "users"
  add_foreign_key "contracts", "currencies"
  add_foreign_key "contracts", "organizations", column: "customer_id"
  add_foreign_key "contracts", "organizations", column: "provider_id"
  add_foreign_key "contracts", "type_of_contracts"
  add_foreign_key "contracts", "type_of_exchanges"
  add_foreign_key "contracts", "type_of_payments"
  add_foreign_key "contracts", "users"
  add_foreign_key "costs", "invoice_products"
  add_foreign_key "costs", "users"
  add_foreign_key "currencies", "users"
  add_foreign_key "invoice_products", "invoices"
  add_foreign_key "invoice_products", "product_subgroups"
  add_foreign_key "invoice_products", "rate_vats"
  add_foreign_key "invoice_products", "units"
  add_foreign_key "invoice_products", "users"
  add_foreign_key "invoices", "agreements"
  add_foreign_key "invoices", "contracts"
  add_foreign_key "invoices", "currencies"
  add_foreign_key "invoices", "operations"
  add_foreign_key "invoices", "users"
  add_foreign_key "invoices", "warehouses", column: "customer_warehouse_id"
  add_foreign_key "invoices", "warehouses", column: "provider_warehouse_id"
  add_foreign_key "operations", "users"
  add_foreign_key "organizations", "ownership_forms"
  add_foreign_key "organizations", "users"
  add_foreign_key "ownership_forms", "users"
  add_foreign_key "product_groups", "users"
  add_foreign_key "product_subgroups", "product_groups"
  add_foreign_key "product_subgroups", "users"
  add_foreign_key "rate_vats", "users"
  add_foreign_key "type_of_contracts", "users"
  add_foreign_key "type_of_exchanges", "users"
  add_foreign_key "type_of_payments", "users"
  add_foreign_key "units", "users"
  add_foreign_key "warehouses", "organizations"
  add_foreign_key "warehouses", "users"
end
