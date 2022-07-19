json.extract! post, :id, :title, :excerpt, :feature_image, :visibility_level, :reading_time, :published_at, :created_at, :updated_at
json.url post_url(post, format: :json)
