class RelationshipsController < ApplicationController
  def create
    user = User.find(params[:follow_id])
    current_user.follow(user)
    flash[:success] = user.name + 'のアイデアを表示しました。'
    redirect_back(fallback_location: root_path)
  end

  def destroy
    user = User.find(params[:follow_id])
    current_user.unfollow(user)
    flash[:success] = user.name + 'のアイデアを非表示にしました。'
    redirect_back(fallback_location: root_path)
  end
end
