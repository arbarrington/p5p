class OrdersController < ApplicationController
  def index
    render json: Order.all, status: :ok
  end
  def show
  end
  def create
    order = Order.create!(order_params)
    render json: order, status: :created
  end
  def update
  end
  def destroy
  end
  private
  def order_params
    params.permit(:first_name, :last_name, :email, :phone, :cart, :price, :comment, :delivery_address, :user_id)
  end

end
