import React, { Attributes } from "react";

export interface Ibox {
   box: {
      icon: React.ReactNode,
      value: string,
      title: string,
      amount?: boolean
      selectedValues:number;
   }[]
};