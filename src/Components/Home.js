import React from 'react'
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import Carousel from "react-elastic-carousel";
import SidheshHipHop from "../Assets/SidheshHipHop.webp"
import Nelson from "../Assets/Nelson.jpg"
import Joe from "../Assets/Joe.jpg"
import Bala from "../Assets/Bala.png"
function Home() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div>
        <div class="h-full">
        <section class="text-black body-font lg:pt-20">
      <div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
        <div class="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 class="mb-2 text-2xl font-bold tracking-tighter text-black lg:text-8xl md:text-7xl">
            <span>Hip-hop is the streets, </span>
            <br class="hidden lg:block"></br>
            Good music = good vibes!
          </h1>
          <br></br>
          <p class="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
          Wall Rappers, is a South Indian band formed in 2019. The band consists of Sidhesh Hip Hop, Joe Stefiel, Bala Logesh, Monica Chandrasekar, Dinesh Karuppaiyan, Nithish Pandiyaraj, Nelson Manning, Vicky , Bruno and Sanjeevi, who co-write and co-produce the majority of their material.
            {/* <a href="https://nextjs.org/" className="underline">
              Next.js
            </a>{" "}
            and styled with Tailwind CSS */}
          </p>
        </div>
      </div>
      <div class="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3">
        <img
          class="object-cover object-center w-full h-96 mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
          alt="hero"
          src="https://images.unsplash.com/photo-1513104487127-813ea879b8da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
        ></img>
      </div>
      <section class="text-gray-600 body-font">
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-10 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-black">
                  <CountUp end={940} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Viewers</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-5xl text-3xl text-black">
                  <CountUp end={740} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Subscribes</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
                <h2 class="title-font font-medium sm:text-4xl text-3xl text-black">
                  <CountUp end={315} redraw={true}>
                    {({ countUpRef, start }) => (
                      <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                      </VisibilitySensor>
                    )}
                  </CountUp>
                </h2>
                <p class="leading-relaxed">Downloads</p>
              </div>
            </div>
          </div>
        </section>
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              class="object-cover object-center h-full w-full"
              src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            ></img>
          </div>
          <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
            
               
              </div>
            </div>
           
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-black text-2xl title-font font-medium mb-3">
                  Our Independent Debut
                </h2>
                <p class="leading-relaxed text-lg">
                Wall Rappers independent break-through came with the song "Riders Anthem (payanam)" in 2021.The song was composed by Dinesh Karuppaiyan and
                Sung by talented musicians such as Sidhesh HipHop, Kit Martin, Sanjeevi Sanju, and Monica Chandrasekar.
                 It was a major success with both the general public and critics.
                 "Riders Anthem (payanam)" talks about bike is a discovery; bike is freedom. It doesn’t matter where you are when you’re on the saddle, you’re taken away.
                </p>
              </div>
            </div>
            <div class="flex flex-col mb-10 lg:items-start items-center">
              <div class="flex-grow">
                <h2 class="text-black text-2xl title-font font-medium mb-3">
                  Where to find our works?
                </h2>
                <p class="leading-relaxed text-lg">
                Watch Wall Rappers Songs on YouTube or stream our songs on Spotify, Apple Music, Bandcamp, or anywhere else you find music.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto">
          <div class="text-center mb-20">
            <h2 class="sm:text-5xl font-medium title-font text-black mb-4">
              Our Team
            </h2>
            <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Here's Some of our Faces
            </p>
            <div class="flex mt-6 justify-center">
              <div class="w-16 h-1 rounded-full bg-white inline-flex"></div>
            </div>
            <div class="container px-5 py-16 mx-auto">
            <Carousel breakPoints={breakPoints}>
          <div> <div class="p-4 lg:full md:w-full">
                  <div class="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={SidheshHipHop}
                    ></img>
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-black">
                      Sidhesh Hip Hop
                      </h2>
                     
                      <p class="mb-4">
                        Rapper / Lyricist
                      </p>
                      <span class="inline-flex">
                        <a class="text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div></div>
                <div> <div class="p-4 lg:full md:w-full">
                  <div class="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={Nelson}
                    ></img>
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-black">
                      Nelson Manning
                      </h2>
                      <h3 class="text-gray-500 mb-3">Composer/Singer</h3>
                     
                      <span class="inline-flex">
                        <a class="text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div></div>
                <div> <div class="p-4 lg:full md:w-full">
                  <div class="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={Joe}
                    ></img>
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-black">
                        Joe Stefiel
                      </h2>
                      <h3 class="text-gray-500 mb-3">Composer/Singer</h3>
                     
                      <span class="inline-flex">
                        <a class="text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div></div>
                <div> <div class="p-4 lg:full md:w-full">
                  <div class="h-full flex flex-col items-center text-center">
                    <img
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={Bala}
                    ></img>
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg text-black">
                        Bala Logesh
                      </h2>
                      <h3 class="text-gray-500 mb-3">Singer/video Editor</h3>
                      <span class="inline-flex">
                        <a class="text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-white">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a class="ml-2 text-gray-500">
                          <svg
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div></div>
        </Carousel>
               
               
            </div>
          </div>
          
        </div>
      </section>
    </section>
         </div>
    </div>
  )
}

export default Home