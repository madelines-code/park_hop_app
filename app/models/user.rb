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

  #class method
  def self.unanswered_clues (ids)
    ids = ids.empty? ? [0] : ids 
    Clue.where("id NOT IN (?)", ids).order("RANDOM()")
  end
  def self.completed_clues (ids)
    ids = ids.empty? ? [0] : ids 
    Clue.where("id NOT IN (?)", ids)
  end

  def get_completed_clues
    ids = self.completed_clues.empty? ? [0] : completed_clues
    Clue.where("id NOT IN (?)", ids)
  end

end
