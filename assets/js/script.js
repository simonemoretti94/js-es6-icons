//script

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

function iconMaker(index) {

    //getting container id
    const mainContainer = document.getElementById('main_container');

    // console.log('mainContainer.isConnected', mainContainer.isConnected);

    //Creating icon element
     const iconElement = `
    <div class=" ${index.type} col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center align-items-center">
        <i class="${index.prefix}solid ${index.prefix}${index.name} rounded-3 display-2 w-50 h-auto" style="color: ${index.color};"></i>
    </div>
    `;

	//  console.log(iconElement);

    mainContainer.insertAdjacentHTML('beforeend', iconElement);

}

for (let index = 0; index < icons.length; index++) {
    // console.log(`index ${index} object name identifier: ${icons[index].name}`,);

    iconMaker(icons[index]);
    
}

const select = document.getElementById('main_select');

select.addEventListener('change', function() {

	//Getting select value
	console.log('value: ', select.value, 'type of value: ', typeof(select.value));

	//making it lowercase
	const typeValue = select.value.toLowerCase();

	console.log('value: ', typeValue);

	//getting cards
	const user = document.querySelectorAll('div.user');
	const animal = document.querySelectorAll('.animal');
	const vegetable = document.querySelectorAll('.vegetable');


	console.log('user: ', user, 'user.length', user.length, 'animal: ', animal, 'animal.length', animal.length, 'vegetable: ', vegetable, 'vegetable.length', vegetable.length);

	//declaring variables
	let i, n;

	//deciding what to do with that value
	if(typeValue === 'user') {

		//iterating and adding d-none classes
		for (i = 0; i < vegetable.length; i++) {
			
			vegetable[i].classList.add('d-none');
			
			console.log('vegetable: ', vegetable[i].classList);
		}

		for (n = 0; n < animal.length; n++) {
			
			animal[n].classList.add('d-none');
			
			console.log('animal: ', animal[n].classList);
		}
		

	}
	else if(typeValue === 'animal') {

		//declaring variable
		let i, n;

		//iterating and adding d-none classes
		for (i = 0; i < user.length; i++) {
			
			user[i].classList.add('d-none');
			
			console.log('user: ', user[i].classList);
		}

		for (n = 0; n < vegetable.length; n++) {
			
			vegetable[n].classList.add('d-none');
			
			console.log('vegetable: ', vegetable[n].classList);
		}
		

	}
	else{
		//declaring variable
		let i, n;

		//iterating and adding d-none classes
		for (i = 0; i < user.length; i++) {
			
			user[i].classList.add('d-none');
			
			console.log('user: ', user[i].classList);
		}

		for (n = 0; n < animal.length; n++) {
			
			animal[n].classList.add('d-none');
			
			console.log('animal: ', animal[n].classList);
		}
	}
})

