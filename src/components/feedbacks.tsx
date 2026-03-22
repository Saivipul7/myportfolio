import { motion } from "framer-motion";

import { TESTIMONIALS } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { cn } from "../utils/lib";
import { fadeIn, textVariant } from "../utils/motion";

type FeedbackCardProps = {
  index: number;
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
  link?: string;
};

// Feedback Card
const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  link,
}: FeedbackCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[400px] w-full flex flex-col justify-between"
  >
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="text-white font-bold text-[24px] mb-2">{name}</h3>
        <p className="text-blue-400 font-medium text-[16px] mb-4">{company}</p>
        <p className="text-white tracking-wider text-[16px] italic opacity-80 min-h-[100px]">
          "{testimonial}"
        </p>
      </div>

      <div className="mt-7">
        <img
          src={image}
          alt={`cert-${name}`}
          className="w-full h-48 object-contain rounded-xl border-2 border-white/10 hover:border-blue-500/50 transition-colors bg-black-100"
        />
        <div className="flex justify-between items-center mt-4">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-[14px] font-medium underline underline-offset-4 decoration-blue-500/50"
            >
              Verify Certificate
            </a>
          ) : (
            <span></span>
          )}
          <p className="text-secondary text-[14px] font-medium">
            Issued: {designation}
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Feedbacks
export const Feedbacks = () => {
  return (
    <SectionWrapper idName="certifications">
      <div className="mt-12 bg-black-100 rounded-[20px]">
        <div
          className={cn(
            styles.padding,
            "bg-tertiary rounded-2xl min-h-[300px]"
          )}
        >
          {/* Title */}
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>these are my certification</p>
            <h2 className={styles.sectionHeadText}>Certifications.</h2>
          </motion.div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="mt-[-80px] pb-14 overflow-x-auto custom-scrollbar mask-gradient-x px-4 sm:px-16">
          <div className="flex gap-7 w-fit pb-4">
            {TESTIMONIALS.map((testimonial, i) => (
              <div key={`${testimonial.name}-orig`} className="flex-none">
                <FeedbackCard index={i} {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
