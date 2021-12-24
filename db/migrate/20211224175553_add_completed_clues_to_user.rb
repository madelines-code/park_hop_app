class AddCompletedCluesToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :completed_clues, :text
  end
end
