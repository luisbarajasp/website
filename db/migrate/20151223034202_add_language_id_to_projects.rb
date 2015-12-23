class AddLanguageIdToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :language_id, :integer
  end
end
