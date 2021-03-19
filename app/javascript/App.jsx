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
import Invoices from "./components/student_mode/invoices_tab/invoices_table";
import ArrivalProducts from "./components/student_mode/invoices_tab/arrival_products_table";
import Costs from "./components/student_mode/invoices_tab/costs_table";
import Acts from "./components/student_mode/acts_tab/acts_table";
import ActProducts from "./components/student_mode/acts_tab/act_products_table";
import BalanceProducts from "./components/student_mode/invoices_tab/balance_products_table";
import ExpenseProducts from "./components/student_mode/invoices_tab/expense_products_table";
import AdminLeftBar from './components/admin_mode/left_bar'
import AdminOrganizations from './components/admin_mode/orgs_tab/orgs_table'
import AdminWarehouses from './components/admin_mode/orgs_tab/warehouse_table'
import AdminArrivalProducts from './components/admin_mode/invoices_tab/arrival_products_table'
import AdminBalanceProducts from './components/admin_mode/invoices_tab/balance_products_table'
import AdminExpenseProducts from './components/admin_mode/invoices_tab/expense_products_table'
import AdminInvoices from './components/admin_mode/invoices_tab/invoices_table'
import AdminCosts from './components/admin_mode/invoices_tab/costs_table'
import AdminContracts from './components/admin_mode/contracts_tab/contracts_table'
import AdminActs from './components/admin_mode/acts_tab/acts_table'
import AdminActProducts from './components/admin_mode/acts_tab/act_products_table'
import Agreements from "./components/admin_mode/guides_tab/agreements_table";
import CashRegisters from "./components/admin_mode/guides_tab/cash_registers_table";
import ContractTypes from "./components/admin_mode/guides_tab/contract_types_table";
import Currencies from "./components/admin_mode/guides_tab/currencies_table";

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
              <Route exact path='/arrival_product' component={ArrivalProducts}/>
              <Route exact path='/balance_product' component={BalanceProducts}/>
              <Route exact path='/expense_product' component={ExpenseProducts}/>
              <Route exact path='/cost' component={Costs}/>
              <Route exact path='/act' component={Acts}/>
              <Route exact path='/act_product' component={ActProducts}/>
            </Switch>
          </LeftBar>
        ) :
        (
          <AdminLeftBar>
            <Switch>
              <Route exact path='/' component={AdminOrganizations}/>
              <Route exact path='/admin/warehouse' component={AdminWarehouses}/>
              <Route exact path='/admin/contract' component={AdminContracts}/>
              <Route exact path='/admin/invoice' component={AdminInvoices}/>
              <Route exact path='/admin/arrival_product' component={AdminArrivalProducts}/>
              <Route exact path='/admin/balance_product' component={AdminBalanceProducts}/>
              <Route exact path='/admin/expense_product' component={AdminExpenseProducts}/>
              <Route exact path='/admin/cost' component={AdminCosts}/>
              <Route exact path='/admin/act' component={AdminActs}/>
              <Route exact path='/admin/act_product' component={AdminActProducts}/>
              <Route exact path='/admin/agreement' component={Agreements}/>
              <Route exact path='/admin/cash_register' component={CashRegisters}/>
              <Route exact path='/admin/contract_type' component={ContractTypes}/>
              <Route exact path='/admin/currency' component={Currencies}/>
            </Switch>
          </AdminLeftBar>
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
