import { useParams } from "react-router-dom";
import { services } from "../Service/servicesData"; // adjust path
import "./ServiceDetails.css";

export default function ServiceDetails() {
  const { id } = useParams();

  const service = services.find(
    (item) => item.id === Number(id)
  );

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <div className="service-details">
      <h1>{service.title}</h1>
      <img src={service.image} alt={service.title} />
      <p>{service.description}</p>
    </div>
  );
}
