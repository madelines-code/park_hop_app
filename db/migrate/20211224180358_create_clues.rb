class CreateClues < ActiveRecord::Migration[6.1]
  def change
    create_table :clues do |t|
      t.text :question
      t.text :answer
      t.string :status
      t.belongs_to :park, null: false, foreign_key: true

      t.timestamps
    end
  end
end
