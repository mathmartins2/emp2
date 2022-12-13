import React, {useState} from 'react';
import '../../Global.d';
import styled from './style.module.scss';
import { ISelectWithIcon, IOption} from './interface/index';



export const SelectWithIcon = ({options, inputlabel}: ISelectWithIcon ) =>  {
    const [openBox, setOpenBox] = useState(false);
    const [valueOption, setValueOption] = useState<IOption>();

return(

    <div className={styled["select"]}>
       <div className={styled["text-area"]}>{inputlabel}</div>
        <div className={styled["selectDropDown__button"]} onClick={() => {setOpenBox((oldState) => !oldState)}}> 
            <div className={styled["icon"]}>{valueOption?.icon}</div>
            <div className={styled["title"]}> {valueOption?.title}</div>
            <i className={`fa fa-chevron-down ${openBox ? styled["open"] : ""}`}></i>
        </div>

        <div className={`${styled["optionDropDown__dropdown"]} ${openBox ? styled["optionDropDown__dropdown--open"] : ""}`}>
            <ul>
            {           
                options.map((option) => {
                    return (
                        <li className={styled["optionDropDown__option"]} onClick={() => {setValueOption(option)}}>
                            <div className={styled["icoBank"]} >{option.icon}</div>
                            <div className={styled["optionDropDown__option"]}>{option.title}</div>
                        </li>
                )})
            }   
            </ul>
        </div>
        
        <div className={`${styled["buttonDropDown__backDrop"]} ${openBox ? styled["buttonDropDown__backDrop--visible"] : ""}`} onClick={() => setOpenBox(false)}></div>
    </div>


)
}



