package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "products") // Nombre de la tabla en PostgreSQL
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String nombre;

    @Column(nullable = false)
    private double precio;

    @Column(name = "imageurl")  // Asegura que coincide con la BD
    private String imageUrl;

    @Column(name = "imageurl2")  // Nueva columna para la segunda imagen
    private String imageUrl2;

    @Column(name = "imageurl3")  // Nueva columna para la tercera imagen
    private String imageUrl3;

    @Column(columnDefinition = "TEXT") // Para descripciones largas
    private String descripcion;

    @Column(nullable = false)
    private int stock;

    @Column(nullable = false, length = 50) // Nueva columna para la categoría
    private String categoria;

    @Column(nullable = false)
    private boolean isFeatured;  // Nuevo campo para productos destacados

    // Constructor vacío (obligatorio para JPA)
    public Product() {
    }

    // Constructor con parámetros
    public Product(String nombre, double precio, String imageUrl, String imageUrl2, String imageUrl3, String descripcion, int stock, String categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.imageUrl = imageUrl;
        this.imageUrl2 = imageUrl2;
        this.imageUrl3 = imageUrl3;
        this.descripcion = descripcion;
        this.stock = stock;
        this.categoria = categoria;
    }

    // Getters y Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getImageUrl2() {
        return imageUrl2;
    }

    public void setImageUrl2(String imageUrl2) {
        this.imageUrl2 = imageUrl2;
    }

    public String getImageUrl3() {
        return imageUrl3;
    }

    public void setImageUrl3(String imageUrl3) {
        this.imageUrl3 = imageUrl3;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public boolean isFeatured() {
        return isFeatured;
    }

    public void setFeatured(boolean featured) {
        isFeatured = featured;
    }

    @Override
    public String toString() {
        return "Product{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", precio=" + precio +
                ", imageUrl='" + imageUrl + '\'' +
                ", imageUrl2='" + imageUrl2 + '\'' +
                ", imageUrl3='" + imageUrl3 + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", stock=" + stock +
                ", categoria='" + categoria + '\'' +
                '}';
    }
}