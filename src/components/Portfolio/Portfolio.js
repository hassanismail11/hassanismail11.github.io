import { useEffect, useState } from "react";
import PortfolioCategory from "./PortfolioCategory";
import {
  PortfolioRobotics,
  PortfolioDesign,
  PortfolioMobile,
  Portfoliowebdev,
  PortfolioAll,
} from "./PortfolioData";
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [categoryData, setCategoryData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "robotics",
      title: "Robotics",
    },
    {
      id: "webdev",
      title: "web-Dev",
    },
    {
      id: "mobile",
      title: "Mobile",
    },
    {
      id: "design",
      title: "Design",
    },
  ];
  useEffect(() => {
    switch (activeCategory) {
      case "all":
        setCategoryData(PortfolioAll);
        break;
      case "robotics":
        setCategoryData(PortfolioRobotics);
        break;
      case "webdev":
        setCategoryData(Portfoliowebdev);
        break;
      case "mobile":
        setCategoryData(PortfolioMobile);
        break;
      case "design":
        setCategoryData(PortfolioDesign);
        break;
      default:
        setCategoryData(PortfolioAll);
    }
  }, [activeCategory]);
  return (
    <div id="portfolio" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>
            <span className="color-primary">Portfolio</span>
          </h1>
        </div>
        <div className="portfolio-category">
          <ul>
            {list.map((item) => (
              <PortfolioCategory
                title={item.title}
                active={activeCategory === item.id}
                setActiveCategory={setActiveCategory}
                id={item.id}
                key={item.id}
              />
            ))}
          </ul>
        </div>
        <div className="portfolio-items">
          {categoryData.map((d, index) => (
            <div className="portfolio-item" key={index}>
              <img className="portfolio-item-image" src={d.img} alt={d.title} />
              <h3 className="portfolio-item-title">{d.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
