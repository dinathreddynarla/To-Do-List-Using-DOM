
        var btn = document.querySelector("button");
        var clearBtn = document.getElementById("clearAll");
        btn.addEventListener("click", get);
        clearBtn.addEventListener("click", clearAll);
        var gradients = [
            'linear-gradient(135deg, #FFC107, #FFEB3B)',
            'linear-gradient(135deg, #FF5722, #F44336)',
            'linear-gradient(135deg, #00BCD4, #0097A7)',
            'linear-gradient(135deg, #8BC34A, #4CAF50)'
        ];
        var colorIndex = 0;

        document.getElementById("main").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                if (document.getElementById("main").value != "") {
                    get();
                } else {
                    window.alert("Don't give an empty To-Do list item!");
                }
            }
        });

        function get() {
            var con = document.querySelector(".container");
            var txt = document.getElementById("main").value;
            if (txt.trim() === "") {
                window.alert("Don't give an empty To-Do list item!");
                return;
            } else {
                var bx = document.createElement("div");
                bx.className = "item";
                bx.style.display="flex"
                bx.style.background = gradients[colorIndex];

                var mt = document.createElement("div");
                mt.className = "todo-text";
                mt.textContent = txt;

                var btn3 = document.createElement("button");
                btn3.innerHTML = '<i class="fa-solid fa-rotate-right"></i>';
                btn3.style.display = "none";

                var btn2 = document.createElement("button");
                btn2.innerHTML = '<i class="fa-solid fa-check"></i>';
                btn2.addEventListener("click", () => {
                    var x = mt.textContent;
                    mt.contentEditable = "true";
                    mt.innerHTML = `<del>${x}</del>`;
                    mt.contentEditable = "false";
                    btn2.style.display = "none";
                    btn3.style.display = "block";
                });

                btn3.addEventListener("click", () => {
                    mt.textContent = txt;
                    btn2.style.display = "block";
                    btn3.style.display = "none";
                });

                var btn4 = document.createElement("button");
                btn4.innerHTML = '<i class="fa-solid fa-trash"></i>';
                btn4.addEventListener("click", () => {
                    con.removeChild(bx);
                });

                var btn6 = document.createElement("button");
                btn6.innerHTML = '<i class="fa-solid fa-floppy-disk"></i>';
                btn6.style.display = "none";

                var btn5 = document.createElement("button");
                btn5.innerHTML = '<i class="fa-solid fa-pen"></i>';
                btn5.addEventListener("click", () => {
                    
                    mt.contentEditable = "true";
                    btn5.style.display = "none";
                    btn6.style.display = "block";
                });

                btn6.addEventListener("click", () => {
                   txt = mt.textContent;
                   console.log(txt)
                    mt.contentEditable = "false";
                    btn6.style.display = "none";
                    btn5.style.display = "block";
                });

                document.getElementById("main").value = "";

                bx.appendChild(mt);
                bx.appendChild(btn2);
                bx.appendChild(btn3);
                bx.appendChild(btn5);
                bx.appendChild(btn6);
                bx.appendChild(btn4);
                con.appendChild(bx);

                colorIndex = (colorIndex + 1) % gradients.length;
            }
        }
        function clearAll() {
            var container = document.querySelector(".container");
            var items = container.querySelectorAll(".item");
            items.forEach(item => container.removeChild(item));
        }
