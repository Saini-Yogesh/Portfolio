import React, { useState } from "react";
import "./FormCSS.css";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.send(
        "service_lwd4z2k",
        "template_9s610sh",
        formData,
        "yhe7iUd8gmUgVzmh6"
      );
      console.log(result.text);
      alert("Message sent successfully!");
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error.text);
      alert("Failed to send the message, please try again.");
    }
  };

  const fieldAnim = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      className="contact-form"
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <i className="fa-solid fa-user"></i> Contact Me
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <motion.div className="row" variants={fieldAnim}>
          <motion.div className="form-group" variants={fieldAnim}>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </motion.div>
          <motion.div className="form-group" variants={fieldAnim}>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </motion.div>
        </motion.div>

        <motion.div className="form-group" variants={fieldAnim}>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
          />
        </motion.div>

        <motion.div className="form-group" variants={fieldAnim}>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message..."
            required
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={fieldAnim}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Form;
