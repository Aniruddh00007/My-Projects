<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>List of Donors - Go Green</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f3fff1;
            margin: 0;
            padding: 0;
        }

        header {
            background: linear-gradient(to right, #a8e063, #56ab2f);
            padding: 20px;
            text-align: center;
        }

        h1 {
            color: white;
            font-size: 32px;
            margin: 0;
        }

        .table-container {
            width: 95%;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0, 100, 0, 0.2);
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background-color: #b7f397;
            color: #2f4f2f;
            padding: 12px;
            text-transform: uppercase;
        }

        td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid #d9f5cb;
        }

        tr:hover {
            background-color: #f0fff0;
        }

        .btn-delete {
            padding: 6px 12px;
            border: none;
            border-radius: 5px;
            margin: 5px 0;
            font-weight: bold;
            cursor: pointer;
            color: white;
            background-color: #e74c3c;
        }

        .back-button {
            display: block;
            margin: 30px auto;
            background: #7bed9f;
            color: black;
            padding: 12px 28px;
            font-size: 16px;
            border-radius: 10px;
            border: 2px solid green;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            width: 250px;
        }

        img.logo {
            max-width: 200px;
            height: 80px;
        }
    </style>
</head>
<body>

<header>
    <div style="font-size: 60px;">🌿</div>
    <h1>List of Donors</h1>
</header>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>City</th>
                <th>Zip</th>
                <th>Country</th>
                <th>Plants</th>
                <th>Mobile</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        <%
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green", "root", "root");
                String s = "SELECT * FROM donation";
                PreparedStatement p = cn.prepareStatement(s);
                ResultSet r = p.executeQuery();
                while(r.next()) {
        %>
            <tr>
                <td><%= r.getString("id") %></td>
                <td><%= r.getString("name") %></td>
                <td><%= r.getString("address") %></td>
                <td><%= r.getString("city") %></td>
                <td><%= r.getString("zip") %></td>
                <td><%= r.getString("country") %></td>
                <td><%= r.getString("plant") %></td>
                <td><%= r.getString("mobile") %></td>
                <td>
                    <a href="deleteDonor.jsp?myid=<%= r.getString("id") %>" 
                       onclick="return confirm('Are you sure you want to delete this donor?');">
                       <button class="btn-delete">Delete</button>
                    </a>
                </td>
            </tr>
        <%
                }
                cn.close();
            } catch(Exception e) {
                out.println("<tr><td colspan='9' style='color:red;'>Error: " + e.getMessage() + "</td></tr>");
            }
        %>
        </tbody>
    </table>
</div>

<a href="AdminHome.html" class="back-button">⬅ Back To Home</a>

</body>
</html>
