class CreateUserclues < ActiveRecord::Migration[6.1]
  def change
    create_table :userclues do |t|
      t.boolean :completed
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :clue, null: false, foreign_key: true

      t.timestamps
    end
  end
end
