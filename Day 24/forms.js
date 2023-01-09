const loginForm = document.getElementById('login');

loginForm.addEventListener(
    "submit",
    (e) => {
        e.preventDefault();
        const username = document.querySelector('#username');
        const password = document.querySelector('#password');

        console.log(`Username is: ${username.value} \n Password is: ${password.value}`);
    }
);

const fruitForm = document.querySelector('#fruits');

fruitForm.addEventListener(
    "submit",
    (event) => {
        /*
        1. Prevent default from submission
        2. Get the value of fruit and quantity
        3. Create a new li element
        4. Create a new li element, set the text of new li element to include fruit and quantity (e. g. 99 Apple)
        5. Append the new li element to the ul#list
        6. Reset inputs / set input value to empty
        */
       event.preventDefault();
    //    const fruit = document.querySelector('#fruit');
    //    const quantity = document.querySelector('#quantity');
    //    const list = document.getElementById("list");
    //    const li = document.createElement("li");
    //    li.appendChild(document.createTextNode(`${fruit.value}, ${quantity.value}`));
    //    list.appendChild(li);
    //    fruitForm.reset();
        

        const fruit = document.querySelector('#fruit');
        const quantity = document.querySelector('#quantity');
        // inputElement.value
        const item = document.createElement('li');
        // item.innerText = `${quantity.value} ${frui.value}`
        // item.textContent = `${quantity.value} ${fruit.value}`
        item.append(`${quantity.value}, ${fruit.value}`);

        list.append(item);

        // reset form element
        fruitForm.reset();

        // set input value to empty
        // quantity.value = "";
        // fruit.value = "";
    }
)







