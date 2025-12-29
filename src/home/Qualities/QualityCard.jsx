import React from "react";
import "./QualityCard.css";
import Description from "./Description";


export default function QualityCard({title, idx,img}) {
    let description=["We prioritize quality in every step of our sourcing and trading process, ensuring that our customers receive products that meet the highest standards.",  "Our extensive network of reliable suppliers allows us to source a wide range of products, providing our customers with diverse options to choose from.",  "We offer secure deposit and withdrawal options to ensure the safety of our customers' funds throughout their transactions."];
    return (
        <div className="qualityCard">
            <Description img={img} description={description[idx]} />
            <h2>{title}</h2>
             
        </div>
    )
}