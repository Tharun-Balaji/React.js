import "./Slider.scss";
import { useState } from "react";

export default function Slider({ images }) {

  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => { 
    if (direction === "left") {
      imageIndex > 0 ? setImageIndex(imageIndex - 1) : setImageIndex(images.length - 1);
    } else {
      imageIndex < images.length - 1 ? setImageIndex(imageIndex + 1) : setImageIndex(0);
    }
  }

  return (
		<div className="slider">
			{imageIndex !== null && (
				<div className="fullSLider">
					<div onClick={() => changeSlide("left")}  className="arrow">
						<img  src="/arrow.png" alt="" />
					</div>
					<div className="imgContainer">
						<img src={images[imageIndex]} alt="" />
					</div>
					<div onClick={() => changeSlide("right")} className="arrow">
						<img src="/arrow.png" className="right" alt="" />
					</div>
					<div onClick={() => setImageIndex(null)} className="close">X </div>
				</div>
			)}
			<div onClick={() => setImageIndex(0)} className="bigImage">
				<img src={images[0]} alt="" />
			</div>
			<div className="smallImage">
				{images.slice(1).map((img, i) => (
					<img key={i} src={img} alt="" onClick={() => setImageIndex(i+1)} />
				))}
			</div>
		</div>
  );
}
