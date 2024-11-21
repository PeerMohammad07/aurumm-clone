
const testimonials = [
  "/Auss/srikandan.png",
  "/Auss/sayar.png",
  "/Auss/shanthi.png",
  "/Auss/swamy.png",
  "/Auss/thangalakshmi.png",
];

const Testimonials = () => {
  return (
    <div className="relative overflow-hidden w-full h-36">
      <div className="flex items-center space-x-8 animate-scroll">
        {testimonials.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`testimonial-${index}`}
            className="h-full w-auto rounded-sm" 
          />
        ))}
        {testimonials.map((src, index) => (
          <img
            key={index + testimonials.length}
            src={src}
            alt={`testimonial-${index}`}
            className="h-full w-auto rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
