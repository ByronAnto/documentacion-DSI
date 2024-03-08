# Etiquetas de impuestos dinámica V.1.9.7

## 1 Antecedentes 
  Actualmente en el sistema MaxPoint punto de venta; tanto en la pantalla de facturación 
como en la impresión de los comprobantes (Factura y Nota de Crédito), la descripción y 
posición de las etiquetas de los impuestos es fija.

## 2 Objetivo 
Configurar la descripción y posición de las etiquetas de impuestos médiate políticas a nivel 
de cadena.

## 3 Objetivos Específicos

Configurar una política a nivel de cadena para la etiqueta subtotal.
- Configurar una política a nivel de cadena para la etiqueta de impuesto base.
- Configurar una política a nivel de cadena para la etiqueta de impuesto IVA.
- Configurar una política a nivel de cadena para la etiqueta total.
- Configurar una política a nivel de cadena para la etiqueta descuento.
- Configurar una política a nivel de cadena para la etiqueta servicio.

## 4 Políticas De Configuración
### 4.1 Datos Generales

  En este manual se detalla cómo realizar la configuración de las políticas a nivel de cadena 
que permitirá visualizar dinámicamente la posición de las etiquetas de impuestos, tanto en
la pantalla de facturación como en la impresión de los RIDES.
En Azure se debe crear las siguientes políticas de configuración a nivel de cadena:
- ETIQUETA EN IMPUESTOS SUBTOTAL
- ETIQUETA EN IMPUESTOS BASE
- ETIQUETA EN IMPUESTOS IVA
- ETIQUETA EN IMPUESTOS TOTAL
- ETIQUETA DESCUENTO
- ETIQUETA SERVICIO

### 4.2 Colección a nivel de cadena

Ingresar al sistema MP backoffice con credenciales de administrador sistemas y seleccionar 
la cadena a la cual se realizará las configuraciones.
En el menú que se encuentra en la parte izquierda no dirigimos a la opción 
**SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el 
botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

   <font color="FFFF00">**Nota:**Antes de crear las políticas de configuración debemos verificar que dichas 
colecciones no se encuentren creadas, de ser el caso validar que cada colección contenga 
los parámetros establecidos en este manual</font> 

### 4.2.1 Creación Colección Cadena

#### Tabla 1: Etiquetas de impuestos

| **N°** |    **Colección**                | **Parámetro**    | **Esp. Valor** | **Obligatorio** | **Tipo Dato**     |
|--------|---------------------------------|------------------|----------------|-----------------|-------------------|
| 1      | ETIQUETA DE DESCUENTO           | FACTURA          | SI             | SI              | Carácter          |
| 2      | ETIQUETA EN IMPUESTOS BASE      | FACTURA  VOUCHER | SI / SI          | SI / SI           | Carácter Carácter |
| 3      | ETIQUETA EN IMPUESTOS IVA       | FACTURA VOUCHER  | SI / SI          | SI / SI           | Carácter Carácter |
| 4      | ETIQUETA EN IMPUESTOS  SUBTOTAL | FACTURA VOUCHER  | SI / SI          | SI / SI           | Carácter Carácter |
| 5      | ETIQUETA EN IMPUESTOS TOTAL     | FACTURA VOUCHER  | SI / SI          | SI / SI             | Carácter Carácter |
| 6      | ETIQUETA SERVICIO               | FACTURA          | SI             | SI              | Carácter          |


En la opción **Cadena** presionar sobre el botón **Nueva Colección** en la cual se abrirá una 
modal para su creación e ingresar los siguientes datos:

**Colección:** Nombre de la colección que se especifica en la Tabla 1.

**Módulo:** No aplica

**Observaciones:** Una descripción de la función que realizara dicha colección.
Una vez que se haya ingresado y seleccionado la información establecida procedemos a 

**Guardar.**



  ![](img1.png)

La misma configuración debe ser aplicada al resto de colecciones detalladas en la Tabla 1, 
con su respectiva descripción.


####  4.2.1.1 Creación Parámetro de Colección

Una vez creada la colección se debe proceder a crear el parámetro de configuración.
Para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro**
(derecha), en la cual se abrirá una modal para su creación.


![](img2.png)
![](img3.png)


A continuación, se detalla los tipos de parámetros a ser creados:

**Factura -** Este parámetro permitirá especificar que la configuración se la realizará 
únicamente a la factura y nota de crédito.

**Voucher -** Este parámetro permitirá especificar que la configuración se la realizará 
únicamente al voucher.

**Tipo de Dato:** Carácter.

**Especifica Valor:** SI

**Obligatorio:** SI

Una vez que se haya ingresado y seleccionado la información establecida procedemos a

