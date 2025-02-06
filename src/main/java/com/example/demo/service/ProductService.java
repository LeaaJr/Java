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

    // Agregar un producto
    public Product agregarProducto(Product producto) {
        return productRepository.save(producto);
    }

    // Obtener un producto por ID
    public Product obtenerProductoPorId(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    // Actualizar un producto
    public Product actualizarProducto(Long id, Product productoActualizado) {
        Product producto = productRepository.findById(id).orElse(null);
        if (producto != null) {
            producto.setNombre(productoActualizado.getNombre());
            producto.setPrecio(productoActualizado.getPrecio());
            return productRepository.save(producto);
        }
        return null;
    }

    // Eliminar un producto
    public void eliminarProducto(Long id) {
        productRepository.deleteById(id);
    }
}