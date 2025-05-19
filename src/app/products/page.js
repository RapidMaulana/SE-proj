import * as Font from "../../components/fonts.js";

import { ShoppingBag } from "lucide-react";

export default function ProductPage () {

    const items = [
        {nama : "item1", harga: "100.000"},
        {nama : "item2", harga: "100.000"},
        {nama : "item3", harga: "100.000"},
        {nama : "item4", harga: "100.000"},
        {nama : "item5", harga: "100.000"},
        {nama : "item6", harga: "100.000"},
        {nama : "item7", harga: "100.000"},
        {nama : "item8", harga: "100.000"},
        {nama : "item9", harga: "100.000"},
        {nama : "item10", harga: "100.000"}
    ];

    return(
        <div className="text-white flex flex-col items-center mt-28 w-full">
            <h1 className={`${Font.dmSerifDisplay.className} text-6xl border-b-2 border-solid border-white pt-0 p-5`}>Collections</h1>
            <div className="flex flex-row gap-20 m-5 text-4xl ">
                <h1 className="font-semibold">Men</h1>
                <h1>Women</h1>
            </div>
            <div className="flex flex-row flex-wrap gap-12 w-[calc(100%/1.2)] justify-center">
                {items.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="relative bg-thirtiery w-[250px] h-[250px] rounded-[15px] animate-pulse overflow-visible">
                                <div className="absolute z-10 flex items-center justify-center right-[-20px] bottom-[-20px] bg-white w-[80px] h-[80px] rounded-[50px] animate-none transition-transform duration-200 hover:-translate-y-2 ">
                                    <ShoppingBag stroke="black" size={38}/>
                                </div>
                            </div>
                            <h1 className="font-semibold text-3xl mt-4">{item.nama}</h1>
                            <p className="">Rp. {item.harga}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}