# CONFIGURACIÓN DE PROVEEDOR DE GESTIÓN DE MOTORIZADOS POR MEDIO Y RESTAURANTE 1_9_15.
# Pruebas UAT Operaciones - Aceptación de Usuario.
<!--Cuadro-->

| FUNCIONALIDAD  | INTERFACE MAXPOINT |  |
|---|---|---|
| **Procedimiento Realizado** | **Resultado Esperado** |**Resultado Obtenido** |  
| *Punto de Venta / Pedidos Pendientes* | 
| 1. Dar click en el botón “Pedidos Pendientes” en la pantalla de orden de pedido del maxpoint. | El sistema mostrará en la tabla principal únicamente los pedidos de los medios que fueron configurados en la política y en la lista de la parte superior derecha los medios que han sido configurados en la misma. | VALORACIÓN: |
| 2. Confirmar un pedido | Al hacer click sobre uno de los pedidos se debe mostrar en la parte inferior de la lista de pedidos el botón “Confirmar” al hacer click sobre este, el pedido debe cambiar de estado a “Recibido”. | VALORACIÓN: |
| 3. Facturar un pedido | Al hacer click sobre uno de los pedidos se debe mostrar en la parte inferior de la lista de pedidos el botón “Facturar” al hacer click sobre este el pedido debe cambiar de estado a “Por Asignar”, adicional al cambio de estado el pedido debe de ser enviado al proveedor de gestión de motorizados que corresponda (Bringg o Duna). | VALORACIÓN: |
| 4. Notificación de cambio de estado desde el proveedor | Se debe recibir los cambios de estados Asignado, En camino y entregado desde la plataforma del proveedor de gestión de motorizado. | VALORACIÓN: |
| 5. Facturar pedido (Proveedor NINGUNO) | "NINGUNO” no se notificará la creación del pedido a ningún proveedor, pero los botones de cambio de estado estarán bloqueados y el pedido quedara a la espera de la recepción de cambios de estado de algún Proveedor externo. | VALORACIÓN:
| *Punto de Venta / Facturación* |
| 6. Facturar pedido del medio “Llamada” | Ingresamos al punto de venta para la facturación de un pedido del medio llamada desde el botón “FASTFOOD”. | VALORACIÓN: | 
| 7. Facturar el pedido | Al completar la orden procedemos a aplicar el medio de pago y comprobar que los datos del cliente al hacer click en si en la pregunta de confirmación ¿LOS DATOS DE CLIENTE SON CORRECTOS? Una vez confirmada esta validación se facturará el pedido y se enviará al proveedor configurado para la gestión de motorizados. | VALORACIÓN: |
| 8. Cambiar de estados al pedido del medio de llamada | Una vez ingresado el pedido al proveedor configurado para la gestión de motorizados se puede continuar con el flujo siguiendo las instrucciones desde el paso numero 4. | VALORACIÓN: |