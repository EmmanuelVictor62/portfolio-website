import { motion } from "framer-motion";
import {
  DocumentArrowDownIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const Resume = () => {
  // Replace these URLs with your actual resume URLs
  const resumeViewUrl =
    "https://drive.google.com/file/d/1CbfqOB95sIjH5hypYl958CORNqGxYetR/view?usp=sharing";
  const resumeDownloadUrl =
    "https://drive.google.com/uc?export=download&id=1CbfqOB95sIjH5hypYl958CORNqGxYetR";

  return (
    <section
      id="resume"
      className="section-padding bg-gradient-dark bg-grid relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"></div>

      {/* Purple glows */}
      <div className="purple-glow-dim top-40 -right-20"></div>
      <div className="purple-glow-dim bottom-20 -left-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading">My Resume</h2>
          <p className="subheading mx-auto">
            Download my resume or view it online to learn more about my
            professional journey and skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.a
            href={resumeViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card group cursor-pointer hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <DocumentMagnifyingGlassIcon className="w-6 h-6 text-accent-light" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  View Resume
                </h3>
                <p className="text-neutral-400">
                  Open my resume in Google Drive to view it online
                </p>
              </div>
            </div>
          </motion.a>

          <motion.a
            href={resumeDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card group cursor-pointer hover:border-accent/50 transition-colors"
          >
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <DocumentArrowDownIcon className="w-6 h-6 text-accent-light" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Download Resume
                </h3>
                <p className="text-neutral-400">
                  Download a copy of my resume to your device
                </p>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
