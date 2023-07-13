import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import linkImg from '../assets/link.png'
import telegramImg from '../assets/telegram.png'
import linkedinImg from '../assets/linkedin.png'
import emailImg from  '../assets/email.png'

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>My contacts</h3>

        <div className='flex items-center'>
          <img  className='w-7 h-7' src={telegramImg} alt="my telegram"/>
        <p className={`${styles.sectionSubText} pl-3 max-[360px]:text-[12px]` }>Telegram  - <a href="https://t.me/vladosdc" className={styles.sectionContactLink}>@vladosdc</a></p>
          <img className="m-1 w-6 h-6" src={linkImg} alt="click link image"/>
        </div>

        <div className='flex items-center mt-5'>
          <img  className='w-7 h-7' src={linkedinImg} alt="my linkedin"/>
          <p className={`${styles.sectionSubText} pl-3 max-[360px]:text-[12px]` }>LinkedIn  - <a href="https://www.linkedin.com/in/vladosdc/" className={styles.sectionContactLink}>Vladislav Ivanov</a></p>
          <img className="m-1 w-6 h-6" src={linkImg} alt="click link image"/>
        </div>

        <div className='flex items-center mt-5'>
          <img  className='w-7 h-7' src={emailImg} alt="my linkedin"/>
          <p className={`${styles.sectionSubText} pl-3 max-[360px]:text-[12px]` }>Email  - <a href="mailto:vl092006@gmail.com" className={styles.sectionContactLink}>vl092006@gmail.com</a></p>
          <img className="m-1 w-6 h-6" src={linkImg} alt="click link image"/>
        </div>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
