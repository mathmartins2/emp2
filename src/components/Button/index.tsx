import { type } from 'os';
import React, {useState} from 'react';

import '../../Global.d';
import styled from './style.module.scss';

import {IButtonDropDown} from './interface';

export const ButtonDropDown = ({options}: IButtonDropDown) =>  {
    const [openBox, setOpenBox] = useState(false);

    return(

        <div className={styled["buttonDropDown"]} >
            
            <div className={styled["buttonDropDown__button"]} onClick={() => {setOpenBox((oldState) => !oldState)}}>
                <label className={styled["buttonDropDown__title"]}>Novo recebimento</label>
                <i className={`fa fa-chevron-down ${openBox ? styled["open"] : ""}`}></i>
            </div>
            <div className={`${styled["buttonDropDown__dropdown"]} ${openBox ? styled["buttonDropDown__dropdown--open"] : ""}`}>
                <ul>
                {           
                    options.map((value, index) => {
                        return (
                            <li className={styled["buttonDropDown__option"]} > {value}</li>
                        )
                    })
                }   
                </ul>
            </div>
           
            <div className={`${styled["buttonDropDown__backDrop"]} ${openBox ? styled["buttonDropDown__backDrop--visible"] : ""}`} onClick={() => setOpenBox(false)}></div>
        </div>
    
    )
};

{/* // })}<ul>
                //     <li className={styled["buttonDropDown__option"]}>{props.option1}</li>
                //     <li className={styled["buttonDropDown__option"]}>{props.option2}</li>
                //     <li className={styled["buttonDropDown__option"]}>{props.option3}</li>
                    
                // </ul> */}