class Car {
    String make, model;
    int year;

    void displayDetails() {
        System.out.println(make + " " + model + " " + year);
    }

    public static void main(String[] args) {
        Car c1 = new Car();
        c1.make = "Toyota";
        c1.model = "Camry";
        c1.year = 2022;
        c1.displayDetails();
    }
}
