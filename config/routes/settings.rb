resource :settings, only: [:show, :update] do
  member do
    put :update_username
  end

  scope module: :settings do

  end

end
