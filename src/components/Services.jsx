import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ChatBubbleBottomCenterTextIcon,
  CogIcon,
  LightBulbIcon,
  ArrowsPointingOutIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

const Services = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cards = document.getElementsByClassName("card");

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

  const services = [
    {
      title: "Workflow Automation",
      description:
        "End-to-end automation solutions that streamline your business processes, reduce manual work, and increase efficiency.",
      features: [
        "Custom workflow design",
        "Process optimization",
        "Integration setup",
        "Performance monitoring",
      ],
    },
    {
      title: "AI Integration",
      description:
        "Harness the power of artificial intelligence to enhance your applications and automate complex decision-making processes.",
      features: [
        "AI model integration",
        "Natural language processing",
        "Predictive analytics",
        "Automated learning",
      ],
    },
    {
      title: "API Development",
      description:
        "Robust and scalable API solutions that connect your systems and enable seamless data flow across your organization.",
      features: [
        "RESTful API design",
        "GraphQL implementation",
        "API documentation",
        "Performance optimization",
      ],
    },
    {
      title: "Technical Consulting",
      description:
        "Expert guidance on technology strategy, architecture decisions, and best practices for your automation initiatives.",
      features: [
        "Technology assessment",
        "Architecture planning",
        "Best practices",
        "Team training",
      ],
    },
  ];

  return (
    <section
      id="services"
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
          <h2 className="heading">
            Transforming Ideas Into
            <br />
            Automated Reality
          </h2>
          <p className="subheading mx-auto">
            Comprehensive automation services designed to streamline your
            operations and drive business growth through innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <h3 className="text-2xl font-semibold gradient-text mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-400 mb-8">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
