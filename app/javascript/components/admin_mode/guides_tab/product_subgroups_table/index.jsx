import React, {useEffect} from 'react'
import { tableIcons } from '../../../utils/table_icons'
import {
  SelectedInput,
  useInputText,
  useSelectBox,
  useStyles,
 } from '../../../utils/hooks'
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { Button, TextField } from '@material-ui/core';
import './style.css'
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { agreementIndex } from '../../../../main_redux/actions/agreements';
import { productSubgroupIndex } from '../../../../main_redux/actions/product_subgroups';
import { productGroupIndex } from '../../../../main_redux/actions/product_groups';

const ProductSubgroups = (props) => {

    const classes = useStyles();

    const {state} = props;
    const name = useInputText('');
    const product_group = useSelectBox({});

    const columns = [
      { title: "Название", field: "name" },
      { title: "Группа", field: "product_group.name" }
    ]

    useEffect(() => {
      props.set("admin/product_subgroups", productSubgroupIndex);
      props.set("admin/product_groups", productGroupIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'admin/product_subgroups', productSubgroupIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Подгруппы товаров'}
              columns={columns}
              data={props.product_subgroups}
              editable={edits}
            />
            <div className='add-form'>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.name != undefined}
                    helperText={props.errors.name != undefined ? props.errors.name[0] : null}
                    placeholder="Название"
                    {...name}
                  />
                  </div>
              <div className='add-form-column'>
                <SelectedInput
                      label={'Группа'}
                      classes={classes}
                      object={product_group}
                      collection={props.product_groups}
                      attribute={'name'}
                      error={props.errors.product_group_id != undefined}
                      helperText={props.errors.product_group_id != undefined ? props.errors.product_group_id[0] : null}
                    />
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            name: name.value,
                            product_group_id: product_group.value.id,
                            user_id: props.currentUser.id
                        }, 'admin/product_subgroups', productSubgroupIndex)
                }}>
                  Добавить
                </Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      product_groups: state.product_groups.product_groups,
      product_subgroups: state.product_subgroups.product_subgroups,
      currentUser: state.users.currentUser,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(ProductSubgroups);