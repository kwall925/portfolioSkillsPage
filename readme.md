** text animation (class .ml3)

<script type="text/javascript">
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
// https://tobiasahlin.com/moving-letters/#3
anime.timeline({loop: false})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    //opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  </script>


  <script type="text/javascript">
      // animate each letter using js
      function animateWords(){
        let para = document.querySelector('.soft');
      let words = document.querySelector('.soft').textContent;
      console.log(para)
      console.log(words.length);

    let i = 0;

    setInterval(function() {
    if (i >= words.length) clearInterval(this);
    else console.log(words[i]);
    //else words[i].classList.add('opa');
    i++;
      }, 130);
    }

    animateWords();

  </script>