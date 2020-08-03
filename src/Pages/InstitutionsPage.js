import React from 'react'
import Button from 'react-bootstrap/Button';

function InstitutionsPage() {
    return (
        <div>
            <div class="container-fluid padding ">
            <div class="row welcome text-center">
                <   div class="col-12">
                    <h1 class="display-4">Participate as Institution</h1>
                </div>
                <hr />
                <div class="col-12">
                    <p class="lead">Kindly read guidelines to participate as institution here <a href="img/howtoapply.pdf">link</a></p>
                </div>
            </div>
        </div>
        <div class="container">
            <form action="" id="instituteform" runat="server" class="main-form needs-validation" novalidate>
                <div class="row">
                    <div class="col">
                        <div class="form-group col-auto">
                            <label for="firstname">Institution Name</label>
                            <input type="text" name="Institute_Name" id="Institute_Name" runat="server" class="form-control is-invalid" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group col-auto">
                            <label for="gst">GST/Registration no.</label>
                            <input type="text" name="GST_No" id="GST_No" runat="server" class="form-control" />
                            <small>Enter GST details if applicable
                </small>
                        </div>

                    </div>
                    <div class="form-group col-auto">
                        <label for="username">Full Address(With Pin Code)</label>
                        <input type="text" name="Address" id="Address" runat="server" class="form-control" required />
                    </div>
                    <div class="form-group col-auto">
                        <label for="username">Country</label>
                        <input type="text" name="Country" id="Country" runat="server" class="form-control" required />
                    </div>
                    <div class="form-group col-auto">
                        <label for="username">City</label>
                        <input type="text" name="City" id="City" runat="server" class="form-control" required />
                    </div>
                    <div class="form-group col-auto">
                        <label for="text">Contact Person</label>
                        <input type="text" name="Contact_Person" id="Contact_Person" runat="server" class="form-control" />
                    </div>
                    <div class="form-group col-auto">
                        <label for="text">Designation/Rank</label>
                        <input type="text" name="Designation" id="Designation" runat="server" class="form-control" />
                    </div>
                    <div class="form-group col-auto">
                        <label for="gender">Phone(With Country Code)</label>
                        <input type="text" name="PhoneNo" id="PhoneNo" runat="server" class="form-control" />
                    </div>
                    <div class="form-group col-auto">
                        <label for="gender">Email ID</label>
                        <input type="text" name="Email" id="Email" runat="server" class="form-control" />
                    </div>
                    <div class="form-group col-auto">
                        <label for="gender">Year of establishment</label>
                        <input type="text" name="Year_Establish" id="Year_Establish" runat="server" class="form-control" />
                    </div>
                    <div class="g-recaptcha"
                        data-sitekey="6LcDXKUZAAAAAJjQDniwFFcZc4T4Bj5QsVh4sC89" />
                </div>
                <div class="form-check col-auto">
                    <input type="checkbox" id="accept-terms" class="form-check-input" />
                    <label for="accept-terms" class="form-check-label">Accept Terms &amp; Conditions</label>
                </div>
                <Button ID="Button1" class="btn btn-primary" runat="server" CausesValidation="true" OnClientClick="return clientValidate();" OnClick="Button1_Click" Text="Submit" />

            </form>
        </div >

        </div>
    )
}

export default InstitutionsPage