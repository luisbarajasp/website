Rails.application.routes.draw do

    resources :languages, except: [:show]

    resources :contacts, only: [:create,:new]

    get 'pages/welcome'

    devise_for :admins
    #, :skip => :registrations
    resources :projects

    get '*path' => redirect('/')

    root 'pages#welcome'

end
