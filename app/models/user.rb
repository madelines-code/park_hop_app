# frozen_string_literal: true

class User < ActiveRecord::Base
  # now we can treat completed_clues as an array
  has_many :kids, dependent: :destroy
  has_many :clues, through: :userclues 
  serialize :completed_clues, Array
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User



end
