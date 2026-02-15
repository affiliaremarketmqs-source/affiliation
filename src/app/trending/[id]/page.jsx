'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useParams } from 'next/navigation'; // Import useParams

const page = () => { // Remove async
  const { id } = useParams(); // Use useParams to get id

  let product;
  if (id === "1") {
    product = {
      Focused: '🌸 Keep scrolling — see why everyone is buying this pipe cleaner flower kit and get yours today!',
      Heading: `🌸What You Will Love about Having This Set of Pipe Cleaners`,
      Text1: `If you like to make things with your hands, or if you need to find something to do without electronics that is also fun for your children, then you will really enjoy this pipe cleaner set. There are 500 pipe cleaners in a package, so you will never feel like you are “saving” any materials. You can create and experiment, be able to get to know what you like and don’t like, and try different things without worrying about running out of your supply (the pipe cleaners) to experiment with!

These pipe cleaners are very soft, they are colourful, and they are very flexible (able to be bent and twisted), so they make it easy and relaxing to create anything. Use these pipe cleaners to decorate your home, complete a project for your child’s school, or as a creative hobby (endless ideas) without needing tools or specialty skills necessary.

Another great thing about the pipe cleaners is that you only have to buy them once, and you will continue using them time after time for different ideas, seasons and projects.

`,
      Handmade: '/handmade.png',
      pipecleaner: '/pipecleaner.png',
      Benefits: '🌼Benefits That You Will Actually See',
      BeDescription: `Crafting is Easy!
You do not have to be an expert at crafting; You just need to be able to twist and bend!

A great Crafting Tool for Kids & Adults
Kids love the vibrant colors and the soft texture. Adults enjoy how therapeutic and stress-free it is to create.

Creative Crafting on a Budget! There are many different types of flowers, decorations that you can use to create crafts that will be affordable!`,
      Usage: '🌼 How Easy It Is To Use Them',
      Using: `It will take you no more than a few minutes to create one of these pipe cleaner flowers. Twist it and shape it, and there is nothing else. No directions will need to be followed and you won't even feel the pressure from trying to make it look a certain way or "perfect." Each flower you make will come out unique - that why it looks even better.
`,
      Tip: '💡 Genuine Tip',
      Tipdes: 'These crafts are at their best when you stop trying to create "perfect" crafts. Combine colours, let yourself be creative and have fun. The charm of these crafts is that every hand made item has been created uniquely!',
      title: 'Pipe Cleaner Flower ',
      description: '500Pcs Pipe Cleaners Twisting Sticks Soft Chenille Rods for DIY Craft Handmade Flowers, Kids Floral Decor Pipe Cleaner, Home Decor in Just',
      image: '/pin1.png',
      buySubHead: 'To Make Your MindBlowng Craft In Reality ',
      mbsubhead: 'To Make Your Creative Craft  ',
      click: ' Click Down To Get',
      arrowImg: '/arrow.png',
      price: 'USD 29.52',
      buylink: 'https://s.click.aliexpress.com/e/_c3quTinH'
    }
  } else if (id === "2") {
    product = {
      title: 'Tannig Oil Applicator',
      description: '1Pcs Tanning Oil Painting Tool Brown Back Beautify Belt Self-Tanning Applicator Back Massage Strap Lotion Wiping Tool Just in',
      image: '/pin2.png',
      buySubHead: 'To Make Your Tan Oil Fully Absorbed',
      click: 'Click Down To Get',
      arrowImg: '/arrow.png',
      price: 'USD 7.36',
      buylink: 'https://s.click.aliexpress.com/e/_c3t43uMP'
    }
  }

  return (
    <main className="overflow-x-hidden overflow-y-hidden" style={{ scrollBehavior: 'smooth' }}> 
     <motion.div
        className="md:h-[90vh] h-[125vh] w-full flex flex-col md:flex-row"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="md:h-[80vh] md:w-1/2 flex items-center justify-center pl-20 pr-20 pt-25">
          <Image
            src={product.image}
            height={350}
            width={350}
            alt={product.title}
            className="object-cover rounded-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 md:h-[85vh] md:w-1/2 flex flex-col md:items-start items-center justify-center">
          <h1 className="text-xl border p-1 rounded-lg border-b-0 flex">{product.title}</h1>
          <h2 className="md:w-[28vw] md:mt-10 mt-5 md:text-xl text-[#666666] border border-t-0 border-b-0 rounded-lg text-center">
            {product.description}
          </h2>
          <h3 className="w-1/2 flex justify-center md:ml-5 mt-2 border border-t-0 rounded-lg text-lg">
            {product.price}
          </h3>
          <h4 className="md:mt-15 md:text-white md:bg-black rounded-lg hidden md:flex">
            {product.buySubHead}
          </h4>
          <h5 className="md:hidden flex mt-3 bg-black text-white rounded-lg">
            {product.mbsubhead}
          </h5>
          <p className="md:w-1/2 flex justify-center mt-5">{product.click}</p>
          <Image
            src={product.arrowImg}
            height={100}
            width={100}
            alt="Arrow Mark"
            className="object-cover flex md:ml-32"
          />
          <div className="w-1/2 flex justify-center">
            <a
              href={product.buylink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-lg bg-blue-500 p-2 rounded-lg hover:bg-blue-300 hover:text-black ml-2"
            >
              Buy Now
            </a>
          </div>
        </div>
      </motion.div>
      <section className="md:h-[170vh] h-[400vh] ">
        <motion.div
          className="w-[100vw] md:h-[5vh] h-[2vh] flex justify-center items-end p-5 pb-0 md:p-0 text-center" 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl">{product.Heading}</h1>
        </motion.div>
        <motion.div
          className="md:w-[95vw] md:mt-5 md:ml-7 rounded-lg md:text-center flex md:flex-row flex-col"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="m-2 md:m-0 md:w-[50vw] md:h-[50vh] p-6 border md:border-r-0 rounded-lg flex">
            <p className="no-bungee text-lg">{product.Text1}</p>
          </div>
          <div className="md:w-[50vw] flex">
            <Image
              src={product.Handmade}
              height={650}
              width={650}
              alt="Craft Image"
              className="flex justify-center items-center"
            />
          </div>
        </motion.div>
        <motion.div
          className="md:h-[8vh] md:w-[100vw] flex justify-center items-center m-5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h1 className="text-white bg-black rounded-lg md:text-lg">{product.Focused}</h1>
        </motion.div>
        {/* benefits */}
        <motion.div
          className="w-[100vw] md:h-[8vh] h-[15vh] flex justify-center items-end p-5 pb-0 md:p-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-2xl">{product.Benefits}</h1>
        </motion.div>
        <motion.div
          className="flex p-5 flex justify-center items-center mt-5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="w-[90vw] border border-b-0 rounded-lg p-2 no-bungee">{product.BeDescription}</p>
        </motion.div>
        {/* usage */}
        <motion.div
          className="flex w-[100vw] md:h-[10vh] h-[15vh] flex justify-center items-end p-5 pb-0 md:p-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h1 className="text-2xl">{product.Usage}</h1>
        </motion.div>
        <motion.div
          className="md:w-[95vw] md:mt-5 md:ml-7 rounded-lg md:text-center flex md:flex-row flex-col"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="m-2 md:m-0 md:w-[50vw] md:h-[46vh] border-b-0 p-5 border md:border-r-0 rounded-lg flex justify-center items-center">
            <p className="no-bungee text-lg">{product.Using}</p>
          </div>
          <div className="md:w-[50vw] flex">
            <Image
              src={product.pipecleaner}
              height={650}
              width={650}
              alt="Craft Image"
              className="flex justify-center items-center rounded-xl p-4 md:p-0"
            />
          </div>
        </motion.div>
        {/* tip */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h1 className="mt-10 ml-10 mb-2 text-2xl">{product.Tip}</h1>
          <p className="no-bungee w-[90vw] flex ml-10">{product.Tipdes}</p>
        </motion.div>
      </section>

     
    </main>
  );
};

export default page;