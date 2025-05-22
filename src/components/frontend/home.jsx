import React from "react";
import { motion } from "framer-motion";
import Navbar from "../frontend/navbar";
import gowrishankar from "../../assets/gowrishankar.jpg"
const Home = () => {
    // Animation variants for fade-in effect
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
    };

    // Typewriter effect for hero
    const typewriter = {
        hidden: { width: 0 },
        visible: {
            width: "auto",
            transition: { duration: 2, ease: "easeInOut" },
        },
    };

    // Staggered animation for project items
    const projectContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const projectItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Project data with placeholder logo URLs
    const projects = [
        {
            name: "ISCSITR Journal",
            url: "https://iscsitr.org",
            logo: "https://via.placeholder.com/40?text=ISCSITR",
        },
        {
            name: "PRJ Publication",
            url: "https://prjpublication.com",
            logo: "https://via.placeholder.com/40?text=PRJ",
        },
        {
            name: "IJSRCIT Journal",
            url: "https://ijsrcsit.com",
            logo: "https://via.placeholder.com/40?text=IJSRCIT",
        },
        {
            name: "Mayura Silks E-Commerce",
            url: "https://demomayura.uthsoftware.com",
            logo: "https://via.placeholder.com/40?text=Mayura",
        },
        {
            name: "ERP System",
            url: "#",
            logo: "https://via.placeholder.com/40?text=ERP",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 text-gray-800">
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <motion.section
                id="home"
                className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-24"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex items-center justify-center mb-4">
                        <img
                            src={gowrishankar}
                            alt="Gowrishankar Menapati"
                            className="md:h-80 md:w-80 h-24 w-24 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold">
                                Gowrishankar Menapati
                            </h1>
                            <p className="text-lg md:text-xl mt-2 text-gray-200">
                                2+ Years of Frontend Development Experience
                            </p>
                        </div>
                    </div>
                    <motion.p
                        className="text-xl md:text-3xl mb-8 overflow-hidden whitespace-nowrap"
                        variants={typewriter}
                    >
                        Frontend Developer | Crafting Seamless Web Experiences
                    </motion.p>
                    <a
                        href="#projects"
                        className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                    >
                        Explore My Projects
                    </a>
                </div>
            </motion.section>

            {/* About Section */}
            <motion.section
                id="about"
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
                    <motion.div
                        className="bg-white rounded-lg shadow-lg p-6 max-w-3xl mx-auto hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.02 }}
                    >
                        <p className="text-lg text-gray-700">
                            <strong>IAEME Publications (Apr 2025–Present):</strong> Frontend Developer, building journal platforms (ISCSITR, PRJ Publication, IJSRCIT) with React.js and Tailwind CSS.<br />
                            <strong>UTH Software Pvt Ltd (Apr 2024–Mar 2025):</strong> Developed Mayura Silks e-commerce and ERP system using React.js, Node.js, and Firebase.<br />
                            <strong>Sithafal Technologies (Aug 2023–Mar 2024):</strong> Intern, contributed to APIETA project with React.js and Bootstrap.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Tech Stack Section */}
            <motion.section
                id="tech-stack"
                className="py-16 bg-gray-100"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-8 text-center">Tech Stack</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {[
                            "React.js",
                            "Tailwind CSS",
                            "Node.js",
                            "Firebase",
                            "JavaScript",
                            "HTML",
                            "CSS",
                            "Bootstrap",
                            "Vite",
                            "Material UI",
                            "REST APIs",
                        ].map((tech) => (
                            <motion.span
                                key={tech}
                                className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Projects Section */}
            <motion.section
                id="projects"
                className="py-16 bg-gradient-to-b from-gray-50 to-gray-200"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={projectContainer}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {projects.map((project) => (
                            <motion.div
                                key={project.name}
                                className="flex items-center bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
                                variants={projectItem}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src={project.logo}
                                    alt={`${project.name} Logo`}
                                    className="w-12 h-12 mr-4 object-contain"
                                    whileHover={{ scale: 1.2 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg font-semibold text-indigo-600 hover:underline"
                                    >
                                        {project.name}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Contact Section */}
            <motion.section
                id="contact"
                className="bg-gray-800 text-white py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-lg mb-8">
                        Want to collaborate or discuss my work? Reach out via email or connect with me on social platforms!
                    </p>
                    <motion.div
                        className="flex justify-center space-x-6"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a
                            href="mailto:mgowrishankar1998@gmail.com"
                            className="text-indigo-400 hover:text-indigo-300"
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/gowrishankar-menapati-240504220/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/mgowrishankar1999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:text-indigo-300"
                        >
                            GitHub
                        </a>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
};

export default Home;