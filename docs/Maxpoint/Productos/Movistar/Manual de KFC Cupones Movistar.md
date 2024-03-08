# Manual de KFC - Cupones Movistar
# CONFIGURACIÓN POLÍTICA CUPONES MOVISTAR.
## 1 ANTECEDENTES

El sistema MaxPoint recibirá una nueva funcionalidad que le permitirá asignar e imprimir 
cupones de promociones relacionadas con la marca Movistar. Para este efecto, será necesario crear y configurar las políticas correspondientes en el sistema.

## 2 OBJETIVO GENERAL

Crear y configurar las políticas y parámetros para la integración con la funcionalidad

2.1 Objetivos específicos

• Crear las políticas y parámetros a nivel de Cadena y Producto

• Configurar los parámetros de las políticas creadas

## 3 POLÍTICAS DE CONFIGURACIÓN

**3.1 Datos Generales**

En este manual se detalla cómo crear las políticas y parámetros de las mismas a nivel de 
cadena y producto, que permitirán integrarse con la funcionalidad.

**3.2 Pantalla de Políticas**

Ingresar al sistema MP backoffice con credenciales de administrador sistemas.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción 
**SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el 
botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

**3.3 Cadena**

3.3.1 Colección Cadena

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se 
encuentren creadas, de ser el caso validar que cada colección contenga los parámetros 
establecidos en este manual.

En la opción **Cadena** presionar sobre el botón **Nueva Colección**, se abrirá una modal para 
su creación ingresando los siguientes datos:

Tabla 1. Colección Cadena

| N° | Colección | Observaciones |
|--|--|--|
| 1 | CUPONES MOVISTAR | Colección que permite integrarse con la funcionalidad de Cupones Movistar. |
---

<font color ="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; 
debe ser escrita tal y como se especifica en la tabla 1.</font>

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** No aplica.

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**

![Ejemplo de Manual KFC Colección CUPONES MOVISTAR](<Manual KFC Colección CUPONES MOVISTAR.png>)

3.3.2 Parámetro de Colección 

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que 
no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores 
establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y 
para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la 
cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 2. Datos Parámetros de Colección Plus

| N° | Colección | Parámetro  | Esp. Valor |   Obligatorio |  Tipo Dato |
|--|--|--|--|--|---|
| 1 | CUPONES MOVISTAR | DESCRIPCION | NO | NO | Carácter |
| 2 | CUPONES MOVISTAR | HABILITADO | NO | NO | Selección |
| 3 | CUPONES MOVISTAR | URL WS  | NO | NO | Carácter |
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser 
escritos tal y como se especifica en la tabla 2.</font>

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.

**Especifica Valor:** Se especifica en la tabla 2.

**Obligatorio:** Se especifica en la tabla 2.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todos los parámetros de configuración establecidos en la tabla 2 y se debe 
tener lo siguiente:

![Ejemplo de Manual KFC Tabla 2 Parametros](<Manual KFC Tabla 2 Parametros.png>)

3.3.3 Cadena Colección de Datos

En el menú principal, nos dirigimos a **Cadena** y seleccionamos la opción **CADENA**,
seguidamente seleccionamos la pestaña **Políticas de configuración**.

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una 
ventana, seguidamente buscaremos la colección creada y agregamos el valor en los 
parametros solicitados. Para cada uno de los parametros ‘URL WS’, ‘DESCRIPCION’, y 
‘HABILITADO’ crearlos y llenar sus valores como se muestra en la tabla a continuación:

Tabla 3. Parámetros de la colección

| N° | Dato | Valor |
|--|--|--|
| 1 | URL WS | [https://apigerentesap.azurewebsites.net/api/cupon-movistar](https://apigerentesap.azurewebsites.net/api/cupon-movistar) |
| 2 | DESCRIPCION | 1.- Revisa tu código QR en la factura // 2.- Scanea el código QR y encuentra tu código único // 3.- Envía tu código vía SMS 333 y disfruta navegando GRATIS en Netflix y Youtube // 4. - Aplican restricciones más información en www.movistar.com.ec|
| 3 | HABILITADO | SI |
---

Si se ha realizado correctamente, se debe mostrar así:

![Ejemplo de Manual KFC Realizado Correctamente](<Manual KFC Realizado Correctamente.png>)

**3.4 PLUS**

3.4.1 Colección PLUS

En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se 
encuentren creadas, de ser el caso validar que cada colección contenga los parámetros 
establecidos en este manual.

En la opción **Plus** presionar sobre el botón Nueva Colección, se abrirá una modal para su 
creación ingresando los siguientes datos:

Tabla 4. Colección Plus

| N° | Coleción | Observaciones |
|--|--|--|
| 1 |  CUPONES MOVISTAR | Permite asignar un producto a las promociones Movistar |
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; 
debe ser escrita tal y como se especifica en la tabla 1.</font>

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** No aplica.

**Observaciones:** Una descripción de la función que realizara dicha colección, especificado en la tabla 4.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![Ejemplo de Manual KFC Coleccion CUPONES MOVISTAR](<Manual KFC Coleccion CUPONES MOVISTAR.png>)

3.4.2 Parámetro de Colección 

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que 
no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores 
establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y 
para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la 
cual se abrirá una venta para su creación e ingresamos los siguientes datos:

Tabla 5. Datos Parámetros de Colección Plus

| N° | Coleción | Parametro | Esp. Valor | Obligatorio | Tipo Dato |
|--|--|--|--|--|--|
| 1 |  CUPONES MOVISTAR | HABILITADO | NO | NO | Selección |
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser 
escritos tal y como se especifica en la tabla 2.</font>

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 5.

**Especifica Valor:** Se especifica en la tabla 5.

**Obligatorio:** Se especifica en la tabla 5.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todos los parámetros de configuración establecidos en la tabla 5 y se debe 
tener lo siguiente:

![Ejemplo de Manual KFC Parametros Establecidos Tabla 5](<Manual KFC Parametros Establecidos Tabla 5.png>)

3.4.3 Cadena Colección de Datos

En el menú principal, nos dirigimos a **Productos** y seleccionamos la opción **NUEVA PRODUCTOS**, seguidamente -para cada producto que participará de la promoción- lo seleccionamos con doble clic e iremos al panel **Políticas de configuración**.

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una 
ventana, seguidamente buscaremos la colección ‘CUPONES MOVISTAR’ y en el 
parametros ‘selección’ colocaremos SI y luego en **Guardar**.

![Ejemplo de Manual KFC Selección Colocar SI luego Guardar](<Manual KFC Selección Colocar SI luego Guardar.png>)

Repetir para cada uno de los productos que participen de la promoción

3.4.4 Puntos a considerar

1. Cada uno de los parámetros deben configurarse (escribirse) **exactamente** como está 
en este manual, respetando mayúsculas y minúsculas.