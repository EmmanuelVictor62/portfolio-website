import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const ProfessionalJourney = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cards = document.getElementsByClassName("journey-card");

    const handleMouseMove = (e) => {
      for (const card of cards) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    cardsContainerRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardsContainerRef.current?.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  const journeyData = [
    {
      period: "2022 - Present",
      role: "Senior Fullstack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Leading development of enterprise-scale web applications and automation solutions.",
      achievements: [
        "Implemented automated workflows reducing manual tasks by 60%",
        "Led a team of 5 developers in modernizing legacy systems",
        "Introduced microservices architecture improving scalability",
      ],
    },
    {
      period: "2020 - 2022",
      role: "Automation Specialist",
      company: "Digital Solutions Ltd.",
      description:
        "Specialized in creating end-to-end automation solutions for business processes.",
      achievements: [
        "Developed 20+ automation workflows using n8n and Zapier",
        "Reduced processing time by 75% through automation",
        "Integrated AI solutions for smart data processing",
      ],
    },
    {
      period: "2018 - 2020",
      role: "Frontend Developer",
      company: "WebCraft Studios",
      description:
        "Focused on creating responsive and interactive web applications.",
      achievements: [
        "Built 15+ client websites using React and Next.js",
        "Improved site performance scores by 40%",
        "Implemented modern UI/UX best practices",
      ],
    },
  ];

  return (
    <section className="section-padding bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Professional Journey</h2>
          <p className="subheading mx-auto">
            A timeline of my professional growth and key achievements in
            technology and development.
          </p>
        </motion.div>

        <div className="space-y-8" ref={cardsContainerRef}>
          {journeyData.map((item, index) => (
            <motion.div
              key={item.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="journey-card group cursor-pointer"
            >
              <div className="relative z-20 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div className="md:w-1/4">
                  <span className="text-accent-light font-semibold">
                    {item.period}
                  </span>
                  <h3 className="text-2xl font-bold mt-2">{item.role}</h3>
                  <p className="text-neutral-400">{item.company}</p>
                </div>

                <div className="md:w-3/4">
                  <p className="text-lg text-neutral-300 mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-neutral-400"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2"></span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalJourney;
