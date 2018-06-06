## Listbox component
----------------------------------------

### Implementation HTML5

<listbox id="select"><br>
	<list><br>
			<list-item text="Option numero 1" value="op1">Option no 1</list-item><br>
			<list-item text="Option numero 2" value="op2">Option no 2</list-item><br>
			<list-item text="Option numero 3" value="op3">Option no 3</list-item><br>
			<list-item text="Option numero 4" value="op4">Option no 4</list-item><br>
			<list-item text="Option numero 5" value="op5">Option no 5</list-item><br>
			<list-item text="Option numero 6" value="op6">Option no 6</list-item><br>
	</list><br>
</listbox><br>

### Initialize with Javascript

<!-- Select script import --><br>
<script src="select.js"></script><br>
<script><br>
		var demo = new Listbox({<br>
				el: '#select', // the id container component.<br>
				hasTwoIcons: true, // this property add padding-left to the input element.<br>
				iconToggleClass: 'fa fa-angle-down', // classes for icon toggle.<br>
				iconLabelClass: 'fa fa-lock', //classes for icon left component.<br>
				rounded: false, // this property apply the class is-rounded for the input element<br>
				name: 'input1',<br>
				id: 'inputId'<br>
		});<br>
</script><br>