//1. Write the code to access element which is having id as "text"
console.log(document.getElementById("text1"));


// 2.  Write the code to access element which is having tag as "h1"
console.log(document.getElementsByTagName("h1")[0]);


// 3.  Write the code to access element which is having class as "box"
console.log(document.getElementsByClassName("box")[0]);


// 4.  Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
const changeTxt = document.getElementById("helloWorld");
changeTxt.innerHTML = "Hello World";

// 5.  Create three cards on HTML page and arrange them using flex property in row or horizontal direction 
//     and also create button at the bottom named "Change Flex direction".When user clicks on this button,
//     the cards arrangement should be changed to vertical direction.
function changeDirection() {
    const element1 = document.getElementsByClassName("containor");
    element1[0].style.flexDirection = "column";
}

// 6.  "<h1>Hello </h1>
//      Add one style attribute and give text color as red and id attribute and 
//      give the id value as ""heading"" in the above given h1 tag using DOM functions"
const element2 = document.getElementsByTagName("h1")[2];
element2.setAttribute("id", "headding");
console.log(element2);
element2.style.color = "red";


// Create an HTML page having content as Hello world and a button named Replace Text. 
// When user will click on this button page content should be changed to "Welcome to Elevation academy"
function replaceTexts() {
    const textChange = document.getElementById("replace");
    textChange.innerText = "Welcome to Elevation academy";
}


// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second
function clock() {
    const hours = document.getElementById("hour");
    const minuts = document.getElementById("minut");
    const seconds = document.getElementById("second");
    let time = new Date();
    hours.innerText = time.getHours();;
    minuts.innerText = time.getMinutes();
    seconds.innerText = time.getSeconds();
}
clock();
setInterval(clock, 1000);


// Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
function yearSelected(e){
    e.preventDefault();
    const getData= document.getElementById("year").value;
    console.log(getData);
}


//     "Create a form having name ,email, phone no. , birth year 
//     Add validations - phone no. should start with 91 , it should be 10 digits
//     email should be domain prepbytes.com
//     birth year should be > 95"
function bioData(event){
    event.preventDefault();
    console.log(event);
    let name = event.target[0].value;
    let email = event.target[1].value;
    let phone = event.target[2].value;

    if(phone.length != 10){
        let err_div = document.getElementById('error');
        err_div.style.display = "block";
        err_div.innerHTML = "Phone Number Should Be 10digits and start with 91";
        
        const dataShow1 = document.getElementById("dataShow");
        dataShow1.innerHTML=name +"\n"+ email + "\n" + phone;
        dataShow1.style.display="block";
    }
    
}