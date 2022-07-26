class AddYearToUserclues < ActiveRecord::Migration[6.1]
  def change
    add_column :userclues, :year, :integer
  end
end
