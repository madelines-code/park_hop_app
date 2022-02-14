# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require "faker"

# u1.kids.create(user_id: u1.id, name: Faker::Name.name, age: rand(12))
# u2.Kid.create(user_id: u2.id, name: Faker::Name.name, age: rand(12))
# u2.Kid.create(user_id: u2.id, name: Faker::Name.name, age: rand(12))
# u2.Kid.create(user_id: u2.id, name: Faker::Name.name, age: rand(12))
# u3.Kid.create(user_id: u3.id, name: Faker::Name.name, age: rand(12))
# u3.Kid.create(user_id: u3.id, name: Faker::Name.name, age: rand(12))
# u4.Kid.create(user_id: u4.id, name: Faker::Name.name, age: rand(12))
# u5.Kid.create(user_id: u5.id, name: Faker::Name.name, age: rand(12))
# u5.Kid.create(user_id: u5.id, name: Faker::Name.name, age: rand(12))
# u6.Kid.create(user_id: u6.id, name: Faker::Name.name, age: rand(12))



p1 = Park.create(name: 'Leroy Mathis Park', geolocation: '35.1019421784494, -82.1024914911515')
p2 = Park.create(name: 'Cleveland Park', geolocation: '34.96594230909251, -81.95060422934635')
p3 = Park.create(name: 'Tyger River Park', geolocation: '34.872637711342875, -82.10831128867699')
p4 = Park.create(name: 'Pavilion Recreation Complex', geolocation: '34.88510310155655, -82.30094502934814')
p5 = Park.create(name: 'Simpsonville City Park', geolocation: '34.73940510833818, -82.25118974653981')

c1 = Clue.create(park_id: p1.id, question: 'What color stripes are on the slide?', answer: 'blue, red, green' , status: 'unanswered')
c2 = Clue.create(park_id: p1.id, question: 'What is written on the corn hole boards?', answer: 'be a star' , status: 'unanswered')
c3 = Clue.create(park_id: p2.id, question: 'What color are the railings on the walkway from Cleveland Park to Berry Field?', answer: 'green' , status: 'unanswered')
c4 = Clue.create(park_id: p2.id, question: 'Go to the gazebo and look up. What is the ceiling made of?', answer: 'vines' , status: 'unanswered')
c5 = Clue.create(park_id: p3.id, question: 'How many fields are in the park?', answer: '3' , status: 'unanswered')
c6 = Clue.create(park_id: p3.id, question: 'What shape is stamped in the sidewalk leading up to the Clubhouse?', answer: 'square' , status: 'unanswered')
c7 = Clue.create(park_id: p4.id, question: 'Find the playground that has a picture of the world. Name two languages listed.', answer: 'Chinese, German, English, Portugese' , status: 'unanswered')
c8 = Clue.create(park_id: p4.id, question: 'On the small playground, find the musical instruments. Name one of them.', answer: 'bongos, guitar, piano, horn' , status: 'unanswered')
c9 = Clue.create(park_id: p5.id, question: 'There are 10 of us. I will help you balance walk along the path. Which one am I?', answer: 'stepping stone' , status: 'unanswered')

5.times do
  user = User.create(email: 'test@test.com', password: "moneybrain", name: Martha, image: 'https://robohash.org/voluptateseaut.png?size=300x300&set=set1')
  
 # each user will have a clue
  9.times do |i|
   Userclue.create(user_id: user.id, clue_id: i, completed: false)
  end
 end

puts "user clue SIZE: #{Userclue.all.length}"
puts "user SIZE: #{User.all.length}"
