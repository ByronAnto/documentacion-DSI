# Visualizar Cantidad de Productos con Precio 0.
## VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0.
## 1. ANTECEDENTES

Actualmente en el sistema MaxPoint al tomar una orden de pedido de productos con precio 
0 la cantidad no se visualiza, en ciertas tiendas tienen la necesidad de visualizar la cantidad 
de estos productos.

## 2. OBJETIVOS

 Mediante la configuración de una política a nivel de restaurante visualizar la cantidad de productos con precio 0.

## 3. POLÍTICAS DE CONFIGURACIÓN

**3.1 Datos Generales**

En este manual se detalla cómo realizar la configuración de política a nivel de restaurante 
que permitirá validar si visualizar o no la cantidad de productos con precio en 0, para este 
proceso se debe considerar lo siguiente

* En Azure debe estar creada la política de configuración **“VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0”** a nivel de restaurante.

* Deben estar creados los parámetros “**¿VISUALIZAR CANTIDAD?**” para la política.

* En Azure el restaurante debe estar configurada la colección VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0.

* Validar que dicha colección y configuración del restaurante se encuentre en la 
tienda.

**3.2 Colección Visualizar Cantidad de Productos con Precio 0.**

Ingresar al sistema MP backoffice con credenciales de administrador sistemas y seleccionar 
la cadena a la cual pertenece el restaurante a configurar.

Antes de configurar la colección **“VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0”** al restaurante, debemos verificar que dicha colección este creada, para ello en 
el menú que se encuentra en la parte izquierda no digerimos a la opción **SEGURIDADES**
y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a 
Administración Políticas** en el cual abrirá una nueva pestaña en el navegador

![Ejemplo de Visualizar Administracion Politicas Politicas](<Visualizar Administracion Politicas Politicas.png>)

En la pantalla de políticas seleccionamos la opción Restaurante y buscaremos la colección 
llamada **“VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0”**

![Ejemplo de Visualizar Administracion Politicas Restaurante Coleccion](<Visualizar Administracion Politicas Restaurante Coleccion.png>)

3.2.1 Creación de Colección

Si no existe la colección se la debe crear, en la opción **Restaurante** presionar sobre el 
botón **Nueva Colección** en la cual se abrirá una modal para su creación

![Ejemplo de Visualizar Restaurante Nueva Coleccion](<Visualizar Restaurante Nueva Coleccion.png>)

Para la creación de la colección se debe ingresar los siguientes datos:

**Colección:** VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0

**Módulo:** Restaurante

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

![Ejemplo de Visualizar Cantidad Productos Precio 0](<Visualizar Cantidad Productos Precio 0.png>)

3.2.2 Creación Parámetro de Colección

Una vez creada la colección se debe proceder a crear los parámetros de configuración
acorde a la operación o necesidad del restaurante a continuación se detallan los tipos de 
parámetros que puedes ser creados:

1. ¿VISUALIZAR CANTIDAD?

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación.

![Ejemplo de Visualizar Cantidad Productos Precio 0 Nuevo Parametro](<Visualizar Cantidad Productos Precio 0 Nuevo Parametro.png>)

**¿VISUALIZAR CANTIDAD? -** Este parámetro permitirá validar si el restaurante 
visualiza o no la cantidad de productos con precio en 0.

Para la creación del parámetro de configuración se debe ingresar los siguientes datos:

**Parámetro:** ¿VISUALIZAR CANTIDAD?

**Tipo de Dato:** Selección.

**Especifica Valor:** SI

**Obligatorio:** SI

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

![Ejemplo de Visualizar Visualizar Cantidad](<Visualizar Visualizar Cantidad.png>)

Una vez creado los parámetros de configuración se debe tener lo siguiente:

![Ejemplo de Visualizar Visualizar Cantidad Nuevo Parametro](<Visualizar Visualizar Cantidad Nuevo Parametro.png>)

**3.3 Restaurante Configuración de Colección**

Una vez que se verifico que exista o se creó la colección procedemos a realizar la 
configuración al restaurante.

