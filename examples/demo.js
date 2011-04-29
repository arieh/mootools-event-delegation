window.addEvent('domready', function() {
	document.id(document.body).delegateEvents({
		'click': {
			'a.clickable': function() {
				console.log('a.clickable clicked');
			},
			'a.remove': function() {
				document.id(document.body).denyEvents('click', 'a.remove');
				console.log('a.remove clicked. it now has no click event');
			},
			'self': function() {
				console.log('self (document.body) clicked.');
			}
		},
		'focus': {
			'input.focusable': function() {
				console.log('input.focusable focused');
			}
		},
		'blur': {
			'input.focusable': function() {
				console.log('input.focusable blurred');
			}
		},
		'change': {
			'select.changeable': function() {
				console.log('select.changeable changed');
			}
		}
	});
});