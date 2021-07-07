import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useHistory } from "react-router-dom";
import Icon from "../Common/Icon/Icon";
import { ROADMAP_MENU } from "./config";

const FELayout = () => {
  const history = useHistory();

  const handleDetailsClick = ({ key }) => {
    history.replace(`/roadmap/${key}`);
  };

  return (
    <div className="ft-vertical-timeline w-100 h-100">
      <div className="ft-vertical-timeline--header ft-style-1-shadow ft-bg-light100">
        hello
      </div>
      <div className="ft-vertical-timeline--content ft-bg-prime93 overflow-auto">
        <VerticalTimeline>
          {ROADMAP_MENU.map((menu) => (
            <VerticalTimelineElement
              key={menu.key}
              textClassName="ft-vertical-timeline--content-element--card"
              contentStyle={{
                border: `1px solid ${menu.darkColor}`,
              }}
              contentArrowStyle={{
                borderRight: `10px solid ${menu.darkColor}`,
              }}
              iconStyle={menu.iconStyle}
              icon={
                <Icon
                  showCursor={false}
                  id={menu.key}
                  size={menu.iconSize || "md"}
                />
              }
            >
              <div
                className="ft-color-primeshade45 fs-3 fw-bold"
                style={{ color: menu.darkColor }}
              >
                {menu.title}
              </div>
              <div className="fs-4 ft-color-dark2">{menu.description}</div>
              <div className="w-100 d-flex justify-content-center">
                <div
                  className="py-2 px-4 cursor-pointer fs-5 rounded-6"
                  style={{ background: menu.darkColor, color: "#fff" }}
                  onClick={() => handleDetailsClick(menu)}
                >
                  See Details
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default FELayout;
