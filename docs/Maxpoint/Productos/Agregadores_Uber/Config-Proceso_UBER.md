# MANUAL DE CONFIGURACION PROCESO UBER
## 1.	OBJETIVOS
Conocer sobre las diferentes configuraciones que se deben realizar antes de poner en producción el desarrollo de uber para evitar inconvenientes en el proceso.

## 2	MANUAL CONFIGURACION PROCESO VITALITY. 
2.1	Datos Generales

En este manual se detalla las configuraciones que deben realizar en el backoffice de Maxpoint para que el proceso UBER funcione de la mejor manera correcta.

2.2	Configuración de politicas Backend MAXPOINT 

Para poder configurar las políticas de Maxpoint como primer punto debemos ingresar al backend. Para ello ingresamos al mantenimiento de MaxPoint con las credenciales y seleccionamos la cadena a la cual vamos a configurar. Una vez ingresada en a la cadena nos vamos a la opción SEGURIDADES y luego a la pestaña políticas.

2.2.1	Configuración de politicas Formas de Pago


![Ejemplo de 3.Menú Pantalla de Políticas en Seguridades.](<3.Menú Pantalla de Políticas en Seguridades..png>)

Dentro de la pestaña políticas seleccionamos la opción Formas de pago, en la cual crearemos la colección REQUIERE CODIGO, para ello debemos pulsar sobre la opción .

![Ejemplo de 3.Nueva coleccion](<3.Nueva coleccion.png>)

y configurar de la siguiente manera:

![Ejemplo de 3.Configuración_Colección Requiere-Código.](<3.Configuración_Colección Requiere-Código.png>)

Creada la colección, debemos dar clic sobre ella y se desplegará todos los parámetros disponibles. (En este caso como es nueva no tendrá parámetros creados) 

![Ejemplo de 3.Colecciones_Formas pago– Requiere-código.](<3.Colecciones_Formas pago– Requiere-código.png>)

Terminado el proceso anterior debe aparecer de la siguiente forma la colección creada Continuando con el proceso, debemos crear parámetros asignando la colección creada. 

Dar clic sobre la opción

![Ejemplo de 3.Nueva Parametro](<3.Nueva Parametro.png>)

configuraremos de la siguiente manera:

![Ejemplo de 3.Configuracion_Parametro Requiere-Codigo](<3.Configuracion_Parametro Requiere-Codigo.png>)

Finalmente, si configuramos de manera correcta el parámetro debe visualizarse de la siguiente manera:

![Ejemplo de 3.Parametro_visualizar](3.Parametro_visualizar.png)

2.3	Creación de Política agregadores Información 
1.	Creación de política a nivel de cadena:

![Ejemplo de 3.Agreagdores_Informacion](3.Agreagdores_Informacion.png)

Parámetro UBER

![Ejemplo de 3.Parametro_UBER](3.Parametro_UBER.png)

2.	Creación de política a nivel de cadena:

![Ejemplo de 3.Creacion-politica_nivel_cadena](3.Creacion-politica_nivel_cadena.png)

2.4	Creación de Politica Lista de agregadores y canales 

1.	Creación de política a nivel de cadena:

Revisar si se encuentra creada la política LISTA DE AGREGADORES Y CANALES, de no mantener creada la política crearla de la siguiente manera:

Dirigirse a la administración de politicas

![Ejemplo de 3.Dirigirse_Creacion](3.Dirigirse_Creacion.png)

Crear el parámetro UBER

![Ejemplo de 3.Crear_parametro-UBER](3.Crear_parametro-UBER.png)

### Política por cadena 
1.	Configuración de política campo de Carácter con Información del RUC de Uber de Gerente.

![Ejemplo de 3.Politica_por_cadena](3.Politica_por_cadena.png)

Se configura de la siguiente manera

RUC: NL856287386B01

Entero: 0

![Ejemplo de 3.Configuracion_0](3.Configuracion_0.png)

![Ejemplo de 3.Configuracion_0-1](3.Configuracion_0-1.png)

2.	Creación de parámetro de la política creada

![Ejemplo de 3.Creacion_parametro_politica creada](<3.Creacion_parametro_politica creada.png>)

3.	Configuración de política campo de selección Activo si es agregador o no.

![Ejemplo de 3.Campo_Seleccion-activado](3.Campo_Seleccion-activado.png)

<font color="#ffff83">**Nota en Maxpoint:** Debe estar activado el campo de selección, ya que este proceso sirve para realizar interface.</font>

2.5	Configuración de Políticas Formas Pago UBER

Como ya hemos acabado de configurar las políticas, es momento de darles un valor a las mismas para ello nos dirigimos a la pestaña **GENERAL** y seleccionaremos **FORMAS DE PAGO - DEFINICION**. 

