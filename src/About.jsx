function About(){
    return(

        <>
        {/* About Section here */}
            <section class="bg-gray-900 py-12 px-6 flex flex-col-reverse md:flex-row items-center justify-center gap-8 " id="about">
                <div class="md:w-1/2 space-y-4 text-center md:text-left">
                    <h2 class="text-4xl font-bold text-white">Build your Saas website faster</h2>
                    <p class="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum vel accusantium, expedita atque neque nobis velit possimus ipsam inventore nostrum.</p>
                    <button class="bg-blue-600 text-white px-6 py-2 rounded-md">Get Started</button>
                </div>

                <div class="md:w-1/2 " >
                    <img class="rounded-lg shadow-md " src="https://www.pixelstalk.net/wp-content/uploads/2016/04/Desktop-computer-nature-wallpaper-hd.jpg" alt=""/>
                </div>
        </section>
        </>
    )
}

export default About;