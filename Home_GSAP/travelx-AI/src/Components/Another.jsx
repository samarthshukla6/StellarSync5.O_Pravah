// import React from 'react';
// import 'tailwindcss/tailwind.css';

// const ImmersiveImage = () => {
//   return (
//     <div className=" m-44 relative w-52 h-96 bg-[url('https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp')]  bg-contain bg-no-repeat  z-50" style={{}}>

//       {/* First Image (iPhone Screen)
//       <img
//         src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
//         alt="iPhone"
//         className="w-auto h-auto max-w-full max-h-full z-10"
//       /> */}

//       {/* Second Image (Immersive Content) */}
//       {/* <img
//         src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png"
//         alt="Immersive Content"
//         className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full  object-contain z-20"
//       /> */}
//       <div className="absolute  h-96   bg-[url('https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png')] bg-cover z-10 rounded-2xl mt-2" style={{width:"11rem",height:"5rem"}}>

//       </div>

//     </div>
//   );
// };

// export default ImmersiveImage;

// import React from 'react';
// import 'tailwindcss/tailwind.css';

// const ImmersiveImage = () => {
//   return (
//     <div className="absolute w-52 h-96 m-44 bg-[url('https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp')] bg-contain bg-no-repeat z-50">
//       {/* Second Image (Immersive Content) */}
//       <div
//         className="relative inset-0 flex items-center justify-center   rounded-2xl ml-2 mt-2 z-10 "
//         style={{ width: '80%', height: '80%' }}
//       >
//         {/* Add any overlay content inside here */}
//         <img src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png" alt="" className=' object-contain relative z-10' />
//       </div>
//     </div>
//   );
// };

// export default ImmersiveImage;

import React from "react";
import "tailwindcss/tailwind.css";

const ImmersiveBackground = ({
  imghi,
  imgwi,
  widdth,
  heigght,
  Classprop = "",
  imgLink,
  small,
}) => {
  if (small != "true") {
    return (
      <div
        style={{ width: widdth, height: heigght }}
        className={`   ${Classprop}  w-36  h-72 top-20`}
      >
        <img
          src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
          className=" 
        relative z-50  w-full h-full"
        />
        <img
          src={imgLink}
          className=" h-[100%]  absolute inset-0  w-full rounded-3xl object-fill z-0"
          style={{ height: "", width: "" }} // Ensure proper scaling for images
        />
      </div>
    );
  }
  return (
    <div
      style={{ width: widdth, height: heigght }}
      className={` w-36 h-72 top-20   ${Classprop}`}
    >
      <img
        src="https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp"
        className="
      relative z-50 block w-full h-full"
      />
      <img
        src={imgLink}
        className=" h-[100%]  absolute inset-0  w-full rounded-3xl object-fill z-0"
        style={{ height: "", width: "" }} // Ensure proper scaling for images
      />
    </div>
  );
};

export default ImmersiveBackground;

// Background image link  : bg-[url('https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696811effea0ba47d64ed58_iPhone%2014%20Pro%20%E2%80%93%20Space%20Black.webp')]

// inside image : https://cdn.prod.website-files.com/6696811effea0ba47d64eca9/6696bc741f91e313dff01013_5.png
