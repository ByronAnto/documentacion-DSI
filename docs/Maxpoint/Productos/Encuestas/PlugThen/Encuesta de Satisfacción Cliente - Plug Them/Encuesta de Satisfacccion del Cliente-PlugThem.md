# Encuesta de Satisfacción Cliente - Plug Them

## 1 ANTECEDENTES 
Actualmente en el sistema MaxPoint punto de venta se desea realizar una encuesta de 
satisfacción hacia los clientes que apliquen factura con datos. 

## 2 OBJETIVOS 
    ✔ Mediante la configuración de políticas a nivel de cadena y restaurante aplicar la encuesta de satisfacción en las tiendas con sistema MaxPoint. 

## 3 POLÍTICAS DE CONFIGURACIÓN 
### 3.1 Datos Generales 
En este manual se detalla cómo realizar la configuración de las políticas a nivel de cadena y 
restaurante que permitirá aplicar la encuesta de satisfacción, para este proceso se debe crear 
lo siguiente. 

En Azure se debe crear las siguientes políticas de configuración a nivel de cadena:

    - PLUGTHEM VOC 
    - PLUGTHEM VOC TOKEN LOGIN 
    - PLUG THEM DESCRIPCION ENCUESTA 
    - PLUGTHEM ENCARGADO DE MARKETING 
    - WS SERVIDOR 
    - WS RUTA SERVICIO 
En Azure se debe crear las siguientes políticas de configuración a nivel de restaurante: 

    - PLUGTHEM VOC 
    - PLUGTHEM JEFE DE AREA 
### 3.2 Colección a nivel de cadena. 
Ingresar al sistema MP backoffice con credenciales de administrador sistemas y seleccionar 
la cadena a la cual pertenece el restaurante a configurar.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción 
**SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el 
botón Ir a **Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

<font color="yellow" >**Nota:** Antes de crear las políticas de configuración debemos verificar que dichas 
colecciones no se encuentren creadas, de ser el caso validar que cada colección contenga 
sus parámetros establecidos en este manual.</font>

#### 3.2.1 Creación de Colección Cadena – PlugThem Voc 
En la opción **Cadena** presionar sobre el botón **Nueva Colección** en la cual se abrirá una 
modal para su creación e ingresar los siguientes datos: 

**Colección:** PLUGTHEM VOC 

**Módulo:** No aplica 

**Observaciones:** Una descripción de la función que realizara dicha colección. 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG1](encplug1.png)

#### 3.2.1.1 Creación Parámetro de Colección – PlugThem Voc 
Una vez creada la colección se debe proceder a crear el parámetro de configuración. 

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación.

![IMG2--](encplug.png)

A continuación, se detalla el tipo de parámetros a ser creado: 

**¿Aplica?** - Este parámetro permitirá validar si el restaurante aplica la encuesta de 
satisfacción. 

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** ¿Aplica? 

**Tipo de Dato:** Selección. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG3](encplug2.png)

Una vez creado los parámetros de configuración se debe tener lo siguiente:

![IMG4](encplug3.png)

#### 3.2.2 Creación de Colección Cadena – Plugthem Voc Token Login 
En la opción **Cadena** presionar sobre el botón **Nueva Colección** en la cual se abrirá una 
modal para su creación e ingresar los siguientes datos: 

**Colección:** PLUGTHEM VOC TOKEN LOGIN 

**Módulo:** No aplica 

**Observaciones:** Una descripción de la función que realizara dicha colección. 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG5](encplug4.png)

#### 3.2.2.1 Creación Parámetro de Colección – Plugthem Voc Token Login 
Una vez creada la colección se debe proceder a crear el parámetro de configuración. 

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación. 

![IMG6--](encplug.png)

A continuación, se detalla los tipos de parámetros a ser creado: 
1. **token_type.** - Permite especificar el tipo de autentificación. 

2. **expires_in.** - Permite especificar el tiempo de valides del token. 

3. **access_token.** - Permite especificar la clave de autentificación. 

