export default class Slide {
slides;
prev;
next;
dots;
slideCurrent = 0;
totalSlides;
interval;
animationIsRunning = false;
constructor ( slides, prev, next, dots ) {
this.slides = document.querySelectorAll( slides );
this.prev = document.querySelector( prev ).addEventListener( "click", () => {
this.calculateSlideCurrent( -1 );
} );
this.next = document.querySelector( next ).addEventListener( "click", () => {
this.calculateSlideCurrent( 1 );
} );
this.dots = document.querySelectorAll( dots );
for ( let index = 0; index < this.dots.length; index++ ) {
this.dots[ index ].addEventListener( "click", () => {
this.removeAnimation();
this.animationEffect( this.slideCurrent, index );		
this.changeSlideCurrent( index );
} );
}
this.totalSlides = this.slides.length - 1;
this.init();
}
init () {
this.interval = setInterval( () => {
this.calculateSlideCurrent( 1 );
}, 5000 );
}
calculateSlideCurrent ( value ) {
this.removeAnimation();
var index = this.slideCurrent;
index += value;
if ( index < 0 ) {
index = this.totalSlides;
}
if ( index > this.totalSlides ) {
index = 0;
}
this.animationEffect( this.slideCurrent, index, value );
this.changeSlideCurrent( index );
}
animationEffect ( slideCurrent, index, value = 0 ) {
if ( value == 1 ) {
this.slides[ slideCurrent ].classList.add( "toRightOld" );
this.slides[ index ].classList.add( "toRightNew" );
} else if ( value == -1 ) {
this.slides[ this.slideCurrent ].classList.add( "toLeftOld" );
this.slides[ index ].classList.add( "toLeftNew" );
} else if ( slideCurrent < index ) {
this.slides[ slideCurrent ].classList.add( "toRightOld" );
this.slides[ index ].classList.add( "toRightNew" );
} else if ( slideCurrent > index ) {
this.slides[ slideCurrent ].classList.add( "toLeftOld" );
this.slides[ index ].classList.add( "toLeftNew" );
}
}
changeSlideCurrent ( index ) {
this.slides[ this.slideCurrent ].classList.remove( "active" );
this.dots[ this.slideCurrent ].classList.remove( "active" );
this.slideCurrent = index;
this.slides[ this.slideCurrent ].classList.add( "active" );
this.dots[ this.slideCurrent ].classList.add( "active" );
this.init();
}
removeAnimation () {
clearInterval( this.interval );
this.slides.forEach( element => {
element.classList.remove( "toRightOld" );
element.classList.remove( "toRightNew" );
element.classList.remove( "toLeftOld" );
element.classList.remove( "toLeftNew" );
} );
}
}
/* 
<div class="slides">
<div class="prev"><i class="fa-solid fa-chevron-left"></i></div>
<div class="next"><i class="fa-solid fa-chevron-right"></i></div>
<ul id="experience-container"></ul>
<ul class="dots-container"></ul>
</div>
.slides {
position: relative;
padding: 30px 50px;
overflow: hidden;
border-radius: 10px;
background: var(--background-max);
background-size: 100%;
max-width: 600px;
margin: 0 auto;
box-shadow: 0 0 10px var(--background-min);
&::before {
content: "";
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background: url(../static/img/bg-value-lines.png) center no-repeat;
background-size: 100%;
opacity: 1;
transition: 300ms;
}
&:where(.next) {
position: absolute;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
padding: 10px 5px;
font-size: 40px;
color: var(--skin-color);
font-size: 30px;
transition: 200ms;
user-select: none;
background: #000;
}
.prev,
.next {
position: absolute;
top: 50%;
transform: translateY(-50%);
cursor: pointer;
padding: 10px 5px;
&:hover {
> i {
font-size: 40px;
}
}
&.blocked {
opacity: 0.5;
pointer-events: none;
}
i {
color: var(--skin-color);
font-size: 30px;
transition: 200ms;
}
}
.prev {
left: 10px;
}
.next {
right: 10px;
}
ul {
overflow: hidden;
position: relative;
height: 300px;
}
.slides-pag {
position: absolute;
opacity: 0;
transition: opacity 500ms 0ms;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
.icon {
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 860px) {
display: none;
height: 200px;
}
@media (max-width: $hideAside) {
display: block;
}
@media (max-width: 620px) {
display: none;
}
i {
color: var(--skin-color);
font-size: 5rem;
}
}
h4 {
color: var(--skin-color);
text-align: center;
text-transform: uppercase;
font-size: 20px;
margin-bottom: 10px;
}
p {
text-align: justify;
color: var(--text-sub);
width: 90%;
}
}
.slides-pag.toRightOld {
animation: toRightOld 500ms ease-in-out;
}
.slides-pag.toRightNew {
animation: toRightNew 500ms ease-in-out;
}
.slides-pag.toLeftOld {
animation: toLeftOld 500ms ease-in-out;
}
.slides-pag.toLeftNew {
animation: toLeftNew 500ms ease-in-out;
}
.slides-pag.active {
opacity: 1;
transition: opacity 0ms 0ms;
}
.dots-container {
height: 15px;
display: flex;
justify-content: center;
align-items: center;
// gap: 1px;
.dot {
width: 50px;
height: 5px;
// border: 2px solid var(--skin-color);
background: var(--background-min);
// border-radius: 50%;
cursor: pointer;
transition: 500ms;
&.active {
background: var(--skin-color);
}
}
}
}
@keyframes toRightOld {
from {
transform: translateX(0%);
}
to {
transform: translateX(-100%);
}
}
@keyframes toRightNew {
from {
transform: translateX(100%);
}
to {
transform: translateX(0%);
}
}
@keyframes toLeftOld {
from {
transform: translateX(0%);
}
to {
transform: translateX(100%);
}
}
@keyframes toLeftNew {
from {
transform: translateX(-100%);
}
to {
transform: translateX(0%);
}
}
*/
import Slide from "./Slide-old.js";
let Experience = document.querySelector( "#experience-container" );
let dotsContainer = document.querySelector( ".data-self .xp .slides .dots-container" );
async function fetchData () {
try {
const response = await fetch( "data.json" );
const data = await response.json();
data.experience.forEach( ( card, index ) => {
Experience.innerHTML +=
` 
<li class="slides-pag ${ index == 0 ? "active" : "" }">
<div class="icon">
<i class="${ card.icon }"></i>
</div>
<h4>${ card.area }</h4>
<p>${ card.description }</p>
</li>
`;
dotsContainer.innerHTML += `<li class="dot ${ index == 0 ? "active" : "" }"></li>`;
} );
new Slide(
".data-self .xp .slides #experience-container li",
".data-self .xp .slides .prev",
".data-self .xp .slides .next",
".data-self .xp .slides .dots-container .dot"
);
} catch ( error ) {
console.error( "Error fetching data:", error );
}
}
fetchData();