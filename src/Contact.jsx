function Contact(){
    return(
        <>
            {/* <!-- Contact Form --> */}
      <section class="py-12 px-6 bg-gray-800">
        <h2 class="text-2xl font-bold text-center text-white mb-6">Contact Us</h2>
        <form class="max-w-2xl mx-auto bg-gray-900 p-6 rounded shadow space-y-4" action="">
            {/* <!-- <h2 class="text-2xl font-bold text-center text-gray-800">Contact Us</h2> --> */}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" class="placeholder-gray-500 border border-blue-800 rounded-md px-4 py-2"/> 
                <input type="text" placeholder="Last Name" class="placeholder-gray-500 border border-blue-800 rounded-md px-4 py-2"/> 
            </div>
            <input type="email" placeholder="Your Email" class="placeholder-gray-500 w-full border border-blue-800 rounded-md px-4 py-2"/>
            <textarea  class="placeholder-gray-500 border border-gray-300 rounded p-2 w-full  px-4 py-2" rows="5" id="" placeholder="Enter Your message"></textarea>

            <label class="inline-flex items-center space-x-2" for="">
                <input type="checkbox" class="form-checkbox text-blue-500 w-5 h-5" name="" id=""/>
                <span class="text-gray-700 text-sm">I agree the terms and conditions</span>
            </label>

            <button type="submit" class="w-full bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">Submit</button>

        </form>

    </section>        
    
    </>
    )
}

export default Contact;