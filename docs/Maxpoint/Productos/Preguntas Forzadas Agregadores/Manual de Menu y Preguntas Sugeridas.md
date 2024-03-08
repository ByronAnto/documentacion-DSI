# Manual de Menu y Preguntas Sugeridas.
## MANUAL CONFIGURACIÓN DE MENÚ Y PREGUNTAS SUGERIDAS

### 1. DESCRIPCIÓN 

Creación de nuevas políticas y funcionamiento de Medio, Menús y Preguntas Sugeridas para el 
funcionamiento de locales e integraciones externas Agregadores, Kiosko y APP.

### 2. PROCEDIMIENTO 

**Creación de Medios**

Se añadió la nueva política de Medio para diferenciar el canal a que medio pertenece debido a 
que puede existir un mismo canal, pero diferentes medios como por ejemplo el canal domicilio 
tanto para UBER como para GLOVO.

Política a nivel de Cadena

Nombre: LISTA DE AGREGADORES Y CANALES

![Ejemplo de Preguntas LISTA DE AGREGADORES Y CANALES](<Preguntas LISTA DE AGREGADORES Y CANALES.png>)

Se deben crear los medios y deben ser configurados de manera obligatoria en todos los nuevos 
menús.

**2.2 Configuración de Medios**

Los medios de configuración se realizan en la Página de Menú, por ejemplo, si se crea una 
nueva página de menú es necesario crear al medio que perteneces, si el menú creado es para 
locales se debe configurar de la siguiente manera:

| Canal | Medio |  
|---|---|
| Salón | Local |  
| Llevar | Local | 
| Domicilio | App | 
| Domicilio | Uber | 
| Salón | Kiosko | 
| Llevar | Kiosko | 
---

![Ejemplo de Preguntas DOMICILIO WEB APP](<Preguntas DOMICILIO WEB APP.png>)

**2.3 Creación de grupo de preguntas** 

Se añadió la nueva política de grupo de preguntas para diferenciar al grupo que pertenece 
debido a que puede existir varios grupos.

Política a nivel de Cadena

Nombre: LISTA GRUPO DE PREGUNTAS

![Ejemplo de Preguntas LISTA GRUPO DE PREGUNTAS 1](<Preguntas LISTA GRUPO DE PREGUNTAS 1.png>)
![Ejemplo de Preguntas LISTA GRUPO DE PREGUNTAS 2](<Preguntas LISTA GRUPO DE PREGUNTAS 2.png>)

Las preguntas pueden asociarse al grupo que pertenece.

![Ejemplo de Preguntas Pueden asociarse Grupo Pertenece](<Preguntas Pueden asociarse Grupo Pertenece.png>)

**2.4 Configuración de medio y grupo de preguntas**

Se debe crear la política donde se relaciona el grupo de preguntas junto con el medio al que 
pertenece.

Pueden compartir varios medios un grupo de preguntas.

Configuración de Menú.

![Ejemplo de Preguntas Configuracion Menu](<Preguntas Configuracion Menu.png>)

Configuración de Preguntas Sugerida.

![Ejemplo de Preguntas Configuracion Sugerida](<Preguntas Configuracion Sugerida.png>)

Asociación de medios con grupos de preguntas sugeridas.

![Ejemplo de Preguntas Asociacion Sugerida](<Preguntas Asociacion Sugerida.png>)

En la política de agregadores y canales se debe atar el medio que pertenece con el grupo de 
preguntas con las que se desea que se visualicen.

Por ejemplo, en la configuración actual está atado que para el medio LOCAL solo se visualicen 
las preguntas que pertenecen a GRUPO LOCAL. Mientras que al medio KIOSKO y APP están 
relacionadas con el GRUPO APP.

![Ejemplo de Preguntas GRUPO LOCAL Mientras KIOSKO y APP Relacionadas GRUPO APP](<Preguntas GRUPO LOCAL Mientras KIOSKO y APP Relacionadas GRUPO APP.png>)

En el combo ideal existe la configuración del grupo de preguntas. Si un plu comparten distintos 
menús solo se muestra las preguntas del menú que se encuentra configurado.

**2.5 Configuración de botones**

Para el consumo del web service de integración de trade, se utiliza el campo impresiones 
factura, este campo es para la visualización tanto en la app y kioskos en la descripción.

![Ejemplo de Preguntas SUPER COMBO un cuarto DE POLLO PAPAS CRIOLLAS](<Preguntas SUPER COMBO un cuarto DE POLLO PAPAS CRIOLLAS.png>)

![Ejemplo de Preguntas Impresion Factura POLLO AM ENS PCR COLA](<Preguntas Impresion Factura POLLO AM ENS PCR COLA.png>)

**2.6 Configuración de nueva productos**

Para la descripción del contenido que se visualizara en el producto configurado se debe 
guardar en el campo contenido. Es una descripción corta del producto para que el cliente 
tenga claro que incluye su compra.

![Ejemplo de Preguntas Configuracion Nueva Productos](<Preguntas Configuracion Nueva Productos.png>)