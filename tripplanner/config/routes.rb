Rails.application.routes.draw do

  root 'home#index'
  resources :ajaxcalls
  resources :posts
  devise_for :users, controllers: { registrations: "registrations"}


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # get '/eventfulCall' to: 'posts#eventfulCall'
end
