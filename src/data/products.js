const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    category: "Electronics",
    description: "Premium wireless headphones with noise cancellation and exceptional sound quality.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 2,
    name: "4K Monitor",
    price: 249.99,
    category: "Electronics",
    description: "Ultra HD 4K monitor with crisp image quality and vibrant colors.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 3,
    name: "Fitness Tracker",
    price: 89.99,
    category: "Electronics",
    description: "Advanced fitness tracker with heart rate monitoring and sleep tracking features.",
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1576971785912-d09c3b1822dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    featured: false
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 199.99,
    category: "Fashion",
    description: "Premium leather jacket with stylish design and excellent durability.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    featured: true
  },
  {
    id: 5,
    name: "Designer Dress",
    price: 159.99,
    category: "Fashion",
    description: "Elegant designer dress perfect for formal occasions and special events.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80",
    featured: false
  },
  {
    id: 6,
    name: "Casual Sneakers",
    price: 79.99,
    category: "Fashion",
    description: "Comfortable casual sneakers for everyday wear with modern design.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
    featured: true
  },
  {
    id: 7,
    name: "Stainless Steel Cookware Set",
    price: 149.99,
    category: "Home & Kitchen",
    description: "Complete stainless steel cookware set with non-stick coating.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 8,
    name: "Modern Coffee Table",
    price: 119.99,
    category: "Home & Kitchen",
    description: "Stylish modern coffee table with minimalist design for your living room.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 9,
    name: "Smart Refrigerator",
    price: 1299.99,
    category: "Home & Kitchen",
    description: "Smart refrigerator with advanced features and energy-efficient operation.",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 10,
    name: "Natural Face Cream",
    price: 24.99,
    category: "Beauty",
    description: "Organic face cream made with natural ingredients for healthy skin.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
    featured: true
  },
  {
    id: 11,
    name: "Premium Makeup Kit",
    price: 59.99,
    category: "Beauty",
    description: "Complete makeup kit with high-quality products for professional results.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    featured: false
  },
  {
    id: 12,
    name: "Luxury Perfume",
    price: 79.99,
    category: "Beauty",
    description: "Exquisite luxury perfume with long-lasting scent and elegant packaging.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    featured: false
  },
  {
    id: 13,
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports & Outdoors",
    description: "High-quality yoga mat with excellent grip and comfortable cushioning.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 14,
    name: "Mountain Bike",
    price: 499.99,
    category: "Sports & Outdoors",
    description: "Durable mountain bike with premium components for off-road adventures.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
    featured: true
  },
  {
    id: 15,
    name: "Camping Tent",
    price: 149.99,
    category: "Sports & Outdoors",
    description: "Spacious camping tent that's easy to set up and weather-resistant.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 16,
    name: "Educational Toys Set",
    price: 39.99,
    category: "Kids & Toys",
    description: "Educational toys that make learning fun and engaging for children.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1545997281-2cfe4d4b740f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 17,
    name: "Plush Teddy Bear",
    price: 19.99,
    category: "Kids & Toys",
    description: "Soft and cuddly plush teddy bear that children will love.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1562040506-a9b32cb51b94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 18,
    name: "Remote Control Car",
    price: 49.99,
    category: "Kids & Toys",
    description: "Fast and durable remote control car for endless fun.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  // Additional products for Home & Kitchen
  {
    id: 19,
    name: "Electric Kettle",
    price: 34.99,
    category: "Home & Kitchen",
    description: "Fast-heating electric kettle with auto shut-off feature.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1594224457860-23f358c49a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 20,
    name: "Blender",
    price: 49.99,
    category: "Home & Kitchen",
    description: "Powerful blender for smoothies, soups, and more.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 21,
    name: "Bedding Set",
    price: 79.99,
    category: "Home & Kitchen",
    description: "Luxurious 100% cotton bedding set for a comfortable night's sleep.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    featured: false
  },
  // Additional products for Sports & Outdoors
  {
    id: 22,
    name: "Basketball",
    price: 29.99,
    category: "Sports & Outdoors",
    description: "Professional quality basketball with excellent grip.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1518063319789-7217e6706b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    featured: false
  },
  {
    id: 23,
    name: "Hiking Backpack",
    price: 89.99,
    category: "Sports & Outdoors",
    description: "Durable hiking backpack with multiple compartments.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1469395446868-fb6a048d5ca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1767&q=80",
    featured: false
  },
  {
    id: 24,
    name: "Fishing Rod",
    price: 69.99,
    category: "Sports & Outdoors",
    description: "Premium fishing rod for both beginners and experienced anglers.",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80",
    featured: false
  },
  // Additional products for Kids & Toys
  {
    id: 25,
    name: "Building Blocks Set",
    price: 24.99,
    category: "Kids & Toys",
    description: "Creative building blocks for endless play possibilities.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 26,
    name: "Dollhouse",
    price: 59.99,
    category: "Kids & Toys",
    description: "Detailed dollhouse with furniture and accessories.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1599147977234-a6833f1512b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    featured: false
  },
  {
    id: 27,
    name: "Kids Bicycle",
    price: 79.99,
    category: "Kids & Toys",
    description: "Safe and durable bicycle designed for children.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1620331946646-c66bcf268096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  // Additional Home & Kitchen products
  {
    id: 28,
    name: "Air Fryer",
    price: 89.99,
    category: "Home & Kitchen",
    description: "Modern air fryer for healthier cooking with less oil.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 29,
    name: "Kitchen Knife Set",
    price: 69.99,
    category: "Home & Kitchen",
    description: "Professional kitchen knife set with premium steel blades.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1593618666721-50ce70223e66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: false
  },
  {
    id: 30,
    name: "Coffee Maker",
    price: 59.99,
    category: "Home & Kitchen",
    description: "Programmable coffee maker with thermal carafe.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576158129605-31c4a5b9b9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    featured: true
  },
  // Additional Sports & Outdoors products
  {
    id: 31,
    name: "Tennis Racket",
    price: 79.99,
    category: "Sports & Outdoors",
    description: "Professional tennis racket with balanced weight and control.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1617381393664-4f2d2d7e5566?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    featured: false
  },
  {
    id: 32,
    name: "Running Shoes",
    price: 99.99,
    category: "Sports & Outdoors",
    description: "Lightweight running shoes with supportive cushioning.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 33,
    name: "Fitness Dumbbells",
    price: 49.99,
    category: "Sports & Outdoors",
    description: "Adjustable dumbbell set for home workouts.",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    featured: false
  },
  // Additional Kids & Toys products
  {
    id: 34,
    name: "Kids Science Kit",
    price: 34.99,
    category: "Kids & Toys",
    description: "Educational science kit with fun experiments for children.",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    featured: true
  },
  {
    id: 35,
    name: "Art Supply Set",
    price: 29.99,
    category: "Kids & Toys",
    description: "Complete art supply set for creative children.",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    featured: false
  },
  {
    id: 36,
    name: "Puzzle Collection",
    price: 19.99,
    category: "Kids & Toys",
    description: "Set of challenging puzzles for different age groups.",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1595815796144-ed90b9c09e36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    featured: false
  }
];
