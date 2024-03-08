# Manual de Usuario Fidelización BACKEND.
# MANUAL PARA USUARIO DE FIDELIZACIÓN EN MAXPOINT BACKEND
## 1. DESCRIPCIÓN 

Este manual se ha desarrollado para detallar el proceso de configuración de una marca al 
proceso de fidelización de clientes.

## 2. PROCEDIMIENTO 

**2.1 Configuración de políticas por cadena**

Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS.

![Ejemplo de BACKEND SEGURIDADES POLITICAS](<BACKEND SEGURIDADES POLITICAS.png>)

Damos clic en “Ir a Administración Políticas”.

![Ejemplo de BACKEND Administracion Politicas](<BACKEND Administracion Politicas.png>)

Nos ubicamos en las políticas por “Cadena”, y damos clic en botón “Nueva Colección”.

![Ejemplo de BACKEND Cadena Nueva Coleccion](<BACKEND Cadena Nueva Coleccion.png>)

En descripción colocamos “CONFIGURACION FIDELIZACION CLIENTES” y en observaciones 
colocamos “COLECCION PARA LA PARAMETRIZACION DEL PROYECTO DE FIDELIZACIÓN DE 
CLIENTES DE JUAN VALDEZ”.

![Ejemplo de BACKEND CONFIGURACION FIDELIZACION CLIENTES](<CONFIGURACION FIDELIZACION CLIENTES.png>)

La política creada se muestra de la siguiente manera.

![Ejemplo de BACKEND CONFIGURACION FIDELIZACION CLIENTES Verde](<BACKEND CONFIGURACION FIDELIZACION CLIENTES Verde.png>)

Una vez creada la política la seleccionamos y damos clic en el botón “Nuevo Parámetro” y 
creamos los que se muestran a continuación en la siguiente tabla.

| PARAMETRO APLICA |CONFIGURACION |
|---|---|
| APLICA CONFIGURACION | Selección |  
| APP | Selección |
| AUTOCONSUMO RAZON SOCIAL | Carácter |
| AUTOCONSUMO RUC | Carácter |
| BIENVENIDA | Carácter |
| DESPEDIDA | Carácter |
| FORMATO RIDE | Carácter |
| FORMATO VOUCHER | Carácter |
| INTERFACE RAZON SOCIAL | Carácter |
| INTERFACE RUC | Carácter |
| NOMBRE PLAN | Carácter |
| PREGUNTA REGISTRO | Carácter |
| SEGURIDAD | Carácter |
| TITULO RIDE | Carácter |
| TITULO VOUCHER | Carácter |
| URL WEB | Carácter |
---

Como resultado los parámetros de la política “CONFIGURACION FIDELIZACION CLIENTES” 
quedarían de la siguiente forma.

![Ejemplo de BACKEND Nuevo Parametro APLICA CONFIGURACION](<BACKEND Nuevo Parametro APLICA CONFIGURACION.png>)

**2.2 Configuración de las políticas para las url de los servicios Web.** 

Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS

![Ejemplo de BACKEND SEGURIDADES POLITICAS 2 2](<BACKEND SEGURIDADES POLITICAS 2 2.png>)

Damos clic en “Ir a Administración Políticas”

![Ejemplo de BACKEND Administracion Politicas](<BACKEND Administracion Politicas.png>)

Nos ubicamos en las políticas por “Cadena” y damos clic en botón “Nueva Colección”

![Ejemplo de BACKEND Cadena Nueva Coleccion](<BACKEND Cadena Nueva Coleccion.png>)

En descripción colocamos “WS SERVIDOR” Colocando como observaciones “Indica el ambiente 
al cual se conectarán y realizarán peticiones los servicios web”

![Ejemplo de BACKEND Coleccion WS SERVIDOR](<BACKEND Coleccion WS SERVIDOR.png>)

Una vez creada la política la seleccionamos y damos clic en el botón “Nuevo Parámetro” y 
creamos los especificados en la tabla siguiente.

| PARAMETRO | APLICA CONFIGURACION | 
|---|---|
| FIREBASE PRODUCCION | Carácter |  |  |  |  |  |
| FIREBASE PRUEBAS | Carácter |  |  |  |  |  |
---

Como resultado los parámetros de la política “WS SERVIDOR” quedarían de la siguiente forma

