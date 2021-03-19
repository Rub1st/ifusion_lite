import React, {useEffect} from 'react'
import { tableIcons } from '../../../utils/table_icons'
import {
  useSelectBox,
  useInputText,
  useCheckBox,
  useStyles,
  useDateTime,
  SelectedInput
 } from '../../../utils/hooks'
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { Button, TextField } from '@material-ui/core';
import './style.css'
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { invoiceIndex } from '../../../../main_redux/actions/invoices';
import { arrivalProductIndex } from '../../../../main_redux/actions/arrival_products';
import { rateVatIndex } from '../../../../main_redux/actions/rate_vats';
import { unitIndex } from '../../../../main_redux/actions/units';
import { productSubgroupIndex } from '../../../../main_redux/actions/product_subgroups';
import { balanceProductIndex } from '../../../../main_redux/actions/balance_products';
import { dateFormatter, datetimeFormat } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    created_at: datetimeFormat(el.created_at),
    date_and_time: el.invoice_product.invoice.date_and_time ? dateFormatter(el.invoice_product.invoice.date_and_time) : '-',
  })
)

const AdminBalanceProducts = (props) => {

    const classes = useStyles();

    const columns = [
      { title: "Код", field: "invoice_product.code" },
      { title: "Название", field: "invoice_product.name" },
      { title: "Подгруппа", field: "invoice_product.product_subgroup.name" },
      { title: "Остаток", field: "balance" },
      { title: "№ ТТН", field: "invoice_product.invoice.series_and_number" },
      { title: "Ед.изм./название", field: "invoice_product.unit.short_name" },
      { title: "Ед.изм./граммы", field: "invoice_product.unit.gramms" },
      { title: "Дата оформления", field: "date_and_time" },
      { title: 'СОЗДАНО', field: 'created_at' },
      { title: 'АВТОР', field: 'user.name' }
    ]

    useEffect(() => {
      props.set("balance_products", balanceProductIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'balance_products', balanceProductIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Товары остатка'}
              columns={columns}
              data={dataFormatter(props.balance_products)}
            />
      </div>
    )
}

export default connect(
    state => ({
      currentUser: state.users.currentUser,
      balance_products: state.balance_products.balance_products,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(AdminBalanceProducts);