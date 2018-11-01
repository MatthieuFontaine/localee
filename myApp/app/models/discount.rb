class Discount < ActiveRecord::Base
  validates :company, presence: true
  validates :typeOfDiscount, presence: true
  validates :valueOfDiscount, presence: true
  validates :percentageOfDiscount, presence: true
  validates :titleOfDiscount, presence: true
  validates :description, presence: true
  validates :conditions, presence: true

end
