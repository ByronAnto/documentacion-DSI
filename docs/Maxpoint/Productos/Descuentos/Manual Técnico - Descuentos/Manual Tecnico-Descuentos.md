# <p align="center"> Manual técnico Proceso de Descuentos </p>

Este documento tiene la descripción del proceso de descuentos, solución de base de datos que se diseñó y desarrollo para el sistema MaxPoint.

### Descuentos desarrollados:

1. **Descuento a la Factura**

   Este descuento se aplica al valor neto total de la factura y puede ser de 2 tipos:
   - Tipo Porcentaje: El valor del descuento será calculado como un porcentaje (1 al 100) del valor neto de la factura.
   - Tipo Valor Fijo: El valor del descuento será el monto configurado en el descuento en la pantalla de configuración de descuentos del backend.

   Se pueden configurar las siguientes restricciones opcionales:

   - Máximo y mínimo de valor neto de la factura
   - Restaurante al que aplica
   - Fecha de vigencia

2.	**Descuento al producto**

Este descuento se aplica a un producto específico, que ha sido digitado al momento de tomar la orden, y puede ser de 2 tipos:

- Tipo Porcentaje: El valor del descuento será calculado como un porcentaje del valor neto del producto.
- Tipo Valor Fijo: El valor del descuento será el monto configurado en la pantalla de configuración de descuentos del backend.

Se pueden configurar las siguientes restricciones opcionales:

  - **Restricción de cantidad**._ Restricción de cantidades mínimas y/o máximas para la activación del descuento, estas cantidades  pueden ser:

      - Máximo y mínimo de cantidad de productos pedidos
      - Máximo y mínimo de valor en moneda
      - Restaurante al que aplica
      - Fecha de vigencia
      - Productos a los que aplica

Para ambas formas de aplicación de descuentos, existen restricciones que pueden ser agregadas opcionalmente:

**Consideraciones**:

- Los descuentos que se configuran para productos se aplican automáticamente en el momento en que se digita ese producto en la toma de orden, no se solicita una validación de contraseña de administrador.
- Los descuentos que se configuran como descuento a la factura nunca se aplican automáticamente, siempre se solicita una validación de contraseña de administrador antes de poder agregarlos a la factura.
- Se puede configurar períodos de tiempo durante los cuales se encuentre activo el descuento, adicionalmente estas fechas pueden ser distintas para cada uno de los restaurantes asociados al descuento.

 ## <p align="center"> Diccionario de Datos </p>

### Tabla Descuentos

En esta tabla se guardan todas las configuraciones del descuento

| NOMBRE             | TIPO DE DATO       | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE      | DESCRIPCIÓN                                                                                                                               |
|--------------------|---------------------|----------------|---------------|------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| IDDescuentos       | uniqueidentifier   | 16             | NO            | PRIMARIA   |                                                                                                                                           |
| cdn_id             | int                | 4              | NO            | FORÁNEA    | Hereda de tabla “Cadena”.                                                                                                                |
| dsct_descripcion   | varchar            | -1             | SI            |            | Campo de descripción del descuento, aparece en la pantalla de facturación.                                                               |
| dsct_maximo        | float              | 8              | SI            |            | Valor de restricción, que controla el máximo (de unidades o de valor en dinero) de un descuento.                                         |
| dsct_valor         | float              | 8              | SI            |            | Valor del descuento, dependiendo del tipo de descuento puede ser un monto fijo de dinero o porcentaje.                                   |
| dsct_minimo        | float              | 8              | SI            |            | Valor de restricción, que controla el mínimo (de unidades o de valor) para que el descuento sea aplicable.                                |
| apld_id            | int                | 4              | NO            | FORÁNEA    | Hereda de tabla “Aplica_Descuento”.                                                                                                      |
| dsct_aplica_cantidad | int             | 4              | SI            |            | Campo bandera usado al momento de verificar si se puede aplicar un descuento, si el valor es VERDADERO los campos dsct_minimo y dsct_maximo son considerados cantidades caso contrario valores de dinero. |
| FechaCreacion      | datetime           | 8              | SI            |            | Fecha de creación del descuento.                                                                                                         |
| FechaModificacion  | datetime           | 8              | SI            |            | Fecha de la última modificación del descuento.                                                                                            |
| IDTipoDescuento    | uniqueidentifier   | 16             | NO            | FORÁNEA    | Hereda de tabla “Tipo_Descuento”.                                                                                                         |
| IDStatus           | uniqueidentifier   | 16             | NO            | FORÁNEA    | Heredado de tabla “Status”, puede ser Activo o Inactivo                                                                                   |
| replica            | int                | 4              | SI            |            | Campo para proceso de réplica.                                                                                                            |
| dsct_automatico    | bit                | 1              | SI            |            | Campo bandera, configura si el descuento requiere interacción del usuario para ser aplicado, cuando este campo esté seleccionado el descuento se agregará automáticamente a los montos (de factura o producto según el campo tipo de aplicación). Los valores correspondientes serán calculados por el sistema. Si el descuento se configura para aplicarse a la factura, este campo automáticamente estará con valor FALSO si se aplica al producto este campo estará con valor FALSO. |
| dsct_aplica_min_max| bit               | 1              | SI            |            | Campo bandera, si el valor es VERDADERO se toman en cuenta los campos dsct_minimo y dsct_maximo para verificar si se puede aplicar o no este descuento. |
| dsct_seguridad     | bit                | 1              | SI            |            | Campo bandera, configura si se requiere realizar un ingreso de clave para autorizar la aplicación del descuento. En los descuentos que se aplican sobre productos este valor siempre es FALSO, en los descuentos que se aplican a la factura este valor siempre es VERDADERO |
| IDUserCrea         | uniqueidentifier   | 16             | NO            | FORÁNEA    | Hereda de tabla “Users_Pos”, Usuario que creó el registro.                                                                                |
| IDUserModifica     | uniqueidentifier   | 16             | NO            | FORÁNEA    | Hereda de tabla “Users_Pos”, Usuario que realizó la última modificación del registro.                                                      |


