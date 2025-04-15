import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiShop } from "react-icons/ci";

// i made this file to store all the constants that are used in the project
// so that i can use them in multiple files and also to keep the code clean
export const menuItems = [
  {
    id: 1,
    title: "dashboard",
    icon: <MdOutlineSpaceDashboard size={20} />,
    isActive: true,
  },
  {
    id: 2,
    title: "Food Order",
    icon: <CiShop size={20} />,
    isActive: false,
  },
  {
    id: 3,
    title: "Feedback",
    icon: <CiShop size={20} />,
    isActive: false,
  },
  {
    id: 4,
    title: "messages",
    icon: <CiShop size={20} />,
    isActive: false,
  },
  {
    id: 5,
    title: "Order History",
    icon: <CiShop size={20} />,
    isActive: false,
  },
  {
    id: 6,
    title: "Payment Details",
    icon: <CiShop size={20} />,
    isActive: false,
  },
  {
    id: 7,
    title: "Customizations",
    icon: <CiShop size={20} />,
    isActive: false,
  },
];

export const products = [
  {
    id: 1,
    name: "Vegetable Burger",
    price: 32,
    oldPrice: 40,
    rating: 2.5,
    image:
      "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_960_720.jpg",
  },
  {
    id: 2,
    name: "Vegetable Burger",
    price: 32,
    oldPrice: 40,
    rating: 2.5,
    image:
      "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_960_720.jpg",
  },
  {
    id: 3,
    name: "Vegetable Burger",
    price: 32,
    oldPrice: 40,
    rating: 2.5,
    image:
      "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_960_720.jpg",
  },
  {
    id: 4,
    name: "Vegetable Burger",
    price: 32,
    oldPrice: 40,
    rating: 2.5,
    image:
      "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_960_720.jpg",
  },
  {
    id: 5,
    name: "Vegetable Burger",
    price: 32,
    oldPrice: 40,
    rating: 2.5,
    image:
      "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_960_720.jpg",
  },
  {
    id: 6,
    name: "Vegetable Burger",
    price: 32,
    oldPrice: 40,
    rating: 2.5,
    image:
      "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_960_720.jpg",
  },
];

export const exploreProduct = [
  {
    id: 1,
    productName: "Potato",
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2012/04/11/17/02/french-28946_1280.png",
  },
  {
    id: 2,
    productName: "Burger",
    isActive: true,
    image:
      "https://cdn.pixabay.com/photo/2014/12/21/23/56/hamburger-576419_1280.png",
  },
  {
    id: 3,
    productName: "Chicken",
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2017/02/01/00/02/drumstick-2028375_1280.png",
  },
  {
    id: 4,
    productName: "Pizza",
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2014/04/02/14/12/pizza-306495_960_720.png",
  },
  {
    id: 5,
    productName: "Potato",
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2012/04/11/17/02/french-28946_1280.png",
  },
  {
    id: 6,
    productName: "Burger",
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2014/12/21/23/56/hamburger-576419_1280.png",
  },
  {
    id: 7,
    productName: "Chicken",
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2017/02/01/00/02/drumstick-2028375_1280.png",
  },
  {
    id: 8,
    productName: "Pizza",
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2014/04/02/14/12/pizza-306495_960_720.png",
  },
];

export const paymentMethods = [
  {
    id: 2,
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2018/05/08/21/28/paypal-3383998_1280.png",
  },
  {
    id: 3,
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2021/09/05/02/16/credit-6598772_1280.png",
  },
  {
    id: 1,
    isActive: true,
    image:
      "https://cdn.pixabay.com/photo/2022/03/16/18/29/bank-7073043_1280.png",
  },
  {
    id: 4,
    isActive: false,
    image:
      "https://cdn.pixabay.com/photo/2022/03/15/04/06/cash-7069401_1280.png",
  },
];

export const cartItems = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1493061735/vector/3d-burger-illustration.jpg?s=2048x2048&w=is&k=20&c=fZcEAaYwWm7NraPTJzrNBc2Wd4E1CFdfTG3HdTjFE2s=",
    name: "Vegetable Burger",
    price: 25,
    quantity: 3,
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1493061735/vector/3d-burger-illustration.jpg?s=2048x2048&w=is&k=20&c=fZcEAaYwWm7NraPTJzrNBc2Wd4E1CFdfTG3HdTjFE2s=",
    name: "Vegetable Burger",
    price: 25,
    quantity: 3,
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1493061735/vector/3d-burger-illustration.jpg?s=2048x2048&w=is&k=20&c=fZcEAaYwWm7NraPTJzrNBc2Wd4E1CFdfTG3HdTjFE2s=",
    name: "Vegetable Burger",
    price: 25,
    quantity: 3,
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1493061735/vector/3d-burger-illustration.jpg?s=2048x2048&w=is&k=20&c=fZcEAaYwWm7NraPTJzrNBc2Wd4E1CFdfTG3HdTjFE2s=",
    name: "Vegetable Burger",
    price: 25,
    quantity: 3,
  },
  {
    id: 5,
    image:
      "https://media.istockphoto.com/id/1493061735/vector/3d-burger-illustration.jpg?s=2048x2048&w=is&k=20&c=fZcEAaYwWm7NraPTJzrNBc2Wd4E1CFdfTG3HdTjFE2s=",
    name: "Vegetable Burger",
    price: 25,
    quantity: 3,
  },
];
