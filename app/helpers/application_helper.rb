module ApplicationHelper

  # 根据所在的页面返回完整的标题
  def full_title(title = "")
    base_title = t(:base_title)
    if title.present?
      title + " | " + base_title
    else
      base_title
    end
  end

end
