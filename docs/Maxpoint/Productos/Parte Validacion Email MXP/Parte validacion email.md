# Validacion de email
# MANUAL DE CONFIGURACIÓN DE POLÍTICA PARA VALIDACIÓN DE EMAIL CON PLUGTHEM
**DESCRIPCIÓN**

Este manual se ha desarrollado para detallar el proceso de configuración respecto a las políticas de configuración necesarias para que funcione la validación de email por el proveedor PLUG THEM.

**PROCEDIMIENTO**

Para ingresar a las configuraciones de políticas iniciamos sesión en el BackOffice de MAXPOINT 
CONFIGURACIÓN DE POLITICAS POR CADENA
Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS.

![Ejemplo de Email SEGURIDADES POLITICAS](<Email SEGURIDADES POLITICAS.png>)

Damos clic en “Ir a Administración Políticas”.

![Ejemplo de Email Administracion Politicas](<Email Administracion Politicas.png>)

Nos ubicamos en las políticas por **“Cadena”**, y damos clic en botón **“Nueva Colección”**.

![Ejemplo de Email Cadena Nueva Coleccion](<Email Cadena Nueva Coleccion.png>)

En descripción colocamos **“PLUGTHEM VALIDA”**.

![Ejemplo de Email PLUGTHEM VALIDA](<Email PLUGTHEM VALIDA.png>)

La política creada se muestra de la siguiente manera.

![Ejemplo de Email Mostrar Politica Creada](<Email Mostrar Politica Creada.png>)

PARAMETROS DE LA POLÍTICA DE VALIDACIÓN DE EMAIL

| Nombre del Parámetro | Tipo de Dato | Obligatorio | Valor a configurar |
|--|--|--|--|
| EMAIL | Selección | Si  | Si  |
---

Se detallo de la siguiente forma a fin de poder darle amplitud a esta política de validación y en el futuro agregar otros campos a ser validados.

Este valor de email actúa como un booleano, el cual, si está marcado como SI, la validación se 
hará efectiva, y si está marcado como NO, no se realizará la validación.

Nos ubicamos en las políticas por **“Cadena”**, y Buscamos la política “PLUGTHEM VALIDA”
En la parte derecha de la pantalla damos clic en la opción Nuevo Parámetro

![Ejemplo de Email Buscar PLUGTHEM VALIDA](<Email Buscar PLUGTHEM VALIDA.png>)

Y se configura de la siguiente manera.

![Ejemplo de Email Parametro Email](<Email Parametro Email.png>)

Damos clic en Guardar.

Una vez creada la política, ir a la opción del menú CADENA.

![Ejemplo de Email Ir Opcion CADENA](<Email Ir Opcion CADENA.png>)

Ir a la lista de Políticas de configuración por cadena, y dar clic en el icono de + para agregarla.

![Ejemplo de Email Clic Icono Agregarla](<Email Clic Icono Agregarla.png>)

Una vez de haberle dado clic, se buscará en la lista la política PLUGTHEM VALIDA, se seleccionará y mostrará el parámetro previamente configurado (EMAIL), damos clic en el parámetro y se 
desplegará la información para completar.

![Ejemplo de Email Informacion Completar](<Email Informacion Completar.png>)

En el campo Entero del formulario, podemos configurar el número de intentos que se puede usar 
para validar el email, si los intentos de validación se agotan, el email será tomado como válido, si hay un cambio en el email, los intentos se reiniciaran.

De no colocar ningún valor en el campo de Entero, por defecto se creará con 1 intento.

Toda esta información se guardará en el localStorage del Navegador.

**CONFIGURACIÒN DE PARAMETRO PARA POLITICA WS RUTA DE SERVICIO**

Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS.

![Ejemplo de Email CONFIGURACION PARAMETRO POLITICA WS RUTA SERVICIO 1](<Email CONFIGURACION PARAMETRO POLITICA WS RUTA SERVICIO 1.png>)

Damos clic en “Ir a Administración Políticas”

![Ejemplo de Email Ir Administracion Politicas](<Email Ir Administracion Politicas.png>)

Nos ubicamos en las políticas por **“Cadena”**, y buscamos en la lista la política “WS RUTA SERVICIO”, a fin de crearle su nuevo parámetro:

![Ejemplo de Email Cadena WS RUTA SERVICIO](<Email Cadena WS RUTA SERVICIO.png>)

Y del lado derecho de la pantalla procedemos a crear un nuevo parámetro:

Este parámetro tendrá por nombre:

**PLUG THEM VALIDAR CORREO**

Y será de tipo Carácter de igual forma

![Ejemplo de Email PLUG THEM VALIDAR CORREO](<Email PLUG THEM VALIDAR CORREO.png>)

Con esto ya tenemos creados los parametros necesarios para la configuraciòn de la politica.

Una vez creada la política, ir a la lista de Políticas de configuración por cadena, y dar clic en el icono de + para agregarla.

![Ejemplo de Email Cadena Clic Icono Agregarla 2](<Email Cadena Clic Icono Agregarla 2.png>)

Seleccionamos en la lista de políticas WS RUTA SERVICIO, cuando me muestre los parámetros, 
seleccionamos el parámetro PLUG THEM VALIDAR CORREO, y en el campo carácter colocamos la 
ruta del servicio del proveedor:

