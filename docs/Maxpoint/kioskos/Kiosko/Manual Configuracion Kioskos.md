# Manual Configuración Kioskos
# MANUAL DE CONFIGURACION PROCESO KIOSKO EFECTIVO
## 1.	OBJETIVOS

Conocer sobre las diferentes configuraciones que se deben realizar antes de poner en producción el desarrollo del proceso kiosko efectivo para evitar inconvenientes con Maxpoint.

## 2.	MANUAL CONFIGURACION PROCESO KIOSKO EFECTIVO. 

**2.1	DATOS GENERALES**

En este manual se detalla las configuraciones que deben hacerse en el backoffice de Maxpoint.

**2.2	CONFIGURACION DE POLITICAS DE KIOSKO EFECTIVO-CADENA**

Para realizar las configuraciones correspondientes se deben seguir los siguientes pasos:
1.	Ingresar al backend de Maxpoint, escoger la cadena 
2.	Ir al apartado de Seguridades en el menú (parte izquierda)
3.	Dirigirse hacia Políticas

2.2.1	CREACIÓN DE COLECCIÓN CONFIGURACIÓN KIOSKO

La siguiente política de colección de cadena no existe por lo cual debemos pulsar sobre la opción ![Ejemplo de Proceso Nueva Coleccion](<Proceso Nueva Coleccion.png>) y llenar la siguiente pantalla con la información mostrada en la imagen:

![Ejemplo de Proceso Llenar Pantalla 1](<Proceso Llenar Pantalla 1.png>)

Una vez ingresada la información, guardamos y en el siguiente punto, crearemos los parámetros correspondientes a esta política.

2.2.2	CREACION DE PARÁMETROS DE COLECCIÓN CONFIGURACION KIOSKO

*2.2.2.1	CREACION DE PARÁMETRO IP DATAFAST:*

Para crear un nuevo parámetros debemos seleccionar la colección anteriormente creada, y luego pulsar sobre la opción  ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configurar de la siguiente manera:

![Ejemplo de Proceso Parametro ID DATAFAST](<Proceso Parametro ID DATAFAST.png>)

*2.2.2.2	CREACION DE PARÁMETRO PUERTO TCP DATAFAST:*

Para crear un nuevo parámetros debemos seleccionar la colección anteriormente creada, y luego pulsar sobre la opción  ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configurar de la siguiente manera:

![Ejemplo de Proceso Parametro ID DATAFAST REL](<Proceso Parametro ID DATAFAST REL.png>)

*2.2.2.3	CREACION DE PARÁMETRO TIMEOUT PINPAD:*

Para crear un nuevo parámetros debemos seleccionar la colección anteriormente creada, y luego pulsar sobre la opción  ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configurar de la siguiente manera:

![Ejemplo de Proceso Parametro TIMEOUT PINPAD](<Proceso Parametro TIMEOUT PINPAD.png>)

**2.3	CREACION DE VALORES A PARAMETROS CREADOS.**

Para dar valor a los parámetros ingresados anteriormente, nos dirigimos a Maxpoint, en el apartado de Cadena en el menú, seleccionamos **Cadena.**

El sistema desplegará una pantalla en la cual tendremos dos pestañas, seleccionamos **Políticas de Configuración**, presentará una tabla en la cual en la parte superior derecha  aparecerán dos símbolos, seleccionaremos **más**.  En la pantalla flotante seleccionamos lo siguiente: 

![Ejemplo de Proceso CONFIGURACION KIOSKO](<Proceso CONFIGURACION KIOSKO.png>)

Para agregar un valor al parámetro, lo seleccionamos e insertamos la siguiente información:

2.3.1	CREACION DE VALOR A PARÁMETRO IP DATAFAST:

La información que se inserta depende mucho de la configuración enviada por datafast. Insertamos dentro del campo Varchar.

![Ejemplo de Proceso Llenar Informacion IP DATAFAST](<Proceso Llenar Informacion IP DATAFAST.png>)

2.3.2	CREACION DE VALOR A PARÁMETRO PUERTO TCP DATAFAST:

![Ejemplo de Proceso PUERTO TCP DATAFAST](<Proceso PUERTO TCP DATAFAST.png>)

2.3.3	CREACION DE VALOR A PARÁMETRO TIMEOUT PINPAD:

![Ejemplo de Proceso TIMEOUT PINPAD](<Proceso TIMEOUT PINPAD.png>)

**2.4	CONFIGURACION DE POLITICAS DE KIOSKO EFECTIVO-RESTAURANTE**

Para configurar o crear esta colección primero debemos ingresar a la administración de políticas y luego a la pestaña de Restaurante.

![Ejemplo de Proceso Administracion Politicas Restaurante](<Proceso Administracion Politicas Restaurante.png>)

2.4.1	CREACIÓN DE COLECCIÓN CONFIGURACIÓN KIOSKO - RESTAURANTE

La siguiente política de colección de cadena no existe por lo cual debemos pulsar sobre la opción ![Ejemplo de Proceso Nueva Coleccion](<Proceso Nueva Coleccion.png>) y llenar la siguiente pantalla con la información mostrada en la imagen:

![Ejemplo de Proceso Configuracion Kiosko 2](<Proceso Configuracion Kiosko 2.png>)

Una vez ingresada la información, guardamos y en el siguiente punto, crearemos los parámetros correspondientes a esta política.

2.4.2	CREACION DE PARÁMETROS DE COLECCIÓN CONFIGURACION KIOSKO

*2.4.2.1	CREACION DE PARÁMETRO KIOSKO ACTIVO:*

