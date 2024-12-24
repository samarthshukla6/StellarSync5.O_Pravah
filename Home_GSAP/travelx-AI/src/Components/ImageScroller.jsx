import React from "react";
import "./ImageScroller.css";

const ImageScroller = () => {
  // Array of image URLs
  const images = [
    "https://cdn-icons-png.flaticon.com/128/9830/9830829.png",
    
    "https://cdn-icons-png.flaticon.com/128/3284/3284573.png",
    
    "https://cdn-icons-png.flaticon.com/128/609/609354.png",
    "https://cdn-icons-png.flaticon.com/128/2028/2028376.png",


    "https://cdn-icons-png.flaticon.com/128/2200/2200326.png",
    "https://cdn-icons-png.flaticon.com/128/854/854894.png",

    "https://cdn-icons-png.flaticon.com/128/1257/1257385.png",
    "https://cdn-icons-png.flaticon.com/128/3372/3372157.png",

    "https://cdn-icons-png.flaticon.com/128/9495/9495481.png",
    "https://cdn-icons-png.flaticon.com/128/1533/1533209.png",


    "https://cdn-icons-png.flaticon.com/128/5589/5589865.png",

    "https://cdn-icons-png.flaticon.com/128/16999/16999298.png",

    "https://cdn-icons-png.flaticon.com/128/15200/15200965.png",
    "https://cdn-icons-png.flaticon.com/128/5601/5601219.png",
    "https://cdn-icons-png.flaticon.com/128/4325/4325947.png",
  ];

  return (
    <div className="image-scroller-container">
      <div className="image-scroller">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Icon ${index + 1}`} className="p-4" />
        ))}
      </div>
    </div>
  );
};

export default ImageScroller;
