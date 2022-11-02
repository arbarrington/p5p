Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  post '/signup', to: 'users#create'
  patch '/setup', to: 'users#update'
  get '/me',      to: 'users#me'
  post '/login',    to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  resources :users, only: [:create, :show, :index, :destory]
  resources :farms, only: [:create, :show, :index, :destory, :update]

  patch 'user/:username', to: 'users#update'

  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
  # Defines the root path route ("/")
  # root "articles#index"
end
