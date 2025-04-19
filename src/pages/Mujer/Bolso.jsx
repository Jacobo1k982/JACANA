import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { FaCheckCircle } from "react-icons/fa";
import toast from "react-hot-toast";

function Bolso() {

    const dispatch = useDispatch();
    const [clickedProductId, setClickedProductId] = useState(null);

    const products = [
        { id: "bl-1", img: "/BOLSOS/BLS1.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-2", img: "/BOLSOS/BLS2.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-3", img: "/BOLSOS/BLS3.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-4", img: "/BOLSOS/BLS4.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-5", img: "/BOLSOS/BLS5.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-6", img: "/BOLSOS/BLS6.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-7", img: "/BOLSOS/BLS7.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-8", img: "/BOLSOS/BLS8.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-9", img: "/BOLSOS/BLS9.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-10", img: "/BOLSOS/BLS10.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-11", img: "/BOLSOS/BLS11.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "19500", Currency: "₡" },
        { id: "bl-12", img: "/BOLSOS/BLS12.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-13", img: "/BOLSOS/BLS13.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-14", img: "/BOLSOS/BLS14.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-15", img: "/BOLSOS/BLS15.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "21000", Currency: "₡" },
        { id: "bl-16", img: "/BOLSOS/BLS16.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-17", img: "/BOLSOS/BLS17.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-18", img: "/BOLSOS/BLS18.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-19", img: "/BOLSOS/BLS19.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-20", img: "/BOLSOS/BLS20.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-21", img: "/BOLSOS/BLS21.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-22", img: "/BOLSOS/BLS22.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-23", img: "/BOLSOS/BLS23.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-24", img: "/BOLSOS/BLS24.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-25", img: "/BOLSOS/BLS25.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-26", img: "/BOLSOS/BLS26.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-27", img: "/BOLSOS/BLS27.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-28", img: "/BOLSOS/BLS28.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-29", img: "/BOLSOS/BLS29.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-30", img: "/BOLSOS/BLS30.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-31", img: "/BOLSOS/BLS31.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-32", img: "/BOLSOS/BLS32.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-33", img: "/BOLSOS/BLS33.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-34", img: "/BOLSOS/BLS34.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-35", img: "/BOLSOS/BLS35.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-36", img: "/BOLSOS/BLS36.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-37", img: "/BOLSOS/BLS37.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-38", img: "/BOLSOS/BLS38.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-39", img: "/BOLSOS/BLS39.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-40", img: "/BOLSOS/BLS40.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-41", img: "/BOLSOS/BLS41.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-42", img: "/BOLSOS/BLS42.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-43", img: "/BOLSOS/BLS43.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-44", img: "/BOLSOS/BLS44.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-45", img: "/BOLSOS/BLS45.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-46", img: "/BOLSOS/BLS46.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-47", img: "/BOLSOS/BLS47.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-48", img: "/BOLSOS/BLS48.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-49", img: "/BOLSOS/BLS49.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-50", img: "/BOLSOS/BLS50.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-51", img: "/BOLSOS/BLS51.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-52", img: "/BOLSOS/BLS52.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-53", img: "/BOLSOS/BLS53.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-54", img: "/BOLSOS/BLS54.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-55", img: "/BOLSOS/BLS55.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-56", img: "/BOLSOS/BLS56.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-57", img: "/BOLSOS/BLS57.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-58", img: "/BOLSOS/BLS58.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-59", img: "/BOLSOS/BLS59.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-60", img: "/BOLSOS/BLS60.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-61", img: "/BOLSOS/BLS61.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-62", img: "/BOLSOS/BLS62.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-63", img: "/BOLSOS/BLS63.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-64", img: "/BOLSOS/BLS64.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-65", img: "/BOLSOS/BLS65.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-66", img: "/BOLSOS/BLS66.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-67", img: "/BOLSOS/BLS67.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-68", img: "/BOLSOS/BLS68.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-69", img: "/BOLSOS/BLS69.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-70", img: "/BOLSOS/BLS70.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-71", img: "/BOLSOS/BLS71.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-72", img: "/BOLSOS/BLS72.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-73", img: "/BOLSOS/BLS73.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-74", img: "/BOLSOS/BLS74.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-75", img: "/BOLSOS/BLS75.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-76", img: "/BOLSOS/BLS76.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-77", img: "/BOLSOS/BLS77.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-78", img: "/BOLSOS/BLS78.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-79", img: "/BOLSOS/BLS79.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-80", img: "/BOLSOS/BLS80.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-81", img: "/BOLSOS/BLS81.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-82", img: "/BOLSOS/BLS82.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-83", img: "/BOLSOS/BLS83.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-84", img: "/BOLSOS/BLS84.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-85", img: "/BOLSOS/BLS85.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-86", img: "/BOLSOS/BLS86.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-87", img: "/BOLSOS/BLS87.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-88", img: "/BOLSOS/BLS88.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-89", img: "/BOLSOS/BLS89.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-90", img: "/BOLSOS/BLS90.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-91", img: "/BOLSOS/BLS91.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-92", img: "/BOLSOS/BLS92.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-93", img: "/BOLSOS/BLS93.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-94", img: "/BOLSOS/BLS94.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-95", img: "/BOLSOS/BLS95.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-96", img: "/BOLSOS/BLS96.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-97", img: "/BOLSOS/BLS97.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-98", img: "/BOLSOS/BLS98.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-99", img: "/BOLSOS/BLS99.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-100", img: "/BOLSOS/BLS100.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-101", img: "/BOLSOS/BLS101.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "19500", Currency: "₡" },
        { id: "bl-102", img: "/BOLSOS/BLS102.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "19500", Currency: "₡" },
        { id: "bl-103", img: "/BOLSOS/BLS103.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-104", img: "/BOLSOS/BLS104.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-105", img: "/BOLSOS/BLS105.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-106", img: "/BOLSOS/BLS106.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-107", img: "/BOLSOS/BLS107.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "21000", Currency: "₡" },
        { id: "bl-108", img: "/BOLSOS/BLS108.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "19500", Currency: "₡" },
        { id: "bl-109", img: "/BOLSOS/BLS109.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-110", img: "/BOLSOS/BLS110.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-111", img: "/BOLSOS/BLS111.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-112", img: "/BOLSOS/BLS112.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-113", img: "/BOLSOS/BLS113.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-114", img: "/BOLSOS/BLS114.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-115", img: "/BOLSOS/BLS115.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-116", img: "/BOLSOS/BLS116.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-117", img: "/BOLSOS/BLS117.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-118", img: "/BOLSOS/BLS118.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-119", img: "/BOLSOS/BLS119.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-120", img: "/BOLSOS/BLS120.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-121", img: "/BOLSOS/BLS121.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-122", img: "/BOLSOS/BLS122.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-123", img: "/BOLSOS/BLS123.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-124", img: "/BOLSOS/BLS124.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-125", img: "/BOLSOS/BLS125.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-126", img: "/BOLSOS/BLS126.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-127", img: "/BOLSOS/BLS127.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-128", img: "/BOLSOS/BLS128.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-129", img: "/BOLSOS/BLS129.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-130", img: "/BOLSOS/BLS130.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-131", img: "/BOLSOS/BLS131.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-132", img: "/BOLSOS/BLS132.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-133", img: "/BOLSOS/BLS133.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-134", img: "/BOLSOS/BLS134.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-135", img: "/BOLSOS/BLS135.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-136", img: "/BOLSOS/BLS136.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-137", img: "/BOLSOS/BLS137.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-138", img: "/BOLSOS/BLS138.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-139", img: "/BOLSOS/BLS139.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-140", img: "/BOLSOS/BLS140.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-141", img: "/BOLSOS/BLS141.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-142", img: "/BOLSOS/BLS142.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-143", img: "/BOLSOS/BLS143.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-144", img: "/BOLSOS/BLS144.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-145", img: "/BOLSOS/BLS145.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-146", img: "/BOLSOS/BLS146.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "21000", Currency: "₡" },
        { id: "bl-147", img: "/BOLSOS/BLS147.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-148", img: "/BOLSOS/BLS148.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-149", img: "/BOLSOS/BLS149.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-150", img: "/BOLSOS/BLS150.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-151", img: "/BOLSOS/BLS151.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-152", img: "/BOLSOS/BLS152.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-153", img: "/BOLSOS/BLS153.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-154", img: "/BOLSOS/BLS154.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "25500", Currency: "₡" },
        { id: "bl-155", img: "/BOLSOS/BLS155.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },
        { id: "bl-156", img: "/BOLSOS/BLS156.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-157", img: "/BOLSOS/BLS157.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "27000", Currency: "₡" },
        { id: "bl-158", img: "/BOLSOS/BLS158.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "24000", Currency: "₡" },
        { id: "bl-159", img: "/BOLSOS/BLS159.jpg", title: "Bolso", model: "Modelo Exclusivo", price: "30000", Currency: "₡" },


    ];

    const handleBuy = (product) => {
        const item = {
            id: product.id,
            title: product.title,
            model: product.model,
            size: product.size,
            img: product.img,
            price: Number(product.price),
        };

        dispatch(setAddItemToCart(item));
        dispatch(setOpenCart({ cartState: true }));
        toast.success(`${product.title} agregado al carrito`);

        setClickedProductId(product.id);

        // Reinicia el estado después de 2 segundos
        setTimeout(() => {
            setClickedProductId(null);
        }, 2000);
    };

    return (
        <div className="bg-gray-900 text-white py-6">
            <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => {
                    const isClicked = clickedProductId === product.id;
                    return (
                        <div
                            key={product.id}
                            className="bg-gray-800 shadow-md border border-gray-700 rounded-xl p-2 flex flex-col items-center text-center hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full max-w-xs h-[300px] object-cover rounded-xl mx-auto mt-4"
                            />
                            <div className="p-4 space-y-2">
                                <h3 className="text-lg font-semibold">{product.title}</h3>
                                <p className="text-gray-400">{product.model}</p>
                                <p className="text-sm text-gray-500">{product.size}</p>
                                <p className="text-orange-500 font-bold">{product.Currency} {product.price}</p>

                                <button
                                    onClick={() => handleBuy(product)}
                                    disabled={clickedProductId === product.id}
                                    className={`w-full flex items-center justify-center gap-2 text-sm font-medium rounded-lg px-4 py-2 transition-all duration-300 ${clickedProductId === product.id
                                        ? "bg-green-600 cursor-not-allowed"
                                        : "bg-orange-500 hover:bg-orange-600"
                                        }`}
                                >
                                    {clickedProductId === product.id ? (
                                        <>
                                            <FaCheckCircle className="animate-ping-once" /> Agregado
                                        </>
                                    ) : (
                                        "Comprar"
                                    )}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Bolso;