import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Icon from "../Common/Icon/Icon";
import { ROADMAP_MENU } from "./config";

const FELayout = () => {
  return (
    <div className="ft-vertical-timeline w-100 h-100 overflow-auto">
      <VerticalTimeline>
        {ROADMAP_MENU.map((menu) => (
          <VerticalTimelineElement
            className="ft-vertical-timeline-element--card"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "8px solid  rgb(33, 150, 243)" }}
            iconStyle={menu.iconStyle}
            icon={<Icon id={menu.key} size={menu.iconSize || "md"} />}
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
        ))}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Icon id="table" />}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default FELayout;
