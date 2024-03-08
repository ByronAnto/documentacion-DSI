# Manual de Usuario Fidelización FRONTEND.
# MANUAL PARA USUARIO DE FIDELIZACIÓN EN MAXPOINT FRONTEND
## 1.	 DESCRIPCIÓN

Este manual se ha desarrollado para detallar el proceso de configuración de una marca al proceso de fidelización de clientes.

## 2.	PROCEDIMIENTO

**2.1	Pantalla Inicial de fidelización**

Esta pantalla realiza la interacción inicial entre el sistema y el cliente dentro del cual muestra un mensaje de bienvenida acompañada de una pregunta para conocer si el cliente pertenece (está registrado) al plan amigos.

![Ejemplo de FRONTEND Bienvenido Perteneces Plan Amigos](<FRONTEND Bienvenido Perteneces Plan Amigos.png>)

Si el cliente indica que, si **pertenece** al plan amigo, el cajero seleccionará la opción SI de esta pantalla, la cual presentará un cuadro de texto para que ingrese la cédula del cliente O el RUC (El ruc deberá ser de persona natura) y proceder a continuar con la orden.

![Ejemplo de FRONTEND Ingrese Numero Cedula](<FRONTEND Ingrese Numero Cedula.png>)

Si el cliente indica que, **No pertenece** al plan amigo, el cajero seleccionará la opción NO de la pantalla inicial, en donde se presentará otra pregunta la cual se le realizará al cliente para conocer si le gustaría pertenecer al plan.

![Ejemplo de FRONTEND Perteneces Plan Amigos](<FRONTEND Perteneces Plan Amigos.png>)

En el caso de que el cliente responda que si quiere pertenecer al plan amigos se procederá a dar en la opción “Si” de la pantalla inicial, se mostrará una pantalla para registrar los datos del cliente 

![Ejemplo de FRONTEND Registro](<FRONTEND Registro.png>)

<font color="yellow">**NOTA:** En caso que el cliente decida no registrarse se redirigirá a la pantalla de toma pedido de la manera tradicional.</font> 

**2.2	Pantalla toma pedido.**

Dentro de la pantalla toma de pedido se podrá realizar el canje de plus con los respectivos puntos. Dentro de esta pantalla cuando el restaurante está configurado con la fidelización activa consta con las opciones de: Que me alcanza, Puntos del cliente, puntos equivalentes del plus.

**2.3	Funcionalidad “Que te alcanza”**

El objetivo de esta funcionalidad es realizar un filtrado rápido de que plus le alcanzar para canjear al cliente en base a sus puntos, la opción se ubica en la parte superior izquierda que luego de darle un clic realizara dicho filtrado.

![Ejemplo de FRONTEND Que te alcanza 1](<FRONTEND Que te alcanza 1.png>)

![Ejemplo de FRONTEND Que te alcanza 2](<FRONTEND Que te alcanza 2.png>)

**2.4	Puntos del cliente**

Son la sumatoria de puntos acumulado por las compras de un determinado cliente perteneciente al plan amigos, estos se pueden visibilizar en la parte posterior izquierda de la pantalla de toma de pedido.

![Ejemplo de FRONTEND 2 4 Puntos del Cliente](<FRONTEND 2 4 Puntos del Cliente.png>)

**2.5	Puntos equivalentes del plus**

Son los puntos que equivale un plus para su respectivo canje, dentro de la pantalla de toma de pedido se pueden visualizar los plus configurados para canjes, los cuales se presentan con un visto de color **verde** cuando los puntos del cliente alcanzan para canjearlo, también aparecerán con un circulo color rojo los que aún no tiene los suficientes puntos en ellos se podrá visualizar cuantos puntos le faltan al cliente para poder canjearlo. 

![Ejemplo de FRONTEND Espreso Simple Verde](<FRONTEND Espreso Simple Verde.png>)


![Ejemplo de FRONTEND Espreso Simple Rojo](<FRONTEND Espreso Simple Rojo.png>)

Para poder realizar el canje de productos el cliente debe tener descargada la App de Amigos de Juan Valdez en su teléfono móvil o registrar sus datos en la web, de lo contrario no podrá realizar el canje.

