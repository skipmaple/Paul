Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'
    resource '*',
             headers: :any,
             expose: %w[access-token expiry token-type uid client],
             methods: [:get, :post, :patch, :put]
  end
end
