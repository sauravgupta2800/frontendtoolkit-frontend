import React from "react";
import DraggableGrid from "../UI/DraggableGrid/DraggabbleGrid";
import Sidebar from "./Sidebar";
import Header from "./header";
import NoPageFound404 from "./SidebarComponents/NoPageFound404";
import { Switch, Route, useParams } from "react-router-dom";
import CardDetailsDrawer from "./../UI/Common/CardDetailsDrawer/CardDetailsDrawer";
import { useSelector } from "react-redux";
import { isDesktopView } from "../utils";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <div
      className={`ft-main-layout ${
        !isDesktopView ? "ft-main-layout--mobile" : ""
      }`}
    >
      <Helmet>
        <title>
          Frontend Devtools: A Fully customizable platform for repetitive
          Frontend tasks
        </title>
        <meta
          name="description"
          content="Frontend Devtools dashboard is made up of truly customizable cards which consists
      package size details, package comparison, font preview, code diff, base64 encode decode, JS, TS, CSS, SVG
       optimization and many more awesome modules."
        />
      </Helmet>
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
