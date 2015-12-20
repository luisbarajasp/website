class Admin < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable

  has_attached_file :avatar, styles: { medium: "200x", thumb: "100x100>"}, default_url: "defaultImage.png"
  validates_attachment_content_type :avatar, content_type: %w(image/jpeg image/jpg image/png)

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :projects, dependent: :destroy
end
