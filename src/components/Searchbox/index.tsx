import { type } from 'os';
import React, {useState} from 'react';

import '../../Global.d';
import styled from './style.module.scss';
import {ISearchbox} from './interface/index';



export const Searchbox =(props:ISearchbox) => {
    return (
        <div className={styled["Searchbox"]}><input type="text" placeholder='Pesquisar'/>
        <i className="fa fa-magnifying-glass"></i>
        </div>
    )
}