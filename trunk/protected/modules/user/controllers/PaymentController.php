<?php
	class PaymentController extends FController {

		public $paypal;

		public function __construct() {
			$this->paypal = Yii::app()->paypal;
		}

		public function actionIndex( $type_sale = 0, $instagram_id = 0 ) {

			switch ($type_sale) {
				case 3:
					$amount = 1.99;
					break;
				case 10:
					$amount = 4.99;
					break;
				case 30:
					$amount = 9.99;
					break;
				case 90:
					$amount = 24.99;
					break;
				case 180:
					$amount = 44.99;
					break;
				case 360:
					$amount = 79.99;
					break;
				
				default:
					$amount = 1.99;
					break;
			}

			$paymentInfo["amount"] = $amount;
		    $paymentInfo["type"] = "Sale";
		    $paymentInfo["currency"] = "USD";
		    $paymentInfo["item_name"] = "example product";
		    $paymentInfo["returnUrl"] = "http://" . $_SERVER['HTTP_HOST'] . "/user/payment/success/?total=" . $amount;
		    $paymentInfo["cancelUrl"] = "http://" . $_SERVER['HTTP_HOST'] . "/user/payment/cancel";
		    $result = $this->paypal->process($paymentInfo, "SetExpressCheckout");
		    $ack = strtoupper($result["ACK"]);

		    if( $ack != "SUCCESS" ) 
		    {
		        $error = $result["L_LONGMESSAGE0"];
		        echo $error;
		        exit();
		    }

		    $token = urldecode($result["TOKEN"]);
		    $payPalURL = PAYPAL_URL . $token;
		    
		    header( "HTTPS/1.1 301 Moved Permanently" );
		    header("Location: $payPalURL");
		    exit();
		}

		/**
		 * this action will runs when payment was done
		 * @return avoid
		 */
		public function actionSuccess( $total ) {

			$token = $_GET['token'];
		    $PAYERID = $_GET["PayerID"];
		    $result = $this->paypal->process($token, "GetExpressCheckoutDetails");
		    $result["PAYERID"] = $PAYERID;
		    $result["TOKEN"] = $token;
		    $result["ORDERTOTAL"] = $total;
		    $result["PAYMENTACTION"] = "Sale";
		    $result["CURRENCYCODE"] = "USD";
		    $ack = strtoupper($result["ACK"]);

		    if( $ack != "SUCCESS" ) 
		    {
		        $error = $result["L_LONGMESSAGE0"];
		        echo $error;
		        return NULL;
		    }
		   
		    $result_payment = $this->paypal->process($result, "DoExpressCheckoutPayment");
		    $payment_ack = strtoupper($result["ACK"]);
		    if( $ack != "SUCCESS" ) 
		    {
		        $error = $result["L_LONGMESSAGE0"];
		        echo $error;
		        return NULL;
		    }

		    // handle save db here 
		    // keke
		}

		/**
		 * This action will be run when user cancel the our payment
		 * @return void
		 */
		public function actionCancel() {
			$this->redirect('/user/activity');
		}
	}