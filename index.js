// passes the input value to the output p tag with corresponding valid or not valid text
function displayBox() {
  const myImei = document.getElementById('imei').value;
  const myTac = myImei.slice(0, 8);
  let num = myImei;
  if (myImei.length === 15) {
    document.getElementById('p-class').innerHTML =
      'Your IMEI: ' + myImei + ' is Valid and your TAC is: ' + myTac;
  } else {
    document.getElementById('p-class').innerHTML =
      'Your IMEI is NOT Valid please add a valid IMEI and try again.';
  }
}

// reset the form and data
function resetInfo() {
  document.getElementById('imei').value = '';
  document.getElementById('p-class').value = '';
  displayBox.resetData;
  location.reload(true);
}

// validates input for only numbers allowed
function isNumberKey(evt) {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
