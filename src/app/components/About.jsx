


export default function About({font}){
    return(
        <div className= "mt-8 flex flex-col md:flex-row justify-between p-8 bg-lime rounded-md text-customBlack">
            <div className='w-2/5'>
                <p className='text-3xl md:text-4xl text-left md:text-center'>THE BURGUER ABOVE ALL BURGUERS</p>
            </div>
            <div className='w-3/5'>
                <p className={`${font.className} text-2xl`}>A team of food lovers in search of achieving the perfect burger.</p>
                <button className='border-2 border-customBlack bg-white mt-8 py-2 px-4 text-customBlack shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition-all hover:text-white hover:shadow-none hover:bg-customBlack hover:relative hover:t-2 hover:left-2'>ABOUT US</button>
            </div>
        </div>
    )
}