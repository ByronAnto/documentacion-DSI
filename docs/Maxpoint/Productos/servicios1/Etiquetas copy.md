# Habilitar Separación de Plus con Servicio 10%

## 1 ANTECEDENTES
Actualmente en el sistema MaxPoint punto de venta; no cuenta con servicio a la mesa del 
10%, por lo que se ve la necesidad de implementar esta funcionalidad tomando en cuenta 
que sí, en una factura existen productos con y sin servicio está debe ser separara, es decir, 
se crearán dos facturas una de productos con servicio y otra de productos sin servicio.

## 2 OBJETIVO

- Crear una política a nivel de restaurante para la separación de plus con servicio 
10% en una factura.


## 3 POLÍTICAS DE CONFIGURACIÓN

### 3.1 Datos Generales

En este manual se detalla cómo realizar la configuración de política a nivel de restaurante 
que permitirá activar el proceso para separar productos con servicio 10% en una factura:

- En azure debe estar creada y configurada la política a nivel de restaurante

SEPARAR PLUS CON SERVICIO DE LA FACTURA

### 3.2 Colección Restaurante

Ingresar al sistema MP backoffice con credenciales de administrador sistemas y seleccionar 
la cadena a la cual se realizará las configuraciones.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción 
**SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el 
botón Ir a Administración Políticas en el cual abrirá una nueva pestaña en el navegador.

<font color="FFFF00">**Nota:** Antes de crear las políticas de configuración debemos verificar que dichas 
colecciones no se encuentren creadas, de ser el caso validar que cada colección contenga 
los parámetros establecidos en este manual.</font> 

### 3.3

Tabla 1: Datos Colección Restaurante

| **N°** | Colección                                 | Parámetro  | Esp. Valor | Obligatorio | Tipo Dato |
|--------|-------------------------------------------|------------|------------|-------------|-----------|
| 1      | SEPARAR PLUS CON SERVICIO DE  LA FACTURA  | HABILITADO | SI         | SI          | Selección |

En la opción Restaurante presionar sobre el botón Nueva Colección en la cual se abrirá 
una modal para su creación e ingresar los siguientes datos:

**Colección:** Nombre de la colección que se especifica en la Tabla 1.

**Módulo:** Restaurante.

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar.**


  ![](img10.png)

### 3.4 Creación Parámetro de Colección

Una vez creada la colección se debe proceder a crear el parámetro de configuración y para 
ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** (derecha), 
en la cual se abrirá una modal para su creación.

 ![](img11.png)

 A continuación, se detalla los tipos de parámetros a ser creados:

**Parámetro:** Nombre del parámetro que se especifica en la Tabla 1.

**Tipo de Dato:** Selección.

**Especifica Valor:** SI

**Obligatorio:** SI

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar.**

  ![](img12.png)

  Una vez creado los parámetros de configuración se debe tener lo siguiente:

  ![](img13.png)

  ### 3.5 Restaurante Colección de Datos

  En el menú nos dirigimos a **RESTAURANTE** y seleccionamos la opción 
**RESTAURANTE**, seguidamente seleccionamos el restaurante al cual se habilitará la 
configuración.

 ![](img14.png)

 Con un doble click se abrirá una modal con la información del restaurante, seleccionamos 
la opción de la pestaña **Políticas de Configuración**.

 ![](img15.png)

 ### 3.6 Aplicar configuración

 Para habilitar la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá
una modal, seguidamente buscaremos la colección creada y la seleccionamos.

![](img16.png)


Aquí se debe configurar el **tipo de dato Selección a SI**, seguidamente presionar **Guardar**.

![](img17.png)


## 4 REPLICAR 

Como siguiente paso se debe realizar las respectiva replica de todas las configuraciones 
hacia la tienda.