class Api::KidsController < ApplicationController
    before_action :set_kid, only: [:show, :destroy, :update]
  
    def index
      render json: Kid.all
    end
  
    def show
      render json: @kid
    end
  
    def destroy
      @kid.destroy
      render json: @kid
    end
  
    def create
      @kid = Kid.new(kid_params)
      if (@kid.save)
        render json: @kid
      else
        render json: { error: @kid.errors }, status: 422
      end
    end
  
    def update
      if (@kid.update(kid_params_update))
        render json: @kid
      else
        render json: { error: @kid.errors }, status: 422
      end
    end
  
    private
  
    def set_kid
      @kid = Kid.find(params[:id])
    end
  
    def kid_params
      params.require(:kid).permit(:name, :birthdate, :user_id)
    end
  
    def kid_params_update
      params.require(:kid).permit(:name, :birthdate)
    end
  
  end
  

