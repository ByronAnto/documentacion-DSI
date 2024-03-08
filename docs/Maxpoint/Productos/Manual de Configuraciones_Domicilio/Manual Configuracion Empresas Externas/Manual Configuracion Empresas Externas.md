# Manual Configuracion Empresas Externas

## LISTA EMPRESAS EXTERNAS MOTORIZADOS
### CONFIGURACIÓN POLÍTICA
Nos dirigimos al módulo de **SEGURIDADES** a la pantalla de **POLÍTICAS**, y damos clic en el botón **IR A ADMINISTRACIÓN DE POLÍTICAS**.

![img](image.png)
![img1](image-1.png)

Seleccionamos las políticas por **CADENA.** 

![img2](image-2.png)

Presionamos el botón **NUEVA COLECCIÓN.**

![inmg3](image-3.png)

Agregamos la política **LISTA EMPRESAS EXTERNAS MOTORIZADOS**, como se muestra en la siguiente imagen, y damos click en **GUARDAR** para crear la política.

![img4](image-4.png)

Comprobamos la creación de la política en la lista de políticas, y le damos clic para seleccionarla.

![img5](image-5.png)

## CONFIGURACIÓN DE PARÁMETROS
Presionamos el botón NUEVO PARÁMETRO para crear las empresas externas de motorizados.

![img6](image-6.png)

A continuación, se crean las empresas externas de motorizados como se muestra en la siguiente imagen.

![img7](image-7.png)

![img8](image-8.png)

![img9](image-9.png)

A continuación, verificamos que se hayan grabado los cambios en la lista de parámetros.

![img10](image-10.png)


## COMPROBAR POLÍTICA
Podemos comprobar que la política está correctamente creada ejecutando el siguiente query en la bd, que nos devuelve la lista de empresas externas que se han creado.

``` DECLARE @IDCadena  INT = 10;
   EXEC dbo.MOT_cargar_lista_empresas_externas @IDCadena;
```
   