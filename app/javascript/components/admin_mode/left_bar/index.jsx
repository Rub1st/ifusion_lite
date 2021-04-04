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
        path: '/admin/warehouse'
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
        path: '/admin/contract'
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
        path: '/admin/invoice'
      },
      {
        id: 2,
        label: 'Товары прихода',
        path: '/admin/arrival_product'
      },
      {
        id: 3,
        label: 'Товары расхода',
        path: '/admin/expense_product'
      },
      {
        id: 4,
        label: 'Товары остатка',
        path: '/admin/balance_product'
      },
      {
        id: 5,
        label: 'Цены',
        path: '/admin/cost'
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
        path: '/admin/act'
      },
      {
        id: 2,
        label: 'Товары актов',
        path: '/admin/act_product'
      }
    ]
  },
  {
    id: 5,
    label: 'Справочники',
    childrenList: [
      {
        id: 1,
        label: 'Виды соглашений',
        path: '/admin/agreement'
      },
      {
        id: 2,
        label: 'Кассы',
        path: '/admin/cash_register'
      },
      {
        id: 3,
        label: 'Типы договора',
        path: '/admin/contract_type'
      },
      {
        id: 4,
        label: 'Типы обмена',
        path: '/admin/exchange_type'
      },
      {
        id: 5,
        label: 'Типы оплаты',
        path: '/admin/payment_type'
      },
      {
        id: 6,
        label: 'Виды валют',
        path: '/admin/currency'
      },
      {
        id: 7,
        label: 'Виды операций',
        path: '/admin/operation'
      },
      {
        id: 8,
        label: 'Формы собственности',
        path: '/admin/ownership_form'
      },
      {
        id: 9,
        label: 'Группы продуктов',
        path: '/admin/product_group'
      },
      {
        id: 10,
        label: 'Подгруппы продуктов',
        path: '/admin/product_subgroup'
      },
      {
        id: 11,
        label: 'Рейтинги НДС',
        path: '/admin/rate_vat'
      },
      {
        id: 12,
        label: 'Единицы измерения',
        path: '/admin/unit'
      }
    ]
  },
  {
    id: 6,
    label: 'Пользователи',
    childrenList: [
      {
        id: 1,
        label: 'Преподаватели',
        path: '/admin/teacher'
      },
      {
        id: 2,
        label: 'Студенты',
        path: '/admin/student'
      }
    ]
  },
]

const AdminLeftBar = (props) => (
    <div className={'for-left-block'}>
        <div>
            <ul className="for-main-list">
                {
                   barStructure.map(el => <li key={el.id}>
                        <BarEl id={el.id} label={el.label} childrenList={el.childrenList}/>
                   </li>)
                }
            </ul>
            <div onClick={() => props.logout()}>
                Выход
              </div>
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
)(AdminLeftBar);