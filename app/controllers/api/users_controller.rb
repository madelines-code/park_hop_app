class Api::UsersController < ApplicationController
  # authenticate user is defined by devise token auth
    before_action :set_user, only: [:show, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :search, :show]


  def index
    other_users = User.all
    render json: other_users
  end


  def show
    render json: @user
  end

  # def create
  #   @user = User.new(user_params)

  #   if (@user.save)
  #     render json: @user
  #   else
  #     render json: {error: @user.errors}, status: 422
  #   end
  # end

  # def update
  #   if (@user.update(user_params))
  #     render json: @user
  #   end

  # end




    def profile_image
      # puts 'current_user:'
      # p current_user
      # p @user

      # puts 'params'
      # p params

      file = params[:fileYo]

      if file 
          begin
              puts "saving to cloudinary"
              cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
            rescue => e
              puts "error occurred"
              p e
              render json: {errors: e}, status: 422
              return
          end
      end

      if cloud_image && cloud_image['secure_url']
          current_user.image = cloud_image['secure_url']
        end
        
        current_user.name = params[:name]
      if current_user.save
        p 'current user'
        p current_user
          render json: current_user
      else
          render json: {errors: e}, status: 422
      end
  end

  def destroy
    @user.destroy
    render json: @user
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :password, :name, :image, :kids, :id, :file )
    end

end
