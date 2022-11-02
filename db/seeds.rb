# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding Users"
users = [
  {
    username: "farmerbob",
    display_name: "Bob",
    bio: "Growing the good stuff since 1984. I own four farms: Merrihew, Darby, Harris, and Ball",
    producer: true,
    password: "123456"
  },
  {
    username: "farmerjohn",
    display_name: "John",
    bio: "I grow food at Barrington Farms",
    producer: true,
    password: "123456"
  },
  {
    username: "consumerjoe",
    display_name: "Joe",
    bio: "I eat healthy, fresh, local food",
    producer: false,
    password: "123456"
  }
]

puts "Seeding Farms"
farms = [
  {
    name: "Barrington Farms",
    location: "200 Main St., Denver, CO, 80202",
    message: "Hello! We are an independent, organic, and regenerative agricultural operation specialized in poultry, and offering a variety of seasonal produce.",
    website: "google.com",
    banner: "",
    user_id: 2
  },
  {
    name: "Merrihew Mews",
    location: "201 Main St., Denver, CO, 80202",
    message: "Howdy neighbor! We hope you enjoy the fresh, natural, locally-grown and -raised produce that we have to offer. Come see us anytime!",
    website: "google.com",
    banner: "",
    user_id: 1
  },
  {
    name: "Ball Foods",
    location: "202 Main St., Denver, CO, 80202",
    message: "We are a small regenerative operation here to offer you a delicious variety of vegetables, meats, spices, and condiments - enjoy!",
    website: "google.com",
    banner: "",
    user_id: 1
  },
  {
    name: "Darby Fields",
    location: "203 Main St., Denver, CO, 80202",
    message: "We are known for our beef, honey and tomatoes... don't let that stop you from trying our other, lesser-known products!",
    website: "google.com",
    banner: "",
    user_id: 1
  },
  {
    name: "Harris Agricultural Supply Co.",
    location: "204 Main St., Denver, CO, 80202",
    message: "Enjoy any of our produce here on FM, or come on down and eat a farm-fresh meal at our restaurant! (No, we are not a petting zoo.)",
    website: "google.com",
    banner: "",
    user_id: 1
  }
]


User.create!(users)
# Farm.destroy_all
Farm.create!(farms)
# User.destroy_all


puts "Done!"

