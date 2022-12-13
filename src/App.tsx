
import React from "react";
import "./modules/common/assets/css/style.css";
import "./modules/common/assets/fontawesome/css/all.css";
import MenuPaymentStatus from './components/MenuPaymentStatus';
import styled from './components/MenuPaymentStatus/style.module.scss';
import {ButtonDropDown} from './components/Button/index';
import {Breadcrumb} from  './components/Breadcrumb/index';
import {SelectWithIcon} from './components/SelectWithIcon';
import sicoob from './components/SelectWithIcon/assets/sicoob.png';
import bradesco from './modules/common/assets/img/user-default.svg';
import {BoxWithCheck} from './components/BoxWithCheck';
import {IColumn} from './components/BoxWithCheck/interface';


const configGrid: IColumn[] = [
  {title: "Emissão", size: "10%"},
  {title: "Fornecedor", size: "30%"},
  {title: "Categoria", size: "20%"},
  {title: "Valor", size: "20%"},
  {title: "Situação", size: "20%", center: true, textAline: true}
]







function App(): JSX.Element {
const iconBank = <img src={sicoob}></img>
const iconBank2  = <img src={bradesco}></img>

  const icon = 
  <> 
    <i className="fa fa-usd-circle"></i>
    <div className={styled["icon--secondary"]}>
      <i className="fa fa-arrow-up" style={{color: "var(--color-green-main)", fontSize: "12px"}}></i>   
    </div> 
  </> 
  const icon2 = <i className="fa fa-circle-xmark"></i>
  const icon3 = <i className="fa fa-barcode-read"></i>
  const icon4 = <i className="fa fa-exclamation-circle"></i>
  const icon5 = <i className="fa fa-list"></i>

  return (
    <div className="App">
      <div>
        <BoxWithCheck config={configGrid} data={[["teste" , "teste1", "teste2", "teste3", icon ], ["teste" , "teste1", "teste2", "teste3", icon2],  ["teste" , "teste1", "teste2", "teste3", icon3] ]} />
      </div>
    </div>
  );
  
}

export default App;

//<Searchbox options=''/>
//<Breadcrumb setor=""  inicio=""  funcionalidade="" road={["Inicio", "Financeiro", "Contas a receber"]} />
//<ButtonDropDown  options={["Novo recebimento", "Novo pagamento", "Nova transferência"]}/>
//<Bankaccount options={["Banco Sicoob","Banco Bradesco"]} />



 {/* <Breadcrumb road={["Inicio", "Financeiro", "Contas a receber"]} /> */}
      
      {/* <MenuPaymentStatus box={
        [
          {icon: icon, title: 'Pagas', value: 'R$0,00', selectedValues: 0},
          {icon: icon3, title: 'Em aberto', value: 'R$0,00', selectedValues: 0},
          {icon: icon4, title: 'Vencidas', value: 'R$0,00', selectedValues: 0},
          {icon: icon5, title: 'Total', value: 'R$0,00', amount: true, selectedValues: 0},
          
        ]
      } /> */}
      
      {/* <ButtonDropDown  options={["Novo recebimento", "Novo pagamento", "Nova transferência"]}/> */}
      
      {/* <SelectWithIcon inputlabel="Contas a pagar"  options={[
        { title: "Sicoob", icon: iconBank},
        { title: "Bradesco", icon: iconBank2}
      ]} /> */}