/*
---
description: Better event delegation for MooTools.

license: MIT-style

authors:
- Christopher Pitt

requires:
- core/1.2.4: Element.Event
- core/1.2.4: Selectors

provides: [Element.delegateEvent]

...
*/

Element.implement({				  
	'delegateEvent': function(type, delegates, prevent, propagate)
	{	
		//get stored delegates
		var key = type + '-delegates',
			stored = this.retrieve(key) || false;
		
		// if stored delegates; extend with
		// new delegates and return self.
		if (stored)
		{
			var delegates = $extend(stored, delegates);
			this.store(key, delegates);			
			return this;
		}
		else
		{
			this.store(key, delegates);
		}
	
		return this.addEvent(type, function(e)
		{			
			// Get target and set defaults
			var target = document.id(e.target),
				prevent = prevent || true,
				propagate = propagate || false
				delegates = this.retrieve(key); 
	
			// Cycle through rules
			for (var selector in delegates)
			{
				if (target.match(selector))
				{					
					// If a rule matches then fiddle with the natural flow as required
					if (prevent) e.preventDefault();
					if (!propagate) e.stopPropagation();
					
					// Fire the method up...
					if (delegates[selector].apply) return delegates[selector].apply(target, $A(arguments));
				}
			}
		});		
	}
});