import React from "react";
import DraggableGrid from "../UI/DraggableGrid/DraggabbleGrid";
import Sidebar from "./Sidebar";
import Header from "./header";
import NoPageFound404 from "./SidebarComponents/NoPageFound404";
import { Switch, Route, useParams } from "react-router-dom";
import CardDetailsDrawer from "./../UI/Common/CardDetailsDrawer/CardDetailsDrawer";
import { useSelector } from "react-redux";
import { isDesktopView } from "../utils";

const MainLayout = () => {
  return (
    <div
      className={`ft-main-layout ${
        !isDesktopView ? "ft-main-layout--mobile" : ""
      }`}
    >
      <div className="ft-main-layout__header">
        <Header />
      </div>
      <div className="ft-main-layout__sidebar ft-bg-prime88">
        {isDesktopView && <Sidebar />}
      </div>
      <div className="ft-main-layout__container ft-bg-prime97">
        {!isDesktopView && <Sidebar />}
        <Switch>
          <Route exact path="/">
            <DraggableGrid />
          </Route>
          <Route path="/cards">
            <DraggableGrid />
            <Switch>
              <Route path="/cards/:id" children={<RenderDrawer />} />
            </Switch>
          </Route>
          <Route path="*">
            <NoPageFound404 />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

const RenderDrawer = () => {
  let { id } = useParams();
  const COMPONENTS = useSelector((state) => state.widgets.list);
  const componentConfig = COMPONENTS.find(
    (component) => component.key_name === id
  );
  if (!componentConfig) return null;
  return (
    <div>
      <CardDetailsDrawer id={id} />
    </div>
  );
};

export default MainLayout;
