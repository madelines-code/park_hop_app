class Api::ParksController < ApplicationController
    before_action :set_park, only: [:show, :update, :destroy]
  
    def index
      parks = Park.all
      render json: parks
    end
  
    def show
      render json: @park
    end
  
    def create
      @park = Park.new(park_params)
  
      if @park.save
        render json: @park
      else
        render json: {error: @park.errors}, status: 422
      end
    end
  
    def update
      if (@park.update(park_params))
        render json: @park
      else
        render json: {error: @park.errors}, status: 422
      end
    end
  
    def destroy
      @park.destroy
      render json: @park
    end
  
    private
      def set_park
        @park = Park.find(params[:id])
      end
  
      def park_params
        params.require(:park).permit(:name, :geolocation)
      end

  
end
