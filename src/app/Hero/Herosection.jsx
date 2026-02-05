import Products from "./Products"

const Herosection = () => {
  return (
    <>
       <section className="w-full h-[45vh] flex justify-center items-center">
           <div className="">
            <h1 className="md:text-6xl text-4xl  text-[#666666]  font-bungee font-bold p-5 ">
              Find Product That Match Your Style
            </h1>
            <p className="text-black flex justify-center border border-black/30 border-t-0 rounded-lg m-2 ">
              Make Your Look So Classy
            </p>
           </div>
       </section>
       <section>
        <Products/>
       </section>
    </>
  )
}

export default Herosection
