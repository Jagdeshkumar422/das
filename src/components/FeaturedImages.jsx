// components/FeaturedImages.jsx
import { Image as ImageIcon,  Eye, Download  } from 'lucide-react';
import pic from "../assets/img/pic.jpg"
import pic2 from "../assets/img/pic2.jpg"
import pic3 from "../assets/img/pic3.jpg"
import pic4 from "../assets/img/pic4.jpg"
const images = [
  {
    id: 1,
    title: "Ethereal Portrait Series #1",
    tag: "portrait",
    resolution: "4K (3840x2160)",
    locked: true,
    premium: true,
    img: pic,
    like: 3400,
    view: 50000,
  },
  {
    id: 2,
    title: "",
    tag: "",
    resolution: "",
    locked: false,
    premium: true,
    img: pic2,
  },
  {
    id: 3,
    title: "Modern Portrait Collection",
    tag: "artistic",
    resolution: "",
    locked: false,
    premium: false,
    img: pic3,
    description: "A collection of modern portraits enhanced with our AI technology"
  },
  {
    id: 4,
    title: "",
    tag: "artistic",
    resolution: "4K (3840x2160)",
    locked: false,
    premium: true,
    img: pic4,
  }
];

export default function FeaturedImages() {
  return (
    <section className="bg-[#0d1117] text-white font-sans py-12 px-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <ImageIcon className="w-6 h-6 text-brand" />
          Featured Images
        </h2>
        <button className="text-brand font-semibold text-sm">
          View All →
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {images.map((img) => (
    <div
      key={img.id}
      className="rounded-xl overflow-hidden group bg-[#161b22] shadow-md"
    >
      {/* Image Container */}
      <div className="relative w-full">
        <img
          src={img.img}
          alt={img.title || "Featured image"}
          className={`w-full h-full object-cover transition-all duration-300 ${img.locked ? "blur-sm group-hover:blur-none" : ""}`}
        />
         <div className="flex gap-2 flex-wrap w-full px-2 text-sm absolute bottom-3 justify-between">
            {img.tag && (
              <span className="bg-black bg-opacity-60 text-white px-3 py-1 rounded-full">
                {img.tag}
              </span>
            )}
            {img.resolution && (
              <span className="bg-brand bg-opacity-80 text-white px-3 py-1 rounded-full">
                {img.resolution}
              </span>
            )}
          </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between">
        <div>
          {img.title && (
            <h3 className="text-lg font-semibold mb-1">{img.title}</h3>
          )}
          {img.description && (
            <p className="text-sm text-gray-300 mb-2">{img.description}</p>
          )}
          </div>
          <div className="flex gap-2 flex-wrap w-full  text-sm justify-between items-center">
            {img.like && (
              <span className="text-[12px] bg-opacity-60 text-white px-3 py-1 rounded-full">
                ❤️️
                {img.like}
              </span>
            )}
            {img.view && (
              <span className="bg-opacity-80 text-[12px] text-white flex gap-2 items-center rounded-full">
                <Eye size={14}/>{img.view}
              </span>
            )}
            <Download size={24} color="white" className='ml-auto'/>

          </div>
        </div>

        {/* Premium Badge */}
        {img.premium && (
          <span className="absolute top-3 right-3 bg-brand text-white text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
            👑 Premium
          </span>
        )}
      </div>
    </div>
  ))}
</div>

    </section>
  );
}
