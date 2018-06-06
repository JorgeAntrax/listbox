## Listbox component
----------------------------------------

### Implementation HTML5

&ltlistbox id="select"&gt
	&ltlist&gt
			&ltlist-item text="Option numero 1" value="op1"&gtOption no 1&lt/list-item&gt
			&ltlist-item text="Option numero 2" value="op2"&gtOption no 2&lt/list-item&gt
			&ltlist-item text="Option numero 3" value="op3"&gtOption no 3&lt/list-item&gt
			&ltlist-item text="Option numero 4" value="op4"&gtOption no 4&lt/list-item&gt
			&ltlist-item text="Option numero 5" value="op5"&gtOption no 5&lt/list-item&gt
			&ltlist-item text="Option numero 6" value="op6"&gtOption no 6&lt/list-item&gt
	&lt/list&gt
&lt/listbox&gt

### Initialize with Javascript

&lt!-- Select script import --&gt
&ltscript src="select.js"&gt&lt/script&gt
&ltscript&gt
		var demo = new Listbox({
				el: '#select', // the id container component.
				hasTwoIcons: true, // this property add padding-left to the input element.
				iconToggleClass: 'fa fa-angle-down', // classes for icon toggle.
				iconLabelClass: 'fa fa-lock', //classes for icon left component.
				rounded: false, // this property apply the class is-rounded for the input element
				name: 'input1',
				id: 'inputId'
		});
&lt/script&gt