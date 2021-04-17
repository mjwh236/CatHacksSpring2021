let prompt = "user@CatHacks:~> ";
let text = "ssh exchangeServerAdmin@dfiing.net -c SHA256 -E logs.t"+
    "\n\`root password: ****************"+
    "\n^ \n\`passwordCracker -t exchangeServerAdmin@dfiing.net\n^\`"+
    "ls -a\n\^\n\`cd Confidential\nls -a\n\^\n\`cat StaticNetworkIPs.txt\n\^\`mysql -h 168.69.69.42 -p -u admin "+
    "\n\^****************\n\`USE admin;\n\^\n\`SHOW TABLES;\n\`SELECT fName, Lname WHERE SecurityClearence = 10;"+
    "\n\^\n\`SELECT DISTINCT TABLE_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME IN (\'admin\') AND"+
    " TABLE_SCHEMA=\'admin\' INTO OUTFILE \'tmp/pwned.txt\';"+
    "\n\`exit;\n\`scp -c SHA256 exchangeServerAdmin@dfiing.net /tmp/pwned.txt user@CatHacks:22 ~/word.txt"+
    "\n\`rm /tmp/pwned.txt\n\`";
let blockNum = 0;
let textIndex = 0;
let block = ["ACCESS DENIED",
    "--------------------------------------------------\nOffical DFIING Server\nDFIING Center for Information Technology Facility\nLinux 5.4.0-60-generic x86_64\n\nThis computer is for authorized users only.\n\n--------------------------------------------------\n",
    ".\n..\n.AMD\n.bash_history\n.bash_logout\n.bashrc\n.cache\nConfidential\n.java\n.local\n.minecraft\n.mozilla\n.npm\n.nvm\n.putty\nsnap\n.vim\n.viminfo\n.wget-hsts",
    ".\n..\nStaticNetworkIPs.txt\n",
    "admin: 1.0.0.0\nFTPserver: 1.0.0.1\nlogsServer: 128.0.0.1\nserviceWorker: 1.0.0.0\nmysqlserver: 168.69.69.42\n",
    "Enter Password: ",
    "+-------------------+\n| Tables_in_admin   |\n+-------------------+\n| employees         |\n| users             |\n| servers           |\n+-------------------+",
    "+-----------+--------------+\n| firstName | lastName     |\n+-----------+--------------+\n"+
    "| John      | Wick         |\n"+
    "| Tony      | Stark        |\n"+
    "| Stephen   | Strange      |\n"+
    "| Bob       | Doe          |\n"+
    "| Bowman    | Wildcat      |\n"+
    "| Kroger    | Market Place |\n"+
    "| Johnny    | Walker       |\n"+
    "| Jack      | Daniels      |\n"+
    "| Captain   | Morgan       |\n"+
    "| Jim       | Beam         |\n"+
    "| James     | Bond         |\n"+
    "| Vesper    | Lynd         |\n"+
    "| Pappy     | Winkle       |\n"+
    "| Elijah    | Craig        |\n+-----------+--------------+",
    ""];
let y = document.getElementById("terminal");
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', ';', ':', '[', '{', ']', '}',
    '\\', '|', '"', "'", ',', '<', '.', '>', '/', '?', ' '
];

var myVar = setInterval(matrix, 250);

y.innerHTML = prompt;

//Make the DIV element draggagle:
dragElement(document.getElementById("window"));

function cursorFlash(){
    var last = y.innerHTML;
    if(last.charAt(last.length - 1) === "|"){
        last = setCharAt(last, last.length - 1, "");
        y.innerHTML = last;
    }
}

function hackerKeyPress() {

    var last = y.innerHTML;
    if(last.charAt(last.length - 1) === "|"){
        last = setCharAt(last, last.length - 1, "");
        y.innerHTML = last;
    }

    if(text.charAt(textIndex) == "^"){
        if(blockNum == 1){
            prompt = "root:~> "
        }
        y.innerHTML += block[blockNum];
        blockNum++;
    } else if(text.charAt(textIndex) == "\`"){
        y.innerHTML += prompt;
    } else {
        var str = y.innerHTML;
        str += text.charAt(textIndex) + "|";
        //y.innerHTML += text.charAt(textIndex);
        y.innerHTML = str;
    }

    textIndex++;
}


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    }
}


function rand() {
    var str = "";
    for (var i = 1; i < 97; i++) {
        var r1 = Math.round(Math.random() * (alpha.length - 1));
        var r2 = Math.round(Math.random() * (alpha.length - 1));
        var r3 = Math.round(Math.random() * (alpha.length - 1));
        var r4 = Math.round(Math.random() * (alpha.length - 1));
        var r5 = Math.round(Math.random() * (alpha.length - 1));
        var r6 = Math.round(Math.random() * (alpha.length - 1));
        var r7 = Math.round(Math.random() * (alpha.length - 1));
        var r8 = Math.round(Math.random() * (alpha.length - 1));
        var r9 = Math.round(Math.random() * (alpha.length - 1));
        var r0 = Math.round(Math.random() * (alpha.length - 1));

        var curr = str;
        if (i % 6 == 0) {
            str = curr + alpha[r1] + alpha[r2] + alpha[r3] + alpha[r4] + alpha[r5] + alpha[r6] + alpha[r7] + alpha[r8] + alpha[r9] + alpha[r0] + "\n";
        } else {
            str = curr + alpha[r1] + alpha[r2] + alpha[r3] + alpha[r4] + alpha[r5] + alpha[r6] + alpha[r7] + alpha[r8] + alpha[r9] + alpha[r0];
        }

    }
    return str;
}

function matrix() {
    var m = rand();
    let y = document.getElementById("matrixText");
    y.innerText = m;
}

function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}