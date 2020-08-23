import React from "react";

import { Router, Route, Switch, useLocation, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./HomePage";
import Parking from "./Parking";
import "antd/dist/antd.css";
import CreateParkingLot from "./Parking/components/CreateParkingLot";
import EnterPark from "./Parking/components/EnterPark";
import LeavePark from "./Parking/components/LeavePark";

const history = createBrowserHistory();
const Pages = () => {
  let location = useLocation();
  let background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path={`/`} component={HomePage} />
        <Route exact path={`/park`} component={Parking} />
        <Route exact path={`/park/capacity`} component={CreateParkingLot} />
        <Route exact path={`/park/enter`} component={EnterPark} />
        <Route exact path={`/park/:id/leave`} component={LeavePark} />
        <Redirect to="/" />
      </Switch>

      {background && (
        <Route path={`/park/capacity`} children={<CreateParkingLot />} />
      )}
      {background && <Route path={`/park/enter`} children={<EnterPark />} />}
      {background && (
        <Route path={`/park/:id/leave`} children={<LeavePark />} />
      )}
    </>
  );
};

const App = () => {
  return (
    <Router history={history}>
      <Provider store={store}>
        <React.Suspense fallback={<div>404 page</div>}>
          <Pages />
        </React.Suspense>
      </Provider>
    </Router>
  );
};

export default App;