![Ejemplo de BACKEND Cheks WS SERVIDOR](<BACKEND Cheks WS SERVIDOR.png>)

Luego configuraremos la política por cadena “WS RUTA SERVICIO” Colocando como 
observaciones “Rutas (url) de dirección del servicio Web.”

![Ejemplo de BACKEND WS RUTA SERVICIO](<BACKEND WS RUTA SERVICIO.png>)

Una vez creada la política la seleccionamos y damos clic en el botón “Nuevo Parámetro” y 
creamos los parámetros especificados en la siguiente tabla.

| PARAMETRO | APLICA CONFIGURACION |
|---|---|
| FIREBASE PREREGISTRO Carácter |
| FIREBASE CONSULTA | Carácter |
| FIREBASE DAR BAJA A TRANSACCION | Carácter |
| FIREBASE ESTADOCLIENTE | Carácter |
| FIREBASE CANJEPUNTOS | Carácter |
| FIREBASE REGISTRO TRANSACCION | Carácter |
---

Como resultado los parámetros de la política “WS RUTA SERVICIO” quedarían de la siguiente 
forma.

![Ejemplo de BACKEND NUEVO PARAMETRO CHEKS 6 Items](<BACKEND NUEVO PARAMETRO CHEKS 6 Items.png>)

Luego configuraremos la política **“FORMAS DE PAGO NO APLICANTES EN FIDELIZACION”** en las 
cuales se determinarán las formas de pago que **NO** acumularán puntos en caso de ser usadas en 
una transacción.
Para ello nos ubicamos en las políticas por “Cadena”, y damos clic en botón “Nueva Colección” 
agregamos la colección “FORMAS DE PAGO NO APLICANTES EN FIDELIZACION” colocando como 
Observaciones: “Indica que con que formas de pagos no se acumularán puntos en una 
transacción” donde nos quedará como resultado de la siguiente manera.

![Ejemplo de BACKEND FORMAS DE PAGO NO APLICANTES EN FIDELIZACION](<BACKEND FORMAS DE PAGO NO APLICANTES EN FIDELIZACION.png>)

Una vez creada la política la seleccionamos y damos clic en el botón “Nuevo Parámetro” donde 
los parámetros que se creen serán las formas de pagos que, en caso de ser usadas en una 
transacción, no acumulara puntos. La tabla y figura siguiente muestra un ejemplo de 
configuración.

| PARAMETRO | APLICA CONFIGURACION | 
|---|---|
| DINERS CLUB | Integración | 
---

![Ejemplo de BACKEND PARAMETRO DINERS CLUB](<BACKEND PARAMETRO DINERS CLUB.png>)

**2.3 Configuración de políticas por restaurante**

Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS para 
realizar la respectiva configuración.

Damos clic en “Ir a Administración Políticas” Nos ubicamos en las políticas por “Restaurante”, y 
damos clic en botón “Nueva Colección”. Y creamos la colección **“CONFIGURACION 
FIDELIZACION CLIENTES”** y colocamos como Observaciones “Configura un restaurante para el 
proceso de fidelización de clientes” como resultado nos debe quedar de la siguiente manera.

![Ejemplo de BACKEND CONFIGURACION FIDELIZACION CLIENTES](<BACKEND CONFIGURACION FIDELIZACION CLIENTES.png>)

Una vez creada la política, la seleccionamos y damos clic en el botón “Nuevo Parámetro” y
creamos los siguientes mostrados en la tabla a continuación. 

| PARAMETRO | APLICA CONFIGURACION |
|---|---|
| APLICA PLAN | Selección | 
| IMPRIMIR PUNTOS EN RIDE | Selección | 
---

Una vez configurados los parámetros quedará de la siguiente manera.

![Ejemplo de BACKEND Aplicar Plan celeste](<BACKEND Aplicar Plan celeste.png>)

**2.4 Configuración de políticas por producto**

Ahora nos ubicamos en las políticas de “Plus” y presionamos el botón “Nueva Colección”.

![Ejemplo de BACKEND Administracion Politicas PLUS](<BACKEND Administracion Politicas PLUS.png>)

En descripción colocamos “CONFIGURACION FIDELIZACION CLIENTES” y en observaciones 
colocamos “COLECCIÓN PARA LA CONFIGURACIÓN DE PARAMETROS DE PRODUCTOS 
(PUNTOS).”.

