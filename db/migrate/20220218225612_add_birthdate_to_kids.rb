class AddBirthdateToKids < ActiveRecord::Migration[6.1]
  def change
    add_column :kids, :birthdate, :date
  end
end
