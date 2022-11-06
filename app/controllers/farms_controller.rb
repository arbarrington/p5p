class FarmsController < ApplicationController
  def index
    render json: Farm.all,  status: :ok
  end

  def create
    farm = Farm.create!(farm_params)
    render json: farm, status: :created
  end

  def update
    farm = Farm.find_by(id: params[:id])
    farm.update(farm_params)
    render json: farm, status: :accepted
  end

  private

  def farm_params
    params.permit(:name, :location, :banner, :website, :message, :user_id)
  end
end
