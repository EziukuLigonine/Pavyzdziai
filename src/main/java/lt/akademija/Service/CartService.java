package lt.akademija.Service;

import lt.akademija.Model.AddToCartCmd;
import lt.akademija.Model.Product;
import lt.akademija.Model.User;
import lt.akademija.Repository.ProductRepository;
import lt.akademija.Repository.UserRepository;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.util.Map;
import java.util.Set;

@Service
public class CartService {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ProductRepository productRepository;

    private final Logger logger = LogManager.getLogger(CartService.class);

    @Transactional
    public boolean addToCart(@RequestBody AddToCartCmd cmd, @PathVariable String username) {
        Product product = productRepository.findOne(Long.parseLong(cmd.getId()));
        int quantity = product.getQuantity();
        if (quantity > 0) {
            User user = userRepository.findByNickname(username);
            Map<Product, Integer> userProducts = user.getUserProducts();
            if (userProducts.containsKey(product)) {
                return false;
            } else {
                userProducts.put(product, 1);
                product.setQuantity(quantity - 1);
                return true;
            }
        }
        return false;
    }

    @Transactional
    public Set<Product> getUserProducts(@PathVariable String username) {
        return userRepository.findByNickname(username).getUserProducts().keySet();
    }

    @Transactional
    public void deleteFromCart(@PathVariable String username, @PathVariable String id) {
        userRepository.findByNickname(username).removeProduct(id);
    }

    @Transactional
    public void createUser(@PathVariable String username) {
        if (userRepository.findByNickname(username) == null) {
            User user = new User();
            user.setNickname(username.toLowerCase());
            userRepository.save(user);
        }
    }
}
