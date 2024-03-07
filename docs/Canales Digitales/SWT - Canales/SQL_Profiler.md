# Debuggear En SQL Server Profiler  
  
Al ser una soporte de canales digitales, nos encargamos de verificar el canal de domicilio y el de kiosco.


## Paso 1

Ingresamos a Microsoft SQL Server Management Studio

Se nos va a deplegar la siguiente pantalla:

Colocamos los campos con las contraseñas requeridas y le damos clic a conectar

![Home](SQL/Home.jpeg)

## Paso 2 

Vamos a la parte de Tools y nos vamos hasta la opción de SQL Server Profile  

![Tools](SQL/Tools.jpeg)  
  
## Paso 3  
  
Al desplegarse la nueva pantalla de Trace Properties vamos hasta **Events Selection** y escogemos los dos ítems de show, continuando por los demás ítems seleccionados:  
  
![Show](SQL/Show.jpeg) 
  
En Store Procedures seleccionamos los siguientes ítems:  
  
![StP](SQL/StP.jpeg) 

En TSQL seleccionamos los siguientes ítems:  
  
![Tsql](SQL/Tsql.jpeg)  
  
En Transactions seleccionamos los siguientes ítems y le damos clic a **Run** y nos muestra los resultados.
  
![Tsql](SQL/Transt.jpeg)  
   
Si existiera algún error nos reflejaría en el cuadro de texto en la parte baja con letras rojas.  

![Tsql](SQL/Result.jpeg)  
