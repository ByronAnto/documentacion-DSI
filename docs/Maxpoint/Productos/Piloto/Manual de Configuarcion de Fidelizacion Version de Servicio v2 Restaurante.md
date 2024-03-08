# Manual de Configuarcion de Fidelizacion Version de Servicio v2 Restaurante.
# CONFIGURACIÓN POLÍTICAS FIDELIZACION V2 RESTAURANTE 

## 1.	ANTECEDENTES

Actualmente en el sistema MaxPoint, se tiene la necesidad de realizar una configuración de políticas a nivel de Restaurante.

## 2.	OBJETIVO GENERAL

Crear y configurar para **FIDELIZACION.**

**2.1	Objetivos específicos**

•	Configurar la política y parámetros a nivel de Restaurante **“FIDELIZACION”.**

## 3.	POLÍTICAS DE CONFIGURACIÓN

**3.1	Datos Generales**

En este manual se detalla cómo realizar la configuración de políticas que permitirán establecer los parámetros a ser utilizados en FIDELIZACION.

A considerar:

**•	VERSION DE SERVICIO**, Versión a Utilizar

**3.2	Pantalla de Políticas**

Se ingresará en sistema MXP backoffice con credenciales de administrador sistemas y seleccionar el Restaurante a la cual se realizará las configuraciones.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

**3.3	Restaurante**

3.3.1	Colección Restaurante

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en este manual.

En la opción **Restaurante** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 1. Colección Restaurante

|     N°    |     Colección    |     Descripción    |  |  |  |
|---|---|---|---|---|---|
|     1    |     FIDELIZACION    |     Colección que permite ver que versión de API se utilizaría    |  |  |  |
---

**Nota:** No puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 1.

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** 

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar.**

3.3.2	Colección de Datos Restaurante

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 2. Colección de Datos Restaurante

|     N°    |     Colección    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |
|---|---|---|---|---|---|
|     1          |     FIDELIZACION    |     VERSION DE SERVICIO    |     NO    |     NO    |     CARACTER    |
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 2.</font>

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.

**Especifica Valor:** Se especifica en la tabla 2

**Obligatorio:** Se especifica en la tabla 2.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar.**

3.3.3	Restaurante Colección de Datos

En el menú nos dirigimos a **Restaurante** y seleccionamos la opción **Restaurante**, escogemos el Restaurante y allí nos dirigimos a **políticas de configuración.**

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parámetros solicitados.

3.3.4	VERSION DE SERVICIO

En la tabla 3, se especifica los valores que deben ser configurados por cada parámetro colección.

![Ejemplo de Restaurante Restaurante Coleccion Datos](<Restaurante Restaurante Coleccion Datos.png>)

Tabla 3. Valores de los parámetros de colección

|     Colección: IMPUESTO POR FECHA          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Tipo Dato    |     Valor a ingresar    |     Descripción    |  |
|     1    |     VERSION DE SERVICIO    |     Caracter    |     V2    |     Indica la versión que se va a utilizar.    |  |
---

Indica que versión de API en el restaurante.

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Restaurante Version API Restaurante](<Restaurante Version API Restaurante.png>)

