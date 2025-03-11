import { motion } from "framer-motion";

const About = () => {
  const experiences = [
    {
      company: "AI InspiredShifter",
      role: "Automation Specialist",
      period: "2025",
      location: "Australia (Remote)",
      achievements: [
        "Developed end-to-end automation pipelines for AI-powered video generation using ComfyUI and open-source models (Wan 2.2, Hauyan), enabling long-form YouTube content creation",
        "Implemented dynamic subtitle generation and automated voiceover workflows using VibeVoice, streamlining video production processes",
        "Automated content promotion and blog post generation workflows for digital products and services, improving reach and engagement",
        "Built image upscaling and mockup automation pipelines using ComfyUI workflows with Qwen Image Edit and Real-Esrgan, supporting Etsy artwork promotion",
        "Optimized multi-step automation systems, reducing manual content production effort by over 70%"
      ]
    },
    {
      company: "Northsnow Ltd",
      role: "Automation Engineer",
      period: "2024 - 2025",
      location: "United Kingdom (Remote)",
      achievements: [
        "Architected and implemented end-to-end automation solutions for enterprise clients using n8n and custom integrations",
        "Led the development of AI-powered workflow automation systems, reducing manual processes by 75%",
        "Designed scalable automation architecture handling 100K+ daily workflow executions",
        "Mentored team members in automation best practices and emerging technologies",
      ],
    },
    {
      company: "Curator Video Research",
      role: "Senior Frontend Developer",
      period: "2024 - 2025",
      location: "Cincinnati, United States (Remote)",
      achievements: [
        "Migrated platform from AngularJS to ReactJS, reducing load times by 30%",
        "Developed custom live streaming solution with AWS IVS supporting 1000+ concurrent viewers",
        "Built real-time chat using WebSocket and Redux Toolkit, improving engagement by 40%",
        "Created 30+ reusable components in StorybookJS, reducing development time by 25%",
      ],
    },
    {
      company: "Avocado",
      role: "Lead Frontend Developer",
      period: "2022 - 2024",
      location: "Lagos, Nigeria (Remote)",
      achievements: [
        "Led development of three platforms using React and Next.js",
        "Optimized product page loading speed by 40%, increasing conversion by 15%",
        "Integrated AWS services achieving 99.9% uptime for 100K+ product listings",
        "Implemented GraphQL APIs improving data fetching efficiency by 50%",
      ],
    },
  ];

  const skills = [
    {
      category: "Automation & AI",
      items: [
        { name: "n8n", level: 95 },
        { name: "Make.com", level: 92 },
        { name: "Zapier", level: 90 },
        { name: "AI Integration", level: 88 },
      ],
    },
    {
      category: "Development",
      items: [
        { name: "React/Next.js", level: 92 },
        { name: "TypeScript", level: 90 },
        { name: "Node.js", level: 88 },
        { name: "AWS Services", level: 85 },
      ],
    },
    {
      category: "Integration & APIs",
      items: [
        { name: "REST APIs", level: 95 },
        { name: "GraphQL", level: 90 },
        { name: "WebSocket", level: 88 },
        { name: "Custom APIs", level: 92 },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git/GitHub", level: 95 },
        { name: "Docker", level: 88 },
        { name: "CI/CD", level: 90 },
        { name: "AWS Cloud", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="section-padding bg-gradient-dark bg-grid relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"></div>

      {/* Purple glows */}
      <div className="purple-glow-dim top-20 -left-20"></div>
      <div className="purple-glow-dim bottom-40 -right-20"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="heading">
            Meet the Expert Behind
            <br />
            Digital Excellence
          </h2>
          <p className="subheading mx-auto">
            With over 5 years of experience in automation and development, I
            transform complex challenges into elegant, efficient solutions.
          </p>
        </motion.div>

        {/* Experience Section */}
        <div className="mb-32">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center mb-16"
          >
            Professional Journey
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-xl font-semibold gradient-text mb-2">
                      {exp.role}
                    </h4>
                    <p className="text-accent-light">{exp.company}</p>
                    <p className="text-sm text-neutral-400 mt-1">
                      {exp.location}
                    </p>
                  </div>
                  <span className="text-neutral-400">{exp.period}</span>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-neutral-400">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title text-center mb-16"
          >
            Technical Expertise
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card group"
              >
                <h4 className="text-xl font-semibold gradient-text mb-8">
                  {skill.category}
                </h4>
                <div className="space-y-6">
                  {skill.items.map((item) => (
                    <div key={item.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-neutral-300">{item.name}</span>
                        <span className="text-accent-light">{item.level}%</span>
                      </div>
                      <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className="h-full bg-accent rounded-full"
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
