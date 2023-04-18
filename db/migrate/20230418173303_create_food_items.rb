class CreateFoodItems < ActiveRecord::Migration[7.0]
  def change
    create_table :food_items do |t|
      t.string :name
      t.integer :quantity
      t.string :expiration_date
      t.string :location
      t.text :image
      t.integer :user_id

      t.timestamps
    end
  end
end
