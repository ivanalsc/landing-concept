import Image from "next/image";

export default function Banners(){
    return(
        <div className="mt-8 flex flex-col md:flex-row gap-y-4 gap-x-4">
            <div className="relative">
                <Image src="/fries.png" alt="" width={650} height={753} className=""/>
                <div className="absolute bg-customBlack rounded-md p-4 bottom-8 left-4">
                    <p className="text-customWhite text-lg">SALT & VINEGAR <br/>FRENCH FRIES</p>
                    <p className="text-lila text-sm mt-2">ORDER NOW</p>
                </div>
            </div>
            <div className="relative">
                <Image src="/burger-banner.png" alt="" width={650} height={753} className=""/>
                <div className="absolute bg-customBlack rounded-md p-4 bottom-8 left-4">
                    <p className="text-customWhite text-lg">CRISPY CHICKEN <br/>SANDWICH</p>
                    <p className="text-lila text-sm mt-2">ORDER NOW</p>
                </div>
            </div>
        </div>
    )
}