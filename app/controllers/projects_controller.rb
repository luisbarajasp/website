class ProjectsController < ApplicationController

  before_action :authenticate_admin!, except: [:index,:show]

  def index
      @projects = Project.all.order('created_at DESC')
  end

  def new
      @project = Project.new
  end

  def create
      @project = Project.new project_params
      @project.admin_id = current_admin.id

      if @project.save
          redirect_to root_path, notice: "Project saved succesfully."
      else
          render 'new', notice: "Error: try again."
      end
  end

  def show
      @project = Project.friendly.find(params[:id])
  end

  def edit
      @project = Project.friendly.find(params[:id])
  end

  def update
      @project = Project.friendly.find(params[:id])
      respond_to do |f|
			if @project.update(project_params)
				f.html {redirect_to root_path, notice: "Project updated succesfully."}
				f.json { render :show, status: :ok, location: @project }
			else
				f.html { render :edit }
				f.json { render json: @project.errors, status: :unprocessable_entity }
			end
		end
  end

  def destroy
      @project = Project.friendly.find(params[:id])
      @project.destroy
	  redirect_to root_path
  end

  private

  def project_params
      params.require(:project).permit(:title,:subtitle,:description,:image)
  end
end
