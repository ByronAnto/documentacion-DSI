# Manual de Configuracion de Precio de Fantasia.
# MANUAL CONFIGURACION PRECIO DE FANTASIA
## INTRODUCCION

**Introducción -** En este manual se detalla la creación y configuración de políticas, para 
la configuración de plus por presas.

**1. CONFIGURACION DE POLÍTICAS**

1. Para ingresar al módulo de **“Administración De Políticas”**, debe dar clic en la 
opción **“Seguridades”** y en el módulo de **“Políticas”**.

![Ejemplo de Precios Administracion Seguridades Politicas](<Precios Administracion Seguridades Politicas.png>)

2. Al dar clic en la opción de ![Ejemplo de Precios Ir Administarcion de Politicas](<Precios Ir Administarcion de Politicas.png>), se desplegará la siguiente pestaña y abrir la sección de Cadena y Plus.

![Ejemplo de Precios Administracion Politicas COLECCION](<Precios Administracion Politicas COLECCION.png>)

3. A continuación, se detallará la creación de las politicas que se deben realizar para la configuración de precios de fantasías, tendrá una política general por Cadena donde se podrá activar el módulo y una política por producto

**1.1 POLÍTICAS DE CADENA Y PRODUCTO**

1.1.1 CONFIGURACION DE LA COLECCION

**a. Creación de la Colección**

Clic en el icono “Cadena” para agregar una colección de cadena (Cadena)

![Ejemplo de Precios Administracion Politicas CADENA](<Precios Administracion Politicas CADENA.png>)

Dar clic en la opción ![Ejemplo de Precios NUEVA COLECCION](<Precios NUEVA COLECCION.png>) y se desplegará la siguiente pantalla emergente.

![Ejemplo de Precios Config Precio de Fantasia](<Precios Config Precio de Fantasia.png>)

Ingrese los siguientes parametros y dar click sobre el botón Guardar. 

| Campo | valor |  
|---|---|
| Colección | CONFIG PRECIO DE FANTASIA | 
| Observaciones | Configuración de precio de fantasía Activo 1 y Inactivo 0 |  
---

Creación de los Parámetros

Ubicarse en las políticas por **“Cadena”**, buscar la nueva colección “CONFIG PRECIO DE FANTASIA”.

![Ejemplo de Precios Cadena Config Precio de Fantasia](<Precios Cadena Config Precio de Fantasia.png>)

Al dar click sobre el icono **"+ Nuevo Parámetro"**, una pantalla emergente se desplegará para crear el parámetro **ACTIVO**. 

1. PARAMETRO: ACTIVO

![Ejemplo de Precios Parametro ACTIVO](<Precios Parametro ACTIVO.png>)

| PARAMETRO | TIPO DATO | ESP. VALOR |OBLIGATORIO |  
|---|---|---|---|
| ACTIVO | ENTERO | NO | NO |
---

NOTA: AHORA SOLO DEBERA REGISTRAR A CADA CADENA EL 
DATO PARA ACTIVO:

-SI EL MODULO DE PRECIO DE FANTASIA <font color="green">SI</font> ESTARA ACTIVO PARA LA CADENA ACTIVO SE ASGNARA EL VALOR ENTERO <font color="green">(1)</font>

-SI EL MODULO DE PRECIO DE FANTASIA <font color="red">NO</font> ESTARA ACTIVO PARA LA CADENA ACTIVO SE ASIGNARA EL VALOR ENTERO <font color="red">(0)</font>

Clic en el ícono **“Plus”** para agregar una colección de producto (Plus)

![Ejemplo de Precios Administracion Politicas PLUS](<Precios Administracion Politicas PLUS.png>)

Dar clic en la opción **+ Más Nueva Colección**, y se desplegará la siguiente pantalla emergente. 

![Ejemplo de Precios Administracion Politicas PLUS Precio Fantasia](<Precios Administracion Politicas PLUS Precio Fantasia.png>)

Ingrese los siguientes parametros y dar click sobre el botón Guardar.

| Campo | valor |
|---|---|
| Colección | PRECIO DE FANTASIA |
| Observaciones | Política para configurar precio ficticio de producto que pueda ser usado en promociones como un precio anterior | 
---

b. Creación de los Parámetros

Ubicarse en las políticas por **“PLUS”**, buscar la nueva colección **“PRECIO DE FANTASIA”**.

![Ejemplo de Precios PLUS PVP](<Precios PLUS PVP.png>)

Al dar click sobre el icono **+ Nuevo Parámetro** , una pantalla emergente se desplegará
para crear el parámetro PVP. 

2. PARAMETRO: PVP

![Ejemplo de Precios Nuevo Parametro PVP](<Precios Nuevo Parametro PVP.png>)

| PARAMETRO | TIPO DATO | ESP. VALOR |OBLIGATORIO |
|---|---|---|---|
| PVP | CARACTER | NO | NO |
---

ASIGNACION DE PRECIOS A LOS PRODUCTOS

Una vez realizada las configuraciones de politicas de la cadena y del producto la manera 
de llenar los precios de fantasia sera ingresando a la seccion del producto, seleccionar el 
producto a configurar y en la vista de los precios por categorias saldran los campos 
respectivos para llenar los precios de fantasia según todas las categorias que tenga el 
producto asignado (Si la cadena no tiene habilitada la politica para configuracion de 
precios de fantasia estos campos de ingresar los precios no van a estar visible)

![Ejemplo de Precios ASIGNACION PRECIOS PRODUCTOS](<Precios ASIGNACION PRECIOS PRODUCTOS.png>)

