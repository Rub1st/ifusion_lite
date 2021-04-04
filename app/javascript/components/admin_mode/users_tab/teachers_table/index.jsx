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
import { studentIndex, teacherIndex } from '../../../../main_redux/actions/users';
import { datetimeFormat } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    created_at: datetimeFormat(el.created_at),
  })
)

const Teachers = (props) => {

    const classes = useStyles();

    const {state} = props;
    const number = useInputText('');
    const name = useInputText('');
    const email = useInputText('');

    const columns = [
      { title: "Номер", field: "number" },
      { title: "Группа", field: "email" },
      { title: "Имя", field: "name" },
      { title: "создано", field: "created_at" }
    ]

    useEffect(() => {
      props.set("admin/teachers", teacherIndex);
    }, []);

    console.log(props.students);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'admin/teachers', teacherIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Преподаватели'}
              columns={columns}
              data={dataFormatter(props.teachers)}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.number != undefined}
                    helperText={props.errors.number != undefined ? props.errors.number[0] : null}
                    placeholder="Номер"
                    {...number}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.email != undefined}
                    helperText={props.errors.email != undefined ? props.errors.email[0] : null}
                    placeholder="Группа"
                    {...email}
                  />
                </div>
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.name != undefined}
                    helperText={props.errors.name != undefined ? props.errors.name[0] : null}
                    placeholder="Ф.И.О."
                    {...name}
                  />
                </div>
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                          name: name.value,
                          email: email.value,
                          number: number.value,
                          user_role: 1,
                          password: number.value
                        }, 'admin/teachers', teacherIndex)
                }}>Добавить</Button>
            </div>
          <div>
        </div>
      </div>
    )
}

export default connect(
    state => ({
      teachers: state.users.teachers,
      currentUser: state.users.currentUser,
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(Teachers);