![Ejemplo de BACKEND CONFIGURACION FIDELIZACION CLIENTES SI](<BACKEND CONFIGURACION FIDELIZACION CLIENTES SI.png>)
![aEjemplo de BACKEND BACKEND CONFIGURACION FIDELIZACION CLIENTES SI Verde](<BACKEND BACKEND CONFIGURACION FIDELIZACION CLIENTES SI Verde.png>)

Una vez creada la política la seleccionamos y damos clic en el botón “Nuevo Parámetro”.

![Ejemplo de BACKEND Parametro Aplica Plan](<BACKEND Parametro Aplica Plan.png>)

Creamos los parámetros siguientes:

| PARAMETROS | TIPO DE DATOS |
|---|---|
| APLICA PLAN | Selección |  
| VALORACION PUNTOS | Entero | 
---

![Ejemplo de BACKEND APLICA PLAN VALORACION PUNTOS](<BACKEND APLICA PLAN VALORACION PUNTOS.png>)

**2.5 Activación de políticas por cadena**

Las políticas por cadena “WS SERVIDOR”, “WS RUTA SERVICIO” y “FORMAS DE PAGO NO 
APLICANTES EN FIDELIZACION” se deben configurar desde la pantalla cadena.

![Ejemplo de BACKEND Cadena Borr](<BACKEND Cadena Borr.png>)

Luego le damos clic a “Políticas de Configuración” 

![Ejemplo de BACKEND Cadena Configuracion Figura 1](<BACKEND Cadena Configuracion Figura 1.png>)

En donde las configuraciones de los parámetros para las políticas quedaran de la siguiente 
manera:

**WS SERVIDOR**

Parámetro “FIREBASE PRUEBAS” Colocamos la dirección del servidor de FIREBASE en el campo carácter, la dirección del servidor de pruebas es la siguiente: us-central1-juan-valdez-development.cloudfunctions.net

![Ejemplo de BACKEND WS SERVIDOR FIREBASE PRUEBAS](<BACKEND WS SERVIDOR FIREBASE PRUEBAS.png>)

Parámetro “FIREBASE PRODUCCION” Colocamos la dirección del servidor de FIREBASE en el 
campo carácter, la dirección del servidor de pruebas es la siguiente: us-central1-juan-valdez-development.cloudfunctions.net

![Ejemplo de BACKEND WS SERVIDOR FIREBASE PRODUCCION](<BACKEND WS SERVIDOR FIREBASE PRODUCCION.png>)

**WS RUTA SERVICIO**

Con sus parámetros:

| PARAMETRO | VALOR (Carácter) | 
|---|---|
| FIREBASE CANJEPUNTOS | /api-points/exchange | 
| FIREBASE CONSULTA | /api-user/document/ | 
| FIREBASE DAR BAJA A TRANSACCION | /api-order/reverse | 
| FIREBASE ESTADOCLIENTE | /api-user/document/ | 
| FIREBASE PREREGISTRO | /api-user/preRegisteredUsers | 
| FIREBASE REGISTRO TRANSACCION | /api-order/ | 
---

Una vez configurados correctamente quedarán de la siguiente manera.

![Ejemplo de BACKEND Configurados Correctamente Cheks](<BACKEND Configurados Correctamente Cheks.png>)

2.5.1 Pestaña de configuración de Cadena 

En la pestaña “Cadena” se hacen varias configuraciones a nivel general para el funcionamiento del plan de fidelización.

