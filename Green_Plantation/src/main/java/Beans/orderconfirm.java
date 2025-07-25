package Beans;

public class orderconfirm {

	String id,plant,payment;
   static String amount="1000... per plants";
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getPlant() {
	return plant;
}
public void setPlant(String plant) {
	this.plant = plant;
}
public String getPayment() {
	return payment;
}
public void setPayment(String payment) {
	this.payment = payment;
}
public static String getAmount() {
	return amount;
}
public static void setAmount(String amount) {
	orderconfirm.amount = amount;
}
}
