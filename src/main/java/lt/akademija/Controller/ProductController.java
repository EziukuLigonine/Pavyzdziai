package lt.akademija.Controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.Model.CreateProductCmd;
import lt.akademija.Model.Product;
import lt.akademija.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "Product")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping(value = "/products")
    @ApiOperation(value = "Get products", notes = "Returns shop's products")
    public List<Product> getProducts(@ApiParam(value = "Search product")
                                         @RequestParam(value = "search", required = false) String search) {
        return productService.getProducts(search);
    }

    @GetMapping(value = {"/products/{id}", "/admin/products/{id}"})
    @ApiOperation(value = "Get product", notes = "Returns a single product")
    public Product getProduct(@PathVariable String id) {
        return productService.getProduct(id);
    }

    @PostMapping(value = "/admin/products/new")
    @ResponseStatus(HttpStatus.CREATED)
    @ApiOperation(value = "Create products", notes = "Creates a product")
    public void createProduct(@RequestBody CreateProductCmd cmd) {
        productService.createProduct(cmd);
    }

    @PutMapping(value = "/admin/products/{id}")
    @ApiOperation(value = "Update product", notes = "Updates product information")
    public void updateProduct(@RequestBody CreateProductCmd cmd, @PathVariable String id) {
        productService.updateProduct(cmd, id);
    }

    @DeleteMapping(value = "/admin/products/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation(value = "Delete product", notes = "Delete a single product")
    public void deleteProduct(@PathVariable String id) {
        productService.deleteProduct(id);
    }
}
