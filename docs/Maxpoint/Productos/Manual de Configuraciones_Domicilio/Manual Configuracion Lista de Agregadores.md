# Manual Configuración Lista de Agregadores.
## 1. CONFIGURACIÓN LISTA AGREGADORES

**CONFIGURACIÓN POLÍTICA**

Nos dirigimos al módulo de SEGURIDADES a la pantalla de **POLÍTICAS**, y damos click en el botón **IR A ADMINISTRACIÓN DE POLÍTICAS**.

![Ejemplo de Lista Agregadores POLITICAS IR A ADMINISTRACION POLITICAS](<Lista Agregadores POLITICAS IR A ADMINISTRACION POLITICAS.png>)

Seleccionamos las políticas por **CADENA** y presionamos el botón **NUEVA COLECCIÓN**.

![Ejemplo de Lista Agregadores CADENA NUEVA COLECCION](<Lista Agregadores CADENA NUEVA COLECCION.png>)

Configuramos la política **LISTA AGREGADORES**, como se muestra en la siguiente imagen:

![Ejemplo de Lista Agregadores LISTA AGREGADORES](<Lista Agregadores LISTA AGREGADORES.png>)

Presionamos el botón GUARDAR, para almacenar la información y la verificamos en la lista de políticas de Cadena.

![Ejemplo de Lista Agregadores LISTA AGREGADORES Verde](<Lista Agregadores LISTA AGREGADORES Verde.png>)

## CONFIGURACIÓN DE PARÁMETROS

Seleccionamos la política LISTA TIPOS MOTORIZADOS y presionamos el botón **NUEVO PARÁMETRO**.

![Ejemplo de Lista Agregadores Nuevo Parametro](<Lista Agregadores Nuevo Parametro.png>)

Configuramos los parámetros como se muestra en las siguientes imágenes:

**GLOVO**

![Ejemplo de Lista Agregadores Parametro GLOVO](<Lista Agregadores Parametro GLOVO.png>)

**UBER**

![Ejemplo de Lista Agregadores Parametro UBER](<Lista Agregadores Parametro UBER.png>)

Verificamos que se hayan creado los parámetros correctamente en la lista de parámetros.

![Ejemplo de Lista Agregadores Pantalla Politicas](<Lista Agregadores Pantalla Politicas.png>)

**Importante: Esta solo es una lista por lo cual no es necesario atarla a una cadena.**

#### VERIFICAR LISTA TIPOS AGREGADORES POR BASE DE DATOS

En la base de datos podemos ejecutar este procedimiento para verificar que los parámetros se agregaron correctamente.

```sql
DECLARE @IDCadena INT = 10;

EXEC [dbo].[MOT_cargar_lista_agregadores] @IDCadena
```

![Ejemplo de Lista Agregadores Bloque Codigo RESULTS](<Lista Agregadores Bloque Codigo RESULTS.png>)

