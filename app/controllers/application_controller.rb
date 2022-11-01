class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record_response
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    # ! TEMP "ADMIN" ACCOUNT THAT SKIPS AUTH
    # @current_user = User.find_by(id: 1)

    render json: { errors: ['Not authorized'] }, status: :unauthorized unless @current_user
  end

  def invalid_record_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found_response(exception)
    puts exception
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end
end
