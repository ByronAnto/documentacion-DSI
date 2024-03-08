# Kiosko Configuración Políticas 
## CONFIGURACIÓN DE POLÍTICAS KIOSKO
## 1. INTRODUCCION

KIOSKO API

Introducción 
En este manual se detalla las configuraciones de las políticas que se deben configurar en el BackOffice de Max-Point para el correcto funcionamiento de Kiosko. 

A continuación, un listado de la administración de políticos a nivel de Cadena, Restaurante y 
Estación. 

![Ejemplo de Kiosko Admistracion Politicas](<Kiosko Admistracion Politicas.png>)

* POLÍTICAS EN LA OPCIÓN DE **CADENA**

|  |  |  |  |  |  |
|---|---|---|---|---|---|
| COLECCIÓN | PARAMETRO | Tipo | Esp.Valor |Obligatorio |  
| CONFIGURACION KIOSKO | IP DATAFAST | Carácter | &#x2705; |  &#x2705;|
| CONFIGURACION KIOSKO  | PUERTO TCP DATAFAST | Carácter | &#x2705; |   |
| CONFIGURACION KIOSKO | TIMEOUT PINPAD | Carácter | &#x2705;|  |
---

| COLECCIÓN | PARAMETRO | Tipo | Esp. Valor | Obligatorio |
|---|---|---|---|---|
| WS SERVIDOR | DATAFAST KIOSKO PRODUCCION | Carácter | &#x2705; |
---

| COLECCIÓN | PARAMETRO | Tipo | Esp. Valor |Obligatorio | 
|---|---|---|---|---|
| WS RUTA SERVICIO| SOA CLIENTES BUSCAR | Carácter | &#x2705; | &#x2705; | 
---

* POLÍTICAS EN LA OPCIÓN DE **RESTAURANTE**

| COLECCIÓN  | PARAMETRO | Tipo | Esp. Valor | Obligatorio |  |
|---|---|---|---|---|---|
| CONFIGURACION KIOSKO | ACTIVO | Carácter |  |  |  
| CONFIGURACION KIOSKO | GATEWAY | Carácter | &#x2705; |  |  
| CONFIGURACION KIOSKO | MASCARA DE RED | Carácter | &#x2705; |  | 
| CONFIGURACION KIOSKO | MID | Carácter |  
---


| COLECCIÓN | PARAMETRO | Tipo | Esp. Valor |Obligatorio | 
|---|---|---|---|---|
| SITIO MAXPOINT|  NOMBRE | Carácter | &#x2705; | &#x2705; | 
---

| COLECCIÓN  | PARAMETRO | Tipo | Esp. Valor | Obligatorio |  |
|---|---|---|---|---|---|
| CONFIGURACION TURNERO | ACTIVO | Carácter | &#x2705; | &#x2705; |  
| CONFIGURACION TURNERO | SERVIDOR SOCKETS | Carácter | &#x2705; | &#x2705; | 
---

| COLECCIÓN | PARAMETRO | Tipo | Esp. Valor |Obligatorio | 
|---|---|---|---|---|
| IMPRIMIR ORDEN DE PEDIDO |  ACTIVAR QR? | Selección | &#x2705; | &#x2705; | 
---

* POLÍTICAS EN LA OPCIÓN DE **ESTACIÓN**

| COLECCIÓN  | PARAMETRO | Tipo | Esp. Valor | Obligatorio |  |
|---|---|---|---|---|---|
| CONFIGURACION KIOSKO | IP PINPAD |Carácter | &#x2705; | &#x2705; |  
| CONFIGURACION KIOSKO | KIOSKO CAJERO | Carácter | &#x2705; | &#x2705; |  
| CONFIGURACION KIOSKO | PUERTO TCP PINPAD| Carácter | &#x2705; |  |  |
| CONFIGURACION KIOSKO | TID | Carácter | &#x2705; |  |
---

*  CONFIGURACION EN SISTEMA GERENTE

Para subir las transacciones de tarjetas de kiosko en el Sistema Gerente, se debe insertar
los siguientes parámetros en la tabla KIOSKOWS en la base de datos GerenteNacional.

| TABLA | PARAMETRO | 
|---|---|
| KioskoWs | Código Restaurante |  
| KioskoWs  | IP del servidor del local | 
| KioskoWs  |Usuario general para los reportes kiosko.  reporteskiosko@kfc.com |  
|  KioskoWs  | Clave general para los reportes:  r3porT3s.KFC'| 
| KioskoWs  | Puerto General para el api KIOSKO:  890|
---