|     **Etiqueta**    |     **Descripción**    |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|
|     Nombre del Plan    |     Nombre general del plan    |  |  |  |  |  |  |
|     Bienvenida    |     Texto de bienvenida, con   respuesta SI y NO    |  |  |  |  |  |  |
|     Pregunta    |     Pregunta para registro en   el plan    |  |  |  |  |  |  |
|     Despedida    |     Texto de despedida, con   respuesta OK    |  |  |  |  |  |  |
|     Url página web    |     url donde está alojada la   web    |  |  |  |  |  |  |
|     Nombre AppMovil    |     Nombre de la app en   playstore y appstore    |  |  |  |  |  |  |
|     **Autoconsumo**    |  |  |  |  |  |  |  |
|     RUC    |     Ruc para el proceso de   autoconsumo    |  |  |  |  |  |  |
|     Razón Social    |     Razón social de la empresa    |  |  |  |  |  |  |
|     Interface razón social    |     Razón social de la empresa   que se subirá a gerente     |  |  |  |  |  |  |
|     Interface ruc    |     Ruc para el proceso de   autoconsumo que se mostrará en gerente    |  |  |  |  |  |  |
|     **Impresiones**    |  |  |  |  |  |  |  |
|     Título voucher    |     Título en voucher para   plan amigos    |  |  |  |  |  |  |
|     Formato de voucher    |     Texto a presentar en el   voucher {0}.    |  |  |  |  |  |  |
|     Título RIDE    |     Título a presentarse en el   RIDE    |  |  |  |  |  |  |
|     Formato RIDE    |     Texto a presentarse en el   RIDE es importante colocar este símbolo “{0}” porque esto reemplazará a los   puntos que se acumulen por transacción.    |  |  |  |  |  |  |
---

A continuación, se presenta un ejemplo de la configuración del plan de fidelización. Para editar cualquier campo del formulario se debe presionar el botón “Editar”.

![Ejemplo de BACKEND Fidelizacion](<BACKEND Fidelizacion.png>)

2.5.2	Pestaña de configuración de Restaurante

En la pestaña de Restaurantes, se configuran lo restaurante que aplicarán al plan para el proceso de redención de puntos.

![Ejemplo de BACKEND Fidelizacion Cadena Productos](<BACKEND Fidelizacion Cadena Productos.png>)

Completar el formulario con los respectivos campos. La opción **“Aplica Plan”** es la condición para identificar si un restaurante puede o no redimir puntos a sus clientes, **“Imprimir puntos en Ride”** indica si la factura impresa mostrará los puntos acumulados en una transacción. Los campos Latitud y Longitud es parte de la app, estos últimos campos son opcionales de configurar. 

![Ejemplo de BACKEND V030 BELMONTE](<BACKEND V030 BELMONTE.png>)

2.5.3	Pestaña de configuración de Productos

En esta pestaña se configuran varias opciones por productos. Para modificar un restaurante se debe hacer doble clic sobre la fila que deseamos editar.

![Ejemplo de BACKEND Fidelizacion Productos records](<BACKEND Fidelizacion Productos records.png>)

Las opciones que podemos modificar son el “Puntos” y la descripción en caso de ser un combo, o necesitar enviar una comunicación al cliente sobre un producto.

![Ejemplo de BACKEND 130 ESPRESO SIMPLE](<BACKEND 130 ESPRESO SIMPLE.png>)

El campo orden es referencias para identificar el orden que se asignó a ese botón.

2.5.4	Pestaña de configuración de formas de pago

Dentro de esta pestaña se puede configurar las formas de pagos las cuales al ser usadas en una transacción (facturación) harán que la misma no genere acumulación de puntos, Bastará con seleccionar una de las formas de pago del listado haciendo doble clic y activar   la opción de activar restricción.

![Ejemplo de BACKEND Configuracion General TEST PRUEBA](<BACKEND Configuracion General TEST PRUEBA.png>)


![Ejemplo de BACKEND Forma Pago TEST PRUEBA](<BACKEND Forma Pago TEST PRUEBA.png>)

**2.6	Configuración botón forma de pago**

Esta configuración la realizamos desde el back office del sistema, en el menú **General > Formas de pago > Definición**

![Ejemplo de BACKEND Forma Pago Definicion](<BACKEND Forma Pago Definicion.png>)

Dentro de esta pantalla creamos una nueva forma de pago haciendo uso del botón **Nuevo** ubicado en la parte superior derecha. La configuración de la nueva forma de pago quedará como la tabla mostrada a continuación.

|     Descripción    |     FIDELIZACION    |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|
|     Tipo Medios de pago    |     CREDITO EMPLEADO    |  |  |  |  |  |  |
|     Adquiriente    |     DATAFAST    |  |  |  |  |  |  |
|     Código Respuesta DLL Gerente    |     CREDITO SC    |  |  |  |  |  |  |
|     Tipo Facturación    |     PLAN MARKET    |  |  |  |  |  |  |
|     Permite Depositar, Porcentaje Propina, Apertura Cajón, Imprime Boucher,   Permite propina, Es Moneda, Si autoriza la venta se aplica, Permite Deslizar.    |     NO    |  |  |  |  |  |  |
|     Cargar Imagen    |     Seleccionar una imagen.    |  |  |  |  |  |  |
---

