function task1() {

    // TASK 1 starts below
    function adderFunc(fixed_num) // fixed_num is a local variable (Parameter) created by adderFunc
    {
        return function (num) 
        {// This inner function forms the closure
            return num + fixed_num; // uses fixed_num variable declared in the parent function
        }
    }

    let specificNum = 5;       // any specific number
    let any_num = +prompt(`Enter any number to add in the ${specificNum} using closure`);
    const add_into_specificNum = adderFunc(specificNum);

    let answer = add_into_specificNum(any_num); //adds any number into a specific number

    // writing on console
    console.log(answer);

    // writing on HTML page
    let para = document.getElementById("q1");

    para.innerHTML = "<strong>OUTPUT:</strong><br>   The Closure returns "+answer+" after adding "+specificNum+" and "+any_num;
    para.style.color = "#0000ff";
}

function task2() {

    // TASK 2 starts below

    
    function searchValue(arrayToBeSearched, i, max, k) 
    {
        if (arrayToBeSearched[i] == k)
        {
            return true;
        }
        else if (i < max && arrayToBeSearched[i] != k)
        {
            return searchValue(arrayToBeSearched, i + 1, max, k);  //Recursive Function
        }
        else if (i == max)
        {
            return false;
        }
    }
    let arr = [1, 9, 3, 10];
    let key = +prompt(`Array: [ ${arr} ] Enter any specific value to find in this Array?`);

    let index = 0;
    let foundStatus = searchValue(arr, index, arr.length, key);

    // writing on console
    console.log(foundStatus);

    // writing on HTML page
    let para = document.getElementById("q2");

    para.innerHTML = "<strong>OUTPUT:</strong><br>   The given Key Found or Not (True/False)? "+foundStatus+" (status)";
    para.style.color = "#0000ff";
}

function task3() {

    //      function taking string argument that will be
    //      used as the text content of the new paragraph element
    function addTextContent (newString) 
    {
        let htmlLast = document.body;
        let lastPara = document.createElement("p");
        lastPara.setAttribute("id","lastP");

        lastPara.innerHTML = "<strong><em>OUTPUT of Question 3:</em></strong><br>";
        lastPara.style.color = "#0000ff";                   // styling the new paragraph content    
        
        
        let pNode = document.createTextNode(newString);
        lastPara.appendChild(pNode);                    // adding content to new paragraph element
    
        htmlLast.appendChild(lastPara);            // adding new paragraph element to the last of HTML body
    }

    let newParagraphString = prompt("Give the String Statement that will be used as the text content of the new paragraph at the bottom of this HTML page...");
    
    // Calling function to add text content at the bottom
    addTextContent(newParagraphString);

    // writing on HTML page
    let para = document.getElementById("q3");

    para.innerHTML = "<strong>OUTPUT:</strong><br>   Scroll down to the bottom of HTML page to see the output";
    para.style.color = "#0000ff";

}

function task4() {

    //      function taking string argument that will be
    //      added as the new list item in an ordered list
    function addToList (newItem) 
    {
        let divElement = document.getElementById("q4");

        let uoList = document.createElement("ul");
        uoList.setAttribute("id","myUL");

        divElement.appendChild(uoList);


        let liElement = document.createElement("li");
        let liText = document.createTextNode(newItem);
        liElement.appendChild(liText);

        document.getElementById("myUL").appendChild(liElement);  // adding new list item to unordered list

        // liElement.innerHTML = `<strong><em>${newItem}</em></strong>`;
        uoList.style.color = "#237900";                   // styling unordered list   
    }


    let newListItem = prompt("Enter a List item that will be added to the Unordered List...");
    
    // Calling function to add text list items in unordered list
    addToList(newListItem);
}

function task5() {

    //      function changes the background color of an HTML element
    //      he first argument is a reference to the HTML element, and 
    // the second argument is a string representing the new background color
    function changeBG (elementReference, colorName) 
    {
        elementReference.style.backgroundColor = colorName;   
    }
    let bgColor = prompt("Enter an background color...");

    let divReference = document.getElementById("q5");

    // Calling function to change background color of html element
    changeBG(divReference, bgColor);
}

function task6() {

    let employee = 
    {
        name: prompt("Enter name of employee: "),
        id : +prompt("Enter ID number of employee: "),
        designation: prompt("Enter Designation: "),
        age: +prompt("Enter age of employee: "),
        married: prompt("Married ? (true or false)? ")
    };
    console.log(employee);

    function setLocalStorage(key, object)   //function that saves an object to localStorage
    {
        // Convert the object into JSON string and save it into localstorage
        localStorage.setItem(key, JSON.stringify(object));
    }

    // first argument is any string representing the key to use for storing the object 
    //      and the second argument is the object to store.

    let keyToStore = "worker";
    setLocalStorage(keyToStore, employee);

    // writing on HTML page
    let para = document.getElementById("q6");

    para.innerHTML = "<strong>OUTPUT:</strong><br>   Following object has been stored to LocalStorage with Key: "+keyToStore+"<br>   "+JSON.stringify(employee);
    para.style.color = "#0000ff";
}

function task7() {

    function getLocalStorage(key)   //function that retrieves an object from localStorage
    {
        // retrieves JSON string
        return localStorage.getItem(key);
    }

    let keyToStore = "worker";

    // An argument is a string representing the key used to store the object.
    let jsonString = getLocalStorage(keyToStore);

    // Parse the JSON string back to JS object
    let employeeObject = JSON.parse(jsonString);
    console.log(employeeObject);
    // writing on HTML page
    let para = document.getElementById("q7");

    para.innerHTML = "<strong>OUTPUT:</strong><br>   Following object has been retrieved from LocalStorage with Key: "+keyToStore+"<br>   "+JSON.stringify(employeeObject);
    para.style.color = "#0000ff";
}

function task8() {

    let employee = 
    {
        name: prompt("Enter name of employee: "),
        id : +prompt("Enter ID number of employee: "),
        designation: prompt("Enter Designation: "),
        age: +prompt("Enter age of employee: "),
        married: prompt("Married ? (true or false)? ")
    };
    console.log(employee);

    function setngetLocalStorage(obj)      //function that takes an object and saves each property to
    {                                           //localStorage using the property name as the key and the 
    //                                              property value as the value
       
        propertyName = Object.keys(obj);            // extracting keys
        lenObj = propertyName.length;                    // number of key-value pair in object
        propertyValue = Object.values(obj);         // extracting values

        let i; // loop variable

        for (i = 0; i < lenObj; i++)
        {
            localStorage.setItem(propertyName[i], propertyValue[i]);
        }

        newObj = {
            //declaration of a new object
        }

        for (i = 0; i < localStorage.length; i++)
        {
            newObj[localStorage.key(i)] = localStorage.getItem(localStorage.key(i))
        }
        // returning new object
        return newObj;
    }

    localStorage.clear();           // clearing all previous data in LocalStorage
    //                              sending an object as argument 
    let objectNew = setngetLocalStorage(employee);

    console.log(objectNew);

    // writing on HTML page
    let para = document.getElementById("q8");

    para.innerHTML = "<strong>OUTPUT:</strong><br>   Following object has been retrieved from LocalStorage<br>   "+JSON.stringify(objectNew);
    para.style.color = "#0000ff";

}