# 1. Antencedentes
Al conectarse a la VPN, se genera una IP que es dinámica y cambia cada vez que se realiza una nueva conexión, dificultando utilizar la configuración de MaxPoint.

# 2.	OBJETIVO GENERAL 
Permitir conectarse remotamente a través de VPN, validando el segmento de red del usuario en vez de la IP exacta.

## 2.1.	Objetivos específicos 
* Crear una política de configuración a nivel de estación.

# 3. POLÍTICAS DE CONFIGURACIÓN 
## 3.1.	Colección Estación
Ingresar a la pantalla de administración de políticas:

![IMG1](img1.png)

Ingresar a la pestaña “Estación”, y presionar en el botón “Nueva Colección”:

![IMG2](Img2.png)

Crear una política con la siguiente información:
* **Colección:** CONEXION REMOTA
* **Módulo:** Estaciones
* **Observaciones:** Datos para conexión remota (a través de VPN)

![IMG3](img3.png)

## 3.2.	Colección de Datos de Estación
Una vez creada la colección, presionar el botón “Nuevo Parametro”:

![IMG4](img4.png)

Crear un parámetro con la siguiente información:
* **Parámetro:** SEGMENTO DE RED
* **Tipo de Dato:** Caracter
* **Especificar Valor:** Si
* **Obligatorio:** Si

![IMG5](img5.png)

## 3.3.	Política de Configuración de Estación
Ingresar a la pantalla de Estación:

![IMG6](img6.png)

Seleccionar el restaurante de la lista, y seleccionar la estación a la cual se desea configurar la conexión remota.

<font color = "yellow"> **Nota:** para el correcto funcionamiento de esta funcionalidad, solo una estación puede tener habilitada la conexión remota, por lo cual debe haber un máximo de una estación con la política de conexión remota por restaurante.</font>

Una vez abierta la pantalla de la estación, seleccionar la pestaña “Políticas de configuración”, y presionar en el botón “+”:

![IMG7](img7.png)

Crear una configuración con la siguiente información:
* **Colección de Estación:** CONEXION REMOTA
* **Colección de Datos de Estación:** SEGMENTO DE RED
* **Carácter:** 10.242. 	[tomar en cuenta el punto al final]

![IMG8](img8.png)


