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

  const [buttonBlock, setButtonBlock] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonBlock(true);
    setStatus(null);

    try {
      // eslint-disable-next-line
      const result = await emailjs.send(
        "service_lwd4z2k",
        "template_9s610sh",
        formData,
        "yhe7iUd8gmUgVzmh6",
      );
      setStatus("success");
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => {
        setStatus(null);
      }, 6000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setStatusMessage(
        "Failed to send the message. Please try again or email me directly.",
      );
    } finally {
      setButtonBlock(false);
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
        {status && (
          <motion.div
            className={`status-message ${status}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {status === "success" ? (
              <i className="fa-solid fa-circle-check"></i>
            ) : (
              <i className="fa-solid fa-circle-xmark"></i>
            )}
            <span>{statusMessage}</span>
          </motion.div>
        )}

        <motion.div className="row" variants={fieldAnim}>
          <motion.div
            className="form-group floating-group"
            variants={fieldAnim}
          >
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label htmlFor="user_name">Name</label>
            <span className="input-focus-line"></span>
          </motion.div>
          <motion.div
            className="form-group floating-group"
            variants={fieldAnim}
          >
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <label htmlFor="user_email">Email</label>
            <span className="input-focus-line"></span>
          </motion.div>
        </motion.div>

        <motion.div className="form-group floating-group" variants={fieldAnim}>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="subject">Subject</label>
          <span className="input-focus-line"></span>
        </motion.div>

        <motion.div className="form-group floating-group" variants={fieldAnim}>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            required
          ></textarea>
          <label htmlFor="message">Message...</label>
          <span className="input-focus-line"></span>
        </motion.div>

        <motion.button
          type="submit"
          disabled={buttonBlock}
          whileHover={{ scale: buttonBlock ? 1 : 1.05 }}
          whileTap={{ scale: buttonBlock ? 1 : 0.95 }}
          variants={fieldAnim}
          style={{
            opacity: buttonBlock ? 0.6 : 1,
            cursor: buttonBlock ? "not-allowed" : "pointer",
            pointerEvents: buttonBlock ? "none" : "auto",
          }}
        >
          {buttonBlock ? (
            <>
              <i
                className="fa fa-spinner fa-spin"
                style={{ marginRight: "8px" }}
              ></i>
              Sending...
            </>
          ) : (
            "Submit"
          )}
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default Form;
