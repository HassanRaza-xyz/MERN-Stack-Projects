const Card = () => {
  return (
    <div class="mx-auto px-6 sm:px-0 max-w-5xl min-h-screen ">
      <h1 className="sm:text-3xl  text-2xl mt-10 sm:mt-30 font-semibold  text-[#007F6D]">
        {" "}
        Latest Blogs
      </h1>
      <div className="flex items-center justify-between">
        <h1 className="text-[#1D1D1D] text-2xl sm:text-5xl font-semibold">
          {" "}
          Recently Added Blogs
        </h1>
        <h1 className="sm:text-lg text-xs font-semibold   text-[#000000] px-2 sm:px-8 sm:py-1 border rounded-full  ">
          ALL BLOG
        </h1>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 max-w-5xl mx-auto ">
        <div class="bg-white shadow-md rounded-lg   items-center  hover:shadow-lg transition">
          <img
            src="/7.png"
            alt="Card 1"
            class="w-[361px] h-[241px] rounded-tl-2xl rounded-tr-2xl object-cover mb-4 "
          />
          <h3 class="text-2xl p-5 font-semibold text-gray-800">
            5 best Tips for Teachers “How to Teach”
          </h3>
          <p class="text-gray-500 text-xl px-5 font-normal mb-2">
            15 Feb, 2023
          </p>
        </div>

        <div class="bg-white shadow-md rounded-lg hover:shadow-lg transition">
          <img
            src="/8.png"
            alt="Card 2"
            class="w-[361px] h-[241px] rounded-tl-2xl rounded-tr-2xl object-cover mb-4 "
          />
          <h3 class="text-2xl p-5 font-semibold text-gray-800">
            Student’s Life How can we Help them to achieve
          </h3>
          <p class="text-gray-500 text-xl px-5 font-normal mb-6">10 Feb, 2023</p>
        </div>

        <div class="bg-white shadow-md rounded-lg hover:shadow-lg transition">
          <img
            src="/9.jpg"
            alt="Card 2"
            class="w-[361px] h-[241px] rounded-tl-2xl rounded-tr-2xl object-cover mb-4 "
          />
          <h3 class="text-2xl p-5 font-semibold text-gray-800">
            How to Improve the performance of students
          </h3>
          <p class="text-gray-500 text-xl px-5 font-normal ">7 Feb, 2023</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
