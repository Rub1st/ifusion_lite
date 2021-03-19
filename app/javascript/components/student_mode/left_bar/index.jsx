import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../../main_redux/actions/server_connections'
import BarEl from './bar_el'
import icon from '../../../../assets/images/open.png'
import './style.css'

const barStructure = [
  {
    id: 1,
    label: 'Организации',
    childrenList: [
      {
        id: 1,
        label: 'Организации',
        path: '/'
      },
      {
        id: 2,
        label: 'Склады',
        path: 'warehouse'
      }
    ]
  },
  {
    id: 2,
    label: 'Договоры',
    childrenList: [
      {
        id: 1,
        label: 'Договоры',
        path: 'contract'
      }
    ]
  },
  {
    id: 3,
    label: 'Накладные',
    childrenList: [
      {
        id: 1,
        label: 'Накладные',
        path: 'invoice'
      },
      {
        id: 2,
        label: 'Товары прихода',
        path: 'arrival_product'
      },
      {
        id: 3,
        label: 'Товары расхода',
        path: 'expense_product'
      },
      {
        id: 4,
        label: 'Товары остатка',
        path: 'balance_product'
      },
      {
        id: 5,
        label: 'Цены',
        path: 'cost'
      }
    ]
  },
  {
    id: 4,
    label: 'Акты расхождений',
    childrenList: [
      {
        id: 1,
        label: 'Акты',
        path: 'act'
      },
      {
        id: 2,
        label: 'Товары актов',
        path: 'act_product'
      }
    ]
  },
]

const LeftBar = (props) => (
    <div className={'for-left-block'}>
        <div>
            <ul className="for-main-list">
                {
                   barStructure.map(el => <li key={el.id}>
                        <BarEl id={el.id} label={el.label} childrenList={el.childrenList}/>
                   </li>)
                }
              <div onClick={() => props.logout()} className='exit-button'>
                Выход
              </div>
            </ul>
        </div>
        <div className="children-field">
          {props.children}
        </div>
    </div>
)

export default connect(
  (state) => ({
  }),
  (dispatch) => ({
    logout: () => dispatch(logout()),
  })
)(LeftBar);