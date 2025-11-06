import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  EnvelopeIcon,
  CalendarIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "Failed to send message. Please try again or contact directly via email.",
        },
      });
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: "Email",
      value: "emmanuelvictor.dev@gmail.com",
      link: "mailto:emmanuelvictor.dev@gmail.com",
    },
    {
      icon: PhoneIcon,
      title: "Whatsapp",
      value: "+234 708 285 8032",
      link: "tel:+2347082858032",
    },
    {
      icon: CalendarIcon,
      title: "Schedule",
      value: "Book a consultation",
      link: "https://calendly.com/royalmanuel62/30min",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-dark bg-grid relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="heading">
            Let's Start a<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Conversation
          </h2>
          <p className="subheading mx-auto px-4 sm:px-0">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 px-4 sm:px-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 lg:space-y-12"
          >
            <div className="space-y-4 md:space-y-6 lg:space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card group flex items-center gap-4 md:gap-6 cursor-pointer p-4 md:p-6"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-5 h-5 md:w-6 md:h-6 text-accent-light" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs md:text-sm text-neutral-400 mb-1">
                      {info.title}
                    </h4>
                    <p className="text-base md:text-lg font-medium gradient-text break-words">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="card space-y-4 md:space-y-6 p-4 md:p-6 lg:p-8"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-neutral-500 text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-neutral-500 text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-neutral-400 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-neutral-500 text-sm md:text-base"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-400 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-neutral-500 resize-none text-sm md:text-base"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full bg-accent hover:bg-accent-light text-white font-medium py-3 md:py-3.5 rounded-lg transition-colors duration-300 disabled:opacity-50 text-sm md:text-base"
              >
                {status.submitting ? "Sending..." : "Send Message"}
              </button>

              {status.info.msg && (
                <div
                  className={`text-sm ${
                    status.info.error ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {status.info.msg}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
