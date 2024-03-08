# Manual de Configuracion URL Servicios Back2.0.
# MANUAL DE CONFIGURACIÓN SERVICIOS MERCADITO
## CONFIGURACIÓN POLÍTICA DE SERVIDOR Y RUTA
**1.	Crear Parámetros Urls Servicios**
1.	En el menú nos dirigimos a la pantalla de administración de POLÍTICAS.

![Ejemplo de Manual pantalla de administracion de POLITICAS](<Manual pantalla de administracion de POLITICAS.png>)

2.	En la pantalla de políticas nos ubicamos en las políticas por CADENA. 

![Ejemplo de Manual ubicarse politicas por CADENA](<Manual ubicarse politicas por CADENA.png>)

3.	Seleccionamos la política SERVIDOR WS.

![Ejemplo de Manual politica SERVIDOR WS](<Manual politica SERVIDOR WS.png>)

4.	Damos clic en el botón NUEVO PARÁMETRO.
![Ejemplo de Manual NUEVO PARAMETRO](<Manual NUEVO PARAMETRO.png>)

5.	En la modal que aparece agregamos la siguiente información:

| Parámetro | Tipo Dato | Especificar Valor | Estado |
| ---| :--------:| ---------:| -----|
| APP PRUEBAS	| CARACTER	|SI| Activo	|
| APP PRODUCCIÓN	| CARACTER	|SI| Activo	|
---

![Ejemplo de Manual APP PRUEBAS](<Manual APP PRUEBAS.png>)

![Ejemplo de Manual APP PRODUCCION](<Manual APP PRODUCCION.png>)

6.	Con el botón GUARDAR confirmamos la creación de las urls. Los parámetros quedan como se muestra en la imagen.

![Ejemplo de Manual Confirmar Creacion Urls](<Manual Confirmar Creacion Urls.png>)

**2.	Crear Parámetros Rutas de Servicios**
1.	Seleccionamos la política WS RUTA SERVICIO, damos click en el botón AGREGAR PARÁMETRO.

![Ejemplo de Manual Crear Parametros Rutas Servicios](<Manual Crear Parametros Rutas Servicios.png>)

2.	En la modal que aparece, agregamos los siguientes parámetros:

| Parámetro | Tipo Dato | Especificar Valor | Estado |
| ---| :--------:| ---------:| -----|
| APP AUTHENTICACION	| CARACTER	|SI| Activo	|
| APP CAMBIO ESTADO	| CARACTER	|SI| Activo	|
---
![Ejemplo de Manual APP AUTHENTICATION](<Manual APP AUTHENTICATION.png>)

![Ejemplo de Manual APP CAMBIO ESTADO](<Manual APP CAMBIO ESTADO.png>)

3.	Los parámetros quedan como se muestra en la imagen. 

![Ejemplo de Manual Parametros](<Manual Parametros.png>)

**3.	Configurar Url del Servicio**

1	Nos dirigimos al módulo de Cadenas.

2	Seleccionamos la pestaña POLÍTICAS DE CONFIGURACIÓN y presionamos el botón agregar +.

![Ejemplo de Manual Configurar Url Servicio 1](<Manual Configurar Url Servicio 1.png>)

![Ejemplo de Manual Configurar Url Servicio 2](<Manual Configurar Url Servicio 2.png>)

3.	Buscamos la política WS SERVIDOR, y seleccionamos el parámetro APP PRUEBAS. En el campo VARCHAR agregamos el siguiente dato para el servidor de pruebas: 

**SERVIDOR DE PRUEBAS:** api.v2.desarrollo-redbrand.com

![Ejemplo de Manual SERVIDOR DE PRUEBAS](<Manual SERVIDOR DE PRUEBAS.png>)

4.	Presionamos el botón GUARDAR.

5.	Buscamos la política WS SERVIDOR, y seleccionamos el parámetro APP PRODUCCION. En el campo VARCHAR agregamos el siguiente dato para el servidor de producción: 

**SERVIDOR DE PRODUCCIÓN:** api.kfc.com.ec

![Ejemplo de Manual SERVIDOR DE PRODUCCION](<Manual SERVIDOR DE PRODUCCION.png>)

6.	En la pestaña de POLÍTICAS DE CONFIGURACIÓN en el buscador escribimos el nombre de la política SERVIDOR APP y deben aparecer los parámetros configurados.

![Ejemplo de Manual Escribir nombre politica SERVIDOR APP](<Manual Escribir nombre politica SERVIDOR APP.png>)

**4.	Configurar Rutas de los Servicios**
1.	Seleccionamos la pestaña POLÍTICAS DE CONFIGURACIÓN y presionamos el botón agregar +.

![Ejemplo de Manual Configurar Rutas Servicios](<Manual Configurar Rutas Servicios.png>)

2.	Buscamos la política WS RUTA SERVICIO, y seleccionamos el parámetro APP AUTHENTICATION. En el campo VARCHAR agregamos el siguiente dato para el servidor de pruebas: 
**AUTHENTICACION:** /api/transactional/token

![Ejemplo de Manual politica WS RUTA SERVICIO](<Manual politica WS RUTA SERVICIO.png>)

![Ejemplo de Manual politica WS RUTA SERVICIO 2](<Manual politica WS RUTA SERVICIO 2.png>)

3.	Buscamos la política WS RUTA SERVICIO, y seleccionamos el parámetro APP AUTHENTICATION. En el campo VARCHAR agregamos el siguiente dato para el servidor de pruebas: 
**CAMBIO ESTADOS:** /api/order/status

![Ejemplo de Manual politica WS RUTA SERVICIO APP AUTHENTICATION CAMBIO ESTADOS](<Manual politica WS RUTA SERVICIO APP AUTHENTICATION CAMBIO ESTADOS.png>)

4.	En la pestaña de POLÍTICAS DE CONFIGURACIÓN en el buscador escribimos el nombre de la política RUTA APP y deben aparecer los parámetros configurados.

![Ejemplo de Manual Escribir nombre politica RUTA APP](<Manual Escribir nombre politica RUTA APP.png>)
