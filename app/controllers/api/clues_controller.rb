class Api::CluesController < ApplicationController
  # :authenticate_user! is defined by devise_token_auth
  # check if token is valid
  before_action :authenticate_user!

  def index 
    render json: User.unanswered_clues(current_user.completed_clues)
  end

end
