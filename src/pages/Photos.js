import React from "react";
import ImageSlider from "../components/ImageSlider";
import "../Global.css";

import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";
import image5 from "../images/image5.jpg";
// Import additional images as needed

function Photos() {
  const images = [image1, image2, image3, image4, image5];
  // Add more images to the array as needed

  return (
    <div>
      <h1>Sunset drone photos</h1>
      <ImageSlider images={images} />
    </div>
  );
}

export default Photos;
