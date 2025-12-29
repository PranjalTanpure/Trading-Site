import TypingEffect from "./TypingEffect";
import"./Home.css";
import container from "./images/container.jpg";
import Qualities from "./Qualities/Qualities";
import ServiceSwiper from "./Service/ServiceSwiper";
import ContactUsForm from "./ContactUs/ContactUsForm";
import AboutUs from "./AboutUs/AboutUs";


export default function Home() {
  return (
    <div className="home-page">
    <section id="home">
    <div className="hero-section">
      <div className="hero-content">
        <h3>
          Your One-Step Solution for
          <br/>
          <TypingEffect />
        </h3>
        <p>
          With 1000+ suppliers in China, we source and trade globally, delivering
          quality products at competitive prices to stay ahead and win.
        </p>
        <button
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}        
        >
          Contact Us
        </button>
      </div>
      

      <div className="hero-image">
        <img src ={container} alt="Shipping container"/>
      </div>
    </div>
    </section>

    
    <section id="aboutUs"> 
      <div className="hero-description1">
        <h3 style={{textAlign:"center" , color: "#283618",fontSize: "3rem", paddingTop: "50px"}}>About Us</h3>
        <AboutUs />
      </div>
    </section>

    
      <section id="services">
      <div className="hero-description2">  
        <div className="upper-svg" style={{backgroundColor: "#283618", marginTop: "50px"}}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fillOpacity="1" d="M0,160L40,154.7C80,149,160,139,240,128C320,117,400,107,480,122.7C560,139,640,181,720,181.3C800,181,880,139,960,144C1040,149,1120,203,1200,213.3C1280,224,1360,192,1400,176L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
        </div>
        <div className="join-us-section">
        <h4 style={{textAlign:"center" , color: "#FEFAE0",display:"block",justifyContent:"center",alignItems: "center", fontSize: "3rem", margin:0, boxSizing:"border-box",backgroundColor: "#283618"}}>
          Join us for seamless sourcing and trading!
        </h4>
        <p style={{textAlign:"center",justifyContent:"center", alignItems:"center", color:"#FEFAE0", fontSize: "1.5rem", }}>For seamless sourcing and trading solutions!</p>
        <ServiceSwiper/>
        </div>
        <div className="lower-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#283618" fillOpacity="1" d="M0,96L80,133.3C160,171,320,245,480,240C640,235,800,149,960,117.3C1120,85,1280,107,1360,117.3L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        </div>
      </div>
      </section>

      <section id="services">
        <div className="hero-description">
        <h3 style={{textAlign:"center" , color: "#283618",fontSize: "3rem", paddingTop: "100px"}}>Why Choose Us?</h3>
          <Qualities />
        </div>
      </section>
      
    
      <section id="contact">
        <div className="contact-form-section" style={{backgroundColor: "#283618",fontSize: "3.2rem", padding: "50px 0",textAlign:"center",color: "#FEFAE0"}}>
          <ContactUsForm />
        </div>
        </section>
      
    </div>
  );
}
