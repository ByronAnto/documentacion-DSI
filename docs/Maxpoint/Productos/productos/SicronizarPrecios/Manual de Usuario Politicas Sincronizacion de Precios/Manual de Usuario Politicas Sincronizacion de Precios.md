# MANUAL PARA LA CONFIGURACIÓN DE LA SINCRONIZACIÓN DE PRECIOS DESDE MAXPOINT HACIA SIR

## <p align="center"> INTRODUCCION </p>

<p align="center"> CONFIGURACIÓN DE LA SINCRONIZACIÓN DE PRECIOS DE LOS PRODUCTOS DESDE MAXPOINT HACIA SIR </p>


**Introducción -** En este manual se detalla la creación y configuración de políticas, procedimientos y funciones para la configuración de “DE LA SINCRONIZACIÓN DE PRECIOS DE LOS PRODUCTOS DESDE MAXPOINT HACIA SIR“

## 1.	CONFIGURACION DE POLÍTICAS

1.	Para ingresar al módulo de **“Administración De Políticas”**, debe dar clic en la opción **“Seguridades”** y en el módulo de **“Políticas”**

![img](image.png)

2. Al dar clic en la opción de ![img1](image-1.png) , se desplegará la siguiente pestaña

![img2](image-2.png)

### 1.2	*POLÍTICAS DE CADENA (Selección y Creación de Nueva Colección)*
#### 1.2.1 Selección de la Coleccion

1.	En la tabla izquierda de Colecciones buscar la colección llamada **“INTEGRACION SIR”**  y la seleccionamos

![img3](image-3.png)

#### 1.2.2. Creación de los Parámetros

A continuación, se debe crear los siguientes parámetro :  *CLIENT ID, CLIENT SECRET, ENDPOINT TOKEN, PREFIJO PAIS, APLICA INTEGRACION, ENDPOINT ACTUALIZACION PRECIOS  y URL BASE.*

Al dar click sobre el icono ![img4](image-4.png)  , se desplegará una pantalla emergente para crear el parámetro mencionado. Ahora se detallará las configuraciones de los nuevos parametros.

<font color = "yellow"> NOTA: Pueden existir parametros creados debido a desarrollos anterior, para este desarrollo el parametro nuevo es: ENDPOINT ACTUALIZACION PRECIOS.
Pero los parametros previamente mencionados son todos necesarios. </font>

1.	**PARAMETRO: APLICA INTEGRACION**

![img5](image-5.png)

| PARAMETRO          | TIPO DATO | ESP. VALOR | OBLIGATORIO |
|--------------------|-----------|------------|--------------|
| APLICA INTEGRACION | Selección | NO         | NO           |

<font color = "yellow"> NOTA:Este parametro es opcional si no se encuentra o esta con valor NO la funcionalidad de sincronizacion de precios no estara disponible, pero si esta con valor de SI, la funcionalidad si estara disponible. </font>


2.	**PARAMETRO: PREFIJO PAIS**

![img6](image-6.png)

| PARAMETRO    | TIPO DATO | ESP. VALOR | OBLIGATORIO |
|--------------|-----------|------------|--------------|
| PREFIJO PAIS | Caracter  | SI         | SI           |

3.	**PARAMETRO: CLIENT ID**

![img7](image-7.png)

| PARAMETRO | TIPO DATO | ESP. VALOR | OBLIGATORIO |
|-----------|-----------|------------|--------------|
| CLIENT ID | Caracter  | SI         | SI           |

4.	**PARAMETRO: CLIENT SECRET**

![img8](image-8.png)

| PARAMETRO     | TIPO DATO | ESP. VALOR | OBLIGATORIO |
|---------------|-----------|------------|--------------|
| CLIENT SECRET | Caracter  | SI         | SI           |

5.	**PARAMETRO: ENDPOINT ACTUALIZACION PRECIOS**

![img9](image-9.png)

| PARAMETRO                       | TIPO DATO | ESP. VALOR | OBLIGATORIO |
|--------------------------------|-----------|------------|--------------|
| ENDPOINT ACTUALIZACION PRECIOS | Caracter  | SI         | SI           |

