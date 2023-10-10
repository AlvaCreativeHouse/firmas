import { template } from './table.js';

const company = ['Alva Creative House', 'Alva', 'ReAcción', 'Empathy'];
const logo = ['https://alvacreativehouse.github.io/firmas/img/ach-logo.png', 'https://alvacreativehouse.github.io/firmas/img/alva-logo.png', 'https://alvacreativehouse.github.io/firmas/img/reaccion-logo.png', 'https://alvacreativehouse.github.io/firmas/img/empathy-logo.png'];
const mainLogo = ['https://alvacreativehouse.github.io/firmas/img/ach-main.png', 'https://alvacreativehouse.github.io/firmas/img/alva-main.png', 'https://alvacreativehouse.github.io/firmas/img/reaccion-main.png', 'https://alvacreativehouse.github.io/firmas/img/empathy-main.png'];

const url = ['https://www.alvacreativehouse.com', 'https://www.alva.com.uy/', 'https://reaccion.com.uy/', 'https://www.empathylearn.com/'];
const instagram = ['https://www.instagram.com/alvacreativehouse/', 'https://www.instagram.com/alvacreativehouse/', 'https://www.instagram.com/reaccionlatam/', 'https://www.instagram.com/empathy.latam/'];
const linkedin = ['https://www.linkedin.com/company/alva-creative-house/', 'https://www.linkedin.com/company/alva-creative-house/', 'https://www.linkedin.com/company/reaccion-latam', 'https://www.linkedin.com/company/empathylearn'];
const alt = ['Logo de Alva Creative House', 'Logo de Alva', 'Logo de Reacción', 'Logo de Empathy'];
const aria = ['Recuadro negro con bordes redondeado con un rayo en su interior.', 'Una línea que conforma la palabra Alva.', 'Tres flechas quebradas que se señalan entre sí.', 'Una letra E formada de partes de puzzle.'];

function getContactWays(mail, whatsapp, cell) {
    const links = [];

    if (mail) {
        links.push(`<a href="mailto:${mail}" target="__blank">mail</a>`);
    }
    if (whatsapp) {
        links.push(`<a href="https://wa.me/+598${whatsapp}" target="__blank">whatsapp</a>`);
    }
    if (cell) {
        links.push(`<a href="Tel:+598${cell}" target="__blank">teléfono</a>`);
    }

    if (links.length === 3) {
        return `${links[0]}, ${links[1]} o ${links[2]}`;
    } else if (links.length === 2) {
        return `${links[0]} o ${links[1]}`;
    } else if (links.length === 1) {
        return `${links[0]}`;
    }
    return "";
}

function checkOtherPronoun() {
    const genderSelect = document.getElementById('genderSelect');
    const otherPronounDiv = document.getElementById('otherPronounDiv');
    const otherPronounInput = document.getElementById('otherPronoun');

    if (genderSelect.value === 'Otro') {
        otherPronounDiv.style.display = 'block';
        otherPronounInput.required = true;
    } else {
        otherPronounDiv.style.display = 'none';
        otherPronounInput.required = false;
    }
}

function isValidForm() {
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const genderSelect = document.getElementById('genderSelect').value;
    const otherPronoun = document.getElementById('otherPronoun').value;
    const companyRadios = document.getElementsByName('company');
    const companySelected = [...companyRadios].some(radio => radio.checked);
    const mail = document.getElementById('mail').value;
    let cell = document.getElementById('cell').value.trim();
    let whatsapp = document.getElementById('whatsapp').value.trim();

    if (!name) {
        document.getElementById("nameError").textContent = 'El campo Nombre y Apellido es obligatorio.';
        return false;
    }

    if (name.length > 50) {
        document.getElementById("nameError").textContent = 'El nombre y apellido no pueden exceder los 50 caracteres.';
        return false;
    }

    if (name.split(" ").filter(Boolean).length < 2) {
        document.getElementById("nameError").textContent = 'Por favor, ingrese al menos un nombre y un apellido.';
        return false;
    }

    if (!role) {
        document.getElementById("roleError").textContent = 'El campo Puesto es obligatorio.';
        return false;
    }

    if (role.length > 50) {
        document.getElementById("roleError").textContent = 'El puesto no puede exceder los 50 caracteres.';
        return false;
    }

    if (!companySelected) {
        document.getElementById("companyError").textContent = 'Por favor, seleccione una empresa.';
        return false;
    }

    if (!mail) {
        document.getElementById("mailError").textContent = 'El campo Mail es obligatorio.';
        return false;
    }

    if (!isValidEmail(mail)) {
        document.getElementById("mailError").textContent = 'El formato del correo electrónico es incorrecto.';
        return false;
    }

    if (genderSelect === 'Otro' && otherPronoun === '') {
        document.getElementById("genderError").textContent = 'Por favor, especifique el pronombre.';
        return false;
    }

    if (cell !== '') {

        cell = cell.replace(/^(\+598|00598|0)/, '');

        if (!/^[0-9]+$/.test(cell)) {
            document.getElementById("cellError").textContent = 'El número de teléfono no es válido.';
            return false;
        }

        document.getElementById('cell').value = cell;
    }

    if (whatsapp !== '') {

        whatsapp = whatsapp.replace(/^(\+598|00598|0)/, '');

        if (!/^[0-9]+$/.test(whatsapp)) {
            document.getElementById("whatsappError").textContent = 'El número de WhatsApp no es válido.';
            return false;
        }

        document.getElementById('whatsapp').value = whatsapp;
    }

    return true;
}

