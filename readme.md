## Listbox component
----------------------------------------

### Implementation HTML5

&ltlistbox id="select"&gt<br>
	&ltlist&gt<br>
			&ltlist-item text="Option numero 1" value="op1"&gtOption no 1&lt/list-item&gt<br>
			&ltlist-item text="Option numero 2" value="op2"&gtOption no 2&lt/list-item&gt<br>
			&ltlist-item text="Option numero 3" value="op3"&gtOption no 3&lt/list-item&gt<br>
			&ltlist-item text="Option numero 4" value="op4"&gtOption no 4&lt/list-item&gt<br>
			&ltlist-item text="Option numero 5" value="op5"&gtOption no 5&lt/list-item&gt<br>
			&ltlist-item text="Option numero 6" value="op6"&gtOption no 6&lt/list-item&gt<br>
	&lt/list&gt<br>
&lt/listbox&gt<br>

### Initialize with Javascript

&lt!-- Select script import --&gt<br>
&ltscript src="select.js"&gt&lt/script&gt<br>
&ltscript&gt<br>
		var demo = new Listbox({<br>
				el: '#select', // the id container component.<br>
				hasTwoIcons: true, // this property add padding-left to the input element.<br>
				iconToggleClass: 'fa fa-angle-down', // classes for icon toggle.<br>
				iconLabelClass: 'fa fa-lock', //classes for icon left component.<br>
				rounded: false, // this property apply the class is-rounded for the input element<br>
				name: 'input1',<br>
				id: 'inputId'<br>
		});<br>
&lt/script&gt<br>