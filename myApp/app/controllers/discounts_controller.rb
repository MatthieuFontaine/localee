class DiscountsController < ApplicationController
  def new
    @discount = Discount.new
  end

  def create
    @discount = Discount.new(discount_params)
    if @discount.save
      flash[:success] = "Votre réduction a été ajoutée."
      redirect_to new_discount_path
    else
      flash[:error] = "Une erreur est survenue. Veuillez Réessayer."
      redirect_to new_discount_path
    end
  end

  private # This is a private section of code
    def discount_params
      params.require(:discount).permit(:company, :typeOfDiscount, :valueOfDiscount, :percentageOfDiscount, :titleOfDiscount, :description, :conditions)
    end
end
