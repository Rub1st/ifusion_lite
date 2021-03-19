import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import icon from '../../../../../assets/images/form.png'
import folder from '../../../../../assets/images/open.png'
import './style.css'

const BarEl = (props) => (
    <>
    <p className='folder-label'><img alt='' src={folder}/> {' '} {props.label}</p>
    {
       <ul className="for-children-list">
        {
            props.childrenList.map(el => <li key={el.id}>
                <img alt='' src={icon}/> {'  '} <Link to={el.path} className={'prelabel'}>{el.label}</Link>
            </li>)
        }
    </ul>
    }
    </>
)

export default connect(
    state => ({}),
    dispatch => ({
    })
  )(BarEl);