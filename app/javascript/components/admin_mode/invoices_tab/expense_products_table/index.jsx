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
import { Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import './style.css'
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { invoiceIndex } from '../../../../main_redux/actions/invoices';
import { arrivalProductIndex } from '../../../../main_redux/actions/arrival_products';
import { rateVatIndex } from '../../../../main_redux/actions/rate_vats';
import { unitIndex } from '../../../../main_redux/actions/units';
import { productSubgroupIndex } from '../../../../main_redux/actions/product_subgroups';
import { expenseProductIndex } from '../../../../main_redux/actions/expense_products';
import { cashRegisterIndex } from '../../../../main_redux/actions/cash_registers';
import { balanceProductIndex } from '../../../../main_redux/actions/balance_products';
import { dateFormatter, datetimeFormat } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    price: el.balance_product.invoice_product.price.toFixed(2),
    cost: el.cost.toFixed(2),
    created_at: datetimeFormat(el.created_at),
    date_and_time: el.date_and_time ? dateFormatter(el.date_and_time) : '-',
    balance_date: el.balance_product.invoice_product.invoice.date_and_time ? dateFormatter(el.balance_product.invoice_product.invoice.date_and_time) : '-'
  })
)

const AdminExpenseProducts = (props) => {

    const classes = useStyles();

    const {state} = props;

    const count = useInputText('');
    const date_and_time = useDateTime();

    const cash_register = useSelectBox({});
    const balance_product = useSelectBox({});

    const columns = [
      { title: "Код", field: "balance_product.invoice_product.code" },
      { title: "№ ТТН", field: "balance_product.invoice_product.invoice.series_and_number" },
      { title: "Название", field: "balance_product.invoice_product.name" },
      { title: "Подгруппа", field: "balance_product.invoice_product.product_subgroup.name" },
      { title: "Цена", field: "price" },
      { title: "Количество", field: "count" },
      { title: "Стоимость", field: "cost" },
      { title: "Ед.изм./название", field: "balance_product.invoice_product.unit.short_name" },
      { title: "Ед.изм./граммы", field: "balance_product.invoice_product.unit.gramms" },
      { title: "Дата расхода", field: "date_and_time" },
      { title: "Дата оформления", field: "balance_date" },
      { title: 'СОЗДАНО', field: 'created_at' },
      { title: 'АВТОР', field: 'user.name' }
    ]

    useEffect(() => {
      props.set("expense_products", expenseProductIndex);
      props.set("cash_registers", cashRegisterIndex);
      props.set("balance_products", balanceProductIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'expense_products', expenseProductIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Товары расхода'}
              columns={columns}
              data={dataFormatter(props.expense_products)}
              editable={edits}
            />
            <div className='contract-add-form'>
              <div>
              <div className='add-form-column'>
                  <div className="placeholder">Дата расхода</div>
                  <input type="date" {...date_and_time}/>
                  {
                    props.errors.date_and_time != undefined ?
                    <FormHelperText style={{color: 'red'}}>{props.errors.date_and_time[0]}</FormHelperText> :
                    null
                  }
                </div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.count != undefined}
                    helperText={props.errors.count != undefined ? props.errors.count[0] : null}
                    placeholder="Количество"
                    {...count}
                  />
                </div>
              </div>
              <div>
              <div>
                  <div>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">{'Товар остатка'}</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={balance_product.value}
                    onChange={balance_product.onChange}
                  >
                    {props.balance_products.map((el) => (
                      <MenuItem value={el}>{el.invoice_product.code}</MenuItem>
                    ))}
                  </Select>
                  {
                    props.errors.balance_product_id != undefined ? (
                      <FormHelperText style={{color: 'red'}}>
                        {props.errors.balance_product_id != undefined ? props.errors.balance_product_id[0] : null}
                      </FormHelperText>
                    ) : null
                  }
                </FormControl>
                </div>
                </div>
                <div>
                  <SelectedInput
                    label={'Касса'}
                    classes={classes}
                    object={cash_register}
                    collection={props.cash_registers}
                    attribute={'name'}
                    error={props.errors.cash_register_id != undefined}
                    helperText={props.errors.cash_register_id != undefined ? props.errors.cash_register_id[0] : null}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            date_and_time: date_and_time.value,
                            count: count.value,
                            cash_register_id: cash_register.value.id,
                            balance_product_id: balance_product.value.id,
                            user_id: props.currentUser.id
                        }, 'expense_products', expenseProductIndex)
                }}>Добавить</Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      currentUser: state.users.currentUser,
      balance_products: state.balance_products.balance_products,
      expense_products: state.expense_products.expense_products,
      cash_registers: state.cash_registers.cash_registers,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(AdminExpenseProducts);