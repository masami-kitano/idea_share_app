class ToppagesController < ApplicationController
  def index
    @users = User.all
      
    @category = Category.new
    @categories = Category.all

    @post = current_user.posts.build

    @comment = current_user.comments.build
  end
end
