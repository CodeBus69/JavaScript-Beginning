# JavaScript-Beginning

## Podstawowe funkcje 

*Tablice* 

tablica.push('element'); -> umieszcza nowy element na końcu tablicy  
tablica.unshift('element'); -> umieszcza nowy element na początku tablicy  
console.log(tablica.slice(0,1)); ->wypisuje pierwszy element z tablicy  
tablica.pop(); -> usuwa ostatni element tablicy  
tablica.shift(); -> usuwa pierwszy element tablicy   
console.log(tablica.length); -> wyświetla liczbę elementów tablicy    
console.log(tablica.join(' - ')); -> wyświetla wszystkie elementy tablicy połączone separatorem ' - '   
console.log(tablica.reverse()); -> wyświetla elementy tablicy od tyłu  

*Obiekty* 

v- tworzenie obiektu -v 

var czlowiek = {  
  name: 'Jan'; 
  lastName: 'Kowalski'
  age: '35';
  
  umyjZeby: function() { 
  
  console.log('Myję zeby');
  }, 
  idz: function { 
  console.log('Jadę samochodem');
  }
  }
  
console.log(czlowiek) <- wypisywanie wszystkich danych obiektu 'czlowiek'  
console.log(czlowiek.name); <- wypisywanie zmiennej 'name' obiektu 'czlowiek' 
   
console.log(czlowiek.umyjZeby()); -> wywoływanie metody 'umyjZeby' obiektu 'czlowiek' 
czlowiek.age = 17; -> zmiana zmiennej 'age' obiektu 'czlowiek' na wartość 17 

*Drzewo DOM*  

document.getElementById('id_elementu'); -> wybieranie elementu przez Id  
document.getElementsByClassName('klasa_elementu'); -> wybieranie elementu przez klasę  
document.getElementsByTagName('tag_elementu'); -> wybieranie elementu przez tag  

document.querySelector('#id-elementu p'); -> alternatywne wybieranie elementu przez Id i tag  
document.querySelectorAll('#id-elementu p'); -> alternatywne wybieranie każdego elementu przez Id i tag  

var listaArtykulow = document.querySelector('#id');  
listaArtykulow.classList.add('text-center'); -> dodawanie klasy 'text-center' do elementu 'listaArtykulow'  
listaArtykulow.classList.remove('text-center'); -> usuwanie klasy 'text-center' do elementu 'listaArtykulow'  
listaArtykulow.classList.contains('text-center'); -> sprawdza czy istnieje klasa 'text-center'  

listaArtykulow.textContent = 'Przykladowy tekst'; -> zmienia tekst elementu 'listaArtykulow' na 'Przykladowy tekst'  
listaArtykulow.innerHTML = ; -> edycja elementu w HTML 
listaArtykulow.style.color = white; -> zmiana koloru elementu



  
  
  
