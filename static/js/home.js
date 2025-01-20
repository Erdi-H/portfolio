$(function () {
  $(".typed").typed({
    strings: [
      "stat erdihida<br/>" +
      /*"><span class='caret'>$</span> job: <br/> ^100" +*/
      "><span class='caret'>$</span> programming: C++, C#, Python, Javascript, Java<br/> ^300" +
      "><span class='caret'>$</span> web & database: HTML, CSS, SQL, REST API, Jinja<br/> ^300" +
      "><span class='caret'>$</span> frameworks: Python Flask, React.js, Vue.js, Bootstrap<br/> ^300" +
      "><span class='caret'>$</span> tools: Git, AWS(EC2), VSCode, Visual Studio<br/> ^300" +
      "><span class='caret'>$</span> certifications: CompTIA Security+, CompTIA Network+<br/> ^300" +
      "><span class='caret'>$</span> hobbies: reading, lifting weights, movies, cooking<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function (pos, self) { $('.message form').show(); },
  });
  $('.message form').hide()
});