4. **refresh_token.** - El refresh token es usado para generar un nuevo access token. 

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** token_type 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG5](encplug5.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** expires_in 

**Tipo de Dato:** Entero. 

**Especifica Valor:** SI 

**bligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**. 

![IMG8](encplug6.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** access_token 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**. 

![IMG9](encplug7.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** refresh_token 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG10](encplug8.png)

Una vez creado los parámetros de configuración se debe tener lo siguiente: 

![IMG11](encplug9.png)

#### 3.2.3 Creación de Colección Cadena – Plug Them Descripción Encuesta 
En la opción **Cadena** presionar sobre el botón **Nueva Colección** en la cual se abrirá una 
modal para su creación e ingresar los siguientes datos: 

**Colección:** PLUG THEM DESCRIPCION ENCUESTA 

**Módulo:** No aplica 

**Observaciones:** Una descripción de la función que realizara dicha colección. 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG12](encplug10.png)

#### 3.2.3.1 Creación Parámetro de Colección – Plug Them Descripción Encuesta 
Una vez creada la colección se debe proceder a crear el parámetro de configuración. 

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación. 

![IMG13--](encplug.png)

A continuación, se detalla el tipo de parámetros a ser creado: 

**Descripción**- Permite establecer la leyenda que será visible en la factura para realizar la 
encuesta. 

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** Descripcion 

**Tipo de Dato**: Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG14](encplug11.png)

Una vez creado los parámetros de configuración se debe tener lo siguiente: 

![IMG15](encplug12.png)

#### 3.2.4 Creación de Colección Cadena – Plugthem Encargado De Marketing 
En la opción Cadena presionar sobre el botón **Nueva Colección** en la cual se abrirá una 
modal para su creación e ingresar los siguientes datos: 

**Colección:** PLUGTHEM ENCARGADO DE MARKETING 

**Módulo:** No aplica 

**Observaciones:** Una descripción de la función que realizara dicha colección. 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG16](encplug13.png)

#### 3.2.4.1 Creación Parámetro de Colección – Plugthem Encargado De Marketing 
Una vez creada la colección se debe proceder a crear el parámetro de configuración. 

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación. 

![IMG17--](encplug.png)

A continuación, se detalla los tipos de parámetros a ser creado: 

5. **Nombre.** – Nombre del encargado de marketing. 

6. **Email.** - Email del encargado de marketing. 

7. **IDTelegram.** – Numero de celular del encargado de marketing. 

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** Nombre 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG18](encplug14.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** Email 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG19](encplug15.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** IDTelegram 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**. 

![IMG20](encplug16.png)

Una vez creado los parámetros de configuración se debe tener lo siguiente:

![IMG21](encplug17.png)

#### 3.2.5 Creación de Colección Cadena – WS Servidor 
En este caso la colección WS Servidor ya existe, por lo cual ya no es necesario crearla, pero 
si es indispensable agregar los nuevos parámetros para aplica la encuesta. 

#### 3.2.5.1 Creación Parámetro de Colección – WS Servidor 
Para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** 
(derecha), en la cual se abrirá una modal para su creación.

![IMG22--](encplug.png)

A continuación, se detalla los tipos de parámetros a ser creado: 

8. Plug Them Pruebas. – Nombre del servidor de pruebas. 
9. Plug Them Produccion. - Nombre del servidor de producción.

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** PLUG THEM PRUEBAS 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG23](encplug18.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** PLUG THEM PRODUCCION 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG24](encplug19.png)

#### 3.2.6 Creación de Colección Cadena – WS Ruta Servicio 
En este caso la colección WS Ruta Servicio ya existe, por lo cual ya no es necesario crearla, 
pero si es indispensable agregar los nuevos parámetros para aplica la encuesta. 

#### 3.2.6.1 Creación Parámetro de Colección – WS Ruta Servicio 
Para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** 
(derecha), en la cual se abrirá una modal para su creación.

![IMG25--](encplug.png)

A continuación, se detalla los tipos de parámetros a ser creado: 

10. **Plug Them Get.** – Ruta para el consumo del WS método get.

11. **Plug Them Post.** - Ruta para el consumo del WS método post. 

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** PLUG THEM GET

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG26](encplug20.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos:

**Parámetro:** PLUG THEM POST 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG27](encplug21.png)

### 3.3 Colección a nivel de Restaurante. 
Ingresar al sistema MP backoffice con credenciales de administrador sistemas y seleccionar 
la cadena a la cual pertenece el restaurante a configurar. 

En el menú que se encuentra en la parte izquierda no digerimos a la opción 
**SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el 
botón Ir a **Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

<font color="yellow" > Nota: Antes de crear las políticas de configuración debemos verificar que dichas 
colecciones no se encuentren creadas, de ser el caso validar que cada colección contenga 
sus parámetros establecidos en este manual.</font>

#### 3.3.1 Creación de Colección Restaurante – Plugthem Voc 
En la opción **Cadena** presionar sobre el botón **Nueva Colección** en la cual se abrirá una 
modal para su creación e ingresar los siguientes datos: 

**Colección:** PLUGTHEM VOC 

**Módulo:** Restaurante 

