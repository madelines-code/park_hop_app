Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    get '/users', to: 'users#index'
    get '/users/:id', to: 'users#show'
    get "/clues/all", to: "clues#all"
    get "/userclues/:id", to: "userclues#myclues"
    resources :parks
    resources :clues
    resources :kids
    resources :userclues
    put '/users/profile_image', to:'users#profile_image'
  end

  get '*other', to: 'static#index'

end
