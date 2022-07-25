# frozen_string_literal: true

module NavHelper
  def page_with_sidebar_class
    # class_name = page_gutter_class
    class_name = []
    class_name << 'page-with-contextual-sidebar' if defined?(@left_sidebar) && @left_sidebar
    class_name << 'page-with-icon-sidebar' if collapsed_sidebar? && @left_sidebar
    class_name -= ['right-sidebar-expanded'] if defined?(@right_sidebar) && !@right_sidebar

    class_name.join(' ')
  end

end
