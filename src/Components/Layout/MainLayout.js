import React from "react";
import DraggableGrid from "../UI/DraggableGrid/DraggabbleGrid";
import Sidebar from "./Sidebar";
import Header from "./header";
import { Switch, Route, useParams } from "react-router-dom";
import CardDetailsDrawer from "./../UI/Common/CardDetailsDrawer/CardDetailsDrawer";
import { COMPONENTS } from "../UI/DraggableGrid/config";

const MainLayout = () => {
  return (
    <div className="ft-main-layout">
      <div className="ft-main-layout__header">
        <Header />
      </div>
      <div className="ft-main-layout__sidebar ft-bg-prime97">
        <Sidebar />
      </div>
      <div className="ft-main-layout__container ft-bg-prime97">
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
        </Switch>
      </div>
    </div>
  );
};

const RenderDrawer = () => {
  let { id } = useParams();
  const componentConfig = COMPONENTS.find(
    (component) => component.key_name === id
  );
  if (!componentConfig) return null;
  return (
    <div>
      <h3>ID: {id}</h3>
      <CardDetailsDrawer id={id} />
    </div>
  );
};

export default MainLayout;
