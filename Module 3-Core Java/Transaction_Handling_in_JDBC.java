import java.sql.*;

public class Transfer {
    public static void main(String[] args) throws Exception {
        Connection con = DriverManager.getConnection("jdbc:sqlite:bank.db");
        con.setAutoCommit(false);
        try {
            PreparedStatement debit = con.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            PreparedStatement credit = con.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            debit.setInt(1, 100);
            debit.setInt(2, 1);
            credit.setInt(1, 100);
            credit.setInt(2, 2);
            debit.executeUpdate();
            credit.executeUpdate();
            con.commit();
        } catch (Exception e) {
            con.rollback();
        }
        con.close();
    }
}
