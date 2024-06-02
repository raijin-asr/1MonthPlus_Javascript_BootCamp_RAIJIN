//Window object-------------------
//global object, represents the browser window or tab
//provide access to the browser window properties and methods
//example: window size, screen, storage, scrollbar info, location, history, navigator, alert, confirm, prompt, setTimeout, setInterval
//alert, confirm, prompt are blocking methods
//setTimeout, setInterval are non-blocking methods
//document and console are object of window

//keeps global variables and functions
var gloablVar = 'global variable'; //shows in window object in console
//but let does not show and make variable global

function add(a,b){ //check typing window in console
    return a+b;
}
//but if type="module" in script tag then it will not show in window object, variable does not become global

//all HTML code is inside document object of window object
//type window.document in console to see the document object
//type dir(window.document) to see the properties and methods of document object


//Window properties-------------------
window.innerHeight
window.innerWidth
window.outerHeight
window.outerWidth
window.screenX
window.screenY
window.screenLeft

//Window methods-------------------
window.alert('message')
window.confirm('message')
window.prompt('message','default value')
window.open('url','name','features')
window.close()
window.setTimeout(function(){},time)
window.setInterval(function(){},time)
window.clearTimeout(id)
window.clearInterval(id)

//Window events-------------------
window.onload = function(){}
window.onresize = function(){}
window.onunload = function(){}
window.onbeforeunload = function(){}
window.onfocus = function(){}
window.onblur = function(){}
window.ononline = function(){}
window.onoffline = function(){}

//Window location-------------------
window.location.href
window.location.protocol
window.location.host

//Window history-------------------
window.history.back()
window.history.forward()
window.history.go(-1)
window.history.go(1)


//document object-------------------
document.title //if done in console, temporary change
document.title = 'new title' //if done in js code, changes permanently
document.domain //gives www.google.com
document.URL
document.body.style.backgroundColor = "green"
document.body.innerHTML = "<h1>hello</h1>"


//Document Object Model
//tree structure representation of html elements by the browser
//DOM is used to interact with the html elements using javascript
//HTML has model DOM and CSS has CSSOM(CSS Object Model)

//document object itself is the root node of the DOM tree
//it is global object and also property of window object


//DOM tree
//root node
//element node
//text node
//attribute node
//comment node
//document node
//document type node


//DOM methods and properties-------------------

//simple methods
document.getElementById('id')
document.getElementsByClassName('class')
document.getElementsByTagName('tag')
document.querySelector('selector')
document.querySelectorAll('selector')
document.createElement('element')
document.createTextNode('text')
document.appendChild('element')
document.removeChild('element')
document.replaceChild('element')
document.write('text')

//complex methods
document.getElementById('id').childNodes
document.getElementById('id').children
document.getElementById('id').firstChild
document.getElementById('id').lastChild
document.getElementById('id').parentNode

//properties
document.getElementById('id').nodeName
document.getElementById('id').nodeType
document.getElementById('id').nodeValue
document.getElementById('id').textContent

//attributes
document.getElementById('id').id
document.getElementById('id').className
document.getElementById('id').title
document.getElementById('id').lang
document.getElementById('id').dir
document.getElementById('id').tabIndex
document.getElementById('id').hidden
document.getElementById('id').draggable
document.getElementById('id').contentEditable
document.getElementById('id').spellcheck
document.getElementById('id').style
document.getElementById('id').dataset
document.getElementById('id').value


//methods
document.getElementById('id').focus()
document.getElementById('id').blur()
document.getElementById('id').click()
document.getElementById('id').submit()
document.getElementById('id').reset()
document.getElementById('id').select()
document.getElementById('id').scrollIntoView()

//events
document.getElementById('id').onEvent = function(){} //inline event
document.getElementById('id').addEventListener('event',function(){}) //event listener
document.getElementById('id').removeEventListener('event',function(){}) //remove event listener
document.getElementById('id').dispatchEvent('event') //dispatch event

//style
document.getElementById('id').style.property = 'value'  //inline css
document.getElementById('id').style.cssText = 'property:value;property:value;'  //multiple inline css
document.getElementById('id').style.setProperty('property','value') //set property
document.getElementById('id').style.removeProperty('property') //remove property

//1. accessing values using tagName
document.getElementsByTagName('h1')[0].value
document.getElementsByTagName('body')[0].innerHTML

//changing values using tagName
let h1NewValue= document.getElementsByTagName('h1')[0];
h1NewValue.innerHTML = '<p>html works</p>new value1'; //changes the inner html, also takes html codes
h1NewValue.innerText = '<p>html is taken as string text</p>new value2'; //changes the inner text, does not take html codes
h1NewValue.style.color = 'red';

//2. accessing values using id
document.getElementById('heading1').value
document.getElementById('heading1').innerHTML

