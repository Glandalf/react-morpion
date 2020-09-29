import React, {useState} from "react";

export default function Cell() {
    let [value, setValue] = useState('');

    return (
        <td onClick={() => {
            if (value === '') {
                setValue(Math.random() > 0.5? 'x': 'o')
            }
        }}>{ value }</td>
    )
}