**/api/v1/datavalidator**

Damos clic en guardar y con eso tendremos las políticas listas. 

**CONFIGURACIÒN DE POLITICAS POR RESTAURANT**

Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS.

![Ejemplo de Email CONFIGURACION POLITICAS RESTAURANT 1](<Email CONFIGURACION POLITICAS RESTAURANT 1.png>)

Damos clic en “Ir a Administración Políticas”

![Ejemplo de Email Ir Administración Políticas](<Email Ir Administracion Politicas.png>)

Nos ubicamos en las políticas por **“Restaurante”**, y damos clic en botón **“Nueva Colección”**

![Ejemplo de Email Politicas Restaurante Nueva Coleccion](<Email Politicas Restaurante Nueva Coleccion.png>)

En descripción colocamos **“PLUGTHEM VALIDA”**

![Ejemplo de Email PLUGTHEM VALIDA](<Email PLUGTHEM VALIDA.png>)

La política creada se muestra de la siguiente manera

![Ejemplo de Email Politica Creada](<Email Mostrar Politica Creada.png>)

PARAMETROS DE LA POLÍTICA DE VALIDACIÓN DE EMAIL

| Nombre del Parámetro | Tipo de Dato | Obligatorio | Valor a configurar |
|--|--|--|--|
| EMAIL | Selección | Si  | Si  |
---

Se detallo de la siguiente forma a fin de poder darle amplitud a esta política de validación y en el futuro agregar otros campos a ser validados.

Este valor de email actúa como un booleano, el cual si está marcado como SI, la validación se hará 
efectiva, y si está marcado como NO, no se realizará la validación.

Nos ubicamos en las políticas por **“Restaurante”**, y Buscamos la política “PLUGTHEM VALIDA”

En la parte derecha de la pantalla damos clic en la opción Nuevo Parámetro

![Ejemplo de Email Nuevo Parametro](<Email Nuevo Parametro.png>)

Y se configura de la siguiente manera.

![Ejemplo de Email Nuevo Parametro 22](<Email Nuevo Parametro 22.png>)

Una vez configurada la política procedemos a asignarla al Restaurante en cuestión.

**Ir a la opción** en el menú RESTAURANTE- Restaurante

![Ejemplo de Email Ir Opcion RESTAURANTE Restaurante](<Email Ir Opcion RESTAURANTE Restaurante.png>)

Seleccionamos el restaurante de la lista, y nos vamos al tab Políticas de configuración. 

![Ejemplo de Email Seleccionamos Tab Politicas](<Email Seleccionamos Tab Politicas.png>)

Damos clic en el botón de + para agregar la política al restaurante. Buscamos PLUGTHEM VALIDA, 
seleccionamos, nos mostrara el parámetro (EMAIL) creado previamente, seleccionamos el parámetro 
a continuación y nos desplegara la información del parámetro a configurar.

![Ejemplo de Email Buscar Seleccionar Desplegar Parametro a Configurar](<Email Buscar Seleccionar Desplegar Parametro a Configurar.png>)

*  Validamos que en selección este en **SI**

* En el campo Entero procedemos a tipear el numero de intentos a validar el correo. Si este 
numero de intento es agotado, el email serà tomado como vàlido. 

Damos clic en guardar y ya con eso quedaría la política configurada para el Restaurante.

A continuación, se mostrará cuadro comparativo con los diferentes escenarios de funcionalidad de la 
política a nivel de Restaurante y cadena. 

**POLITICA:** PLUGTHEM VALIDA

**PARAMETRO:** EMAIL

Los valores 1 & 0 Especifican que se configuró la política y **se añadió un valor**.
El valor “NO ESPECIFICADO” Especifica que la política se creó, pero **no** se añadió valor al dato. 

| Cadena | Restaurante | ¿Aplica la validación de correo el Restaurante? |
|--|--|--|
| 0 | 0 | No |
| 0 | 1 | Si |
| 1 | 0 | No |
| 1 | 1 | Si |
| NO ESPECIFICADO | 1 | SI (en este caso aplicaría solo a los restaurantes que **SI** estén especificados)|
 | 1 | NO ESPECIFICADO | SI (en este caso aplicaría a todos los restaurantes de la cadena que **NO** estén especificados)|
---

Importante: Dentro del proceso de validación de Emails con Plugthem es importante conocer que el
sistema del proveedor activa esta funcionalidad solo a IPs conocidas (Listas blancas) para lo cual es de vital importancia darle a conocer las IP desde donde se consumirán estos servicios.

Actualmente ya se les proporcionó el conjunto de Ips Publicas tanto de Quito / Guayaquil y Belmonte 
que son las siguientes:

UIO

157.100.167.12/255.255.255.248
190.95.159.82/255.255.255.240
181.198.83.226/255.255.255.248

GYE

186.101.36.90/255.255.255.248
186.5.126.210/255.255.255.248

En caso de que alguna de estas ips cambien o algún otro país quiera activar la opcion se deberá pasar 
por correo a Plugthem las ip para que sea añadidas a las listas blancas al siguiente correo: 
sfernandez@plugthem.social