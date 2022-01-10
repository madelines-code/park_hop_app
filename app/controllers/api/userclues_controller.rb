class Api::UsercluesController < ApplicationController

  before_action :set_userclue, only: [:show, :update, :destroy]
  
  def index
    userclues = Userclue.all
    render json: userclues
  end

  def myclues
    render json: Userclue.my_userclues(params[:id])
  end

  def show
    render json: @userclue
  end

  def update
    if (@userclue.update(userclue_params))
      render json: @userclue
    else
      render json: {error: @userclue.errors}, status: 422
    end
  end

  private
    def set_userclue
      @userclue = Userclue.find(params[:id])
    end

    def userclue_params
      params.require(:userclue).permit(:myanswer, :completed, :user_id)
    end

end
