class HomeController < ApplicationController
  def index
  end

  def user_info
    render json: current_user
  end
end
