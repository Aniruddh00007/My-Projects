<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>work with us</title>
</head>
<body>
<% 
String name= request.getParameter("name");
String email=request.getParameter("email");
String contact=request.getParameter("contact");
String service= request.getParameter("service");
String note =request.getParameter("note");



Class.forName("com.mysql.jdbc.Driver");
Connection cn=DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green","root","root");
String s="insert into work_with_us values(null,?,?,?,?,?)";
PreparedStatement p=cn.prepareStatement(s);

p.setString(1,name);
p.setString(2,email);
p.setString(3,contact);
p.setString(4,service);
p.setString(5,note);



  int i=p.executeUpdate();
if(i>0)
{
	response.sendRedirect("Success.html"); 
}



%>
</body>
</html>