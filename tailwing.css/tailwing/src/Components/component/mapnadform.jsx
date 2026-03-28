import PropertyButton from "./Button/PorpertyButton";

const Mapandform = () => {
  return (
    <div className="mb-40"> 
      <div className="lg:mt-[-280px]  grid sm:grid-cols-1 p-4 space-y-7 lg:grid-cols-2">
        <div className="shadow-2xl bg-white rounded-2xl p-4 relative lg:mx-28">
          <div className="bg-white p-4 rounded-2xl">
            <label htmlFor="Fullname">Full Name <br /></label>
            <input id="Fullname" className="bg-gray-200 p-2 mt-2 rounded-full w-full" type="text" placeholder="Your Name..." />
          </div>

          <div className="p-4">
            <label htmlFor="Email">Email Address <br /></label>
            <input id="Email" className="bg-gray-200 p-2 mt-2 rounded-full w-full" type="text" placeholder="Your Email..." />
          </div>

          <div className="bg-white p-4 rounded-2xl">
            <label htmlFor="Subject">Subject <br /></label>
            <input id="Subject" className="p-2 mt-2 w-full bg-gray-200 rounded-full" type="text" placeholder="Subject..." />
          </div>

          <div className="p-4">
            <label htmlFor="Message">Message <br /></label>
            <textarea id="Message" className="p-3 bg-gray-200 mt-2 rounded-2xl w-full" placeholder="Type Your Message"></textarea>
          </div>

          <PropertyButton
            pbutton="Schedule a Visit"
            className="bg-black p-3 rounded-full lg:w-2/5 mt-12 transition-colors duration-700 hover:bg-orange-600 text-white font-bold"
          />
        </div>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108818.74077868038!2d72.9337087094065!3d33.68442035381065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbf7b52c11213%3A0xd5e3b9e4422e0e3d!2sIslamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1687110573626!5m2!1sen!2s"
          className="w-full h-[400px] px-4 lg:px-20 rounded-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Mapandform;
