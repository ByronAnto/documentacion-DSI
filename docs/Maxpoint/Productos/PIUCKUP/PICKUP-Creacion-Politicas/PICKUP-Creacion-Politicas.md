# CREACION DE POLITICAS PICKUP

# <p align="center"> INTRODUCCION </p>
<p align="center"> PICKUP</p>

**Introducción** - En este manual se detalla la creación de políticas que se deben configurar en el BackOffice de Max-Point para el correcto funcionamiento de Pickup. A continuación, un listado de la administración de políticos que se deben configurar a nivel de Cadena, Restaurante y Estación para el proceso de Pickup. 

![IMG](image.png)

* POLÍTICAS EN LA OPCIÓN DE CADENA 

| COLECCIÓN           | PARAMETRO               | Esp. Valor | Obligatorio |
|---------------------|-------------------------|------------|-------------|
| CONFIGURACION PICKUP| PICKUP APLICA           | X          | X           |
|                     | PICKUP CANCELAR PEDIDO  |            | X           |

* POLÍTICAS EN LA OPCIÓN DE RESTAURANTE  

| COLECCIÓN           | PARAMETRO               | Esp. Valor | Obligatorio |
|---------------------|-------------------------|------------|-------------|
| CONFIGURACION PICKUP| PICKUP APLICA           | X          | X           |
|                     | PICKUP COOKTIME         |            | X           |
|                     | PICKUP TIEMPO APERTURA  |            | X           |
|                     | PICKUP TIEMPO CIERRE    |            | X           |

* 	POLÍTICAS EN LA OPCIÓN DE ESTACION 

| COLECCIÓN           | PARAMETRO               | Esp. Valor | Obligatorio |
|---------------------|-------------------------|------------|-------------|
| CONFIGURACION PICKUP| Pickup estación Activo? | X          | X           |
|                     | Pickup Nombre Cajero    | X          | X           |


**Objetivo** - Conocer sobre las diferentes configuraciones que se deben realizar antes de poner en producción el desarrollo del proceso de pickup, así evitar inconvenientes con Maxpoint. 

## ADMINISTRACIÓN DE POLÍTICAS

1.	Para ingresar al módulo de “Administración De Políticas”, debe dar clic en la opción “Seguridades” en el módulo de “Políticas

![alt text](image-1.png)

2.	 Al dar clic en la opción de ![alt text](image-2.png) , se desplegara la siguiente pestaña

![alt text](image-3.png)

3.	A continuación, se detallará la creación de las politicas que se deben realizar para el paso a producción de PICKUP en cadena, restaurante y estación

![alt text](image-4.png)

## POLÍTICAS DE CADENA 
## A.	COLECCIÓN CONFIGURACIÓN PICKUP 	
### a.	Creación de la Colección
1.	Clic en el ícono “Cadena” para agregar una colección de Cadena

![alt text](image-5.png)

2.	Dar clic en la opción  ![alt text](image-6.png)  y se desplegará la siguiente pantalla emergente.    

![IMG](image-7.png)

3.	Ingrese los siguientes parametros y dar click sobre el botón Guardar. 

| Campo         | Valor                 |
|---------------|-----------------------|
| Colección     | CONFIGURACION PICKUP |
| Observaciones | Configuración de parámetros para pickup |

### b.	Creación de los Parámetros
En la nueva colección **“CONFIGURACION PICKUP”** en la pestaña de cadena , se debe crear los siguientes parámetros : PICKUP APLICA, PICKUP CANCELAR PEDIDO.

![IMG](image-8.png)

Al dar click sobre el icono ![alt text](image-6.png)  ,  una pantalla emergente se desplegará para crear los parámetros ya mencionados. 

A continacion se detallará las configuraciones de los parámetros.

1.	PARAMETRO PICKUP APLICA

![IMG](image-9.png)

| Campo       | Valor       |
|-------------|-------------|
| Parámetro   | PICKUP APLICA |
| Tipo de dato | Selección   |
| Esp. Valor  | Si          |
| Obligatorio | Si          |

2.	PARAMETRO PICKUP CANCELAR PEDIDO

![IMG](image-10.png)

| Campo       | Valor                |
|-------------|----------------------|
| Parámetro   | PICKUP CANCELAR PEDIDO |
| Tipo de dato | Entero               |
| Obligatorio | SI                   |


