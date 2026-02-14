import Image from "next/image";
const page = async({params}) => {
const {id} = await params;

let product;
if ( id === "1" ){
    product = {
        title : 'Pipe Cleaner Flower ',
        description: '500Pcs Pipe Cleaners Twisting Sticks Soft Chenille Rods for DIY Craft Handmade Flowers, Kids Floral Decor Pipe Cleaner, Home Decor in Just',
        image :  '/pin1.png',
        buySubHead : 'To Make Your MindBlowng Craft In Reality ',
        mbsubhead : 'To Make Your Creative Craft  ',
        click: ' Click Down To Get',
        arrowImg: '/arrow.png',
        price: 'USD 29.52',
        buylink: 'https://s.click.aliexpress.com/e/_c3quTinH'
    }
} else if( id === "2"){
    product = {
        title:'Tannig Oil Applicator',
        description:'1Pcs Tanning Oil Painting Tool Brown Back Beautify Belt Self-Tanning Applicator Back Massage Strap Lotion Wiping Tool Just in',
        image: '/pin2.png',
        buySubHead:'To Make Your Tan Oil Fully Absorbed',
        click:'Click Down To Get',
        arrowImg:'/arrow.png',
        price: 'USD 7.36',
        buylink:'https://s.click.aliexpress.com/e/_c3t43uMP'
    }
}
return (
    <div className="md:h-[100vh] h-[140vh] w-full  flex flex-col md:flex-row ">
    <div className="md:h-[80vh] md:w-1/2 flex items-center justify-center pl-20 pr-20 pt-25  ">
       <Image
       src={product.image}
       height={350}
       width={350}
       alt={product.title}
       className="object-cover rounded-xl"
       />
       </div>
       <div className="mt-10 md:mt-0 md:h-[85vh] md:w-1/2 flex flex-col md:items-start items-center  justify-center   ">
        <h1 className="text-xl border p-1 rounded-lg border-b-0 flex  ">
          {product.title}
        </h1>
        <h2 className="md:w-[28vw] md:mt-10 mt-5 md:text-xl text-[#666666] border border-t-0 border-b-0 rounded-lg text-center ">
          {product.description}
        </h2>
        <h3 className="w-1/2 flex justify-center md:ml-5 mt-2 border border-t-0 rounded-lg text-lg">
            {product.price}
        </h3>
        <h4 className="md:mt-15 md:text-white md:bg-black rounded-lg hidden md:flex">
            {
                product.buySubHead
            }
        </h4>
        <h5 className="md:hidden flex  mt-3 bg-black text-white rounded-lg">
            {product.mbsubhead}
        </h5>
        <p className="md:w-1/2 flex justify-center   mt-5">
            {product.click}
        </p>
        <Image
        src={product.arrowImg}
        height={100}
        width={100}
        alt="Arrow Mark"
        className="object-cover flex  md:ml-32"
        />
        <div className="w-1/2 flex justify-center ">
        <a href={product.buylink} 
         target="_blank"
          rel="noopener noreferrer"
        className="  text-white text-lg bg-blue-500 p-2 rounded-lg">
            Buy Now
        </a>
        </div>
       </div>
      
      
    </div>
  )
}

export default page
