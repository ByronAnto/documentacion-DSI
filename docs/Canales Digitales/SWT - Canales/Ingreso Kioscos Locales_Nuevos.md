# Ingreso De Kioscos Para Locales Nuevos  

## Contenido  

El contenido de este manual son los pasos a seguir para la creación de los locales nuevos de kiosco, este proceso se lo debe realizar en la base nacional del SIR.  

**1. Validamos que el local tenga desplegado el proyecto de kiosco, este proyecto es desplegado por el equipo N3.** 

![Kioscos](Images/Project_Kiosco.jpeg)   
  


**2.	Validamos en la tabla KioskoWS que el local no este creado.**  

![Table](Images/Table_kioscoWs.jpeg)  
  

**3. Validamos el número de restaurante en la tabla Restaurante.**  
  
![Table](Images/Number_Rest.jpeg)  
  
**4.	Una vez validado el número del restaurante se procede a realizar el insert con el script adjunto INSERTAR_KIOSKO, tomando en cuenta las siguientes observaciones:**  

**a.**	Numero de restaurante  
**b.**	Ip del servidor del local  
**c.**	Es valido reutilizar el token de otros locales para el nuevo registro.
