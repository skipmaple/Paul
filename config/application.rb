require_relative "boot"

require "rails/all"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Paul
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    config.time_zone = 'Beijing'
    # 在使用 Ajax 处理的表单中添加真伪令牌
    config.action_view.embed_authenticity_token_in_remote_forms = true

    # https://guides.rubyonrails.org/upgrading_ruby_on_rails.html#active-storage-default-variant-processor-changed-to-vips
    config.active_storage.variant_processor = :vips

    # config.assets.css_compressor = :scss
    config.generators do |g|
      g.template_engine :haml
    end

    # add support markdown
    config.action_view.sanitized_allowed_tags = Loofah::HTML5::SafeList::ALLOWED_ELEMENTS
    config.action_view.sanitized_allowed_attributes = Loofah::HTML5::SafeList::ALLOWED_ATTRIBUTES

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    require_dependency Rails.root.join('lib/paul/utils')
  end
end
