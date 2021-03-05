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
import { organizationIndex } from '../../../../main_redux/actions/organizations';
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { warehouseIndex } from '../../../../main_redux/actions/warehouses';

const Warehouses = (props) => {

    const classes = useStyles();

    const {state} = props;
    const address = useInputText('');
    const organization = useSelectBox({});

    const columns = [
      { title: "Адрес", field: "address" },
      { title: "Организация", field: "organization.name" },
    ]

    useEffect(() => {
      props.set("organizations", organizationIndex);
      props.set("warehouses", warehouseIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'warehouses', warehouseIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Склады'}
              columns={columns}
              data={props.warehouses}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.address != undefined}
                    helperText={props.errors.address != undefined ? props.errors.address[0] : null}
                    placeholder="Адрес"
                    {...address}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <SelectedInput
                    label={'Организация'}
                    classes={classes}
                    object={organization}
                    collection={props.organizations}
                    attribute={'name'}
                    error={props.errors.organization_id != undefined}
                    helperText={props.errors.organization_id != undefined ? props.errors.organization_id[0] : null}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            address: address.value,
                            organization_id: organization.value.id,
                            user_id: props.currentUser.id
                        }, 'warehouses', warehouseIndex)
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
      ownership_forms: state.ownership_forms.ownership_forms,
      warehouses: state.warehouses.warehouses,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(Warehouses);