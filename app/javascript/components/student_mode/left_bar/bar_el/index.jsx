import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom';
import './style.css'

const BarEl = (props) => (
    <>
    <p>{props.label}</p>
    {
       <ul className="for-children-list">
        {
            props.childrenList.map(el => <li key={el.id}>
                <Link to={el.path} className={'prelabel'}>{el.label}</Link>
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