La configuración se visualizará de la siguiente manera. 

![Ejemplo de BACKEND Nueva Forma Pago](<BACKEND Nueva Forma Pago.png>)

Luego procedemos a seleccionar las tiendas a la cuales vamos a aplicar la forma de pago, para este ejemplo se seleccionará la tienda V030.

|     Descripción    |     Dato    |     Campo entero    |     Campo Varchar    |     Campo Selección    |  |  |  |
|---|---|---|---|---|---|---|---|
|     FACTURACION ELECTRONICA    |     CODIGO FIDELIZACION    |     1    |     SIN S.F.    |          |  |  |  |
|     REQUIERE AUTORIZACION    |     SE SOLICITA PARA APLICAR PAGO?    |          |          |     SI    |  |  |  |
|     VISUALIZAR FORMA DE PAGO    |     SE MUESTRA EN EL PUNTO DE VENTA?    |          |          |     SI    |  |  |  |
---

Finalizada la configuración quedara de la siguiente manera.

![Ejemplo de BACKEND Forma Pago Coleccion Datos](<BACKEND Forma Pago Coleccion Datos.png>)

2.7	Pantalla Logs Fidelización

La pantalla de Logs servirá para visualizar transacciones de fidelización que por algún motivo no se hayan completado correctamente, permitiendo reenviar (reprocesar) la transacción para que esta se ejecute correctamente.  

Primero debemos crear la pantalla en el back office de MaxPoint en el menú Seguridades > Pantallas.

![Ejemplo de BACKEND Seguridades Pantallas](<BACKEND Seguridades Pantallas.png>)

Damos clic en **Nuevo** y la configuramos de la siguiente manera.

![Ejemplo de BACKEND Logs Fidelizacion](<BACKEND Logs Fidelizacion.png>)

Y en la pestaña accesos Pantalla seleccionamos la opción Todo.

![Ejemplo de BACKEND Logs Fidelizacion Todo](<BACKEND Logs Fidelizacion Todo.png>)

Esta pantalla contiene 3 secciones Transacciones error, Notas de Crédito Error y Logs Módulo.

2.7.1	  Transacciones Error

Ocurren cuando existe un problema al canjear los puntos o enviar la transacción de facturación para la respectiva acumulación de los mismos. Se puede reintentar el envío de la transacción mediante esta pantalla que la encontramos dentro del menú Cadena> Logs Fidelización en la pestaña Transacciones Error.

![Ejemplo de BACKEND Cadena Fidelizacion](<BACKEND Cadena Fidelizacion.png>)

Establecemos un rango de fechas para cargar el periodo en el que queremos reenviar una transacción con error y le damos en el botón cargar, la cual mostrara en una tabla en la parte de abajo un listado con las transacciones con error en ese periodo, haciendo posible el reenvío de las mismas haciendo clic sobre la opción enviar de la tabla y finalmente dar clic en OK.


![Ejemplo de BACKEND Rango de Fechas](<BACKEND Rango de Fechas.png>)

2.7.2	  Notas de Crédito Error

Esta pestaña permite el reenvío de las notas de crédito (NC) que no se hayan finalizado correctamente.

Seleccionamos el rango de fecha para localizar el periodo dentro del cual está la nota de crédito con error y seleccionamos el periodo para que esta selección muestre el listado de las NC con errores y poderlas reenviar. 


![Ejemplo de BACKEND Rango de Fechas 2](<BACKEND Rango de Fechas 2.png>)

2.7.3	 Logs Módulo

Esta pestaña permite visualizar todas las acciones realizadas por el usuario respecto a fidelización (reenvío de transacciones, canjes de puntos, notas de crédito)

![Ejemplo de BACKEND Visualizar Todo Logs Modulo](<BACKEND Visualizar Todo Logs Modulo.png>)

**2.8	Configuración de MENU PUNTOS**

Una vez configuradas las políticas y parámetros respectivos para cada una, debemos dirigirnos al módulo de “PRODUCTOS”, y damos clic en la pantalla “PAGINA DE MENU”. 

