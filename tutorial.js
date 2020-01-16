//
//Kamil Kucharczyk 2020 
//Tutorial JavaScript
// 

let temat = ["Tablice" , "Obiekty" , "Drzewo DOM" , "Funkcje" ];



/////////////////////////////////////////////////////////////////////////
console.log ("Temat 1: " + temat[0]);

var tablica = ["Kamil" , "Agata" , "Piotr" , "Pawel" , "Joanna" ]; 
tablica.push("Jakub"); //umieszczanie elementu na końcu tablicy
tablica.unshift("Patryk"); //umieszczanie elementu na początku tablicy
console.log(tablica); //wypisanie wszystkich elementów tablicy 
console.log(tablica.slice(6,8)); //wypisanie 7 elementu tablicy 
tablica.pop() // usuwa ostatni element tablicy 
tablica.shift()//usuwa pierwszy element tablicy
console.log(tablica);
console.log(tablica.length); // wyświetlanie ilości elementów tablicy 
console.log(tablica.reverse()); // wyświetlanie wszystkich elementów tablic od tyłu
console.log(tablica.join(' - ')); //wyświetlenie wszystkich elementów tablicy z separatorem podanym jako argument funkcji 'join'

/////////////////////////////////////////////////////////////////////////
console.log ("Temat 2: " + temat[1]);

let person = { 
	name: 'Kamil',
	surname: 'Kucharczyk', 
	age: 17,
	growth: 175, 
	momName: 'Ewa', 
	dadName: 'Janusz',

	sayHello: function () { 
		console.log (person.name + " mowi czesc! ");}
}

console.log(person); //wypisanie wszystkich danych obiektu
console.log(person.name + " ma " + person.age + " lat.");

person.sayHello();

person.name = 'Arek';
console.log(person.name);

/////////////////////////////////////////////////////////////////////////

/* 

HTML events 

onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page

*/
