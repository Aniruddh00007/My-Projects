<%@ page import="java.sql.*" %>
<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <title>Mailbox - Go Green</title>
    <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #f3fff1;
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
            width: 90%;
            margin: 30px auto;
            background-color: #ffffff;
            border-radius: 15px;
            box-shadow: 0 4px 12px rgba(0, 100, 0, 0.2);
            overflow: hidden;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        th {
            background-color: #b7f397;
            color: #2f4f2f;
            text-transform: uppercase;
            padding: 12px;
        }

        td {
            padding: 12px;
            text-align: center;
            border-bottom: 1px solid #d9f5cb;
        }

        tr:hover {
            background-color: #f0fff0;
        }

        .btn-edit, .btn-delete {
            padding: 6px 12px;
            border: none;
            border-radius: 5px;
            margin: 2px;
            font-weight: bold;
            cursor: pointer;
            color: white;
        }

        .btn-edit {
            background-color: #3498db;
        }

        .btn-delete {
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
        }
    </style>
</head>
<body>

<header>
    <h1>Mailbox Dashboard - Go Green 🌿</h1>
</header>

<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>Mail ID</th>
                <th>Sender</th>
                <th>Receiver</th>
                <th>Subject</th>
                <th>Inbox</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <%
                try {
                    Class.forName("com.mysql.cj.jdbc.Driver");
                    Connection cn = DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green", "root", "root");

                    String query = "SELECT * FROM mailbox";
                    PreparedStatement ps = cn.prepareStatement(query);
                    ResultSet rs = ps.executeQuery();

                    while(rs.next()) {
            %>
                <tr>
                    <td><%= rs.getString("id") %></td>
                    <td><%= rs.getString("sender") %></td>
                    <td><%= rs.getString("receiver") %></td>
                    <td><%= rs.getString("subject") %></td>
                    <td><%= rs.getString("mail") %></td>
                    <td>
                      <!-- <a href="edituser.jsp?myid=<%= rs.getString("id") %>"><button class="btn-edit">Edit</button></a>    --> 
                        <a href="deletemail.jsp?myid=<%= rs.getString("id") %>"><button class="btn-delete">Delete</button></a>
                    </td>
                </tr>
            <%
                    }

                    cn.close();
                } catch(Exception e) {
                    out.println("<tr><td colspan='6' style='color:red;'>Error: " + e.getMessage() + "</td></tr>");
                }
            %>
        </tbody>
    </table>
</div>

<a href="AdminHome.html" class="back-button">⬅ Back to Home</a>

</body>
</html>