**Observaciones:** Una descripción de la función que realizara dicha colección. 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG28](encplug22.png)

#### 3.3.1.1 Creación Parámetro de Colección – PlugThem Voc 
Una vez creada la colección se debe proceder a crear el parámetro de configuración. 

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación.

![IMG29--](encplug.png)

A continuación, se detalla los tipos de parámetros a ser creado: 

1. **¿Aplica?** - Permite especificar si el restaurante aplica la encuesta. 

2. **Valor Total Factura.** - Permite especificar valor total de la factura con el cual se 
realizará la encuesta. 

3. **Numero Facturas**. - Permite especificar el número de facturas con el cual se 
realizará la encuesta. 

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** ¿Aplica? 

**Tipo de Dato:** Selección. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG30](encplug23.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** Valor Total Factura 

**Tipo de Dato:** Decimal. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG31](encplug24.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** Numero Facturas 

**Tipo de Dato:** Entero. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**. 

![IMG32](encplug25.png)

#### 3.3.2 Creación de Colección Cadena – Jefe de Área 
En la opción **Cadena** presionar sobre el botón **Nueva Colección** en la cual se abrirá una 
modal para su creación e ingresar los siguientes datos: 

**Colección:** PLUGTHEM JEFE DE AREA

**Módulo:** Restaurante 

**Observaciones:** Una descripción de la función que realizara dicha colección. 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG33](encplug26.png)

#### 3.3.2.1 Creación Parámetro de Colección – Jefe de Área 
Una vez creada la colección se debe proceder a crear el parámetro de configuración. 

Para ello seleccionamos la colección que hemos creamos y presionamos sobre el botón 
**Nuevo Parámetro** (derecha), en la cual se abrirá una modal para su creación.

![IMG34--](encplug.png)

A continuación, se detalla los tipos de parámetros a ser creado: 

12. **Nombre**. – Nombre del jefe de área del local. 

13. **Email.** - Email del jefe de área del local. 

14. **IDTelegram.** – Numero de celular del jefe de área del local. 

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** Nombre 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG35](encplug27.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** Email 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG36](encplug28.png)

Para la creación del parámetro de configuración se debe ingresar los siguientes datos: 

**Parámetro:** IDTelegram 

**Tipo de Dato:** Carácter. 

**Especifica Valor:** SI 

**Obligatorio:** SI 

Una vez que se haya ingresado y seleccionado la información establecida procedemos a 
**Guardar**.

![IMG37](encplug29.png)

### 3.4 Cadena Configuración de Colección 
Una vez que se verifico que exista o se creó la colección procedemos a realizar la 
configuración a la cadena. 

En el menú nos dirigimos a **CADENA** y seleccionamos la opción **CADENA**, seguidamente 
seleccionamos políticas de configuración. 

Para agregar la política de configuración, presionamos sobre el símbolo “+”, en el cual se 
nos abrirá una pequeña modal. 

#### 3.4.1 Cadena Colección de Datos PlugThem Voc 
Buscamos la colección **“PLUGTHEM VOC”** (izquierda) y la seleccionamos, a su vez en 
la en la parte derecha aparecerá la opción **“¿Aplica?”** y la seleccionamos.

Para configurar qué la cadena aplica la encuesta, en la opción **Selección** debe estar en **SI**, 
seguidamente presionar el botón **Guardar**.  

![IMG38](encplug30.png)

#### 3.4.2 Cadena Colección de Datos PlugThem Token Login 
Buscamos la colección **“PLUGTHEM VOC TOKEN LOGIN”** (izquierda) y la 
seleccionamos, a su vez en la en la parte derecha aparecerá la opción **“token_type”** y la 
seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Bearer 

Seguidamente presionar el botón **Guardar**.   

![IMG39](encplug31.png)

Buscamos la colección **“PLUGTHEM VOC TOKEN LOGIN”** (izquierda) y la 
seleccionamos, a su vez en la en la parte derecha aparecerá la opción “access_token” y la 
seleccionamos. 

En el campo Varchar agregamos el siguiente valor:  

eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJkZDMzNWQ2NDc0YTk1MDY3
 OWJjMjcwMmQ5ZjgyZDdjMTBkZTExMzI4ZTFhZDZiYjVkYzNiZmI0YTg2ZTE4MGI
 1OTNlZWU0NmQxN2I5OTkwIn0.eyJhdWQiOiIyIiwianRpIjoiMmRkMzM1ZDY0NzRh
 OTUwNjc5YmMyNzAyZDlmODJkN2MxMGRlMTEzMjhlMWFkNmJiNWRjM2JmYjRh
 ODZlMTgwYjU5M2VlZTQ2ZDE3Yjk5OTAiLCJpYXQiOjE1MjkwMDUxNjcsIm5iZiI6
 MTUyOTAwNTE2NywiZXhwIjoxNTYwNTQxMTY3LCJzdWIiOiIxMSIsInNjb3BlcyI6
 W119.TvzItJPKkzH13kaOhPSC1Z3SqJaKbc_EVMNfwg1YZn6CkNAOY3Ph5C6TIk67T
 wEiA-7s6Xj-YZBUq-A
z_pIsOGW74076iDky5r8eSCiAsITITbKp8XTzf3PaLG9IUkkDdNm1GTxHUyA
VyXP9DO6ApKbLUWajAirQB9YyPMXz9YDGnlrsbrmbyHh7
Ht3Q8IDg46Rm3b1vjRrOjFdNVDUNQA0LXz3nykfigjDe3MCvPn_CcSeOhuleCUcZhvo
 vswuShgtMHgqoBTgwS5pudQhMpByG13SwZrudQMSeuIf1c-MkIdIl40F3RQeiI
tKkPedNFBx9Ra5p5rhJ9N_VuK2snWW2WqYcOq8gul76AYIrYQI2lHFXTXRah_fq_tz8
 Iomlfw4tY22dAEjRTfsCWCj8dXCL1oU2nfH6c0SCnXvir1AD_Ld3hP0u_PYLUe_96wo
jxxT3PyRgudgZz
_gPAK2iyNLCPomRc3yYqx6R4zTAWdgrszqBWDMDgxA_9v0VUW5tSFw2dTpsN1fd
 QQ9eg0wKtehNDMn_qddZznvW91SkEddeJMWUBV5MKt5pcwECjfLJYoYmp3n2WW
 pC4yVAGcDDhgx-aTE3OESXnpYq0mviRfK002CotxrcfA
t3H2QYjhMg_36jDlwh3bvwGVqJzryigNYlKg33qJv5YufI 

Seguidamente presionar el botón **Guardar**.

<font color="yellow" >**Nota:** El token tiene un periodo de validez de un año, en el caso que haya perdido su 
validez el área de desarrollo generará otro, el mismo que será enviado vía email.</font>

Al agregar la política con sus dos parámetros se tendrá lo siguiente:

![IMG40](encplug32.png)

#### 3.4.3 Cadena Colección de Datos PlugThem Descripción Encuesta 
Buscamos la colección **“PLUG THEM DESCRIPCIÓN ENCUESTA”** (izquierda) y la 
seleccionamos, a su vez en la en la parte derecha aparecerá la opción “Descripcion” y la 
seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Cuéntanos tú experiencia en este local, 
escanea el código QR y realiza la encuesta. 

Seguidamente presionar el botón **Guardar**.  

![IMG41](encplug33.png)

#### 3.4.4 Cadena Colección de Datos WS Servidor 
Buscamos la colección “WS SERVIDOR” (izquierda) y la seleccionamos, a su vez en la 
en la parte derecha aparecerá la opción “PLUG THEM PRODUCCION” y la 
seleccionamos. 

En el campo Varchar agregamos el siguiente valor: ec-gk.voc.cx 

Seguidamente presionar el botón **Guardar**.

![IMG42](encplug34.png)

#### 3.4.5 Cadena Colección de Datos WS Ruta Servicio 
Buscamos la colección **“WS RUTA SERVICIO”** (izquierda) y la seleccionamos, a su vez 
en la en la parte derecha aparecerá la opción **“PLUG THEM GET”** y la seleccionamos. 

En el campo Varchar agregamos el siguiente valor: /QR/ 

Seguidamente presionar el botón **Guardar**.

![IMG43](encplug35.png)

Buscamos la colección **“WS RUTA SERVICIO”** (izquierda) y la seleccionamos, a su vez 
en la en la parte derecha aparecerá la opción **“PLUG THEM POST”** y la seleccionamos. 

En el campo Varchar agregamos el siguiente valor: /api/v1/onetouch 

Seguidamente presionar el botón **Guardar**.

![IMG44](encplug36.png)

#### 3.4.6 Cadena Colección de Datos PlugThem Encargado de Marketing 
Buscamos la colección **“PLUGTHEM ENCARGADO DE MARKETING”** (izquierda) y 
la seleccionamos, a su vez en la en la parte derecha aparecerá la opción “NOMBRE” y la 
seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Nombre del encargado de marketing de 
la cadena. 

