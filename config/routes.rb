Rails.application.routes.draw do
  root 'static_pages#home'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
    omniauth_callbacks: 'omni_auth'
  }

  devise_scope :user do
    get 'sign_in', to: 'users/sessions#new'
    get 'sign_up', to: 'users/registrations#new'
    get 'forgot_password', to: 'users/passwords#new'
    get 'reset_password', to: 'users/passwords#edit'
  end

  get '/home', to: 'static_pages#home', as: 'home'
  get '/help', to: 'static_pages#help', as: 'help'
  get '/about', to: 'static_pages#about', as: 'about'
  get '/contact', to: 'static_pages#contact', as: 'contact'
  get '/signup', to: 'users#new'
  # get '/login', to: 'sessions#new'
  # post '/login', to: 'sessions#create'
  # delete '/logout', to: 'sessions#destroy'

  resources :users do
    member do
      get :following, :followers
      post :language
    end

    collection do

    end
  end

  resources :microposts,          only: [:create, :destroy]
  resources :relationships,       only: [:create, :destroy]
  resources :posts

  scope path: '-' do
    draw :settings
  end

  get '*unmatched_route', to: 'application#route_not_found'
end