![Ejemplo de Kiosko KioskoWs](<Kiosko KioskoWs.png>)

## Administración de Políticas
## 2. POLÍTICAS EN CADENA
1. Para ingresar al módulo de Políticas de Configuración de Cadena, debe dar clic en la opción “Cadena” en el módulo de “Cadena”.

![Ejemplo de Kiosko Clic Cadena](<Kiosko Clic Cadena.png>)

A continuación, se despliega la siguiente pantalla con dos pestanas: “Transferencia de venta” y “Políticas de configuración”.

![Ejemplo de Kiosko Transferencia PolIticas](<Kiosko Transferencia PolIticas.png>)

2. Dar clic sobre la pestaña de “Políticas de configuración” y en la parte superior derecha, seleccionar el icono **más** para configurar las siguientes colecciones:

| COLECCIÓN |  |  |  |  |  |
|---|---|---|---|---|---|
| A. |   CONFIGURACIÓN KIOSKO |  
| B. |WS SERVIDOR |  
| C. |WS RUTA SERVIDOR |  
---

### A. COLECCIÓN ”CONFIGURACIÓN KIOSKO”

**a. Configuracion de los Datos**

1. PUERTO TCP DATAFAST

![Ejemplo de Kiosko PUERTO TCP DATAFAST](<Kiosko PUERTO TCP DATAFAST.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar. 

| Campo | valor | Descripcion | 
|---|---|---|
| Varchar | 3000 | Puerto tcp del pinpad |  
---

2. TIMEOUT PINPAD

![Ejemplo de Kiosko TIMEOUT PINPAD](<Kiosko TIMEOUT PINPAD.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar. 

| Campo | valor | Descripcion | 
|---|---|---|
| Varchar | 3000 | Timeout del pinpad. |  
---
<font color="yellow">Nota : Configuración proporcionado por datafast</font>

### B. COLECCIÓN DE WS SERVIDOR

**a. Configuracion de los Datos**

1. DATAFAST KIOSKO PRODUCCION

![Ejemplo de Kiosko DATAFAST KIOSKO PRODUCCION](<Kiosko DATAFAST KIOSKO PRODUCCION.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Guardar. 

| Campo | valor | Descripcion |  
|---|---|---|
| Varchar | 192.168.61.250 | Ip del servidor de datafast en produccion |  
---

<font color="yellow">Nota : Configuración proporcionado por datafast</font>

### C. COLECCIÓN DE WS RUTA SERVICIO

**a. Configuracion de los Datos**

1. SOA CLIENTES BUSCAR

![Ejemplo de Kiosko SOA CLIENTES BUSCAR](<Kiosko SOA CLIENTES BUSCAR.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar.

| Campo | valor | Descripcion | 
|---|---|---|
| Varchar|  /MasterData.Clientes.ServiciosWeb/webresources/clientes/buscarClientePorIdentificacion/?identificacion= | Permite buscar clientes en master data en tal caso que no exista en el local. | 
| 
---

## 3. POLÍTICAS DE RESTAURANTE 

1. Para ingresar al módulo de Políticas de Configuración de Restaurante, debe dar clic en la opción “Restaurante” en el módulo de “Restaurante”

![Ejemplo de Kiosko Restaurante Restaurante](<Kiosko Restaurante Restaurante.png>)

A continuación, se despliega una tabla con todos los restaurantes para la cadena seleccionada. 

![Ejemplo de Kiosko Desplegar Tabla Restaurante](<Kiosko Desplegar Tabla Restaurante.png>)

2. Dar click sobre el restaurante deseado y una pantalla emergenete se deplguea. En la parte superior derecha de la pantalla emergente

![Ejemplo de Kiosko Click Sobre Restaurante Deseado](<Kiosko Click Sobre Restaurante Deseado.png>)

seleccionar la pestaña “Políticas de configuración” y Saleccionar el icono para configurar las siguientes políticas

| COLECCIÓN |  |  |  |  |  |
|---|---|---|---|---|---|
| A. | CONFIGURACIÓN KIOSKO | 
| B. | SITIO MAXPOINT | 
---

### A. COLECCIÓN DE CONFIGURACIÓN KIOSKO

**a. Creación de los Datos**

1. ACTIVO

![Ejemplo de Kiosko ACTIVO](<Kiosko ACTIVO.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar.

| Campo | valor | Descripcion |  
|---|---|---|
| Seleccion | SI | Habilitar la funcion de koiosko. |
---

2. MID

![Ejemplo de Kiosko MID](<Kiosko MID.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar.

| Campo | valor | Descripcion | 
|---|---|---|
| Varchar | 2000026002 | Codigo de comercio KFC del local. | 
---

<font color="yellow">Nota : Solicitar el codigo de comercio.</font>

3. GATEWAY

![Ejemplo de Kiosko GATEWAY](<Kiosko GATEWAY.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar.

| Campo | valor | Descripcion |
|---|---|---|
| Varchar | 192.XXX.XXX.XXX | Configuracion de red del local | 
---

<font color="yellow">Nota : Solicitar a Infraestructura esta información</font>

4. MASCARA DE RED

![Ejemplo de Kiosko MASCARA DE RED](<Kiosko MASCARA DE RED.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar. 

| Campo | valor | Descripcion | 
|---|---|---|
| Varchar | 255.255.255.XXX | Configuracion de red del local. |  
---

Nota : Solicitar a Infraestructura esta información

### B. COLECCIÓN DE SITIO MAXPOINT

**a. Creación de los Datos**

1. NOMBRE

![Ejemplo de Kiosko NOMBRE](<Kiosko NOMBRE.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Guardar.

| Campo | valor | Descripcion |  
|---|---|---|
| varchar |POS |El nombre de sitio de maxpoint para la URL de la impresión . | 
---

## 4. POLÍTICAS DE ESTACION 

**A. COLECCIÓN DE CONFIGURACIÓN KIOSKO**

1. Para ingresar al módulo de Políticas de Configuración de Restaurante, debe dar clic en la opción “Restaurante” en el módulo de “ESTACION”

![Ejemplo de Kiosko Clic Restaurante ESTACION](<Kiosko Clic Restaurante ESTACION.png>)

1. Dar click sobre el restaurante deseado y una tabla con las estaciones configuradas se desplegue .

![Ejemplo de Kiosko Restaurante Deseado Desplegue](<Kiosko Restaurante Deseado Desplegue.png>)

2. Dar click sobre la estación deseado y la siguiente pantalla emergente se desplegará.

![Ejemplo de Kiosko Click Sobre Estacion Deseado Desplegar](<Kiosko Click Sobre Estacion Deseado Desplegar.png>)

En la parte superior derecha de la pantalla emergente, seleccionar la pestaña “Políticas de configuración” y seleccionar el icono para configurar las siguientes políticas.

| COLECCIÓN |  |  |  |  |  |
|---|---|---|---|---|---|
| A. | CONFIGURACIÓN KIOSKO | 
| B. | SITIO MAXPOINT | 
---

### A. COLECCIÓN DE CONFIGURACIÓN KIOSKO

**a. Creación de los Datos**

1. IP PINPAD

![Ejemplo de Kiosko IP PINPAD](<Kiosko IP PINPAD.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar. 

| Campo | valor | Descripcion |  
|---|---|---|
| Caracter | 192.XXX.XXX.XXX | IP del Pinpad | 
---

<font color="yellow">Nota : Solicitar a Infraestructura esta información</font>

2. PUERTO TCP PINPAD

![Ejemplo de Kiosko PUERTO TCP PINPAD](<Kiosko PUERTO TCP PINPAD.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar.

| Campo | valor | Descripcion |  
|---|---|---|
| Caracter | 9999 | Puerto del Pinpad | 
---

<font color="yellow">Nota : Solicitar a Infraestructura esta información</font>

3. TID

![Ejemplo de Kiosko TID](<Kiosko TID.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar.

| Campo | valor | Descripcion |  
|---|---|---|
| Caracter | XXXXXXX | Tid del Pinpad | 
---

<font color="yellow">Nota : Solicitar a Infraestructura esta información</font>

4. KIOSKO NOMBRE CAJERO

![Ejemplo de Kiosko KIOSKO NOMBRE CAJERO](<Kiosko KIOSKO NOMBRE CAJERO.png>)

Ingrese los siguintes parametras y dar sobre sobre el button Gaurdar. 

| Campo | valor | Descripcion |  
|---|---|---|
| Caracter | K004KIOSKO1 | Nombre del usario Pos del kiosko.  <font color="red">Refierse al manual de creacion de kiosko para mayor informacion.</font> |  
---
