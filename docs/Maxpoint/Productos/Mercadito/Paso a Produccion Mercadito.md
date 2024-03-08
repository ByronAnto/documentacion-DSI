# PASO A PRODUCCION Worker Cambio de Estados
## PASO A PRODUCCIÓN 
Documentar el proceso de instalación y configuración para la gestión de pedidos del Mercadito El Español.

BASE DE DATOS
1.	Objetos de Base de Datos Modificados

|  Nombres  |  Servidor- Nombre Base(Preproducción) |  
|---|---|
| [dbo].[Cabecera_App]  |  Servidor: srvv-preproduc |
| [dbo].[Cabecera_App] | Base de datos: MAXPOINT_MERCADITO_19106 |
| [dbo].[Cabecera_App] | Nuevas Columna: 	estado varchar(50) //	IDMotorolo uniqueidentifier // -	IDUserPos uniqueidentifier // -	IDPeriodo uniqueidentifier // -	latitud VARCHAR(50) // 	longitud VARCHAR(50) // -	cfac_id VARCHAR(20) // -	codigo_externo VARCHAR(100)|
---

2.	Diccionario de Datos

|  Tabla  |  Columna | Descripcion |
|---|---|---|
| dbo.Cabecera_App  |  estado |  En este campo se identifican las transacciones que ingresan por Web y App de las marcas, los estados por ahora son: //RECIBIDO //ENTREGADO // ANULADA|
| dbo.Cabecera_App | IDMotorolo |   Este campo será usado para guardar información sobre el motorolo que fue asignado al pedido.  |
| dbo.Cabecera_App | IDUserPos |   Usuario que aceptó el pedido en efectivo.  |
| dbo.Cabecera_App | latitud |  Campo para almacenar la ubicación del pedido (LATITUD).  |
| dbo.Cabecera_App | longitud |  Campo para almacenar la ubicación del pedido (LONGITUD). |
| dbo.Cabecera_App | cfac_id | Este campo sirve para relacionar la factura que se generó por este pedido (Cabecera_Factura).  |
| dbo.Cabecera_App | codigo_externo | Este campo se utilizará en el proceso de BRINGG almacenando el ID para tranking del motorizado.  |
---

3.	Scripts de Base de Datos

``` sql
ALTER TABLE dbo.Cabecera_App ADD estado varchar(50) NULL;
ALTER TABLE dbo.Cabecera_App ADD IDMotorolo [uniqueidentifier] NULL;
ALTER TABLE dbo.Cabecera_App ADD IDUserPos [uniqueidentifier] NULL;
ALTER TABLE dbo.Cabecera_App ADD IDPeriodo [uniqueidentifier] NULL;
ALTER TABLE dbo.Cabecera_App ADD latitud VARCHAR(50) NULL;
ALTER TABLE dbo.Cabecera_App ADD longitud VARCHAR(50) NULL;
ALTER TABLE dbo.Cabecera_App ADD cfac_id VARCHAR(20) NULL;
ALTER TABLE dbo.Cabecera_App ADD codigo_externo VARCHAR(100) NULL;
```
4.	Manuales
Para este proceso se han desarrollado los siguientes manuales:
-	Manual de Configuracion URL Servicios Back2.0
-	Manual de Configuracion Mercadito
-	Manual de Usuario ElMercadito
