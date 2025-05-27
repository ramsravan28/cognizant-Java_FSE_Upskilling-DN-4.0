import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Mango");
        Collections.sort(list, (a, b) -> a.compareTo(b));
        for (String s : list) {
            System.out.println(s);
        }
    }
}
