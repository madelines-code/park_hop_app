# Starter project winter 2021

This project is meant to be a starting for homework/projects.
It is Rails 6 API app with React frontend.

### Setup Instructions
Install gem files:

```ruby
gem "devise_token_auth"

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'pry-rails'
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'faker', :git => 'https://github.com/faker-ruby/faker.git', :branch => 'master'
end
```

$ bundle

### Models
$ rails g devise_token_auth:install User api/auth

Users.rb - add extend Devise::Models
```ruby
class User < ActiveRecord::Base
  extend Devise::Models
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
```
$ rails g migration add_trackable_to_users

in migration file _add_trackable_to_users.rb
```ruby
  def change
        ## Trackable
        add_column :users, :sign_in_count, :integer, :default => 0
        add_column :users, :current_sign_in_at, :datetime
        add_column :users, :last_sign_in_at, :datetime
        add_column :users, :current_sign_in_ip, :string
        add_column :users, :last_sign_in_ip, :string
  end
```

rails db:migrate 

### Seeds
BUILD seeds file
rails db:create db:migrate db:seed

### Client Side
$ yarn create react-app client
$ cd client
$ yarn add axios
$ yarn add react-router-dom
$ mkdir src/components
$ mkdir src/providers

in client/package.json add the proxy as below:
"proxy": "http://localhost:3001",
"scripts": {

in Index.js
replace <React.StrictMode> with <BrowserRouter>

Add Semantic or whichever component library you want (Bootstrap, Material, Antd)

### import devise axios
$ yarn add devise axios
