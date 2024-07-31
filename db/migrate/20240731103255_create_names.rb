class CreateNames < ActiveRecord::Migration[7.1]
  def change
    create_table :names do |t|
      t.string :author
      t.integer :price
      t.string :category

      t.timestamps
    end
  end
end