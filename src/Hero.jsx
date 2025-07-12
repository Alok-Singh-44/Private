function Hero(){
    return(
        <>
            {/* <header className="cover h-[100vh] object-fit property w-[100vw] bg-[url('https://th.bing.com/th/id/OIP.5gQdFYTXCNscsOWVRmLhJgHaEK?w=282&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3')]" id="home"> */}
            <header className="h-[90vh] w-[100vw] object-fit property bg-gray-700 flex justify-center items-center" id="home">

                {/* Hero Section starts */}
                <section class="bg-gray- py-12 px-6 flex flex-col md:flex-row justify-center text-center gap-8">
                <div class="  space-y-4"> 
                    <h2 class="text-2xl font-bold text-white"> Welcome To EazyHut</h2> 
                    <h2 class="text-4xl font-bold text-white">Everything is here right <br /><span>where you need it</span></h2> 
                    <p class="text-gray-400">Get the best living experience at EazyHut withluxurious amenities.</p>
                
                    <button class="bg-blue-600 text-white px-6 py-2 rounded-md">Get Started</button>
                </div>
                {/* Hero ends here */}

                
            </section>
            </header>

            
        </>
    )
}

export default Hero;