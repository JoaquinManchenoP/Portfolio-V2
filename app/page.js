'use client';
import Link from 'next/link';
import Logo from '../app/compnents/Logo/Logo';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Home() {
  return (
    <div className="mx-auto max-w-[700px] p-4">
      <Logo />
      <div className="h-screen mt-12 space-y-12">
        <div className="greeting__links flex space-x-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-8xl"
          >
            Hello!
          </motion.h1>
          <div className="contact__links flex space-x-4 items-end">
            <Link href="https://www.linkedin.com/in/joaquinjm/">
              <AiFillLinkedin size={40} className="text-blue-500" />
            </Link>
            <Link href={'https://github.com/JoaquinManchenoP'}>
              <FaGithub size={40} className="text-purple-500" />
            </Link>
          </div>
        </div>
        <div className="project__container ">
          I'm Joaquin Mancheno, a software engineer with a creative mind and a
          hunger for making things happen. I am currently pursuing a Masters in
          Data Science, and I also hold a Bachelor's degree in Computing in the
          Arts. I've been in programming for a few years now and have some
          academic and professional experience as a software developer.Feel free
          too look around and please don't hesitate to get in touch
        </div>
        <div className="links flex justify-between mx-32">
          <div className="project__link flex flex-col">
            <span>{'>>>>'}</span>
            <span>Resume</span>
          </div>
          <Link href={'/ProjectPage'}>
            <div className="resume__link flex flex-col">
              <span>{'>>>'}</span>
              <span>Projects</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
