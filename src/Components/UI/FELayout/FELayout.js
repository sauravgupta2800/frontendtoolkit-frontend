import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MainLayout from "../../Layout/MainLayout";
import Icon from "../Common/Icon/Icon";
import { ROADMAP_MENU } from "./config";

const FELayout = () => {
  return (
    <div className="ft-vertical-timeline w-100 h-100">
      <div className="ft-vertical-timeline--header ft-style-1-shadow ft-bg-light100">
        hello
      </div>
      <div className="ft-vertical-timeline--content ft-bg-prime93 overflow-auto">
        <VerticalTimeline>
          {ROADMAP_MENU.map((menu) => (
            <VerticalTimelineElement
              textClassName="ft-vertical-timeline--content-element--card"
              contentStyle={{
                border: `1px solid ${menu.darkColor}`,
              }}
              contentArrowStyle={{
                borderRight: `10px solid ${menu.darkColor}`,
              }}
              iconStyle={menu.iconStyle}
              iconClassName=""
              icon={<Icon id={menu.key} size={menu.iconSize || "md"} />}
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
                >
                  See Details
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<Icon id="table" />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default FELayout;
