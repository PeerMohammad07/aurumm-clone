const FeaturesComponent = () => {
  const features = [
    { name: "Cloud Support", icon: "🌥️" },
    { name: "Savings Scheme Management", icon: "📋" },
    { name: "Data Management", icon: "💾" },
    { name: "Estimation & Billing", icon: "🧾" },
    { name: "Cost Management", icon: "💰" },
    { name: "Reporting & Dashboard", icon: "📊" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-8 py-8 md:py-12 bg-white dark:bg-black transition duration-300">
      {/* Left Section */}
      <div className="w-full md:w-1/2">
        <h4 className="text-sm font-bold text-gray-600 dark:text-gray-300 uppercase mb-2">
          Features
        </h4>
        <h2 className="text-3xl font-extrabold text-black dark:text-white mb-6">
          Growth with AURUMM: <br />
          Your Partner in Success!
        </h2>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="text-green-500 text-2xl">{feature.icon}</div>
              <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative">
          {/* Main Image */}
          <img
            src="/Auss/tbale.png"
            alt="Feature Image"
            className="rounded-lg shadow-lg dark:shadow-black"
          />

          {/* Overlapping Elements */}
          <div className="absolute -top-10 left-8">
            <div className="flex items-center justify-center bg-yellow-400 dark:bg-yellow-500 p-2 rounded-full shadow-lg">
              <span className="text-gray-800 dark:text-black text-lg font-bold">
                👥
              </span>
            </div>
          </div>
          <div className="absolute bottom-10 right-10">
            <div className="flex items-center justify-center bg-blue-500 dark:bg-blue-600 p-4 rounded-lg shadow-lg">
              <span className="text-white text-lg font-bold">📊</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesComponent;
