# Starter project winter 2021

This project is meant to be a starting for homework/projects.
It is Rails 6 API app with React frontend.

### Github setup
in database.yml 
replace all repository name with new name
Rails db:create
Bundle
Rails db:migrate
Rails db:seed
Git remote remove origin
Git remote -v (check it’s gone)
Install new repo (git remote add origin …..URL)
Rails s -p 3001

### Setup Instructions
in client run yarn
outside of client:
build out models and controllers
add any fields to user
build out seeds file 
seed
add has many relationships in models

### Add any seed items to auth
in ApplicationController: 
```ruby 
before_action :configure_permitted_parameters, if: :devise_controller?

protected

def configure_permitted_parameters
  added_attrs = [:username, :email, :password, :password_confirmation]
  devise_parameter_sanitizer.permit :sign_up, keys: added_attrs
  devise_parameter_sanitizer.permit :account_update, keys: added_attrs
end
```
### Build out controllers
