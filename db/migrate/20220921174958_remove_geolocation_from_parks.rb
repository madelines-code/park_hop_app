class RemoveGeolocationFromParks < ActiveRecord::Migration[6.1]
  def change
    remove_column :parks, :geolocation, :string
  end
end