//changing values using id
let idNewValue= document.getElementById('heading1');
idNewValue.innerHTML = '<p>html works</p>new value1'; //changes the inner html, also takes html codes
idNewValue.innerText = '<p>html is taken as string text</p>new value2'; //changes the inner text, does not take html codes
idNewValue.style.color = 'red';

//3. accessing values using className
document.getElementsByClassName('heading2')[0].value
document.getElementsByClassName('heading2')[0].innerHTML

//changing values using className
let classNewValue= document.getElementsByClassName('heading2')[0];
classNewValue.innerHTML = '<p>html works</p>new value1'; //changes the inner html, also takes html codes
classNewValue.innerText = '<p>html is taken as string text</p>new value2'; //changes the inner text, does not take html codes
classNewValue.style.color = 'red';

//4. accessing values using querySelector
document.querySelector('.heading1').value //. for class, # for id
document.querySelector('#heading2').value //for id
document.querySelector('.heading1').innerHTML

//changing values using querySelector
let queryNewValue= document.querySelector('.heading1');
queryNewValue.innerHTML = '<p>html works</p>new value1'; //changes the inner html, also takes html codes
queryNewValue.innerText = '<p>html is taken as string text</p>new value2'; //changes the inner text, does not take html codes
queryNewValue.style.color = 'red';

//accessing child values using querySelector
document.querySelector('.heading1 > p').innerHTML //accessing p tag inside heading1
document.querySelector('.heading1 > p').innerText
document.querySelector('.heading1').children[0].value

//5. accessing values using querySelectorAll 
document.querySelectorAll('.heading1')[0].value //it returns all matching id
document.querySelectorAll('.heading1')[0].innerHTML

//changing values using querySelectorAll
let queryAllNewValue= document.querySelectorAll('.heading1')[0];
queryAllNewValue.innerHTML = '<p>html works</p>new value1'; //changes the inner html, also takes html codes
queryAllNewValue.innerText = '<p>html is taken as string text</p>new value2'; //changes the inner text, does not take html codes
queryAllNewValue.style.color = 'red';

//accessing and changing attribute values
document.querySelector('.heading1').getAttribute('id')
const attribute1 = document.querySelector('.heading1')
attribute1.setAttribute('id','newId')
attribute1.setAttribute('align','left') 
attribute1.removeAttribute('align')
attribute1.title= 'new title'
attribute1.id= 'newId'
attribute1.className= 'newClass'
attribute1.style.color= 'red'
attribute1.style= 'color:green'
 
document.querySelector('.heading1').setAttribute('id','newId')

//creating new elements
let newElement = document.createElement('p');
newElement.innerHTML = 'new element';
newElement.id = 'newId';
newElement.className = 'newClass';
newElement.style.color = 'red';

//using append only
newElement.append('appending text');
p.append(newElement); //putting new element inside p tag


//appending new elements
document.querySelector('.heading1').appendChild(newElement);

//removing elements
document.querySelector('.heading1').removeChild(newElement);

//replacing elements
let replaceElement = document.createElement('p');
replaceElement.innerHTML = 'replace element';
replaceElement.id = 'replaceId';
replaceElement.className = 'replaceClass';

document.querySelector('.heading1').replaceChild(replaceElement,newElement);


//dataset in div
let div = document.querySelector('.root');
console.log(div.dataset); //shows the dataset object such as toggle and label after hyphen
div.dataset.id = '1';

div.dataset.newData = 'new data'; //adding new data to dataset of div tag in html as new attribute
//returns <div class="root" data-id="1" data-new-data="new data"></div> 

///classList in div
let div = document.querySelector('.root');
console.log(div.classList); //shows the classList object such as toggle, add, remove, contains
div.classList.add('newClass'); //adds new class to the div tag in html
//returns <div class="root newClass"></div>

div.classList.remove('root'); //removes the class from the div tag in html
//returns <div class="newClass"></div>

//triggering css styles
let div = document.querySelector('.root');
div.style.color = 'red'; //changes the color of the div tag in html
div.classList.add('p'); //adds new class to the div tag in html
//style in title tag of html file is applied from this code dynamically

//toggle class
let div = document.querySelector('.root');
div.classList.toggle('newClass'); //adds new class if not present, removes if present
//returns <div class="root"></div>
div.classList.toggle('newClass',false); //adds new class if not present, removes if present

//if there is matching class then it will remove it
//if there is no matching class then it will add it

//you can change style in console and see the changes in html file
console.log("%c hello", "color:red; font-size:20px; background-color:yellow; font-family:Arial; padding:10px; border:1px solid black; border-radius:5px; text-shadow:2px 2px 5px black; box-shadow:2px 2px 5px black;")
//google text formatting for more info

//use of DOM
//notification alert in title of facebook as facebook(1)
