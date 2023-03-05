import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import C4 from '../../public/connec5.jpg'
import rizzer from '../../public/rizzer.png'
import safewalk from '../../public/safewalk.png'
import Mohamad from '../../public/ElNayal_Mohamad.jpg'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mohamad El Nayal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-10 bg-gradient-to-bl from-white">
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Mohamad El Nayal Portfolio</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>
              <li>
                <a className='bg-gradient-to-r from-green-600 to-green-800 bg-green-800 text-white px-4 py-2 rounded-md ml-8' href='#' target="_blank">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-8'>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 overflow-hidden'>
              <Image src={Mohamad} layout="fill" objectFit='cover' alt="profilepic" />
            </div>
            <h2 className='text-5xl py-4 text-green-600 font-medium'>Mohamad El Nayal</h2>
            <h3 className='text-2xl py-2'>FullStack Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Rising Senior at Northeastern University. Looking for Software Engineering internships/co-ops for the Summer/Fall 2023 term.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/mohamadelnayal/' target="_blank"><AiFillLinkedin /></a>
            <a href='https://github.com/attanyl' target="_blank"><AiFillGithub /></a>
          </div>
        </section>

        <section>
          <div>
            <h1 className="mt-4 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl"><span className="underline underline-offset-3 decoration-8 decoration-green-400 dark:decoration-green-600">Personal Projects</span></h1>
            <div className='mt-7 flex justify-center gap-16'>
            <div className="my-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gradient-to-bl from-slate-400 to-slate-700 dark:border-gray-700">
              <a href="#">
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
            <div className="my-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gradient-to-bl from-slate-400 to-slate-700 dark:border-gray-700">
              <a href="#">
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
            <div className="my-2 max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gradient-to-bl from-slate-400 to-slate-700 dark:border-gray-700">
              <a href="#">
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
      </main>
    </div>
  )
}
