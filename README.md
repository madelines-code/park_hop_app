# Starter project winter 2021

This project is meant to be a starting for homework/projects.
It is Rails 6 API app with React frontend.

### Setup Instructions
build out models and controllers
add any fields to user
build out seeds file 
seed

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