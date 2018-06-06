'use strict';
/* Class for the listbox component */
class Listbox {
    /* Construct function */
    /* @params obj: array object */
    /* {
				el: the id container component.
				hasTwoIcons: true or false -> this property add padding-left to the input element.
				iconToggleClass: 'fa fa-caret-down', // classes for icon toggle.
				iconLabelClass: 'fa fa-lock', //classes for icon left component.
				rounded: true // this property apply the class is-rounded for the input element
				name: //the name for the input element
				id: //id for the input element
		} */
    constructor(obj) {
            this.el = document.querySelector(obj.el);
            this.el.innerHTML += `
				<input ${obj.name ? `name="${obj.name}"` : ''} ${obj.id ? `id="${obj.id}"` : ''} type="text" class="input ${obj.rounded ? 'is-rounded' : ''} ${obj.hasTwoIcons ? 'padding-l-2' : ''}">
				<icon class="is-toggle-listbox"><i class="${obj.iconToggleClass}"></i></icon>
				${obj.iconLabelClass ? `<icon class="listbox-icon"><i class="${obj.iconLabelClass}"></i></icon>` : ''}
				`;
        this.init();
		}
		
		/* the iit method, add the listeners for input and toggle icon elements */

    init() {
        this.watch();
		}
		
		/* this method added interactivity for component listbox */

    watch() {
        let input = this.el.querySelector('.input'),
            toggle = this.el.querySelector('.is-toggle-listbox'),
            list = this.el.querySelector('list'),
            listItems = list.querySelectorAll('list-item'),
            activo = 0;

        input.value = listItems[0].getAttribute('text');
				input.readOnly = true;
				listItems[0].classList.add('is-active');

        input.addEventListener('click', () => {
            list.classList.toggle('is-visible');
        }, false);

        toggle.addEventListener('click', () => {
            list.classList.toggle('is-visible');
        }, false);

        listItems.forEach(item => {
            item.addEventListener('click', () => {
                listItems.forEach(el => {
                    el.classList.remove('is-active');
                });
                item.classList.add('is-active');
                activo = item;
                list.classList.remove('is-visible');
                this.update(input, activo);
            }, false);

        });
		}
		
		/* this method update the value property in the input element */
		/* @params
		input: the input element selected in DOM,
		activo: the list-item element with class is-active */
    update(input, activo) {
        input.value = activo.getAttribute('text');
    }
}