![Ejemplo de FRONTEND Necesitas Finalizar OK](<FRONTEND Necesitas Finalizar OK.png>)

**2.6	Pantalla Facturación**

Dentro de la pantalla de facturación se podrá realizar el proceso de redimensión de puntos, todos los plus que hayan sido seleccionado de la pantalla toma de pedido configurados con puntos se visualizaran en esta pantalla de color azul.

![Ejemplo de FRONTEND Cafe con Leche Blanco Azul](<FRONTEND Cafe con Leche Blanco Azul.png>)

Dentro de la pantalla de facturación en las formas de pago nos encontramos con la de “Redimir Puntos” Mediante este botón es posible realizar el canje del plus por los respectivos puntos equivalentes. Es importante que se realice el canje en primer lugar y luego (en caso de existir) realizar el pago de los productos no configurados (el sistema valida que se realice el canje en primera instancia.)

![Ejemplo de FRONTEND 10 Items REDIMIR PUNTOS](<FRONTEND 10 Items REDIMIR PUNTOS.png>)

![Ejemplo de FRONTEND Primero Redima Productos Puntos](<FRONTEND Primero Redima Productos Puntos.png>)

Una vez que el usuario de un clic sobre el botón de redimir puntos iniciara el proceso de canje el cual finalizará cuando el sistema muestre el mensaje de que se realizó con éxito.

![Ejemplo de FRONTEND Puntos Canjeados Exitosamente](<FRONTEND Puntos Canjeados Exitosamente.png>)

Una vez finalizado el proceso de canje de puntos, los plus que se encontraban pintados de color azul se ocultan de la lista.

Antes del canje	---------------------------- Después del canje
![Ejemplo de FRONTEND Blanco Azul Cafe Leche 2](<FRONTEND Blanco Azul Cafe Leche 2.png>)

Luego de realizar el canje de los respectivos plus se procederá a realizar el pago de los plus que no entran en el canje mediante la forma de pago que indique el cliente, luego se tendrá que confirmar los datos del cliente (no se podrá cambiar el cliente colocando otra cédula).

![Ejemplo de FRONTEND Informacion Fiscal SRI](<FRONTEND Informacion Fiscal SRI.png>)

Al finalizar el pago el sistema le indicará cuantos puntos acumula por la compra.

![Ejemplo de FRONTEND Felicitaciones Acummulaste 10 98](<FRONTEND Felicitaciones Acummulaste 10 98.png>)

**2.7	Pantalla de Notas de crédito**

El proceso de notas de crédito para reversar una transacción de canje de puntos se la realiza desde la pantalla toma de pedido dando clic en el botón menú > Transacciones.

![Ejemplo de FRONTEND Menu Puntos](<FRONTEND Menu Puntos.png>)

Nos llevara a la pantalla de anulaciones en donde seleccionaremos Menú > Cuentas cerradas 

![Ejemplo de FRONTEND Transacciones Cuentas Cerradas](<FRONTEND Transacciones Cuentas Cerradas.png>)

Nos aparecerá el listado de las transacciones (facturas) emitidas de las cuales seleccionaremos la que deseamos realizar la nota de crédito y luego damos clic en el botón “Nota de Crédito” y especificamos el motivo.

![Ejemplo de FRONTEND Ingrese el Motivo Anulacion de Pedido](<FRONTEND Ingrese el Motivo Anulacion de Pedido.png>)

luego de colocar la observación procedemos a anular todas las formas de pago que tenga la transacción mediante un clic sobre ellas.

![Ejemplo de FRONTEND Forma Pago Anular](<FRONTEND Forma Pago Anular.png>)

Una vez finalizado el proceso, se visualizará el mensaje de que la nota de crédito se realizó correctamente y además mostrara la cantidad de puntos reversados.

![Ejemplo de FRONTEND Nota de Credito](<RONTEND Nota de Credito.png>)

**2.8	Recomendaciones**

Una vez terminado el proceso de configuración, se recomienda un conjunto de pruebas en las cajas desde aplicación de formas de pago, hasta impresiones de RIDEs.
