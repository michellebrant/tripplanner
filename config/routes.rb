Rails.application.routes.draw do
  root to: 'home#index'

  resources :trips
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :trips
  resources :restaurants
  resources :attractions
  resources :events
  resources :hotels
  resources :flights

    devise_for :users, controllers: { registrations: "registrations"}

end
