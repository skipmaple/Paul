require "mini_magick"

# Carrierwave uses MiniMagick for image processing. To prevent server timeouts
# we are setting the MiniMagick timeout lower.
MiniMagick.configure do |config|
  config.timeout = 10
end

module CarrierWaveInitializer
  def self.local_storage_config
    CarrierWave.configure do |config|
      config.storage = :file
      config.enable_processing = !Rails.env.test? # disabled for test
      config.asset_host = if Rails.env.production?
                            # "https://#{ApplicationConfig['APP_DOMAIN']}"
                            "https://onetail.life"
                          end
    end
  end

  def self.standard_production_config
    CarrierWave.configure do |config|
      config.storage = :fog
      config.fog_directory = "paul-prod"
      config.fog_public = false
      # config.fog_provider = "fog/aliyun"
      # config.fog_attributes = { cache_control: "public, max-age=#{365.days.to_i}" }
      config.fog_credentials = {
        provider: "Aliyun",
        aliyun_accesskey_id: ENV["ALIYUN_ACCESS_KEY_ID"],
        aliyun_accesskey_secret: ENV["ALIYUN_ACCESS_KEY_SECRET"],
        aliyun_oss_bucket: ENV.fetch('ALIYUN_BUCKET') { "paul-prod" },
        aliyun_region_id: ENV.fetch('ALIYUN_REGION_ID') { "cn-beijing" },
        aliyun_oss_endpoint: ENV.fetch('ALIYUN_OSS_ENDPOINT') { "https://oss-cn-beijing.aliyuncs.com" }
      }
    end
  end

  def self.initialize!
    if Rails.env.production?
      if ENV["ALIYUN_ACCESS_KEY_ID"].present?
        standard_production_config
      else
        local_storage_config
      end
    else
      local_storage_config
    end
  end
end

Rails.application.reloader.to_prepare do
  CarrierWaveInitializer.initialize!
end
