import React from "react";
import Header from "./Header";
import NoPageFound404 from "./SidebarComponents/NoPageFound404";
import { Switch, Route, useParams } from "react-router-dom";
import CardDetailsDrawer from "./../UI/Common/CardDetailsDrawer/CardDetailsDrawer";
import { useSelector } from "react-redux";
import { isDesktopView } from "../utils";
import WidgetLayouts from "../UI/WidgetLayouts/WidgetLayouts";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <div className="ft-main-layout">
      <Helmet>
        <title>
          Frontend Devtools: Controlled and Customizable platform for Frontend
          developer's repetitive tasks
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

      <div className="ft-main-layout__container">
        <Switch>
          <Route exact path="/">
            Home page
          </Route>
          <Route path="/cards">
            <WidgetLayouts />
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
