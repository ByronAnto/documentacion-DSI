# CONFIGURACIÓN DE AGREGADORES.
## 1. ANTECEDENTES
Actualmente en el sistema MaxPoint; existe una integración para realizar pedidos a través 
de la plataforma de entrega de comida llamada Uber Eats, ahora se requiere añadir otras 
plataformas como son: Glovo, etc.
## 2. OBJETIVO GENERAL
Generar pedidos aplicando las formas de pago de las plataformas de entrega de comida.

   2.1 OBJETIVOS ESPECÍFICOS

   * Crear políticas de configuración para formas de pago Uber Eats, Glovo, etc.
   *  Crear un solo botón que contengas todas las formas de pago como agregadores.
##  3. POLÍTICAS DE CONFIGURACIÓN
   3.1 DATOS GENERALES
   
En este manual se detalla cómo realizar la configuración de políticas a nivel de cadena y 
formas de pago, que permitirán en MaxPoint realizar pedidos aplicando las formas de pago 
de las plataformas Uber Eats, Glovo, etc.

Antes de iniciar la configuración se describen los datos importantes que sebe tener en 
cuenta:

* **Agregadores**, este nombre hace referencia a las plataformas de entrega de comida 
como: Uber, Glovo, etc.

3.2 PANTALLA DE POLÍTICAS

Ingresar al sistema MP backoffice con credenciales de administrador sistemas y seleccionar 
la cadena a la cual se realizará las configuraciones.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción 
**SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el 
botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

3.3 CADENA

3.3.1 Colección de Cadena

En la opción **Cadena** presionar sobre el botón **Nueva Colección**, se abrirá una modal para 
su creación ingresando los siguientes datos:

<!--TABLA DE CONTENIDO "Datos Colección Cadena"-->

Tabla 1. Datos Colección Cadena

| N° | Colección | Descripción |
| ---| :--------:| -----------:|
| 1  |AGREGADORES DE INFORMACION |Colección que permite establecer la información de las plataformas de entrega de comida como el nombre y ruc la empresa registrada en nuestros sistemas.| 
| 2  |LISTA DE AGREGADORES Y CANALES| Colección que permite establecer las plataformas de entrega de comida que aplican en MaxPoint punto de venta. 
___

<font color="#ffff83">**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; 
debe ser escrita tal y como se especifica en la tabla 1.
Antes de crear las políticas de configuración debemos verificar que no se encuentren 
creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en 
este manual.</font>

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** No aplica.

**Observaciones:** Una descripción de la función que realizara dicha colección.
Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todas las políticas detalladas en la tabla 1.

Ejemplo:

![Ejemplo de coleccion AGREGADORES INFORMACION](<Coleccion AGREGADORES DE INFORMACION.jpg>)

3.3.2 Parámetro de colección 

<!--TABLA DE CONTENIDO "Datos Parámetros de Colección Cadena"-->

Tabla 2. Datos Parámetros de Colección Cadena

| N° | Colección | Parámetro | Esp. Valor | Obligatorio | Tipo Dato|
| ---| :--------:| ---------:| -----------| ------------| ---------|
| 1  |  AGREGADORES INFORMACION | UBER/GLOVO | SI | SI | Carácter |
| 2  | LISTA DE AGREGADORES Y CANALES | UBER/GLOVO | SI | SI | Selección | 
---

<font color="#ffff83">**Nota:** Sí, a futuro se integra un nuevo agregador, este debe ser creado en las dos políticas</font>

Una vez creada la colección se debe proceder a crear los parámetros de configuración y 
para ello seleccionamos la colección y presionamos sobre el botón Nuevo Parámetro
(derecha), en la cual se abrirá una modal para su creación.

![Ejemplo de NUEVO PARÁMETRO](<NUEVO PARÁMETRO.jpg>)

Presionar sobre el botón **Nuevo Parámetro**, se abrirá una modal para su creación ingresando los siguientes datos:

**Nota: NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 2. Antes de agregar los parámetros de configuración debemos verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este manual.**

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.
Especifica Valor: Se especifica en la tabla 2

**Obligatorio:** Se especifica en la tabla 2
Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todos los parámetros de configuración establecidos en la tabla 2.

Ejemplo:

![Ejemplo de PARÁMETRO UBER](<PARÁMETRO UBER.jpg>)

