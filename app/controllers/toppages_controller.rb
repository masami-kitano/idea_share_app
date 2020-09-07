class ToppagesController < ApplicationController
  def index
    @users = User.all
      
    @category = Category.new
    @categories = Category.all
  end
end
