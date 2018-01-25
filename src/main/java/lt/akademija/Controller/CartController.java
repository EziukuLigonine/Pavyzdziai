package lt.akademija.Controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.akademija.Model.AddToCartCmd;
import lt.akademija.Model.Product;
import lt.akademija.Service.CartService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping(value = "/api/users")
@Api(value = "Cart")
@CrossOrigin(origins = "http://localhost:3000")
public class CartController {

    @Autowired
    private CartService cartService;
    private final static Logger logger = LogManager.getLogger(CartController.class);

    @PostMapping(value = "/{username}/cart-products")
    @ApiOperation(value = "Add to cart", notes = "Adds a product to user's cart")
    public ResponseEntity<Void> addToCart(@RequestBody AddToCartCmd cmd, @PathVariable String username) {
        if (cartService.addToCart(cmd, username)) {
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } else {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
    }

    @GetMapping(value = "/{username}/cart-products")
    @ApiOperation(value = "Get cart products", notes = "Returns user cart's products")
    public Set<Product> getUserProducts(@PathVariable String username) {
        return cartService.getUserProducts(username);
    }

    @DeleteMapping(value = "/{username}/cart-products/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @ApiOperation(value = "Delete from cart", notes = "Deletes a product from cart")
    public void deleteFromCart(@PathVariable String username, @PathVariable String id) {
        cartService.deleteFromCart(username, id);
    }

    @PostMapping(value = "/{username}")
    @ApiOperation(value = "Create user", notes = "Creates a user")
    public void createUser(@PathVariable String username) {
       cartService.createUser(username);
    }
}
