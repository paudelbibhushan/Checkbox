class CreateBooks < ActiveRecord::Migration[7.1]
  def change
    create_table :books do |t|
      t.string :name
      t.string :author
      t.integer :price
      t.string :category

      t.timestamps
    end
  end
end
