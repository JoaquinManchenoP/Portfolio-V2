'use client';
import Link from 'next/link';
import Logo from '../app/compnents/Logo/Logo';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="mx-auto max-w-[700px] p-4">
      <Logo />
      <div className="h-screen mt-12 space-y-12">
        <div className="greeting__links flex space-x-10">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
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
        <div className="links flex justify-between">
          <Link href={'/ProjectPage'}>
            <div className="projects__link space-x-2 space-y-2">
              <span className="font-bold pl-2">Resume</span>
              <span className="font-bold">{'>>>'}</span>
              <div className="description w-[250px]">
                <span className="text-sm font-light">
                  Take a look or download my resume
                </span>
              </div>
            </div>
          </Link>
          <Link href={'/ProjectPage'}>
            <div className="projects__link space-x-2 space-y-2">
              <span className="font-bold pl-2">Projects</span>
              <span className="font-bold">{'>>>'}</span>
              <div className="description w-[250px]">
                <span className="text-sm font-light">
                  A Collection of projects I've built on my journey to becoming
                  a software developer.
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
