# MANUAL PARA LA CONFIGURACIÓN DE CREACIÓN Y ACTUALIZACIÓN DE PRODUCTOS DESDE MAXPOINT HACIA SIR

# <p align="center"> INTRODUCCIÓN </p>
<p align="center"> CONFIGURACIÓN CREACIÓN Y ACTUALIZACIÓN DE PRODUCTOS DESDE MAXPOINT HACIA SIR </p>

**Introducción - **En este manual se detalla la creación y configuración de políticas, procedimientos y funciones para la configuración de “CREACIÓN Y ACTUALIZACIÓN DE PRODUCTOS DESDE MAXPOINT HACIA SIR “

## 1.	CONFIGURACION DE POLÍTICAS

1.	Para ingresar al módulo de **“Administración De Políticas”**, debe dar clic en la opción **“Seguridades”** y en el módulo de **“Políticas”**

![img](image.png)

2.	 Al dar clic en la opción de  ![img1](image-1.png) , se desplegará la siguiente pestaña

![img2](image-2.png)

### 1.2	POLÍTICAS DE CADENA (Selección y Creación de Nueva Colección)
#### 1.2.1 Creación de la Colección
1.	Clic en el ícono **“CADENA”** y luego en el boton de Nueva Colección ![img3](image-3.png). 

![img4](image-4.png)

2.	Al dar click en el boton de la Nueva Colección, se cargar el modal donde registraremos los datos de nuestra nueva collecion. 

![img5](image-5.png)

Creamos colección a nivel de cadena con los siguientes datos:

**Nombre de la colección:** INTEGRACION SIR

**Módulo:** Plus

**Observación:** versión Maxpoint Back Office Ecuador 

Politica para la configuración de parametros que permiten el correcto funcionamiento de la creación y actualización de productos. Actualizacion y creacion de los departamentos, clasificaciones y categorias.


3.	En la tabla izquierda de Colecciones buscar la colección previamente creada **“INTEGRACION SIR”**  y la seleccionamos

![img6](image-6.png)

.2. Creación de los Parámetros

*A continuación, se debe crear los siguientes parámetro :  CLIENT ID, CREACION Y ACTUALIZACION PRODUCTOS, ENDPOINT CATEGORIAS, ENDPOINT LOCACIONES, ENDPOINT TOKEN, ENDPOINT DEPARTAMENTOS, PREFIJO PAIS, APLICA INTEGRACION, ID CADENA HOMOLOGA PRODUCTO  y URL BASE.*

Al dar click sobre el icono  ![img7](image-7.png) , se desplegará una pantalla emergente para crear el parámetro mencionado. Ahora se detallará las configuraciones de los nuevos parametros.

### 1.	PARAMETRO: APLICA INTEGRACION

