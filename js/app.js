//-----------------Loaded phones data---------------------
const loadPhoneData = () => {
    const inputField = document.getElementById('input-field');
    const inputText = (inputField.value).toLowerCase();
    inputField.value = '';
    const error = document.getElementById('error')
    error.innerText = ''
    if (inputText == "") {
        error.innerText = 'please insert a name to see your favorite phone';
    }
    else if (inputText >= 0) {
        error.innerText = 'You can not input any number Please insert brand name that you want';
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}
        `;
        fetch(url)
            .then((Response) => Response.json())
            .then(data => displayPhones(data.data.slice(0, 20)));
    };
};
