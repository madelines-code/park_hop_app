class Park < ApplicationRecord
  has_many :clues, dependent: :destroy
end