3.4 FORMAS DE PAGO 

3.4.1 Colección Formas de Pago

Tabla 3. Datos Colección Formas de Pago

| N° | Colección | Descripción |
| ---| :--------:| -----------:|
| 1  |AGREGADORES |Configuración que permite establecer que forma de pago aplica como agregador (Plataformas de entrega de comida Uber, Glovo, etc).| 
| 2  | REQUIERE CODIGO| Colección que permite establecer; si al seleccionar una forma de pago del tipo agregador en el punto de venta, este debe solicitar el ingreso del código emitido por la plataforma Uber, Glovo, etc. 
| 3  | FACTURACION ELECTRONICA | Colección que homóloga las formas de pago con los códigos del SRI para facturación electrónica.| 
| 4  |  REQUIERE AUTORIZACION | Colección que permite configurar que forma de pago necesita autorización para aplicar un pago en el punto de venta. |
| 5  | VISUALIZAR FORMA DE PAGO |  Colección para validar si la forma de pago se muestra o no en pantalla del punto de venta|
___

En la opción **Formas de Pago** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

**Nota: NO puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 3.**

Antes de crear las políticas de configuración debemos verificar que no se encuentren creadas, de ser el caso validar que cada colección contenga los parámetros establecidos en 
este manual.

**Colección:** Nombre de la colección que se especifica en la tabla 3.

**Módulo:** Forma Pago.

**Observaciones:** Una descripción de la función que realizara dicha colección.
Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todas las políticas detalladas en la tabla 3.

Ejemplo:

![Ejemplo de Coleccion AGREGADORES](<Coleccion AGREGADORES.jpg>)

3.4.2 Parámetro Formas de Pago

Tabla 4. Datos Parámetro Formas de Pago

| N° | Colección | Parámetro | Esp. Valor | Obligatorio | Tipo Dato|
| ---| :--------:| ---------:| -----------| ------------| ---------|
| 1  |  AGREGADORES | ¿APLICA? | SI | SI | Selección |
| 2  |  FACTURACION ELECTRONICA | CODIGO CREDITO EXTERNO | SI | SI | Entero | 
| 3  | REQUIERE AUTORIZACION | SE SOLICITA PARA APLICAR PAGO?  | SI | SI | Selección |
| 4  |  REQUIERE CODIGO | SOLICITAR CODIGO? | SI | SI | Selección | 
| 5  | VISUALIZAR FORMA DE PAGO | SE MUESTRA EN EL PUNTO DE VENTA? | SI | SI | Selección | 
---

Una vez creada la colección se debe proceder a crear los parámetros de configuración y para ello seleccionamos la colección y presionamos sobre el botón Nuevo Parámetro (derecha), en la cual se abrirá una modal para su creación.

![Ejemplo de NUEVO PARAMETRO.2](<NUEVO PARAMETRO.2.jpg>)

Presionar sobre el botón Nuevo Parámetro, se abrirá una modal para su creación ingresando los siguientes datos:

Nota: NO puede contener espacios en blanco al inicio y final del parámetro; deben ser 
escritos tal y como se especifica en la tabla 4.

Antes de agregar los parámetros de configuración debemos verificar que no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores establecidos en este 
manual.

**Parámetro:** Nombre del parámetro que se especifica en la tabla 4

**Tipo de Dato:** Se especifica en la tabla 4

**Especifica Valor:** Se especifica en la tabla 4

**Obligatorio:** Se especifica en la tabla 4
Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todos los parámetros de configuración establecidos en la tabla 4.

Ejemplo:

![Ejemplo de Colecion AGREGADORES.2](<Coleccion AGREGADORES.2.jpg>)

3.5 CADENA COLECCIÓN DE DATOS

En el menú nos dirigimos a **CADENA** y seleccionamos la opción **CADENA**, en la parte izquierda se cargará una pantalla y seguidamente seleccionamos la pestaña **Políticas de configuración**.

![Ejemplo de CADENAS CONFIGURACIÓN](<CADENAS CONFIGURACIÓN.jpg>)

Para realizar la configuración se debe presionar sobre la pestaña Políticas de Configuración.

![Ejemplo de POLÍTICAS DE CONFIGURACIÓN](<POLÍTICAS DE CONFIGURACIÓN.jpg>)

Para habilitar la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una modal, seguidamente buscaremos la colección creada y la seleccionamos.

