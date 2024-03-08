# MANUAL DE USUARIO PARA LA CONFIGURACION DE GESTION MOTORIZADOS.
## 1. ANTECEDENTES

Se requiere implementar una nueva configuración para hacer uso de los medios existentes 
la cual permita diferenciar el proveedor de delivery que será asignado a ese medio.

## 2. OBJETIVOS

✓ Crear y modificar políticas que permitan la configuración de un proveedor de 
delivery según el medio.

<font color="yellow">Nota: Si el medio configurado tiene el parámetro “CAMBIO ESTADOS AUTOMATICO” configurado como “SI” pero no posee ningún proveedor configurado se enviara por defecto a BRINGG.</font>

## 3. CONFIGURACION POLITICAS

**3.1 Configuración por Cadena**

1. Para ingresar al módulo de “Administración De Políticas”, debe dar clic en la opción 
“Seguridades” y en el módulo de “Políticas” 2. Al dar clic en la opción de, se desplegará la 
siguiente pestaña:

![Ejemplo de Motorizado Ir Administracion Politicas](<Motorizado Ir Administracion Politicas.png>)

Al dar clic en la opción de **IR ADMINISTRACION POLITICAS**, se desplegará la siguiente pestaña de 
navegador.

![Ejemplo de Motorizado Ir Administracion Politicas CADENA](<Motorizado Ir Administracion Politicas CADENA.png>)

2. En la lista de Colecciones de Datos Cadena buscamos la colección llamada 
“CONFIGURACION WEB”, al hacer click sobre esta se nos desplegara el apartado de 
parámetros, en el botón **+ Nueva Parametro** hacemos click y procedemos a crear los nuevos 
parámetros

![Ejemplo de Motorizado Merchant User Duna](<Motorizado Merchant User Duna.png>)

| PARÁMETRO | TIPO  DATO | ESP. VALOR | OBLIGATORIO |  |  |
|---|---|---|---|---|---|
| MERCHANT USER  DUNA | Caracter | SI | SI |  |  |
---

El segundo parámetro a configurar seria “ORDER TYPE DUNA” y debe ser creado en la colección 
LISTA MEDIO para cada uno de los medios que va a configurar envíos con D-UNA, este parámetro 
debe estar creado con la siguiente configuración: 

![Ejemplo de Motorizado Order Type Duna](<Motorizado Order Type Duna.png>)

| PARÁMETRO | TIPO  DATO | ESP. VALOR | OBLIGATORIO |  |  |
|---|---|---|---|---|---|
| ORDER  TYPE DUNA | Carácter | SI | SI |  |  |
---

eguidamente configuraremos el parámetro “IDENTITY TOKEN DUNA”

![Ejemplo de Motorizado Staging Identidy Token Duna](<Motorizado Staging Identidy Token Duna.png>)

| PARÁMETRO | TIPO DATO | ESP. VALOR | OBLIGATORIO |  |  |
|---|---|---|---|---|---|
| IDENTITY TOKEN DUNA | Carácter | SI | SI |  |  |
---

Este parámetro puede ser configurado con un calificativo que anteceda al nombre **“IDENTITY 
TOKEN DUNA”** con la finalidad de identificar a que ambiente pertenece el parámetro creado, en 
caso de poseer más de un parámetro para con la frase **“IDENTITY TOKEN DUNA”** se deben 
configurar como **“INACTIVO”** todos aquellos que no serán usados al momento de la integración 
con **D-UNA**

<font color="yellow">**Nota:** Todos los medios que deseen usar los cambios de estados automático deben tener creadas estas políticas.</font>

## 3. Parametrización de las políticas creadas

*a. ORDER TYPE DUNA*

![Ejemplo de Motorizado Lista Medio App](<Motorizado Lista Medio App.png>)

| PARÁMETRO | TIPO DATO | VALOR |  
|---|---|---|
| ORDER TYPE DUNA | VARCHAR | external_default | 
---

Nota: Este valor podría cambiar según el caso, los posibles valores podrían ser:

- **external_default:** orden creada por un cliente que no es parte del ecosistema duna

- **core:** orden creada desde el core (ecommerce) de duna

- **store_to_store:** orden creada desde un core pero él envió será de una tienda a otra.

Una vez configurada la política debería mostrarse de este modo:

![Ejemplo de Motorizado Lista Medio App Linea](<Motorizado Lista Medio App Linea.png>)

*b. MERCHANT USER DUNA*

![Ejemplo de Motorizado MERCHANT USER DUNA B](<Motorizado MERCHANT USER DUNA B.png>)

Este código debe ser solicitado al proveedor, actualmente el código para el ambiente de 
pruebas es: 2bb258f4-051d-4a46-9321-b0a7a857cd71

Una vez configurada la política debería mostrarse de este modo:

![Ejemplo de Motorizado Codigo Provedor Verde](<Motorizado Codigo Provedor Verde.png>)

*c. IDENTITY TOKEN DUNA*

![Ejemplo de Motorizado Staging Identidy Token Duna C](<Motorizado Staging Identidy Token Duna C.png>)

Este código debe ser solicitado al proveedor, a la fecha de realización de este manual el 
código para este parámetro es: **Identity** 

