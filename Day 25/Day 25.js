const btnRadio = document.querySelector('#btnRadio');

btnRadio.addEventListener(
    "click",
    () => {
        // <input type="radio" name="radbtn" id="radbtn1" value="radbtn1" checked>
        const checked = document.querySelector("input[name='radbtn']:checked");
        alert(checked.value);
    }
);

const radBtn = document.querySelectorAll("input[name='radbtn']");
// [input, input, input] (Node List)

radBtn.forEach(
    (el) => {
        el.addEventListener(
            'change',
            (e) => {
                // e.target.value
                alert(e.target.value);
            }
        );
    }
);


const firstName = document.querySelector('#firstName');
const output = document.querySelector('#output');

firstName.addEventListener(
    'change',
    (e) => {
        output.innerText = `Hello, ${e.target.value}!`
    }
);

const nickname = document.getElementById('nickname');
const nicknameOutput = document.getElementById('nicknameOutput');

let timer;

nickname.addEventListener(
    'input',
    (e) => {
        // debounce / debouncing
        // setTimeout(callback, millisecond)
        clearTimeout(timer);
        
        timer = setTimeout(
            () => {
               nicknameOutput.innerText = `Hi, ${e.target.value}!`; 
               console.log(e.target.value);
            },
            1000
        );

    }
);
// programming tutorials

const checkAll = document.querySelector('#checkAll');
const checkboxes = document.querySelectorAll("input[name='check'")

checkAll.addEventListener(
    'click',
    (e) => {
        // e.target.checked
        const checked = e.target.checked;

        checkboxes.forEach(
            (checkbox) => {
                checkbox.checked = checked;
            }
        );


    }
);

/*
    When toggle button is clicked:
        1. If 1 or more checkboxes is unchecked, check all
        2. Else, uncheck all

    assume all checkboxes are checked
    lete allChecked = true;

    loop for each checkbox in checkboxes collection
        If 1 or more checkboxes is not checked, allChecked = false 

        if ( !allChecked = true ) {
            // check all checkboxes
        }
        else {
            // unchecked all checkboxes
        }
*/

const btnToggle = document.querySelector('#toggle');
const colors = document.querySelectorAll('input[name="color"]')
// [input , input, input, input]

btnToggle.addEventListener(
    "click",
    () => {
        let allChecked = true;

        colors.forEach(
            (color) => {
                if( !color.checked ) {
                    allChecked = false;
                }
            }
        );

        if ( !allChecked ) {
            // check all checkboxes
            colors.forEach(
                (color) => {
                    color.checked = true;
                }
            )
        }
        else {
            // unchecked all checkboxes
            colors.forEach( color => color.checked = false );
        }
    }
);

