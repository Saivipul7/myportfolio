import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

const CallToAction = () => {
  return (
    <SectionWrapper idName="cta">
      <div className="bg-tertiary rounded-2xl p-10 flex flex-col items-center justify-center text-center border-2 border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-2xl shadow-blue-500/5 mt-10">
        <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)}>
          <p className={`${styles.sectionSubText} text-blue-400 font-semibold mb-2`}>
            Ready to start a project?
          </p>
          <h2 className={`${styles.sectionHeadText} mb-6 tracking-tight`}>
            Let's hop on a call!
          </h2>
          <p className="text-secondary text-[18px] max-w-3xl leading-[30px] mb-10 opacity-80 italic">
            "The best way to predict the future is to create it together."
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center w-full max-w-md mx-auto">
            <a
              href="tel:9652795981"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-blue-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 hover:bg-blue-700 hover:scale-110 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              <span className="flex items-center gap-3">
                <span className="text-2xl animate-pulse">📞</span>
                <span className="text-xl">Book a Call</span>
              </span>
            </a>
          </div>
          
          <p className="mt-8 text-secondary text-[14px] font-medium opacity-60">
            Direct Line: +91 9652795981
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default CallToAction;