### Tabla Descuento_Plu
En esta tabla se guardan las asociaciones entre el descuento y los Productos a los que será aplicado, cada producto asociado a un descuento genera un registro en la tabla.

| NOMBRE         | TIPO DE DATO     | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE    | DESCRIPCIÓN                                                                                         |
|----------------|------------------|----------------|---------------|----------|----------------------------------------------------------------------------------------------------|
| IDDescuentos   | uniqueidentifier | 16             | NO            | PRIMARIA |                                                                                                    |
| plu_id         | bigint           | 8              | NO            | FORÁNEA  | Hereda de la tabla “Plus”, producto al que se le asigna el descuento.                               |
| IDStatus       | uniqueidentifier | 16             | NO            | FORÁNEA  | Estado de la tabla Status (Activo o Inactivo), del módulo Descuentos                                 |
| replica        | int              | 4              | NO            |          | Campo para proceso de réplica.                                                                     |


### Esquema de la tabla Descuento_Restaurante	
En esta tabla se guardan las asociaciones entre el descuento y los restaurantes en los que será aplicado, cada Restaurante asociado a un descuento genera un registro en la tabla.

| NOMBRE          | TIPO DE DATO     | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE    | DESCRIPCIÓN                                                                                         |
|-----------------|------------------|----------------|---------------|----------|----------------------------------------------------------------------------------------------------|
| IDDescuentos    | uniqueidentifier | 16             | NO            | PRIMARIA |                                                                                                    |
| rst_id          | int              | 4              | NO            | FORÁNEA  | Hereda de la tabla “Restaurantes”, restaurante donde aplica el descuento.                            |
| IDStatus        | uniqueidentifier | 16             | NO            | FORÁNEA  | Estado de la tabla Status (Activo o Inactivo), del módulo Descuentos.                                 |
| replica         | int              | 4              | NO            |          | Campo para proceso de réplica.                                                                     |
| FechaInicio     | datetime         | 8              | NO            |          | Fecha desde la cual se aplicará el descuento en este restaurante.                                    |
| FechaFin        | datetime         | 8              | NO            |          | Fecha hasta la cual se aplicará el descuento en este restaurante.                                    |


### Tabla Aplica_Descuento
En esta tabla se guardan las formas de aplicación de los descuentos

| NOMBRE             | TIPO DE DATO     | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE    | DESCRIPCIÓN                                                                                         |
|--------------------|------------------|----------------|---------------|----------|----------------------------------------------------------------------------------------------------|
| apld_id            | int              | 4              | NO            | PRIMARIA |                                                                                                    |
| apld_descripcion   | varchar          | 100            | NO            |          | Nombre de la forma de aplicación del descuento.                                                     |
| IDStatus           | uniqueidentifier | 16             | NO            | FORÁNEA  | Hereda de la tabla “Status” (Activo o Inactivo), del módulo Descuentos.                              |
| replica            | int              | 4              | NO            |          | Campo para proceso de réplica.                                                                     |


### Tabla Tipo_Descuento
En esta tabla se guardan los tipos de descuento.

| NOMBRE           | TIPO DE DATO     | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE    | DESCRIPCIÓN                                               |
|------------------|------------------|----------------|---------------|----------|------------------------------------------------------------|
| IDTipoDescuento  | uniqueidentifier | 16             | NO            | PRIMRIA  |                                                            |
| tpd_descripcion  | varchar          | 100            | NO            |          | Descripción del tipo de descuento.                          |
| IDStatus         | uniqueidentifier | 16             | NO            | FORÁNEA  | Hereda de la tabla “Status”, (Activo o Inactivo), del módulo Descuentos. |
| Replica          | Int              | 4              | NO            |          |                                                            |
| Nivel            | Int              | 4              | NO            |          |                                                            |

