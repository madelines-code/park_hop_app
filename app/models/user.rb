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


#   SELECT users.id AS user_id, kids.name, kids.birthdate, kids.id, kids.created_at from users
# INNER JOIN kids ON users.id = kids.user_id 

def self.user_kids(id)
  select("users.id, k.name, k.birthdate, k.id AS kid_id")
  .join("INNER JOIN kids AS k ON users.id = k.user_id")
  .where("users.id = ?", id)
end

end
