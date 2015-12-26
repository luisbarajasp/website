class PagesController < ApplicationController
  def welcome
    @admin = Admin.find(1)
    @projects = Project.all.order('created_at DESC')
    @contact = Contact.new
    @languages = Language.all.order('name ASC')
  end

end
