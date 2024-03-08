# Manual Configuracion Bringg

| AMBIENTE   | DOMINIO                  |
|------------|--------------------------|
| PRUEBAS    | admin-api.bringg.com     |
| PRODUCCIÓN | admin-api.bringg.com     |


## CONFIGURACIÓN DE POLÍTICAS
Nos dirigimos al módulo de **SEGURIDADES** a la pantalla de **POLÍTICAS**, y damos click en el botón **IR A ADMINISTRACIÓN DE POLÍTICAS**.


![IMG](image.png)
![IMG1](image-1.png)

Seleccionamos las políticas por **CADENA.**

![IMG2](image-2.png)

Buscamos la política WS SERVIDOR, esta política se utiliza para configurar los nombres de dominios de los servicios que se consumen de servidores externos.

![IMG3](image-3.png)

## AMBIENTE DE PRUEBAS
Presionamos el botón **NUEVO PARÁMETRO**, y configuramos el parámetro **BRINGG PRUEBAS** como se muestra en la imagen a continuación.

![IMG4](image-4.png)

![IMG5](image-5.png)

## AMBIENTE DE PRODUCCIÓN
Presionamos el botón **NUEVO PARÁMETRO**, y configuramos el parámetro **BRINGG PRODUCCION** como se muestra en la imagen a continuación.

![IMG6](image-6.png)

Confirmamos que los parámetros se configuraron correctamente revisando la lista de parámetros.

![IMG7](image-7.png)

## CREAR RUTAS DE SERVICIOS
Buscamos la política WS RUTA SERVICIO, esta política se utiliza para configurar los nombres de dominios de los servicios que se consumen de servidores externos.

![IMG8](image-8.png)


Presionamos el botón **NUEVO PARÁMETRO**, y configuramos el parámetro **BRINGG CREAR PEDIDO** como se muestra en la imagen a continuación.

![IMG9](image-9.png)

Damos click al botón GUARDAR para que se grabe la información.

![IMG10](image-10.png)

Nuevamente presionamos el botón **NUEVO PARÁMETRO**, y configuramos el parámetro **BRINGG ANULAR PEDIDO** como se muestra en la imagen a continuación.

![IMG11](image-11.png)

Damos click en el botón **GUARDAR** para que se grabe la información.

Confirmamos que los parámetros se crearon correctamente en la lista de parámetros, como se muestra en la siguiente imagen.

![IMG12](image-12.png)

## CONFIGURACIÓN DOMINIOS
Nos dirigimos al módulo de **CADENAS**, a la pantalla **CADENA**, y damos click en la pestaña de **POLÍTICA DE CONFIGURACIÓN**.

![IMG13](image-13.png)

Presionamos el botón + para agregar una nueva política.

![IMG14](image-14.png)

## DOMINIO DE PRUEBAS
Buscamos la política **WS SERVIDOR**, y seleccionamos el parámetro **BRINGG PRUEBAS**.

![IMG15](image-15.png)

En el campo VARCHAR escribimos la siguiente URL: admin-api.bringg.com.

![IMG16](image-16.png)

Comprobamos que la política se configuró correctamente con la tabla principal, como se muestra la siguiente imagen:

![IMG17](image-17.png)

## DOMINIO DE PRODUCCIÓN
Presionamos el botón **+** para agregar una nueva política. Buscamos la política **WS SERVIDOR**, y seleccionamos el parámetro **BRINGG PRODUCCION**.

![IMG18](image-18.png)

omprobamos que la política se configuró correctamente en la tabla principal, como se muestra la siguiente imagen:

![IMG19](image-19.png)

## CONFIGURACIÓN DE RUTAS
### BRINGG CREAR PEDIDOS
Presionamos el botón **+** para agregar una nueva política a la cadena que tenemos seleccionada. Buscamos la política WS RUTA SERVICIO y buscamos la función **BRINGG CREAR PEDIDO**.

![IMG20](image-20.png)

En el campo VARCHAR escribimos la siguiente ruta:

/services/6f15901b/799a84eb-5c86-44f2-bec5-0fd5b6c1e9d9/4fad2d23-8144-4918-ab7a-2a7cd5c2dbf5/


![IMG21](image-21.png)

## BRINGG ANULAR PEDIDOS
Presionamos el botón **+** para agregar una nueva política a la cadena que tenemos seleccionada. Buscamos la política **WS RUTA SERVICIO** y buscamos la función **BRINGG ANULAR PEDIDO**, y agregamos en el campo **VARCHAR** la siguiente ruta:
/services/kmae04kd/194b9110-a5ce-4e41-b3b2-f39c6fc9f85d/d2e8346a-a376-408d-a6f4-c335ad9ade33/

![IMG22](image-22.png)

Comprobamos que la política se configuró correctamente en la tabla principal, como se muestra la siguiente imagen:

![IMG23](image-23.png)