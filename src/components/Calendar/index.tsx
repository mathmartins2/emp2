import { type } from 'os';
import React from 'react';

import '../../Global.d';
import styled from './style.module.scss';

type CurrentData = {
    day: string,
    month: string,
    year: string,
    fullDate: string[],
};

export const CalendarFilter = (props:CurrentData) =>{
    return (
            <div>
                <button className={styled["Dropdown"]}>
                    {<i className="fa fa-calendar-days" ></i> } 
                </button>

                <div className='submenu'>
                    <nav>
                        <ul>
                            <li >Hoje </li>
                            <li>Esta semana</li>
                            <li>Este Mês</li>
                            <li>Ultimos 30 dias</li>
                            <li>Mostrar todos</li>
                            <li>Escolha o período</li>
                        </ul>
                    </nav> 
                </div>            
            </div>
    )
};