En el menú nos dirigimos a **RESTAURANTE** y seleccionamos la opción. **RESTAURANTE**, seguidamente seleccionamos el restaurante al cual se realizará la configuración.

![Ejemplo de Visualizar RESTAURANTES A002 CCI](<Visualizar RESTAURANTES A002 CCI.png>)

Con un doble click se abrirá una modal con la información del restaurante, seleccionamos 
la opción de la pestaña **Políticas de Configuración**.

![Ejemplo de Visualizar A002 CCI Politicas Configuracion](<Visualizar A002 CCI Politicas Configuracion.png>)

Para agregar la política de configuración, presionamos sobre el símbolo “+”, en el cual se 
nos abrirá una pequeña modal.

Buscamos la colección **“VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0”** (izquierda) y la seleccionamos, a su vez en la en la parte derecha aparecerá la opción 
**“¿VISUALIZAR CANTIDAD?”** y la seleccionamos.

![Ejemplo de Visualizar VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0 y VISUALIZAR CANTIDAD](<Visualizar VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0 y VISUALIZAR CANTIDAD.png>)

Para configurar qué el restaurante muestre las órdenes de pedido en pantalla, en la opción 
**Selección** debe estar en **SI**, seguidamente presionar el botón **Guardar**. 

![Ejemplo de Visualizar VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0 y VISUALIZAR CANTIDAD SI](<Visualizar VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0 y VISUALIZAR CANTIDAD SI.png>)

Una vez ya configurada la colección al restaurante deberá aparecer de la siguiente manera, 
para salir presionar **Cancelar**

![Ejemplo de Visualizar A023 Quicentro Sur Plaza Panecillo](<Visualizar A023 Quicentro Sur Plaza Panecillo.png>)

3.3.1 Editar Política de configuración

Si se desea modificar seleccionamos la colección y presionar sobre el botón editar **“lápiz”**

![Ejemplo de Visualizar Modificar Seleccionamos Lapiz](<Visualizar Modificar Seleccionamos Lapiz.png>)

Aquí se podrá modificar el estado de la colección es decir de activo a inactivo o viceversa, 
a selección SI o NO según el caso, seguidamente presionar **Guardar**.

![Ejemplo de Visualizar VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0 Esta Archivo SI](<Visualizar VISUALIZAR CANTIDAD DE PRODUCTOS CON PRECIO 0 Esta Archivo SI.png>)

## 4. REPLICAR

Como siguiente paso se debe realizar las respectiva replica de todas las configuraciones hacia la tienda.

## 5. PRUEBAS 

5.1 Orden de pedido MaxPoint 

Con todas las configuraciones necesarias para la visualización de la cantidad de productos 
con precio en 0, desde el MaxPoint procedemos a realizar las respectivas pruebas, es decir 
con un periodo abierto y asignado un cajero digitamos ordenes de pedido con productos que 
tengan precio 0.

Ejemplo:

Tomaremos una mesa para ingresar un orden de pedido.

![Ejemplo de Visualizar Ingresar Orden Pedido](<Visualizar Ingresar Orden Pedido.png>)

Como ejemplo seleccionaremos el producto Desayuno de la Casa

![Ejemplo de Visualizar Ejemplo Producto Desayuno Casa](<Visualizar Ejemplo Producto Desayuno Casa.png>)

Este producto tiene preguntas sugeridas con respuestas cuyo precio en la mayoría de casos 
es de 0.

![Ejemplo de Visualizar Producto Preguntas sugeridas Respuestas Precio Mayoria Casos 0](<Visualizar Producto Preguntas sugeridas Respuestas Precio Mayoria Casos 0.png>)

En el listado de productos se puede observar que ahora se visualiza la cantidad de productos con precio 0 (la visualización dependerá de la configuración de la política).

![Ejemplo de Visualizar Cantidad Productos Visualizacion Dependera Configuracion](<Visualizar Cantidad Productos Visualizacion Dependera Configuracion.png>)

En la impresión de la orden de pedido será igual, es decir debe visualizarse la cantidad de 
producto, el producto principal estará marcado con negrilla.

![Ejemplo de Visualizar Impresion Orden Pedido](<Visualizar Impresion Orden Pedido.png>)