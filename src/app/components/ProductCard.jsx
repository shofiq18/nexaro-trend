export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md overflow-hidden transition-transform transform">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* Limit the title to 2 lines with ellipsis and set a consistent height */}
        <h3 className="text-lg font-semibold line-clamp-2 h-12">{product.name}</h3>
        {/* Set a consistent height for the price section */}
        <p className="text-gray-500 h-6">{product.price}</p>
        <div className="grid grid-cols-2 gap-2 mt-8">
          <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-orange-400 border border-orange-500 rounded py-1 px-[2px] md:px-2 text-white duration-300">
            Buy Now
          </button>
          <button className="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs border border-orange-500 rounded py-1 px-[2px] md:px-2 text-orange-500 duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
