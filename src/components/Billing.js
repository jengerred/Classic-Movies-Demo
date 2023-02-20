import React from 'react';

function Billing(props) {
    return (


<div>
<h4 class="mb-3">Billing address</h4>
<form class="needs-validation" novalidate/>
  <div class="row g-3">
    <div class="col-sm-6">
      <label for="firstName" className="form-label">First name</label>
      <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
    </div>

    <div class="col-sm-6">
      <label for="lastName" className="form-label">Last name</label>
      <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
    </div>



    <div class="col-12">
      <label for="address" className="form-label">Address</label>
      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
     
    </div>

    <div class="col-12">
      <label for="address2" className="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
      <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
    </div>

    <div class="col-md-5">
      <label for="country" className="form-label">Country</label>
      <select class="form-select" id="country" required>
        <option value="">Choose...</option>
        <option>United States</option>
      </select>
    </div>

    <div class="col-md-4">
      <label for="state" class="form-label">State</label>
      <select class="form-select" id="state" required>
        <option value="">Choose...</option>
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>Arkinsas</option>
        <option>California</option>
        <option>Michigan</option>
      </select>
    </div>

    <div class="col-md-3">
      <label for="zip" class="form-label">Zip</label>
      <input type="text" class="form-control" id="zip" placeholder="" required/>
    </div>
  </div>

  <hr class="my-4"/>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="same-address"/>
    <label class="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
  </div>

  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="save-info"/>
    <label class="form-check-label" for="save-info">Save this information for next time</label>
  </div>
  <hr class="line"></hr>
</div>

  );
}
  export default Billing;