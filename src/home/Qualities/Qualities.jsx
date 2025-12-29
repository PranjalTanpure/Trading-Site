import React from "react";
import QualityCard from "./QualityCard";
import "./Qualities.css";
import qualityImg from "../images/quality.jpg";
import networkImg from "../images/network.jpg";
import secureImg from "../images/secure.jpg";

export default function Qualities() {
    return(
        <div className="qualities">
            <QualityCard title="Quality Assurance" idx={0} img={qualityImg} />
            <QualityCard title="Access to supplier Network" idx={1} img={networkImg} />
            <QualityCard title="Secure deposit" idx={2} img={secureImg} />
        </div>
    )
}
