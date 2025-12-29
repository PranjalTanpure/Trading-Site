import "./Description.css";
export default function Description({img,description}){
    return (
    <div className="desc-card">
      <img src={img} alt="card" className="card-img" />
      <div className="desc-text">
        <p>{description}</p>
      </div>
    </div>
    )
}