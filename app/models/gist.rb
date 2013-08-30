class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id

  belongs_to :user
  has_many :favorites
  has_many :favoriters, through: :favorites, source: :user
  has_many :gist_files

  accepts_nested_attributes_for :gist_files
end
