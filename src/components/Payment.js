import React from 'react';

function Payment(props) {
    return (


<div class="row gy-3">

  <div class="col-md-6">
    <label for="cc-name" className="form-label">Name on card</label>
    <input type="text" class="form-control" id="cc-name" placeholder="Full name as displayed on card required" required/>
<br></br>
</div>

  <div className="col-md-6">
    <label for="cc-number" className="form-label">Credit card number</label>
    <input type="text" class="form-control" id="cc-number" placeholder="  Credit card number is required" required/>
  <br></br>
  
  <div className="col-md-3">
    <label for="cc-expiration" className="form-label">Expiration</label>
    <input type="text" class="form-control" id="cc-expiration" placeholder=" Expiration date required" required/>
  </div>

  <div class="col-md-3">
    <label for="cc-cvv" className="form-label">CVV</label>
    <input type="text" class="form-control" id="cc-cvv" placeholder=" Security code required" required/>
  
  </div>
  </div>
 



</div>
);
}
export default Payment;
