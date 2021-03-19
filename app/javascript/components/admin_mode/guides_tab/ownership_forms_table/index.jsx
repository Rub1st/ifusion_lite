import React, {useEffect} from 'react'
import { tableIcons } from '../../../utils/table_icons'
import {
  useInputText,
  useStyles,
 } from '../../../utils/hooks'
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { Button, TextField } from '@material-ui/core';
import './style.css'
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { agreementIndex } from '../../../../main_redux/actions/agreements';
import { ownershipFormIndex } from '../../../../main_redux/actions/ownership_forms';

const OwnershipForms = (props) => {

    const classes = useStyles();

    const {state} = props;
    const name = useInputText('');

    const columns = [
      { title: "Название", field: "name" }
    ]

    useEffect(() => {
      props.set("admin/ownership_forms", ownershipFormIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'admin/ownership_forms', ownershipFormIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Формы собственности'}
              columns={columns}
              data={props.ownership_forms}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.name != undefined}
                    helperText={props.errors.name != undefined ? props.errors.name[0] : null}
                    placeholder="Название"
                    {...name}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            name: name.value,
                            user_id: props.currentUser.id
                        }, 'admin/ownership_forms', ownershipFormIndex)
                }}>Добавить</Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      ownership_forms: state.ownership_forms.ownership_forms,
      currentUser: state.users.currentUser,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(OwnershipForms);