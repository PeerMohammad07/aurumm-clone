import React from "react";

const SingleProduct:React.FC<any> = ({data}) => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 md:flex items-center justify-between">
        <div className="mb-8 md:mb-0 md:w-1/2">
        <h1 className="py-5">{data.name}</h1>
          <h2 className="text-3xl font-bold md:text-4xl">
            <span className="text-yellow-500">{data.title}</span>
          </h2>
          <p className="text-lg mt-4">
            {data.description}
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={data.img}
            alt="Three Phones"
            className="w-full h-96 max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
