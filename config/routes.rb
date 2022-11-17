Rails.application.routes.draw do
  resources :orders

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  post '/signup', to: 'users#create'
  patch '/setup', to: 'users#update'
  get '/me',      to: 'users#me'
  post '/login',    to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  resources :users, only: [:create, :index, :destroy]
  resources :farms, only: [:show, :index, :destroy]
  resources :products, only: [:create, :show, :index, :destroy, :update]

  patch 'users/:username', to: 'users#update'
  get 'users/:username', to: 'users#show'

  patch 'farms/:id', to: 'farms#update'
  post 'farms', to: "farms#create"

  post '/orders', to: "orders#create"
  patch '/orders/:id', to: "orders#update"

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  # Defines the root path route ("/")
  # root "articles#index"
end
