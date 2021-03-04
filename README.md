# Test---PayU-Hub-Payment-Flow
This repository contains a Paymentsos payment flow and the secure fields form to articulate the API in order to simulate a payment gateway flow. 
I will present json code to provide request and response for each transaction estatement and an index file to test the payment integration.  

Steps
1. Develping payment flow with the following API Calls: * Token * Payment * Autirize * Capture * Refund
2. Creating Secure Fields pay button page
3. Definition of tokenization, authorize, capture, charge, void, and refund.
4. Documentation and experience notes
5. Postman secuence diagram for an example for two actors.

<body>
<big><strong> Definitions</strong></big>
----------------------------------->
 <div> <b>Tokenization:</b> Process to protect payment information (Credit card or debit card). The objective is to create a token which contains card information, this information will not be shown at any time, in order to protect the customer's money through the transaction.</div>
<div> <b>Authorize:</b> It is the proces where thorough validation is carried out a hold on founds in the customer account. </div>
<div> <b>Capture:</b> When the payment is authorized, it completes the transaction and founds will be sendt to the seller bank.</div>
<div> <b>Charge:</b> A payment flow  that transfer money from the customer account.</div>
<div> <b>Void:</b> Cancel an operation only when the transaction has not finalized.</div>
<div><b>Refund:</b> Allows you to cancel a transfer or sale, and return the amount to the customer account</div>
</body>
