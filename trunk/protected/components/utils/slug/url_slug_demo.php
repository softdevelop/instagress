<?php
include('url_slug.php');
header('Content-type: text/plain; charset=utf-8');

// Basic usage
echo "This is an example string. Nothing fancy." . "\n";
echo url_slug("This is an example string. Nothing fancy.") . "\n\n";

// Example using French with unwanted characters ('?)
echo "Qu'en est-il français? Ça marche alors?" . "\n";
echo url_slug("Qu'en est-il français? Ça marche alors?") . "\n\n";

// Example using transliteration
echo "Что делать, если я не хочу, UTF-8?" . "\n";
echo url_slug("Что делать, если я не хочу, UTF-8?", array('transliterate' => true)) . "\n\n";

// Example using transliteration on an unsupported language
echo "מה אם אני לא רוצה UTF-8 תווים?" . "\n";
echo url_slug("מה אם אני לא רוצה UTF-8 תווים?", array('transliterate' => true)) . "\n\n";

// Some other options
echo "This is an Example String. What's Going to Happen to Me?" . "\n";
echo url_slug(
	"This is an Example String. What's Going to Happen to Me?", 
	array(
		'delimiter' => '_',
		'limit' => 40,
		'lowercase' => false,
		'replacements' => array(
			'/\b(an)\b/i' => 'a',
			'/\b(example)\b/i' => 'Test'
		)
	)
);

/*
Output:

This is an example string. Nothing fancy.
this-is-an-example-string-nothing-fancy

Qu'en est-il français? Ça marche alors?
qu-en-est-il-français-ça-marche-alors

Что делать, если я не хочу, UTF-8?
chto-delat-esli-ya-ne-hochu-utf-8

מה אם אני לא רוצה UTF-8 תווים?
מה-אם-אני-לא-רוצה-utf-8-תווים

This is an Example String. What's Going to Happen to Me?
This_is_a_Test_String_What_s_Going_to_Ha
*/
?>