**Colección AGREGADORES INFORMACIÓN:**

![Ejemplo de Colección AGREGADORES INFORMACIÓN.Pasos](<Coleccion AGR_INFO_Pasos.jpg>)

Aquí se debe configurar el **tipo de dato Varchar con el RUC de la empresa Uber Eats, Glovo, etc**., seguidamente presionar **Guardar**.

Se debe realizar este paso por cada agregador existente.

<font color="#ffff83">**Nota:** La información de la empresa como el RUC, deben solicitarlo al departamento de Contabilidad.</font>

**Colección LISTA DEAGREGADORES Y CANALES:**

![Ejemplo de LISTA DEAGREGADORES Y CANALES](<LISTA DEAGREGADORES Y CANALES.jpg>)

Aquí se debe configurar el tipo de dato Selección en SI, seguidamente presionar **Guardar**.

Se debe realizar este paso por cada agregador existente.

Una vez configurada las políticas se debe tener lo siguiente.

![Ejemplo de POLÍTICAS CONFIGURADAS](<POLÍTICAS CONFIGURADAS.jpg>)

3.6 FORMAS DE PAGO

**Tipo Forma de Pago**

En el menú nos dirigimos a **GENERAL**, desplegamos la opción **FORMAS DE PAGO** y seleccionamos **TIPO FORMAS DE PAGO**, en la parte izquierda se cargará una pantalla con el listado de registros actualmente tiene la cadena.

Presionamos sobre el botón **“Nuevo”** y se abrirá una modal para agregar el tipo forma de 
pago.

![Ejemplo de TIPO FORMAS DE PAGO](<TIPO FORMAS DE PAGO.jpg>)

La descripción debe ser **“AGREGADOR”**, seguidamente presionamos el botón aceptar para crear el registro.

![Ejemplo de AGREGADOR EN PAGO](<AGREGADOR EN PAGO.jpg>)

Formas de Pago
En el menú nos dirigimos a **GENERAL**, desplegamos la opción **FORMAS DE PAGO** y seleccionamos **DEFINICIÓN**, en la parte izquierda se cargará una pantalla con el listado 
de las formas de pago que actualmente tiene la cadena.

![Ejemplo de FORMAS DE PAGO](<FORMAS DE PAGO.jpg>)

Los datos para crear las formas de pago tipo agregadores son los siguientes:

Tabla 5. Formas de Pago Agregadores

| N°| Forma de Pago | Tipo Forma de Pago | Descripción |
|---| --------------| -----------| --------|
| 1 |  AGREGADOR |  AGREGADOR | Es el botón que debe ser visible en la pantalla de facturación del punto de venta. |
| 2 |  UBER | CREDITO EXTERNO | Esta forma de pago será visible al presionar el botón AGREGADOR. |
| 3 |  GLOVO | CREDITO EXTERNO | Esta forma de pago será visible al presionar el botón AGREGADOR. |
---

<font color="#ffff83">**Nota:** El botón AGREGADOR va a contener todas las formas de pago de las plataformas 
de entrega de comida como Uber, Glovo, etc., y debe ser creado una sola vez.</font>

Tabla 6. Datos Forma de Pago Agregadores

| N°| Campo  | Valor | Observación |
|---| --------------| -----------| --------|
| 1 |  Descripción | Se especifica en la tabla 5. | El nombre de la forma de pago que será visible en el punto de venta.  |
| 2 | Tipo Medio de Pago  | Se especifica en la tabla 5. | Es el tipo de la forma de pago.|
| 3 |  Adquiriente | Ninguno| No aplica ningún tipo adquiriente |
| 4 |  Código Respuesta DLL Gerente | Crédito Sin Cupón. | El código dependerá de la cadena y el nombre con el cual haya sido creada en el SG. |
| 5 |  Tipo de Facturación | PLAN MARKET | Todas forma de pago debe ser tipo Plan Market.|
| 6 |   Imagen | Agregar la imagen correspondiente a la plataforma.Se recomienda que el tamaño de la imagen sea de un máximo de 70x70 pixeles | Imagen de la forma de pago que será visible en el punto de venta | 
| <font color="#ffff83">7</font> |  <font color="#ffff83">Pestaña Tiendas Aplicar </font>| <font color="#ffff83">Seleccionar las tiendas que tendrán la forma de pago creada </font>| <font color="#ffff83">Forma de pago que será visible en el punto de venta por restaurante. </font>|
---
**Forma de Pago: AGREGADOR**

