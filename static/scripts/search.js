let inp = window.location.search
let a2 = inp.split('q=')

if (a2[1] != '' && a2[1] != undefined) {
  window.location.replace("https://google.com/search?q=" + a2[1])
} else {
  console.log('hello :D');
}