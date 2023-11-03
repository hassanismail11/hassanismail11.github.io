import Service from "./Service";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <div id="services" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>
            <span className="color-primary">Services</span>
          </h1>
          <p className="width70">
            I design and develop services for customers, specializing in problem
            solving, clean and maintainable code, new technologies, techniques,
            design principles and intrigued with hard challenges.
          </p>
        </div>
        <div className="columns">
          {ServicesData.map((item) => (
            <Service
              key={item.id}
              title={item.title}
              icon={item.icon}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
