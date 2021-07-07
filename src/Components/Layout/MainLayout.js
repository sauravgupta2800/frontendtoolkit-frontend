import React from "react";
import Header from "./Header";
import NoPageFound404 from "./NoPageFound404";
import { Switch, Route, useParams } from "react-router-dom";
import CardDetailsDrawer from "./../UI/Common/CardDetailsDrawer/CardDetailsDrawer";
import RoadmapDetailsDrawer from "../UI/FELayout/RoadmapDetailsDrawer";
import { useSelector } from "react-redux";
import { isDesktopView } from "../utils";
import HomeLayout from "../UI/HomeLayout/HomeLayout";
import WidgetLayouts from "../UI/WidgetLayouts/WidgetLayouts";
import FELayout from "../UI/FELayout/FELayout";
import InterviewPrepLayout from "../UI/InterviewPrepLayout/InterviewPrepLayout";
import { ROADMAP_MENU } from "../UI/FELayout/config";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <div className="ft-main-layout">
      <Helmet>
        <title>
          Frontend tools: Controlled and Customizable platform for Frontend
          developer's repetitive tasks
        </title>
        <meta
          name="description"
          content="Frontend Tools dashboard is made up of truly customizable cards which consists
      package size details, package comparison, font preview, code diff, base64 encode decode, JS, TS, CSS, SVG
       optimization and many more awesome modules."
        />
      </Helmet>
      <div className="ft-main-layout__header">
        <Header />
      </div>

      <div className="ft-main-layout__container">
        <Switch>
          <Route exact path="/">
            <HomeLayout />
          </Route>
          <Route path="/tools">
            <WidgetLayouts />
            <Switch>
              <Route path="/tools/:id" children={<RenderDrawer />} />
            </Switch>
          </Route>
          <Route path="/roadmap">
            <FELayout />
            <Switch>
              <Route path="/roadmap/:id" children={<RenderRoadmapDrawer />} />
            </Switch>
          </Route>
          <Route path="/interview">
            <InterviewPrepLayout />
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
  return <CardDetailsDrawer id={id} />;
};

const RenderRoadmapDrawer = () => {
  const { id } = useParams();
  const componentConfig = ROADMAP_MENU.find((menu) => menu.key === id);
  if (!componentConfig) return null;
  return <RoadmapDetailsDrawer id={id} />;
};

export default MainLayout;
