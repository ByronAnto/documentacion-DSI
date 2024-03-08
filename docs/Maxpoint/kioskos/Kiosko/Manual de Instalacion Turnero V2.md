# Manual de Instalación Turnero V2.
# MANUAL PARA INSTALACIÓN DE TURNEROS
## 1.	 DESCRIPCIÓN

Este manual se ha desarrollado para detallar el proceso instalación y configuración de turneros

## 2.	PROCEDIMIENTO

**2.1	Configuración de políticas por restaurante**

Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS.

![Ejemplo de Instalacion Modulo de SEGURIDADES](<Instalacion Modulo de SEGURIDADES.png>)

Damos clic en “Ir a Administración Políticas”.

![Ejemplo de Instalacion Ir Administracion Politicas](<Instalacion Ir Administracion Politicas.png>)

Nos ubicamos en las políticas por “Restaurante”, y damos clic en botón “Nueva Colección”.

![Ejemplo de Instalacion Restaurante Nueva Coleccion](<Instalacion Restaurante Nueva Coleccion.png>)

En descripción colocamos “CONFIGURACION TURNERO” y en observaciones colocamos “COLECCION PARA LA PARAMETRIZACION DEL TURNERO”.

![Ejemplo de Instalacion CONFIGURACION TURNERO NUEVA Coll](<Instalacion CONFIGURACION TURNERO NUEVA Coll.png>)

La política creada se muestra de la siguiente manera.

![Ejemplo de Instalacion Politica Creada CONFIGURACION TURNERO](<Instalacion Politica Creada CONFIGURACION TURNERO.png>)

Una vez creada la política la seleccionamos y damos clic en el botón “Nuevo Parámetro” y creamos los que se muestran a continuación en la siguiente tabla. 

|     PARAMETRO    |     APLICA CONFIGURACION    |  
|---|---|
|     ACTIVO    |     Selección    | 
|     SERVIDOR   SOCKETS    |     Carácter    | 
---

Como resultado los parámetros de la política “CONFIGURACION FIDELIZACION CLIENTES” quedarían de la siguiente forma.

![Ejemplo de Instalacion Resultado CONFIGURACION FIDELIZACION CLIENTES](<Instalacion Resultado CONFIGURACION FIDELIZACION CLIENTES.png>)

Nos ubicamos en las políticas por “Restaurante”, y buscamos la colección IMPRIMIR ORDEN DE PEDIDO

![Ejemplo de Instalacion Buscar IMPRIMIR ORDEN PEDIDO](<Instalacion Buscar IMPRIMIR ORDEN PEDIDO.png>)

Damos clic en el botón “Nuevo Parámetro” y creamos los que se muestran a continuación en la siguiente tabla. 

|     PARAMETRO    |     APLICA   CONFIGURACION    |  |  |  |  |
|---|---|---|---|---|---|
|     ACTIVAR QR?    |     Selección    |  |  |  |  |
---

![Ejemplo de Instalacion ACTIVAR QR](<Instalacion ACTIVAR QR.png>)

Como resultado los parámetros de la política “IMPRIMIR ORDEN DE PEDIDO” quedarían de la siguiente forma.

![Ejemplo de Instalacion Resultado IMPRIMIR ORDEN DE PEDIDO](<Instalacion Resultado IMPRIMIR ORDEN DE PEDIDO.png>)

2.2	Activación de políticas por restaurante 
Las políticas por restaurante “CONFIGURACION TURNERO” se deben configurar desde la pantalla restaurante.

![Ejemplo de Instalacion CONFIGURACION TURNERO CCI](<Instalacion CONFIGURACION TURNERO CCI.png>)

Le damos clic en el restaurante y luego

![Ejemplo de Instalacion CLIC RESTAURANTE CCI](<Instalacion CLIC RESTAURANTE CCI.png>)

Luego le damos clic a “Políticas de Configuración” 

![Ejemplo de Instalacion CLIC Politicas Configuracion](<Instalacion CLIC Politicas Configuracion.png>)

En donde las configuraciones de los parámetros para las políticas quedaran de la siguiente manera:

*	**Configuración Turnero**

Parámetro “ACTIVO” colocamos Si.

![Ejemplo de Instalacion Parametro ACTIVO](<Instalacion Parametro ACTIVO.png>)

Parámetro “SERVIDOR SOCKETS” Colocamos la dirección del servidor del turnero y su puerto.

![Ejemplo de Instalacion Parametro SERVIDOR SOCKETS](<Instalacion Parametro SERVIDOR SOCKETS.png>)

