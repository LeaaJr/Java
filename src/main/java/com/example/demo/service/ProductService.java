//Service

package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Obtener todos los productos
    public List<Product> obtenerTodosLosProductos() {
        return productRepository.findAll();
    }

    // Obtener productos por categoría
    public List<Product> obtenerProductosPorCategoria(String categoria) {
        return productRepository.findByCategoria(categoria); // ✅ Método para filtrar por categoría
    }

    // Agregar un producto
    public Product agregarProducto(Product producto) {
        return productRepository.save(producto);
    }

    // Obtener un producto por ID
    public Product obtenerProductoPorId(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public List<Product> getFeaturedProducts() {
        return productRepository.findByIsFeatured(true); // Suponiendo que tienes un campo isFeatured
    }

// Actualizar un producto
public Product actualizarProducto(Long id, Product productoActualizado) {
    Product producto = productRepository.findById(id).orElse(null);
    if (producto != null) {
        producto.setNombre(productoActualizado.getNombre());
        producto.setPrecio(productoActualizado.getPrecio());
        producto.setImageUrl(productoActualizado.getImageUrl());
        producto.setImageUrl2(productoActualizado.getImageUrl2()); // Actualizar imageUrl2
        producto.setImageUrl3(productoActualizado.getImageUrl3()); // Actualizar imageUrl3
        producto.setDescripcion(productoActualizado.getDescripcion());
        producto.setStock(productoActualizado.getStock());
        producto.setCategoria(productoActualizado.getCategoria());
        return productRepository.save(producto);
    }
    return null;
}

    // Eliminar un producto
    public void eliminarProducto(Long id) {
        productRepository.deleteById(id);
    }
}