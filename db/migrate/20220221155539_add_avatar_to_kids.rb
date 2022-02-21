class AddAvatarToKids < ActiveRecord::Migration[6.1]
  def change
    add_column :kids, :avatar, :string
  end
end
