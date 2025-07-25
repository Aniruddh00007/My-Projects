<%@page import="java.sql.*"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Update Order</title>
</head>
<body>
<%
    String id = request.getParameter("id");
    String name = request.getParameter("name");
    String contact = request.getParameter("contact");
    String email = request.getParameter("email");
    String Address = request.getParameter("Address");
    String Plants = request.getParameter("plants");
    String Payment = request.getParameter("Payment");

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green", "root", "root");

        String sql = "UPDATE orderform SET name=?, contact=?, email=?, Address=?, Plants=?, Payment=? WHERE id=?";
        PreparedStatement ps = cn.prepareStatement(sql);
        ps.setString(1, name);
        ps.setString(2, contact);
        ps.setString(3, email);
        ps.setString(4, Address);
        ps.setString(5, Plants);
        ps.setString(6, Payment);
        ps.setString(7, id);

        int i = ps.executeUpdate();

        if(i > 0) {
            response.sendRedirect("Adminorder.jsp");
        } else {
%>
            <script>alert("Update failed. Record not found.");</script>
<%
        }
    } catch(Exception e) {
%>
        <p style="color:red;">Error: <%= e %></p>
<%
    }
%>
</body>
</html>
