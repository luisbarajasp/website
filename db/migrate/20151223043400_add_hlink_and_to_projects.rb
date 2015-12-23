class AddHlinkAndToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :hlink, :string
  end
end
