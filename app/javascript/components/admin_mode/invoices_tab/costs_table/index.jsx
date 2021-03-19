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
import { costIndex } from '../../../../main_redux/actions/costs';
import { datetimeFormat } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    created_at: datetimeFormat(el.created_at),
    price: el.invoice_product.price.toFixed(2),
    wholesale_value: el.wholesale_value.toFixed(2),
    commercial_value: el.commercial_value.toFixed(2),
    vat_value: el.vat_value.toFixed(2),
    retail_price: el.retail_price.toFixed(2),
    cost: el.cost.toFixed(2)
  })
)


const AdminCosts = (props) => {

    const classes = useStyles();

    const {state} = props;

    const wholesale_percent = useInputText('');
    const commercial_percent = useInputText('');

    const arrival_product = useSelectBox({});

    const columns = [
      { title: "Код товара", field: "invoice_product.code" },
      { title: "Наименование", field: "invoice_product.name" },
      { title: "Номер ТТН", field: "invoice_product.invoice.series_and_number" },
      { title: "Ед.изм./название", field: "invoice_product.unit.short_name" },
      { title: "Ед.изм./граммы", field: "invoice_product.unit.gramms" },
      { title: "Кол-во", field: "invoice_product.count" },
      { title: "Цена", field: "price" },
      { title: "Опт. надбавка %", field: "wholesale_percent" },
      { title: "Опт. надбавка Z", field: "wholesale_value" },
      { title: "Торг. надбавка %", field: "commercial_percent" },
      { title: "Торг. надбавка Z", field: "commercial_value" },
      { title: "НДС %", field: "vat_percent" },
      { title: "НДС Z", field: "vat_value" },
      { title: "Розничная цена", field: "retail_price" },
      { title: "Стоимость", field: "cost" },
      { title: 'СОЗДАНО', field: 'created_at' },
      { title: 'АВТОР', field: 'user.name' }
    ]

    console.log(props.costs)

    useEffect(() => {
      props.set("costs", costIndex);
      props.set("invoice_products", arrivalProductIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'costs', costIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Цены'}
              columns={columns}
              data={dataFormatter(props.costs)}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.wholesale_percent != undefined}
                    helperText={props.errors.wholesale_percent != undefined ? props.errors.wholesale_percent[0] : null}
                    placeholder="Оптовая надбавка"
                    {...wholesale_percent}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.commercial_percent != undefined}
                    helperText={props.errors.commercial_percent != undefined ? props.errors.commercial_percent[0] : null}
                    placeholder="Розничная надбавка"
                    {...commercial_percent}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <SelectedInput
                    label={'Товар прихода'}
                    classes={classes}
                    object={arrival_product}
                    collection={props.arrival_products}
                    attribute={'code'}
                    error={props.errors.invoice_product_id != undefined}
                    helperText={props.errors.invoice_product_id != undefined ? props.errors.invoice_product_id[0] : null}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                          wholesale_percent: wholesale_percent.value,
                          commercial_percent: commercial_percent.value,
                          invoice_product_id: arrival_product.value.id,
                          user_id: props.currentUser.id
                        }, 'costs', costIndex)
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
      arrival_products: state.arrival_products.arrival_products,
      costs: state.costs.costs,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(AdminCosts);