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
import { Button, FormHelperText, TextField } from '@material-ui/core';
import './style.css'
import { organizationIndex } from '../../../../main_redux/actions/organizations';
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { contractIndex } from '../../../../main_redux/actions/contracts';
import { currenciesIndex } from '../../../../main_redux/actions/currencies';
import { typeOfPaymentsIndex } from '../../../../main_redux/actions/type_of_payments';
import { typeOfExchangesIndex } from '../../../../main_redux/actions/type_of_exchanges';
import { typeOfContractsIndex } from '../../../../main_redux/actions/type_of_contracts';
import { dateFormatter, datetimeFormat } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    valid_from: el.valid_from ? dateFormatter(el.valid_from) : '-',
    valid_for: el.valid_for ? dateFormatter(el.valid_for) : '-',
    created_at: datetimeFormat(el.created_at),
    note: el.note ? el.note : '-'
  })
)

const AdminContracts = (props) => {

    const classes = useStyles();

    const {state} = props;

    const series_and_number = useInputText('');
    const note = useInputText('');

    const valid_from = useDateTime();
    const valid_for = useDateTime();

    const currency = useSelectBox({});
    const type_of_contract = useSelectBox({});
    const type_of_exchange = useSelectBox({});
    const type_of_payment = useSelectBox({});
    const provider = useSelectBox({});
    const customer = useSelectBox({});

    const columns = [
      { title: "Серия и номер", field: "series_and_number" },
      { title: "Дата с", field: "valid_from" },
      { title: "Дата по", field: "valid_for" },
      { title: "Дополнение", field: "note" },
      { title: "Валюта", field: "currency.short_name" },
      { title: "Тип обмена", field: "type_of_exchange.name" },
      { title: "Тип оплаты", field: "type_of_payment.name" },
      { title: "Тип договора", field: "type_of_contract.name" },
      { title: "Поставщик", field: "provider.name" },
      { title: "Покупатель", field: "customer.name" },
      { title: 'СОЗДАНО', field: 'created_at' },
      { title: 'АВТОР', field: 'user.name' }
    ]

    useEffect(() => {
      props.set("contracts", contractIndex);
      props.set("organizations", organizationIndex);
      props.set("type_of_contracts", typeOfContractsIndex);
      props.set("type_of_exchanges", typeOfExchangesIndex);
      props.set("type_of_payments", typeOfPaymentsIndex);
      props.set("currencies", currenciesIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'contracts', contractIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Договоры'}
              columns={columns}
              data={dataFormatter(props.contracts)}
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
                <div>
                  <div className="placeholder">Действует с</div>
                  <input type="date" {...valid_from}/>
                  {
                    props.errors.valid_from != undefined ?
                    <FormHelperText style={{color: 'red'}}>{props.errors.valid_from[0]}</FormHelperText> :
                    null
                  }
                </div>
                <div className='add-form-column'>
                  <div className="placeholder">Действует по</div>
                  <input type="date" {...valid_for}/>
                  {
                    props.errors.valid_for != undefined ?
                    <FormHelperText style={{color: 'red'}}>{props.errors.valid_for[0]}</FormHelperText> :
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
                    label={'Поставщик'}
                    classes={classes}
                    object={provider}
                    collection={props.organizations.filter(el => el.provider)}
                    attribute={'name'}
                    error={props.errors.provider_id != undefined}
                    helperText={props.errors.provider_id != undefined ? props.errors.provider_id[0] : null}
                  />
                </div>
                <div>
                  <SelectedInput
                    label={'Покупатель'}
                    classes={classes}
                    object={customer}
                    collection={props.organizations.filter(el => el.buyer)}
                    attribute={'name'}
                    error={props.errors.customer_id != undefined}
                    helperText={props.errors.customer_id != undefined ? props.errors.customer_id[0] : null}
                  />
                </div>
              </div>
              <div>
              <div>
                  <SelectedInput
                    label={'Тип договора'}
                    classes={classes}
                    object={type_of_contract}
                    collection={props.type_of_contracts}
                    attribute={'name'}
                    error={props.errors.type_of_contract_id != undefined}
                    helperText={props.errors.type_of_contract_id != undefined ? props.errors.type_of_contract_id[0] : null}
                  />
                </div>
                <div>
                  <SelectedInput
                    label={'Тип обмена'}
                    classes={classes}
                    object={type_of_exchange}
                    collection={props.type_of_exchanges}
                    attribute={'name'}
                    error={props.errors.type_of_exchange_id != undefined}
                    helperText={props.errors.type_of_exchange_id != undefined ? props.errors.type_of_exchange_id[0] : null}
                  />
                </div>
                <div>
                  <SelectedInput
                    label={'Тип оплаты'}
                    classes={classes}
                    object={type_of_payment}
                    collection={props.type_of_payments}
                    attribute={'name'}
                    error={props.errors.type_of_payment_id != undefined}
                    helperText={props.errors.type_of_payment_id != undefined ? props.errors.type_of_payment_id[0] : null}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            series_and_number: series_and_number.value,
                            valid_from: valid_from.value,
                            valid_for: valid_for.value,
                            note: note.value,
                            currency_id: currency.value.id,
                            type_of_contract_id: type_of_contract.value.id,
                            type_of_payment_id: type_of_payment.value.id,
                            type_of_exchange_id: type_of_exchange.value.id,
                            provider_id: provider.value.id,
                            customer_id: customer.value.id,
                            user_id: props.currentUser.id
                        }, 'contracts', contractIndex)
                }}>Добавить</Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      organizations: state.organizations.organizations,
      currentUser: state.users.currentUser,
      contracts: state.contracts.contracts,
      type_of_payments: state.type_of_payments.type_of_payments,
      type_of_exchanges: state.type_of_exchanges.type_of_exchanges,
      type_of_contracts: state.type_of_contracts.type_of_contracts,
      currencies: state.currencies.currencies,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(AdminContracts);