|     PARAMETRO    |     VALOR (Carácter)    |  |  |  |  |
|---|---|---|---|---|---|
|     ACTIVO    |     si    |  |  |  |  |
|     SERVIDOR   SOCKETS    |     172.17.0.2:500    |  |  |  |  |
---

Una vez configurados correctamente quedarán de la siguiente manera.

![Ejemplo de Instalacion Configurado Correctamente](<Instalacion Configurado Correctamente.png>)

*	**Imprimir orden de pedido**

Parámetro “ACTIVAR QR?” colocamos Si.

![Ejemplo de Instalacion Imprimir Orden Pedido](<Instalacion Imprimir Orden Pedido.png>)

|     PARAMETRO    |     VALOR (Carácter)    |  |  |  |  |
|---|---|---|---|---|---|
|     ACTIVAR QR?    |     si    |  |  |  |  |
---

Una vez configurados correctamente quedarán de la siguiente manera.

![Ejemplo de Instalacion Imprimir Orden Pedido Checks](<Instalacion Imprimir Orden Pedido Checks.png>)

**2.3	Instalación del Sockets Despacho**

2.3.1	Implementación servidor (Windows)

•	Instalar node 10.16.3 https://nodejs.org/es/download/

![Ejemplo de Instalacion Instalar node 10 16 3](<Instalacion Instalar node 10 16 3.png>)

•	Copiar ficheros o descargar de http://sazteamfs:8080/tfs/KFCCollection/InvestigacionArquitecturas/_git/Sockets_Despacho en 

c:/Node/Sockets_Despacho crear la carpeta Node o copiar el fichero directamente en c:/

•	Se verifica la instalación de typescript, si no instalarlo con el comando: 

```typescript 
npm install -g typescript
```
•	En la locación c:/Node/Sockets_Despacho (o donde se haya copiado el fichero) descargar dependencias con el comando:

```typescript
npm install
```
•	A continuación en la misma carpeta ejecutar comando:
```typescript
tsc
```
![Ejemplo de Instalacion Windows PowerShell](<Instalacion Windows PowerShell.png>)

•	Verificar la existencia del archivo config.json en el fichero dist/config/

•	Verificar los parámetros 

```typescript
"node_port": 5000,
"url_credentials":"http://localhost:8090/credencial",
"vcp":[],
"baudRate": 9600,
```
|     PARAMETRO    |     APLICA   CONFIGURACION    |  |  |  |  |
|---|---|---|---|---|---|
|     node_port    |     5000    |  |  |  |  |
|     url_credentials    |     http://localhost:8090/credencial    |  |  |  |  |
|     vcp    |     Si no se usan VCP debe estar vacío []    |  |  |  |  |
---

•	Descargar nssm de https://nssm.cc/download

![Ejemplo de Instalacion Descargar nssm](<Instalacion Descargar nssm.png>)

2.3.2	Inicio automático 

•	Primero descomprimimos el archivo descargado en el directorio C:\nssm-2.24.

•	Luego ingresamos a través de consola al directorio donde se descomprimieron los archivos teniendo en cuenta la arquitectura C:\nssm-2.24\win64

•	Ejecutar el siguiente comando. (en CMD) 

```typescript
nssm install 
```
aparecerá la siguiente pantalla

![Ejemplo de Instalacion Pantalla Aparece nssm installer](<Instalacion Pantalla Aparece nssm installer.png>)

•	Para configurar el directorio Path ingresamos en donde se encuentra instalado Node.js

**Path:** C:\Program Files\nodejs\node.exe

**Startup directory:** C:\Program Files\nodejs

Además, debemos configurar cual es la aplicación de Node.js que se desea, que se ejecute como servicio, para ello debemos agregar la ubicación de este archivo.

**Arguments:** C:\Node\ Sockets_Despacho\dist\index.js

Agregamos un nombre que le daremos al servicio para poder identificarlo.

**Service name:** Sockets_Despacho

•	Una vez ingresada toda esta información hacer clic en **Install Service**

•	Para verificar la creación del servicio ejecutar el siguiente comando: 

```typescript
services.msc
```
•	El servicio debe estar iniciado.

•	Verificar que el servicio este como **Automático (Retardado)**

![Ejemplo de Instalacion Automatico Retardado](<Instalacion Automatico Retardado.png>)

•	En el caso de haber creado mal el servicio este se lo debe eliminar y crear nuevamente el comando para eliminar es el siguiente (ejecutarlo en la ubicación del nssm ej. C:\nssm-2.24\win64)

```typescript
nssm remove "Sockets_Despacho" confirm
```

**2.4	Implementación cliente turneros**

2.4.1	Instalación Servidor

