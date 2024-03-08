# Manual de Configuracion de Nota de Credrito Fidelizacion de Servicio V2 Cadena.

# CONFIGURACIÓN POLÍTICAS IDEALIZACIÓN V2 

## 1.	ANTECEDENTES
Actualmente en el sistema MaxPoint, se tiene la necesidad de realizar una configuración de políticas a nivel de Cadena.

## 2.	OBJETIVO GENERAL

Crear y configurar para WS RUTA SERVICIO.

**2.1	Objetivos específicos**

•	Configurar la política y parámetros a nivel de Cadena **“WS RUTA SERVICIO”.**

## 3.	POLÍTICAS DE CONFIGURACIÓN

**3.1	Datos Generales**

En este manual se detalla cómo realizar la configuración de políticas que permitirán establecer los parámetros a ser utilizados en **WS RUTA SERVICIO.**

A considerar:

**•	FIREBASE CREDITOSACUMULACIONPUNTOS.-**  Para revertir los puntos acumulados por la compras con Saldo o con Efectivo.

**•	FIREBASE CREDITOSALDO.-** Para revertir la factura que fue generada por pago por saldo.

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

**Módulo:** 

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar.**

3.3.2	Colección de Datos Cadena

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 2. Colección de Datos Cadena

|     N°    |     Colección    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |
|---|---|---|---|---|---|
|     1     º    |     WS RUTA SERVICIO    |     FIREBASE CREDITOSACUMULACIONPUNTOS    |     SI    |     SI    |     CARACTER    |
|          |     WS RUTA SERVICIO    |     FIREBASE CREDITOSALDO    |     SI    |     SI    |     CARACTER    |
---

**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 2.

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.

**Especifica Valor:** Se especifica en la tabla 2

**Obligatorio:** Se especifica en la tabla 2.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

3.3.3	Cadena Colección de Datos

En el menú nos dirigimos a **Cadena** y seleccionamos la opción **Cadena**, escogemos  **Políticas de configuración.**
Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parámetros solicitados.

![Ejemplo de Nota Politicas Configuracion](<Nota Politicas Configuracion.png>)

3.3.4	FIREBASE CREDITOSACUMULACIONPUNTOS

En la tabla 3, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 3. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     FIREBASE CREDITOSACUMULACIONPUNTOS    |     Varchar:    |     /api/v2/loyalty/order/reverse    |     Es para quitar los puntos generados por compras.    |  |
---

El valor a ingresar es la dirección para  Reverso de Orden.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Nota Valor Ingresar Direccion Reverso Orden](<Nota Valor Ingresar Direccion Reverso Orden.png>)

3.3.5	FIREBASE CREDITOSALDO

En la tabla 4, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 4. Valores de los parámetros de colección

|     Colección: WS RUTA SERVICIO          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     FIREBASE CREDITOSALDO    |     Varchar    |     /api/v2/loyalty/balance/redemptionReverse    |     Si fue pagado con saldo se anula el pago.    |  |
---

El valor a ingresar es la dirección para para el Reverso de Saldo.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Nota Valor Ingresar Direccion Reverso Saldo](<Nota Valor Ingresar Direccion Reverso Saldo.png>)