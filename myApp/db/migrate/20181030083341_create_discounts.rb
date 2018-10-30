class CreateDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :discounts do |t|
      t.string :company
      t.string :type
      t.integer :value
      t.string :duration
      t.integer :numberOfDiscounts
      t.text :desciption
      t.text :conditions

      t.timestamps
    end
  end
end
