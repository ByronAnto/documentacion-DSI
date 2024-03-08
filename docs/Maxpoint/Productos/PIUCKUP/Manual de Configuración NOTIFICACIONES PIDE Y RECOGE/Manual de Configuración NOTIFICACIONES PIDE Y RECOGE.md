# Manual de Configuración NOTIFICACIONES PIDE Y RECOGE

## 1	 DESCRIPCIÓN
Este manual se ha desarrollado para detallar el proceso de configuración de políticas para el correcto funcionamiento de la recepción de notificaciones de pedidos pickup en las estaciones.

## 2	PROCEDIMIENTO
Para ingresar a las configuraciones de políticas iniciamos sesión en el BackOffice de MAXPOINT  

## 3	Configuración de políticas por cadena
Nos dirigimos al módulo de SEGURIDADES y luego damos clic en la opción de POLÍTICAS.

![img1](image.png)

Damos clic en “Ir a Administración Políticas”.

![IMG2](image-1.png)

Nos ubicamos en las políticas por **“Cadena”**, y damos clic en botón **“Nueva Colección”**.

![IMG3](image-2.png)

En descripción colocamos **“PICKUP NOTIFICADOS”**, en observaciones colocamos “v 1.9.16+

*Configuraciones necesarias para la funcionalidad de mercado pago” y guardamos esta configuración.*

![IMG4](image-3.png)

La política creada se muestra de la siguiente manera.

![IMG5](image-4.png)

![IMG6](image-5.png)

### 3.1	Parámetros de la política PICKUP NOTIFICADOS
Agregamos un parámetro de nombre **NOTIFICADO** de tipo **Caracter** el cual es mostrado en la siguiente imagen con sus respectivas configuraciones.

![IMG7](image-6.png)

Esto permitirá el correcto funcionamiento de las notificaciones generadas por los pedidos pide y recoge pero también es necesario configurar que estaciones pueden recibir estás notificaciones para ello veamos el siguiente punto.

## 4	Configuración de políticas por Estación
Nos ubicamos en las políticas por **“Estación”**, y damos clic en botón **“Nueva Colección”**.

![IMG8](image-7.png)

En descripción colocamos **“RECIBE NOTIFICACION DE PEDIDOS PICKUP ENTRANTES”**, en observaciones colocamos “v 1.9.16+

*Configuraciones necesarias para la funcionalidad de mercado pago” y guardamos esta configuración.*

![IMG9](image-8.png)

La política se muestra de la siguiente manera.

![IMG10](image-9.png)

![IMG11](image-10.png)

### 4.1	Parámetro de política “RECIBE NOTIFICACION DE PEDIDOS PICKUP ENTRANTES”
Este parámetro es agregado a la política Recibe Notificación de pedidos Pickup Entrantes y deberá ser de tipo de dato **Selección** con las mismas configuraciones que es mostrado en la siguiente imagen.

![IMG12](image-11.png)

Después de guardar el parámetro tendremos disponible esta política poder configurarla desde cada estación. 

## 5	Configurar estación con nueva política para recibir notificaciones de pedidos Pickup
Para poder configurar cada estación con la política nueva que se creó en el punto anterior necesitamos acceder a BackOffice en el apartado de estaciones, como es mostrado en la imagen.

![IMG13](image-12.png)

Seleccionamos nuestro restaurante y nuestra estación a configurar con la nueva política

![IMG14](image-13.png)

Al seleccionar la estación, encontraremos este menú de configuración en el cual nos dirigiremos a la sección de **“Políticas de configuración”**

![IMG15](image-14.png)

Y agregaremos una nueva política que permitirá que esta estación que estamos configurando pueda recibir las notificaciones generadas por pedidos Pide y Recoge. 

![IMG16](image-15.png)

Seleccionamos la política **Recibe Notificacion de Pedidos Pickup Entrantes** 

![IMG17](image-16.png)

El parametro de dicha politica deberá ser configurado de igualmanera con el tipo de Dato
**Selección** para Recibir o No recibir las notificaciones de los pedidos pide y recoge.

![IMG18](image-17.png)
