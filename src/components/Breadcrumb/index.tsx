import { type } from 'os';
import React from 'react';

import '../../Global.d';
import styled from './style.module.scss';


type Breadcrumb = {
    road: string[],
};

export const Breadcrumb = (props:Breadcrumb) => {
    return (
        <>
            <p className={styled["Breadcrumb"]}>
                {
                    props.road.map((value, index) => {
                    return (
                            <>
                                { index !== 0 && <i className="fa fa-chevron-right Breadcrumb__icon" ></i> }
                                { value }
                            </>
                        )
                    })
                }
            </p>
        </>
    )
};

