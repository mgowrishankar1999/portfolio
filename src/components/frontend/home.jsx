import React from "react";
import { motion } from "framer-motion";
import Navbar from "../frontend/navbar";

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
                            src="https://via.placeholder.com/150?text=Profile+Photo"
                            alt="Gowrishankar Menapati"
                            className="w-24 h-24 rounded-full mr-4 object-cover"
                        />
                        <div>
                            <h1 className="text-5xl md:text-7xl font-extrabold">
                                Gowrishankar Menapati
                            </h1>
                            <p className="text-lg md:text-xl mt-2">
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
                className="py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
                    <ul className="list-disc list-inside max-w-3xl mx-auto text-lg">
                        {[
                            { name: "ISCSITR Journal", url: "https://iscsitr.org" },
                            { name: "PRJ Publication", url: "https://prjpublication.com" },
                            { name: "IJSRCIT Journal", url: "https://ijsrcsit.com" },
                            { name: "Mayura Silks E-Commerce", url: "https://demomayura.uthsoftware.com" },
                            { name: "ERP System", url: "#" },
                            { name: "APIETA", url: "#" },
                        ].map((project) => (
                            <motion.li
                                key={project.name}
                                className="mb-2"
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:underline"
                                >
                                    {project.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.section>

            {/* Archives Section */}
            {/* <motion.section
                id="archives"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-6">Journal Archives</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-8">
                        At IAEME Publications, I built search-enabled archive interfaces for journals like ISCSITR, enabling researchers to find articles, authors, and universities effortlessly. Try a mock search below or explore IAEME’s archives.
                    </p>
                    <motion.div
                        className="max-w-xl mx-auto mb-8"
                        initial={{ scale: 0.9 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <input
                            type="text"
                            placeholder="Search articles, authors, or journals..."
                            className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                            disabled
                        />
                    </motion.div>
                    <a
                        href="https://iaeme.com/JournalArchives.asp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full hover:bg-indigo-100 transition-colors duration-300"
                    >
                        Explore IAEME Archives
                    </a>
                </div>
            </motion.section> */}

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