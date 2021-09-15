import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 pt-20">
        <div className=" flex justify-between">
          {" "}
          <img src="kira.png" alt="frontend dev" className="h-96" />
          <img src="miki-dan.png" alt="backend dev" className="h-96" />
          <img src="miki-get.png" alt="integration dev" className="h-96" />
          <img src="dev.png" alt="bckend dev" className="h-96" />
        </div>
      </div>
      <div className="flex justify-between px-4">
        <div className="text-lg font-bold text-primary">Kirubel Girmay</div>
        <div className="text-lg font-bold text-primary">Mikiyas Danel</div>
        <div className="text-lg font-bold text-primary">Mikiyas Getenet</div>
        <div className="text-lg font-bold text-primary">Nahom Balcha</div>
      </div>
      <div className="py-8 text-3xl font-bold text-center">About Us</div>
      <div className="flex justify-center mb-10">
        <div className="w-2/3 text-bold font-semibold text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum est sed,
          enim odio dignissimos explicabo veniam veritatis, magnam quo
          reiciendis error nam quas asperiores? Dolor inventore dignissimos
          voluptatum illum expedita Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Eum est sed, enim odio dignissimos explicabo veniam
          veritatis, magnam quo reiciendis error nam quas asperiores? Dolor
          inventore dignissimos voluptatum illum expedita. Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Eum est sed, enim odio
          dignissimos explicabo veniam veritatis, magnam quo reiciendis error
          nam quas asperiores? Dolor inventore dignissimos voluptatum illum
          expedita.
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
