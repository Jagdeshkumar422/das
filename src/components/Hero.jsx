// components/Hero.jsx
import herobg from "../assets/img/herobg.jpg"
export default function Hero() {
  return (
    <section className="relative h-[60vh] w-full text-white font-sans">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={herobg} // Replace with your image path
          alt="Hero Background"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl  px-6 py-24 md:py-10 text-left">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Discover Premium <br />
          <span className="text-brand">AI-Generated Adult Content</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white text-opacity-80 max-w-xl">
          Explore our extensive library of AI-generated adult content. Subscribe
          for unlimited access to premium videos and images.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button className="bg-brand text-white px-6 py-3 rounded-lg text-base font-semibold hover:opacity-90 transition">
            Get Started
          </button>
          <button className="border border-brand text-brand px-6 py-3 rounded-lg text-base font-semibold hover:bg-brand hover:text-white transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
