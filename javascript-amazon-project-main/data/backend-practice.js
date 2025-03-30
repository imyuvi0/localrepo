const xhr = new XMLHttpRequest(); // inbuild class in js 

xhr.addEventListener('load',()=>{
  console.log(xhr.response);
});// load means reponse is loading
xhr.open('GET', 'https://supersimplebackend.dev'); // parameters --> (what to do , URL)
xhr.send();
