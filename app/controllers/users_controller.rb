class UsersController < ApplicationController
  skip_before_action :authorize, only: %i[create profile]
  
  def index
    render json: User.all, status: :ok
  end

  def create
    user = User.create!(user_params)
    user.update(display_name: user.username)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def update
    user = User.find_by(username: params[:username])
    user.update(user_params)
    render json: user, status: :accepted
  end

  def destroy
  end

  def show
  end

  private

  def user_params
    params.permit(:username, :password, :icon, :display_name, :bio, :producer)
  end
end
