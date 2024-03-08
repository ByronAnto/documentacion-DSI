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


