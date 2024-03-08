# Manual Reimpresión- Configuración Políticas.
# CONFIGURACIÓN DE POLÍTICAS – REIMPRESION TIPO DOCUMENTOS
## 1	ANTECEDENTES

Actualmente en el sistema MaxPoint punto de venta, se tiene la necesidad de realizar una configuración de políticas a nivel de cadena para la pantalla de reimpresión de documentos.

## 2	OBJETIVO GENERAL

Crear y configurar la política a nivel de cadena

**2.1	Objetivos específicos**

•	Configurar la política y parámetros a nivel de cadena

## 3	POLÍTICAS DE CONFIGURACIÓN

**3.1	Datos Generales**

En este manual se detalla cómo realizar la configuración de políticas que permitirán realizar la integración y funcionamiento de la pantalla de reimpresión.

A considerar:

Colección Cadena: REIMPRESION TIPOS DOCUMENTOS

•	En esta política se registran los tipos de documentos hacer reimpresos.

**3.2	Pantalla de Políticas**

En Azure ingresar al sistema MXP backoffice con credenciales de administrador sistemas y seleccionar la cadena a la cual se realizará las configuraciones.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

**3.3	Cadena**

3.3.1	Colección Cadena

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en este manual.

En la opción **Cadena** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 7. Colección Cadena

|     N°    |     Colección    |     Descripción    |  |  |  |
|---|---|---|---|---|---|
|     1    |     REIMPRESION TIPOS DOCUMENTOS    |     Colección que permitirá configurar todos los tipos de documentos.    |  |  |  |
|  |  |  |  |  |  |

**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 7.

**Colección:** Nombre de la colección que se especifica en la tabla 7.

**Módulo:** Cadena.

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

3.3.2	Colección de Datos Cadena

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 8. Colección de Datos Cadena

|     N°    |     Colección    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |
|---|---|---|---|---|---|
|     1    |     REIMPRESION TIPOS DOCUMENTOS    |     ORDEN_PEDIDO    |     SI    |     SI    |     Carácter    |
|     2    |     REIMPRESION TIPOS DOCUMENTOS    |     FACTURA    |     SI    |     SI    |     Carácter    |
|     3    |     REIMPRESION TIPOS DOCUMENTOS    |     NOTA_CREDITO    |     SI    |     SI    |     Carácter    |
---


<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 8.</font>

**Parámetro:** Nombre del parámetro que se especifica en la tabla 8.

**Tipo de Dato:** Se especifica en la tabla 8.

**Especifica Valor:** Se especifica en la tabla 8

**Obligatorio:** Se especifica en la tabla 8.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**. 

3.3.3	Cadena Colección de Datos

En el menú nos dirigimos a **Cadena** y seleccionamos la opción **Cadena**, seguidamente seleccionamos la pestaña **Políticas de configuración**.

![Ejemplo de Reimpresion Cadena Politicas Configuracion](<Reimpresion Cadena Politicas Configuracion.png>)

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parametros solicitados.

|     N°    |     Parámetro    |     Activo    |     Tipo Dato    |     Varchar    |  |
|---|---|---|---|---|---|
|     1    |     ORDEN_PEDIDO    |     SI    |     Carácter    |     ORDEN PEDIDO    |  |
|     2    |     FACTURA    |     SI    |     Carácter    |     FACTURA    |  |
|     3    |     NOTA_CREDITO    |     SI    |     Carácter    |     NOTA CREDITO    |  |
---

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Reimpresion Configuracion Pasos Obtener](<Reimpresion Configuracion Pasos Obtener.png>)