import Image from "next/image";

interface MyImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
  }

  const Hero: React.FC<MyImageProps> = ({ src, alt, width, height }) => {
    return(
        <div>
            <div className="mt-8">
                <p className="text-3xl md:text-7xl text-center">
                NEW YORK’S FAVORITE HAMBURGER
                </p>
            </div>
            <div className="flex justify-center relative">
            <Image alt="" src="./Vector-1.svg" width={676} height={272} className="absolute right-3/4 top-8 z-1 md:right-2/4"/>
            <Image alt="" src="./Vector-2.svg" width={676} height={272} className="absolute inset-x-1/2 top-8 z-1  md:right-0 md:left-[45%]"/>

                <Image alt={alt} src={src} width={width} height={height} className="z-2 relative"/>


            </div>
        
        </div>
    )
}
export default Hero;