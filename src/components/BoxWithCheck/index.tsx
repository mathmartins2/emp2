import React, { useDebugValue } from 'react';
import '../../Global.d';
import styled from './style.module.scss';
import {IBoxWithCheck} from './interface';
import { text } from 'stream/consumers';



export const BoxWithCheck = ({config, data}: IBoxWithCheck) => {
    return (
    <div className={styled["full"]}>
        <div className={styled["titles"]}>
            <div className={styled["titleListe"]}>
                {
                    config.map((column, index) => {
                        return (
                            <> 
                                <div className={styled["titleStyle"]} style={{width: column.size, textAlign: 'center'}}>
                                    <span>{column.title}</span>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div  className={styled["listConteudo"]}>
                {
                    data.map((line) => {
                        return (
                            <div className={styled[""]}  style={{display:'flex'}}>
                                {
                                    line.map((value, index) => {
                                        return (
                                            <div style={{width: config[index].size, display:'flex', justifyContent: config[index].center ? 'center' : 'flex-start'}}>
                                                {value} 
                                            </div>
                                        )

                                    })
                                } 
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}