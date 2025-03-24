package com.example.demo.controller;

import com.example.demo.model.Product;
import com.example.demo.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public ResponseEntity<?> obtenerTodosLosProductos() {
        try {
            return ResponseEntity.ok(productService.obtenerTodosLosProductos());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(
                Map.of("error", "Error al obtener productos", 
                      "details", e.getMessage())
            );
        }
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity<?> obtenerProductosPorCategoria(@PathVariable String categoria) {
        try {
            return ResponseEntity.ok(productService.obtenerProductosPorCategoria(categoria));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                Map.of("error", "Categoría no encontrada", 
                      "categoria", categoria)
            );
        }
    }

    @PostMapping
public ResponseEntity<?> agregarProducto(@RequestBody Product producto) {
    try {
        // Validación segura con objetos Double
        if (producto.getNombre() == null || producto.getNombre().isEmpty()) {
            return ResponseEntity.badRequest().body("El nombre es obligatorio");
        }
        if (producto.getPrecio() == null || producto.getPrecio() <= 0) {
            return ResponseEntity.badRequest().body("El precio debe ser mayor que 0");
        }
        
        Product nuevoProducto = productService.agregarProducto(producto);
        return ResponseEntity.ok(nuevoProducto);
        
    } catch (Exception e) {
        return ResponseEntity.internalServerError().body("Error al crear producto: " + e.getMessage());
    }
}

    @GetMapping("/{id}")
    public ResponseEntity<?> obtenerProductoPorId(@PathVariable Long id) {
        try {
            Product producto = productService.obtenerProductoPorId(id);
            if (producto == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(producto);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(
                Map.of("error", "Error al obtener producto",
                      "id", id,
                      "details", e.getMessage())
            );
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarProducto(@PathVariable Long id, @RequestBody Product productoActualizado) {
        try {
            Product producto = productService.actualizarProducto(id, productoActualizado);
            if (producto == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(producto);
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(
                Map.of("error", "Error al actualizar producto",
                      "id", id,
                      "details", e.getMessage())
            );
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarProducto(@PathVariable Long id) {
        try {
            productService.eliminarProducto(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(
                Map.of("error", "Error al eliminar producto",
                      "id", id,
                      "details", e.getMessage())
            );
        }
    }

    @GetMapping("/destacados")
    public ResponseEntity<?> obtenerProductosDestacados() {
        try {
            return ResponseEntity.ok(productService.getFeaturedProducts());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().body(
                Map.of("error", "Error al obtener productos destacados",
                      "details", e.getMessage())
            );
        }
    }
}