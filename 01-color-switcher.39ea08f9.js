let t=null;let e=!1;const s={startButton:document.querySelector("button[data-start]"),stopButton:document.querySelector("button[data-stop]")};s.stopButton.classList.add("active-style"),s.startButton.addEventListener("click",(function(){if(e)return;e=!0,s.startButton.classList.add("active-style"),s.stopButton.classList.remove("active-style"),t=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),s.stopButton.addEventListener("click",(function(){clearInterval(t),e=!1,s.startButton.classList.remove("active-style"),s.stopButton.classList.add("active-style")}));
//# sourceMappingURL=01-color-switcher.39ea08f9.js.map
