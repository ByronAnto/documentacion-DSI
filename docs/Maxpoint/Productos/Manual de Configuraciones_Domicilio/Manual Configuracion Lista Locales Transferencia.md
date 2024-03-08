# Manual Configuracion Lista Locales Transferencia.
## LISTA DE LOCALES TRANSFERENCIA

En este manual se detalla el proceso de configuración para las notificaciones por sonido en MaxPoint. Se realizó la configuración de dos políticas a nivel de restaurante.

**CONFIGURACIÓN POLÍTICAS**

Nos dirigimos al módulo de **SEGURIDADES** a la pantalla de **POLÍTICAS**, y damos click en el botón **IR A ADMINISTRACIÓN DE POLÍTICAS**.
<!---Esta imagen se llama Lista Locales no Agregadores--->
![Ejemplo de Lista Agregadores POLITICAS IR A ADMINISTRACION POLITICAS](<Lista Agregadores POLITICAS IR A ADMINISTRACION POLITICAS.png>)

Seleccionamos las políticas por **RESTAURANTE** y presionamos el botón **NUEVA COLECCIÓN**.

![Ejemplo de Lista Locales RESTAURANTE NUEVA COLECCION](<Lista Locales RESTAURANTE NUEVA COLECCION.png>)

Configuramos la política **LISTA LOCALES TRANSFERENCIA**, como se muestra en la siguiente imagen:

![Ejemplo de Lista Locales LISTA LOCALES TRANSFERENCIA](<Lista Locales LISTA LOCALES TRANSFERENCIA.png>)

En observaciones colocamos: Colección para definir lista de locales a los que se puede hacer una transferencia de pedidos. 

Verificamos en la lista de políticas que se haya creado correctamente el registro.

![Ejemplo de Lista Locales LISTA LOCALES TRANSFERENCIA Verde](<Lista Locales LISTA LOCALES TRANSFERENCIA Verde.png>)

**CONFIGURACIÓN PARÁMETROS**

Seleccionamos la política **LISTA LOCALES TRANSFERENCIA** y presionamos el botón **NUEVO PARÁMETRO**.
<!---Esta imagen se llama Lista Locales no Agregadores--->
![Ejemplo de Lista Agregadores Nuevo Parametro](<Lista Agregadores Nuevo Parametro.png>)

Configuramos los parámetros como se muestra en las siguientes imágenes:

**Estructura:** ![Ejemplo de Lista Locales Linea de Codigo](<Lista Locales Linea de Codigo.png>)

**K026 PATRIA**

![Ejemplo de Lista Locales K026 PATRIA](<Lista Locales K026 PATRIA.png>)

**K027 COLON**

![Ejemplo de Lista Locales K026 COLON](<Lista Locales K026 COLON.png>)

Verificamos que se hayan creado los parámetros correctamente en la lista de parámetros.

![Ejemplo de Lista Locales Nuevo Parametro Checks](<Lista Locales Nuevo Parametro Checks.png>)

**CONFIGURACIÓN DE DATOS**

Para configurar los datos de cada local es importante tener el id de base de datos de cada local.

|     ID RESTAURANTE    |     CODIGO    |     RESTAURANTE    |  |  |  |  |  |
|---|---|---|---|---|---|---|---|
|     162    |     K026    |     PATRIA    |  |  |  |  |  |
|     49    |     K027    |     COLON Y 10 DE   AGOSTO    |  |  |  |  |  |
---

Nos dirigimos al módulo de **RESTAURANTES** a la pantalla de **RESTAURANTES**, y seleccionamos el restaurante que vamos a configurar, y damos doble click sobre la fila.

![Ejemplo de Lista Locales K004 CCI RESTAURANTES](<Lista Locales K004 CCI RESTAURANTES.png>)

Nos dirigimos a la pestaña de **POLÍTICAS DE CONFIGURACIÓN** damos clic en el botón **+**.

![Ejemplo de Lista Locales K004 CCI POLITICAS DE CONFIGURACION](<Lista Locales K004 CCI POLITICAS DE CONFIGURACION.png>)

Buscamos la política **LISTA LOCALES TRANSFERENCIA** y agregamos parámetro por parámetro como se muestra en las siguientes imágenes:

![Ejemplo de Lista Locales Coleccion LISTA LOCALES TRANSFERENCIA Verde](<Lista Locales Coleccion LISTA LOCALES TRANSFERENCIA Verde.png>)

**Local K026 PATRIA**

En el campo VARCHAR colocamos el código del local y en el campo ENTERO colocamos el id del local.

![Ejemplo de Lista Locales LISTA LOCALES TRANSFERENCIA Verde K026 Patria](<Lista Locales LISTA LOCALES TRANSFERENCIA Verde K026 Patria.png>)

**Local K027 COLON**

![Ejemplo de Lista Locales LISTA LOCALES TRANSFERENCIA Verde K027 COLON](<Lista Locales LISTA LOCALES TRANSFERENCIA Verde K027 COLON.png>)

Verificamos la configuración en la lista de políticas, como se muestra en la siguiente imagen:

![Ejemplo de Lista Locales K004 CCI Politicas de Configuracion Nuevos Cheks](<Lista Locales K004 CCI Politicas de Configuracion Nuevos Cheks.png>)

**VERIFICAR POR BASE DE DATOS**

Para verificar por base que la política se ha creado correctamente ejecutamos el siguiente script:

```sql
DECLARE @IDCadena INT = 10;
DECLARE @IDRestaurante INT = 40;
EXEC [dbo].[App_cargar_locales_transferencia] @IDCadena, @IDRestaurante
```

El resultado es la lista de locales a las que se puede hacer transferencia de venta:

![Ejemplo de Lista Locales Bloque de Codigo MESSAGES](<Lista Locales Bloque de Codigo MESSAGES.png>)

