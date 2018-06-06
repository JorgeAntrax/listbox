## Listbox component
----------------------------------------

### Implementation HTML5
```
<listbox id="select">
	<list>
		<list-item text="Option numero 1" value="op1">Option no 1</list-item><br>
		<list-item text="Option numero 2" value="op2">Option no 2</list-item><br>
		<list-item text="Option numero 3" value="op3">Option no 3</list-item><br>
		<list-item text="Option numero 4" value="op4">Option no 4</list-item><br>
		<list-item text="Option numero 5" value="op5">Option no 5</list-item><br>
		<list-item text="Option numero 6" value="op6">Option no 6</list-item><br>
	</list>
</listbox>
```
### Initialize with Javascript
```
<!-- Select script import -->
<script src="select.js"></script>
<script>
	var demo = new Listbox({
			el: '#select', // the id container component.<br>
			hasTwoIcons: true, // this property add padding-left to the input element.
			iconToggleClass: 'fa fa-angle-down', // classes for icon toggle.
			iconLabelClass: 'fa fa-lock', //classes for icon left component.
			rounded: false, // this property apply the class is-rounded for the input element
			name: 'input1',
			id: 'inputId'
	});
</script>
```
