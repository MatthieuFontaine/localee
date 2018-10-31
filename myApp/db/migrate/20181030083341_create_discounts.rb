class CreateDiscounts < ActiveRecord::Migration[5.2]
  def change
    create_table :discounts do |t|
      t.string :company
      t.string :typeOfDiscount
      t.integer :valueOfDiscount
      t.integer :percentageOfDiscount
      t.string :titleOfDiscount
      t.string :duration, null: 'default_duration'
      t.integer :numberOfDiscounts, null: 100
      t.text :description
      t.text :conditions

      t.timestamps
    end
  end
end
