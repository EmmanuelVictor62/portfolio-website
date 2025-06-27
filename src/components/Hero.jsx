import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-padding bg-gradient-dark bg-grid relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="bottom-glow"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <h2 className="text-xl md:text-2xl text-accent-light font-medium mb-4">
            Next-Gen AI & Automation
          </h2>
          <h1 className="heading mb-6">
            Automating Business
            <br />
            <span className="gradient-text">For The Future</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <p className="subheading mx-auto">
            Automation Specialist crafting intelligent workflows and AI-powered
            solutions that drive business efficiency and growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
        >
          <a href="#projects" className="btn-primary">
            Explore My Work
          </a>
          <a
            href="https://calendly.com/emmanuel-victor"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Schedule a Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years Experience", value: "5+" },
            { label: "Satisfied Clients", value: "30+" },
            { label: "Technologies", value: "15+" },
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-3xl font-bold gradient-text">{stat.value}</h3>
              <p className="text-neutral-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
