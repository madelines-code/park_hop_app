class Api::CluesController < ApplicationController
  # :authenticate_user! is defined by devise_token_auth
  # check if token is valid
  before_action :authenticate_user!

  def index
    clues = Clue.all
    render json: clues
  end

end
