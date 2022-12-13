import React from 'react';
import '../../Global.d';
import styled from './style.module.scss';
import {Ibox} from './interface/index'

    export const MenuPaymentStatus = ({ box }:Ibox) => {
        
        return (
            <div>
                {
                    box.map((item, index) => {
                    return (
                            <div className={styled["fullBox"]} >
                                <p>
                                    {item.title}
                                </p>


                                <div className={styled["icons"]}>
                                    {item.icon}
                                        
                                        <span className={styled["outstanding"]}>{item.selectedValues}</span>
                                </div>
                                <hr/>
                                <div className={styled["value"]}>
                                    
                                    <div className={`${item.amount  ?  styled["amount"] : "" }`}>
                                        {item.value}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    };
export default MenuPaymentStatus;


































        // <div className={styled["fullBox"]}>
        //     <div className={styled["caixaUm"]}>
        //         <div className={styled["boxReceived"]}>
        //             <label>teste</label>
        //         </div>
        //         <div className={styled["icons"]}>
        //             <i className="fa fa-usd-circle"></i>
        //             <i className="fa fa-arrow-up"></i>
        //         </div> 
        //             <span>20</span>  
        //             <hr/>
        //             <p>10</p>
        //     </div>
        
            {/* <div className={styled["openBox"]}>
                <div>Em aberto
                    <i className="fa fa-barcode-read"></i>
                </div>  
                <hr/>
                <p>-R$ 1.000,00</p>
            </div>

            <div className={styled["expiredBox"]}>
                <div> Vencidas
                    <i className="fa fa-exclamation-circle"><span>1</span></i> 
                </div> 
                <hr />
                <p>-R$ 1.000,00</p>
                
            </div>

           <div className={styled["cashierPays"]}> 
                 <div>Total
                    <i className="fa fa-list"><span>1</span></i>
                </div>
                <hr />
                <p>-R$ 1.000,00</p>
           </div> */}

        // </div>
//     )
// };
