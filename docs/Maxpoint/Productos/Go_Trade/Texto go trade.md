# TEXTO GO TRADE
## 1. ANTECEDENTES

En el sistema MAXPOINT actualmente en ciertas cadenas existe una configuración llamada Go 
Trade la misma que se imprime al final de la factura. 

## 2. OBJETIVOS

* Configuración del texto Go Trade mediante política a nivel de cadena.

## 3. PROCEDIMIENTO

3.1 Datos Generales

En este manual se detalla cómo realizar la configuración para aplicar productos al peso:

* Crear una política a nivel de Cadena.

* La política debe ser llamada **GO TRADE**.

* Crear 2 parámetros para dicha política los 
mismo que deben ser llamados:

     o **Título**

     o **Texto**

* Tipo de dato: **Carácter** (para los 2 parámetros)

* Especifica valor: **SI**

* Obligatorio: **SI**

* Atar los 2 parámetros de colección a la cadena.

<font color="#ffff83">**Nota:** Esta configuración se la debe realizar en Azure y luego replicar hacia la tienda.</font>

3.2 Colección Go Trade.

Ingresar al sistema MAXPOINT BackOffice con credenciales de administrador y seleccionar 
la cadena a la cual pertenece el restaurante a configurar.

Antes de configurar la colección **GO TRADE** a la cadena, primero debemos verificar que 
dicha colección este creada, para ello en el menú que se encuentra en la parte izquierda
no digerimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente 
presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva 
pestaña en el navegador.

En la pantalla de políticas seleccionamos la opción **Cadena** y buscaremos la colección 
llamada **GO TRADE**, si no existe dicha colección debe ser creada.

![Ejemplo de 1.Seleccionar Cadena GO TRADE](<1.Seleccionar Cadena GO TRADE.png>)

3.2.1 Creación de Colección

En la opción Cadena presionar sobre el botón Nueva Colección en la cual se abrirá una
modal para su creación.

![Ejemplo de 1.Opcion Cadena presionar](<1.Opcion Cadena presionar.png>)

Para la creación de la colección se debe ingresar los siguientes datos:

**Nombre Colección:** GO TRADE

**Módulo:** Restaurante

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**

![Ejemplo de 1.Guardar Coleccion GO TRADE](<1.Guardar Coleccion GO TRADE.png>)

3.2.2 Creación Parámetro de Colección

Una vez creada la colección se debe proceder a crear los parámetros de configuración a 
continuación se detallan el tipo de parámetro a ser creados:
1. Titulo
2. Texto

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación

![Ejemplo de 1.Crear parametros Titulo-Texto](<1.Crear parametros Titulo-Texto.png>)

**Titulo.** - Este parámetro permite ingresar una descripción principal de Go Trade. 

**Parámetro:** Titulo

**Tipo de Dato:** Carácter.

**Especifica Valor:** SI

**Obligatorio:** SI

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![Ejemplo de 1.Guardar Parametro Titulo](<1.Guardar Parametro Titulo.png>)

**Texto.** - Este parámetro permite ingresar una descripción del contenido de Go Trade. 

**Parámetro:** Texto

**Tipo de Dato:** Carácter.

**Especifica Valor:** SI

**Obligatorio:** SI

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![Ejemplo de 1.Guardar Parametro Texto](<1.Guardar Parametro Texto.png>)

Una vez creado los parámetros necesarios de configuración se debe tener lo siguiente:

![Ejemplo de 1.Respuesta Parametros Creados](<1.Respuesta Parametros Creados.png>)

3.3 Configuración de Cadena

Una vez que se verifico que exista o se creó la colección **GO TRADE** procedemos a realizar la 
configuración a la respectiva cadena.

A continuación, un ejemplo:

En el menú nos dirigimos a **CADENA** y seleccionamos la opción **CADENA**, a su derecha se desplegará una pantalla en la cual debemos seleccionar la pestaña Políticas de Configuración.

![Ejemplo de 1.Menu Dirigirse Cadena-Cadena](<1.Menu Dirigirse Cadena-Cadena.png>)

Para agregar la política de configuración **GO TRADE**, presionamos sobre el símbolo “+”, en 
el cual se nos abrirá una pequeña modal.

Buscamos la colección **GO TRADE** (izquierda) y la seleccionamos, a su vez en la en la parte 
derecha aparecerá la opción “**Titulo**” y la seleccionamos.

![Ejemplo de 1.GO TRADE izquierda-Titulo](<1.GO TRADE izquierda-Titulo.png>)

Para configurar el título de Go Trade debemos ingresar en el campo varchar su principal 
descripción, seguidamente presionar el botón Guardar.

![Ejemplo de 1.Campo Varchar-Boton Guardar](<1.Campo Varchar-Boton Guardar.png>)

Buscamos la colección GO TRADE (izquierda) y la seleccionamos, a su vez en la en la parte 
derecha aparecerá la opción “Texto” y la seleccionamos.

![Ejemplo de 1.GO TRADE izquierda-Texto](<1.GO TRADE izquierda-Texto.png>)

Para configurar el texto, debemos ingresar en el campo varchar el contenido de Go Trade, 
seguidamente presionar el botón Guardar.

![Ejemplo de 1.GO TRADE Varchan-Llenar-Encuesta](<1.GO TRADE Varchan-Llenar-Encuesta.png>)

Una vez ya configurada la colección a la cadena deberá aparecer de la siguiente manera.

![Ejemplo de 1.Luego configuracion GO TRADE](<1.Luego configuracion GO TRADE.png>)

Si se desea modificar seleccionamos la colección y presionar sobre el botón editar.

![Ejemplo de 1.Desea Modificar](<1.Desea Modificar.png>)

Aquí se podrá modificar el estado de la colección es decir de activo a inactivo o viceversa, así como también cambiar la dirección de la página web de la encuesta según el caso, seguidamente presionar **Guardar**.

![Ejemplo de 1.Estado activo a inactivo-GO TRADE](<1.Estado activo a inactivo-GO TRADE.png>)

3.4 Replicar

Como último paso realizar la respectiva réplica de la configuración aplicada en Azure hacia la 
tienda.

3.5 Pruebas

Realizar las respectivas pruebas en el punto de venta.