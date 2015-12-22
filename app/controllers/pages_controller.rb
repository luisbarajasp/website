class PagesController < ApplicationController
  def welcome
    @admin = Admin.find(1)
    @projects = Project.all.order('created_at DESC')
  end
end
