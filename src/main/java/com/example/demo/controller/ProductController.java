package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Obtener todos los productos
    @GetMapping
    public List<Product> obtenerTodosLosProductos() {
        return productService.obtenerTodosLosProductos();
    }

    // Agregar un producto
    @PostMapping
    public Product agregarProducto(@RequestBody Product producto) {
        return productService.agregarProducto(producto);
    }

    // Obtener un producto por ID
    @GetMapping("/{id}")
    public Product obtenerProductoPorId(@PathVariable Long id) {
        return productService.obtenerProductoPorId(id);
    }

    // Actualizar un producto
    @PutMapping("/{id}")
    public Product actualizarProducto(@PathVariable Long id, @RequestBody Product productoActualizado) {
        return productService.actualizarProducto(id, productoActualizado);
    }

    // Eliminar un producto
    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Long id) {
        productService.eliminarProducto(id);
    }
}