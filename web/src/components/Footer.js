export default function Footer() {
    return (
      <div
        className="h-60  px-32 py-20"
        style={{
          backgroundColor: "#042a3d",
        }}
      >
        <div className="flex justify-between items-center ">
          <div className="flex space-x-32">
            <div>
              <div className="text-gray-400 font-bold mb-2 ">Products</div>
              <div className="text-white  text-sm font-semibold">lebse</div>
              <div className="text-white  text-sm font-semibold">chama</div>
              <div className="text-white  text-sm font-semibold">surim ale</div>
              <div className="text-white  text-sm font-semibold">
                bet, mekina...
              </div>
            </div>
            <div>
              <div className="text-gray-400 font-bold mb-2">Company</div>
              <div className="text-white text-sm font-semibold ">About</div>
              <div className="text-white text-sm font-semibold">Blog</div>
              <div className="text-white text-sm font-semibold">Join Us</div>
            </div>
            <div>
              <div className="text-gray-400 mb-2 font-bold">Help</div>
              <div className="text-white text-sm font-semibold">
                Contact Support
              </div>
              <div className="text-white text-sm font-semibold">No Support</div>
              <div className="text-white text-sm font-semibold">Get</div>
              <div className="text-white text-sm font-semibold">Lost</div>
            </div>
          </div>
          <div className="text-white font-semibold">try H-mart for free</div>
        </div>
        <hr className="mt-4 border-gray-400 " />
        <div className="flex justify-around pt-2">
          <div className="text-sm text-white font-semibold">@nahom 2021</div>
          <div className="text-sm text-white font-semibold">@Kira 2021</div>
          <div className="text-sm text-white font-semibold">@mikiD 2021</div>
          <div className="text-sm text-white font-semibold">@mikiG 2021</div>
        </div>
      </div>
    );
}