![Ejemplo de BACKEND PRODUCTOS PAGINA DE MENU](<BACKEND PRODUCTOS PAGINA DE MENU.png>)

Presionamos el botón **“Nuevo”** para crear un nuevo menú.
 
El menú que debemos crear será “MENU PUNTOS”, este menú debe ser único, porque es utilizado en varios procesos del sistema.

![Ejemplo de BACKEND MENU PUNTOS](<BACKEND MENU PUNTOS.png>)

Una vez creado el menú nos aparecerá en la tabla general.

![Ejemplo de BACKEND MENU PUNTOS Verde](<BACKEND MENU PUNTOS Verde.png>)

**2.9	Configuración de CATEGORIAS**

Una vez creado el menú debemos crear las categorías de los productos que se van a publicar para el proyecto de fidelización.

![Ejemplo de BACKEND PRODUCTOS CATEGORIAS](<BACKEND PRODUCTOS CATEGORIAS.png>)

Presionamos el botón **“Nuevo”** para crear una nueva CATEGORIA.
 
En el formulario que aparece, completamos la información y damos clic al botón “Aceptar”.

![Ejemplo de BACKEND Expresos](<BACKEND Expresos.png>)

En la tabla general aparecerá las categorías que creemos.

![Ejemplo de BACKEND Expresos Verde](<BACKEND Expresos Verde.png>)

**2.10	Configuración de BOTONES**

Nos dirigimos al módulo de PRODUCTOS y damos clic en la pantalla BOTONES.

![Ejemplo de BACKEND PRODUCTOS BOTONES](<BACKEND PRODUCTOS BOTONES.png>)

Presionamos el botón  **“Nuevo”** para crear un botón de un producto específico.
 
Completamos la información del formulario.

![Ejemplo de BACKEND ESPRESO SIMPLE Boton](<BACKEND ESPRESO SIMPLE Boton.png>)

Asignamos los locales que deseamos que aparezca este botón.

![Ejemplo de BACKEND ESPRESO SIMPLE Tiendas Aplicar](<BACKEND ESPRESO SIMPLE Tiendas Aplicar.png>)

2.11	Configuración de Menú para visualización en web y app

Nos dirigimos al módulo “PRODUCTOS” y damos clic en la opción “MENÚ”.

![Ejemplo de BACKEND PRODUCTOS MENU](<BACKEND PRODUCTOS MENU.png>)

Luego seleccionamos el menú anteriormente creado “MENU PUNTOS”.

![Ejemplo de BACKEND MENU PRODUCTOS](<BACKEND MENU PRODUCTOS.png>)

En la pestaña de Categorías, seleccionamos las categorías que se hayan creado anteriormente y mediante arrastrar y soltar, las colocamos en el área de categorías.

![Ejemplo de BACKEND Categorias EX](<BACKEND Categorias EX.png>)

Dependiente de el orden que se coloquen aparecerán las aplicaciones web y app.

![Ejemplo de BACKEND EXPRESOS Celdas](<BACKEND EXPRESOS Celdas.png>)

En la pestaña de productos, se deben buscar los productos que se quieran agregara dentro de una categoría. Para agregar un producto dentro de una categoría se debe dar clic sobre la categoría y luego seleccionar el productor y soltarlo en el espacio donde deseamos que se muestre.

![Ejemplo de BACKEND Productos Celdas Colores](<BACKEND Productos Celdas Colores.png>)

Dependiendo como se ordenen los productos en estas áreas, aparecerán en orden en la app y web.

![Ejemplo de BACKEND ESPRESO SIMPLE Celdas Llenas](<BACKEND ESPRESO SIMPLE Celdas Llenas.png>)

2.12	Pantalla de configuración de fidelización

Nos dirigimos al módulo “CADENA” y damos clic en la pantalla “FIDELIZACIÓN”.

![Ejemplo de BACKEND CADENA FIDELIZACION 12](<BACKEND CADENA FIDELIZACION 12.png>)

Esta pantalla consta de tres pestañas principales “Cadena”, “Restaurantes” y “Productos”, donde se realizan varias configuraciones por cada módulo para el correcto funcionamiento del proceso.

## 3.	RECOMENDACIONES

Una vez terminado el proceso de configuración, se recomienda un conjunto de pruebas en las cajas desde aplicación de formas de pago, hasta impresiones de RIDEs.
