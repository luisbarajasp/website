class ContactsController < ApplicationController
    def create
        @contact = Contact.new(params[:contact])
        @contact.request = request
        if @contact.deliver
          redirect_to(root_path, :notice => "Thank you for contacting me. I will reply shortly!")
        else
          flash.now[:alert] = 'Cannot send message.'
        end
    end
end
