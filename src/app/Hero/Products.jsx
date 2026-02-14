import Image from "next/image";
import Link from "next/link";

const Products = () => {
  const images = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
  ];
  const images1 = [
    "/image1.png",
    "/image2.png",
    "/image3.png",
    "/image4.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
    "/image5.png",
  ];

  return (
    <>
      <section>
        <header className="m-5 border border-black/30 border-b-0 p-1 flex justify-center rounded-lg">
         Feathured Products
        </header>
        <main>
          <div className=" md:ml-10 flex gap-5 overflow-x-auto no-scrollbar scroll-smooth md:grid md:grid-cols-4 md:overflow-x-visible md:gap-5 ">
            {images.map((src, index) => (
              <div
                key={index}
                className="transition tranform hover:scale-102 md:h-[420px] md:flex-shrink-0 md:w-[300px] h-[200px] w-[350px] ml-5 md:ml-0 border border-black/30 rounded-lg p-10"
              >
                <div className="relative md:h-[300px] w-full h-[100px] cursor-pointer transition tranform hover:scale-102">
                  <Link href={`/product/${index + 1}`}>
                    <Image
                      src={src}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-cover transition tranform hover:scale-110"
                    />
                  </Link>
                </div>
                <a
                  href={`/product/${index + 1}`}
                  className="cursor-pointer select-none bg-black text-white md:p-3 rounded-lg flex justify-center mt-2 hover:bg-black/30 hover:text-black text-sm md:text-lg p-2 text-center whitespace-nowrap w-full"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </main>
      </section>
      <section>
        <main className="pt-10">
          <div className="flex gap-5 overflow-x-auto no-scrollbar scroll-smooth md:grid md:grid-cols-4 md:overflow-x-visible md:gap-5 md:ml-10">
            {images1.map((src, index) => (
              <div
                key={index}
                className="md:h-[420px] md:flex-shrink-0 md:w-[300px] h-[200px] w-[350px] ml-5 md:ml-0 border border-black/30 rounded-lg p-10"
              >
                <div className="relative md:h-[300px] w-full h-[100px] cursor-pointer transition tranform hover:scale-102">
                  <Link href={`/product/${index + 1}`}>
                    <Image
                      src={src}
                      alt={`Product ${index + 1}`}
                      fill
                      className="object-cover transition tranform hover:scale-110"
                    />
                  </Link>
                </div>
                <a
                  href={`/product/${index + 1}`}
                  className="cursor-pointer select-none bg-black text-white md:p-3 rounded-lg flex justify-center mt-2 hover:bg-black/30 hover:text-black text-sm md:text-lg p-2 text-center whitespace-nowrap w-full"
                >
                  Buy Now
                </a>
              </div>
            ))}
          </div>
        </main>
      </section>
    </>
  );
};

export default Products;