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
import { currenciesIndex } from '../../../../main_redux/actions/currencies';

const Currencies = (props) => {

    const classes = useStyles();

    const {state} = props;
    const full_name = useInputText('');
    const short_name = useInputText('');

    const columns = [
      { title: "Название", field: "full_name" },
      { title: "Обозначение", field: "short_name" }
    ]

    useEffect(() => {
      props.set("admin/currencies", currenciesIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'admin/currencies', currenciesIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Виды валют'}
              columns={columns}
              data={props.currencies}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.full_name != undefined}
                    helperText={props.errors.full_name != undefined ? props.errors.full_name[0] : null}
                    placeholder="Название"
                    {...full_name}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.short_name != undefined}
                    helperText={props.errors.short_name != undefined ? props.errors.short_name[0] : null}
                    placeholder="Обозначение"
                    {...short_name}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                          full_name: full_name.value,
                          short_name: short_name.value,
                          user_id: props.currentUser.id
                        }, 'admin/currencies', currenciesIndex)
                }}>Добавить</Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      currencies: state.currencies.currencies,
      currentUser: state.users.currentUser,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(Currencies);