class AddMyanswerToUserclues < ActiveRecord::Migration[6.1]
  def change
    add_column :userclues, :myanswer, :string, default: ""
  end
end
