import { useState } from "react";
import SingleProduct from "../components/common/SingleProduct";
import Footer from "../components/layouts/Footer";
import Layout from "../components/layouts/Layout";
import { FocusCards } from "../components/ui/focus-cards";
import Help from "../components/ui/help";
import Testimonials from "../components/ui/SideScroll";
import FeaturesComponent from "../components/common/FeatureComponent";
import { assistanceData, auProducts, cardDataDetails } from "../data/AllData";

const Home = () => {
  const [currProduct, setCurrentProduct] = useState(0)

  


  return (
    <>
      <Layout
        heading="360° Software Solutions for Your Jewellery Store"
        subheading="Take your jewellery store to the next level with AURUMM – the ultimate software suite designed to elevate your business."
        buttonLabel="Schedule a Demo"
        onButtonClick={() => alert("Demo Scheduled!")}
        textStyle="text-black dark:text-white"
        buttonStyle="bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600"
      />

      <div className="dark:bg-black bg-white">
        <div className="flex items-center justify-between space-x-6 px-14 pb-12 dark:bg-black bg-white">
          <div className="w-1/2 md:w-1/3">
            <img
              src="/Auss/computer.png"
              alt="Computer Illustration"
              className="w-full h-auto   object-contain"
            />
          </div>
          <div className="max-w-lg space-y-4">
            <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">JEWELLERY STORE APP SUITE

            </h3>
            <h1 className="text-4xl font-semibold font-pt-serif text-gray-800 dark:text-white">
              Simplified Operations,
              Increased Profits.
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              AURUMM revolutionizes the way jewellery stores operate, offering seamless solutions for gold saving schemes, online sales platforms, and inventory management. Streamline operations, increase productivity and double your revenue with our longstanding cutting-edge solutions!
              Welcome to a future of innovation, efficiency, and brilliance.
              Welcome to AURUMM.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-center pt-10">WHY AURUMM - AU PAY?</h3>
          <h1 className="text-center text-4xl py-4 font-bold">Euismod Scelerisque Pretiumdui</h1>
          <FocusCards cards={cardDataDetails} />
        </div>

        <div>
          <FeaturesComponent/>
        </div>

        <div className="flex pt-10 justify-center space-x-4 mb-10">
          {auProducts.map((product, index) => (
            <button
              key={index}
              onClick={() => setCurrentProduct(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out 
        ${currProduct === index
                  ? "bg-blue-600 text-white shadow-lg transform scale-105" // Active button styling
                  : "bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-blue-500 hover:text-white" // Inactive button hover effect
                }`}
            >
              {product.name}
            </button>
          ))}
        </div>


        <SingleProduct data={auProducts[currProduct]} />

        <Help cardData={assistanceData} />

        <div className="bg-[#61A3751F] px-[50px] xl:mx-[150px] sm:flex justify-evenly mt-6 rounded-lg py-2 section-para transition duration-500 ease-in transform translate-y-0 opacity-100">
          <div className="max-[640px]:px-[20px]">
            <div className="flex">
              <span className="text-[#2A9E4D] text-[30px] md:text-[44px] font-extrabold max-[640px]:text-center">50</span>
              <div className="mt-2 md:mt-3 flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#2A9E4D] text-[30px] md:text-[44px] font-bold iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24" style={{ color: 'rgb(42, 158, 77)' }}>
                  <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path>
                </svg>

              </div>
            </div>
            <p className="text-[14px] dark:text-white font-extrabold text-[#000000]">Clients</p>
          </div>

          <div className="max-[640px]:px-[20px] max-[640px]:mt-5">
            <div className="flex">
              <span className="text-[#2A9E4D] text-[30px] md:text-[44px] font-semibold">10</span>
              <div className="flex">
                <p className="text-[#2A9E4D] text-[30px] md:text-[44px] font-bold">K</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#2A9E4D] text-[30px] md:text-[44px] font-bold mt-2 md:mt-3 iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24" style={{ color: 'rgb(42, 158, 77)' }}>
                  <path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"></path>
                </svg>

              </div>
            </div>
            <p className="text-[14px] dark:text-white font-extrabold text-[#000000]">Downloads</p>
          </div>

          <div className="max-[640px]:px-[20px] max-[640px]:mt-5">
            <div className="flex">
              <span className="text-[#2A9E4D] text-[30px] md:text-[44px] font-semibold">72</span>
              <div className="mt-2 md:mt-3 flex gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-[#2A9E4D] text-[30px] md:text-[44px] font-bold iconify iconify--ic" width="1em" height="1em" viewBox="0 0 24 24" style={{ color: 'rgb(42, 158, 77)' }}>
                  <path fill="currentColor" d="M7.5 11C9.43 11 11 9.43 11 7.5S9.43 4 7.5 4S4 5.57 4 7.5S5.57 11 7.5 11m0-5C8.33 6 9 6.67 9 7.5S8.33 9 7.5 9S6 8.33 6 7.5S6.67 6 7.5 6M4.002 18.583L18.59 3.996l1.414 1.414L5.417 19.997zM16.5 13c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m0 5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></path>
                </svg>

              </div>
            </div>
            <p className="text-[14px] dark:text-white font-extrabold text-[#000000]">Client Revenue Increase</p>
          </div>
        </div>


        <div className="py-10 pt-16">
          <h2 className="font-bold text-center dark:text-white">OUR CLIENTS</h2>
          <h1 className="font-bold dark:text-yellow-100 text-yellow-600 pt-2 text-xl text-center ">Brands That Trust Us!</h1>
          <div className="pt-10">
            <Testimonials />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
