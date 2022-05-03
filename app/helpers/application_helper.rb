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
      'warning' => {
        'div_class' => 'bg-yellow-100 dark:bg-yellow-200',
        'svg_class' => 'text-yellow-700 dark:text-yellow-800',
        'inner_div_class' => 'text-yellow-700 dark:text-yellow-800',
        'close_btn_class' => 'bg-yellow-100 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300'
      },
      'toast' => {
        'div_class' => 'bg-gray-100 dark:bg-gray-200',
        'svg_class' => 'text-gray-700 dark:text-gray-800',
        'inner_div_class' => 'text-gray-700 dark:text-gray-800',
        'close_btn_class' => 'bg-gray-100 text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300'
      }
    }
    flash_types_h.dig(type)
  end

end
