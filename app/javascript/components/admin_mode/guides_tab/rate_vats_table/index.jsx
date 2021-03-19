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
import { rateVatIndex } from '../../../../main_redux/actions/rate_vats';

const RateVats = (props) => {

    const classes = useStyles();

    const {state} = props;
    const rate = useInputText('');

    const columns = [
      { title: "Значение", field: "rate" }
    ]

    useEffect(() => {
      props.set("admin/rate_vats", rateVatIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'admin/rate_vats', rateVatIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Рейтинги НДС'}
              columns={columns}
              data={props.rate_vats}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.rate != undefined}
                    helperText={props.errors.rate != undefined ? props.errors.rate[0] : null}
                    placeholder="Значение"
                    {...rate}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            rate: rate.value,
                            user_id: props.currentUser.id
                        }, 'admin/rate_vats', rateVatIndex)
                }}>Добавить</Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      rate_vats: state.rate_vats.rate_vats,
      currentUser: state.users.currentUser,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(RateVats);