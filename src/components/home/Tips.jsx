import {
  Sun,
  Droplet,
  SparklesFill,
  ShieldCheck,
} from "@gravity-ui/icons";

const tips = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
    title: "Use Sunscreen",
    description:
      "Apply SPF 30+ sunscreen daily to protect your skin from harmful UV rays.",
  },
  {
    icon: <Droplet className="w-8 h-8 text-sky-500" />,
    title: "Stay Hydrated",
    description:
      "Drink 8–10 glasses of water throughout the day to stay refreshed.",
  },
  {
    icon: <SparklesFill className="w-8 h-8 text-green-500" />,
    title: "Eat Fresh Fruits",
    description:
      "Include seasonal fruits like watermelon, mango, and oranges in your diet.",
  },
  {
    icon: <Sun className="w-8 h-8 text-yellow-500" />,
    title: "Protect Outdoors",
    description:
      "Wear hats, sunglasses, and light clothing while going outside.",
  },
];

const SummerTips = () => {
  return (
    <section className="bg-linear-to-br from-orange-50 via-white to-yellow-50 py-16 px-6 md:px-12 rounded-3xl shadow-sm">
      
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="text-gray-500 font-semibold tracking-widest uppercase mb-3">
          Summer Essentials
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 leading-tight">
          Summer Care Tips
        </h2>
        <p className="text-gray-600 mt-5 text-lg">
          Stay cool, healthy, and protected with these simple summer care tips.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white border border-orange-100 rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
              {tip.icon}
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {tip.title}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {tip.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SummerTips;