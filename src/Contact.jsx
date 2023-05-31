import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import SocialMediaIcons from "./SocialMediaIcons";
const Contact = () => {
    return (
        <section id="contact" className="contact py-48">
        <p className="font-playfair font-semibold text-4xl text-yellow">
          CONTACT ME
        </p>
        <LineGradient width="w-1/2" />
        <p className="font-playfair font-semibold text-3xl mt-10 mb-10" >Mobile: +4478 77948 788</p>
        <p className="font-playfair font-semibold text-2xl mt-10 mb-10">Email:  olha.d@yahoo.com</p>
        <div className="flex md: my-5">
          
        </div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
    
         <div className="bg-white h-20"><SocialMediaIcons /></div>
          
        </motion.div>
      </section>
      
    )
}
  export default Contact;