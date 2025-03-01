import Dots from '../../components/Slider/Dots';
import Slider from '../../components/Slider/Slider';
import './About.css';



export default function About() {
    return (
        <div className="about">
          <h2>Обо мне</h2>
         <Slider>
          <Dots></Dots>
          </Slider> 
      
        </div>
        
    )
}