const vendors = [
  {
    id: "kafe-halimah",
    name: "Kafe Mahallah Halimah",
    location: "Mahallah Halimah, Block PG, Ground Floor",
    openHours: "7:00 am - 10:00 pm",
    isOpen: true,
    menu: [
      {
        id: "f-1",
        name: "Tomyam Ayam",
        description: "Spicy chicken soup with rice",
        price: 7.5,
        category: "Rice",
        available: true,
      },
      {
        id: "f-2",
        name: "Shawarma Ayam",
        description: "Grilled chicken meat in a flatbread",
        price: 6,
        category: "Sandwiches",
        available: true,
      },
      {
        id: "f-3",
        name: "Ice Lemon Tea",
        description: "Refreshing lemon tea with ice",
        price: 2.5,
        category: "Drinks",
        available: false,
      },
    ],
  },
  {
    id: "kafe-aminah",
    name: "Kafe Mahallah Aminah",
    location: "Mahallah Aminah, Ground Floor",
    openHours: "8:00 am - 9:00 pm",
    isOpen: true,
    menu: [
      {
        id: "ami-1",
        name: "Nasi Ayam Penyet",
        description: "Smashed fried chicken with sambal and rice",
        price: 9,
        category: "Rice",
        available: true,
      },
      {
        id: "ami-2",
        name: "Air Bandung",
        description: "Rose syrup with milk",
        price: 3,
        category: "Drinks",
        available: true,
      },
    ],
  },
];

export default vendors;
