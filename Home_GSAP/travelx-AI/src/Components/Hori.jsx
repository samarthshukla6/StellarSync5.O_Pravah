

// import React, { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import 'tailwindcss/tailwind.css';
// import ImmersiveBackground from './Another'; 

// gsap.registerPlugin(ScrollTrigger);

// const ScrollEffect = () => {
//   const containerRef = useRef(null);
//   const firstImageRef = useRef(null);
//   const secondImageRef = useRef(null);

//   useEffect(() => {
//     // First timeline for the lock screen and home screen animation
//     gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: 'top top',  // Start when container reaches the top
//         end: '+=1900',     // Duration of scrolling
//         scrub: true,       // Smooth scrub based on scroll
//         pin: true,         // Keep iPhone pinned in place
//         markers: false,     // Debugging markers
//       },
//     })
//     .fromTo(
//       firstImageRef.current,
//       { y: 0 ,opacity:"1", clipPath: 'inset(0% 0% 0% 0%)'},   // Start at normal position
//       { y: '-500px', duration: 1, clipPath: 'inset(50% 0% 0% 0%)' }  // Move up
//     )
//     .fromTo(
//       secondImageRef.current,
//       { y: '0%',opacity:"0" },   // Initially hidden below
//       { y: 0, duration: 1 ,opacity:"1"},   // Slide up and appear as the first image disappears
//       '<'  // Sync both animations
//     )

//     // Second timeline for the paired image animations (starts after the first completes)
    
//     .fromTo(
//       '.image-left', 
//       { x: '-120%', opacity: 0 },  // Initially offscreen to the left
//       { x: '-220px', opacity: 1, duration: 1 } 
//       // Move left and fix at -300px
      
//     )
//     .fromTo(
//       '.image-right', 
//       { x: '40%', opacity: 0 },  // Initially offscreen to the right
//       { x: '170px', opacity: 1, duration: 1 },  // Move right and fix at 180px
//        // Sync with left image
//        '<'
       
//     )
    
//     // Second set of images (left and right)
//     .fromTo(
//       '.second-image-left', 
//       { x: '-150%', opacity: 0 }, 
//       { x: '-380px', opacity: 1, duration: 1 }
//     )
//     .fromTo(
//       '.second-image-right', 
//       { x: '150%', opacity: 0 }, 
//       { x: '330px', opacity: 1, duration: 1 }, 
//       '<'
//       // Sync with left image
//     );
//   }, []);

//   return (
//     <div ref={containerRef} className="h-[100vh] w-screen flex justify-center items-center relative overflow-hidden z-10 " style={{backgroundImage:`url('')`}}>
//       {/* iPhone Image */}
//       <div className="relative w-80 z-10 overflow-hidden  ">
//         <img
//           src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed54_Holding-iPhone-p-1080.png"
//           alt="iPhone"
//           className="relative inset-0 w-full h-auto z-50 ml-9"
//         />

//         <div className='absolute top-2 ml-[4.25rem]  z-0 w-32 h-[17.25rem] overflow-hidden'>
//           <img
//           ref={firstImageRef}
//           src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64eddb_phone-lock.jpg"
//           alt="First Image"
//           className="absolute w-[100%] h-[100%]   object-cover z-0 rounded-2xl mix-blend-difference "
//         />
//         <img
//           ref={secondImageRef}
//           src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696a573889877e28597f767_Untitled%20design%20(76)-p-800.png"
//           alt="Second Image"
//           className="absolute w-[100%] h-[100%]   object-cover z-0 "
//         />
//         </div>


//       </div>

//       {/* First Pair of Images */}
//       <ImmersiveBackground imgLink="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png" Classprop="image-left absolute" margetop="-5.5rem" />
//       <ImmersiveBackground imgLink="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png" Classprop="image-right absolute" margetop="-5.5rem" />

//       {/* Second Pair of Images */}
//       <ImmersiveBackground imgLink="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png" Classprop="second-image-left absolute" margetop="-4rem" small="true" />
//       <ImmersiveBackground imgLink="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png" Classprop="second-image-right absolute" margetop="-4rem" small="true" />
//     </div>
//   );
// };

// export default ScrollEffect;



import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import 'tailwindcss/tailwind.css';
import ImmersiveBackground from './Another'; 
import ImageScroller from './ImageScroller'; // Import the ImageScroller component

gsap.registerPlugin(ScrollTrigger);

const ScrollEffect = () => {
  const containerRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageRef = useRef(null);

  useEffect(() => {
    // GSAP animations code (as you provided)
    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1900',
        scrub: true,
        pin: true,
        markers: false,
      },
    })
    .fromTo(
      firstImageRef.current,
      { y: 0, opacity: "1", clipPath: 'inset(0% 0% 0% 0%)' },
      { y: '-500px', duration: 1, clipPath: 'inset(50% 0% 0% 0%)' }
    )
    .fromTo(
      secondImageRef.current,
      { y: '0%', opacity: "0" },
      { y: 0, duration: 1, opacity: "1" },
      '<'
    )
    .fromTo(
      '.image-left', 
      { x: '-120%', opacity: 0 },
      { x: '-220px', opacity: 1, duration: 1 }
    )
    .fromTo(
      '.image-right', 
      { x: '40%', opacity: 0 },
      { x: '170px', opacity: 1, duration: 1 },
      '<'
    )
    .fromTo(
      '.second-image-left', 
      { x: '-150%', opacity: 0 }, 
      { x: '-380px', opacity: 1, duration: 1 }
    )
    .fromTo(
      '.second-image-right', 
      { x: '150%', opacity: 0 }, 
      { x: '330px', opacity: 1, duration: 1 }, 
      '<'
    );
  }, []);

  return (
    <div ref={containerRef} className="h-[100vh] w-screen flex justify-center items-center relative overflow-hidden z-10 " style={{backgroundImage: `url('')`}}>
      {/* iPhone Image */}
      <div className="relative w-80 z-10 overflow-hidden">
        <img
          src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed54_Holding-iPhone-p-1080.png"
          alt="iPhone"
          className="relative inset-0 w-full h-auto z-50 ml-9"
        />

        <div className='absolute top-2 ml-[4.25rem] z-0 w-32 h-[17.25rem] overflow-hidden'>
          <img
            ref={firstImageRef}
            src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64eddb_phone-lock.jpg"
            alt="First Image"
            className="absolute w-[100%] h-[100%] object-cover z-0 rounded-2xl mix-blend-difference"
          />
          <img
            ref={secondImageRef}
            src="m3.webp"
            alt="Second Image"
            className="absolute w-[100%] h-[100%] object-cover z-0"
          />
        </div>
      </div>

      {/* First Pair of Images */}
      <ImmersiveBackground imgLink="m1.webp" Classprop="image-left absolute" margetop="-5.5rem" />
      <ImmersiveBackground imgLink="m2.webp" Classprop="image-right absolute" margetop="-5.5rem" />

      {/* Second Pair of Images */}
      <ImmersiveBackground imgLink="m4.webp" Classprop="second-image-left absolute" margetop="-4rem" small="true" />
      <ImmersiveBackground imgLink="m5.webp" Classprop="second-image-right absolute" margetop="-4rem" small="true" />

      {/* Add ImageScroller at the bottom */}
      <ImageScroller />
    </div>
  );
};

export default ScrollEffect;
