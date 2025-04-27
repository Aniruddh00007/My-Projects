<%@ page import="java.sql.*" %>
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
String address=request.getParameter("address");
String city=request.getParameter("city");

String zip=request.getParameter("zip");
String country=request.getParameter("country");
String plant=request.getParameter("plant");
String mobile=request.getParameter("mobile");





Class.forName("com.mysql.jdbc.Driver");
Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green","root","root");
String s="insert into donation values(null,?,?,?,?,?,?,?)";
PreparedStatement p=cn.prepareStatement(s);

p.setString(1, name);
p.setString(2, address);
p.setString(3, city);
p.setString(4, zip);
p.setString(5, country);
p.setString(6, plant);
p.setString(7, mobile);


int i=p.executeUpdate();
if(i>0)
{
	response.sendRedirect("Success.html"); 
}
 

%>
</body>
</html>