class OrdersController < ApplicationController
  def index
    render json: Order.all, status: :ok
  end
  def show
  end
  def create
  end
  def update
  end
  def destroy
  end
  private
  def order_params
  end

end
