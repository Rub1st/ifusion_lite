import React, {useEffect} from 'react'
import { tableIcons } from '../../../utils/table_icons'
import {
  useSelectBox,
  useInputText,
  useStyles,
  SelectedInput
 } from '../../../utils/hooks'
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { Button, TextField } from '@material-ui/core';
import './style.css'
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { invoiceIndex } from '../../../../main_redux/actions/invoices';
import { actProductIndex } from '../../../../main_redux/actions/act_products';
import { actIndex } from '../../../../main_redux/actions/acts';
import { arrivalProductIndex } from '../../../../main_redux/actions/arrival_products';

const ActProducts = (props) => {

    const classes = useStyles();

    const {state} = props;

    const code = useInputText('');
    const count = useInputText('');

    const act = useSelectBox({});
    const arrival_product = useSelectBox({});

    console.log(props.act_products)

    const columns = [
      { title: "Код", field: "code"},
      { title: "Номер ТТН", field: "invoice_product.invoice.series_and_number"},
      { title: "Акт расхождения", field: "act_of_discrepancy.series_and_number"},
      { title: "Продукт", field: "invoice_product.name"},
      { title: "Кол-во", field: "count"},
      { title: "Стоимость", field: "cost"},
      { title: "Дата и время", field: "act_of_discrepancy.date_and_time" },
    ]

    useEffect(() => {
      props.set("act_of_discrepancies", actIndex);
      props.set("act_of_discrepancies_products", actProductIndex);
      props.set("invoice_products", arrivalProductIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'act_of_discrepancies_products', actProductIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Товары актов расхождений'}
              columns={columns}
              data={props.act_products}
              editable={edits}
            />
            <div className='contract-add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.code != undefined}
                    helperText={props.errors.code != undefined ? props.errors.code[0] : null}
                    placeholder="Код"
                    {...code}
                  />
                </div>
                <TextField
                    error={props.errors.count != undefined}
                    helperText={props.errors.count != undefined ? props.errors.count[0] : null}
                    placeholder="Количество"
                    {...count}
                  />
              </div>
              <div>
                <div>
                  <SelectedInput
                    label={'Акт расхождения'}
                    classes={classes}
                    object={act}
                    collection={props.acts}
                    attribute={'series_and_number'}
                    error={props.errors.act_of_discrepancy_id != undefined}
                    helperText={props.errors.act_of_discrepancy_id != undefined ? props.errors.act_of_discrepancy_id[0] : null}
                  />
                </div>
                {
                  act.value.series_and_number != undefined ?
                  <>
                  <div>
                    <SelectedInput
                      label={'Товар прихода'}
                      classes={classes}
                      object={arrival_product}
                      collection={props.arrival_products.filter(el => el.invoice.id == act.value.invoice.id)}
                      attribute={'code'}
                      error={props.errors.invoice_product_id != undefined}
                      helperText={props.errors.invoice_product_id != undefined ? props.errors.invoice_product_id[0] : null}
                    />
                  </div>
                  </> : null
                }
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                          act_of_discrepancies_product: {
                            code: code.value,
                            act_of_discrepancy_id: act.value.id,
                            count: count.value,
                            invoice_product_id: arrival_product.value.id,
                            user_id: props.currentUser.id
                          }
                        }, 'act_of_discrepancies_products', actProductIndex)
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
      act_products: state.act_products.act_products,
      acts: state.acts.acts,
      arrival_products: state.arrival_products.arrival_products,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(ActProducts);