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
import { unitIndex } from '../../../../main_redux/actions/units';

const Units = (props) => {

    const classes = useStyles();

    const {state} = props;
    const full_name = useInputText('');
    const short_name = useInputText('');
    const gramms = useInputText('');

    const columns = [
      { title: "Полное название", field: "full_name" },
      { title: "Короткое название", field: "short_name" },
      { title: "Вес в граммах", field: "gramms" }
    ]

    useEffect(() => {
      props.set("admin/units", unitIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'admin/units', unitIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Единицы Измерения'}
              columns={columns}
              data={props.units}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.full_name != undefined}
                    helperText={props.errors.full_name != undefined ? props.errors.full_name[0] : null}
                    placeholder="Полное название"
                    {...full_name}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.short_name != undefined}
                    helperText={props.errors.short_name != undefined ? props.errors.short_name[0] : null}
                    placeholder="Короткое название"
                    {...short_name}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.gramms != undefined}
                    helperText={props.errors.gramms != undefined ? props.errors.gramms[0] : null}
                    placeholder="Вес в груммах"
                    {...gramms}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                          full_name: full_name.value,
                          short_name: short_name.value,
                          gramms: gramms.value,
                          user_id: props.currentUser.id
                        }, 'admin/units', unitIndex)
                }}>Добавить</Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      units: state.units.units,
      currentUser: state.users.currentUser,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(Units);