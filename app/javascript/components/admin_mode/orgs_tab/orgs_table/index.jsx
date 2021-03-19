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
import { organizationIndex } from '../../../../main_redux/actions/organizations';
import { ownershipFormIndex } from '../../../../main_redux/actions/ownership_forms';
import { destroy, get, post } from '../../../../main_redux/actions/server_connections';
import { dateFormatter, datetimeFormat } from '../../../utils';

const dataFormatter = (data) => data.map(el => (
  {
    ...el,
    created_at: datetimeFormat(el.created_at),
    phone: el.phone ? el.phone : '-',
    email: el.email ? el.email : '-'
  })
)

const AdminOrganizations = (props) => {

    const classes = useStyles();

    const {state} = props;
    const name = useInputText('');
    const unp = useInputText('');
    const address = useInputText('');
    const phone = useInputText('');
    const email = useInputText('');
    const is_provider = useCheckBox(false);
    const is_buyer = useCheckBox(false);
    const ownership_form = useSelectBox({});

    const columns = [
      { title: "Наименование", field: "name" },
      { title: "УНП", field: "unp" },
      { title: "Форма собственности", field: "ownership_form.name" },
      { title: "Юридический адрес", field: "address" },
      { title: "Телефон", field: "phone" },
      { title: "E-mail", field: "email" },
      {
        title: "Явл. поставшиком",
        field: "provider",
        type: "boolean",
      },
      {
        title: "Явл. покупателем",
        field: "buyer",
        type: "boolean",
      },
      { title: 'СОЗДАНО', field: 'created_at' },
      { title: 'АВТОР', field: 'user.name' }
    ]

    useEffect(() => {
      props.set("organizations", organizationIndex);
      props.set("ownership_forms", ownershipFormIndex);
    }, []);

    const edits = {
      onRowDelete: (oldData) => new Promise((resolve) => {
        props.destroy(oldData.id, 'organizations', organizationIndex)
        resolve();
      })
    }

    return (
        <div className='table-field'>
            <MaterialTable
              icons={tableIcons}
              title={'Организации'}
              columns={columns}
              data={dataFormatter(props.organizations)}
              editable={edits}
            />
            <div className='add-form'>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.name != undefined}
                    helperText={props.errors.name != undefined ? props.errors.name[0] : null}
                    placeholder="Наименование"
                    {...name}
                  />
                </div>
                <TextField
                  error={props.errors.unp != undefined}
                  helperText={props.errors.unp != undefined ? props.errors.unp[0] : null}
                  type="number"
                  placeholder="УНП" {...unp}/>
              </div>
              <div>
                <div className='add-form-column'>
                  <TextField
                    error={props.errors.address != undefined}
                    helperText={props.errors.address != undefined ? props.errors.address[0] : null}
                    placeholder="Юр. адрес" {...address}
                  />
                </div>
                <TextField
                  error={props.errors.phone != undefined}
                  helperText={props.errors.phone != undefined ? props.errors.phone[0] : null}
                  placeholder="Телефон"
                  {...phone}/>
              </div>
              <div>
                <div className='add-form-column'>
                  <input type="checkbox" {...is_provider}/>
                  <span>Является поставщиком?</span>
                </div>
                <div>
                <input type="checkbox" {...is_buyer}/>
                  <span>Является покупателем?</span>
                </div>
              </div>
              <div>
                <div>
                  <SelectedInput
                    label={'Форма собственности'}
                    classes={classes}
                    object={ownership_form}
                    collection={props.ownership_forms}
                    attribute={'name'}
                    error={props.errors.ownership_form_id != undefined}
                    helperText={props.errors.ownership_form_id != undefined ? props.errors.ownership_form_id[0] : null}
                  />
                </div>
                <TextField
                  error={props.errors.email != undefined}
                  helperText={props.errors.email != undefined ? props.errors.email[0] : null}
                  placeholder="e-mail" {...email}
                />
              </div>
                <Button className={'btn btn-info btn-position'} onClick={() => {
                    props.post(
                        {
                            name: name.value,
                            unp: unp.value,
                            address: address.value,
                            phone: phone.value,
                            ownership_form_id: ownership_form.value.id,
                            email: email.value,
                            provider: is_provider.value,
                            buyer: is_buyer.value,
                            user_id: props.currentUser.id
                        }, 'organizations', organizationIndex)
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
      errors: state.errors.errors
    }),
    dispatch => ({
      set: (path, setter) => dispatch(get(path, setter)),
      post: (obj, path, setter) => dispatch(post(obj, path, setter)),
      destroy: (id, path, setter) => dispatch(destroy(id, path, setter))
    })
)(AdminOrganizations);