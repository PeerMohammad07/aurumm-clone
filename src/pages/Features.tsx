const Features = () => {
  const features = [
    {
      title: "Stock & RFID Inventory Management",
      description:
        "Utilize RFID technology for precise inventory tracking and efficient stock management.",
      items: [
        { icon: "📦", title: "Precision Tracking" },
        { icon: "📊", title: "Efficient Stock Control" },
      ],
    },
    {
      title: "Order Management",
      description:
        "Simplify order processing and tracking to enhance customer service and satisfaction.",
      items: [
        { icon: "📜", title: "Streamlined Processing" },
        { icon: "📍", title: "Enhanced Tracking" },
      ],
    },
    {
      title: "Karighar Management",
      description:
        "Effectively manage artisans and workshops to ensure smooth production processes.",
      items: [
        { icon: "🛠️", title: "Artisan Coordination" },
        { icon: "🏭", title: "Workshop Oversight" },
      ],
    },
    {
      title: "Staff Management",
      description:
        "Efficiently handle employee scheduling, performance tracking, and payroll management.",
      items: [
        { icon: "📅", title: "Schedule Optimization" },
        { icon: "📈", title: "Performance Tracking" },
      ],
    },
    {
      title: "HUID",
      description:
        "Implement unique identifiers for products to enhance security and streamline inventory management.",
      items: [
        { icon: "🔒", title: "Unique Product Identification" },
        { icon: "🛡️", title: "Enhanced Security Measures" },
      ],
    },
    {
      title: "Scheduled Report & Notification",
      description:
        "Stay informed with scheduled reports and timely notifications for better decision-making and operational efficiency.",
      items: [
        { icon: "⏰", title: "Timely Insights" },
        { icon: "🔔", title: "Proactive Alerts" },
      ],
    },
  ];

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
