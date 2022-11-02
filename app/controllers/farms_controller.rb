class FarmsController < ApplicationController
  def index
    render json: Farm.all, status: :ok
  end
end
