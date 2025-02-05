Rails.application.routes.draw do
  root to: 'toppages#index'
  
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  
  get 'signup', to: 'users#new'
  resources :users, only: [:index, :show, :new, :create, :update, :destroy] do
    member do
      get :followings
      get :followers
      
      get :likes, to: :fav_posts
    end
  end
  
  resources :categories, only: [:create, :update, :destroy] 
  resources :posts, only: [:create, :update, :destroy] 
  resources :comments, only: [:create, :update, :destroy]
  resources :relationships, only: [:create, :destroy]
  resources :favorites, only: [:create, :destroy]
end
