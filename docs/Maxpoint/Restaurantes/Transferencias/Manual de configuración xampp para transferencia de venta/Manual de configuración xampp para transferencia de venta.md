# Manual de configuración xampp para transferencia de venta

## 1	 DESCRIPCIÓN
Este manual se ha desarrollado para detallar el proceso de configuración del servidor xampp para poder realizar transferencia de venta

## 2	PROCEDIMIENTO
### 2.1	Copiar carpeta ws-transferencia
Copiar sitio ws-transferencia en la carpeta htdocs, estos son los nuevos archivos de transferencia de venta. 

Una vez copiado el sitio, se debe desintalar el servicio jar de transferencia de venta.

![IMG1](image.png)

2.2	Configuración del servidor
Levantar el puerto 8596 en el servidor xampp. Dirigirse a xampp/apache/conf/httpd.conf

![IMG2](image-1.png)

Buscar la configuración Listen en el archivo httpd.conf y digitar Listen 8596

![IMG3](image-2.png)

De esta manera se configura el servidor xampp para levantar el puerto 8596 para el funcionamiento de transferencia de venta.


### 2.3	Configuración de proyecto
Direccionar el puerto 8596 a la carpeta de transferencia de venta. Esto se debe configurar el siguiente archivo C:/xampp/apache/conf/extra/httpd-vhosts.conf

![IMG4](image-3.png)

Se debe copiar la siguiente línea para direccionar el puerto 8596 a la carpeta de xampp 

![IMG5](image-4.png)

Guardar la configuración y reiniciar el xampp se debe validar que el puerto se active al reiniciar.

![IMG6](image-5.png)