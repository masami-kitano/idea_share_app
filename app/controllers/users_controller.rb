class UsersController < ApplicationController
  before_action :require_user_logged_in, only: [:index, :show, :followings, :followers]

  def index
    @users = User.order(id: :desc).page(params[:page]).per(25)
  end

  def show
    @categories = Category.all
    @user = User.find(params[:id])
    @posts = @user.posts.order(id: :desc).page(params[:page])
    @comment = current_user.comments.build
    counts(@user)
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      flash[:success] = 'ユーザを登録しました。'
      redirect_to @user
    else
      flash.now[:danger] = 'ユーザの登録に失敗しました。'
      render :new
    end
  end

  def update
    current_user.update(user_params)
    flash[:success] = 'プロフィールを更新しました'
    redirect_back(fallback_location: root_path)
  end

  def destroy
    if current_user.destroy
      flash[:success] = '退会しました。'
      redirect_back(fallback_location: root_path)
    else
      flash[:danger] = '退会できません。'
      redirect_back(fallback_location: root_path)
    end
  end

  def followings
    @user = User.find(params[:id])
    @followings = @user.followings.page(params[:page])
    counts(@user)
  end
  
  def followers
    @user = User.find(params[:id])
    @followers = @user.followers.page(params[:page])
    counts(@user)
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :image)
  end
end