eyJhbGciOiJSU0EtT0FFUC0yNTYiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0.qw-8FkQNOjCK9gCH1faxeUqslYEB_D4-pmVGo0zwrRu1vIo6XJg_w1aLl1UlczHL3ElKF2Sjd5pNXnMR5nzX1ccVLIUu_OgkNnK1w0R0C051l-jWD1rSVa6dogikF4UOUbrnhuEH9UyYFs_MdPNZ8BakBahA4Kugqg0B7nyXeRMdhY48Q6YN_of5spbD8EmFyevnd8kfFZZ9mGjEndf56Esp_4mD0DgLn8R40UDfMjKDazaC0m4KorJ1inKQH0dGzaJK-tPgBy2gYcNTQD5M9lWZ0RLJeBH8DabzPgSmb7AUdRYjPttKTYUspBNhW6hMkXF-ehiml_PP6GeS6Dj6nM16SMQlAktU86od1nH51T5_sod8fXVI0kSY_7b30eEZPmGU2W9VQEPtN-0F2zRI6ij9HHj_pWPJTlJb0uvEb_vBn8smLqi7W_3P53CpaJZIW3VgkhDsXPmDEquKAQH8eqR80TBsaAJ2yvmnV53-OSeSjDGsWBM5CF5wyoZosheStNyug9mMmEjU-K0DZixJzZ49nMsWiDqbWXZU4oUtbM7_wCDNpe1TPbio3MIc24kzdzbqeD2T63eqH1E9mubJCSs8VWzHes23zf8As-x8PUrU5iMNrI1S8mS_d86swWlYcQZZ_BH1A7ejuVl5O8lWwUiZntNOOY--OPFMrK21Bqs.UxNtULbP-kpLyvdBzr-wFQ.tWF24BSnaFR6fTl7VezSW5WudRrIH5WyF2XVejDoT_wsRvY1HcsosoSgtuEblp4H.Cy6zG59M_0Z09SYPKv
xT9A

Una vez configurada la política debería mostrarse de este modo:

![Ejemplo de Motorizado Configuracion Web Descripcion](<Motorizado Configuracion Web Descripcion.png>)

**3.2 Configuración por Restaurante**

1. Para ingresar al módulo de “Administración De Políticas”, debe dar clic en la opción 
“Seguridades” y en el módulo de “Políticas” 2. Al dar clic en la opción de, se desplegará la 
siguiente pestaña

![Ejemplo de Motorizado 3 2 Administracion Politicas Seguridades Politicas](<Motorizado 3 2 Administracion Politicas Seguridades Politicas.png>)

Al dar clic en la opción de **IR ADMINISTRACION POLITICAS**, se desplegará la siguiente 
pestaña de navegador

![Ejemplo de Motorizado Administracion Politicas Restaurante 3 2](<Motorizado Administracion Politicas Restaurante 3 2.png>)

2. En la pantalla actual procederemos a buscar la configuración por restaurante según el 
medio que queramos configurar por ejemplo para el medio “APP” buscaremos la configuración LISTA MEDIO APP como se muestra a continuación:

![Ejemplo de Motorizado Lista Medio App 3 2](<Motorizado Lista Medio App 3 2.png>)

Al hacer click sobre esta configuración en el panel lateral izquierdo se debe hacer click en 
el parámetro de esta configuración llamado “CAMBIO ESTADOS AUTOMATICO”

![Ejemplo de Motorizado CAMBIO ESTADOS AUTOMATICO](<Motorizado CAMBIO ESTADOS AUTOMATICO.png>)

Sobre este parametro se debe configurar de la siguiente manera:

![Ejemplo de Motorizado CAMBIO ESTADOS AUTOMATICO 3 2](<Motorizado CAMBIO ESTADOS AUTOMATICO 3 2.png>)

| PARÁMETRO | TIPO  DATO | ESP.  VALOR | OBLIGATORIO |  |  |
|---|---|---|---|---|---|
| CAMBIO ESTADOS AUTOMATICO | Selección | NO | NO |  |  |
---

Una vez creadas las políticas procedemos a completar la configuración por restaurante, en la 
pantalla de configuración de políticas para restaurante buscaremos las políticas creadas e 
iniciaremos la parametrización, se muestra a continuación el proceso de parametrizado.

![Ejemplo de Motorizado K043 Cumbaya](<Motorizado K043 Cumbaya.png>)

Al visualizar la pantalla anterior haremos doble click sobre cada una de las políticas que queramos 
configurar, a continuación, se muestra la forma en la que deberían configurarse los parámetros 
por política:

*a. CAMBIO ESTADOS AUTOMATICO*

Este parámetro es posible que ya se haya configurado anteriormente, sin embargo, sufrió 
una modificación que permitirá definir el Proveedor al que se enviara la notificación de 
creación de la factura de un pedido, el parámetro debe ser configurado de la siguiente 
forma:

![Ejemplo de Motorizado Lista Medio App a Cumbaya](<Motorizado Lista Medio App a Cumbaya.png>)

| PARÁMETRO | TIPO | DATO VALOR |
|---|---|---|
| CAMBIO ESTADOS AUTOMATICO | Selección |SI |  |  |  |  |  |  |  |
| <font color="green">CAMBIO ESTADOS AUTOMATICO</font> | <font color="green">Varchar</font> |<font color="green">DUNA</font> |  |  |  |  |  |  |  |
| <font color="green">CAMBIO ESTADOS AUTOMATICO</font> | <font color="green">Varchar</font> |<font color="green">BRINGG</font> |  |  |  |  |  |  |  |
| <font color="green">CAMBIO ESTADOS AUTOMATICO</font> | <font color="green">Varchar</font> |<font color="green">NINGUNO</font> |  |  |  |  |  |  |  |
---

Nota 1: Se debe seleccionar un y solo un proveedor al momento de configurar esta política.

Nota 2: El valor NINGUNO no enviara la orden a la plataforma de gestión de motorizados pero 
permitirá esperar recibir los cambios de estado desde un proveedor de gestión de motorizados.

Usa vez configuradas la política debería mostrarse de este modo:

![Ejemplo de Motorizado Lista Medio App 3 2 Blanco](<Motorizado Lista Medio App 3 2 Blanco.png>)
