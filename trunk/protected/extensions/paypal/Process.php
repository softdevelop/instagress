<?php 
//
// This source code was recovered by Recover-PHP.com
//
// include config and library
require "Paypal.php";
require "config.php";

class Process extends CApplicationComponent {

    public function __construct() {

    }

    public function process( $paymentInfo, $function ) {

        // initilize paypal class
        $paypal = new Paypal();

        if( $function == "DoDirectPayment" ) {
            return $paypal->DoDirectPayment($paymentInfo);
        }

        if( $function == "SetExpressCheckout" ) {
            return $paypal->SetExpressCheckout($paymentInfo);
        }

        if( $function == "GetExpressCheckoutDetails" ) {
            return $paypal->GetExpressCheckoutDetails($paymentInfo);
        }

        if( $function == "DoExpressCheckoutPayment" ) {
            return $paypal->DoExpressCheckoutPayment($paymentInfo);
        }

        if( $function == "DoVoid" ) {
            return $paypal->DoVoid($paymentInfo);
        }

        if( $function == "DoReauthorization" ) {
            return $paypal->DoReauthorization($paymentInfo);
        }

        if( $function == "DoCapture" ) {
            return $paypal->DoCapture($paymentInfo);
        }

        if( $function == "DoRefund") {
            return $paypal->DoRefund($paymentInfo);
        }

        return "Function Does Not Exist!";
    }
}
