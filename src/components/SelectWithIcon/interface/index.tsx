import { ReactElement } from "react";

export interface IOption{
    title: string,
    icon: ReactElement;
    
}
export interface ISelectWithIcon {
    inputlabel: string,
    options: IOption[]
}








