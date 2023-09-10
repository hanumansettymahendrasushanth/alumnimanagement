// JavaScript 
function showOrderForm() {
  const orderForm = document.getElementById('orderForm');
  orderForm.style.display = 'block';
}

function addOrder() {
  const customerName = document.getElementById('customerName').value;
  const productName = document.getElementById('productName').value;
  const quantity = document.getElementById('quantity').value;

  document.getElementById('customerName').value = '';
  document.getElementById('productName').value = '';
  document.getElementById('quantity').value = '';


  document.getElementById('orderForm').style.display = 'none';
}