![Ejemplo de 3.Formas_Pago-Definicion](3.Formas_Pago-Definicion.png)

El sistema muestra todas las formas de pago creadas en una tabla. La forma de pago UBER no se aparece debido a que no se encuentra creada.

2.5.1	Craer Forma de Pago UBER

Para crear la forma de pago UBER debemos seguir los siguientes pasos:

1.	Acceder a la pestaña **GENERAL**, luego al submenú **FORMAS DE PAGO** e ingresar a la pantalla de **DEFINICION**.

2.	**IMPORTANTE: SE DEBE CREAR PRIMERO SOLO LA FORMA DE PAGO Y GUARDAR, DESPUES SE DEBE CONFIGURAR LAS POLITICAS YA QUE SI SE CONFIGURA TODO DARA ERROR DE REPLICA**.

3.	Agregar una nueva forma de pago en la opción.

![Ejemplo de 3.Logo_Nuevo](3.Logo_Nuevo.png)

4.	Configurar la forma de pago UBER (Forma de Pago crédito externo) como la siguiente imagen:

![Ejemplo de 3.Forma_Pago_credito-externo](3.Forma_Pago_credito-externo.png)

<font color="#ffff83">**Nota:** Se debe seleccionar en Código Respuesta DLL Gerente la opción que contenga el código de Crédito externo en el Sistema Gerente.</font>

5.	Al crear la forma de pago se agregan de manera automática dos políticas de configuración (si no se crean, debemos crearlas).

a.	Requiere autorización – Se solicita para aplicar forma de Pago

b.	Visualizar forma de pago-se muestra en el punto de venta.

<font color="#ffff83">Nota:</font>

* Si no se agregan de manera automática, debemos añadirlas.

* No debemos olvidarnos de agregar la política Requiere Código que hemos creado anteriormente y le damos un valor de selección.

* Al terminar la configuración se debe verificar que la forma de pago se vea de la siguiente manera:


**No se aplicará ningún cambio en “TIENDAS A APLICAR”**

**No se aplicará ningún cambio en “CLIENTES APLICAR”**

Crearemos las políticas de configuración:

![Ejemplo de 3.Crear_politicas-configuracion](3.Crear_politicas-configuracion.png)

Si no bajan automáticamente las crearemos manualmente 

Colocar los datos como se muestra en las imágenes

FACTURACION ELECTRONICA

![Ejemplo de 3.Facturacion-electronica](3.Facturacion-electronica.png)

REQUIERE AUTORIZACION

Escoger Bit: NO

![Ejemplo de 3.Requiere_Autorizacion](3.Requiere_Autorizacion.png)

REQUIERE CODIGO

![Ejemplo de 3.Requiere_Codigo](3.Requiere_Codigo.png)

VISUALIZAR FORMA DE PAGO

![Ejemplo de 3.Visualizar_Forma-Pago](3.Visualizar_Forma-Pago.png)

Nos dirigimos a RESTAURANTE Y ESCOJEMOS EL LOCAL AL QUE VAMOS A CONFIGURAR

![Ejemplo de 3.Restaurante_Local-configurar](3.Restaurante_Local-configurar.png)

Ingresamos a Políticas de Configuración

![Ejemplo de 3.Restaurante_Politicas-configuracion](3.Restaurante_Politicas-configuracion.png)

se debe configurar las políticas de restaurante:
1.	**impresión ficha – etiqueta de impresión en orden - ORDEN:**
2.	**impresión orden pedido-solicitar información inicio**
3.	**impresión orden pedido-imprime orden?**

![Ejemplo de 3.Confi_Restaurante-Impresion](3.Confi_Restaurante-Impresion.png)

AGREGAMOS IMPRESIÓN FICHA

![Ejemplo de 3.Agregamos_Impresion-Ficha](3.Agregamos_Impresion-Ficha.png)

AGREGAMOS IMPRIMIR ORDEN DE PEDIDO

![Ejemplo de 3.Imprimir_Orden-Pedido](3.Imprimir_Orden-Pedido.png)

NOS DIRIGIMOS A CONFIGURAR LAS MESAS 

![Ejemplo de 3.Configurar_mesas](3.Configurar_mesas.png)

Creamos una nueva mesa Y LA CONFIGURAMOS COMO EN LA IMAGEN

![Ejemplo de 3.Agregar_mesas](3.Agregar_mesas.png)

MOSTRARA UN ERROR Y LE DAMOS EN ACEPTAR

![Ejemplo de 3.Agregar_mesas](3.Agregar_mesas.png)

MOSTRARA UN ERROR Y LE DAMOS EN ACEPTAR

![Ejemplo de 3.Error_Aceptar](3.Error_Aceptar.png)