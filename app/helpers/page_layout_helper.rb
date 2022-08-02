# frozen_string_literal: true

module PageLayoutHelper
  def sidebar(name = nil)
    if name
      @sidebar = name
    else
      @sidebar
    end
  end

  def nav(name = nil)
    if name
      @nav = name
    else
      @nav
    end
  end

  def container_class
    css_class = ["container-fluid"]
    css_class.join(' ')
  end

end
