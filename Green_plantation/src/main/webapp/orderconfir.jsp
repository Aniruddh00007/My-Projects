<%@ page import ="Beans.*" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
    <head>
        <title> Order Successfull</title>
        <style>
            

        .imgg{

        margin-left: 300px;

        }
        .pay{
            margin-left: 200px;
            
        }
        form{
            border: 5px solid whitesmoke;
       margin-left: 350px;
       margin-right:350px; 
       
                
        }
        .ftr{
            margin-left: 200px;
            font-size: 18;
            margin-top: 20px;


        }
        .hd{
            font-size: 40;
            color:green
             

        }
        button{
     
     background-color: olivedrab;
   color: white;
   font-size:18px;
   padding: 15px 0;
   margin: 20px 0;
   border: yes;
   border-radius:15px;
   cursor: grabbing;
   width: 100px;
  
   
   }
     button:hover {
   opacity: 0.8;
   }
   button.btn{
   padding:35px;
   
   
   }

        </style>
        </head>
        <body>
        <%
        orderconfirm r=(orderconfirm) session.getAttribute("Ani");
        String  id=r.getId();
       String plants =r.getPlant();
    final String Amount=r.getAmount();
        String payment=r.getPayment();
       
        
        
        
        
        %>
       
            <form>
                <h1 class="hd"> <center>Go Green Plantation</h1>
                <h1> <center> Order Placed Successfully</h1>
                    
        <img  class="imgg" src="green\green Check.jpg" height="100" width="150"><br> 
        
        <div class="pay">
           
            <p> <b>Order Number : </b><%=id %></p>
            <p><b> Order Items : </b> <%=plants %></p>
             <p><b> Amount  : </b>  <%=Amount %></p>
                <p> <b>Payment Method :</b>   <%=payment %></p> 
            </div>
<hr>
</hr>
<div class="btn">
<a href="index.html"><button  type="submit" formaction="index.html"> Home</button></a>
<button onclick="window.print()" > Print </button>
</div>
</form>

        </body>
        </html>