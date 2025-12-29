import bussiness1 from "../images/bussiness1.jpg";
import bussiness2 from "../images/bussiness2.jpg";
import bussiness3 from "../images/bussiness3.jpg";
import Counter from "./Counter";


import "./AboutUs.css";
export default function AboutUs() {
    return(
        <div className="about">
        <div className="sec1">    
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quae eligendi vel quos officiis, assumenda, ab tenetur eum ad dolores voluptates voluptatum mollitia rem eius consequatur iure et nobis repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur doloribus aliquid repellendus veritatis cumque accusamus! Enim itaque saepe soluta porro odit, praesentium odio inventore aperiam dolore, recusandae assumenda dolorum fugit.
        </p>
        </div>
                <div className="sec3">
          <Counter />
            
        </div>

        <div className="sec2">
          <div className="img-card">
            <img src={bussiness1} alt="FoundersImg" />
            <p className="name">XYZ</p>
            <p className="position">Founder & CEO</p>
          </div>

          <div className="img-card">
            <img src={bussiness2} alt="FoundersImg" />
            <p className="name">LMN</p>
            <p className="position">Co-Founder</p>
          </div>

          <div className="img-card">
            <img src={bussiness3} alt="FoundersImg" />
            <p className="name">ABC</p>
            <p className="position">Operations Head</p>
          </div>
        </div>
        
        

        </div>
    )
}