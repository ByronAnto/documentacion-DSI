---
sidebar_position: 2
---

# Sincronización Colombia

**Manual de Usuario - Sistema 2023 - Soporte App**

### WinSCP

- WinSCP es un cliente SFTP (Protocolo de transferência segura de archivos), gráfico para Windows que emplea SSH.

- También se puede seguir usando la versión anterior del protocolo.

![Locale Dropdown](./img/7.png)

### CONEXIÓN A SINCRO V3 COLOMBIA

![Locale Dropdown](./img/8.png)

### PETICIONES

- En esta carpeta tenemos los json generados por los cambios generados por el área de CONFIGURACIONES.
- JSON MENU
- JSON PRODUCTOS ESPECIALES
- JSON CADENA

![Locale Dropdown](./img/9.png)

![Locale Dropdown](./img/10.png)

### RESPUESTAS

- Son json de respuestas que se recibe cuando ya finaliza Sincronización

- Cuando la sincronización viajo sin problema se tiene el siguiente mensaje

![Locale Dropdown](./img/11.png)

- Si mantiene algún error, se va generar de la siguiente manera, en este caso significa que la geolocalización de una tienda no está configurada correctamente

![Locale Dropdown](./img/12.png)

## SINCRONIZACION MANUAL

### PANTALLA SINCRONIZACION V3

- Esta es la pantalla que contiene múltiples opciones como:
  - Sincronizacion Manual
  - Sincronizacion Productos
  - Configuraciones
    - Horarios
    - Canales
    - Token
    - Menu
    - Logs
- Para realizar este proceso tiene que estar debidamente aprobado

![Locale Dropdown](./img/13.png)

### Sincronización Manual

- En esta pantalla es para realizar una sincronización en el momento, de determinado Canal

![Locale Dropdown](./img/14.png)

### Sincronización Productos

- Esta Pantalla como su nombre mismo lo indica, es por Productos

- Aquí muestra el canal, y que tipo de Producto es para que este sea enviado

![Locale Dropdown](./img/15.png)

### Horarios

- Aquí muestra, los horarios de envíos de acuerdo al horario de Ecuador
- Aquí también se puede editar la hora para enviar nuevamente una sincronización
- Además, si realiza un cambio siempre tomar en cuenta dejar como estaba configurado

![Locale Dropdown](./img/16.png)

### Canales

- En la siguiente pantalla, se puede configurar para los canales que deseen, tanto para ambiente de desarrollo como producción
- Se tiene un archivo donde contiene toda la información para realizar este proceso

![Locale Dropdown](./img/17.png)

### Ambiente de Produccion yDesarrollo

- Aquí esta la pantalla donde tiene que estar configurado ya sea para producción o desarrollo
- Se tiene un documento donde esta esta información, misma que se enviara para que se pueda realizar pruebas.

![Locale Dropdown](./img/18.png)

### Inyección por postman y sincronización

- Se abre la Aplicación Postman la misma que pueden descargarla de internet
- Adjunto Url para la inyección a donde debe de enviarse
- URL para enviar Lista Menu
  - https://api.v2.dev2.desarrollo-redbrand.com/api//v3/lists*
- URL para enviar Menu
  - https://api.int.v2.desarrollo-redbrand.com/api/v3/channels-stores

![Locale Dropdown](./img/19.png)

### Ejemplo de Inyección con Json de una Cadena

![Locale Dropdown](./img/20.png)
