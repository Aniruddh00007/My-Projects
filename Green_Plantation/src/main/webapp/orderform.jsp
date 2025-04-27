<%@ page import="java.sql.*" %>
<%@ page import ="Beans.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<% 

String name=request.getParameter("name");
String phone=request.getParameter("phone");
String mail=request.getParameter("mail");
String address=request.getParameter("address");
String plant=request.getParameter("plant");
String payment=request.getParameter("payment");

Class.forName("com.mysql.jdbc.Driver");
Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green","root","root");
String s="insert into Orderform values(null,?,?,?,?,?,?)";
PreparedStatement p=cn.prepareStatement(s);

p.setString(1,name);
p.setString(2,phone);
p.setString(3,mail);
p.setString(4,address);
p.setString(5,plant);
p.setString(6,payment);

int i=p.executeUpdate();



Class.forName("com.mysql.jdbc.Driver");
Connection cnn=DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green","root","root");
String sql="select * from Orderform";
PreparedStatement pp=cnn.prepareStatement(sql);
ResultSet rs=pp.executeQuery();
while(rs.next()) {
	 



String Id= rs.getString("id");

orderconfirm e = new orderconfirm();

e.setId(Id);
e.setPlant(plant);
e.setPayment(payment);

session.setAttribute("Ani",e);	

}

if(i>0)
{
	response.sendRedirect("orderconfir.jsp"); 
}



%>
</body>
</html>