const Footer = () => {
  return (
    <footer className="bg-blue-50 dark:bg-black py-10">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex space-x-6 text-lg font-medium text-gray-800 dark:text-white">
          <a
            href="#home"
            className="hover:text-blue-600 dark:hover:text-gray-400 transition"
          >
            Home
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 dark:hover:text-gray-400 transition"
          >
            Contact
          </a>
        </div>

        <div className="mt-6 lg:mt-0">
          <div className="flex items-center space-x-4">
            <p className="text-gray-800 dark:text-gray-300 font-medium">
              Ready To Begin?
            </p>
            <button className="px-6 py-2 rounded-md bg-green-500 text-white font-medium shadow hover:bg-green-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:shadow-gray-800 transition">
              Get a Demo
            </button>
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-300 dark:border-gray-600" />

      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="flex flex-col items-start">
          <img
            src="/Auss/Aurum_Logo.png"
            alt="Aurum ServSoft Logo"
            className="h-12"
          />
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
            World-class technical solutions for elevated jewellery store
            operations.
          </p>
        </div>

        <div>
          <h3 className="text-gray-800 dark:text-gray-300 font-semibold mb-4">
            QUICKLINKS
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#product"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-400 transition"
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-400 transition"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-800 dark:text-gray-300 font-semibold mb-4">
            SOLUTIONS
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#aupay"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-400 transition"
              >
                AU Pay
              </a>
            </li>
            <li>
              <a
                href="#ausales"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-400 transition"
              >
                AU Sales
              </a>
            </li>
            <li>
              <a
                href="#aushop"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-400 transition"
              >
                AU Shop
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-800 dark:text-gray-300 font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-400">0422 4957575</li>
            <li>
              <a
                href="mailto:support@atts.in"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-gray-400 transition"
              >
                support@atts.in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
