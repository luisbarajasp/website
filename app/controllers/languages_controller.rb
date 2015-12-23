class LanguagesController < ApplicationController
  def index
      @languages = Language.all.order('name ASC')
  end

  def new
      @language = Language.new
  end

  def create
      @language = Language.new language_params

      if @language.save
          redirect_to languages_path, notice: 'Language saved succesfully.'
      else
          render 'new', notice: 'Error try again.'
      end
  end

  def edit
      @language = Language.find(params[:id])
  end

  def update
      @language = Language.find(params[:id])
        respond_to do |f|
          if @language.update(language_params)
            f.html {redirect_to languages_path, notice: "Language updated"}
            f.json { render :show, status: :ok, location: @language }
          else
            f.html { render :edit }
            f.json { render json: @language.errors, status: :unprocessable_entity }
          end
        end
  end

  def destroy
    @language = Language.find(params[:id])
    if @language.present?
      @language.destroy
    end
    redirect_to languages_path
  end

  private

  def language_params
      params.require(:language).permit(:name)
  end
end
