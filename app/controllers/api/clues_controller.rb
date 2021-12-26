class Api::CluesController < ApplicationController
  # :authenticate_user! is defined by devise_token_auth
  # check if token is valid
  before_action :authenticate_user!

  def index 
    render json: User.unanswered_clues(current_user.completed_clues)
  end

  def update
    # add id to array
    current_user.completed_clues << params[:id].to_i
    # save to db
    current_user.save 
  end


end
