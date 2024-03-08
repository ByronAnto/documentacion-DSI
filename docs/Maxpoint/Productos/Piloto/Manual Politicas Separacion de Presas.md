# Manual Politicas Separación de Presas.
# CONFIGURACIÓN DE POLÍTICAS – SEPARACIÓN DE PRESAS

## 1.	ANTECEDENTES

Actualmente en el sistema MaxPoint, se tiene la necesidad de realizar una configuración de políticas a nivel cadena, restaurante y plus que habilitar la funcionalidad de separación de presas.

## 2.	OBJETIVO GENERAL

Crear y configurar las políticas de cadena, restaurante y plus para habilitar la funcionalidad de separación de presas.

**2.1	Objetivos específicos**

*	Habilitar y configurar la política “NUMERO DE PRESAS” a nivel de plus para establecer la cantidad total de presas incluidas en el producto seleccionado.

*	Habilitar y configurar la política “SEPARACION DE PRESAS” a nivel de cadena y restaurante. 

o	En caso de estar habilitada y configurada únicamente a nivel de cadena, será esta
configuración la que será usada.

o	En caso de estar habilitada a nivel de cadena y restaurante, será usada la configuración realizada a nivel de restaurante.

## 3.	POLÍTICAS DE CONFIGURACIÓN

**3.1	Datos Generales**

En este manual se detalla cómo realizar la configuración de políticas que permitirán establecer los parámetros a ser utilizados para el uso de la funcionalidad de separación de presas.

**3.2	Pantalla de Políticas**

Se ingresará en sistema MXP BackOffice con credenciales de administrador sistemas y seleccionar la cadena a la cual se realizará las configuraciones.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

**3.3	Plus**

3.3.1	Colección Cadena

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en este manual.

En la opción **Plus** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 1. Colección Plus

|     N°    |     Colección    |     Descripción    |  |  |  |
|---|---|---|---|---|---|
|     1    |     NUMERO DE PRESAS    |     Colección que permite establecer las configuraciones para el uso de la   funcionalidad de separación de presas.    |  |  |  |
---

**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 1.

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** 

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

3.3.2	Colección de Datos Plus

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 2. Colección de Datos Plus

|     Colección: NUMERO DE PRESAS          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |  |
|     1          |     NUMERO DE PRESAS    |     SI    |     SI    |     Entero    |  |
---

**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 2.

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.

**Especifica Valor:** Se especifica en la tabla 2

**Obligatorio:** Se especifica en la tabla 2.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

3.3.3	Plus Colección de Datos

En el menú nos dirigimos a **Productos** y seleccionamos la opción **Nueva Productos**, buscamos el o los menús a ser configurados y seguidamente seleccionamos la pestaña **Políticas de configuración**.

![Ejemplo de Presas Politicas Configuracion Presas KFC](<Presas Politicas Configuracion Presas KFC.png>)

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parámetros solicitados.

3.3.4	NUMERO DE PRESAS

En la tabla 3, se especifica los valores que deben ser configurados por cada parámetro colección.

El valor a ingresar dependerá de la cantidad de presas incluidas en el Plu seleccionado 

(**Ejem:** “10 PRESAS KFC (Salón)” el valor a ingresar es 10).

Tabla 3. Valores de los parámetros de colección

|     Colección: NUMERO DE PRESAS    |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Entero    |  |  |  |
|     1    |     NUMERO DE PRESAS    |     [ Agregar el número de presas   incluidas en el plu ]    |  |  |  |
---

**3.4	Cadena**

3.4.1	Colección Cadena

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en este manual.

Volvemos a la ventana inicial del en MXP BackOffice. En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

En la opción **Cadena** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 4. Colección Cadena

|     N°    |     Colección    |     Descripción    |  |  |  |
|---|---|---|---|---|---|
|     1    |     SEPARACION DE PRESAS    |     Colección que permite establecer las configuraciones para el uso de la   funcionalidad de separación de presas.    |  |  |  |
---

<font color="yellow">Nota: NO puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 4.</font>

3.4.2	Colección de Datos Cadena

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 5. Colección de Datos Cadena

|     N°    |     Colección    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |
|---|---|---|---|---|---|
|     1          |     SEPARACION DE PRESAS    |     SEPARADOR    |     SI    |     SI    |     Carácter    |
---

**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 5.

**Parámetro:** Nombre del parámetro que se especifica en la tabla 5.

**Tipo de Dato:** Se especifica en la tabla 5.

**Especifica Valor:** Se especifica en la tabla 5.

**Obligatorio:** Se especifica en la tabla 5.
Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

3.4.3	Cadena Colección de Datos

En el menú nos dirigimos a **Cadena** y seleccionamos la opción **Cadena**. En la nueva ventana, iremos a la pestaña **Políticas de Configuración**.

![Ejemplo de Presas Cadena Coleccion de Datos](<Presas Cadena Coleccion de Datos.png>)

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parámetros solicitados.

3.4.1	SEPARADOR

En la tabla 3, se especifica los valores que deben ser configurados por cada parámetro colección.

El valor a ingresar corresponde tiene como objeto especificar las palabras claves de los plu para la separación de presas.

Tabla 6. Valores de los parámetros de colección

|     Colección: SEPARACION DE PRESAS          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Carácter    |  |  |  |
|     1    |     SEPARADOR    |     ORIGINAL,CRISPY    |  |  |  |
|     N°    |     Parámetro    |     Decimal    |  |  |  |
|          |     SEPARADOR    |     Porcentaje Min y Max de acuerdo a la   distribución deseada.    |  |  |  |
---

