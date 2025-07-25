<%@ page import="java.sql.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html>
  <head>
    <title>Go Green Mail Service</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <style>
      * { box-sizing: border-box; }
      html, body {
        min-height: 100vh;
        padding: 0;
        margin: 0;
        font-family: Roboto, Arial, sans-serif;
        font-size: 14px; 
        color: #666;
        background: #5a7233;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      h1 {
        margin-top: 0;
        font-weight: 500;
        text-align: center;
      }
      form {
        position: relative;
        width: 200%;
        max-width: 800px;
        border-radius: 30px;
        background: aliceblue;
        margin-top: 30px;
      }
      .form-left-decoration, .form-right-decoration {
        content: "";
        position: absolute;
        width: 50px;
        height: 20px;
        border-radius: 20px;
        background: #5a7233;
      }
      .form-left-decoration { bottom: 60px; left: -30px; }
      .form-right-decoration { top: 60px; right: -30px; }
      .form-left-decoration:before, .form-left-decoration:after,
      .form-right-decoration:before, .form-right-decoration:after {
        content: "";
        position: absolute;
        width: 50px;
        height: 20px;
        border-radius: 30px;
        background: #fff;
      }
      .form-left-decoration:before { top: -20px; }
      .form-left-decoration:after { top: 20px; left: 10px; }
      .form-right-decoration:before { top: -20px; right: 0; }
      .form-right-decoration:after { top: 20px; right: 10px; }
      .circle {
        position: absolute;
        bottom: 80px;
        left: -55px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
      }
      .form-inner {
        padding: 100px 50px;
      }
      .form-inner input,
      .form-inner textarea {
        display: block;
        width: 100%;
        padding: 15px;
        margin-bottom: 10px;
        border: none;
        border-radius: 20px;
        background: #d0dfe8;
      }
      .form-inner textarea { resize: none; }
      button {
        width: 100%;
        padding: 10px;
        margin-top: 10px;
        border-radius: 20px;
        border: none;
        border-bottom: 4px solid #3e4f24;
        background: #5a7233; 
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        cursor: pointer;
      }
      button:hover { background: #3e4f24; }
      #statusMsg {
        font-weight: bold;
        margin-top: 15px;
        text-align: center;
        color: white;
      }
      .letter-image {
        margin-top: 40px;
        position: relative;
        width: 200px;
        height: 200px;
        cursor: pointer;
      }
      .animated-mail {
        position: absolute;
        height: 150px;
        width: 200px;
        transition: .4s;
      }
      .animated-mail .body {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 100px 200px;
        border-color: transparent transparent #e95f55 transparent;
        z-index: 2;
      }
      .animated-mail .top-fold {
        position: absolute;
        top: 50px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 50px 100px 0 100px;
        transform-origin: 50% 0%;
        transition: transform .4s .4s, z-index .2s .4s;
        border-color: #cf4a43 transparent transparent transparent;
        z-index: 2;
      }
      .animated-mail .back-fold {
        position: absolute;
        bottom: 0;
        width: 200px;
        height: 100px;
        background: #cf4a43;
        z-index: 0;
      }
      .animated-mail .left-fold {
        position: absolute;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 50px 0 50px 100px;
        border-color: transparent transparent transparent #e15349;
        z-index: 2;
      }
      .animated-mail .letter {
        left: 20px;
        bottom: 0px;
        position: absolute;
        width: 160px;
        height: 60px;
        background: white;
        z-index: 1;
        overflow: hidden;
        transition: .4s .2s;
      }
      .letter-border, .letter-title, .letter-context, .letter-stamp {
        margin: 5px;
        background: #cb5a5e;
        height: 10px;
      }
      .letter-border {
        height: 10px;
        background: repeating-linear-gradient(-45deg, #cb5a5e, #cb5a5e 8px, transparent 8px, transparent 18px);
      }
      .letter-title { width: 40%; }
      .letter-context { width: 20%; }
      .letter-stamp {
        height: 30px;
        width: 30px;
        border-radius: 100%;
        opacity: 0.3;
      }
      .letter-image:hover .animated-mail {
        transform: translateY(50px);
      }
      .letter-image:hover .top-fold {
        transform: rotateX(180deg);
        z-index: 0;
      }
      .letter-image:hover .letter {
        height: 180px;
      }
    </style>
  </head>
  <body>

<%
    String inserted = "false";
    if ("POST".equalsIgnoreCase(request.getMethod()) && request.getParameter("hiddenSubmit") != null) {
        String subject = request.getParameter("subject");
        String name = request.getParameter("name");
        String company = request.getParameter("company");
        String time = request.getParameter("time");
        String message = request.getParameter("message");
        String email = request.getParameter("email");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/go_green", "root", "root");

            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO mailbox (sender, receiver, subject, mail) VALUES (?, ?, ?, ?)"
            );

            ps.setString(1, name + " (" + email + ")");
            ps.setString(2, company);
            ps.setString(3, subject);
            ps.setString(4, message + "\nTime: " + time);
            ps.executeUpdate();

            ps.close();
            con.close();
            inserted = "true";
        } catch (Exception e) {
            out.print("<p style='color:red;'>DB Error: " + e.getMessage() + "</p>");
        }
    }
%>

    <form id="sendMailForm" method="post">
      <div class="form-left-decoration"></div>
      <div class="form-right-decoration"></div>
      <div class="circle"></div>
      <div class="form-inner">
        <h1>Go Green Mail Service</h1>
        <input type="hidden" name="hiddenSubmit" value="yes" />
        <input type="text" name="subject" placeholder="Subject" required>
        <input type="text" name="name" placeholder="Your Name" required>
        <input type="text" name="company" placeholder="Company Name" required>
        <input type="text" name="time" placeholder="Time" required>
        <textarea name="message" placeholder="Your message..." rows="4" required></textarea>
        <input type="email" name="email" placeholder="anshu79731644@gmail.com" required>
        <button type="submit">Send Mail</button>
      </div>
    </form>

    <p id="statusMsg"></p>

    <div class="letter-image">
      <div class="animated-mail">
        <div class="back-fold"></div>
        <div class="letter">
          <div class="letter-border"></div>
          <div class="letter-title"></div>
          <div class="letter-context"></div>
          <div class="letter-stamp"></div>
        </div>
        <div class="top-fold"></div>
        <div class="body"></div>
        <div class="left-fold"></div>
      </div>
    </div>

    <!-- EmailJS SDK -->
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
      window.addEventListener("load", function () {
        if (typeof emailjs === 'undefined') {
          console.error("EmailJS SDK not loaded.");
          return;
        }

        emailjs.init("myq2nelHUTe9MKr_4");

        const form = document.getElementById("sendMailForm");

        form.addEventListener("submit", function (e) {
          e.preventDefault();
          document.getElementById("statusMsg").innerText = "Sending mail...";

          emailjs.sendForm("service_mjg43zq", "template_qn8nqvp", this)
            .then(function () {
              document.getElementById("statusMsg").innerText = "Mail sent. Saving to database...";
              setTimeout(() => {
                form.submit(); // real submit to JSP
              }, 1000);
            }, function (error) {
              console.error("EmailJS error:", error);
              document.getElementById("statusMsg").innerText = "Failed to send mail.";
            });
        });
      });
    </script>

<% if (inserted.equals("true")) { %>
<script>
  document.getElementById("statusMsg").innerText = "Mail Successfully Sent.";
</script>
<% } %>

  </body>
</html>