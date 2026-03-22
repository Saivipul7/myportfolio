import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from "react";
import { toast } from "sonner";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";

export const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Initialize EmailJS on mount for server readiness
  useEffect(() => {
    const publicKey = import.meta.env.VITE_APP_EMAILJS_KEY;
    if (publicKey) emailjs.init(publicKey);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = import.meta.env.VITE_APP_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_KEY;
    const receiverEmail = import.meta.env.VITE_APP_EMAILJS_RECIEVER || "vipullpu7@gmail.com";

    // If keys are missing, show setup guide instead of redirecting
    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      toast.error("EmailJS Configuration Missing!", {
        description: "Please check the .env file and add your API keys.",
        duration: 5000,
      });
      console.warn("EmailJS Keys missing. Redirecting to mailto fallback for convenience...");
      
      const subject = encodeURIComponent(`Message from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
      window.location.href = `mailto:${receiverEmail}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Sai Vipul",
          from_email: form.email,
          reply_to: form.email,
          to_email: receiverEmail,
          message: form.message,
        },
        publicKey
      );

      setLoading(false);
      setShowModal(true);
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setLoading(false);
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <SectionWrapper idName="contact">
      <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative">
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-white/10 backdrop-blur-sm shadow-2xl relative"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-blue-500/50 transition-all font-medium"
                disabled={loading}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-blue-500/50 transition-all font-medium"
                disabled={loading}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                required
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-blue-500/50 transition-all font-medium resize-none"
                disabled={loading}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-opacity-80 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group flex items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Success Pop-up Modal */}
          <AnimatePresence>
            {showModal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-50 flex items-center justify-center p-6"
              >
                <div 
                  className="absolute inset-0 bg-black/60 backdrop-blur-md rounded-2xl" 
                  onClick={() => setShowModal(false)}
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-tertiary border border-white/10 p-10 rounded-3xl shadow-2xl relative z-10 flex flex-col items-center text-center max-w-sm"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-2">Email Sent!</h4>
                  <p className="text-secondary mb-8">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all active:scale-95"
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
