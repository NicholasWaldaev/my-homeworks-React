import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.header}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.priority}>{props.affair.priority}</div>
            <button className={s.delete} onClick={deleteCallback}>x</button>
        </div>
    )
}

export default Affair
