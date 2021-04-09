<?php
require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;
$version = "2021-04-03"; // Twilio REST API version
// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXX';//AC188e5f925e43ef8530d4405f65ad48e7
                                                //AC188e5f925e43ef8530d4405f65ad48e7
$auth_token = 'your_auth_token';//91e060c2b3eb2625906e1ab4b2fa2904
                                //91e060c2b3eb2625906e1ab4b2fa2904
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+15017122661";// USA (407) 915-0771 +14079150771 // +14079150771

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+15558675310',
    array(
        'from' => $twilio_number,
        'body' => 'I sent this message in under 10 minutes!'
    )
);



//In Laravel

// Get the PHP helper library from https://twilio.com/docs/libraries/php

require_once 'vendor/autoload.php'; // Loads the library
use Twilio\TwiML\MessagingResponse;

$response = new MessagingResponse();
$response->message("The Robots are coming! Head for the hills!");
print $response;


/////////////////////////////

require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

// Your Account SID and Auth Token from twilio.com/console
// To set up environmental variables, see http://twil.io/secure
$account_sid = getenv('TWILIO_ACCOUNT_SID');
$auth_token = getenv('TWILIO_AUTH_TOKEN');
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+15017122661";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+15558675310',
    array(
        'from' => $twilio_number,
        'body' => 'I sent this message in under 10 minutes!'
    )
);

///////////////////////////////////////////////

// Update the path below to your autoload.php,
// see https://getcomposer.org/doc/01-basic-usage.md
require_once '/path/to/vendor/autoload.php';

use Twilio\Rest\Client;

// Find your Account Sid and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
$sid = getenv("TWILIO_ACCOUNT_SID");
$token = getenv("TWILIO_AUTH_TOKEN");
$twilio = new Client($sid, $token);

$service = $twilio->messaging->v1->services
                                 ->create("My First Messaging Service");

print($service->sid);


/////////////
{
    "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "date_created": "2015-07-30T20:12:31Z",
    "date_updated": "2015-07-30T20:12:33Z",
    "friendly_name": "My First Messaging Service",
    "inbound_request_url": "https://www.example.com/",
    "inbound_method": "POST",
    "fallback_url": "https://www.example.com",
    "fallback_method": "GET",
    "status_callback": "https://www.example.com",
    "sticky_sender": true,
    "smart_encoding": false,
    "mms_converter": true,
    "fallback_to_long_code": true,
    "scan_message_content": "inherit",
    "area_code_geomatch": true,
    "validity_period": 600,
    "synchronous_validation": true,
    "links": {
      "phone_numbers": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/PhoneNumbers",
      "short_codes": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/ShortCodes",
      "alpha_senders": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/AlphaSenders",
      "messages": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages",
      "broadcasts": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Broadcasts",
      "us_app_to_person": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Compliance/Usa2p",
      "us_app_to_person_usecases": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Compliance/Usa2p/Usecases"
    },
    "url": "https://messaging.twilio.com/v1/Services/MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
  }




/////////////
require_once('twilio-php-master/Services/Twilio.php'); // Loads the library

$version = "2010-04-01"; // Twilio REST API version

// Set our Account SID and AuthToken
$AccountSid = "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy";
$AuthToken = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

$client = new Services_Twilio($AccountSid, $AuthToken, $version); //initialise the Twilio client

try{
$message = $client->account->messages->create(array(
    "From" => "+972527213871",
    "To" => "+972527213871",
    "Body" => "Test message!",
));

// Display a confirmation message on the screen
echo "Sent message";
}catch (Exception $e) {
            echo 'Error: ' . $e->getMessage();
        }



        //////////////
// I got https://www.twilio.com

// pagospcrchile@gmail.com
// Pass pcrchile123456

// Sign up for Twilio and purchase an SMS-enabled phone number
// Check and install any prerequisites manually
// Send your first SMS
// Set up your development environment to send and receive messages
// Receive inbound text messages
// Reply to incoming messages with a return SMS