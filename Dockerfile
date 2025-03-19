# Usa una imagen base de Java 21
FROM eclipse-temurin:21-jdk

# Copia el código fuente al contenedor
COPY . /app

# Establece el directorio de trabajo
WORKDIR /app

# Compila la aplicación
RUN ./mvnw clean package

# Expone el puerto en el que corre la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]