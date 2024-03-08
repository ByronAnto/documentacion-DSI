# URL GO TRADE
## 1. ANTECEDENTES

Actualmente en ciertas marcas existe una promoción llamada Go Trade (promoción por encuesta), la misma se visualiza al final de la factura con su link para ingresar a su respectiva página de la encuesta.

Es necesario que dicho link sea configurable mediante una política a nivel de cadena.

## 2. OBJETIVOS

Configurar el link de la página web de encuesta para Go Trade mediante una colección a nivel de cadena.

## 3. CONFIGURACIÓN

3.1 Datos Generales

En este manual se detalla cómo realizar la configuración del link de la página de encuesta para Go Trade:

* Crear una política a nivel de Cadena.

+ La política debe ser llamada *+GO TRADE**.

* El parámetro de dicha política debe ser llamado **URL**

* Tipo de dato: **Carácter**

* Especifica valor: **SI**

* Obligatorio: **SI**

* Atar la colección a la cadena.

<font color="#ffff83">**Nota:** Esta configuración se la debe realizar en Azure y luego replicar hacia la tienda.</font>

3.2 Colección Go Trade.

Ingresar al sistema MAXPOINT BackOffice con credenciales de administrador y seleccionar 
la cadena a la cual se realizará la configuración.

Antes de configurar la colección **GO TRADE**, debemos verificar que dicha colección este 
creada, para ello en el menú que se encuentra en la parte izquierda no digerimos a la 
opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.
3
En la pantalla de políticas seleccionamos la opción **Cadena** y buscaremos la colección 
llamada **GO TRADE**, si no existe dicha colección debe ser creada.

![Ejemplo de 1.Administarcion de Politicas-Nueva Coleccion](<1.Administarcion de Politicas-Nueva Coleccion.png>)

3.2.1 Creación de Colección

En la opción Cadena presionar sobre el botón Nueva Colección en la cual se abrirá una 
modal para su creación.

![Ejemplo de 1.Creacion de Coleccion](<1.Creacion de Coleccion.png>)

Para la creación de la colección se debe ingresar los siguientes datos:

**Nombre Colección:** GO TRADE

**Módulo:** Restaurante

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![Ejemplo de 1.Coleccion GO TRADE](<1.Coleccion GO TRADE.png>)

3.2.2 Creación Parámetro de Colección

Una vez creada la colección se debe proceder a crear los parámetros de configuración a 
continuación se detallan el tipo de parámetro a ser creado:

1. URL

**URL.** - Este parámetro permitirá ingresar la dirección (link) de la página de la encuesta de Go Trade.

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación.

![Ejemplo de 1.Coleccion de Datos Cadena](<1.Coleccion de Datos Cadena.png>)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos:

**Parámetro:** URL

**Tipo de Dato:** Carácter

**Especifica Valor:** SI

**Obligatorio:** SI

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![Ejemplo de 1.Parametro URL](<1.Parametro URL.png>)

Una vez creado los parámetros necesarios de configuración se debe tener lo siguiente:

![Ejemplo de 1.Confi-Nuevo Parametro](<1.Confi-Nuevo Parametro.png>)

3.3 Cadena Configuración de Colección

Una vez que se verifico que exista o se creó la colección **GO TRADE** procedemos a realizar la 
configuración a la cadena.

A continuación, un ejemplo:

En el menú nos dirigimos a **CADENA** y seleccionamos la opción **CADENA**, a su derecha se desplegará una pantalla en la cual debemos seleccionar la pestaña **Políticas de Configuración**.

![Ejemplo de 1.Cadena Configuracion de Coleccion](<1.Cadena Configuracion de Coleccion.png>)

Para agregar la política de configuración **GO TRADE**, presionamos sobre el símbolo “+”, en 
el cual se nos abrirá una pequeña modal.
Buscamos la colección **GO TRADE** (izquierda) y la seleccionamos, a su vez en la en la parte 
derecha aparecerá la opción **“URL”** y la seleccionamos.

![Ejemplo de 1.Politica de configuracion GO TRADE](<1.Politica de configuracion GO TRADE.png>)

Para configurar el link de la página web de encuesta debemos ingresar en el campo varchar el link de dicha página, seguidamente presionar el botón **Guardar**. 

![Ejemplo de 1.Configurar link pagina web](<1.Configurar link pagina web.png>)

Una vez ya configurada la colección a la cadena deberá aparecer de la siguiente manera.

![Ejemplo de 1.Pagina mostrar de Coleccion](<1.Pagina mostrar de Coleccion.png>)

Si se desea modificar seleccionamos la colección y presionar sobre el botón editar.

![Ejemplo de 1.Boton Editar](<1.Boton Editar.png>)

Aquí se podrá modificar el estado de la colección es decir de activo a inactivo o viceversa, así como 
también cambiar la dirección de la página web de la encuesta según el caso, seguidamente 
presionar **Guardar**.

![Ejemplo de 1.Estado Activo Inactivo-Guardar](<1.Estado Activo Inactivo-Guardar.png>)

3.4 Replicar

Como último paso realizar la respectiva réplica de la configuración aplicada en Azure hacia la tienda.

3.5 Pruebas

Realizar las respectivas pruebas en el punto de venta.