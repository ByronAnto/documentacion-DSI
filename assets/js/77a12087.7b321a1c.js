"use strict";(self.webpackChunktest_kfc=self.webpackChunktest_kfc||[]).push([[6429],{86699:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var s=n(85893),r=n(11151);const i={},c="Configuraci\xf3n Transferencia de Venta",d={id:"Maxpoint/Restaurantes/Transferencias/Configuraci\xf3n Transferencia de Venta/Configuraci\xf3n Transferencia de Venta",title:"Configuraci\xf3n Transferencia de Venta",description:"1 ANTECEDENTES",source:"@site/docs/Maxpoint/Restaurantes/Transferencias/Configuraci\xf3n Transferencia de Venta/Configuraci\xf3n Transferencia de Venta.md",sourceDirName:"Maxpoint/Restaurantes/Transferencias/Configuraci\xf3n Transferencia de Venta",slug:"/Maxpoint/Restaurantes/Transferencias/Configuraci\xf3n Transferencia de Venta/",permalink:"/documentacion-DSI/docs/Maxpoint/Restaurantes/Transferencias/Configuraci\xf3n Transferencia de Venta/",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Maxpoint/Restaurantes/Transferencias/Configuraci\xf3n Transferencia de Venta/Configuraci\xf3n Transferencia de Venta.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Transferencia",permalink:"/documentacion-DSI/docs/category/transferencia"},next:{title:"Manual - Configuraci\xf3n Transferencia de Venta Helader\xedas",permalink:"/documentacion-DSI/docs/Maxpoint/Restaurantes/Transferencias/Manual - Configuraci\xf3n Transferencia de Venta Helader\xedas/"}},l={},o=[{value:"1 ANTECEDENTES",id:"1-antecedentes",level:2},{value:"2 OBJETIVO GENERAL",id:"2-objetivo-general",level:2},{value:"2.1Objetivos espec\xedficos",id:"21objetivos-espec\xedficos",level:3},{value:"3 POL\xcdTICAS DE CONFIGURACI\xd3N",id:"3-pol\xedticas-de-configuraci\xf3n",level:2},{value:"3.1 Datos Generales",id:"31-datos-generales",level:3},{value:"3.2 Pantalla de Pol\xedticas",id:"32-pantalla-de-pol\xedticas",level:3},{value:"3.3 Cadena",id:"33-cadena",level:3},{value:"3.3.1 Colecci\xf3n Cadena",id:"331-colecci\xf3n-cadena",level:3},{value:"3.3.2 Par\xe1metro de Colecci\xf3n",id:"332-par\xe1metro-de-colecci\xf3n",level:3},{value:"3.4 Formas de Pago",id:"34-formas-de-pago",level:3},{value:"3.4.1 Colecci\xf3n Formas de Pago",id:"341-colecci\xf3n-formas-de-pago",level:3},{value:"3.4.2 Par\xe1metro Formas de Pago",id:"342-par\xe1metro-formas-de-pago",level:3},{value:"3.5 Cadena Colecci\xf3n de Datos",id:"35-cadena-colecci\xf3n-de-datos",level:3},{value:"3.5.1 Configuraci\xf3n Origen",id:"351-configuraci\xf3n-origen",level:3},{value:"3.5.2 Configuraci\xf3n Destino",id:"352-configuraci\xf3n-destino",level:3},{value:"3.6 Formas de Pago Colecci\xf3n de Datos",id:"36-formas-de-pago-colecci\xf3n-de-datos",level:3},{value:"4 REPLICAR",id:"4-replicar",level:2}];function t(e){const a={h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"configuraci\xf3n-transferencia-de-venta",children:"Configuraci\xf3n Transferencia de Venta"}),"\n",(0,s.jsx)(a.h2,{id:"1-antecedentes",children:"1 ANTECEDENTES"}),"\n",(0,s.jsx)(a.p,{children:"Actualmente en el sistema MaxPoint punto de venta, existe la opci\xf3n de realizar\r\ntransferencia de venta \xfanicamente en locales KFC que tengan HELADER\xcdAS; ahora\r\ntambi\xe9n se desea realiza la transferencia entre marcas como es el caso de BASKIN\r\nROBBINS y CINNABON."}),"\n",(0,s.jsx)(a.h2,{id:"2-objetivo-general",children:"2 OBJETIVO GENERAL"}),"\n",(0,s.jsx)(a.p,{children:"Generar transferencia de venta entre marcas."}),"\n",(0,s.jsx)(a.h3,{id:"21objetivos-espec\xedficos",children:"2.1Objetivos espec\xedficos"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Crear pol\xedticas de configuraci\xf3n para realizar la transferencia de venta."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Enviar por transferencia el desglose de la venta (bruta, neta, cero e IVA)."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Generar interface de venta."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h2,{id:"3-pol\xedticas-de-configuraci\xf3n",children:"3 POL\xcdTICAS DE CONFIGURACI\xd3N"}),"\n",(0,s.jsx)(a.h3,{id:"31-datos-generales",children:"3.1 Datos Generales"}),"\n",(0,s.jsx)(a.p,{children:"En este manual se detalla c\xf3mo realizar la configuraci\xf3n de pol\xedticas a nivel de cadena y\r\nformas de pago, que permitir\xe1n realizar la transferencia de venta entre marcas.\r\nAntes de iniciar la configuraci\xf3n se describen los datos importantes que sebe tener en\r\ncuenta:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Origen, se denomina al restaurante o cadena que env\xeda la transferencia de venta."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Destino, se denomina al restaurante o cadena que recibe la transferencia de venta."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"Todas las pol\xedticas descritas en este manual, deben ser creadas en el origen y\r\ndestino."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"La descripci\xf3n de la forma de pago establecida para transferencia de venta debe ser\r\nigual en el origen y destino."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"El tipo de la forma de pago establecida para transferencia de venta debe ser\r\nEfectivo."}),"\n"]}),"\n",(0,s.jsxs)(a.li,{children:["\n",(0,s.jsx)(a.p,{children:"La forma de pago no ser\xe1 visible en el punto de venta."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"32-pantalla-de-pol\xedticas",children:"3.2 Pantalla de Pol\xedticas"}),"\n",(0,s.jsx)(a.p,{children:"Ingresar al sistema MP backoffice con credenciales de administrador sistemas y seleccionar\r\nla cadena a la cual se realizar\xe1 las configuraciones."}),"\n",(0,s.jsxs)(a.p,{children:["En el men\xfa que se encuentra en la parte izquierda no dirigimos a la opci\xf3n\r\n",(0,s.jsx)(a.strong,{children:"SEGURIDADES"})," y seleccionamos ",(0,s.jsx)(a.strong,{children:"POL\xcdTICAS"}),", seguidamente presionamos sobre el\r\nbot\xf3n ",(0,s.jsx)(a.strong,{children:"Ir a Administraci\xf3n Pol\xedticas"})," en el cual abrir\xe1 una nueva pesta\xf1a en el navegador."]}),"\n",(0,s.jsxs)("font",{color:"yellow",children:[(0,s.jsx)(a.strong,{children:"Nota:"})," Antes de crear las pol\xedticas de configuraci\xf3n debemos verificar que dichas\r\ncolecciones no se encuentren creadas, de ser el caso validar que cada colecci\xf3n contenga\r\nlos par\xe1metros establecidos en este manual."]}),"\n",(0,s.jsx)(a.h3,{id:"33-cadena",children:"3.3 Cadena"}),"\n",(0,s.jsx)(a.h3,{id:"331-colecci\xf3n-cadena",children:"3.3.1 Colecci\xf3n Cadena"}),"\n",(0,s.jsx)(a.p,{children:"Tabla 1. Datos Colecci\xf3n Cadena"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"N\xb0"}),(0,s.jsx)(a.th,{children:"Colecci\xf3n"}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"1"}),(0,s.jsx)(a.td,{children:"TIPO DE TRANSFERENCIA"}),(0,s.jsx)(a.td,{children:"Configuraci\xf3n que permite establecer el tipo de transferencia de venta que aplicar\xe1 una cadena, por ejemplo para KFC y HELADERIA ser\xe1 en efectivo, mientras que BASKIN ROBBINS y CINNABON ser\xe1 por forma de pago."})]})})]}),"\n",(0,s.jsxs)(a.p,{children:["En la opci\xf3n ",(0,s.jsx)(a.strong,{children:"Cadena"})," presionar sobre el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Nueva Colecci\xf3n"}),", se abrir\xe1 una modal para\r\nsu creaci\xf3n ingresando los siguientes datos:"]}),"\n",(0,s.jsxs)("font",{color:"yellow",children:[(0,s.jsx)(a.strong,{children:"Nota:"})," NO puede contener espacios en blanco al inicio y final del nombre de la colecci\xf3n;\r\ndebe ser escrita tal y como se especifica en la tabla 1. "]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Colecci\xf3n:"})," Nombre de la colecci\xf3n que se especifica en la tabla 1."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"M\xf3dulo:"})," No aplica."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Observaciones:"})," Una descripci\xf3n de la funci\xf3n que realizara dicha colecci\xf3n."]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez que se haya ingresado y seleccionado la informaci\xf3n establecida procedemos a\r\n",(0,s.jsx)(a.strong,{children:"Guardar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG1",src:n(76474).Z+"",width:"779",height:"663"})}),"\n",(0,s.jsx)(a.h3,{id:"332-par\xe1metro-de-colecci\xf3n",children:"3.3.2 Par\xe1metro de Colecci\xf3n"}),"\n",(0,s.jsx)(a.p,{children:"Tabla 2. Datos Par\xe1metros de Colecci\xf3n Cadena"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"N\xb0"}),(0,s.jsx)(a.th,{children:"Colecci\xf3n"}),(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Esp. Valor"}),(0,s.jsx)(a.th,{children:"Obligatorio"}),(0,s.jsx)(a.th,{children:"Tipo Dato"}),(0,s.jsx)(a.th,{children:"Selecci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"1"}),(0,s.jsx)(a.td,{children:"TIPO DE TRANSFERENCIA"}),(0,s.jsx)(a.td,{children:"EN EFECTIVO"}),(0,s.jsx)(a.td,{children:"SI"}),(0,s.jsx)(a.td,{children:"SI"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"2"}),(0,s.jsx)(a.td,{children:"TIPO DE TRANSFERENCIA"}),(0,s.jsx)(a.td,{children:"POR FORMA DE PAGO"}),(0,s.jsx)(a.td,{children:"SI"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{children:"SI"})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"3"}),(0,s.jsx)(a.td,{children:"TIPO DE TRANSFERENCIA"}),(0,s.jsx)(a.td,{children:"APLICA TRANSFERENCIA"}),(0,s.jsx)(a.td,{children:"SI"}),(0,s.jsx)(a.td,{children:"SI"}),(0,s.jsx)(a.td,{}),(0,s.jsx)(a.td,{children:"SI"})]})]})]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez creada la colecci\xf3n se debe proceder a crear los par\xe1metros de configuraci\xf3n y\r\npara ello seleccionamos la colecci\xf3n y presionamos sobre el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Nuevo Par\xe1metro"}),"\r\n(derecha), en la cual se abrir\xe1 una modal para su creaci\xf3n."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG2",src:n(66554).Z+"",width:"1121",height:"191"})}),"\n",(0,s.jsxs)(a.p,{children:["Presionar sobre el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Nuevo Par\xe1metro"}),", se abrir\xe1 una modal para su creaci\xf3n\r\ningresando los siguientes datos:"]}),"\n",(0,s.jsxs)("font",{color:"yellow",children:[(0,s.jsx)(a.strong,{children:"Nota:"})," NO puede contener espacios en blanco al inicio y final del par\xe1metro; deben ser\r\nescritos tal y como se especifica en la tabla 2. "]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Par\xe1metro:"})," Nombre del par\xe1metro que se especifica en la tabla 2."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Tipo de Dato:"})," Se especifica en la tabla 2."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Especifica Valor:"})," Se especifica en la tabla 2"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Obligatorio:"})," Se especifica en la tabla 2"]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez que se haya ingresado y seleccionado la informaci\xf3n establecida procedemos a\r\n",(0,s.jsx)(a.strong,{children:"Guardar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG3",src:n(63174).Z+"",width:"910",height:"479"})}),"\n",(0,s.jsx)(a.p,{children:"Se deben crear todos los par\xe1metros de configuraci\xf3n establecidos en la tabla 2, Una vez\r\ncreado se debe tener lo siguiente:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG4",src:n(82392).Z+"",width:"1069",height:"335"})}),"\n",(0,s.jsx)(a.h3,{id:"34-formas-de-pago",children:"3.4 Formas de Pago"}),"\n",(0,s.jsx)(a.h3,{id:"341-colecci\xf3n-formas-de-pago",children:"3.4.1 Colecci\xf3n Formas de Pago"}),"\n",(0,s.jsx)(a.p,{children:"Tabla 3. Datos Colecci\xf3n Formas de Pago"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"N\xb0"}),(0,s.jsx)(a.th,{children:"Colecci\xf3n"}),(0,s.jsx)(a.th,{children:"Descripci\xf3n"})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"1"}),(0,s.jsx)(a.td,{children:"TIPO DE TRANSFERENCIA"}),(0,s.jsx)(a.td,{children:"Configuraci\xf3n que permite establecer el tipo de transferencia de venta que aplicar\xe1 una cadena, por ejemplo para KFC y HELADERIA ser\xe1 en efectivo, mientras que BASKIN ROBBINS y CINNABON ser\xe1 por forma de pago."})]})})]}),"\n",(0,s.jsx)(a.p,{children:"En la opci\xf3n Formas de Pago presionar sobre el bot\xf3n Nueva Colecci\xf3n, se abrir\xe1 una\r\nmodal para su creaci\xf3n ingresando los siguientes datos:"}),"\n",(0,s.jsx)("font",{color:"yellow",children:"**Nota: NO puede contener espacios en blanco al inicio y final del nombre de la colecci\xf3n;\r\ndebe ser escrita tal y como se especifica en la tabla 3. "}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Colecci\xf3n:"})," Nombre de la colecci\xf3n que se especifica en la tabla 3."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"M\xf3dulo:"})," Forma Pago."]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Observaciones:"})," Una descripci\xf3n de la funci\xf3n que realizara dicha colecci\xf3n."]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez que se haya ingresado y seleccionado la informaci\xf3n establecida procedemos a\r\n",(0,s.jsx)(a.strong,{children:"Guardar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG5",src:n(65477).Z+"",width:"665",height:"605"})}),"\n",(0,s.jsx)(a.h3,{id:"342-par\xe1metro-formas-de-pago",children:"3.4.2 Par\xe1metro Formas de Pago"}),"\n",(0,s.jsx)(a.p,{children:"Tabla 4. Datos Par\xe1metro Formas de Pago"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"N\xb0"}),(0,s.jsx)(a.th,{children:"Colecci\xf3n"}),(0,s.jsx)(a.th,{children:"Par\xe1metro"}),(0,s.jsx)(a.th,{children:"Esp. Valor Obligatorio"}),(0,s.jsx)(a.th,{children:"Tipo Dato"})]})}),(0,s.jsx)(a.tbody,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"1"}),(0,s.jsx)(a.td,{children:"TIPO DE TRANSFERENCIA"}),(0,s.jsx)(a.td,{children:"POR FORMA DE PAGO"}),(0,s.jsx)(a.td,{children:"SI"}),(0,s.jsx)(a.td,{children:"SI"})]})})]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez creada la colecci\xf3n se debe proceder a crear los par\xe1metros de configuraci\xf3n y\r\npara ello seleccionamos la colecci\xf3n y presionamos sobre el bot\xf3n ",(0,s.jsx)(a.strong,{children:"Nuevo Par\xe1metro"}),"\r\n(derecha), en la cual se abrir\xe1 una modal para su creaci\xf3n."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG6",src:n(84114).Z+"",width:"1075",height:"182"})}),"\n",(0,s.jsx)(a.p,{children:"Presionar sobre el bot\xf3n Nuevo Par\xe1metro, se abrir\xe1 una modal para su creaci\xf3n\r\ningresando los siguientes datos:"}),"\n",(0,s.jsxs)("font",{color:"yellow",children:[(0,s.jsx)(a.strong,{children:"Nota:"})," NO puede contener espacios en blanco al inicio y final del par\xe1metro; deben ser\r\nescritos tal y como se especifica en la tabla 4. "]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Par\xe1metro:"})," Nombre del par\xe1metro que se especifica en la tabla 4"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Tipo de Dato:"})," Se especifica en la tabla 4"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Especifica Valor:"})," Se especifica en la tabla 4"]}),"\n",(0,s.jsxs)(a.p,{children:[(0,s.jsx)(a.strong,{children:"Obligatorio:"})," Se especifica en la tabla 4"]}),"\n",(0,s.jsxs)(a.p,{children:["Una vez que se haya ingresado y seleccionado la informaci\xf3n establecida procedemos a\r\n",(0,s.jsx)(a.strong,{children:"Guardar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG7",src:n(13849).Z+"",width:"900",height:"482"})}),"\n",(0,s.jsx)(a.p,{children:"Se deben crear todos los par\xe1metros de configuraci\xf3n establecidos en la tabla 4, Una vez\r\ncreado se debe tener lo siguiente:"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG8",src:n(35670).Z+"",width:"1068",height:"223"})}),"\n",(0,s.jsx)(a.h3,{id:"35-cadena-colecci\xf3n-de-datos",children:"3.5 Cadena Colecci\xf3n de Datos"}),"\n",(0,s.jsxs)(a.p,{children:["En el men\xfa nos dirigimos a ",(0,s.jsx)(a.strong,{children:"CADENA"})," y seleccionamos la opci\xf3n ",(0,s.jsx)(a.strong,{children:"CADENA"}),", en la parte\r\nizquierda se cargar\xe1 una pantalla y seguidamente seleccionamos la pesta\xf1a ",(0,s.jsx)(a.strong,{children:"Pol\xedticas de\r\nconfiguraci\xf3n."})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG9",src:n(95549).Z+"",width:"816",height:"460"})}),"\n",(0,s.jsx)(a.h3,{id:"351-configuraci\xf3n-origen",children:"3.5.1 Configuraci\xf3n Origen"}),"\n",(0,s.jsx)("font",{color:"yellow",children:" Nota: Antes de configurar las pol\xedticas se debe tener el claro qu\xe9 tipo de trasferencia\r\naplicar\xe1 la cadena, por ejemplo, si la transferencia de venta se la realizar\xe1 en efectivo o por\r\notra forma de pago, para este caso la cadena origen Baskin Robbins aplica por forma de\r\npago."}),"\n",(0,s.jsx)(a.p,{children:"Para realizar la configuraci\xf3n se debe presionar sobre el bot\xf3n agregar \u201c+\u201d; el cual abrir\xe1\r\nuna modal, seguidamente buscaremos la colecci\xf3n creada y la seleccionamos."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG10",src:n(12004).Z+"",width:"959",height:"401"})}),"\n",(0,s.jsx)(a.p,{children:"Para habilitar la configuraci\xf3n se debe presionar sobre el bot\xf3n agregar \u201c+\u201d; el cual abrir\xe1\r\nuna modal, seguidamente buscaremos la colecci\xf3n creada y la seleccionamos."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG11",src:n(36988).Z+"",width:"969",height:"388"})}),"\n",(0,s.jsxs)(a.p,{children:["Aqu\xed se debe configurar el ",(0,s.jsx)(a.strong,{children:"tipo de dato Selecci\xf3n a SI"}),", seguidamente presionar ",(0,s.jsx)(a.strong,{children:"Guardar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG12",src:n(87286).Z+"",width:"777",height:"764"})}),"\n",(0,s.jsx)(a.p,{children:"Se debe realizar la misma configuraci\xf3n para la pol\xedtica \u201cAPLICA TRANSFERENCIA\u201d."}),"\n",(0,s.jsx)(a.p,{children:"En el origen se debe de configurar \xfanicamente una de las dos pol\xedticas \u201cEN EFECTIVO\u201d o\r\n\u201cPOR FORMA DE PAGO\u201d dependiendo de la configuraci\xf3n que requiera la cadena.\r\nEn el caso que se haya configurado las dos pol\xedticas, una de ellas debe ser deshabilitada."}),"\n",(0,s.jsx)(a.p,{children:"Una vez configurada la pol\xedtica se debe tener lo siguiente."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG13",src:n(81158).Z+"",width:"1842",height:"438"})}),"\n",(0,s.jsx)(a.h3,{id:"352-configuraci\xf3n-destino",children:"3.5.2 Configuraci\xf3n Destino"}),"\n",(0,s.jsxs)("font",{color:"yellow",children:["  ",(0,s.jsx)(a.strong,{children:"Nota:"})," Antes de configurar las pol\xedticas se debe tener el claro qu\xe9 tipo de trasferencia\r\naplicar\xe1 la cadena, por ejemplo, si la transferencia de venta se la realizar\xe1 en efectivo o por\r\notra forma de pago, para este caso la cadena destino Cinnabon aplica por forma de pago. "]}),"\n",(0,s.jsx)(a.p,{children:"Para realizar la configuraci\xf3n se debe presionar sobre el bot\xf3n agregar \u201c+\u201d; el cual abrir\xe1\r\nuna modal, seguidamente buscaremos la colecci\xf3n creada y la seleccionamos."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG14",src:n(84147).Z+"",width:"1571",height:"689"})}),"\n",(0,s.jsx)(a.p,{children:"Para habilitar la configuraci\xf3n se debe presionar sobre el bot\xf3n agregar \u201c+\u201d; el cual abrir\xe1\r\nuna modal, seguidamente buscaremos la colecci\xf3n creada y la seleccionamos."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG15",src:n(890).Z+"",width:"1122",height:"458"})}),"\n",(0,s.jsxs)(a.p,{children:["Aqu\xed se debe configurar el ",(0,s.jsx)(a.strong,{children:"tipo de dato Selecci\xf3n a SI"}),", seguidamente presionar ",(0,s.jsx)(a.strong,{children:"Guardar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG16",src:n(29660).Z+"",width:"739",height:"790"})}),"\n",(0,s.jsx)(a.p,{children:"Se debe realizar la misma configuraci\xf3n para la pol\xedtica \u201cAPLICA TRANSFERENCIA\u201d."}),"\n",(0,s.jsx)(a.p,{children:"En el destino se debe de configurar \xfanicamente una de las dos pol\xedticas \u201cEN EFECTIVO\u201d o\r\n\u201cPOR FORMA DE PAGO\u201d dependiendo de la configuraci\xf3n que requiera la cadena."}),"\n",(0,s.jsx)(a.p,{children:"En el caso que se haya configurado las dos pol\xedticas, una de ellas debe ser deshabilitada."}),"\n",(0,s.jsx)(a.p,{children:"Una vez configuradas las pol\xedticas se debe tener lo siguiente"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG17",src:n(77100).Z+"",width:"1829",height:"431"})}),"\n",(0,s.jsx)(a.h3,{id:"36-formas-de-pago-colecci\xf3n-de-datos",children:"3.6 Formas de Pago Colecci\xf3n de Datos"}),"\n",(0,s.jsxs)(a.p,{children:["En el men\xfa nos dirigimos a ",(0,s.jsx)(a.strong,{children:"GENERA"}),"L, desplegamos la opci\xf3n ",(0,s.jsx)(a.strong,{children:"FORMAS DE PAGO"})," y\r\nseleccionamos ",(0,s.jsx)(a.strong,{children:"DEFINICI\xd3N"}),", en la parte izquierda se cargar\xe1 una pantalla con el listado\r\nde las formas de pago que actualmente tiene la cadena."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG18",src:n(90509).Z+"",width:"1229",height:"683"})}),"\n",(0,s.jsx)(a.p,{children:"Crear la forma de pago establecida para la transferencia de venta."}),"\n",(0,s.jsx)(a.p,{children:"En este caso los datos son los siguientes:"}),"\n",(0,s.jsx)(a.p,{children:"Tabla 5. Datos Forma de Pago Transferencia"}),"\n",(0,s.jsxs)(a.table,{children:[(0,s.jsx)(a.thead,{children:(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.th,{children:"N\xb0"}),(0,s.jsx)(a.th,{children:"Campo"}),(0,s.jsx)(a.th,{children:"Valor"}),(0,s.jsx)(a.th,{children:"Observaci\xf3n"})]})}),(0,s.jsxs)(a.tbody,{children:[(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"1"}),(0,s.jsx)(a.td,{children:"Descripci\xf3n"}),(0,s.jsx)(a.td,{children:"CINNABON"}),(0,s.jsx)(a.td,{children:"El nombre de la forma de pago depender\xe1 de la cadena y no debe contener espacios en blanco ni caracteres especiales."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"2"}),(0,s.jsx)(a.td,{children:"Tipo Medio de Pago"}),(0,s.jsx)(a.td,{children:"EFECTIVO"}),(0,s.jsx)(a.td,{children:"En transferencia de venta, la forma de pago creada debe ser del tipo Efectivo."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"3"}),(0,s.jsx)(a.td,{children:"Adquiriente"}),(0,s.jsx)(a.td,{children:"Ninguno"}),(0,s.jsx)(a.td,{children:"No aplica ning\xfan tipo adquiriente."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"4"}),(0,s.jsx)(a.td,{children:"C\xf3digo Respuesta DLL Gerente"}),(0,s.jsx)(a.td,{children:"C\xf3digo creado en el SG."}),(0,s.jsx)(a.td,{children:"El c\xf3digo depender\xe1 de la cadena y el nombre con el cual haya sido creada en el SG."})]}),(0,s.jsxs)(a.tr,{children:[(0,s.jsx)(a.td,{children:"5"}),(0,s.jsx)(a.td,{children:"Tipo de Facturaci\xf3n"}),(0,s.jsx)(a.td,{children:"PLAN MARKET"}),(0,s.jsx)(a.td,{children:"En transferencia de venta, toda forma de pago debe ser tipo Plan Market."})]})]})]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG19",src:n(81742).Z+"",width:"1259",height:"894"})}),"\n",(0,s.jsxs)(a.p,{children:["Una vez creada la forma de pago debemos editarla para configurar la pol\xedtica de\r\nconfiguraci\xf3n, con un doble clic se abrir\xe1 una modal y seleccionamos la pesta\xf1a ",(0,s.jsx)(a.strong,{children:"Pol\xedticas de configuraci\xf3n"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG20",src:n(96796).Z+"",width:"1250",height:"687"})}),"\n",(0,s.jsxs)(a.p,{children:["Para habilitar la pol\xedtica se debe presionar sobre el bot\xf3n agregar \u201c+\u201d; el cual abrir\xe1 una\r\nmodal, seguidamente buscaremos la colecci\xf3n creada, la seleccionamos y marcamos el ",(0,s.jsx)(a.strong,{children:"tipo de dato Selecci\xf3n a SI"})," , seguidamente presionar ",(0,s.jsx)(a.strong,{children:"Guardar"}),"."]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG21",src:n(31800).Z+"",width:"633",height:"585"})}),"\n",(0,s.jsx)(a.p,{children:"Una vez configuradas las pol\xedticas se debe tener lo siguiente"}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"IMG22",src:n(92781).Z+"",width:"1257",height:"430"})}),"\n",(0,s.jsxs)("font",{color:"yellow",children:[(0,s.jsx)(a.strong,{children:"Nota:"})," La descripci\xf3n de la forma de pago deber ser id\xe9ntica tanto en el origen como\r\ndestino, tambi\xe9n debe estar configurada la pol\xedtica.\r\nEn el caso que el tipo de transferencia sea en efectivo, esta pol\xedtica no debe ser configurada."]}),"\n",(0,s.jsx)(a.h2,{id:"4-replicar",children:"4 REPLICAR"}),"\n",(0,s.jsx)(a.p,{children:"Como siguiente paso se debe realizar las respectiva replica de todas las configuraciones\r\nhacia la tienda."})]})}function h(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},76474:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR1-d468067a31c5c61d287e113ea4670686.png"},12004:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR10-16dd53d1aef458dddce1678211f35218.png"},36988:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR11-8112bbaf1292b9b0ee4237d45cca89ac.png"},87286:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR12-790861bd8a731d257caeeefd1cbd0f30.png"},81158:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR13-4f5c4ab847c4eea80efe95d55a95233b.png"},84147:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR14-265d34e77cdf58cbafe45011b42e7ac0.png"},890:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR15-ab90ec7994e397e04aad518dca0c0564.png"},29660:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR16-8dd131b9eeebf48d024c1bb76d2ba570.png"},77100:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR17-69db24681e0247c8bcc7e863d54464a6.png"},90509:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR18-9aad2d25fe660a65544b3f52c0e3ed7b.png"},81742:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR19-922ccb3fba359f198d6df819ae866948.png"},66554:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR2-34ed8e2decc58455b12c3e782e697342.png"},96796:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR20-bcf035ad3b595cfd8e0d513725520dd9.png"},31800:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR21-dd90a4af8e7e60b4317cc4ff1f626b0f.png"},92781:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR22-f5c993f155871a99298f15dc170dbfec.png"},63174:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR3-9917ed6523f6182b1f080c394566ffeb.png"},82392:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR4-e43010b956bc897a6a6758a0e82a4e14.png"},65477:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR5-99e6da7e3b1929e5389f3b7f295019b8.png"},84114:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR6-5e555ea482ffb9d200d1315073617556.png"},13849:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR7-0ed21412488396cac258de071f893edb.png"},35670:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR8-327f5c30ee40b63b8ee79040f3db2d1f.png"},95549:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/TR9-eabc6803bb5dd88e3e30cf6d6ca719a1.png"},11151:(e,a,n)=>{n.d(a,{Z:()=>d,a:()=>c});var s=n(67294);const r={},i=s.createContext(r);function c(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);