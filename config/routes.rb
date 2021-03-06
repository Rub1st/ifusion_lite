Rails.application.routes.draw do
  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :organizations, only: %i[create destroy index]
  resources :warehouses, only: %i[create destroy index]
  resources :contracts, only: %i[create destroy index]
  resources :invoices, only: %i[create destroy index]
  resources :invoice_products, only: %i[create destroy index]
  resources :costs, only: %i[create destroy index]
  resources :act_of_discrepancies, only: %i[create destroy index]
  resources :act_of_discrepancies_products, only: %i[create destroy index]
  resources :expense_products, only: %i[create destroy index]

  resources :ownership_forms, only: %i[index]
  resources :type_of_exchanges, only: %i[index]
  resources :type_of_contracts, only: %i[index]
  resources :type_of_payments, only: %i[index]
  resources :currencies, only: %i[index]
  resources :agreements, only: %i[index]
  resources :operations, only: %i[index]
  resources :units, only: %i[index]
  resources :rate_vats, only: %i[index]
  resources :product_groups, only: %i[index]
  resources :product_subgroups, only: %i[index]
  resources :cash_registers, only: %i[index]
  resources :balance_products, only: %i[index]

  root to: 'home#index'

  get '*path' => 'home#index', constraints: ->(req) { req.format == 'text/html' }
end
