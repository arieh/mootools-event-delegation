sixtyseconds event delegation
=============================

This extension is a fresh look at event delegation, taking into consideration limitations of the current MooTools event delegation approach.

![Screenshot](http://github.com/sixtyseconds/mootools-event-delegation/raw/master/screen.png)

How to use
----------

	// A working demo has been included in the download
	
	document.id('container').delegateEvents({
		'click':
		{
			'a.clickable': function(e)
			{
				e.stop();
				alert('Told you so!');
			},
			'a.remove': function(e)
			{
				e.stop();
				document.id('container').denyEvents('click', 'a.remove');
				alert('My event delegation has been removed!');
			}
		},
		'focus':
		{
			'input.focusable': function(e)
			{
				this.set('value', 'I have focus!');
			}
		},
		'blur':
		{
			'input.focusable': function(e)
			{
				this.set('value', 'I lost focus! ;(');
			}
		},
		'change':
		{
			'select.changeable': function(e)
			{
				alert('I have changed!');
			}
		}
	});

This code illustrates how to add event delegates to multiple elements with a single event. The second call to document.body.delegateEvent doesn't attach a new click event but simply adds the event delegates to the current list. You can also use delegateEvents() to setup delegates for multiple event types at the same time. The syntax is also a lot less ambiguous than the current :relay pseudo-selector.

Please note, however, that due to current limitations in Element.match (MooTools 1.2.4) element decendency is not taken into account so you will need to be specific with id's/classes because 'ul#main > li a' is not properly handled with Element.match. This should be fixed in MooTools 2.