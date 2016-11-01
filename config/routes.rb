Rails.application.routes.draw do

  root 'home#index'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get '/user_info', to: 'home#user_info'

  namespace :api do
    get '/posts', to: 'posts#index'
    get '/posts/:id', to: 'posts#show'

    post '/posts/new', to: 'posts#create'
    post '/posts/:id', to: 'posts#update'

    delete '/posts/:id', to: 'posts#destroy'
  end

  # NOTHING BELOW THIS
  get '*unmatched_route', to: 'home#index'
end
