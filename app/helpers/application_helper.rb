module ApplicationHelper
  include LetterAvatar::AvatarHelper

  # 根据所在的页面返回完整的标题
  def full_title(title = "")
    base_title = t(:base_title)
    if title.present?
      title + " | " + base_title
    else
      base_title
    end
  end

  # Check if a particular controller is the current one
  #
  # args - One or more controller names to check (using path notation when inside namespaces)
  #
  # Examples
  #
  #   # On TreeController
  #   current_controller?(:tree)           # => true
  #   current_controller?(:commits)        # => false
  #   current_controller?(:commits, :tree) # => true
  #
  #   # On Admin::ApplicationController
  #   current_controller?(:application)         # => true
  #   current_controller?('admin/application')  # => true
  #   current_controller?('gitlab/application') # => false
  def current_controller?(*args)
    args.any? do |v|
      Paul::Utils.safe_downcase!(v.to_s) == controller.controller_name || Paul::Utils.safe_downcase!(v.to_s) == controller.controller_path
    end
  end

  # Check if a particular action is the current one
  #
  # args - One or more action names to check
  #
  # Examples
  #
  #   # On Projects#new
  #   current_action?(:new)           # => true
  #   current_action?(:create)        # => false
  #   current_action?(:new, :create)  # => true
  def current_action?(*args)
    args.any? { |v| Paul::Utils.safe_downcase!(v.to_s) == action_name }
  end

  def markdown(text)
    options = {
      hard_wrap: true,
      link_attributes: { rel: 'nofollow', target: '_blank' },
      fenced_code_blocks: true,
      no_intra_emphasis: true,
      autolink: true,
      quote: true
    }
    markdown = Redcarpet::Markdown.new(Redcarpet::Render::HTML, options)
    sanitize(markdown.render(text))
  end

  def flash_types(type)
    flash_types_h = {
      'info' => {
        'div_class' => 'bg-primary-100 dark:bg-primary-200',
        'svg_class' => 'text-primary-500 dark:text-primary-600',
        'inner_div_class' => 'text-primary-500 dark:text-primary-600',
        'close_btn_class' => 'bg-primary-100 text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:bg-primary-200 dark:text-primary-600 dark:hover:bg-primary-300'
      },
      'danger' => {
        'div_class' => 'bg-red-100 dark:bg-red-200',
        'svg_class' => 'text-red-500 dark:text-red-600',
        'inner_div_class' => 'text-red-500 dark:text-red-600',
        'close_btn_class' => 'bg-red-100 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300'
      },
      'success' => {
        'div_class' => 'bg-green-100 dark:bg-green-200',
        'svg_class' => 'text-green-500 dark:text-green-600',
        'inner_div_class' => 'text-green-500 dark:text-green-600',
        'close_btn_class' => 'bg-green-100 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300'
      },
      'alert' => {
        'div_class' => 'bg-yellow-100 dark:bg-yellow-200',
        'svg_class' => 'text-yellow-700 dark:text-yellow-800',
        'inner_div_class' => 'text-yellow-700 dark:text-yellow-800',
        'close_btn_class' => 'bg-yellow-100 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300'
      },
      'notice' => {
        'div_class' => 'bg-gray-100 dark:bg-gray-200',
        'svg_class' => 'text-gray-700 dark:text-gray-800',
        'inner_div_class' => 'text-gray-700 dark:text-gray-800',
        'close_btn_class' => 'bg-gray-100 text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300'
      }
    }
    flash_types_h.dig(type)
  end

  def ot_button(text, path, options={}, text_tag='strong', text_options={})
    options[:class] = 'inline-flex justify-center items-center gap-2 rounded bg-primary-600 hover:bg-primary-500 ' + (options[:class] || '')
    link_to(path, options) do
      text_options[:class] = 'flex items-center text-center text-primary-100 dark:text-primary-200 hover:text-light-100 ' + text_options[:class]
      content_tag(text_tag, text, text_options)
    end
  end

  def micro_button(text, path, options={})
    options[:class] = 'py-2.5 px-3 ' + (options[:class] || '')

    ot_button(text, path, options, 'strong', { class: 'body-small-bold' })
  end

  def small_button(text, path, options={})
    options[:class] = 'py-3 px-6 ' + (options[:class] || '')

    ot_button(text, path, options, 'strong', { class: 'body-small-bold' })
  end

  def medium_button(text, path, options={})
    options[:class] = 'py-3 px-8 ' + (options[:class] || '')
    ot_button(text, path, options, 'strong', { class: 'heading-h6-bold' })
  end

  def large_button(text, path, options={})
    options[:class] = 'py-3.5 px-8 ' + (options[:class] || '')
    ot_button(text, path, options, 'strong', { class: 'heading-h5-bold' })
  end

  def collapsed_sidebar?
    cookies["sidebar_collapsed"] == "true"
  end

  def bg_blur_wrap_class
    css_class = ["mb-10 bg-blur-light-wrap dark:bg-blur-dark-wrap"]
    css_class.join(' ')
  end
end
