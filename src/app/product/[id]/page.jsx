import Image from 'next/image';

// Use async for modern Next.js params handling
const ProductPage = async ({ params }) => {
  const { id } = await params; 

  let product;
  
  // Fix 1: Compare to a string "1"
  if (id === "1") {
    product = {
      title: "Niacinamide Serum",
      description: "This serum can help you remove dark spots and brighten the skin",
      image: "/image1.png",
    };
  } else {
    product = {
      // Fix 2: Use backticks for template literals
      title: `Product ${id}`,
      description: "No description available",
      image: `/image${id}.png`,
    };
  }

  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <Image 
        src={product.image} 
        width={350} 
        height={350} 
        alt={product.title} 
        className="object-cover border border-black rounded-lg border-b-0" 
      />
       <h1 className="text-3xl font-bold  w-full flex justify-center items-center">
        {product.title}
      </h1>
      <p className="mt-5">{product.description}</p>
    </div>
  );
};

export default ProductPage;
