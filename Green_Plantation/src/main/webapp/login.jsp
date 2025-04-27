<%@page import="java.io.PrintWriter"%>
<%@page import="java.sql.*" %>
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
String uname= request.getParameter("uname");
String psw= request.getParameter("psw");

Class.forName("com.mysql.jdbc.Driver");
Connection cn= DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green","root","root");
String s="select * from users where username=? and Password=?";
PreparedStatement p=cn.prepareStatement(s);
p.setString(1,uname);
p.setString(2,psw);



ResultSet r=p.executeQuery();
if(r.next())
{
	response.sendRedirect("AdminHome.html");
}
else{
	 // Show alert if password is incorrect
    response.setContentType("text/html");
   PrintWriter writer = response.getWriter();
    out.println("<script type=\"text/javascript\">");
    out.println("alert('Incorrect Username or Password');");
    out.println("location='login.html';");
    out.println("</script>");
}
%>>
</body>
</html>