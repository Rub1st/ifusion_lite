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
import { Button, FormHelperText, TextField } from '@material-ui/core';
import './style.css'
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { contractIndex } from '../../../../main_redux/actions/contracts';
import { currenciesIndex } from '../../../../main_redux/actions/currencies';
import { invoiceIndex } from '../../../../main_redux/actions/invoices';
import { operationIndex } from '../../../../main_redux/actions/operations';
import { agreementIndex } from '../../../../main_redux/actions/agreements';
import { warehouseIndex } from '../../../../main_redux/actions/warehouses';
import { dateFormatter } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    summa: el.summa.toFixed(2),
    summa_vat: el.summa_vat.toFixed(2),
    summa_with_vat: el.summa_with_vat.toFixed(2),
    date_and_time: el.date_and_time ? dateFormatter(el.date_and_time) : '-',
    note: el.note ? el.note : '-'
  })
)

const Invoices = (props) => {

    const classes = useStyles();

    const {state} = props;

    const series_and_number = useInputText('');
    const note = useInputText('');

    const date_and_time = useDateTime();

    const currency = useSelectBox({});
    const contract = useSelectBox({});

    const operation = useSelectBox({});
    const agreement = useSelectBox({});
    const provider_warehouse = useSelectBox({});
    const customer_warehouse = useSelectBox({});

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
      { title: "Договор", field: "contract.series_and_number" },
      { title: "Операция", field: "operation.name" },
      { title: "Соглашение", field: "agreement.name" },
      { title: "Склад поставщика", field: "provider_warehouse.address" },
      { title: "Склад покупателя", field: "customer_warehouse.address" },
    ]

    useEffect(() => {
      props.set("invoices", invoiceIndex);
      props.set("contracts", contractIndex);
      props.set("operations", operationIndex);
      props.set("agreements", agreementIndex);
      props.set("warehouses", warehouseIndex);
      props.set("currencies", currenciesIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'invoices', invoiceIndex)
        resolve();
      })
    }

    console.log(contract.value)
    console.log(contract.value.series_and_number == undefined)

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Товарно-транспортные накладные'}
              columns={columns}
              data={dataFormatter(props.invoices)}
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
                  <div className="placeholder">Оформлена</div>
                  <input type="date" {...date_and_time}/>
                  {
                    props.errors.date_and_time != undefined ?
                    <FormHelperText style={{color: 'red'}}>{props.errors.date_and_time[0]}</FormHelperText> :
                    null
                  }
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
                <div>
                  <SelectedInput
                    label={'Соглашение'}
                    classes={classes}
                    object={agreement}
                    collection={props.agreements}
                    attribute={'name'}
                    error={props.errors.agreement_id != undefined}
                    helperText={props.errors.agreement_id != undefined ? props.errors.agreement_id[0] : null}
                  />
                </div>
              </div>
              <div>
              <div>
                  <SelectedInput
                    label={'Договор'}
                    classes={classes}
                    object={contract}
                    collection={props.contracts}
                    attribute={'series_and_number'}
                    error={props.errors.contract_id != undefined}
                    helperText={props.errors.contract_id != undefined ? props.errors.contract_id[0] : null}
                  />
                </div>
                {
                  contract.value.series_and_number != undefined ?
                  <>
                  <div>
                    <SelectedInput
                      label={'Склад поставщика'}
                      classes={classes}
                      object={provider_warehouse}
                      collection={props.warehouses.filter(el => el.organization.id == contract.value.provider.id)}
                      attribute={'address'}
                      error={props.errors.provider_warehouse_id != undefined}
                      helperText={props.errors.provider_warehouse_id != undefined ? props.errors.provider_warehouse_id[0] : null}
                    />
                  </div>
                  <div>
                    <SelectedInput
                      label={'Склад покупателя'}
                      classes={classes}
                      object={customer_warehouse}
                      collection={props.warehouses.filter(el => el.organization.id == contract.value.customer.id)}
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
                            agreement_id: agreement.value.id,
                            contract_id: contract.value.id,
                            provider_warehouse_id: provider_warehouse.value.id,
                            customer_warehouse_id: customer_warehouse.value.id,
                            user_id: props.currentUser.id
                        }, 'invoices', invoiceIndex)
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
      contracts: state.contracts.contracts,
      currencies: state.currencies.currencies,
      warehouses: state.warehouses.warehouses,
      agreements: state.agreements.agreements,
      operations: state.operations.operations,
      invoices: state.invoices.invoices,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(Invoices);