let productList = [
  {
    id: "b11051c3-8796-492b-bedf-cc1e9f9917ec",
    image: "airpods-max-hero-select-202011.jpg",
    product: "AirPods Max",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 359,
    discountedPrice: 256,
    stars: 4,
    hotProduct: "bottom1__card--hot",
    quantity: 1,
  },
  {
    id: "5c1ade22-ce17-402b-8471-b0863b76d94a",
    image: "iphone11-red-select-2019.png",
    product: "iPhone 11",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 796,
    discountedPrice: 489,
    stars: 4,
    hotProduct: "",
    quantity: 1,
  },
  {
    id: "4faaa310-d6d9-411b-b337-25c83f33a2bf",
    image: "alu-silver-sport-white-s3-2up_gps_varend.png",
    product: "Apple Watch",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 499,
    discountedPrice: 399,
    stars: 5,
    hotProduct: "",
    quantity: 1,
  },
  {
    id: "a416c321-b0d3-4083-a9bc-9f7d64df5bf6",
    image: "macbook-air-space-gray-config-201810.jpg",
    product: "Apple MacBook Air",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 529,
    discountedPrice: 415,
    stars: 3,
    hotProduct: "",
    quantity: 1,
  },
  {
    id: "e5f3c224-e8a1-417b-9de7-aa641aa736de",
    image: "MWP22.png",
    product: "Air Pods Pro",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 599,
    discountedPrice: 459,
    stars: 2,
    hotProduct: "",
    quantity: 1,
  },
  {
    id: "aab671a9-0c7f-43d9-be33-6e936f001aaf",
    image: "macbook-pro.png",
    product: "Apple MacBook Pro",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 599,
    discountedPrice: 499,
    stars: 4,
    hotProduct: "",
    quantity: 1,
  },
  {
    id: "9d23ffde-f525-4264-9a62-7e35be3778b1",
    image: "MJQJ3_AV3.png",
    product: "Magic Keyboard for iPad Pro 11-inch",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 359,
    discountedPrice: 299,
    stars: 3,
    hotProduct: "",
    quantity: 1,
  },
  {
    id: "ed33bc3a-9319-4a3e-8dab-0ce58d63b662",
    image: "ipad-2020-hero-landing.jpg",
    product: "iPad (8th Generation)",
    description:
      "Elit officiis exercitationem temporibus perferendis atque consequatur, molestias tempore iusto expedita nisi natus nulla quam quia culpa amet eligendi? Mollitia assumenda fugit cupiditate! Quod corrupti dicta, iure velit voluptatem eaque. Cum, placeat at! Ratione alias hic illum exercitationem sint esse.",
    price: 1099,
    discountedPrice: 899,
    stars: 4,
    hotProduct: "",
    quantity: 1,
  },
];
let initState = JSON.parse(localStorage.getItem("products"))
  ? JSON.parse(localStorage.getItem("products"))
  : productList;
const Products = (state = initState, action) => {
  switch (action.type) {
    case "favorite":
      let isExistedIndex = state.findIndex(
        (e) => e.id === action.payload.id
      );

      if (isExistedIndex >= 0) state[isExistedIndex].favorite = true;
      // else state.push({...action.payload, favorite: true})
      localStorage.setItem("products", JSON.stringify(state));

      return state;
    case "unfavorite":
      let isExistedIndex_ = state.findIndex(
        (e) => e.id === action.payload.id
      );
      state[isExistedIndex_].favorite = false;
      localStorage.setItem("products", JSON.stringify(state));
      return state;
    default:
      return state;
  }
};

export default Products;
