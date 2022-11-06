class ProductsController < ApplicationController
  def index
    render json: Product.all, status: :ok
  end

  def show 
    product = Product.find_by(id: params[:id])
    render json: product, status: :ok
  end

  def create 
    product = Product.create!(product_params)
    render json: product, status: :created
  end

  def update
    product = Product.find_by(id: params[:id])
    product.update!(product_params)
    render json: product, status: :accepted
  end

  def destroy
    Product.find_by(id: params[:id]).destroy
  end

  private

  def product_params
    params.permit(:name, :price, :unit, :description, :attachment, :stocked, :farm_id)
  end
end
