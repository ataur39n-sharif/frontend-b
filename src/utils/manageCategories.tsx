import { BiSolidBed } from 'react-icons/bi';
import { FaMotorcycle } from "react-icons/fa";
import { FcAutomotive } from "react-icons/fc";
import { GiBallerinaShoes, GiConverseShoe, GiFragrance, GiJewelCrown, GiLargeDress } from 'react-icons/gi';
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoShirt } from 'react-icons/io5';
import {
    MdLaptopMac,
    MdOutlineHealthAndSafety,
    MdOutlineLocalGroceryStore,
    MdOutlineSmartphone
} from "react-icons/md";
import { PiHandbagSimpleBold, PiSunglassesBold } from "react-icons/pi";
import { TbDeviceWatchExclamation, TbHomePlus } from "react-icons/tb";
import { VscWatch } from "react-icons/vsc";


const categories = [
    "mens-shirts",
    "home-decoration",
    "smartphones",
    "sunglasses",
    "lighting",
    "automotive",
    "womens-watches",
    "laptops",
    "groceries",
    "fragrances",
    "motorcycle",
    "mens-watches",
    "mens-shoes",
    "womens-jewellery",
    "womens-bags",
    "furniture",
    "womens-dresses",
    "womens-shoes",
];

export const categoryList = categories.map((category, index) => {
    const name = category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    const icon = getIconForCategory(category);
    const url = `/products/${category}`;

    return {
        name,
        icon,
        url,
    };
});

function getIconForCategory(category: String) {
    switch (category) {
        case "mens-shirts":
            return <IoShirt />;
        case "skincare":
            return <MdOutlineHealthAndSafety />;
        case "home-decoration":
            return <TbHomePlus />;
        case "smartphones":
            return <MdOutlineSmartphone />;
        case "sunglasses":
            return <PiSunglassesBold />;
        case "lighting":
            return <HiOutlineLightBulb />;
        case "automotive":
            return <FcAutomotive />;
        case "womens-watches":
            return <VscWatch />;
        case "laptops":
            return <MdLaptopMac />;
        case "groceries":
            return <MdOutlineLocalGroceryStore />;
        case "fragrances":
            return <GiFragrance />;
        case "motorcycle":
            return <FaMotorcycle />;
        case "mens-watches":
            return <TbDeviceWatchExclamation />;
        case "mens-shoes":
            return <GiConverseShoe />;
        case "womens-jewellery":
            return <GiJewelCrown />;
        case "womens-bags":
            return <PiHandbagSimpleBold />;
        case "furniture":
            return <BiSolidBed />;
        case "womens-dresses":
            return <GiLargeDress />;
        case "womens-shoes":
            return <GiBallerinaShoes />;
        default:
            return null; // You can choose a default icon or return null if no matching category is found
    }
}
