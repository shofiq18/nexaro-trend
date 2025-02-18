export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        {/* Limit the title to 2 lines with ellipsis */}
        <h3 className="text-lg font-semibold line-clamp-2">{product.name}</h3>
        <p className="text-gray-500 mb-16">{product.price}</p>
        <div class="grid grid-cols-2 gap-1 print:hidden">
          <button class="md:font-SFProDisplaySemibold  whitespace-nowrap text-2xs bg-primary border border-primary rounded py-1 px-[2px] md:px-2 text-white duration-300">Buy Now</button>
          <button class="md:font-SFProDisplaySemibold whitespace-nowrap text-2xs bg-white border border-primary rounded py-1 px-[2px] md:px-2 text-primary duration-300">Add to Cart</button>
        </div>

      </div>
    </div>
  );
}
