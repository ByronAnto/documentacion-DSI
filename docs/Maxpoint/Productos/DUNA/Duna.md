# DUNA
# MANUAL DE SOLICITUD MOTORIZADOS DUNA
## 1.	 DESCRIPCIÓN
Este manual se ha desarrollado para detallar el proceso de configuración respecto a las políticas de configuración necesarias para que sea enviada la información desde MaxPoint a DUNA de solicitud de motorizado.

## 2.	PROCEDIMIENTO
Para ingresar a las configuraciones de políticas iniciamos sesión en el BackOffice de MAXPOINT  

## 3.	CONFIGURACIÓN DE POLÍTICAS POR RESTAURANTE 
Nos ubicamos en las políticas por “**Restaurante**”, y damos clic en botón “**CONFIGURACION DOMICILIO**”.

![Ejemplo de 1.Restaurante CONFIGURACION DOMICILIO](<1.Restaurante CONFIGURACION DOMICILIO.png>)

Damos clic en nuevo parámetro y creamos “**CONFIRMAR MOTORIZADO**” guardamos esta configuración donde tipo de dato debe ser selección, especificar valor y obligatorio seleccionado.

![Ejemplo de 1.Confirmar Motorizado](<1.Confirmar Motorizado.png>)

La política creada se muestra de la siguiente manera.

![Ejemplo de 1.Politica Creada](<1.Politica Creada.png>)

3.1.1	Parámetros de la política CONFIGURACION DOMICILIO

| Nombre del parámetro | Esp Valor |Obligatorio | Tipos Datos | Valor a Configurar | 
| ---| :--------:| ---------:| -----|-----|
| CONFIRMAR MOTORIZADO	|SI	|SI|	Selección	|SI o **NO** |
| CONFIRMAR MOTORIZADO	|SI	|SI| Varchar	|DUNA |
---

## 4.	Configuración URL DUNA

Nos ubicamos en MaxPoint mantenimiento en la sección de cadena, damos clic en políticas de configuración:

![Ejemplo de 1.Configuracion URL DUNA](<1.Configuracion URL DUNA.png>)

![Ejemplo de 1.Configuracion URL DUNA-2](<1.Configuracion URL DUNA-2.png>)

Allí buscamos DUNA si existe de no ser así la creamos:

URL producción : https://delivery.getduna.com

URL Pruebas: https://staging-delivery.getduna.com/

Luego de esta configuración procedemos a configurar el parámetro de la url en la política WS RUTA DE SERVICIO.

![Ejemplo de 1.Configurar WS RUTA DE SERVICIO](<1.Configurar WS RUTA DE SERVICIO.png>)

Al lado derecho le damos en ![Ejemplo de 1.Nuevo Parametro](<1.Nuevo Parametro.png>)  y 

agregamos la siguiente política:

| Nombre del parámetro | Esp Valor |Obligatorio | Tipos Datos | Valor a Configurar | 
| ---| :--------:| ---------:| -----|--
| DUNA SOLICUTUD BUSQUEDA DE MOTORIZADO	|SI	|SI|	carácter	| /public/rides/codigo/assign-ready/ |

----

**SOLICUTUD BUSQUEDA DE MOTORIZADO**

Quedando de la siguiente forma: 

![Ejemplo de 1.Solicitud Busqueda De Motorizado](<1.Solicitud Busqueda De Motorizado.png>)


