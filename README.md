Better Event Delegation
===========

This extension is a fresh look at event delegation, taking into consideration limitations of the current MooTools event delegation approach.

![Screenshot](http://www.sixtyseconds.co.za/playground/eventdelegation/screen.png)

How to use
----------

Simply specify the url to the asset you wish to preload.

    document.body.delegateEvent('click', {
		'.link': function(e)
		{
			console.log('clicked .link element!');
		},		
		'img': function(e)
		{
			console.log('clicked image element!');
		}
    });
	
You can also attach events to the preloader, so you always know what's happening.

    preloader.addEvents({
        'onSuccess': function(length)
        {
            console.log('asset loaded: ' + length + ' bytes.');
        },
        'onFailure': function()
        {
            console.log('asset not loaded.');
        }
    });