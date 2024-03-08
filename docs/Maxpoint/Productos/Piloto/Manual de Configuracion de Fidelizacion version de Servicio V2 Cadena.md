# Manual de Configuración de Fidelizacion version de Servicio V2 Cadena
# CONFIGURACIÓN POLÍTICAS IDEALIZACIÓN V2
## 1.	ANTECEDENTES

Actualmente en el sistema MaxPoint, se tiene la necesidad de realizar una configuración de políticas a nivel de Cadena.

## 2.	OBJETIVO GENERAL

Crear y configurar para WS RUTA SERVICIO.

**2.1	Objetivos específicos**

•	Configurar la política y parámetros a nivel de Cadena “WS RUTA SERVICIO”

## 3.	POLÍTICAS DE CONFIGURACIÓN

**3.1	Datos Generales**

En este manual se detalla cómo realizar la configuración de políticas que permitirán establecer los parámetros a ser utilizados en **WS RUTA SERVICIO.**

A considerar:

**•	FIREBASE CANJEPUNTOSV2.-**  Se usa cuando el usuario hace una compra con puntos en el local, le indica a Trade que compró y cuantos puntos gastó.

**•	FIREBASE EFECTIVOV2.-**  Permite recargar saldo desde el local

**•	FIREBASE ESTADOCLIENTEV2.-** Obtención de información de
•	usuario, e.g. registro, plan de lealtad..

**•	FIREBASE REGISTRO TRANSACCIONV2.-** Se usa cuando el usuario hace una compra con saldo en el local, le indica a Trade que compró y cuanto gastó..

**•	FIREBASE TOKENV2.-** Obtención del token de acceso que será utilizado en los servicios del plan de lealtad.

**•	RECARGAS CONSUMOV2.-** Se usa cuando el usuario hace una compra con saldo en el local, le indica a Trade que compró y cuanto gastó.

**3.2	Pantalla de Políticas**

Se ingresará en sistema MXP backoffice con credenciales de administrador sistemas y seleccionar la cadena a la cual se realizará las configuraciones.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

**3.3	Restaurante**

3.3.1	Colección Cadena

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en este manual.

En la opción **Cadena** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 1. Colección Cadena

|     N°    |     Colección    |     Descripción    |  |  |  |
|---|---|---|---|---|---|
|     1    |     WS RUTA SERVICIO    |     Colección que permite escoger la ruta para llamar al servicio.    |  |  |  |
---

<font color="yellow">**Nota:** No puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 1.</font>

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** Se especifica en al tabla 1

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar.**

3.3.2	Colección de Datos Cadena

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 2. Colección de Datos Cadena

|     N°    |     Colección    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |
|---|---|---|---|---|---|
|     1          |     WS RUTA SERVICIO    |     FIREBASE CANJEPUNTOSV2    |     SI    |     SI    |     CARACTER    |
|          |     WS RUTA SERVICIO    |     FIREBASE EFECTIVOV2    |     SI    |     SI    |     CARACTER    |
|          |     WS RUTA SERVICIO    |     FIREBASE ESTADOCLIENTEV2    |     SI    |     SI    |     CARACTER    |
|          |     WS RUTA SERVICIO    |     FIREBASE REGISTRO TRANSACCIONV2    |     SI    |     SI    |     CARACTER    |
|          |     WS RUTA SERVICIO    |     FIREBASE TOKENV2    |     SI    |     SI    |     CARACTER    |
---

**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 2.

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.

**Especifica Valor:** Se especifica en la tabla 2

**Obligatorio:** Se especifica en la tabla 2.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar.**

3.3.3	Cadena Colección de Datos

En el menú nos dirigimos a **Cadena** y seleccionamos la opción **Cadena**, escogemos  **Políticas de configuración.**

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parámetros solicitados.

![Ejemplo de Cadena Politicas Configuracion mas](<Cadena Politicas Configuracion mas.png>)

3.3.4	FIREBASE CANJEPUNTOSV2

En la tabla 3, se especifica los valores que deben ser configurados por cada parámetro colección.


Tabla 3. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     FIREBASE CANJEPUNTOSV2ENTE    |     Varchar:    |     /api/v2/loyalty/points   |  Se usa cuando el usuario hace una compra con puntos en el local, le indica a Trade que compró y cuantos puntos gastó. |  
---

El valor a ingresar es la dirección para el  Canje de Puntos.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Cadena Configuracion Realizada Obtener](<Cadena Configuracion Realizada Obtener.png>)

3.3.5	FIREBASE ESTADOCLIENTEV2

En la tabla 4, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 4. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     FIREBASE ESTADOCLIENTEV2    |     Varchar    |     /api/v2/loyalty/:uid/details    |     Obtención de información de     usuario, e.g. registro, plan de lealtad.    |  |
---

El valor a ingresar es la dirección para el  Canje de Puntos.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Cadena Configuracion Realizada Obtener Canje Puntos](<Cadena Configuracion Realizada Obtener Canje Puntos.png>)

3.3.6	FIREBASE TOKENV2

En la tabla 5, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 5. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     FIREBASE TOKENV2    |     Varchar    |     /api/authentication/login    |     Obtención del token de acceso que será utilizado en los servicios del   plan     de lealtad.    |  |
---

El valor a ingresar es la dirección para el  Token de acceso.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Cadena Configuracion Realizada Obtener Canje Puntos](<Cadena Configuracion Realizada Obtener Canje Puntos.png>)

3.3.7	FIREBASE EFECTIVOV2

En la tabla 6, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 6. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     FIREBASE EFECTIVOV2    |     Varchar    |     /api/v2/loyalty/balance/reload    |     Permite recargar saldo desde el local    |  |
---

El valor a ingresar es la dirección para el Recarga de Saldo.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Cadena Configuracion Realizada Obtener Canje Puntos](<Cadena Configuracion Realizada Obtener Canje Puntos.png>)

3.3.8	FIREBASE REGISTRO TRANSACCIONV2

En la tabla 7, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 7. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     FIREBASE REGISTRO TRANSACCIONV2    |     Varchar    |     /api/v2/order/    |     Se usa cuando el usuario hace una compra con saldo en el local, le   indica a Trade que compró y cuanto gastó.    |  |
---

El valor a ingresar es la dirección para Acumulación de Puntos.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Cadena Configuracion Realizada Obtener Canje Puntos](<Cadena Configuracion Realizada Obtener Canje Puntos.png>)

3.3.9	RECARGAS CONSUMOV2

En la tabla 8, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 8. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     RECARGAS CONSUMOV2    |     Varchar    |     /api/v2/loyalty/balance/redemption    |     Se usa cuando el usuario hace una compra con saldo en el local, le   indica a Trade que compró y cuanto gastó.    |  |
---

El valor a ingresar es la dirección para Gasto de Saldo

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Cadena Configuracion Realizada Obtener Recargas Consumo](<Cadena Configuracion Realizada Obtener Recargas Consumo.png>)

