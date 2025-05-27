import java.util.HashMap;
import java.util.Scanner;

public class StudentMap {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, String> map = new HashMap<>();
        for (int i = 0; i < 3; i++) {
            int id = sc.nextInt();
            sc.nextLine();
            String name = sc.nextLine();
            map.put(id, name);
        }
        int searchId = sc.nextInt();
        System.out.println(map.getOrDefault(searchId, "Not found"));
    }
}
