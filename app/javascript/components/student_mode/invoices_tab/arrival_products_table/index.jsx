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

const ArrivalProducts = (props) => {

    const classes = useStyles();

    const {state} = props;

    const name = useInputText('');
    const code = useInputText('');
    const price = useInputText('');
    const count = useInputText('');

    const rate_vat = useSelectBox({});
    const unit = useSelectBox({});
    const product_subgroup = useSelectBox({});
    const invoice = useSelectBox({});

    const columns = [
      { title: "Код", field: "code" },
      { title: "№ ТТН", field: "invoice.series_and_number" },
      { title: "Название", field: "name" },
      { title: "Подгруппа", field: "product_subgroup.name" },
      { title: "Цена", field: "price" },
      { title: "Количество", field: "count" },
      { title: "Сумма НДС", field: "summa_vat" },
      { title: "Стоимость", field: "cost" },
      { title: "Стоимость с НДС", field: "cost_with_vat" },
      { title: "Рейтинг НДС", field: "rate_vat.rate" },
      { title: "Ед.изм./название", field: "unit.short_name" },
      { title: "Ед.изм./граммы", field: "unit.gramms" },
      { title: "Дата оформления", field: "invoice.date_and_time" },
    ]

    useEffect(() => {
      props.set("invoice_products", arrivalProductIndex);
      props.set("invoices", invoiceIndex);
      props.set("rate_vats", rateVatIndex);
      props.set("units", unitIndex);
      props.set("product_subgroups", productSubgroupIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'invoice_products', arrivalProductIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Товары прихода'}
              columns={columns}
              data={props.arrival_products}
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
                    error={props.errors.name != undefined}
                    helperText={props.errors.name != undefined ? props.errors.name[0] : null}
                    placeholder="Название"
                    {...name}
                  />
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.price != undefined}
                    helperText={props.errors.price != undefined ? props.errors.price[0] : null}
                    placeholder="Цена"
                    {...price}
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
                    label={'Рейтинг НДС'}
                    classes={classes}
                    object={rate_vat}
                    collection={props.rate_vats}
                    attribute={'rate'}
                    error={props.errors.rate_vat_id != undefined}
                    helperText={props.errors.rate_vat_id != undefined ? props.errors.rate_vat_id[0] : null}
                  />
                </div>
                <div>
                  <SelectedInput
                    label={'Ед измерения'}
                    classes={classes}
                    object={unit}
                    collection={props.units}
                    attribute={'full_name'}
                    error={props.errors.unit_id != undefined}
                    helperText={props.errors.unit_id != undefined ? props.errors.unit_id[0] : null}
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
                  <div>
                    <SelectedInput
                      label={'Подгруппа'}
                      classes={classes}
                      object={product_subgroup}
                      collection={props.product_subgroups}
                      attribute={'name'}
                      error={props.errors.product_subgroup_id != undefined}
                      helperText={props.errors.product_subgroup_id != undefined ? props.errors.product_subgroup_id[0] : null}
                    />
                  </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            name: name.value,
                            code: code.value,
                            price: price.value,
                            count: count.value,
                            rate_vat_id: rate_vat.value.id,
                            unit_id: unit.value.id,
                            product_subgroup_id: product_subgroup.value.id,
                            invoice_id: invoice.value.id,
                            user_id: props.currentUser.id
                        }, 'invoice_products', arrivalProductIndex)
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
      units: state.units.units,
      rate_vats: state.rate_vats.rate_vats,
      product_subgroups: state.product_subgroups.product_subgroups,
      invoices: state.invoices.invoices,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(ArrivalProducts);