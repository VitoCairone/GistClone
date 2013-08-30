class Favorite < ActiveRecord::Base
  attr_accessible :user_id, :gist_id

  validates_uniqueness_of :user_id, scope: :gist_id

  belongs_to :user
  belongs_to :gist
end
