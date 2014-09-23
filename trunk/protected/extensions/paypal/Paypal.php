<?php

/* * *********************************************************
  This File Sets Up Calls to Paypal by arranging url information.
 * ********************************************************* */

class Paypal {

    function DoDirectPayment($paymentInfo=array()) {
        /**
         * Get required parameters from the web form for the request
         */
        $paymentType = urlencode('Sale');
        $firstName = urlencode($paymentInfo['Member']['first_name']);
        $lastName = urlencode($paymentInfo['Member']['last_name']);
        $creditCardType = urlencode($paymentInfo['CreditCard']['credit_type']);
        $creditCardNumber = urlencode($paymentInfo['CreditCard']['card_number']);
        $expDateMonth = urlencode($paymentInfo['CreditCard']['expiration_month']);
        $padDateMonth = str_pad($expDateMonth, 2, '0', STR_PAD_LEFT);
        $expDateYear = urlencode($paymentInfo['CreditCard']['expiration_year']);
        $cvv2Number = urlencode($paymentInfo['CreditCard']['cv_code']);
        $address1 = urlencode($paymentInfo['Member']['billing_address']);
        $address2 = urlencode($paymentInfo['Member']['billing_address2']);
        $country = urlencode($paymentInfo['Member']['billing_country']);
        $city = urlencode($paymentInfo['Member']['billing_city']);
        $state = urlencode($paymentInfo['Member']['billing_state']);
        $zip = urlencode($paymentInfo['Member']['billing_zip']);

        $amount = urlencode($paymentInfo['Order']['theTotal']);
        $currencyCode = "USD";
        $paymentType = urlencode('Sale');

        $ip = $_SERVER['REMOTE_ADDR'];

        /* Construct the request string that will be sent to PayPal.
          The variable $nvpstr contains all the variables and is a
          name value pair string with & as a delimiter */
        $nvpstr = "&PAYMENTACTION=Sale&IPADDRESS=$ip&AMT=$amount&CREDITCARDTYPE=$creditCardType&ACCT=$creditCardNumber&EXPDATE=" . $padDateMonth . $expDateYear . "&CVV2=$cvv2Number&FIRSTNAME=$firstName&LASTNAME=$lastName&STREET=$address1&STREET2=$address2&CITYNAME=$city&STATEORPROVINCE=$state" .
                "&POSTALCODE=$zip&COUNTRY=$country&CURRENCYCODE=$currencyCode";

        /* Make the API call to PayPal, using API signature.
          The API response is stored in an associative array called $resArray */
        $resArray = $this->hash_call("doDirectPayment", $nvpstr);

        /* Display the API response back to the browser.
          If the response from PayPal was a success, display the response parameters'
          If the response was an error, display the errors received using APIError.php.
         */

        return $resArray;
        //Contains 'TRANSACTIONID,AMT,AVSCODE,CVV2MATCH, Or Error Codes'
    }

    function SetExpressCheckout($paymentInfo=array()) {

        $amount = urlencode($paymentInfo['amount']);
        // $paymentType = urlencode('Sale');
        $paymentType = urlencode($paymentInfo['type']);
        $currencyCode = urlencode($paymentInfo['currency']);
        $item_name  =   $paymentInfo['item_name'];
        
        
        $returnURL = urlencode($paymentInfo['returnUrl']);
        $cancelURL = urlencode($paymentInfo['cancelUrl']);

        $nvpstr = '&L_NAME0='.urlencode($item_name).'&L_AMT0=' . $amount .' &AMT=' . $amount . '&PAYMENTACTION=' . $paymentType . '&CURRENCYCODE=' . $currencyCode . '&RETURNURL=' . $returnURL . '&CANCELURL=' . $cancelURL;
        $resArray = $this->hash_call("SetExpressCheckout", $nvpstr);
        return $resArray;
    }

    function GetExpressCheckoutDetails($token) {
        $nvpstr = '&TOKEN=' . $token;
        $resArray = $this->hash_call("GetExpressCheckoutDetails", $nvpstr);
        return $resArray;
    }

    function DoVoid($paymentInfo=array()) {
        $authorization_id  =   $paymentInfo['authorization_id'];
        $nvpstr = '&AUTHORIZATIONID=' . $authorization_id;
        $resArray = $this->hash_call("DoVoid", $nvpstr);
        return $resArray;
    }

    function DoReauthorization($paymentInfo=array()) {
        $authorizationID  =   $paymentInfo['transaction_id'];
        $amount =   $paymentInfo['amount'];
        $currencyCode = $paymentInfo['currency'];
        $nvpstr = "&AUTHORIZATIONID=$authorizationID&AMT=$amount&CURRENCYCODE=$currencyCode";
        $resArray = $this->hash_call("DoReauthorization", $nvpstr);
        return $resArray;
    }

