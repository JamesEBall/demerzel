"use client";

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 } 
  }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};


export default function Home() {
  return (
    <main className="font-roboto max-w-[700px] mx-auto p-4 md:p-8">
      {/* Section 1 */}
      <motion.div 
        className="flex flex-col justify-center min-h-screen text-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <motion.h1 
          className="typed-out justify-center mb-8 md:mb-12 text-lg"
          variants={fadeInUp}
        >
          We are Nethermind
        </motion.h1>
        <motion.div 
          className="space-y-6 md:space-y-8 mb-12 md:mb-16"
          variants={staggerChildren}
        >
          <motion.p className="text-lg" variants={fadeInUp}>
            We are a team of dedicated builders who exist at the intersection of two
            transformative technologies: Blockchain and Robotics.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Fundamentally we believe that Robotics will be a transformative force, disrupting
            societies and economies. We envision a future where robotic technology is
            abundant, where humans and robots collaborate safely and securely.
          </motion.p>
          <motion.p variants={fadeInUp}>
            Underpinning this vision is a shared belief that the technologies securing the
            future of ubiquitous robotics will be collaborative, leveraging blockchain-based
            security and economic mechanisms. A future where sovereignty over identity and
            capital will be paramount to our safe co-existence with machine.
          </motion.p>
        </motion.div>
      </motion.div>
      
      {/* Section 2 */}
      <motion.div 
        className="flex flex-col justify-center min-h-screen text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
          variants={fadeInUp}
        >
          We research profound ideas
        </motion.h2>
        <motion.ul 
          className="text-left list-none space-y-6 md:space-y-8 mb-12 md:mb-16"
          variants={staggerChildren}
        >
          {[
            { title: "Verifiable Computing", description: "Ensuring trust and safety in robotic systems through rigorous software and hardware verification." },
            { title: "Robotic Economies", description: "Capital will be tokenized. The demands for Robotic capital and information will flow on blockchain infrastructure in a permissionless economy." },
            { title: "Biometric Identity and Humanhood", description: "Developing unique identity tools to distinguish humans from robots in a crowded digital world." },
            { title: "Secure Robot to Robot Communications", description: "Using blockchain technologies and cryptography to ensure safe and secure communication between robots and humans." },
            { title: "Self-Reliant Agents", description: "Creating systems that operate independently of centralized data sources." }
          ].map((item, index) => (
            <motion.li key={index} variants={fadeInUp}>
              <strong className="text-lg">{item.title}</strong>
              <p className="mt-1">{item.description}</p>
            </motion.li>
          ))}
        </motion.ul>
        <motion.p className="mb-8 md:mb-12" variants={fadeInUp}>
          Nethermind is pioneering a secure future through robotics, AI, and blockchain.
          We&apos;re addressing the most pressing questions of the future.
        </motion.p>
      </motion.div>
      
      {/* Section 3 */}
      <motion.div 
        className="flex flex-col justify-center min-h-screen text-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerChildren}
      >
        <motion.p 
          className="text-xl md:text-2xl font-bold mb-8 md:mb-12"
          variants={fadeInUp}
        >
          Are you ready to shape the future of Robotics?
        </motion.p>
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6 md:mb-8"
          variants={fadeInUp}
        >
          Where to find us
        </motion.h2>
        <motion.ul 
          className="text-left list-disc list-inside space-y-4 mb-12 md:mb-16"
          variants={staggerChildren}
        >
          <motion.li variants={fadeInUp}>
            ETHGlobal Hackathons - We will be running robotics hackathons with a shared $10k prize for builders at ETHGlobal Singapore, San Francisco and Bangkok.
          </motion.li>
          <motion.li variants={fadeInUp}>
            Token2049, Pragma SF & DEVCON
          </motion.li>
        </motion.ul>
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={fadeInUp}
        >
        </motion.div>
      </motion.div>
    </main>
  );
}