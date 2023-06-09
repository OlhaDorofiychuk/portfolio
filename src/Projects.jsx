import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };



    const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">
        {/* HEADINGS */}
        <motion.div
          className="md:w-2/5 mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div>
            <p className="font-playfair font-semibold text-4xl">
              <span className="text-red">PRO</span>JECTS
            </p>
            <div className="flex justify-center mt-5">
              <LineGradient width="w-2/3" />
            </div>
          </div>
          <p className="mt-10 mb-10">
            Here you can find my projects built in React. 
          </p>
        </motion.div>

        
    {/* PROJECTS */}
      <div className="flex justify-center">
      <motion.div
        className="sm:grid sm:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ROW 1 */}
        <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            A simple yet aesthetically pleasing app to search and display movies by using TMDB API. User can search movies by name orgenre and change color scheme from neutral grey to bright blue gradient.
          </div>
          <motion.div variants={projectVariant} className="relative">
          
         <a href="https://olhadorofiychuk.github.io/watch-it/"> <img src={`./assets/first.png`} alt='first' /></a>
        </motion.div>
        <motion.div variants={projectVariant} className="relative">
          <div className="absolute h-full w-full opacity-0 hover:opacity-10 transition duration-500
          bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue;
      ">
        
    
          </div>
          <img className="ml-5" src={`./assets/second.png`} alt='second' />
        </motion.div>
        
        <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            This quick project helped me to understand and use React together with Typescript. I have used React beautitiful DND library in order to implement drag and drop functionality.
          </div>
          <motion.div variants={projectVariant} className="relative">
          
         <a href="https://olhadorofiychuk.github.io/typescript_todo/"><img src={`./assets/third.png`} alt='mytodo' /></a> 
        </motion.div>
        <div/>

        <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            This project has been built using React REST API for the weather and location. Implemented vertical drop down with Accordion for a 7 days forecast.
          </div>
          <motion.div variants={projectVariant} className="relative">
          
          <a href="https://olhadorofiychuk.github.io/weather-app/"> <img src={`./assets/fifth.png`} alt='weather1' /> </a>
        </motion.div>

        <motion.div variants={projectVariant} className="relative">
          <div className="absolute h-full w-full opacity-0 hover:opacity-10 transition duration-500
          bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue;
      ">
        
    
          </div>
          <img src={`./assets/sixth.png`} alt='weather2' height='256'/>
        </motion.div>
        </motion.div>
      </div>
      </section>
        
    )
}
  export default Projects;