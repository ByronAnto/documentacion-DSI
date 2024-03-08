# Manual Configuracion Lista Motivos Transferencia Venta.
## CONFIGURACION LISTA MOTIVOS TRANSFERENCIA

**CONFIGURACIÓN POLÍTICA**

Nos dirigimos al módulo de **SEGURIDADES** a la pantalla de **POLÍTICAS**, y damos click en el botón **IR A ADMINISTRACIÓN DE POLÍTICAS**.

![Ejemplo de Lista Motivos SEGURIDADES IR A ADMINISTRACION DE POLITICAS](<Lista Motivos SEGURIDADES IR A ADMINISTRACION DE POLITICAS.png>)

Seleccionamos las políticas por **CADENA** y presionamos el botón NUEVA **COLECCIÓN**.

![Ejemplo de Lista Motivos CADENA COLECCION](<Lista Motivos CADENA COLECCION.png>)

Agregamos la política **LISTA MOTIVOS TRANSFERENCIAS**, como se muestra en la imagen a continuación:

![Ejemplo de Lista Motivos LISTA MOTIVOS TRANSFERENCIAS](<Lista Motivos LISTA MOTIVOS TRANSFERENCIAS.png>)

En el campo observaciones escribimos: Esta colección tiene una lista de motivos de transferencia de venta en delivery.

**CONFIGURACIÓN DE PARÁMETROS**

Seleccionamos la política LISTA MOTIVOS TRANSFERENCIAS y presionamos el botón NUEVO PARÁMETRO.

![Ejemplo de Lista Motivos LISTA MOTIVOS TRANSFERENCIAS Verde](<Lista Motivos LISTA MOTIVOS TRANSFERENCIAS Verde.png>)

DIRECCION NO CORRESPONDE

![Ejemplo de Lista Motivos DIRECCION NO CORRESPONDE](<Lista Motivos DIRECCION NO CORRESPONDE.png>)

FALTA DE LUZ GAS INTERNET

![Ejemplo de Lista Motivos FALTA DE LUZ GAS INTERNET](<Lista Motivos FALTA DE LUZ GAS INTERNET.png>)

FALTA PRODUCTO

![Ejemplo de Lista Motivos FALTA PRODUCTO](<Lista Motivos FALTA PRODUCTO.png>)

Verificamos en la lista de parámetros que se han creado correctamente.

![Ejemplo de Lista Motivos Verificar Lista Parametros](<Lista Motivos Verificar Lista Parametros.png>)

VERIFICAR POR BASE DE DATOS

Para verificar por base que la política se ha creado correctamente ejecutamos el siguiente script:

```sql
DECLARE @IDCadena INT = 10;

EXEC [dbo].[App_cargar_motivos_transferencia] @IDCadena

```

El resultado es la lista de motivos de transferencia:

![Ejemplo de Lista Motivos Lista Motivos Transferencia](<Lista Motivos Lista Motivos Transferencia.png>)