**Guardar.**

![](img4.png)

Una vez creado los parámetros de configuración se debe tener lo siguiente:

![](img5.png)

La misma configuración debe ser aplicada al resto de colecciones detalladas en la Tabla 1, 
con la única diferencia que la etiqueta Descuento y Servicio solo tiene el parámetro de 
Factura, mientras que las demás colecciones tienen los parámetros de Factura y Voucher.

  <font color="FFFF00">**Nota:**Tener en cuenta que NO debe haber espacios al inicio y final de la descripción; debe 
ser escrita tal y como se especifica en la Tabla 1, tanto de la colección como sus parámetros.</font> 



### 4.3 Cadena Configuración de Colección

Una vez que se verifico que exista o se creó la colección procedemos a realizar la 
configuración a la cadena.

En el menú nos dirigimos a **CADENA** y seleccionamos la opción **CADENA**, seguidamente 
seleccionamos políticas de configuración.

Para agregar la política de configuración, presionamos sobre el símbolo “+”, en el cual se 
nos abrirá una pequeña modal.

#### 4.3.1 Cadena Colección de Datos

Tabla 2: Valores a ser configurados por cada colección

| **N°** |    **Colección**                | **Parámetro** |   **Valor Campo** **Vachar(Carácter)**  | **Valor Campo Entero** |
|--------|---------------------------------|---------------|-----------------------------------------|------------------------|
| 1      | ETIQUETA DE DESCUENTO           | FACTURA       | Descuento;descuento                     | 2                      |
| 2      | ETIQUETA EN IMPUESTOS BASE      |    FACTURA    | Subtotal;baseImpuesto                   | 3                      |
| 3      | ETIQUETA EN IMPUESTOS IVA       | FACTURA       | Iva;impuesto                            | 4                      |
| 4      | ETIQUETA EN IMPUESTOS  SUBTOTAL | FACTURA       | Subtotal Sin Impuestos;subtotal         | 1                      |
| 5      | ETIQUETA EN IMPUESTOS TOTAL     | FACTURA       | VALOR TOTAL;total                       | 10                     |
| 6      | ETIQUETA SERVICIO               | FACTURA       | Servicio 10%;servicio                   | 5                      |

#### 4.3.1.1 Aplicar Configuración

Buscamos la colección creada (izquierda) y la seleccionamos, a su vez en la en la parte 
derecha aparecerá el parámetro de configuración y lo seleccionamos.

Para configurar el nombre de la etiqueta y posición, en la opción **Varchar** se debe ingresar la descripción que se especifica en la Tabla 2 (campo varchar), seguidamente en la opción **Entero** debemos ingresar el número de posición para esa etiqueta el mismo que se especifica en la Tabla 2 (campo entero), finalmente **Guardar** la configuración aplicada.


![](img6.png)

Esta configuración se la debe aplicar para cada colección; los valores a ser configurados se los especifica en la Tabla 2.

Se debe tener muy en cuenta que la descripción de las etiquetas deben ser escritas tal y 
como se muestra en la tabla 2, <font color="FFFF00"> no debe contener espacios en blanco al inicio y final de toda 
la descripción, el carácter que se utiliza para separar las etiquetas en un punto y coma (;).</font> 

En el caso que se requiera cambiar el nombre de cualquier etiqueta para la factura o nota de 
crédito, unicamante debe ser modificada la primera descripción antes del punto y coma, a 
continuación, un ejemplo:

| **Etiqueta Actual**             | **Etiqueta Editada**               |
|---------------------------------|------------------------------------|
| Descuento;descuento             | Descuento Sin Impuesto;descuento   |
| Subtotal;baseImpuesto           | Subtota Con Impuesto;baseImpuesto  |
| Iva;impuesto                    | Iva;impuesto                       |
| Subtotal Sin Impuestos;subtotal | Subtotal Sin Impuestos;subtotal    |
| VALOR TOTAL;total               | TOTAL;total                        |
| Servicio 10%;servicio           | Servicio Sin Impuesto 10%;servicio |

 Si se desea alterar el orden o posición de las etiquetas deben actualizar el campo Entero, la visualización de dichas etiquetas tanto en la impresión de RIDES (factura y nota de crédito) como en la pantalla de facturación es en modo ascendente, es decir, de menor a mayor.

Al configurar todas las colecciones se debe tener lo siguiente:

![](img7.png)



## 5 Replicar

Como siguiente paso se debe realizar las respectiva replica de todas las configuraciones 
hacia la tienda.


## 6 Visualización de etiquetas



        Pantalla Facturación 

        ![](img8.png)
              
              
        Impresión Factura

        ![](img9.png)                         