    function DoExpressCheckoutPayment($paymentInfo=array()) {
        $paymentType = $paymentInfo['PAYMENTACTION'];
        // $paymentType = 'Authorization';
        // $paymentType = 'Sale';
        // $currencyCode = 'USD';
        $currencyCode = $paymentInfo['CURRENCYCODE'];
        $serverName = $_SERVER['SERVER_NAME'];
        $nvpstr = '&TOKEN=' . urlencode($paymentInfo['TOKEN']) . '&PAYERID=' . urlencode($paymentInfo['PAYERID']) . '&PAYMENTACTION=' . urlencode($paymentType) . '&AMT=' . urlencode($paymentInfo['ORDERTOTAL']) . '&CURRENCYCODE=' . urlencode($currencyCode) . '&IPADDRESS=' . urlencode($serverName);
        $resArray = $this->hash_call("DoExpressCheckoutPayment", $nvpstr);
        return $resArray;
    }
    
      function DoCapture($paymentInfo=array()) {
        //$paymentType = $paymentInfo['PAYMENTACTION'];   // should be Complete
        // $paymentType = 'Authorization';
        // $paymentType = 'Sale';
        // $currencyCode = 'USD';
        
        $authorizationID = urlencode($paymentInfo['authorization_id']);
        $completeCodeType = urlencode($paymentInfo['CompleteCodeType']);
        $amount = urlencode($paymentInfo['amount']);
        $currency = urlencode($paymentInfo['currency']);
        // $invoiceID = urlencode($_REQUEST['invoice_id']);
        //  $note = urlencode($paymentInfo['note']);
        // $nvpStr="&AUTHORIZATIONID=$authorizationID&AMT=$amount&COMPLETETYPE=$completeCodeType&CURRENCYCODE=$currency&NOTE=$note";
        $nvpstr="&AUTHORIZATIONID=$authorizationID&AMT=$amount&COMPLETETYPE=$completeCodeType&CURRENCYCODE=$currency";
        
        $resArray = $this->hash_call("DoCapture", $nvpstr);
        return $resArray;
    }

    function APIError($errorNo, $errorMsg, $resArray) {
        $resArray['Error']['Number'] = $errorNo;
        $resArray['Error']['Number'] = $errorMsg;
        return $resArray;
    }

    function DoRefund($paymentInfo = array()) {

        $transaction_id = urlencode($paymentInfo['transaction_id']);
        $refund_type = urlencode($paymentInfo['refund_type']);
        $amount  = urlencode($paymentInfo['amount']);
        $nvpstr = "&TRANSACTIONID=$transaction_id&REFUNDTYPE=$refund_type";

        $resArray = $this->hash_call("RefundTransaction", $nvpstr);
        return $resArray;

    }

    function hash_call($methodName, $nvpStr) {
    
        $API_UserName = API_USERNAME;
        $API_Password = API_PASSWORD;
        $API_Signature = API_SIGNATURE;
        $API_Endpoint = API_ENDPOINT;
        $version = VERSION;

        //setting the curl parameters.
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $API_Endpoint);
        curl_setopt($ch, CURLOPT_VERBOSE, 1);

        //turning off the server and peer verification(TrustManager Concept).
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        //if USE_PROXY constant set to TRUE in Constants.php, then only proxy will be enabled.
        //Set proxy name to PROXY_HOST and port number to PROXY_PORT in constants.php 

        if (USE_PROXY)
            curl_setopt($ch, CURLOPT_PROXY, PROXY_HOST . ":" . PROXY_PORT);

        //NVPRequest for submitting to server
        $nvpreq = "METHOD=" . urlencode($methodName) . "&VERSION=" . urlencode($version) . "&PWD=" . urlencode($API_Password) . "&USER=" . urlencode($API_UserName) . "&SIGNATURE=" . urlencode($API_Signature) . $nvpStr;

        //setting the nvpreq as POST FIELD to curl
        curl_setopt($ch, CURLOPT_POSTFIELDS, $nvpreq);

        //getting response from server
        $response = curl_exec($ch);

        //convrting NVPResponse to an Associative Array
        $nvpResArray = $this->deformatNVP($response);
        $nvpReqArray = $this->deformatNVP($nvpreq);

        if (curl_errno($ch))
            $nvpResArray = $this->APIError(curl_errno($ch), curl_error($ch), $nvpResArray);
        else
            curl_close($ch);

        return $nvpResArray;
    }

    /** This function will take NVPString and convert it to an Associative Array and it will decode the response.
     * It is usefull to search for a particular key and displaying arrays.
     * @nvpstr is NVPString.
     * @nvpArray is Associative Array.
     */
    function deformatNVP($nvpstr) {

        $intial = 0;
        $nvpArray = array();


        while (strlen($nvpstr)) {
            //postion of Key
            $keypos = strpos($nvpstr, '=');
            //position of value
            $valuepos = strpos($nvpstr, '&') ? strpos($nvpstr, '&') : strlen($nvpstr);

            /* getting the Key and Value values and storing in a Associative Array */
            $keyval = substr($nvpstr, $intial, $keypos);
            $valval = substr($nvpstr, $keypos + 1, $valuepos - $keypos - 1);
            //decoding the respose
            $nvpArray[urldecode($keyval)] = urldecode($valval);
            $nvpstr = substr($nvpstr, $valuepos + 1, strlen($nvpstr));
        }
        return $nvpArray;
    }

}
