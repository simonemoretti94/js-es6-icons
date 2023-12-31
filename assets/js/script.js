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

const mainContainer = document.getElementById('main_container');

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

	mainContainer.innerHTML = '';
	
	for (let index = 0; index < icons.length; index++) {
		// console.log(`index ${index} object name identifier: ${icons[index].name}`,);

		if(typeValue === icons[index].type || typeValue === '') {
			iconMaker(icons[index]);
		}

		
	}
})


