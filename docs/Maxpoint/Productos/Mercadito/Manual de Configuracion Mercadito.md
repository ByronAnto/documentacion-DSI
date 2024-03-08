# MANUAL DE CONFIGURACIÓN MERCADITO
## CONFIGURACIÓN MERCADITO
El objetivo de este manual es documentar las configuraciones para el funcionamiento de la integración de las plataformas digitales app o web con el sistema de facturación MaxPoint.

### 1.	Creación de Políticas El Mercadito
En este manual se detalla las configuraciones que deben hacerse en el back office de MaxPoint para habilitar el ingreso de órdenes de app o web al sistema de facturación en la cadena El Español.

| POLITICA | PARAMETRO | DESCRIPCIÓN | TIPO DE DATO |  VALOR | 
| ---| :--------:| ---------:| -----|---|
| CONFIGURACIÓN APP	| CLIENT_SECRET	| Este parámetro se utiliza para poder consumir los servicios para anulaciones y cambio de estados Back 2.0. | CARACTER	|  Jh9i9RxEGo5BJvXV7861PU185WJMiHZ45J63MLlj |
| CONFIGURACIÓN APP	| CLIENT_ID	| Este parámetro se utiliza para poder consumir los servicios para anulaciones y cambio de estados Back 2.0. | CARACTER	| 5 |
| CONFIGURACIÓN APP	| CODIGO INTERFACE SG	| | CARACTER	| Mercadito |
| CONFIGURACIÓN APP	| ENTREGA INMEDIATA	| |  SELECCIÓN | SI | Jh9i9RxEGo5BJvXV7861PU185WJMiHZ45J63MLlj |
| CONFIGURACIÓN APP	| AREA ASIGNADA	| Este parámetro se utiliza para poder consumir los servicios para anulaciones y cambio de estados Back 2.0. | CARACTER	| Mercadito  |
---

1.	En el menú de MaxPoint, nos dirigimos a la pantalla de administración de POLÍTICAS para configurar las siguientes políticas.

![Ejemplo de Mercadito Administracion de POLITICAS](<Mercadito Administracion de POLITICAS.png>)

![Ejemplo de Mercadito Seguridades Politicas](<Mercadito Seguridades Politicas.png>)

1.	Damos click en el botón IR A ADMINISTRACIÓN DE POLÍTICAS y luego presionamos el botón NUEVA COLECCIÓN.

![Ejemplo de Mercadito Administracion Boton NUEVA COLECCION](<Mercadito Administracion Boton NUEVA COLECCION.png>)

2.	En el formulario en Colección escribimos CONFIGURACION APP, como se muestra en la imagen y le damos click al botón **GUARDAR**.

![Ejemplo de Mercadito CONFIGURACION APP GUARDAR](<Mercadito CONFIGURACION APP GUARDAR.png>)

3.	Verificamos que la colección se haya creado correctamente en la lista de POLÍTICAS, la seleccionamos dando click en **CONFIGURACIÓN APP**.

![Ejemplo de Mercadito POLITICAS CONFIGURACION APP](<Mercadito POLITICAS CONFIGURACION APP.png>)

4.	Continuamos con la configuración y damos click en el botón NUEVO PARÁMETRO.

![Ejemplo de Mercadito POLITICAS CONFIGURACION APP](<Manual NUEVO PARAMETRO.png>)

5.	Configuramos el parámetro CLIENT SECRET del tipo de dato CARACTER como se muestra en la siguiente imagen y le damos al botón GUARDAR para continuar con el siguiente parámetro.

![Ejemplo de Mercadito CLIENT SECRET GUARDAR 5](<Mercadito CLIENT SECRET GUARDAR 5.png>)

6.	Configuramos el parámetro CLIENT ID del tipo de dato CARACTER como se muestra en la siguiente imagen y le damos al botón GUARDAR para continuar con el siguiente parámetro.

![Ejemplo de Mercadito CLIENT ID GUARDAR 6](<Mercadito CLIENT ID GUARDAR 6.png>)

7.	Configuramos el parámetro CODIGO INTERFACE SG del tipo de dato CARACTER como se muestra en la siguiente imagen y le damos al botón GUARDAR para continuar con el siguiente parámetro.

