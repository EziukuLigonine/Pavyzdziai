package lt.akademija.Model;

import javax.persistence.*;
import java.util.Iterator;
import java.util.Map;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    @Column(name = "NICKNAME", unique = true)
    private String nickname;

    @ElementCollection
    @CollectionTable(name = "USER_PRODUCTS") //lentelės pavadinimas
    @MapKeyJoinColumn(name = "PRODUCT_ID")
    @Column(name="AMOUNT")
    private Map<Product, Integer> userProducts;

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long userId) {
        this.id = userId;
    }

    public Map<Product, Integer> getUserProducts() {
        return userProducts;
    }

    public void setUserProducts(Map<Product, Integer> userProducts) {
        this.userProducts = userProducts;
    }

    public void removeProduct(String id) {
        for(Iterator<Map.Entry<Product, Integer>> it = userProducts.entrySet().iterator(); it.hasNext(); ) {
            Map.Entry<Product, Integer> entry = it.next();
            if(entry.getKey().getId() == Long.parseLong(id)) {
                it.remove();
            }
        }

    }
}
