const text = document.querySelector(".card__text").innerText;
const text2 = document.querySelector(".card__text").innerHTML;
console.log(text2)


const typewriter = new Typewriter(".card__text", {
    delay: 35,
    // devMode: true
  });

  typewriter.typeString(text2).start();