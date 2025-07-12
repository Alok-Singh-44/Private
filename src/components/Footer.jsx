function Footer(){
    return(
        <>
           <footer class="bg-gray-900 text-white p-6 mt-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left ">
            <div>
                <h3 class="font-bold text-xl mb-2">Saas App</h3>
                <p class="text-gray-400">© 2025 All rights reserved.</p>
            </div>
            <div>
                <h4 class="font-semibold text-xl mb-2">Links</h4>
                <ul class="text-gray-300 space-y-1">
                    <li><a href="">Home</a></li>
                    <li><a href="" id="#about">About Us</a></li>
                </ul>
            </div>

            <div>
                <h4 class="font-semibold text-xl mb-2">Follow us</h4>
                <ul class="flex justify-center md:justify-start space-x-4">
                    <li><a href=""></a>🐦</li>
                    <li><a href=""></a>📕</li>
                    <li><a href=""></a>📸</li>
                </ul>
            </div>
        </div>
     </footer>
        </>
    )
}

export default Footer;