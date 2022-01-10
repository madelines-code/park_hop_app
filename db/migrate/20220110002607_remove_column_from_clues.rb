class RemoveColumnFromClues < ActiveRecord::Migration[6.1]
  def change
    remove_column :clues, :submitted_answer, :string
  end
end
