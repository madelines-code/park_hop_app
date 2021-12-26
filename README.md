# Starter project winter 2021

This project is meant to be a starting for homework/projects.
It is Rails 6 API app with React frontend.
### Clone repo
git clone ...
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



I'm starting a project that will be an app for a program called Park Hop. In summary, it's a scavenger hunt where people go around to different parks and look for answers to clues. (This is something that my last job needed but didn't have) So far I have built some models which you can see the relationship of here: https://www.figma.com/file/okjOYq0OpHhAbnhET2DMp9/Park-Hop-Database?node-id=0%3A1
My goal is to build a progress area (my CluesCompleted component) that shows dots with different colors for the status "answered" or "unanswered". (I want to eventually have some form validation where the answers can be automatically marked correct or incorrect, but in my mind there's no way to account for all of the varied answers people might type in. Unless it's some kind of Google level stuff... )
This is what I want my progress map to look like: https://www.figma.com/file/98NAuw7xtlQzuQGn4IkVHx/Park-Hop-Desktop-Layout
In order to do this I need to be able to assign colors to my clue status. I also need to be able to have each user have their own set of clues. 
