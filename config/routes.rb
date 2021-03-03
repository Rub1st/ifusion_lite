Rails.application.routes.draw do

  devise_for :users

  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  resources :organizations, only: %i[create destroy index]
  resources :warehouses, only: %i[create destroy index]
  resources :contracts, only: %i[create destroy index]
  resources :invoices, only: %i[create destroy index]

  resources :ownership_forms, only: %i[index]
  resources :type_of_exchanges, only: %i[index]
  resources :type_of_contracts, only: %i[index]
  resources :type_of_payments, only: %i[index]
  resources :currencies, only: %i[index]
  resources :agreements, only: %i[index]
  resources :operations, only: %i[index]

  root to: 'home#index'

  get '*path' => 'home#index', constraints: ->(req) { req.format == 'text/html' }
end
