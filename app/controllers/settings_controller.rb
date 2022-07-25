# frozen_string_literal: true

class SettingsController < Settings::ApplicationController
  before_action :user
  before_action :authorize_change_username!, only: :update_username

  def show
  end

  def update
    respond_to do |format|
      result = Users::UpdateService.new(current_user, user_params.merge(user: @user)).execute(check_password: true)

      if result[:status] == :success
        message = s_("Profiles|Profile was successfully updated")

        format.html { redirect_back_or_default(default: { action: 'show' }, options: { notice: message }) }
        format.json { render json: { message: message } }
      else
        format.html { redirect_back_or_default(default: { action: 'show' }, options: { alert: result[:message] }) }
        format.json { render json: result }
      end
    end
  end

  def update_username
    result = Users::UpdateService.new(current_user, user: @user, username: username_param).execute

    respond_to do |format|
      if result[:status] == :success
        message = s_("Profiles|Username successfully changed")

        format.html { redirect_back_or_default(default: { action: 'show' }, options: { notice: message }) }
        format.json { render json: { message: message }, status: :ok }
      else
        message = s_("Profiles|Username change failed - %{message}") % { message: result[:message] }

        format.html { redirect_back_or_default(default: { action: 'show' }, options: { alert: message }) }
        format.json { render json: { message: message }, status: :unprocessable_entity }
      end
    end
  end

  private

  def user
    @user = current_user
  end

  def authorize_change_username!
    return render_404 unless @user.can_change_username?
  end

  def username_param
    @username_param ||= user_params.require(:username)
  end

  # @todo Need to change
  def user_params_attributes
    [
      :avatar,
      :bio,
      :email,
      :role,
      :gitpod_enabled,
      :hide_no_password,
      :hide_no_ssh_key,
      :hide_project_limit,
      :linkedin,
      :location,
      :name,
      :public_email,
      :commit_email,
      :skype,
      :twitter,
      :username,
      :website_url,
      :organization,
      :private_profile,
      :include_private_contributions,
      :timezone,
      :job_title,
      :pronouns,
      :pronunciation,
      :validation_password,
      status: [:emoji, :message, :availability]
    ]
  end

  def user_params
    @user_params ||= params.require(:user).permit(user_params_attributes)
  end

end