![Ejemplo de Mercadito CODIGO INTERFACE SG GUARDAR 7](<Mercadito CODIGO INTERFACE SG GUARDAR 7.png>)

8.	Configuramos el parámetro ENTREGA INMEDIATA del tipo de dato SELECCIÓN como se muestra en la siguiente imagen y le damos al botón GUARDAR para continuar con el siguiente parámetro.

![Ejemplo de Mercadito ENTREGA INMEDIATA GUARDAR 8](<Mercadito ENTREGA INMEDIATA GUARDAR 8.png>)

9.	Configuramos el parámetro AREA ASIGNADA del tipo de dato CARACTER como se muestra en la siguiente imagen y le damos al botón GUARDAR para continuar con el siguiente parámetro.

![Ejemplo de Mercadito AREA ASIGNADA GUARDAR 9](<Mercadito AREA ASIGNADA GUARDAR 9.png>)

10.	Finalizamos la creación de parámetros verificando en la lista de parámetros.

![Ejemplo de Mercadito Verificar en Lista Parametros 10](<Mercadito Verificar en Lista Parametros 10.png>)

## 2.	Configuración Políticas El Mercadito
Como ya hemos acabado de configurar las políticas, es momento de darles un valor a las mismas para ello nos dirigimos al módulo de CADENA y seleccionamos la opción CADENA.

1.	Seleccionamos la pestaña **POLÍTICAS DE CONFIGURACIÓN** y damos click en el botón **+**.

![Ejemplo de Mercadito POLITICAS DE CONFIGURACION 2](<Mercadito POLITICAS DE CONFIGURACION 2.png>)

![Ejemplo de Mercadito POLITICAS DE CONFIGURACION 22](<Mercadito POLITICAS DE CONFIGURACION 22.png>)

2.	Seleccionamos la colección **CONFIGURACION APP** y se cargan todos los parámetros configurados anteriormente.

![Ejemplo de Mercadito CONFIGURACION APP 223](<Mercadito CONFIGURACION APP 223.png>)

3.	Seleccionamos el parámetro **CLIENT_SECRET**, y en la entrada de texto VARCHAR escribimos el siguiente texto: Jh9i9RxEGo5BJvXV7861PU185WJMiHZ45J63MLlj

![Ejemplo de Mercadito CLIENT SECRET 223](<Mercadito CLIENT SECRET 223.png>)

4.	Seleccionamos el parámetro **CLIENT_ID**, y en la entrada de texto VARCHAR escribimos el siguiente texto: 5.

![Ejemplo de Mercadito CLIENT ID 223](<Mercadito CLIENT ID 223.png>)

5.	Seleccionamos el parámetro **AREA ASIGNADA**, y en la entrada de texto **VARCHAR** escribimos el nombre del área donde se ingresarán los pedidos en efectivo.

![Ejemplo de Mercadito AREA ASIGNADA VARCHAR 223](<Mercadito AREA ASIGNADA VARCHAR 223.png>)

6.	Seleccionamos el parámetro **ENTREGA INMEDIATA**, y en la entrada de texto **SELECCIÓN** configuramos en SI para que los pedidos de tarjetas se inyecten directamente al sistema apenas el cliente finalice la transacción en la aplicación.

![Ejemplo de Mercadito ENTREGA INMEDIATA SELECCION 223](<Mercadito ENTREGA INMEDIATA SELECCION 223.png>)

Elejimos la opción **SI** o **NO** dependiendo dela configuración de la cadena, en el caso de KFC debería ser la opción SI (impresión inmediata), apenas el pedido se inyecta al local este se factura e imprime para ser despachado, esto solo funciona con la forma de pago TARJETAS.

7.	Seleccionamos el parámetro **CODIGO INTERFACE SG**, y en la entrada de texto **CARACTER** ingresamos el texto “mercadito”, este código ha sido definido para identificar la veta que se genera por este medio.

![Ejemplo de Mercadito CODIGO INTERFACE SG CARACTER 223](<Mercadito CODIGO INTERFACE SG CARACTER 223.png>)

8.	Verificamos la configuración, escribimos en el buscador la política “configuración app”.

![Ejemplo de Mercadito Verificar Configuracion app 223](<Mercadito Verificar Configuracion app 223.png>)