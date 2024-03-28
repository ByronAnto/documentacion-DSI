"use strict";(self.webpackChunktest_kfc=self.webpackChunktest_kfc||[]).push([[5221],{66795:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var n=a(85893),r=a(11151);const i={},o="Manual de Usuario - Instalaci\xf3n de Reportes KFC",t={id:"Maxpoint/Restaurantes/comida5/c5",title:"Manual de Usuario - Instalaci\xf3n de Reportes KFC",description:"Instalaci\xf3n de Reportes",source:"@site/docs/Maxpoint/Restaurantes/comida5/c5.md",sourceDirName:"Maxpoint/Restaurantes/comida5",slug:"/Maxpoint/Restaurantes/comida5/c5",permalink:"/documentacion-DSI/docs/Maxpoint/Restaurantes/comida5/c5",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Maxpoint/Restaurantes/comida5/c5.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Instalacion de Reportes",permalink:"/documentacion-DSI/docs/category/instalacion-de-reportes"},next:{title:"Kioskos",permalink:"/documentacion-DSI/docs/category/kioskos"}},c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Procedimiento",id:"procedimiento",level:2}];function l(e){const s={h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"manual-de-usuario---instalaci\xf3n-de-reportes-kfc",children:"Manual de Usuario - Instalaci\xf3n de Reportes KFC"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Instalaci\xf3n de Reportes"}),"\r\n",(0,n.jsx)(s.strong,{children:"Desarrollo de Software y Proyectos"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Script para instalaci\xf3n de Reportes en los Servidores KFC"})}),"\n",(0,n.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(s.p,{children:"En este documento se explica el procedimiento necesario para realizar la instalaci\xf3n de los reportes del sistema MAXPOINT en las tiendas  correspondientes al grupo KFC.\r\nLa instalaci\xf3n se realiza ejecutando un script que se encarga de copiar los reportes y datasources desde un servidor  de Reporting Services de origen hacia un servidor de Reporting Services de destino."}),"\n",(0,n.jsx)(s.h2,{id:"procedimiento",children:"Procedimiento"}),"\n",(0,n.jsx)(s.p,{children:"Lo primero que se debe hacer es buscar las direcciones de los endpoints del servicio de Reporting services, mismos que se encuentran en el programa de configuraci\xf3n de Reporting Services."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(18801).Z+"",width:"388",height:"559"})}),"\n",(0,n.jsxs)(s.p,{children:["Una vez abierto el programa presionamos la pesta\xf1a ",(0,n.jsx)(s.strong,{children:"WEB Service URL"}),", se nos mostrar\xe1 la siguiente pantalla:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(43637).Z+"",width:"926",height:"395"})}),"\n",(0,n.jsx)(s.p,{children:"Esta direcci\xf3n es la que vamos a utilizar luego para realizar la migraci\xf3n, y debemos buscarla tanto en el servidor de origen de los reportes como en el servidor de destino."}),"\n",(0,n.jsx)(s.p,{children:"Esta URL var\xeda  en cada local"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(54259).Z+"",width:"440",height:"54"})}),"\n",(0,n.jsx)(s.p,{children:"Una vez que tenemos ambas direcciones debemos abrir en el servidor de origen la carpeta que\r\ncontiene los scripts."}),"\n",(0,n.jsx)(s.p,{children:"Dentro de la misma se encuentra el archivo migrar.bat, mismo que puede ser editado con\r\ncualquier editor de texto plano, en este caso Notepad++"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(48665).Z+"",width:"381",height:"156"})}),"\n",(0,n.jsx)(s.p,{children:"El archivo es una \xfanica l\xednea de c\xf3digo con la siguiente estructura:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(82779).Z+"",width:"775",height:"383"})}),"\n",(0,n.jsx)(s.p,{children:"Guardamos el archivo y lo siguiente es abrir una consola de comandos en la carpeta de scripts. Luego ejecutamos el archivo migrar.bat"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(57506).Z+"",width:"566",height:"280"})}),"\n",(0,n.jsx)("font",{color:"RED",children:"Nota: en este caso, nuestra carpeta que contiene los scripts se encuentra en el escritorio, por este motivo como podemos observar en la direcci\xf3n.  "}),"\n",(0,n.jsx)(s.p,{children:"El Script se encargar\xe1 de realizar una copia exacta en el servidor de destino tanto de los\r\nReportes como de los Data Sources instalada en el servidor de origen."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(22886).Z+"",width:"673",height:"338"})}),"\n",(0,n.jsx)(s.p,{children:"Para verificar que se han migrado los reportes podemos entrar a la pantalla de administraci\xf3n\r\nde Reporting Services en el servidor de destino. All\xed encontraremos Todo ya correctamente\r\nmigrado:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{src:a(63046).Z+"",width:"638",height:"174"}),"\r\n",(0,n.jsx)(s.img,{src:a(54958).Z+"",width:"1300",height:"573"})]}),"\n",(0,n.jsx)(s.p,{children:"El siguiente paso a seguir es el procedimiento de reconfiguraci\xf3n de los datos de conexi\xf3n del o (los) Data Sources que se crearon, ya que al migrarse se pasan con los datos del servidor de origen."}),"\n",(0,n.jsx)(s.p,{children:"Para ello ingresamos a cada uno de los Data Sources haciendo click sobre el mismo."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(78230).Z+"",width:"423",height:"171"})}),"\n",(0,n.jsx)(s.p,{children:"Colocamos los datos de conexi\xf3n correspondientes al local que estamos configurando"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:a(51172).Z+"",width:"721",height:"686"})}),"\n",(0,n.jsx)("font",{color:"RED",children:"Nota: La clave para el usuario rptuser debe ser consultada al administrador al momento de realizar la migraci\xf3n.   "}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Resoluci\xf3n de Problemas:"})}),"\n",(0,n.jsx)(s.p,{children:"En general los problemas con este procedimiento suceden por 2 razones:"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.img,{src:a(96914).Z+"",width:"838",height:"311"}),"\r\n",(0,n.jsx)(s.img,{src:a(76511).Z+"",width:"713",height:"1196"})]}),"\n",(0,n.jsx)("font",{color:"RED",children:" Como \xfaltimo paso y por seguridad se deber\xe1 realizar una prueba de los reportes, una vez realizada las configuraciones anteriormente dichas. Para que de este modo no evitar cualquier tipo de error. "})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},18801:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/1-19f772e6e4840963f09feba769da6a54.png"},78230:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/10-c500fd81b34022421de9e84004d04a3d.png"},51172:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/11-71561e462ccafb6b73cf86b98ef03053.png"},96914:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/12-e7d94d0d085079aa38a935c4d2b5a444.png"},76511:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/13-76fcf4c95b36456a6380fc63fe67fa64.png"},43637:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/2-54a470ffb777b95a4d4b3bbd589f642c.png"},54259:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/3-a0895dc0ba9b63d9e5be561355d21f05.png"},48665:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/4-dcdd773a6a907ec930ea62a7b905fa65.png"},82779:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/5-3c8b8d5e4528d9f57651abc5283069d4.png"},57506:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/6-3a6463a5c869714441c74242da4b2e5d.png"},22886:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/7-759a3128722fb256a5d016e0b193cb1d.png"},63046:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/8-165d44b2bc52fa54153467aa4ec84cd0.png"},54958:(e,s,a)=>{a.d(s,{Z:()=>n});const n=a.p+"assets/images/9-58c16d0688efae05aa9c6dcf662c6913.png"},11151:(e,s,a)=>{a.d(s,{Z:()=>t,a:()=>o});var n=a(67294);const r={},i=n.createContext(r);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);