import Image from 'next/image'


export default function BottomSection() {
  return (
    <>
      <div className="w-4/5 m-auto">
        <Image alt="" src="/fullWidthImage.png" width={1340} height={503} />
      </div>
      <div className="relative mt-16 mb-16 w-4/5 m-auto">
        <Image
          alt=""
          src="./Vector-2.svg"
          width={676}
          height={272}
          className="absolute  vector-1"
        />
        <Image
          alt=""
          src="./Vector-1.svg"
          width={676}
          height={272}
          className="absolute vector-2"
        />

        <p className="text-customWhite text-center mt-8 text-3xl md:text-6xl pb-8">
          order online <br />
          or come visit us today
        </p>
      </div>
    </>
  );
}
