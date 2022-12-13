import { ReactElement } from "react";

export interface IColumn {
    title: string,
    size: string,
    center?: boolean;
    textAline?: boolean;
}

export interface IBoxWithCheck{
    config: IColumn[],
    data: string[][] | React.ReactNode [][];
    style?: string
    
}
