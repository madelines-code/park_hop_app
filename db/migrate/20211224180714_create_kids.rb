class CreateKids < ActiveRecord::Migration[6.1]
  def change
    create_table :kids do |t|
      t.string :name
      t.integer :age
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
