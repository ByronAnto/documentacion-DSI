# Manual Configuracion Notificaciones.
# MANUAL NOTIFICACIONES   MAXPOINT DELIVERY
## NOTIFICACIONES PEDIDOS DELIVERY

En este manual se detalla el proceso de configuración para las notificaciones por sonido en MaxPoint. Se realizó la configuración de dos políticas a nivel de restaurante.

**CONFIGURACIÓN POLÍTICAS**

Nos dirigimos al módulo de **SEGURIDADES** a la pantalla de **POLÍTICAS**, y damos click en el botón **IR A ADMINISTRACIÓN DE POLÍTICAS**.

![Ejemplo de Configuracion Notificaciones SEGURIDADES IR A ADMINISTRACION DE POLITICAS](<Configuracion Notificaciones SEGURIDADES IR A ADMINISTRACION DE POLITICAS.png>)

Seleccionamos las políticas por **RESTAURANTE** y presionamos el botón **NUEVA COLECCIÓN**.

![Ejemplo de Configuracion Notificaciones RESTAURANTE NUEVA COLECCION](<Configuracion Notificaciones RESTAURANTE NUEVA COLECCION.png>)

Configuramos la política **CONFIGURACION ALERTA MEDIOS**, como se muestra en la siguiente imagen:

![Ejemplo de Configuracion Notificaciones CONFIGURACION ALERTA MEDIOS](<Configuracion Notificaciones CONFIGURACION ALERTA MEDIOS.png>)

Presionamos el botón GUARDAR, para almacenar la información y la verificamos en la lista de políticas de Cadena.

**CONFIGURACIÓN PARÁMETROS**

Seleccionamos la política **CONFIGURACIÓN ALERTA MEDIOS** y presionamos el botón **NUEVO PARÁMETRO**.
 
Configuramos los parámetros como se muestra en las siguientes imágenes:

ACTIVO

![Ejemplo de Configuracion Notificaciones ACTIVO](<Configuracion Notificaciones ACTIVO.png>)

TIEMPO ALERTA MEDIOS

![Ejemplo de Configuracion Notificaciones TIEMPO ALERTA MEDIOS](<Configuracion Notificaciones TIEMPO ALERTA MEDIOS.png>)

Verificamos que se hayan creado los parámetros correctamente en la lista de parámetros.

![Ejemplo de Configuracion Notificaciones Cuadro Gris con Checks](<Configuracion Notificaciones Cuadro Gris con Checks.png>)

**CONFIGURACIÓN DE DATOS**

Nos dirigimos al módulo de **RESTAURANTES** a la pantalla de **RESTAURANTES**, y seleccionamos el restaurante que vamos a configurar, y damos doble click sobre la fila.

![Ejemplo de Configuracion Notificaciones RESTAURANTES RESTAURANTES](<Configuracion Notificaciones RESTAURANTES RESTAURANTES.png>)

Nos dirigimos a la pestaña de **POLÍTICAS DE CONFIGURACIÓN** damos clic en el botón **+.**

![Ejemplo de Configuracion Notificaciones POLITICAS DE CONFIGURACION mas](<Configuracion Notificaciones POLITICAS DE CONFIGURACION mas.png>)

Buscamos la política **CONFIGURACIÓN ALERTA MEDIOS** y agregamos parámetro por parámetro como se muestra en las siguientes imágenes:

ACTIVO

![Ejemplo de Configuracion Notificaciones ACTIVO 2](<Configuracion Notificaciones ACTIVO 2.png>)

TIEMPO ALERTA MEDIOS

![Ejemplo de Configuracion Notificaciones TIEMPO ALERTA MEDIOS 2](<Configuracion Notificaciones TIEMPO ALERTA MEDIOS 2.png>)

Verificamos la configuración en la lista de políticas, como se muestra en la siguiente imagen:

![Ejemplo de Configuracion Notificaciones K004 CCI 2](<Configuracion Notificaciones K004 CCI 2.png>)

**SOCKET SERVER**

Es importante recalcar que para el uso de este servicio se utilizara el mismo servidor de socket de turnero y kiosko. Para ello se debe realizar esta configuración de la política que corresponde a la colección **CONFIGURACION TURNERO** y el parámetro de **SERVIDOR SOCKETS**.

![Ejemplo de Configuracion Notificaciones CONFIGURACION TURNERO SERVIDOR SOCKETS 2](<Configuracion Notificaciones CONFIGURACION TURNERO SERVIDOR SOCKETS 2.png>)

**RESUMEN DE CONFIGURACIONES**

|     Colección    |     Parámetro    |     Tipo    |     Valor    |          |  |  |  |
|---|---|---|---|---|---|---|---|
|     CONFIGURACION   TURNERO    |     SERVIDOR   SOCKETS    |     CARÁCTER    |     127.0.0.1:5000     |     Se debe colocar   la IP donde se haya instalado el servicio y su respectivo puerto    |  |  |  |
|     CONFIGURACION   ALERTA MEDIOS    |     ACTIVO    |     SELECCIÓN    |     SI    |     ACTIVO /   INACTIVO    |  |  |  |
|     CONFIGURACION   ALERTA MEDIOS    |     TIEMPO ALERTA   MEDIOS    |     ENTERO    |     1    |     Valor dado en   minutos para especificar el tiempo en que se corre el cron del servicio.    |  |  |  |
---

**VERIFICAR POR BASE DE DATOS**

Para verificar esta configuración, ejecutamos el siguiente procedimiento:

```sql
DECLARE @IDCadena INT = 10;
DECLARE @IDRestaurante INT = 40;
EXEC config.configuracionAlertaMedios @IDCadena, @IDRestaurante;

```

![Ejemplo de Configuracion Notificaciones RESULTS](<Configuracion Notificaciones RESULTS.png>)