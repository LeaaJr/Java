package com.example.demo.service;

import com.example.demo.model.Product;
import com.example.demo.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<Product> obtenerTodosLosProductos() {
        return productRepository.findAll();
    }

    public List<Product> obtenerProductosPorCategoria(String categoria) {
        return productRepository.findByCategoria(categoria);
    }

    @Transactional
        public Product agregarProducto(Product producto) {
            // Asegura valores por defecto
            if (producto.getIsFeatured() == null) {
                producto.setIsFeatured(false);
            }
            return productRepository.save(producto);
        }

    public Product obtenerProductoPorId(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @Transactional
    public Product actualizarProducto(Long id, Product productoActualizado) {
        return productRepository.findById(id)
            .map(producto -> {
                producto.setNombre(productoActualizado.getNombre());
                producto.setPrecio(productoActualizado.getPrecio());
                producto.setImageUrl(productoActualizado.getImageUrl());
                producto.setImageUrl2(productoActualizado.getImageUrl2());
                producto.setImageUrl3(productoActualizado.getImageUrl3());
                producto.setDescripcion(productoActualizado.getDescripcion());
                producto.setStock(productoActualizado.getStock());
                producto.setCategoria(productoActualizado.getCategoria());
                producto.setIsFeatured(productoActualizado.getIsFeatured());
                return productRepository.save(producto);
            })
            .orElse(null);
    }

    @Transactional
    public void eliminarProducto(Long id) {
        productRepository.deleteById(id);
    }

    public List<Product> getFeaturedProducts() {
        return productRepository.findByIsFeatured(true);
    }
}