![img8](image-8.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|--------------|
| APLICA INTEGRACION | Selección   | NO         | NO          |

### 2.	PARAMETRO: PREFIJO PAIS

![img9](image-9.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
|PREFIJO PAIS        | Caracter    | SI         | SI          |

### 3.	PARAMETRO: CLIENT ID

![IMG10](image-10.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| CLIENT ID          | Caracter    | SI         | SI          |

### 4.	PARAMETRO: CLIENT SECRET

![IMG11](image-11.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| CLIENT SECRET      | Caracter    | SI         | SI          |

### 5.	PARAMETRO: CREACION Y ACTUALIZACION PRODUCTOS

![IMG12](image-12.png)


| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| PARAMETROCREACION Y ACTUALIZACION PRODUCTOS  | Caracter    | SI         | SI          |

### 6.	PARAMETRO: ENDPOINT CATEGORIAS

![IMG13](image-13.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| CENDPOINT CATEGORIAS | Caracter    | SI         | SI          |

### 7.	PARAMETRO: ENDPOINT LOCACIONES

![IMG14](image-14.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| ENDPOINT LOCACIONES | Caracter    | SI         | SI          |


### 8.	PARAMETRO: ENDPOINT TOKEN

![IMG15](image-15.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| ENDPOINT TOKEN     | Caracter    | SI         | SI          |

### 9.	PARAMETRO: ENDPOINT DEPARTAMENTOS

![IMG16](image-16.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| ENDPOINT DEPARTAMENTOS | Caracter    | SI         | SI          |

### 10.	PARAMETRO: URL BASE

![IMG17](image-17.png)


| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| URL BASE           | Caracter    | SI         | SI          |

### 11.	PARAMETRO: ID CADENA HOMOLOGA PRODUCTO

![IMG18](image-18.png)

| PARAMETRO          | TIPO DATO   | ESP. VALOR | OBLIGATORIO |
|--------------------|-------------|------------|-------------|
| ID CADENA HOMOLOGA PRODUCTO | Caracter    | SI         | SI          |

## 2. ACTIVACIÓN DE POLÍTICAS
### 2.1 *ACTIVACIÓN DE POLITICAS DE CONFIGURACION POR CADENA*
1.	Para configurar una **política de cadena** es necesario ingresar a la opción Cadena/Cadena, y en esta pantalla a la opción <font color = "pink">Políticas de Configuración </font>

![img19](image-19.png)

2.	Una vez ubicado en la pestaña Políticas de Configuración dar click en el botón “+” en la parte superior derecha de la tabla para añadir los parámetros, IMPORTANTE: repetir este proceso para la COLECCIÓN y sus PARÁMETROS

![img20](image-20.png)


3.	Elegir la Colección **“INTEGRACION SIR”**

3.1  Elegir el Parámetro **“APLICA  INTEGRACION”**

![img21](image-21.png)

![img22](image-22.png)

| PARAMETRO          | TIPO DATO   | SELECCION | 
|--------------------|-------------|-----------|
| APLICA INTEGRACION | Seleccion   |      SI   |

<font color = "yellow"> NOTA: Este parámetro nos permite validar si se aplica la integración con SIR(“SI”) o el sistema sigue funcionando solo con la data de MaxPoint(“NO”). </font>

3.2  Elegir el Parámetro **“PREFIJO PAIS”**

![img23](image-23.png)

![img24](image-24.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| PREFIJO PAIS  | Caracter  | ECU     |

<font color = "yellow"> NOTA: Poner el prefijo del País al que se aplicara la integración Ejemplo: Ecuador => ECU, Colombia => COL, Chile => CHI, etc </font>

3.3 Elegir el Parámetro **“CLIENT ID”**

![img25](image-25.png)

![IMG26](image-26.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| CLIENT ID     | Caracter  | 1       |


3.4 Elegir el Parámetro **“CLIENT SECRET”**

![IMG27](image-27.png)

![IMG28](image-28.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| CLIENT SECRET | Caracter  | zfmZ1RbHy93GzigsDs1JFs88LhG0AEZZ9s8GhYra     |

3.5  Elegir el Parámetro **“URL BASE”**

![IMG29](image-29.png)

![IMG30](image-30.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| URL BASE      | Caracter  | https://sirintegration.azurewebsites.net |

3.6 Elegir el Parámetro **“ENDPOINT TOKEN”**

![IMG31](image-31.png)

![IMG32](image-32.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| URL BASE      | Caracter  | /oauth/token |

3.7  Elegir el Parámetro **“ENDPOINT LOCACIONES”**

![IMG33](image-33.png)

![IMG34](image-34.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| ENDPOINT LOCACIONES | Caracter  | /api/maxpoint/clasifications?location= |

3.8 Elegir el Parámetro **“ENDPOINT DEPARTAMENTOS”**

![IMG35](image-35.png)

![IMG36](image-36.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| ENDPOINT LOCACIONES | Caracter  | /api/maxpoint/departments?cod_cadena= |

3.9 Elegir el Parámetro **“ENDPOINT CATEGORIAS”**

![IMG37](image-37.png)

![IMG38](image-38.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| ENDPOINT LOCACIONES | Caracter  | /api/maxpoint/categories?cod_cadena= |

3.10 Elegir el Parámetro **“CREACION Y ACTUALIZACION PRODUCTOS”**

![IMG39](image-39.png)

| PARAMETRO     | TIPO DATO | VARCHAR |
|---------------|-----------|---------|
| ENDPOINT LOCACIONES | Caracter  | /api/maxpoint/plus  |

3.11 Elegir el Parámetro **“ID CADENA HOMOLOGA PRODUCTO”**

![IMG40](image-40.png)

![IMG41](image-41.png)

| PARAMETRO     | TIPO DATO | ENTERO  |
|---------------|-----------|---------|
| ENDPOINT LOCACIONES | Caracter  |   |

**OBSERVACIÓN: ESTE PARAMETRO ES OBLIGATORIO PARA LAS CADENAS QUE REALIZAN HOMOLOGACION DE PRODUCTOS HACIA UNA CADENA DESTINO.**

<font color = "yellow"> Nota: este parámetro indica el identificador de la cadena a la cual se le homologara la información del producto a crear. En el ejemplo se homologa a la cadena 10 [KFC] </font>
