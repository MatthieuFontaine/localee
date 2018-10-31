class CreateDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :discounts do |t|
      t.string :company
      t.string :type
      t.integer :value
      t.integer :discount_precentage
      t.string :title
      t.string :duration, null: 'default_duration'
      t.integer :numberOfDiscounts, null: 100
      t.text :description
      t.text :conditions

      t.timestamps
    end
  end
end
