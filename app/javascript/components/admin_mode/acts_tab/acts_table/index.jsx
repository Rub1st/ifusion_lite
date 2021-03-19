import React, {useEffect} from 'react'
import { tableIcons } from '../../../utils/table_icons'
import {
  useSelectBox,
  useInputText,
  useStyles,
  useDateTime,
  SelectedInput
 } from '../../../utils/hooks'
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { Button, TextField } from '@material-ui/core';
import './style.css'
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { currenciesIndex } from '../../../../main_redux/actions/currencies';
import { invoiceIndex } from '../../../../main_redux/actions/invoices';
import { operationIndex } from '../../../../main_redux/actions/operations';
import { actIndex } from '../../../../main_redux/actions/acts';
import { warehouseIndex } from '../../../../main_redux/actions/warehouses';
import { dateFormatter, datetimeFormat } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    summa: el.summa.toFixed(2),
    summa_vat: el.summa_vat.toFixed(2),
    summa_with_vat: el.summa_with_vat.toFixed(2),
    date_and_time: el.date_and_time ? dateFormatter(el.date_and_time) : '-',
    created_at: datetimeFormat(el.created_at),
    note: el.note ? el.note : '-'
  })
)

const AdminActs = (props) => {

    const classes = useStyles();

    const {state} = props;

    const series_and_number = useInputText('');
    const note = useInputText('');

    const date_and_time = useDateTime();

    const currency = useSelectBox({});
    const invoice = useSelectBox({});

    const operation = useSelectBox({});
    const provider_warehouse = useSelectBox({});
    const customer_warehouse = useSelectBox({});

    console.log(props.acts)

    const columns = [
      { title: "Серия и номер", field: "series_and_number" },
      { title: "Дата", field: "date_and_time" },
      { title: "Количество позиций", field: "strings_count" },
      { title: "Количество товаров", field: "total_count" },
      { title: "Сумма", field: "summa" },
      { title: "Сумма НДС", field: "summa_vat" },
      { title: "Сумма с НДС", field: "summa_with_vat" },
      { title: "Дополнение", field: "note" },
      { title: "Валюта", field: "currency.short_name" },
      { title: "№ ТТН", field: "invoice.series_and_number" },
      { title: "Операция", field: "operation.name" },
      { title: "Склад поставщика", field: "provider_warehouse.address" },
      { title: "Склад покупателя", field: "customer_warehouse.address" },
      { title: 'СОЗДАНО', field: 'created_at' },
      { title: 'АВТОР', field: 'user.name' }
    ]

    useEffect(() => {
      props.set("act_of_discrepancies", actIndex);
      props.set("operations", operationIndex);
      props.set("invoices", invoiceIndex);
      props.set("warehouses", warehouseIndex);
      props.set("currencies", currenciesIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'act_of_discrepancies', actIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Акты расхождений'}
              columns={columns}
              data={dataFormatter(props.acts)}
              editable={edits}
            />
            <div className='contract-add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.series_and_number != undefined}
                    helperText={props.errors.series_and_number != undefined ? props.errors.series_and_number[0] : null}
                    placeholder="Серия и номер"
                    {...series_and_number}
                  />
                </div>
                <div className='add-form-column'>
                  <div className="placeholder">Оформлен</div>
                  <input type="date" {...date_and_time}/>
                </div>
                <TextField
                    error={props.errors.note != undefined}
                    helperText={props.errors.note != undefined ? props.errors.note[0] : null}
                    placeholder="Дополнение"
                    {...note}
                  />
              </div>
              <div>
                <div>
                  <SelectedInput
                    label={'Валюта'}
                    classes={classes}
                    object={currency}
                    collection={props.currencies}
                    attribute={'full_name'}
                    error={props.errors.currency_id != undefined}
                    helperText={props.errors.currency_id != undefined ? props.errors.currency_id[0] : null}
                  />
                </div>
                <div>
                  <SelectedInput
                    label={'Операция'}
                    classes={classes}
                    object={operation}
                    collection={props.operations}
                    attribute={'name'}
                    error={props.errors.operation_id != undefined}
                    helperText={props.errors.operation_id != undefined ? props.errors.operation_id[0] : null}
                  />
                </div>
              </div>
              <div>
              <div>
                  <SelectedInput
                    label={'ТТН'}
                    classes={classes}
                    object={invoice}
                    collection={props.invoices}
                    attribute={'series_and_number'}
                    error={props.errors.invoice_id != undefined}
                    helperText={props.errors.invoice_id != undefined ? props.errors.invoice_id[0] : null}
                  />
                </div>
                {
                  invoice.value.series_and_number != undefined ?
                  <>
                  <div>
                    <SelectedInput
                      label={'Склад приемщика'}
                      classes={classes}
                      object={provider_warehouse}
                      collection={props.warehouses.filter(el => el.organization.id == invoice.value.contract.provider.id)}
                      attribute={'address'}
                      error={props.errors.provider_warehouse_id != undefined}
                      helperText={props.errors.provider_warehouse_id != undefined ? props.errors.provider_warehouse_id[0] : null}
                    />
                  </div>
                  <div>
                    <SelectedInput
                      label={'Склад отправителя'}
                      classes={classes}
                      object={customer_warehouse}
                      collection={props.warehouses.filter(el => el.organization.id == invoice.value.contract.customer.id)}
                      attribute={'address'}
                      error={props.errors.customer_warehouse_id != undefined}
                      helperText={props.errors.customer_warehouse_id != undefined ? props.errors.customer_warehouse_id[0] : null}
                    />
                  </div>
                  </> : null
                }
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            series_and_number: series_and_number.value,
                            date_and_time: date_and_time.value,
                            note: note.value,
                            currency_id: currency.value.id,
                            operation_id: operation.value.id,
                            invoice_id: invoice.value.id,
                            provider_warehouse_id: provider_warehouse.value.id,
                            customer_warehouse_id: customer_warehouse.value.id,
                            user_id: props.currentUser.id
                        }, 'act_of_discrepancies', actIndex)
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
      currencies: state.currencies.currencies,
      warehouses: state.warehouses.warehouses,
      operations: state.operations.operations,
      acts: state.acts.acts,
      invoices: state.invoices.invoices,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(AdminActs);