import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser } from "./main_redux/actions/users";
import { logout } from "./main_redux/actions/server_connections";
import Organizations from './components/student_mode/orgs_tab/orgs_table'
import { Button } from "@material-ui/core";
import LeftBar from "./components/student_mode/left_bar";
import Warehouses from "./components/student_mode/orgs_tab/warehouse_table";
import Contracts from "./components/student_mode/contracts_tab/contracts_table";
import Invoices from "./components/student_mode/invoices_tab/invoces_table";

function App(props) {
  useEffect(() => {
    props.setCurrentUser(props.current_user);
  }, []);

  return (
    <div>
      {
        props.current_user.user_role === "common" ? (
          <LeftBar>
            <Switch>
              <Route exact path='/' component={Organizations}/>
              <Route exact path='/warehouse' component={Warehouses}/>
              <Route exact path='/contract' component={Contracts}/>
              <Route exact path='/invoice' component={Invoices}/>
            </Switch>
          </LeftBar>
        ) : (
          'you signed in as a admin user'
        )
        }
    </div>
  );
}

export default connect(
  (state) => ({
    currentUser: state.users.currentUser,
  }),
  (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    logout: () => dispatch(logout()),
  })
)(App);
