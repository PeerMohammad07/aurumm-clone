import Footer from "../components/layouts/Footer";
import Layout from "../components/layouts/Layout";
import Help from "../components/ui/help";
import { cardData } from "../data/AllData";
import Features from "./Features";

const Product = () => {


  return (
    <>
      <Layout
        heading="AU SALES"
        subheading="Inventory Management has Never Looked So Luxurious."
        textStyle="text-black dark:text-white"
        backgroundColor="white"
      />
      <div className="dark:bg-black bg-white">
        <div className="flex items-center justify-between space-x-6 px-14 pb-12 dark:bg-black bg-white">
          <div className="max-w-lg space-y-4">
            <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100">AU SALES</h3>
            <h1 className="text-4xl font-semibold font-pt-serif text-gray-800 dark:text-white">
              The Hybrid ERP Magic
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              At Aurumm, we understand the artistry and precision that goes into every piece of jewellery.
              AU Sales is a testament to that understanding, offering an unparalleled solution for managing
              your jewellery store inventory. With a focus on simplicity and sophistication, AU Sales
              streamlines your operations and makes tracking your inventory the easiest it has ever been:
              allowing you to focus on what truly matters – your craft.
            </p>
          </div>

          <div className="w-1/2 md:w-1/3">
            <img
              src="/Auss/computer.png"
              alt="Computer Illustration"
              className="w-full h-auto shadow-lg rounded-lg object-contain"
            />
          </div>
        </div>

        <Help cardData={cardData} />
        <div className="py-5">
          <Features />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Product;
