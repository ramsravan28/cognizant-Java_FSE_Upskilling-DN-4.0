import java.util.Scanner;
import java.util.Random;

public class NumberGuessing {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        Random rand = new Random();
        int number = rand.nextInt(100) + 1;
        int guess;
        do {
            guess = sc.nextInt();
            if (guess > number)
                System.out.println("Too high");
            else if (guess < number)
                System.out.println("Too low");
        } while (guess != number);
        System.out.println("Correct!");
    }
}
