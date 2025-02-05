class Category < ApplicationRecord
  belongs_to :user, optional: true
  
  has_many :posts, dependent: :restrict_with_error
  
  validates :name, presence: true, length: { maximum: 255}
  
end