Para crear un nuevo parámetros debemos seleccionar la colección anteriormente creada, y luego pulsar sobre la opción  ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configurar de la siguiente manera:

![Ejemplo de Proceso Parametro ACTIVO](<Proceso Parametro ACTIVO.png>)

2.4.2.2	CREACION DE PARÁMETRO GATEWAY:

Para crear un nuevo parámetros debemos seleccionar la colección anteriormente creada, y luego pulsar sobre la opción ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configurar de la siguiente manera:

![Ejemplo de Proceso GATEWAY](<Proceso GATEWAY.png>)

2.4.2.3	CREACION DE PARÁMETRO MASCARA DE RED:

Para crear un nuevo parámetros debemos seleccionar la colección anteriormente creada, y luego pulsar sobre la opción ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configurar de la siguiente manera:

![Ejemplo de Proceso MASCARA DE RED](<Proceso MASCARA DE RED.png>)

2.4.2.4	CREACION DE PARÁMETRO MID:

Para crear un nuevo parámetros debemos seleccionar la colección anteriormente creada, y luego pulsar sobre la opción ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configurar de la siguiente manera:

![Ejemplo de Proceso MID](<Proceso MID.png>)

2.4.3	CREACION DE VALORES DE PARÁMETROS DE COLECCIÓN CONFIGURACION KIOSKO

Para dar valor a los parámetros ingresados anteriormente, nos dirigimos a Maxpoint, en el apartado de Restaurante en el menú, seleccionamos Restaurante.

![Ejemplo de Proceso Restaurante Seleccionar Restaurante](<Proceso Restaurante Seleccionar Restaurante.png>)

Seleccionaremos el restaurante y damos doble clic para ver las configuraciones del local.

![Ejemplo de Proceso Seleccionar Restaurante Doble Clic](<Proceso Seleccionar Restaurante Doble Clic.png>)

Dar click sobre la pestaña Políticas de Configuración , y para dar valor a los parámetros creados anteriormente dar clic sobre el símbolo **más**.  El sistema desplegará una pantalla flotante en la cual seleccionamos la configuración Kiosko y agregaremos valor a los parámetros configurados.

![Ejemplo de Proceso CONFIGURACION KIOSKO](<Proceso CONFIGURACION KIOSKO.png>)

2.4.4	CREACION DE VALOR A PARÁMETRO KIOSKO ACTIVO:

![Ejemplo de Proceso CONFIGURACION KIOSKO Creacion Valor](<Proceso CONFIGURACION KIOSKO Creacion Valor.png>)

2.4.5	CREACION DE VALOR A PARÁMETRO MASCARA DE RED:

![Ejemplo de Proceso CONFIGURACION KIOSKO Varchar](<Proceso CONFIGURACION KIOSKO Varchar.png>)

2.4.6	CREACION DE VALOR A PARÁMETRO GATEWAY:

![Ejemplo de Proceso VALOR GATEWAY](<Proceso VALOR GATEWAY.png>)

2.4.7	CREACION DE VALOR A PARÁMETRO MID:

![Ejemplo de Proceso VALOR MID](<Proceso VALOR MID.png>)

**2.5	CONFIGURACION DE POLITICAS DE WS SERVIDOR - CADENA**

Dentro de la pestaña políticas seleccionamos la opción cadena, buscaremos la opción **WS SERVIDOR** como muestra las imágenes a continuación.

**Configuración de Servidor:**

![Ejemplo de Proceso Administracion Politicas](<Proceso Administracion Politicas.png>)
Menú Pantalla de Políticas en Seguridades.

Encontrada la colección, debemos dar clic sobre ella y se desplegará todos los parámetros disponibles. 

![Ejemplo de Proceso Encontrar Coleccion Clic](<Proceso Encontrar Coleccion Clic.png>)
Colecciones de Datos Pantalla de Políticas en Seguridades – Cadena.

Debemos crear un nuevo parámetro pulsando sobre la opción  ![Ejemplo de Proceso Nuevo Parametro](<Proceso Nuevo Parametro.png>) y configuraremos de la siguiente manera:

![Ejemplo de Proceso DATAFAST KIOSKO PRODUCCION](<Proceso DATAFAST KIOSKO PRODUCCION.png>)

Terminado el proceso anterior debe aparecer de la siguiente forma los parámetros configurados.

![Ejemplo de Proceso Aparecer Parametros Configurados](<Proceso Aparecer Parametros Configurados.png>)
Configuración del Parámetro en WS Servidor.

**2.6	CONFIGURACION DE VALOR DATAFAST KIOSKO** 

Para configurar un valor a la política creada anteriormente, nos dirigimos a la pestaña cadena dentro del backoffice y seleccionaremos CADENA. Luego daremos clic sobre las políticas de configuración y pulsaremos sobre la opción  **más**:

![Ejemplo de Proceso CONFIGURACION VALOR POLITICA CREADA](<Proceso CONFIGURACION VALOR POLITICA CREADA.png>)
Configuración de Cadena –Políticas de Configuración.

Una vez pulsado el botón llenaremos todas las políticas creadas con la siguiente información:

<font color="yellow">Nota: El parámetro configurado puede variar dependiendo de si es producción o desarrollo.</font> 

![Ejemplo de Proceso Parametro Configurado Variar](<Proceso Parametro Configurado Variar.png>)

Una vez terminada la configuración de todas las políticas creadas anteriormente se debe visualizar de la siguiente forma:

![Ejemplo de Proceso Configuracion terminada Visualizar](<Proceso Configuracion terminada Visualizar.png>)

