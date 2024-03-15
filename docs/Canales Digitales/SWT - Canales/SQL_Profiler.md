# Debuggear En SQL Server Profiler  
  
Al ser una soporte de canales digitales, nos encargamos de verificar el canal de domicilio y el de kiosco.


## Paso 1

Ingresamos a Microsoft SQL Server Management Studio

Se nos va a deplegar la siguiente pantalla:

Colocamos el **Server name, authentication, login y contraseña** requerida y le damos clic a **conectar**

![Home](SQL/Home.jpeg)

## Paso 2 

Dentro de **SQL Server Management** vamos a la parte de Tools y luego damos clic sobre la opción de **SQL Server Profile**  

![Tools](SQL/Tools.jpeg)  
  
## Paso 3  
  
Al desplegarse la nueva pantalla de Trace Properties vamos hasta **Events Selection** y escogemos los dos ítems: **Show all events y Show all columns** luego contiuamos por Column Filters:  
  
![Show](SQL/Show.jpeg) 

Dentro de **Column Filters** ingresamos las siguientes líneas en like para filtar también con esa información.  
  
![Error](SQL/Like.jpeg)  
  
![Error](SQL/Like1.jpeg)  
  
![Error](SQL/Like2.jpeg)  
  
En **Errors and Warnings** selccionamos los siguientes ítems:  

![Error](SQL/Error_Warn.jpeg)
  
![Error](SQL/Error_Warn2.jpeg)  
 
En **Store Procedures** seleccionamos los siguientes ítems:  
  
![StP](SQL/Stp1.jpeg) 
  
![StP](SQL/Stp2.jpeg)  

En TSQL seleccionamos los siguientes ítems:  
  
![Tsql](SQL/Tsql.jpeg)  
  
En **Transactions** seleccionamos los siguientes ítems y le damos clic a **Run** y nos muestra los resultados.
  
![Tsql](SQL/Transt.jpeg)  
   
Si existiera algún error nos reflejaría en el cuadro de texto en la parte baja con letras rojas.  

![Tsql](SQL/Result.jpeg)  
