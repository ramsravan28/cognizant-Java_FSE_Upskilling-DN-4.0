import java.util.Scanner;
import java.io.FileWriter;
import java.io.IOException;

public class WriteFile {
    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        String input = sc.nextLine();
        FileWriter fw = new FileWriter("output.txt");
        fw.write(input);
        fw.close();
        System.out.println("Written to file");
    }
}
