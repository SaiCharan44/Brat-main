
function validate() {
  var userid = document.getElementById("user-id").value;
  var name = document.getElementById("name").value;
  var number = document.getElementById("mobile-number").value;
  var n = number.toString().length;
  var p = document.getElementById("password").value;
  var cp = document.getElementById("confirm-password").value;
  
  var alertMessage = '';
  
  if (n != 10) {
      alertMessage += 'Mobile Number should be of 10 digits.<br>';
  }
  
  if (p != cp) {
      alertMessage += "Passwords don't match.<br>";
  } else if (p.length < 8) {
      alertMessage += 'Password length should be a minimum of 8 characters.<br>';
  }
  
  if (alertMessage) {
      document.getElementById("alert-message").innerHTML = alertMessage;
      showAlert();
      return false; 
  } else {
      document.getElementById("alert-message").innerHTML = ''; 
  }
  
  localStorage.setItem("password", p);
  localStorage.setItem("userid", userid);
  localStorage.setItem('number', number);
  localStorage.setItem('name', name);
  
  window.location.href = 'registersuccess.html';
  return false; 
}




function loginvalidate(){
var userid=document.getElementById("user-id").value;
var password=document.getElementById("password").value;
var userId=localStorage.getItem("userid");
var Password=localStorage.getItem("password");
var alertMessage = '';
if(userId!=userid || password!=Password)
{
  alertMessage += 'Invalid Credentails....<br>';  
}
if (alertMessage) {
  document.getElementById("alert-message").innerHTML = alertMessage;
  showAlert();
  return false;
}
else{
  document.getElementById("alert-message").innerHTML = '';
}
window.location.href = 'userhomepage.html';
return false;
}

function showAlert() {
  var alertBox = document.getElementById("custom-alert");
  alertBox.style.display = "block";
}

function closeAlert() {
  var alertBox = document.getElementById("custom-alert");
  alertBox.style.display = "none";
}



function display()
{
let min=10000;
let max=99999;
document.getElementById("customer-ID").innerHTML=Math.floor(Math.random() * (max - min+ 1)) + min;
document.getElementById("customer-name").innerHTML=localStorage.getItem('name');
document.getElementById("mobile-number").innerHTML=localStorage.getItem('number');
}



function displayname()
{
  document.getElementById("username").innerHTML=localStorage.getItem('name');
}



function displayamount()
{
  document.getElementById("amount-paid").innerHTML=localStorage.getItem("amount");
  
}



document.addEventListener('DOMContentLoaded', () => {
  
  const checkboxes = document.querySelectorAll('input[name="bills"]');
  

  checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateTotalAmount);
  });
  
  function updateTotalAmount() {
      let totalAmount = 0;
      
   
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              
              totalAmount += parseFloat(checkbox.dataset.amount);
          }
      });
      
      
      document.getElementById('total-amount').textContent = totalAmount;
      localStorage.setItem('amount',totalAmount);
  }
  

  window.proceedToPay = function() {
      const totalAmount = document.getElementById('total-amount').textContent;
      if (parseFloat(totalAmount) > 0) {
          
          const paymentUrl = 'cardpage.html';
          if (confirm(`You are about to proceed with payment of ₹${totalAmount}. Continue?`)) {
              window.location.href = paymentUrl;
          }
      } else {
          alert('Please select at least one bill to proceed.');
      }
  };
});

function displaycard()
{
  document.getElementById("card-type").innerHTML=localStorage.getItem('card');
}

function amount()
{
  document.getElementById("payment-amount").innerHTML+=localStorage.getItem("amount");
}
function payment()
{
  localStorage.setItem('card',document.getElementById('cardtype').value);
 
}


//Bill Page

document.addEventListener('DOMContentLoaded', () => {
  window.goToHome = function() {
      window.location.href = 'userhomepage.html';
  };

window.printTable = function() {
  const table = document.getElementById('transaction-table');
  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>Print Table</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write('<h1>Transaction Details</h1>');
  printWindow.document.write(table.outerHTML);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
};
});


function registercomplainvalidate()
{
  localStorage.setItem('consumernumber',document.getElementById("consumer-number").value);
  localStorage.setItem('consumername',document.getElementById("consumer-name").value);
} 
function displayy()
{
  document.getElementById("consumer-number").innerHTML=localStorage.getItem('consumernumber');
  document.getElementById("consumer-name").innerHTML=localStorage.getItem('consumername');
}