## POLÍTICAS DE RESTAURANTE 
## A.	COLECCIÓN CONFIGURACIÓN PICKUP
### a.	Creación de la Colección
1.	Clic en el ícono “Cadena” para agregar una colección de Cadena

![IMG](image-11.png)

2.	Dar clic en la opción ![IMG](image-6.png) y se desplegara la siguiente pantalla emergente 

![IMG](image-12.png)

3.	Ingrese los siguintes parametras y dar click sobre sobre el botón Guardar

| Campo       | Valor                   |
|-------------|-------------------------|
| Colección   | CONFIGURACION PICKUP    |

### b.	Creación de los Parámetros
En la nueva colección “CONFIGURACION PICKUP” en la pestana de cadena , se debe crear los siguintes parámetros : *PICKUP APLICA, PICKUP COOKTIME,  PICKUP TIEMPO APERTURA, PICKUP TIEMPO CIERRE, PICKUP USUARIO*.

![IMG](image-13.png)

Al dar click sobre el icono ![IMG](image-6.png) , se desplegará una pantalla emergente para crear el parámetro ya mencionado. 

A continacion se detallara las configuricaions de los parametros.

1.	PARAMETRO PICKUP APLICA

![IMG14](image-14.png)

| Campo       | Valor     |
|-------------|-----------|
| Parámetro   | PICKUP APLICA |
| Tipo de dato | Selección |
| Esp. Valor  | Si        |
| Obligatorio | Si        |

2.	PARAMETRO PICKUP COOKTIME

![IMG15](image-15.png)

| N   |Campo         | Valor           |
|---- |--------------|-----------------|
| 1.  |Parámetro     | PICKUP COOKTIME |
| 2.  | Tipo de dato | Entero          |
| 3.  | Obligatorio  | SI              |

3.	PARAMETRO PICKUP TIEMPO APERTURA

![IMG](image-16.png)

| Campo        | Valor               |
|--------------|---------------------|
| Parámetro    | PICKUP TIEMPO APERTURA |
| Tipo de dato | Entero              |
| Obligatorio  | Si                  |


4.	PARAMETRO PICKUP TIEMPO CIERRE

![IMG17](image-17.png)

| Campo        | Valor                 |
|--------------|-----------------------|
| Parámetro    | PICKUP TIEMPO CIERRE  |
| Tipo de dato | Entero                |
| Obligatorio  | Si                    |



## POLÍTICAS DE ESTACION 
## A.	COLECCIÓN CONFIGURACIÓN PICKUP
### a.	Creación de la Colección

1.	Clic en el ícono “Estación” para agregar una colección de estación.

![IMG](image-18.png)

2.	Dar clic en la opción ![IMG](image-6.png) y la siguiente pantalla emergente se desplegara.   

![IMG](image-19.png)

3. Ingrese los siguintes parametras y dar click sobre el botón Guardar. 

| Campo      | Valor                |
|------------|----------------------|
| Colección  | CONFIGURACION PICKUP|


### b.	Creación de los Parámetros
En la nueva colección “CONFIGURACION PICKUP” en la pestana de cadena , se debe crear los siguintes parámetros : *Pickup estacion Activo?, Pickup Nombre Cajero.*

![IMG](image-20.png)


Al dar click sobre el icono ![IMG](image-6.png)  ,  se desplegará una pantalla emergente para crear el parámetro ya mencionado. 

A continuación se detallará las configuración de los parámetros.


1.	PARAMETRO Pickup estacion Activo

![IMG](image-21.png)

| Campo       | Valor     |
|-------------|-----------|
| Parámetro   | Pickup estacion Activo? |
| Tipo de dato| Selección |
| Esp. Valor  | Si        |
| Obligatorio | Si        |

2.	PARAMETRO Pickup Nombre Cajero

![IMG22](image-22.png)

| Campo       | Valor             |
|-------------|-------------------|
| Parámetro   | Pickup Nombre Cajero |
| Tipo de dato| Caracter          |
| Esp. Valor  | Si                |
| Obligatorio | Si                |


# ANEXOS
## Colección Cadena : 

![IMG23](image-23.png)

![IMG24](image-24.png)

## Colección Restaurante : 

![IMG24](image-25.png)

## Colección Estación : 

![IMG25](image-26.png)