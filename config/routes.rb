Rails.application.routes.draw do

  root 'static_pages#home'

  get '/home', to: 'static_pages#home', as: 'home'
  get '/help', to: 'static_pages#help', as: 'help'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/contact', to: 'static_pages#contact', as: 'contact'
  get '/signup', to: 'users#new'
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/login', to: 'sessions#destroy'
  resources :users
end
