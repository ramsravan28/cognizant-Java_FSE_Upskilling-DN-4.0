import java.util.Scanner;

public class Palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine().replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String reversed = new StringBuilder(s).reverse().toString();
        System.out.println(s.equals(reversed) ? "Palindrome" : "Not Palindrome");
    }
}