6.	**PARAMETRO: ENDPOINT TOKEN**

![img10](image-10.png)

| PARAMETRO       | TIPO DATO | ESP. VALOR | OBLIGATORIO |
|----------------|------------|------------|--------------|
| ENDPOINT TOKEN | Caracter   | SI         | SI          |

7.	**PARAMETRO: URL BASE**

![img11](image-11.png)

| PARAMETRO | TIPO DATO | ESP. VALOR | OBLIGATORIO |
|-----------|-----------|------------|-------------|
| EURL BASE | Caracter  | SI         | SI          |

## 2. ACTIVACIÓN DE POLÍTICAS

### 2.1	*ACTIVACIÓN DE POLITICAS DE CONFIGURACION POR CADENA*
1.	Para configurar una **política de cadena** es necesario ingresar a la opción Cadena/Cadena, y en esta pantalla a la opción <font color = "pink"> Políticas de Configuración </font>

![img12](image-12.png)

2.	Una vez ubicado en la pestaña Políticas de Configuración dar click en el botón “+” en la parte superior derecha de la tabla para añadir los parámetros, IMPORTANTE: repetir este proceso para la COLECCIÓN y sus PARÁMETROS

![uimg13](image-13.png)

3.	Elegir la Colección **“INTEGRACION SIR”**
3.1  Elegir el Parámetro **“APLICA  INTEGRACION”**

![img14](image-14.png)

![img15](image-15.png)

| PARAMETRO          | TIPO DATO | SELECCION |
|--------------------|------------|----------|
| APLICA INTEGRACION | Seleccion  | NO       | 

<font color = "yellow"> NOTA: Este parámetro nos permite validar si se aplica la integración con SIR o el sistema sigue funcionando solo con la data de MaxPoint. </font>

3.2  Elegir el Parámetro **“PREFIJO PAIS”**

![img16](image-16.png)

![img17](image-17.png)

| PARAMETRO   | TIPO DATO | VARCHAR  | 
|-------------|------------|---------|
| PREFIJO PAIS | Caracter  | ECU     |

<font color = "yellow"> NOTA: Poner el prefijo del País al que se aplicara la integración Ejemplo: Ecuador => ECU, Colombia => COL, Chile => CHI, etc </font>

3.3 Elegir el Parámetro **“CLIENT ID”**

![IMG18](image-18.png)

![IMG19](image-19.png)

| PARAMETRO   | TIPO DATO | VARCHAR  | 
|-------------|-----------|---------|
| CLIENT ID   | Caracter  | 1        |

3.4 Elegir el Parámetro **“CLIENT SECRET”**

![IMG20](image-20.png)

![IMG21](image-21.png)

| PARAMETRO   | TIPO DATO | VARCHAR  | 
|-------------|-----------|---------|
| CLIENT SECRET | Caracter  | zfmZ1RbHy93GzigsDs1JFs88LhG0AEZZ9s8GhYra  |

3.5  Elegir el Parámetro **“URL BASE”**

![22](image-22.png)

![23](image-23.png)


| PARAMETRO   | TIPO DATO | VARCHAR  | 
|-------------|-----------|---------|
| URL BASE    | Caracter  | https://sirintegration.azurewebsites.net (producción) |
|  |      | https://sirintegrationpaises-dev.azurewebsites.net (ambiente pruebas) |

3.6 Elegir el Parámetro **“ENDPOINT TOKEN”**

![24](image-24.png)

![25](image-25.png)


| PARAMETRO   | TIPO DATO | VARCHAR  | 
|-------------|-----------|---------|
| ENDPOINT TOKEN | Caracter  | /oauth/token |

3.7 Elegir el Parámetro **“ENDPOINT ACTUALIZACION PRECIOS”**

![IMG26](image-26.png)

![27](image-27.png)

| PARAMETRO   | TIPO DATO | VARCHAR  | 
|-------------|-----------|---------|
| ENDPOINT TOKEN | Caracter  | /api/maxpoint/updatePricePlus |