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

/*
name: 'hippo',
prefix: 'fa-',
type: 'animal',
family: 'fas',
color: 'orange' -->

<!-- <i class="fa-solid fa-hippo" style="color: orange;"></i>*/


function iconMaker(index) {

    //getting container id
    const mainContainer = document.getElementById('main_container');
    console.log('mainContainer.isConnected', mainContainer.isConnected);

    //Creating icon element
     const iconElement = `
    <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-4 d-flex justify-content-center align-items-center">
        <i class="${index.prefix}solid ${index.prefix}${index.name}" style="color: ${index.color};"></i>
    </div>
    `;

	// const divElement = document.createElement('div');
	
	// divElement.classList.add('col-3', 'd-flex', 'justify-content-center', 'align-items-center');

	// const iconElement = document.createElement('i');

	 console.log(iconElement);
	// const tempi = `  <i class="${index.prefix}solid ${index.prefix}${index.name}" style="color: ${index.color};"></i>`
	// element.append(tempi);
	// console.log(element);

    // console.log('icon element log: ', iconElement);

    mainContainer.insertAdjacentHTML('beforeend', iconElement);



}

for (let index = 0; index < icons.length; index++) {
    console.log(`index ${index} object name identifier: ${icons[index].name}`,);

    iconMaker(icons[index]);
    
}

const select = document.getElementById('main_select');

select.addEventListener('change', function() {
	console.log('value: ', select.value);
})

