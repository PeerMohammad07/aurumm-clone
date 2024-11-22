import { features } from "../data/AllData";

const Features = () => {


  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-black dark:to-gray-900 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-extrabold text-black dark:text-gray-200 mb-8">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 bg-white dark:bg-black rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div>
                <h3 className="text-xl font-bold text-black dark:text-gray-100 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>
              </div>
              <div className="flex space-x-4">
                {feature.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-blue-50 dark:bg-black rounded-full px-4 py-2 shadow-sm"
                  >
                    <span className="text-green-600 dark:text-green-400 text-lg">
                      {item.icon}
                    </span>
                    <span className="text-black dark:text-gray-300 text-sm font-medium">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
