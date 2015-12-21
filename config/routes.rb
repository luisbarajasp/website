Rails.application.routes.draw do

  get 'pages/welcome'

  devise_for :admins
    resources :projects

    get '*path' => redirect('/')

    root 'pages#welcome'

end
