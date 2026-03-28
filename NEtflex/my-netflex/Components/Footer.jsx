const Footer = () =>{
    return (
        <div className=" max-w-[80vw]  mx-auto">
<div className="text-[#ffffffb3] underline">
    <a href="https://www.question">Questions? Contact us.</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <ul className="text-[#ffffffb3] leading-8  font-sans  text-[16px]  list-disc list-inside underline mt-10">
                <li> <span  className="hover:text-blue-500  cursor-pointer"  >FAQ  </span> </li>
                <li> <span  className="hover:text-blue-500 cursor-pointer"  >Investor relations </span></li>
                <li> <span  className="hover:text-blue-500 cursor-pointer"  >Privacy </span></li>
                <li> <span  className="hover:text-blue-500 cursor-pointer"  >Speed Test </span></li>
            </ul>
            <ul className="text-[#ffffffb3] leading-8 font-sans text-[16px] underline mt-10 list-disc list-inside">
  <li>
    <span className="hover:text-blue-500 cursor-pointer">FAQ</span>
  </li>
  <li>
    <span className="hover:text-blue-500 cursor-pointer">Investor Relations</span>
  </li>
  <li>
    <span className="hover:text-blue-500 cursor-pointer">Privacy</span>
  </li>
  <li> <span className="hover:text-blue-500 cursor-pointer">Speed Test</span>
  </li>
</ul>

              <ul className="text-[#ffffffb3] leading-8 font-sans list-disc list-inside  text-[16px]  underline mt-10">
               <li> <span  className="hover:text-blue-500 cursor-pointer "  >Account </span>  </li>
               <li> <span  className="hover:text-blue-500 cursor-pointer"  >Ways to Watch </span></li>
               <li> <span  className="hover:text-blue-500 cursor-pointer"  >Corporate Information </span></li>
               <li> <span  className="hover:text-blue-500 cursor-pointer"  >Only on Netflix </span></li> 

            </ul>
              <ul className="text-[#ffffffb3] leading-8 font-sans list-inside list-disc text-[16px] underline mt-10">
                <li> <span  className="hover:text-blue-500 cursor-pointer"  >Media Center  </span>  </li>
                <li> <span  className="hover:text-blue-500 cursor-pointer"  >Terms of use </span>  </li>
                <li> <span  className="hover:text-blue-500 cursor-pointer"  >Contact us   </span>  </li>
            </ul>

</div>
<select className="mt-10 border-2  p-1 mb-10 active:border-white border-[#5e5e5e] px-2  text-white bg-black" name="" id="">
    <option value="">English</option>
    <option value="">English uk</option>
    <option value="">Urdu</option>
</select>
<div className="text-[#ffffffb3] mb-10">
    Netflix Pakistan
</div>
<div className="text-[#ffffffb3] text-sm mb-30">
    This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="underline text-blue-600">Learn more.</span>
</div>

        </div>
    )
}
export default Footer