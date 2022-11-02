# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding Farms"
farms = [
  {
    name: "Barrington Farms",
    location: "200 Main St., Denver, CO, 80202",
    message: "Hello! We are an independent, organic, and regenerative agricultural operation specialized in poultry, and offering a variety of seasonal produce.",
    website: "google.com",
    banner: ""
  },
  {
    name: "Merrihew Mews",
    location: "201 Main St., Denver, CO, 80202",
    message: "Howdy neighbor! We hope you enjoy the fresh, natural, locally-grown and -raised produce that we have to offer. Come see us anytime!",
    website: "google.com",
    banner: ""
  },
  {
    name: "Ball Foods",
    location: "202 Main St., Denver, CO, 80202",
    message: "We are a small regenerative operation here to offer you a delicious variety of vegetables, meats, spices, and condiments - enjoy!",
    website: "google.com",
    banner: ""
  },
  {
    name: "Darby Fields",
    location: "203 Main St., Denver, CO, 80202",
    message: "We are known for our beef, honey and tomatoes... don't let that stop you from trying our other, lesser-known products!",
    website: "google.com",
    banner: ""
  },
  {
    name: "Harris Agricultural Supply Co.",
    location: "204 Main St., Denver, CO, 80202",
    message: "Enjoy any of our produce here on FM, or come on down and eat a farm-fresh meal at our restaurant! (No, we are not a petting zoo.)",
    website: "google.com",
    banner: ""
  },
]

Farm.destroy_all
Farm.create(farms)

puts "Done!"

