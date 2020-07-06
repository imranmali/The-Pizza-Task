package com.pizzaordering.controller;


import com.pizzaordering.entity.Category;
import com.pizzaordering.exception.ResourceNotFoundException;
import com.pizzaordering.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin
@RestController
@RequestMapping("${basePath}/v1/category")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;


    @GetMapping("/all")
    public List<Category> getCategories() {
        return categoryRepository.findAll();
    }


    @PostMapping("/")
    public Category createCategory(@Valid @RequestBody Category category) {

        return categoryRepository.save(category);
    }

    @DeleteMapping("/{id}")
    public Map<String, Boolean> deleteCategory(@PathVariable(value = "id") Long categoryId)
            throws ResourceNotFoundException {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found for this id :: " + categoryId));

        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }


    @PutMapping("/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable(value = "id") Long categoryId,
                                                   @Valid @RequestBody Category category) throws ResourceNotFoundException {
        Category categoryEntity = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found for this id :: " + categoryId));

        categoryEntity.setName(category.getName());
        final Category updatedCategory = categoryRepository.save(categoryEntity);
        return ResponseEntity.ok(updatedCategory);
    }

}
