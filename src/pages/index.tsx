import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import C4 from '../../public/connec5.jpg'
import rizzer from '../../public/rizzer.png'
import safewalk from '../../public/safewalk.png'
import travelers from '../../public/travelers.png'
import gentuity from '../../public/gentuity.png'
import Mohamad from '../../public/ElNayal_Mohamad.jpg'
import logo from '../../public/logo.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohamad El Nayal</title>
        <meta name="description" content="Personal Website for Mohamad El Nayal" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="../../public/logo.png" />
      </Head>
      <main className="bg-gradient-to-r from-slate-50 to-slate-200 scroll-smooth md:scroll-auto">
        <section className='min-h-screen'>
          <nav className='pt-5 px-10 mb-12 flex justify-between sticky top-0 z-50 bg-white'>
            <Image src={logo} alt="" className='h-10 w-10' />
            <a href='#about' className='text-lg font-bold text-green-600 group transition-all duration-300 ease-in-out'><span className='bg-bottom bg-gradient-to-r from-green-200 to-green-400 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] rounded-xl transition-all duration-500 ease-out'>
              About Me
            </span></a>
            <a href='#projects' className='text-lg font-bold text-green-600 group transition-all duration-300 ease-in-out'><span className='bg-bottom bg-gradient-to-r from-green-200 to-green-400 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] rounded-xl transition-all duration-500 ease-out'>
              Projects
            </span></a>
            <a href='#work' className='text-lg font-bold text-green-600 group transition-all duration-300 ease-in-out'><span className='bg-bottom bg-gradient-to-r from-green-200 to-green-400 bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_5px] rounded-xl transition-all duration-500 ease-out'>
              Work
            </span></a>
            <ul className='flex items-center mb-5'>
              <li className='relative transform transition duration-300 hover:scale-110'>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li className='relative transform transition duration-300 hover:scale-110'>
                <a className='bg-gradient-to-r from-green-600 to-green-800 bg-green-800 text-white px-4 py-2 rounded-md ml-8' href='../../public/ResumeForPortfolio.pdf' target="_blank">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center border-10 border-black'>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden border-solid border-2 border-black transform transition duration-500 hover:scale-110'>
              <Image src={Mohamad} layout="fill" objectFit='cover' alt="profilepic" />
            </div>
            <h2 className='text-5xl py-4 text-green-600 font-medium'>Mohamad El Nayal</h2>
            <h3 className='text-2xl py-2'>FullStack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Rising Senior at Northeastern University. Looking for Software Engineering internships/co-ops for the Summer/Fall 2023 term.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/mohamadelnayal/' target="_blank" className='relative transform transition duration-300 hover:scale-125'><AiFillLinkedin /></a>
            <a href='https://github.com/attanyl' target="_blank" className='relative transform transition duration-300 hover:scale-125'><AiFillGithub /></a>
          </div>
        </section>

        <section className='mb-20'>
          <div>
            <h1 id="about" className="text-center mt-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl skip-to-content"><span className="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-green-600">About Me</span></h1>
            <div className='inline-flex w-3/5 ml-80'>
            <div className='mt-2 w-4/5'>
              <p className="text-gray-500 dark:text-gray-400">Hi! My name is Mohamad El Nayal and I am a rising senior at Northeastern University. My journey in Computer Science started way back in 2013 when I was an 11 year old Syrian boy living in Lebanon wanting to know how Minecraft mods work.
              From watching <span className='text-green-300'>thenewboston</span>&apos;s Java tutorials on YouTube to modding my own server with friends, my facination with programming kept increasing.</p>
          <div className='py-5'>
          <p className="mb-3 pt-10 text-gray-500 dark:text-gray-400">Ten years later, I have completed two internships and many personal projects that have given me the experience and skills needed to be a capable Software Engineer.</p>
          </div>
          </div>
          
          <div className=''>
          <h2 className="mb-2 text-lg font-semibold text-slate-800">Technologies I&apos;ve learned:</h2>
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>
                  Programming Languages
                  <ul className="pl-10 mt-2 space-y-1 list-decimal list-inside">
                    <li className='space-y-1 list-decimal list-inside'>Python, C#, C++, Java, Racket, SQL, JavaScript, TypeScript, HTML and CSS</li>
                  </ul>
              </li>
              <li>
              Libraries/Frameworks
                  <ul className="pl-10 mt-2 space-y-1 list-decimal list-inside">
                    <li className='space-y-1 list-decimal list-inside'>TensorFlow, Flask, Pandas, Angular, React, Bootstrap, OpenCV, Rest API</li>
                  </ul>
              </li>
              <li>
              Software
                  <ul className="pl-10 mt-2 space-y-1 list-decimal list-inside">
                    <li className='space-y-1 list-decimal list-inside'>Intellij, Eclipse, PyCharm, Jupyter Notebooks, MySQL, MongoDB</li>
                  </ul>
              </li>
          </ul>
          </div>
          </div>
          </div>
        </section>

        <section className='mt-10'>
          <div>
            <h1 id="projects" className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl skip-to-content"><span className="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-green-600">Personal Projects</span></h1>
            <div className='mt-2 flex justify-center gap-16'>
              <div className="my-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gradient-to-bl from-slate-400 to-slate-700 dark:border-gray-700 relative transform transition duration-300 hover:scale-105">
                <a target="_blank" href="https://devpost.com/software/connect-4-companion">
                  <Image className="rounded-t-lg max-h-25" src={C4} alt="" />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Connect 4 Companion</h5>
                  <p className='text-md mb-1 text-gray-900 dark:text-gray-200 font-bold'>HackBeanpot (Top 10 Award)</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Arduino-controlled robot that uses Image Recognition and specialized algorithms to play Connect 4.</p>
                  <a href="https://devpost.com/software/connect-4-companion" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
              <div className="my-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gradient-to-bl from-slate-400 to-slate-700 dark:border-gray-700 relative transform transition duration-300 hover:scale-105">
                <a target="_blank" href="https://devpost.com/software/rizzer?ref_content=user-portfolio&ref_feature=in_progress">
                  <Image className="rounded-t-lg max-h-25" src={rizzer} alt="" />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rizzer</h5>
                  <p className='text-md mb-1 text-gray-900 dark:text-gray-200 font-bold'>HackHarvard (Most Funny Award)</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Chrome extension that generates 3 different pickup lines based off of a match&apos;s Tinder bio.</p>
                  <a href="https://devpost.com/software/rizzer?ref_content=user-portfolio&ref_feature=in_progress" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
              <div className="my-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gradient-to-bl from-slate-400 to-slate-700 dark:border-gray-700 relative transform transition duration-300 hover:scale-105">
                <a target="_blank" href="https://devpost.com/software/safewalk-boston-ma">
                  <Image className="rounded-t-lg max-h-25" src={safewalk} alt="" />
                </a>
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Safewalk</h5>
                  <p className='text-md mb-1 text-gray-900 dark:text-gray-200 font-bold'>HackDartmouth (First Place Award)</p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Web application that provides routes to a destination, each labeled with safety insights.</p>
                  <a href="https://devpost.com/software/safewalk-boston-ma" target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h1 id="work" className="text-center mt-5 py-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl"><span className="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-green-600">Work Experience</span></h1>
            <div className="flex justify-center gap-10 pb-5">
              <div
                className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row relative transform transition duration-300 hover:scale-105">
                <Image
                  className="w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={travelers}
                  alt="" />
                <div className="flex flex-col justify-start p-6">
                  <h5
                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    The Travelers Companies
                  </h5>
                  <ul className="space-y-1 text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Developed a web-application that takes in large CSV files and outputs a thorough analysis of that data</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Used Angular, C#, and MongoDB to create software for internal use</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Implemented Extreme Programming practices like Pair Programming, TDD, and Mob Programming</span>
                    </li>
                  </ul>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300">
                    January 2022 - June 2022
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row relative transform transition duration-300 hover:scale-105">
                <Image
                  className="w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  src={gentuity}
                  alt="" />
                <div className="flex flex-col justify-start p-6">
                  <h5
                    className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                    Gentuity, LLC
                  </h5>
                  <ul className="space-y-1 text-left mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Annotated data to create helpful training data in order to improve the accuracy of the Medical Imaging software</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                      <span>Ran experiments to test the results of the neural network training that used the aforementionedtraining data</span>
                    </li>
                  </ul>
                  <p className="text-xs text-neutral-500 dark:text-neutral-300">
                    January 2020 - September 2020
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  )
}
