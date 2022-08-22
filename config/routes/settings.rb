resource :settings, only: [:show, :update] do
  member do
    put :update_username
  end

  scope module: :settings do
    resource :account, only: [:show]
    resource :preference, only: [:show] do
      collection do
        post :language
        post :theme
      end
    end
    resource :team, only: [:show]
    resource :billing, only: [:show]
  end

end