document.getElementById('name').oninput = function() {
    const name = this.value;

    if (!name) {
        document.getElementById("nameError").textContent = 'El campo Nombre y Apellido es obligatorio.';
        return;
    }

    if (name.split(" ").filter(Boolean).length < 2) {
        document.getElementById("nameError").textContent = 'Por favor, ingrese al menos un nombre y un apellido.';
        return;
    }

    if (name.length > 50) {
        document.getElementById("nameError").textContent = 'El nombre y apellido no pueden exceder los 50 caracteres.';
        return;
    }

    document.getElementById("nameError").textContent = '';
};

document.getElementById('role').oninput = function() {
    const role = this.value;

    if (!role) {
        document.getElementById("roleError").textContent = 'El campo Puesto es obligatorio.';
        return;
    }
    if (role.length > 50) {
        document.getElementById("roleError").textContent = 'El puesto no puede exceder los 50 caracteres.';
        return;
    }

    document.getElementById("roleError").textContent = '';
};

document.getElementById('genderSelect').onchange = function() {
    checkOtherPronoun();
    const gender = this.value;
    const otherPronoun = document.getElementById('otherPronoun').value;

    if (gender === 'Otro' && !otherPronoun) {
        document.getElementById("genderError").textContent = 'Por favor, especifique el pronombre.';
        return;
    }

    document.getElementById("genderError").textContent = '';
};

document.getElementById('otherPronoun').oninput = function() {
    const otherPronoun = this.value;

    if (!otherPronoun) {
        document.getElementById("genderError").textContent = 'Por favor, especifique el pronombre.';
        return;
    }

    document.getElementById("genderError").textContent = '';
};

document.getElementById('mail').oninput = function() {
    const mail = this.value;
    const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!mail) {
        document.getElementById("mailError").textContent = 'El campo Mail es obligatorio.';
        return;
    }

    if (!mailRegex.test(mail)) {
        document.getElementById("mailError").textContent = 'Introduce un formato de correo válido.';
        return;
    }

    document.getElementById("mailError").textContent = '';
};

document.getElementById('cell').oninput = function() {
    const cell = this.value;

    if (cell !== '') {
        if (!/^[0-9]+$/.test(cell)) {
            document.getElementById("cellError").textContent = 'El número de teléfono no es válido.';
            return;
        }
    }

    document.getElementById("cellError").textContent = '';
};

document.getElementById('whatsapp').oninput = function() {
    const whatsapp = this.value;

    if (whatsapp !== '') {
        if (!/^[0-9]+$/.test(whatsapp)) {
            document.getElementById("whatsappError").textContent = 'El número de WhatsApp no es válido.';
            return;
        }
    }

    document.getElementById("whatsappError").textContent = '';
};


function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

document.querySelectorAll('[name="company"]').forEach(radio => {
    radio.onchange = function() {
        document.getElementById("companyError").textContent = '';
    };
});

