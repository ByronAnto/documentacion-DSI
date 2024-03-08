# MANUAL DE USUARIO PARA LA CREACIÓN Y ACTUALIZACIÓN DE PRODUCTOS, DESDE MAXPOINT HACIA SIR.

## <p align="center"> INTRODUCCION </p>
<p align="center"> Creación y Actualización de Productos desde MaxPoint hacia SIR </p>

**Introducción** - Este manual indica al usuario las diferentes alertas y validaciones que se realizan en el proceso de la creación y actualización de los productos.


### 1.	INGRESO A LA PANTALLA NUEVA PRODUCTOS

#### 1.1	ESCENARIO CON PARAMETRO DE APLICA INTEGRACION EN NO
1.	Para ingresar se debe dar click en la opción “PRODUCTOS”, luego “NUEVA PRODUCTOS” y se cargara la pantalla con los productos. Si la política “INTEGRACION SIR” y el parámetro “APLICA INTEGRACION” no existen o el parámetro “APLICA INTEGRACION” esta con valor “NO”, se cargaran los productos y sus parámetros desde la BD de MaxPoint. Y no será visible el botón “NUEVO” que permite crear productos.

Además el usuario solo podrá realizar la acción de Actualización de los productos

![img](image.png)


#### 1.2 ESCENARIO CON PARAMETRO DE APLICA INTEGRACION EN SI

1.	Para ingresar se debe dar click en la opción “PRODUCTOS”, luego “NUEVA PRODUCTOS” y se cargara la pantalla con los productos. Si las políticas y sus parámetros no han sido configurados correctamente, no mostrar la información de los productos. Y mostrara un mensaje con los parámetros que faltan por configurar.

![img1](image-1.png)

2.	Si las políticas se encuentran configuradas correctamente podrá ingresar a la pantalla de “PRODUCTOS” y visualizar los productos.

<font color = "yellow"> *Nota: ”En esta pantalla se cargan los departamentos, clasificaciones y categorías desde SIR y se actualizan hacia maxpoint, en caso de que alguna de esa información no venga desde SIR, se muestra un mensaje”* </font>


![img2](image-2.png)

3.	La siguiente pantalla muestra la validación cuando la información que debe de llegar desde SIR no pudo ser obtenida, en su defecto se carga la data desde MaxPoint. Mostrando el mensaje correspondiente.

![img3](image-3.png)

### 2.	CREACIÓN DEL PRODUCTO
#### 2.1 ESCENARIO DE EXITOSO
1.	Dar click sobre el botón nuevo.

![img4](image-4.png)

2.	Mostrará la ventana modal donde el usuario deberá ingresar los datos del producto a crear. Además el campo Plu Num Plu se encontrara deshabilitado.

![img5](image-5.png)

3.	Una vez ingresado todos los datos el sistema deberá darle click en el botón.
 “Guardar”.


![img6](image-6.png)

4.	Mostrará el loading indicando que el producto está siendo guardado

![img7](image-7.png)


5.	Cuando el producto se haiga guardado correctamente el sistema muestra el mensaje correspondiente a la transacción “Se ha creado el Plus correctamente”.

![img8](image-8.png)

#### 2.2 ESCENARIO FALLIDO

1.	Repetir los pasos de la CREACION EXITOSA hasta el paso 4.

2.	Si hubo un error al consumir el servicio que almacena el producto en SIR, mostrara el mensaje correspondiente a “No se guardó el producto, intente nuevamente” 

![img9](image-9.png)

#### 2.3 ESCENARIO PLU NUM PLU YA EXISTE
1.	Repetir los pasos de la CREACION EXITOSA hasta el paso 4.

2.	El sistema le indicara que Ya existe un Numero de Plus ****** creado con ese código para la cadena “Nombre de la cadena”.

![img10](image-10.png)

3.	Dar click en el Botón “OK”.

![img11](image-11.png)

4.	Como podemos observar el campo Plu Num Plus, toma un nuevo valor y podremos continuar con la transacción.

![img12](image-12.png)

### 3. ACTUALIZACIÓN DE PRODUCTOS 
1.	Ingresar al menú “PRODUCTOS”, y seleccionar la opción de “NUEVA PRODUCTOS”

![img13](image-13.png)

2.	De doble click sobre el producto que desea editar, se le mostrara un modal con los datos del producto.

![img14](image-14.png)

3.	Una vez editado los datos del producto, de click sobre el botón “Guardar”

![img15](image-15.png)

4.	Cuando de click en “Guardar”, se mostrara un loading que nos indica que se esta realizando la actualización del producto.

![img16](image-16.png)

5.	Se mostrara el mensaje de la actualización del producto, “Se ha actualizado el Plus correctamente”

![img17](image-17.png)