**3.5	Restaurante**

3.5.1	Colección Restaurante

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en este manual.

Volvemos a la ventana inicial del en MXP BackOffice. En el menú que se encuentra en la parte izquierda no dirigimos a la opción SEGURIDADES y seleccionamos POLÍTICAS, seguidamente presionamos sobre el botón Ir a Administración Políticas en el cual abrirá una nueva pestaña en el navegador.

En la opción Restaurante presionar sobre el botón Nueva Colección, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 7. Colección Restaurante

|     N°    |     Colección    |     Descripción    |  |  |  |
|---|---|---|---|---|---|
|     1    |     SEPARACION DE PRESAS    |     Colección que permite establecer las configuraciones para el uso de la   funcionalidad de separación de presas.    |  |  |  |
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 7.</font>

3.5.2	Colección de Datos Restaurante

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 8. Colección de Datos Restaurante

|     N°    |     Colección    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |
|---|---|---|---|---|---|
|     1          |     SEPARACION DE PRESAS    |     SEPARADOR    |     SI    |     SI    |     Carácter    |
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 8.</font>

**Parámetro:** Nombre del parámetro que se especifica en la tabla 8.

**Tipo de Dato:** Se especifica en la tabla 8.

**Especifica Valor:** Se especifica en la tabla 8.

**Obligatorio:** Se especifica en la tabla 8.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

3.5.3	Restaurante Colección de Datos

En el menú nos dirigimos a **Restaurante** y seleccionamos la opción **Restaurante**. A continuación, hacemos doble clic en el restaurante a configurar y en la nueva ventana, iremos a la pestaña **Políticas de Configuración**.

![Ejemplo de Presas Politicas Configuracion 9 Octubre](<Presas Politicas Configuracion 9 Octubre.png>)

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parámetros solicitados.

3.5.4	SEPARADOR

En la tabla 3, se especifica los valores que deben ser configurados por cada parámetro colección.
El valor a ingresar corresponde tiene como objeto especificar las palabras claves de los plu para la separación de presas.

Tabla 9. Valores de los parámetros de colección

|     Colección: SEPARACION DE PRESAS          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Carácter    |  |  |  |
|     1    |     SEPARADOR    |     ORIGINAL,CRISPY    |  |  |  |
|     N°    |     Parámetro    |     Decimal    |  |  |  |
|          |     SEPARADOR    |     Porcentaje Min y Max de acuerdo a la   distribución deseada.    |  |  |  |
---

## 4.	CONFIGURACIÓN ADICIONAL

En el menú nos dirigimos a **Productos** y seleccionamos la opción **Pregunta Sugerida**. A continuación, debemos verificar que las recetas asociadas a los Plu configurados con la política “NUMERO DE PRESAS”, posean como cantidad mínima y máxima, el valor 1 como se muestra en la siguiente imagen.

![Ejemplo de Presas Productos Pregunta Sugerida](<Presas Productos Pregunta Sugerida.png>)

Se requiere verificar que se encuentre activa la política “VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0”, parámetro “¿VISUALIZAR CANTIDAD?” para la visualización de la selección de las cantidades de presas, tanto en la ventana de pedidos como en el ticket de la orden. A continuación, se detalla el proceso de creación de la política mencionada.

**4.1	Restaurante**

4.1.1	Colección Restaurante

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en este manual.

Volvemos a la ventana inicial del en MXP BackOffice. En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

En la opción **Restaurante** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 10. Colección Restaurante

|     N°    |     Colección    |     Descripción    |  |  |  |
|---|---|---|---|---|---|
|     1    |     VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0    |     Colección que permite visualizar los ítems con valor 0 en la ventalla   de orden pedido y en el ticket de la orden.    |  |  |  |
---

<font color="yellow">Nota: NO puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 10.</font>

4.1.2	Colección de Datos Restaurante

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 11. Colección de Datos Restaurante

|     N°    |     Colección    |     Parámetro    |     Esp. Valor    |     Obligatorio    |     Tipo Dato    |
|---|---|---|---|---|---|
|     1          |     VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0    |     ¿VISUALIZAR CANTIDAD?    |     SI    |     SI    |     Entero    |
---

**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 8.

**Parámetro:** Nombre del parámetro que se especifica en la tabla 11.

**Tipo de Dato:** Se especifica en la tabla 11.

**Especifica Valor:** Se especifica en la tabla 11.

**Obligatorio:** Se especifica en la tabla 11.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

4.1.3	Restaurante Colección de Datos

En el menú nos dirigimos a **Restaurante** y seleccionamos la opción **Restaurante**. A continuación, hacemos doble clic en el restaurante a configurar y en la nueva ventana, iremos a la pestaña **Políticas de Configuración**.

![Ejemplo de Presas Politicas Configuracion 9 Octubre](<Presas Politicas Configuracion 9 Octubre.png>)

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parámetros solicitados.

4.1.4	¿VISUALIZAR CANTIDAD?

El valor a ingresar corresponde tiene como objeto especificar true o false para mostrar o no el ítem (1 para true, 0 para false).

Tabla 12. Valores de los parámetros de colección

|     Colección: VISUALIZAR CANTIDAD DE   PRODUCTOS CON PRECIO 0          |  |  |  |  |  |
|---|---|---|---|---|---|
|     N°    |     Parámetro    |     Entero    |  |  |  |
|     1    |     ¿VISUALIZAR CANTIDAD?    |     1    |  |  |  |
---
