export default function Footer({font}){
    return(
        <footer className="bg-lila w-4/5 m-auto rounded-md text-customBlack p-8 relative z-1">
            <div className="flex flex-col gap-8 md:flex-row md:gap-24">
                <p>ROCK 'N<br/> BURGUER</p>
               <div className="flex flex-col">
               <p>MORE</p>
               <div className={`${font.className} flex flex-col`}>
               <a>About</a>
               <a>Menu</a>
               <a>Locations</a>
               <a>Privacy</a>

               </div>
            

                </div> 
                <div className="flex flex-col">
               <p>HOURS</p>
               <div className={`${font.className} flex flex-col`}>
               <p>
               Open from<br/> 11AM to 11PM <br/>daily
               </p>

               </div>
            

                </div> 

            </div>

        </footer>
    )
}