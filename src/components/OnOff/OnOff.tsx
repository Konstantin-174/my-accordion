import React, {useState} from 'react';
import local from "./OnOff.module.scss";

export const OnOff = () => {

    let [on, setOn] = useState(false)

    const onStyle = {
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        backgroundColor: on ? "white" : "red"
    }
    const detectionStyle = {
        backgroundColor: on ? "green" : "red"
    }

    return (
        <section className={local.btnsWrap}>
            <div className={local.btnOn}
                 style={onStyle}
                 onClick={ () => {setOn(true)} }>
                On
            </div>
            <div className={local.btnOff}
                 style={offStyle}
                 onClick={ () => {setOn(false)} }>
                Off
            </div>
            <div className={local.detect}
                 style={detectionStyle}>
            </div>
        </section>
    )
}

