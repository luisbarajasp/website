class ProjectsController < ApplicationController

  before_action :authenticate_admin!, except: [:index,:show]

  def index
  end

  def new
  end

  def create
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def project_params
      params.require(:project).permit(:title,:description,:image)
  end
end
