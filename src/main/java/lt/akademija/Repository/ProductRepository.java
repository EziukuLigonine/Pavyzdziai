package lt.akademija.Repository;

import lt.akademija.Model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE " +
            "LOWER(p.title) LIKE LOWER(CONCAT('%',?1, '%')) OR " +
            "LOWER(p.description) LIKE LOWER(CONCAT('%',?1, '%'))")
    List<Product> findByTitleOrDescription(String search);
}