•	Descarga o copia de los archivos por tfs
http://sazteamfs:8080/tfs/KFCCollection/InvestigacionArquitecturas/_git/Pantalla_Despacho_Clientes

•	Se copian los archivos seleccionados en el directorio /htdocs del xampp instalado en el servidor. (se copian los archivos una vez hecho el build. dist/visor-transaciones);

•	Modificación del archivo config.js ubicado en assets/config/ IMPORTANTE ingresar IP del servidor

**2.5	Instalación Raspberry**

•	Instalación de imagen raspberry win32diskmanager, la imagen https://www.raspberrypi.org/downloads/raspbian/

![Ejemplo de Instalacion Raspberry](<Instalacion Raspberry.png>)

•	Se debe cargar la imagen en una tarjeta min sd mediante el programa Win32DiskImager desde el link https://sourceforge.net/projects/win32diskimager/

•	Una vez descargado el programa este se debe iniciar

![Ejemplo de Instalacion Iniciar Raspberry](<Instalacion Iniciar Raspberry.png>)

•	En Image File buscar la imagen descargada de raspbian y en device, seleccionar la unidad de la micro sd  a usar.

•	Una vez seleccionado hacer clic en **WRITE**

•	Una vez finalizado el proceso, se puede retirar la tarjeta micro sd e insertarla en el raspberry.

•	Iniciar el raspberry, esto nos mostrara un WIZARD de configuración en el cual iremos pasando con las configuraciones por default, tomando en cuenta lo siguiente:

•	Configurar lenguaje y teclado en ingles

•	Activar las interfaces necesarias para VNC (Para el control remoto) y COM (En el caso de usar los lectores en modo Virtual COM Port )

![Ejemplo de Instalacion Activar Interfaces Necesarias](<Instalacion Activar Interfaces Necesarias.png>)

•	Actualizamos Raspberryan ejecutando los siguientes comandos desde la consola:

```typescript
sudo apt-get update
sudo apt-get dist-upgrade
```

**2.6	Configuración cliente turneros**

2.6.1	Raspberry

•	Se verifica el funcionamiento del servidor ingresando en el navegador la dirección la cual sería la IP del servidor y el nombre de la carpeta ej. http://172.17.0.2/visor-transacciones

2.6.2	Configuración para evitar modo suspensión.

Abrir /etc/lightdm/lightdm.conf.

```typescript
sudo nano /etc/lightdm/lightdm.conf
```

Buscar y descomentar la linea “xserver-command” bajo la sección “[Seat:*]” y modificar:

```typescript
xserver-command=X -s 0 -dpms
```

Resetear el sistema
```typescript
sudo reboot
```
2.6.3	Inicio Automático del navegador

•	Verificar la existencia de la carpeta  ~/.config/autostart/ mediante consola, si esta no existe se debe crear con el comando

```typescript
cd ~/.config/ 
```

y luego 

```typescript
mkdir autostart
```

•	Se debe crear un nuevo archivo *.desktop por medio de la consola en: ~/.config/autostart/ con el comando

```typescript
sudo nano ~/.config/autostart/autoChromium.desktop
```

•	Ingresar la siguiente información cambiando la página de destino

```typescript
[Desktop Entry]
Type=Application
Exec=/usr/bin/chromium-browser --noerrdialogs --kiosk --disable-session-crashed-bubble --disable-infobars --incognito http://172.17.0.2/visor-transaciones
Hidden=false
X-GNOME-Autostart-enabled=true
Name[en_US]=AutoChromium
Name=AutoChromium
Comment=Start Chromium when GNOME starts

```

•	Guardar archivo ctrl+o  y salir ctrl+x

•	Reiniciar

2.7	Configuración de Lector 
Para el lector de códigos QR se utiliza un lector marca **OPTICON , M-10**

Se debe realizar la configuración del lector con la siguiente imagen.

![Ejemplo de Instalacion OPTICON M 10 QR](<Instalacion OPTICON M 10 QR.png>)

2.7.1	USO DEL LECTOR MODO USB-HID (Modo entrada de teclado) por default

Si el equipo es nuevo no necesita configurarse con este modo ya que viene por default, si se lo ha cambiado de modo se lo puede configurar con la siguiente imagen.

![Ejemplo de Instalacion USO LECTOR MODO USB HID QR](<Instalacion USO LECTOR MODO USB HID QR.png>)

## 3.	Recomendaciones

Para el correcto funcionamiento del turnero es necesario se instale primero el Socket Server, verificar el correcto funcionamiento del mismo y luego la instalación del cliente pantalla turnero.

El Socket Server usa el sistema de credenciales, así que es necesario su correcto funcionamiento.
