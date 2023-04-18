user1 = User.where(email: 'trfmalpha@gmail.com').first_or_create(password: 'testing123', password_confirmation: 'testing123')


user1_food_items= [
 {
    name: "Milk", 
    quantity: 1, 
    expiration_date: "05/01/23", 
    location: "Refrigerator", 
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "Eggs",
    quantity: 6,
    expiration_date: "05/02/2023",
    location: "Refrigerator",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLL8kGZtxNRfY07BTX-nV8pqH3nRU3AlFUYw&usqp=CAU"
  },
  {
    name: "Water Bottles",
    quantity: 2,
    expiration_date: "07/01/2023",
    location: "Refrigerator",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKCMV373WnDfERkqLvrDw-kp3gny5neUxRQ&usqp=CAU"
  },
  {
    name: "Bread Loaf",
    quantity: 1,
    expiration_date: "04/28/2023",
    location: "Refrigerator",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzHPUb7DAY_J2wgrsaySMsIO10uZ-MJME0sgQ6OpPbWw_0YRRvR6HsRPkSejqWt8Lh9I&usqp=CAU"
  },
  {
    name: "Orange Juice",
    quantity: 1,
    expiration_date: "04/29/2023",
    location: "Refrigerator",
    image: "https://live.staticflickr.com/5281/13935567612_af1e49b959_b.jpg"
  },
  {
    name: "Cereal",
    quantity: 1,
    expiration_date: "05/27/2023",
    location: "Pantry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSMgZExHc7a7tsq8u-N74SPiWYTgNUBxH7ORjdQPXPcMyknUQUI64DsF9YjcjT_jhjRSE&usqp=CAU" 
  },
  {
    name: "Macaroni & Cheese",
    quantity: 4,
    expiration_date: "05/21/2023",
    location: "Pantry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETOH4trTIc-9HJJa0lJ1p9sRurpA4c5F0DQ&usqp=CAU"
  },
  {
    name: "Peanut Butter",
    quantity: 1,
    expiration_date: "06/02/2023",
    location: "Pantry",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1FLcoJrqFqISIoR0UZL_fPzRrH4vTw0nrzg&usqp=CAU"
  } 
]

user1_food_items.each do |food_item|
    user1.food_items.create(food_item)
    p "created: #{food_item}"
end

