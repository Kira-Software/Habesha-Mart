export default function Footer() {
  return (
    <div
      className="h-72  px-32 py-10"
      style={{
        backgroundImage: "url(img.webp)",
        backgroundBlendMode: "screen",
        backgroundSize: "cover",
        backgroundColor: "#040c1c",
      }}
    >
      <div className="flex justify-between items-center ">
        <div className="flex space-x-28">
          <div>
            <div className="text-gray-50 font-bold mb-2 text-xl">Products</div>
            <div className="text-white  text-sm font-semibold">Home</div>
            <div className="text-white  text-sm font-semibold">Cars</div>
            <div className="text-white  text-sm font-semibold">Electronics</div>
            <div className="text-white  text-sm font-semibold">More</div>
          </div>
          <div>
            <div className="text-gray-50 font-bold mb-2 text-xl">Company</div>
            <div className="text-white text-sm font-semibold ">About</div>
            <div className="text-white text-sm font-semibold">Blog</div>
            <div className="text-white text-sm font-semibold">Join Us</div>
          </div>
          <div>
            <div className="text-gray-50 mb-2 font-bold text-xl">Help</div>
            <div className="text-white text-sm font-semibold">
              Contact Support
            </div>
            <div className="text-white   font-semibold  ">No Support</div>
            <div className="text-white text-sm font-semibold">Get</div>
            <div className="text-white text-sm font-semibold">Lost</div>
          </div>
        </div>
        <div>
          <div className="text-white font-semibold text-2xl text-center">
            <span className="text-yellow-400">ሐ</span>-mart
          </div>
          <div className="space-y-2">
            <div className="font-bold text-white text-xl">Contact Us</div>
            <div className="relative w-full mb-3">
              <input
                type="text"
                className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 z"
                defaultValue="Email"
              />
            </div>
            <div className="relative w-full mb-3">
              <textarea
                className="border-0 px-3 py-1 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 z"
                defaultValue="Your Message"
              />
            </div>
            <button className="px-10 py-2 bg-primary text-white font-bold">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <hr className="mt-4 border-gray-400 " />
      <div className="flex justify-around pt-1">
        <div className="text-sm text-white font-semibold">@NK2M</div>
      </div>
    </div>
  );
}
