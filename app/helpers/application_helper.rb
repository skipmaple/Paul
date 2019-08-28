module ApplicationHelper

  # 根据所在的页面返回完整的标题
  def full_title(title = "")
    base_title = "Setaria"
    if title.present?
      title + " | " + base_title
    else
      base_title
    end
  end

end
