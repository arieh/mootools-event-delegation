window.addEvent('domready', function() {
	document.id(document.body).delegateEvents({
		'click': {
			'a.clickable': function() {
				log('a.clickable clicked');
			},
			'a.remove': function() {
				document.id(document.body).denyEvents('click', 'a.remove');
				log('a.remove clicked. it now has no click event');
			},
			'self': function() {
				log('self (document.body) clicked.');
			}
		},
		'focus': {
			'input.focusable': function() {
				log('input.focusable focused');
			}
		},
		'blur': {
			'input.focusable': function() {
				log('input.focusable blurred');
			}
		},
		'change': {
			'select.changeable': function() {
				log('select.changeable changed');
			}
		}
	});
});