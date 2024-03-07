![ref1]![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.002.png)



![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.003.png)![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.004.png)
||
| :- |
||
|<p></p><p></p><p></p>|


![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.005.png)![ref2]<a name="_hlk157423969"></a><a name="_toc446940143"></a>
# Tabla de contenido
[1.	Objetivos del manual	3](#_toc159502001)

[2.	Requisitos del sistema	3](#_toc159502002)

[3.	Cómo localizar el error	4](#_toc159502003)

[4.	Primer Caso:	5](#_toc159502004)

[5.	Segundo Caso	6](#_toc159502005)

[6.	Comprobación de facturación	6](#_toc159502006)




















1. # ` `<a name="_toc159502001"></a>Objetivos del manual
El propósito principal de este manual es proporcionar a los usuarios una guía completa y clara para la resolución de los errores dados en una facturación electrónica no aprobada, explicando el paso a paso para la solución , aprobación y con el debido chequeo de que la factura se encuentre aprobada.
1. # ` `<a name="_toc159502002"></a>Requisitos del sistema

**Requisitos del navegador:**
Selecciona un navegador web actualizado que sea compatible con el sistema. Pueden incluirse opciones como Chrome, Firefox, Edge o Safari. Especifica la versión recomendada para una experiencia óptima.

**Conexión a Internet:**
Asegúrate de contar con una conexión a Internet de banda ancha para garantizar una carga rápida de las páginas y una experiencia sin interrupciones.

**Dispositivo Compatible:**
Especifica los dispositivos compatibles, ya sea una computadora de escritorio, portátil, tablet o teléfono inteligente. Puede ser relevante indicar si hay alguna preferencia sobre el sistema operativo.



**Credenciales de Acceso:**
Proporciona información sobre cómo obtener credenciales de acceso, ya sea a través de un proceso de registro en línea o mediante la asignación de cuentas por parte del administrador del sistema.



1. # ` `<a name="_toc159502003"></a>Cómo localizar el error

Para comenzar con el seguimiento de las facturas no aprobadas encontramos los dos casos correspondientes 

1° Cuando tienen valor “Cero”

2° Cuando tienen algún valor 

sigue estos pasos:


1. **Verificamos el Estado y la Descripción:**
- En el Estado verificamos que diga “Rechazado Comprobación”
- En la Descripción verificamos que diga “Documento invalido”

![ref3]








1. **Verificamos en la Base de Datos:**
- Ingresamos a la Base de Datos y visualizamos los estados de las facturas.

  ![ref4]

- Varios de estos errores se dan por que se ingreso de mas una letra o a la misma vez un numero en las tarjetas de crédito o en las transacciones,

1. # <a name="_toc159502004"></a>Primer Caso:
![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.009.png)

- En este caso nos fijamos que el valor es “Cero”, lo primero que necesitamos hacer es ingresar a la base de datos y verificar que el valor sea el correcto.
- Para poder ingresar a la Base de Datos copiamos la clave de acceso y vemos a que local pertenece.
- Al verificar que si tenia valor total “Cero”, se notifica a contabilidad que retire la factura mediante un correo.



![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.010.png)

Solicitud de retiro de factura con valor “Cero”

![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.011.png)


1. # <a name="_toc159502005"></a>Segundo Caso 
   1. **Verificamos el Estado y la Descripción:**
- En el Estado verificamos que diga “Rechazado Comprobación”
- En la Descripción verificamos que diga “Documento invalido”

![ref3]

1. **Verificamos en la Base de Datos:**
- Ingresamos a la Base de Datos y visualizamos los estados de las facturas.

![ref4]
#
1. # <a name="_toc158124739"></a><a name="_toc159502006"></a>Comprobación de facturación
Para la comprobación de que la factura ha sido aprobada y se encuentra en el sistema, aplicamos los siguientes pasos:

- Ingresamos a facturasrestaurantes.corlasosa.com
- Ingresamos los datos del restaurante y también la clave de acceso del usuario  
- ![](Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.012.png)Así verificando que el error a sido resuelto y subido correctamente para que el clienta pueda descargar su factura electrónica


8

[ref1]: Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.001.png
[ref2]: Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.006.png
[ref3]: Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.007.png
[ref4]: Aspose.Words.20fa4f62-4d6a-4661-b099-b8ce47be43b6.008.png
