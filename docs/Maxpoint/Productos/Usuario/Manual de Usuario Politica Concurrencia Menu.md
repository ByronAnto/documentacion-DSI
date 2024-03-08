# Manual de Usuario Politica Concurrencia Menu.
# MANUAL DE USUARIO PARA LA CONFIGURACIÓN DE LA POLITICA PARA EL CONTROL DE LA CUNCURRENCIA EN LA PANTALLA DE ADMINISTRACIÓN DE MENÚ.
## 1. INTRODUCCION

Concurrencia Menú

**Introducción -** Este manual indica los pasos a seguir para las configuraciones de las políticas para correcto funcionamiento del control de la concurrencia del menú.

## 2.	CONFIGURACIÓN DE POLÍTICA DE CADENA

1.	Para ingresar al módulo de **“Administración De Políticas”**, debe dar click en la opción **“Seguridades”** y en el módulo de **“Políticas”**

![Ejemplo de Concurrencia Administracion Politicas Seguridades Politicas](<Concurrencia Administracion Politicas Seguridades Politicas.png>)

2.	 Al dar click en la opción de **IR A ADMINISTRACION POLITICA**, se desplegará la siguiente pestaña.

![Ejemplo de Concurrencia Administracion Politicas Pantalla Desplegada](<Concurrencia Administracion Politicas Pantalla Desplegada.png>)

**1.1	 CREACION DE LA POLÍTICA**

1.	Click en el boton **“Cadena”** para la creacion de una colección de Cadena.

![Ejemplo de Concurrencia Administracion Politicas Cadena](<Concurrencia Administracion Politicas Cadena.png>)

2.	Click en el boton “Nueva Colección”.

Creamos colección a nivel de cadena con los siguientes datos:

**Nombre de la colección:** CONCURRENCIA MENU

**Módulo:** Menu

**Observación:** versión Maxpoint Back Office Ecuador 

Política para la configuración de parámetro que permite el correcto funcionamiento para gestionar la el tiempo de inactividad de la pantalla Administración de menú. Se espera un valor entero que va a representar el tiempo en minutos. 

Si la política no esta configurada o su valor es 0, el tiempo será de 10 minutos.

![Ejemplo de Concurrencia Concurrencia Menu](<Concurrencia Concurrencia Menu.png>)

**1.2	SELECCIÓN Y CREACIÓN DE PARÁMETROS**

**a.	Selección de la Colección**

1.	Click en el ícono **“CADENA”** para seleccionar una colección de Cadena

![Ejemplo de Concurrencia CADENA Seleccionar](<Concurrencia CADENA Seleccionar.png>)

2.	En la tabla izquierda de Colecciones buscar la coleccion **“CONCURRENCIA MENU”**  y la seleccionamos.

![Ejemplo de Concurrencia CONCURRENCIA MENU VERDE](<Concurrencia CONCURRENCIA MENU VERDE.png>)

**b.	Creación de los Parámetros**

A continuación, se debe crear los siguientes parámetro :  *TIEMPO DE ESPERA INACTIVIDAD*.

Al dar click sobre el icono **+ Nuevo Parametro**, se desplegará una pantalla emergente para crear el parámetro mencionado. Ahora se detallará las configuraciones de los nuevos parametros.

PARAMETRO: TIEMPO DE ESPERA INACTIVIDAD

![Ejemplo de Concurrencia TIEMPO DE ESPERA INACTIVIDAD](<Concurrencia TIEMPO DE ESPERA INACTIVIDAD.png>)

|     PARAMETRO    |     TIPO DATO    |     ESP. VALOR    |     OBLIGATORIO    |     VALOR A CONFIGURAR    |  |  |  |
|---|---|---|---|---|---|---|---|
|     TIEMPO DE ESPERA INACTIVIDAD    |     Entero    |     SI    |     NO    |     10    |  |  |  |
---

## 2. CONFIGURACION DEL VALOR DEL PARAMENTRO DE LA POLÍTICA POR CADENA

Política para la configuración de parámetro que permite el correcto funcionamiento para gestionar el tiempo de inactividad de la pantalla Administración de menú. Se espera un valor entero que va a representar el tiempo en minutos. 

Si la política no está configurada o su valor es 0, el tiempo por defecto será de 10 minutos.

1.	Para configurar una **política de cadena** es necesario ingresar a la opción Cadena/Cadena, y en esta pantalla a la opción <font color="blue">Políticas de Configuración</font>

![Ejemplo de Concurrencia Politicas Configuracion CADENA](<Concurrencia Politicas Configuracion CADENA.png>)

2.	Una vez ubicado en la pestaña Políticas de Configuración dar click en el botón “+” en la parte superior derecha de la tabla para añadir los parámetros, IMPORTANTE: repetir este proceso para cada COLECCIÓN y sus PARÁMETROS

![Ejemplo de Concurrencia Politicas Configuracion MAS](<Concurrencia Politicas Configuracion MAS.png>)

**3.1	Elegir la Colección “CONCURRENCIA MENU”**

3.1.1 Elegir el Parámetro “TIEMPO DE ESPERA INACTIVIDAD”

![Ejemplo de Concurrencia CONCURRENCIA MENU Entero 10](<Concurrencia CONCURRENCIA MENU Entero 10.png>)

|     PARAMETRO    |     TIPO DATO    |     VALOR    | 
|---|---|---|
|     TIEMPO DE ESPERA INACTIVIDAD    |     Entero    |     <font color="red">10</font>    |  
---
