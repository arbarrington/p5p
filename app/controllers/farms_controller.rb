class FarmsController < ApplicationController
  def index
    render json: Farm.all,  status: :ok
  end

  def create
    farm = Farm.create!(farm_params)
    render json: farm, status: :created
  end

  private

  def farm_params
    params.permit(:name, :location, :banner, :website, :message)
  end
end
