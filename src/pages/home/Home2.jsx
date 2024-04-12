import React from "react";
import Header from "../component/Header";
import CarouselSlider from "../component/Slider";
import TableWrapper from "./TableWrapper";

function Home2() {
  const position = async () => {
    await navigator.geolocation.getCurrentPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        console.log("position is : ", position);
      });
  }

  React.useEffect(() => {
    position();
  },[]);

  return (
    <>
      <header>
        <Header/>
      </header>
      {/* <div className="carousel-container overflow-hidden">
        <CarouselSlider/>
      </div>   */}
      <div>
        <div className="relative  bg-gray-100">
          <div className="py-20 px-7 h-[500px]"  style={{ backgroundImage:"url(https://images.pexels.com/photos/13009643/pexels-photo-13009643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)", backgroundSize:"cover", backgroundPosition:"center"  }}>
            <div className="mt-20 mb-7  rounded-[4px]  bg-white max-w-[1124px] w-full mx-auto ">
              <div className="flex flex-wrap justify-between pb-2 lg:flex-nowrap">
                <div className="flex flex-col w-full gap-4 lg:flex-row md:flex-col p-7">

                  <div className="relative lg:max-w-[410px] w-full">
                    <select className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600  lg:max-w-[410px] w-full leading-4">
                        <option value="">Select Location</option>
                    </select>
                  </div>
                  <div className="relative lg:max-w-[410px] w-full">
                    <select className="p-4 py-3 outline-none focus pr-10  bg-gray-100 border rounded border-gray-100 text-slate-600  lg:max-w-[410px] w-full leading-4">
                        <option value="A+">A positive (A+)</option>
                        <option value="A-">A negative (A-)</option>
                        <option value="B+">B positive (B+)</option>
                        <option value="B-">B negative (B-)</option>
                        <option value="O+">O positive (O+)</option>
                        <option value="O-">O negative (O-)</option>
                        <option value="AB+">AB positive (AB+)</option>
                        <option value="AB-">AB negative (AB-)</option>
                      
                    </select>
                  </div>
                  <button className="bg-indigo-700  text-white lg:max-w-[164px] font-medium px-6 py-4 w-full  rounded-[4px] leading-[14px] hover:bg-indigo-600">
                    Search
                  </button>

                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>

      <TableWrapper />
    </>
  );
}
// /src/images/blood-banner1.jpg

export default Home2;
