(function () {

    var listNews = document.querySelector('#listnews');
    var numChild = document.querySelectorAll('#listnews li').length;
    var newsList = document.querySelectorAll('#listnews li');
    var previewImg = document.querySelector('#previewImg');
    var previewDesc = document.querySelector('#previewDesc');
    var childwidth = newsList[0].getBoundingClientRect().width;
    listNews.style.width = (numChild * childwidth) + 'px';
    var pid = document.querySelector('#pid');
    var hid = document.querySelector('#hid');
    var left = document.querySelector('#left');
    var right = document.querySelector('#right');
    var link = document.querySelector('#link');
    var btn = document.querySelector('#btn');
    var moveCount = 0;
    var c = 0;
    var check = 0;

    var move = 1;
    function slider() {
        check = 1;
       // debugger;
        //var x = window.event.srcElement;
        //previewImg.src = x.src;
        
     //   var idx = x.getAttribute("myatt");
        if (move != 0 && move % 8 == 0) {
            move = 8;
        }
        else {
            move = move % 8;
            move++;
        }
       // move = (move % 8) ;

        var t = move;//(moveCount) % 8 + 1;
        console.log(t);
        previewImg.src = t + '.jpg';
        var title = document.getElementById("hat" + t);
     // console.log(title);
       hid.innerHTML = title.innerHTML;
        //var id1 = x.getAttribute("myatt1");
       var para = document.getElementById("pat" + t);
      pid.innerHTML = para.innerHTML;
        //var id2 = (document.querySelectorAll('.article'));
        //var id5 = Array.prototype.slice.call(id2, 0);
        //var id6 = x.getAttribute("myid");
        link.href = "#at" +t;
        //move++;
        if (move == 8) {
            move = 0;
        }
        moveLeft();
      
           }
    var z = window.setInterval(slider, 3000);
    btn.innerHTML = "pause";


    function moveLeft() {

        if (check === 0)
            //left.addEventListener('click', roll);
        {
            window.clearInterval(z);
            btn.innerHTML = "play";
        }
        if (check === 1) {
            check = 0;
        }

       
        var ol = listNews.style.left;
        if (ol === '') {
            ol = 0;
        }
        else {
            ol = parseInt(ol, 10);
        }
        if (moveCount === (numChild - 3)) {

            var newli = document.querySelectorAll('#listnews li');
            listNews.appendChild(newli[0]);
            ol = ol + childwidth;
            listNews.style.transition = 'left 0s';
            listNews.style.left = ol + 'px';

            window.setTimeout(moveLeftEdge, 0);
        }
        else {
            ol = ol - childwidth;
            listNews.style.left = ol + 'px';
            moveCount++;

            //debugger;
           // console.log(moveCount);

        }
    }

    function moveLeftEdge() {
        var ol = listNews.style.left;
        if (ol === '') {
            ol = 0;
        }
        else {
            ol = parseInt(ol, 10);
        }
        ol = ol - childwidth;
        listNews.style.transition = 'left 0.5s';
        listNews.style.left = ol + 'px';
    }

    function moveRightEdge() {
        var ol = listNews.style.left;
        if (ol === '') {
            ol = 0;
        }
        else {
            ol = parseInt(ol, 10);
        }
        ol = ol + childwidth;
        listNews.style.transition = 'left 0.5s';
        listNews.style.left = '0px';
    }

    function moveRight() {
        //if (check === 0)
          //  right.addEventListener('click', roll);
        window.clearInterval(z);
        btn.innerHTML = "play";

        var ol = listNews.style.left;
        if (ol === '') {
            ol = 0;
        }
        else {
            ol = parseInt(ol, 10);
        }
        if (moveCount === 0) {

            var newli = document.querySelectorAll('#listnews li');
            listNews.insertBefore(newli[newli.length - 1], newli[0]);
            ol = ol - childwidth;
            listNews.style.transition = 'left 0s';
            listNews.style.left = ol + 'px';

            window.setTimeout(moveRightEdge, 0);
        }
        else {
            ol += childwidth;
            listNews.style.left = ol + 'px';
            moveCount--;
        }
    }



    function showpic() {
        var x = window.event.srcElement;
        previewImg.src = x.src;
        //hid.innerHTML = hat1.innerHTML;
        //pid.innerHTML = pat1.innerHTML;
        //  console.log(x);
        var idx = x.getAttribute("myatt");
       // moveCount = idx;
        var title = document.getElementById(idx);
        hid.innerHTML = title.innerHTML;
        var id1 = x.getAttribute("myatt1");
        var para = document.getElementById(id1);
        pid.innerHTML = para.innerHTML;
        var id2 = (document.querySelectorAll('.article'));
        var id5 = Array.prototype.slice.call(id2, 0);
        var id6 = x.getAttribute("myid");
        link.href = "#" + id6;
    }

    function roll() {
//        debugger;
                if (btn.innerHTML == "pause") {
            window.clearInterval(z);
            btn.innerHTML = "play";
                            }
        else {
            z = window.setInterval(slider, 3000);
                                btn.innerHTML = "pause";
        }
    }
    
    //function hovered() {

    //    //var x = window.event.srcElement;
    //    //previewImg.src = x.src;
    //    showpic();
    //    //alert("121");
    //}

    left.addEventListener('click', moveLeft);


    right.addEventListener('click', moveRight);

    var ax;
    //listNews.addEventListener('mouseover', hovered);
    listNews.onmouseover = function (e) {
        ax = e.target;
        // if (ax.id >= 1 && ax.id <= 10) {

             var bx = ax.getAttribute('src');
             previewImg.src = bx;
             
             var idx = ax.getAttribute("myatt");
           
             var title = document.getElementById(idx);
             hid.innerHTML = title.innerHTML;
             var id1 = ax.getAttribute("myatt1");
             var para = document.getElementById(id1);
             pid.innerHTML = para.innerHTML;

             var id2 = (document.querySelectorAll('.article'));
             var id5 = Array.prototype.slice.call(id2, 0);
             var id6 = ax.getAttribute("myid");
             link.href = "#" + id6;
      //  }
             }

    listNews.addEventListener('click', showpic);
    btn.addEventListener('click', roll);
})();
