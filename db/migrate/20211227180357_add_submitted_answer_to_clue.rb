class AddSubmittedAnswerToClue < ActiveRecord::Migration[6.1]
  def change
    add_column :clues, :submitted_answer, :string
  end
end
