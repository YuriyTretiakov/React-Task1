import { useContext } from "react";
import { SliderContext } from "../Slider/Slider";

import "../Slider/slider.module.css";

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext);

  return (
    <div className="arrows">
      <div className="arrow left" onClick={() => changeSlide(-1)} />
      <div className="arrow right" onClick={() => changeSlide(1)} />
    </div>
  );
}
