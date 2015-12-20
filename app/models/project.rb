class Project < ActiveRecord::Base

    has_attached_file :image, styles: { medium: "250x", thumb: "100x100>" }, default_url: "pinterest-pin.png"
	validates_attachment_content_type :image, content_type: %w(image/jpeg image/jpg image/png)

    belongs_to :admin
end
