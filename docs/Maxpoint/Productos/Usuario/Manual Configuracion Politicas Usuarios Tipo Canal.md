# Manual - Configuración Políticas Usuarios Tipo Canal.
## CONFIGURACIÓN DE POLÍTICA USUARIOS - TIPO CANAL.
## 1. ANTECEDENTES

Actualmente en el sistema MaxPoint punto de venta; se desea agrupar la venta de domicilio 
en un solo cajero llamado “DELIVERYMXP”.

## 2. OBJETIVO GENERAL

Agrupar la venta de domicilio en un solo cajero.
Objetivos específicos

* Crear una política de configuración a nivel de usuarios.

## 3. POLÍTICAS DE CONFIGURACIÓN

**3.1 Datos Generales**

En este manual se detalla cómo realizar la configuración de la política a nivel de usuarios
para permitir la agrupación de venta en el cajero DELIVERYMXP.

**3.2 Pantalla de Políticas**

Ingresar al sistema MaxPoint backoffice con credenciales de administrador sistemas y 
seleccionar la cadena a la cual se realizará las configuraciones.

En el menú que se encuentra en la parte izquierda no dirigimos a la opción **SEGURIDADES** y seleccionamos **POLÍTICAS**, seguidamente presionamos sobre el botón **Ir a Administración Políticas** en el cual abrirá una nueva pestaña en el navegador.

**3.3 Usuarios**

3.3.1 Colección Usuarios – Tipo Canal

Antes de crear las políticas de configuración; como primer paso se debe verificar que no se 
encuentren creadas, de ser el caso validar que cada colección contenga los parámetros 
establecidos en este manual.
En la opción **Usuarios** presionar sobre el botón **Nueva Colección**, se abrirá una modal para 
su creación ingresando los siguientes datos:

Tabla 1. Datos Colección Usuarios

| N° | Colección | Descripción | 
|---|---|---|
| 1 | TIPO CANAL | Colección que permite establecer si el cajero realiza venta de salón, llevar o domicilio. | 
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del nombre de la colección; 
debe ser escrita tal y como se especifica en la tabla 1.</font>

**Colección:** Nombre de la colección que se especifica en la tabla 1.

**Módulo:** Usuarios.

**Observaciones:** Una descripción de la función que realizara dicha colección.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**

![Ejemplo de Usuario TIPO CANAL](<Usuario TIPO CANAL.png>)

3.3.2 Parámetro de Colección 

Antes de agregar los parámetros de configuración, como primer paso se debe verificar que 
no se encuentren creados, de ser el caso validar que cada parámetro contenga los valores 
establecidos en este manual.

Una vez creada la colección se debe proceder a crear los parámetros de configuración y 
para ello seleccionamos la colección y presionamos sobre el botón **Nuevo Parámetro** en la 
cual se abrirá una modal para su creación e ingresamos los siguientes datos:

Tabla 2. Datos Parámetros de Colección Restaurante

| N° | Colección | Parámetro | Esp. Valor |Obligatorio | Tipo Dato | 
|---|---|---|---|---|---|
| 1 | TIPO CANAL | DOMICILIO | SI | SI |Carácter |
---

<font color="yellow">**Nota:** NO puede contener espacios en blanco al inicio y final del parámetro; deben ser escritos tal y como se especifica en la tabla 2.</font>

**Parámetro:** Nombre del parámetro que se especifica en la tabla 2.

**Tipo de Dato:** Se especifica en la tabla 2.

**Especifica Valor:** Se especifica en la tabla 2.

**Obligatorio:** Se especifica en la tabla 2.

Una vez que se haya ingresado y seleccionado la información establecida procedemos a **Guardar**.

Se deben crear todos los parámetros de configuración establecidos en la tabla 2 y se debe 
tener lo siguiente:

![Ejemplo de Usuario Nuevo Parametro DOMICILIO](<Usuario Nuevo Parametro DOMICILIO.png>)

**3.4 Usuarios Colección de Datos**

En el menú nos dirigimos a **SEGURIDADES** y seleccionamos la opción **USUARIOS o CAJEROS**, en la parte derecha se cargará el listado de todos los cajeros o usuarios creados para la cadena seleccionada.

![Ejemplo de Usuario CAJEROS](<Usuario CAJEROS.png>)

Con un doble click sobre el usuario a configurar, se abrirá una modal con su información, 
seleccionamos la opción de la pestaña **Políticas de Configuración**.

![Ejemplo de Usuario CRUZ GUATO ANGELYNE DAYANA Politicas Configuracion](<Usuario CRUZ GUATO ANGELYNE DAYANA Politicas Configuracion.png>)

Para la configuración se debe presionar sobre el botón agregar “+”; el cual abrirá una 
modal, seguidamente buscaremos la colección creada y agregamos el valor en los parametros solicitados.

3.4.1 Tipo Canal – Domicilio

En la tabla 3, se especifica los valores que deben ser configurados por cada parámetro colección.

Tabla 3. Valores de los parámetros de colección

| Colección: TIPO CANAL |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|
| N° | Parámetro | Tipo Dato | Valor a ingresar |
| 1 | DOMICILIO | Carácter | deliverymxp |
---

Al realizar la configuración de todos los parámetros se debe tener lo siguiente:

![Ejemplo de Usuario CRUZ GUATO ANGELYNE DAYANA Politicas Configuracion COMPLETA](<Usuario CRUZ GUATO ANGELYNE DAYANA Politicas Configuracion COMPLETA.png>)

## 4. REPLICAR

Como siguiente paso se debe realizar las respectiva replica de todas las configuraciones 
hacia la tienda.