import { motion } from "framer-motion";

import { EDUCATION } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

type EducationCardProps = {
  education: (typeof EDUCATION)[number];
  index: number;
};

// Education Card
const EducationCard = ({ education, index }: EducationCardProps) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-3xl w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6"
  >
    <div className="flex-1 w-full">
      <h3 className="text-white font-bold text-[24px] tracking-wide mb-1">
        {education.institution}
      </h3>
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <p className="text-blue-400 font-medium text-[16px] mb-2 sm:mb-0">
          {education.degree}
        </p>
        <p className="text-secondary tracking-wider text-[14px] italic">
          {education.duration}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-4 w-full">
        <p className="text-white text-[15px] opacity-80">
          {education.details}
        </p>
        <p className="text-secondary font-medium text-[14px] mt-2 sm:mt-0 text-right">
          {education.location}
        </p>
      </div>
    </div>
  </motion.div>
);

// Education
export const Education = () => {
  return (
    <SectionWrapper idName="education">
      <div className="mt-12">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>my academic background</p>
          <h2 className={styles.sectionHeadText}>Education.</h2>
        </motion.div>

        <div className="mt-10 flex flex-col gap-2">
          {EDUCATION.map((edu, i) => (
            <EducationCard key={`education-${i}`} education={edu} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
