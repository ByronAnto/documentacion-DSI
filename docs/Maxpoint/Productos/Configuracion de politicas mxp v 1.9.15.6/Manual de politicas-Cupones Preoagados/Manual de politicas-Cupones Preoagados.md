# Manual de politicas-Cupones Preoagados

## 1	ANTECEDENTES
El sistema Back office de MaxPoint recibirá una nueva funcionalidad que le permitirá ejecutar el proceso de obtención de token de seguridad para cupones prepagados. Para este efecto, será necesario crear y configurar las políticas correspondientes en el sistema.

## 2	OBJETIVO GENERAL
Crear y configurar las políticas y parámetros para la integración con la funcionalidad.

### 2.1	Objetivos específicos
* Crear las políticas y parámetros a nivel de Cadena
* Configurar los parámetros de las políticas creadas

## 3	POLÍTICAS DE CONFIGURACIÓN
### 3.1	Datos Generales
En este manual se detalla cómo crear las políticas y parámetros de estas a nivel de cadena, que permitirán integrarse con la funcionalidad.

### 3.2	Pantalla de Políticas
Ingresar al sistema MaxPoint BackOffice con credenciales de administrador sistemas.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

![img1](cp1.png)

### 3.3	Cadena
#### 3.3.1	Colección Cadena
Antes de crear las políticas de configuración; como primer paso se debe verificar si la política **SIR API INTEGRACION** ya se encuentra creada. De ser el caso validar que la colección contenga los parámetros establecidos en este manual.

Si alguna de las políticas NO existe, se debe crearla así:

   **Política SIR API INTEGRACION:**

En la opción **Cadena** presionar sobre el botón **Nueva Colección**, se abrirá una modal para su creación ingresando los siguientes datos:

Tabla 1. Colección de Datos Cadena

| N° | Colección           | Observaciones      |
| -- | ------------------- | ------------------ |
| 1  | SIR API INTEGRACION |                    |

**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; debe ser escrita tal y como se especifica en la tabla 1.

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** No aplica.

**Observaciones:** No aplica.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

![img2](cpd2.png)

#### 3.3.2	Parámetro de Colección 
Antes de agregar los parámetros de configuración mostrados en la tabla 2, se debe verificar si ya encuentren creados. De ser el caso validar que cada parámetro contenga los valores establecidos en este manual.

Si alguno de los parámetros NO existe dentro de la *Colección* especificada en la Tabla 2, se debe crearla así:

Seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la cual se abrirá una venta para su creación y para cada Parámetro ingresamos los siguientes datos:

Tabla 2. Datos Parámetros de Colección de Datos Cadena

| N° | Colección           | Parámetro         | Tipo Dato |Esp. Valor | Obligatorio |Estado 1 |Estado 2 |
| -- | ------------------- | ----------------- |---------- |---------- |------------ |-------- |-------- |
| 1  | SIR API INTEGRACION | CLIENT_ID         | Caracter  | SI        | SI          | NO      | NO      |
| 2  | SIR API INTEGRACION | CLIENT_SECRET     | Caracter  | SI        | SI          | NO      | NO      |
| 3  | SIR API INTEGRACION | URL OBTENER TOKEN | Caracter  | SI        |SI           | NO      | NO      |

**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 2.

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.

**Especificar Valor:** Se especifica en la tabla 2.

**Obligatorio:** Se especifica en la tabla 2.

**Estado 1:** Se especifica en la tabla 2.

**Estado 2:** Se especifica en la tabla 2.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todos los parámetros de configuración establecidos en la tabla 2. Se presentan los modales de configuración de cada parámetro a continuación:

![img3](cpd3.png)
![img4](cpd4.png)
![img5](cpd5.png)

#### 3.3.3	Cadena Colección de Datos
En el menú principal del BackOffice de MaxpOint, nos dirigimos a **Cadena** y seleccionamos la opción **CADENA**, seguidamente seleccionamos la pestaña **Políticas de configuración**. 

![img6](cp7.png)

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una ventana, seguidamente buscaremos la colección creada y agregamos el valor en los parametros solicitados. 

Para cada uno de los parametros ‘CLIENT_ID’, ‘CLIENT_SECRET’ y ‘URL OBTENER TOKEN’crearlos y llenar sus valores como se muestra en la tabla a continuación:
 
Tabla 3. Parámetros de la colección

| N° | Dato              | Valor                                                |
| -- | ----------------- | ---------------------------------------------------- |
| 1  | CLIENT_ID         |                           1                          |
| 2  | CLIENT_SECRET     | zfmZ1RbHy93GzigsDs1JFs88LhG0AEZZ9s8GhYra             |
| 3  | URL OBTENER TOKEN | https://sirintegration.azurewebsites.net/oauth/token |

Si se ha realizado correctamente, se debe mostrar así:

![img6](cpd6.png)

#### 3.3.4	Puntos a considerar
1.	Cada uno de los parámetros deben configurarse (escribirse) **exactamente** como está en este manual, respetando mayúsculas y minúsculas.