### Tabla Descuento_Factura

| NOMBRE              | TIPO DE DATO     | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE    | DESCRIPCIÓN                                                                                        |
|---------------------|------------------|----------------|---------------|----------|---------------------------------------------------------------------------------------------------|
| IDDescuentoFactura | uniqueidentifier | 16             | NO            | PRIMARIA |                                                                                                   |
| cfac_id             | varchar          | 100            | NO            | FORÁNEA   | Hereda de la tabla “Cabecera_Factura”, relación entre descuento y factura para identificar los descuentos que se le aplicaron. |
| IDDescuentos       | uniqueidentifier | 16             | NO            | FORÁNEA   | Hereda de la tabla “Descuentos”.                                                                  |
| desf_valor         | float            | 8              | NO            |           | Valor del descuento.                                                                               |
| Replica            | int              | 4              | NO            |           |                                                                                                   |
| IDUsersPos         | uniqueidentifier | 16             | NO            | FORÁNEA   | Hereda de la tabla “Users_Pos”.                                                                   |


### Tabla Cabecera_factura
De esta tabla se utilizan solo 3 campos para el proceso de descuentos, aquí se guardan los valores totales de descuento aplicados en la factura.

| NOMBRE                     | TIPO DE DATO  | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE PRIMARIA | DESCRIPCIÓN                                                                                              |
|----------------------------|---------------|----------------|----------------|----------------|----------------------------------------------------------------------------------------------------------|
| cfac_descuento             | float         |                | SI             |                | Valor final del descuento, en moneda, que se aplica a la factura ($).                                     |
| cfac_porcentaje_descuento  | Float         |                | SI             |                | Porcentaje total de descuento que se aplica a la factura (entre 0 y 100).                                 |
| cfac_descuento_empresa     | float         |                | SI             |                | Valor fijo total del descuento, en moneda, que se aplicó a la factura ($).                                |


### Tabla Detalle Factura
De esta tabla se utilizan solo 3 campos para el proceso de descuentos, aquí se guardan los valores de descuento que se aplican a cada uno de los productos que componen la factura, cada producto de la factura genera un registro en la tabla.

| NOMBRE                     | TIPO DE DATO  | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE PRIMARIA | DESCRIPCIÓN                                                                                           |
|----------------------------|---------------|----------------|----------------|----------------|-------------------------------------------------------------------------------------------------------|
| descuento                  | float         |                | SI             |                | Valor final del descuento, en moneda, que se aplicó al producto.                                        |
| dtfac_valor_descuento      | float         |                | SI             |                | Valor fijo total del descuento, en moneda, que se aplicó al producto.                                   |
| dtfac_porcentaje_descuento | float         |                | SI             |                | Porcentaje total de descuento que se aplicó al producto (entre 0 y 100).                               |


### Tabla Cabecera_Nota_Credito
De esta tabla se utilizan solo 3 campos para el proceso de descuentos, aquí se guardan los valores totales de descuento aplicados en la nota de crédito.

| NOMBRE                     | TIPO DE DATO  | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE PRIMARIA | DESCRIPCIÓN                                                                                              |
|----------------------------|---------------|----------------|----------------|----------------|----------------------------------------------------------------------------------------------------------|
| ncre_porcentaje_descuento  | float         |                | SI             |                | Porcentaje total de descuento que se aplica a la factura.                                                |
| ncre_valor_descuento       | float         |                | SI             |                | Valor final del descuento, en moneda, que se aplica a la factura.                                         |
| descuento                  | float         |                | SI             |                | Valor final del descuento, en moneda, que se aplica a la factura.                                         |


### Tabla Detalle_Nota_Credito
De esta tabla se utilizan solo 3 campos para el proceso de descuentos, aquí se guardan los valores de descuento que se aplican a cada uno de los productos que componen la nota de crédito, cada producto de la nota de crédito genera un registro en la tabla.

| NOMBRE                     | TIPO DE DATO  | TAMAÑO MÁXIMO | PERMITE NULOS | CLAVE PRIMARIA | DESCRIPCIÓN                                                                                                       |
|----------------------------|---------------|----------------|----------------|----------------|-------------------------------------------------------------------------------------------------------------------|
| descuento                  | float         |               |       1         |                | Valor final del descuento, en moneda, que se aplicó al producto.                                                 |
| dncre_porcentaje_descuento| float         |               |      1          |                | Porcentaje total de descuento que se aplicó al producto.                                                           |
| dncre_valor_descuento     | float         |               |     1           |                | Porcentaje total de descuento que se aplicó al producto.                                                           |