function generateSignature() {

    if (!isValidForm()) {
        return;
    }

    const nameInput = document.getElementById('name').value.trim();
    const splitName = nameInput.split(' ', 3);

    const nameCapitalized = splitName.map(part => {
        const firstLetter = part.charAt(0).toUpperCase();
        const restOfWord = part.slice(1).toLowerCase();
        return firstLetter + restOfWord;
    }).join(' ');

    let splitNameCapitalized = nameCapitalized.split(' ', 3);
    let name;
    if (splitNameCapitalized.length > 1) {
        name = splitNameCapitalized[0] + "<br>" + splitNameCapitalized.slice(1).join(' ');
    }


    const roleRaw = document.getElementById('role').value;
    const role = roleRaw.toLowerCase().replace(/^(.)|\s(.)/g, function($1) {
        return $1.toUpperCase();
    });
    const mail = document.getElementById('mail').value;
    const cell = document.getElementById('cell').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const companyIndex = [...document.getElementsByName('company')].findIndex(radio => radio.checked);

    let contactSentence = `Prefiero que me contactes por ${getContactWays(mail, whatsapp, cell)}.`;

    let gender = document.getElementById('genderSelect').value;
    if (gender === 'Otro') {
        gender = document.getElementById('otherPronoun').value;
    }

    let signature = template;

    signature = signature.replace("{{contactSentence}}", contactSentence)
        .replace("{{main-logo}}", mainLogo[companyIndex])
        .replace("{{name}}", name)
        .replace("{{gender}}", gender)
        .replace("{{role}}", role)
        .replace("{{url}}", url[companyIndex])
        .replace("{{instagram}}", instagram[companyIndex])
        .replace("{{linkedin}}", linkedin[companyIndex])
        .replace("{{company}}", company[companyIndex].toUpperCase())
        .replace("{{companyFooter}}", company[companyIndex])
        .replace("{{alt}}", alt[companyIndex])
        .replace("{{aria}}", aria[companyIndex])
        .replace("{{logo}}", logo[companyIndex]);

    document.getElementById('signatureOutput').innerHTML = signature;
    document.getElementById('copyButton').style.display = 'flex';
    document.getElementById('signatureContainer').style.display = 'flex';

    if (gender == 'Prefiero no usar') {
        let celda = document.querySelector("#signatureOutput span");

        celda.innerHTML = '';

    }

    adjustSize()

    let signatureElement = document.getElementById("signatureContainer");

    Swal.fire({
        position: 'center-center',
        icon: 'success',
        title: '¡Firma generada!',
        showConfirmButton: false,
        timer: 1500,
        didClose: () => {
            signatureElement.scrollIntoView();
        }
    })
}

function copySignature() {
    const signatureOutput = document.getElementById('signatureOutput');

    const elementsToClean = signatureOutput.querySelectorAll('*');
    elementsToClean.forEach(element => {
        const inlineStyles = element.getAttribute('style');
        if (inlineStyles) {
            const cleanedStyles = inlineStyles
                .split(';')
                .filter(style => !style.trim().startsWith('--tw-'))
                .join(';');

            element.setAttribute('style', cleanedStyles);
        }
    });

    const range = document.createRange();
    range.selectNode(signatureOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    Swal.fire({
        position: 'center-center',
        icon: 'info',
        title: '¡Firma copiada!',
        showConfirmButton: false,
        timer: 1500
    });
}


function removeCellsContainingImages() {
    const table = document.querySelector("table");
    const images = table.querySelectorAll(".image-container");

    images.forEach(img => {
        img.remove();
    })

    const breakElement = table.querySelector("br");
    if (breakElement) {
        breakElement.outerHTML = " ";
    }
}

function goToTop() {
    let introContainer = document.getElementById("introContainer");
    introContainer.scrollIntoView();
}

function adjustSize() {

    const tdLogo = document.querySelector("td[width='53']");
    const logo = document.querySelector("img[width='43']");
    const tdName = document.querySelector("td[width='587']");
    const imageFooter = document.querySelector("img[width='430']");

    const companyIndex = [...document.getElementsByName('company')].findIndex(radio => radio.checked);

    companyIndex == 0 ? imageFooter.width = 294 : imageFooter.width = 430;

    if (companyIndex == 1) {
        logo.width = 80;
        tdLogo.width = 90;
        tdName.width = 550;
    } else if (companyIndex == 2) {
        logo.width = 65;
        tdLogo.width = 75;
        tdName.width = 565;
    } else if (companyIndex == 3) {
        logo.width = 50;
        tdLogo.width = 60;
        tdName.width = 580;
    } else {
        logo.width = 43;
        tdLogo.width = 53;
        tdName.width = 587;
    }
}

document.getElementById("removeImagesButton").addEventListener("click", removeCellsContainingImages);
document.getElementById("generateButton").addEventListener('click', generateSignature);
document.getElementById("copyButton").addEventListener('click', copySignature);
document.getElementById("reloadButton").addEventListener('click', goToTop);

const emailInput = document.getElementById('mail');

new Awesomplete('input[type="email"]', {
    list: ["alva.com.uy", "gmail.com"],
    data: function(text, input) {
        return input.slice(0, input.indexOf("@")) + "@" + text;
    },
    filter: Awesomplete.FILTER_STARTSWITH
});

emailInput.addEventListener('awesomplete-selectcomplete', function() {
    let event = new Event('input', {
        'bubbles': true,
        'cancelable': true
    });
    emailInput.dispatchEvent(event);
});