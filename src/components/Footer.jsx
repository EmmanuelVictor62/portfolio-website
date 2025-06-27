import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navigationLinks = [
    {
      title: "Sections",
      links: [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Portfolio", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Twitter (X)",
          href: "https://x.com/royalmanuel62",
          icon: FaTwitter,
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/emmanuel-victor-isaac/",
          icon: FaLinkedin,
        },
        {
          name: "GitHub",
          href: "https://github.com/EmmanuelVictor62",
          icon: FaGithub,
        },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-dark bg-grid relative pt-24 pb-12">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-bold gradient-text"
            >
              Emmanuel Victor
            </motion.h3>
            <p className="text-neutral-400">
              Made remotely with 💜 and passion
              <br />- Emmanuel Victor
            </p>
          </div>

          {/* Navigation Sections */}
          {navigationLinks.map((section, sectionIndex) => (
            <div key={section.title} className="space-y-6">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="text-lg font-semibold text-white"
              >
                {section.title}
              </motion.h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-neutral-400 hover:text-accent-light transition-colors flex items-center gap-2"
                    >
                      {link.icon && <link.icon className="w-5 h-5" />}
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter Section */}
          <div className="space-y-6">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg font-semibold text-white"
            >
              Subscribe Form
            </motion.h4>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-neutral-500"
              />
              <button type="submit" className="btn-primary w-full">
                Subscribe Us
              </button>
            </motion.form>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-400 text-sm"
        >
          <p>
            &copy; {new Date().getFullYear()} Emmanuel Victor. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent-light transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-accent-light transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
