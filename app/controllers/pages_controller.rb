class PagesController < ApplicationController
  def welcome
    @admin = Admin.find(1)
  end
end
