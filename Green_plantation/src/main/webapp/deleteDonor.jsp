<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%
Class.forName("com.mysql.jdbc.Driver");
Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green", "root", "root");

String myid = request.getParameter("myid");
String s = "DELETE FROM donation WHERE id=?";

PreparedStatement p = cn.prepareStatement(s);
p.setString(1, myid);

int i = p.executeUpdate();

if (i > 0) {
    response.sendRedirect("AdminDonation.jsp");
} else {
%>
    <script>
        alert("not deleted");
        window.location.href = "deleteQuestions.jsp";
    </script>
<%
}
%>