![Ejemplo de Forma de Pago: AGREGADOR](<Forma de Pago_AGREGADOR.jpg>)

Una vez creada la forma de pago debemos editarla para configurar la política de configuración, con un doble clic se abrirá una modal y seleccionamos la pestaña **Políticas 
de configuración**.

![Ejemplo de POLÍTICAS DE CONFIGURACIÓN_Pago](<POLÍTICAS DE CONFIGURACIÓN_Pago.jpg>)

En este caso, para está forma de pago debe tener configurada únicamente dos políticas las 
mismas que son:
- REQUIERE AUTIRIZACIÓN: Su valor dependerá del uso de la forma de pago.
- VISUALIZAR FORMA DE PAGO: Su valor siempre debe ser **SI**

![Ejemplo de Formas de pago colección de datos](<Formas de pago colección de datos.jpg>)

**Forma de Pago: UBER EATS, GLOVO, etc**.

![Ejemplo de Forma de Pago_UBER EATS_GLOVO_etc](<Forma de Pago_UBER EATS_GLOVO_etc.jpg>)

Una vez creada la forma de pago debemos editarla para configurar la política de configuración, con un doble clic se abrirá una modal y seleccionamos la pestaña **Políticas 
de configuración**.

![Ejemplo de POLÍTICAS DE CONFIGURACIÓN_Pago](<POLÍTICAS DE CONFIGURACIÓN_Pago.jpg>)

En este caso, para las formas de pago agregadores deben tener configuradas las siguientes políticas:

| N°| Colección  | Parámetro | Valor |
|---| --------------| -----------| --------|
| <font color="#ffff83">1</font> |<font color="#ffff83">   AGREGADORES </font>| <font color="#ffff83">¿APLICA?</font> | <font color="#ffff83">En está policía se debe configurar dos valores, el campo selección (**Bit**) en **SI** y el campo **Entero** para el orden de visualización. </font>|
| <font color="#ffff83">2 </font>| <font color="#ffff83">FACTURACION ELECTRONICA </font> |  <font color="#ffff83">CODIGO CREDITO EXTERNO </font>| <font color="#ffff83">En está policía se debe configurar dos valores, el campo **Entero** y el **Varchar**</font>|
| 3 |   REQUIERE AUTORIZACION | SE SOLICITA PARA APLICAR PAGO?| Solo requiere la configuración del campo selección (Bit), esto dependerá del uso de la forma de pago. |
| 4 |   REQUIERE CODIGO | SOLICITAR CODIGO? | Solo requiere la configuración del campo selección (Bit), en **SI**. |
| 5 |  VISUALIZAR FORMA DE PAGO |  SE MUESTRA EN EL PUNTO DE VENTA? | Solo requiere la configuración del campo selección (Bit), en **NO**.|
---

A continuación, se especifica las configuraciones adicionales para las políticas

AGREGADORES y FACTURACIÓN ELECTRONICA (color amarillo):

Política de configuración: AGREGADORES:

Aquí se debe configurar el campo selección (**Bit**) en **SI**, el cual indica sí, está forma de pago es agregador o no y el campo **Entero** que se especifica el orden para la visualización en el punto de venta.

![Ejemplo de Política de configuración_AGREGADORES](<Política de configuración_AGREGADORES.jpg>)

Política de configuración: FACTURACIÓN ELECTRÓNICA:

Aquí se debe configurar el campo **Entero**, en el cual se especifica el código para facturación electrónica y el campo **Varchar** que se especifica si la forma de pago es aplicada por un sistema financiero.

![Ejemplo de Política de configuración_FACTURACIÓN ELECTRÓNICA](<Política de configuración_FACTURACIÓN ELECTRÓNICA.jpg>)

Una vez aplicadas todas las políticas de configuración en la forma de pago, se debe visualizar lo siguiente:

![Ejemplo de Resultado Configuración de Políticas](<Resultado Configuración de Políticas.jpg>)

Se debe realizar esta configuración de políticas por cada forma de pago.

## 4. REPLICAR
Como siguiente paso se debe realizar las respectiva replica de todas las configuraciones 
hacia la tienda.