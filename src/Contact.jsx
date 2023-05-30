import { motion } from "framer-motion";
import LineGradient from "./LineGradient";
import SocialMediaIcons from "./SocialMediaIcons";
const Contact = () => {
    return (
        <div>
        <p className="font-playfair font-semibold text-4xl text-yellow">
          ONTACT ME
        </p>
        <div className="flex md:justify-end my-5">
          <LineGradient width="w-1/2" />
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
          <SocialMediaIcons />
        </motion.div>
      </div>
      
    )
}
  export default Contact;