Seguidamente presionar el botón **Guardar**.

![IMG45](encplug37.png)

Buscamos la colección **“PLUGTHEM ENCARGADO DE MARKETING”** (izquierda) y 
la seleccionamos, a su vez en la en la parte derecha aparecerá la opción “Email” y la 
seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Correo electrónico del encargado de 
marketing de la cadena. 

Seguidamente presionar el botón **Guardar**.

![IMG46](encplug38.png)

Buscamos la colección **“PLUGTHEM ENCARGADO DE MARKETING”** (izquierda) y 
la seleccionamos, a su vez en la en la parte derecha aparecerá la opción “IDTelegram” y la 
seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Numero de celular del encargado de 
marketing de la cadena. 

Seguidamente presionar el botón **Guardar**.

![IMG47](encplug46.png) 

#### 3.5 Restaurante Configuración de Colección 
Una vez que se verifico que exista o se creó la colección procedemos a realizar la 
configuración al restaurante. 

En el menú nos dirigimos a **RESTAURANTE** y seleccionamos la opción 
**RESTAURANTE**, seguidamente seleccionamos o buscamos la tienda a ser configurada. 

Para agregar la política de configuración, presionamos sobre el símbolo “+”, en el cual se 
nos abrirá una pequeña modal. 

#### 3.5.1 Restaurante Colección de Datos PlugThem Voc 
Buscamos la colección **“PLUGTHEM VOC”** (izquierda) y la seleccionamos, a su vez en 
la en la parte derecha aparecerá la opción **“¿Aplica?”** y la seleccionamos. 

En el campo Selección aplicamos el siguiente valor: SI 

Seguidamente presionar el botón **Guardar**.

![IMG48](encplug39.png)

Para los siguientes parámetros de configuración se debe tener en cuenta los siguiente: 

1. Únicamente debe estar configurada una de las dos opciones; **Valor Total**
**Facturas** o **Número Facturas**, en el caso que se haya habilitado las dos 
configuraciones el sistema MaxPoint no generara ninguna encuesta hacia el cliente. 

2. Valor Total Facturas, al configurar este parámetro y si el valor de la factura es 
mayor al configurado se enviará un mensaje al celular o correo electrónico del 
cliente con el link de la encuesta (No imprime código QR), en el caso que el valor 
32 
de la factura sea menor se imprimirá un código QR al final de la factura, el mismo 
que debe ser leído para acceder al link de la encuesta. 

3. Numero Facturas, al configurar este parámetro se realizará internamente un 
conteo de facturas, cuando este valor sea igual al configurado se enviará un mensaje 
al celular o correo electrónico del cliente con el link de la encuesta (No imprime 
código QR), en el caso  

4. La encuesta se realizará siempre y cuando la factura sea con datos. 

Para el caso de MDN, KFC y Español, se aplicará la siguiente configuración: 

Buscamos la colección **“PLUGTHEM VOC”** (izquierda) y la seleccionamos, a su vez en 
la en la parte derecha aparecerá la opción **“Numero Facturas”** y la seleccionamos. 

En el campo Entero ingresamos el siguiente valor: 2 

Seguidamente presionar el botón **Guardar**. 

![IMG49](encplug40.png)

![IMG50](encplug41.png)

#### 3.5.2 Restaurante Colección de Datos PlugThem Jefe de área 
Buscamos la colección **“PLUGTHEM JEFE DE AREA”** (izquierda) y la seleccionamos, 
a su vez en la en la parte derecha aparecerá la opción **“NOMBRE”** y la seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Nombre del encargado de marketing de 
la cadena. 

Seguidamente presionar el botón **Guardar**.

![IMG51](encplug42.png)

Buscamos la colección **“PLUGTHEM JEFE DE AREA”** (izquierda) y la seleccionamos, 
a su vez en la en la parte derecha aparecerá la opción “Email” y la seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Correo electrónico del encargado de 
marketing de la cadena. 

Seguidamente presionar el botón **Guardar**.

![IMG52](encplug43.png)

Buscamos la colección **“PLUGTHEM JEFE DE AREA”** (izquierda) y la seleccionamos, 
a su vez en la en la parte derecha aparecerá la opción **“IDTelegram”** y la seleccionamos. 

En el campo Varchar agregamos el siguiente valor: Numero de celular del encargado de 
marketing de la cadena. 

Seguidamente presionar el botón **Guardar**. 

![IMG53](encplug44.png)

![IMG54](encplug45.png)

# 4 REPLICAR 
Como siguiente paso se debe realizar las respectiva replica de todas las configuraciones 
hacia la tienda.