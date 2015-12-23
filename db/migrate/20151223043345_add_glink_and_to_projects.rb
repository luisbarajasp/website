class AddGlinkAndToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :glink, :string
  end
end
