
const form = document.getElementById('signatureForm');
const fullNameInput = document.getElementById('fullName');
const positionInput = document.getElementById('position');
const contactInput = document.getElementById('contact');


const previewName = document.querySelector('.full-name');
const previewPosition = document.querySelector('.position');
const previewPhone = document.querySelector('.phone');


const defaultData = {
    name: 'Nombre y Apellido',
    position: 'Puesto/Sector',
    contact: 'Interno/Celular'
};

const themeConfig = {
    dark: {
        background: 'https://i.imgur.com/pbVphtP.jpeg',
        nameColor: '#FFE211',
        textColor: '#FFFFFF',
        icons: {
            phone: 'https://i.imgur.com/8QrlCi5.png',
            web: 'https://i.imgur.com/ciXzWzR.png',
            instagram: 'https://i.imgur.com/OcRfP7S.png',
            facebook: 'https://i.imgur.com/cdr84ye.png',
            x: 'https://i.imgur.com/XIGEmpr.png'
        }
    },
    light: {
        background: 'https://i.imgur.com/QDIR9QC.jpeg',
        nameColor: '#1C4235',
        textColor: '#525252',
        icons: {
            phone: 'https://i.imgur.com/hyU2IF1.png',
            web: 'https://i.imgur.com/bdreyp9.png',
            instagram: 'https://i.imgur.com/pITkrTD.png',
            facebook: 'https://i.imgur.com/JvyjtRS.png',
            x: 'https://i.imgur.com/mn9mpUD.png'
        }
    }
};

let currentTheme = 'dark';


function updatePreview() {
    const fullName = fullNameInput.value.trim() || defaultData.name;
    const position = positionInput.value.trim() || defaultData.position;
    const contact = contactInput.value.trim() || defaultData.contact;
    
    const theme = themeConfig[currentTheme];
    
    const previewContainer = document.getElementById('previewSignature');
    previewContainer.innerHTML = `
        <div style="width: 500px; height: 150px; background-image: url('${theme.background}'); background-size: cover; background-position: center; background-repeat: no-repeat; font-family: Arial, sans-serif; padding: 32px 32px; display: flex; align-items: center; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <div style="width: 65%;">
                <div style="font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; color: ${theme.nameColor}; margin: 0 0 4px 0; line-height: 1.1;">${fullName}</div>
                <div style="font-family: Arial, sans-serif; font-size: 16px; color: ${theme.textColor}; margin: 0 0 16px 0; line-height: 1.2;">${position}</div>
                <div style="margin: 0 0 16px 0; display: flex; align-items: center;">
                    <img src="${theme.icons.phone}" alt="Teléfono" style="width: 16px; height: 16px; margin-right: 8px;">
                    <span style="font-family: Arial, sans-serif; color: ${theme.textColor}; font-size: 14px;">${contact}</span>
                </div>
                <div style="margin: 8px 0 0 0; display: flex; gap: 16px; align-items: center;">
                    <a href="https://www.upcnecochea.com.ar" target="_blank" style="text-decoration: none;">
                        <img src="${theme.icons.web}" alt="Web" style="width: 18px; height: 18px;">
                    </a>
                    <a href="https://www.instagram.com/upcnecochea/?hl=es" target="_blank" style="text-decoration: none;">
                        <img src="${theme.icons.instagram}" alt="Instagram" style="width: 18px; height: 18px;">
                    </a>
                    <a href="https://www.facebook.com/p/UPC-Necochea-100063634868118/" target="_blank" style="text-decoration: none;">
                        <img src="${theme.icons.facebook}" alt="Facebook" style="width: 18px; height: 18px;">
                    </a>
                    <a href="https://x.com/necocheaupc" target="_blank" style="text-decoration: none;">
                        <img src="${theme.icons.x}" alt="X" style="width: 18px; height: 18px;">
                    </a>
                </div>
            </div>
            <div style="width: 35%; text-align: right;">
            </div>
        </div>
    `;
}


function getLogoURL() {

    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return './logoupc.png';
    }

    const baseURL = window.location.origin + window.location.pathname.replace('/index.html', '').replace(/\/$/, '');
    return `${baseURL}/logoupc.png`;
}


function generateSignatureHTML() {
    const fullName = fullNameInput.value.trim() || defaultData.name;
    const position = positionInput.value.trim() || defaultData.position;
    const contact = contactInput.value.trim() || defaultData.contact;
    
    const theme = themeConfig[currentTheme];
    
    return `<table cellpadding="0" cellspacing="0" border="0" style="width: 500px; height: 150px; background-image: url('${theme.background}'); background-size: cover; background-position: center; background-repeat: no-repeat; font-family: Arial, sans-serif;">
<tr>
    <td style="padding: 32px 32px; vertical-align: middle;">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; height: 100%;">
        <tr>
            <td style="vertical-align: middle; width: 65%;">
                <div style="font-family: Arial, sans-serif; font-size: 20px; font-weight: bold; color: ${theme.nameColor}; margin: 0 0 4px 0; line-height: 1.1;">${fullName}</div>
                <div style="font-family: Arial, sans-serif; font-size: 16px; color: ${theme.textColor}; margin: 0 0 16px 0; line-height: 1.2;">${position}</div>
                <table cellpadding="0" cellspacing="0" border="0" style="margin: 0 0 16px 0;">
                <tr>
                    <td style="vertical-align: middle; padding-right: 8px;">
                        <img src="${theme.icons.phone}" alt="Teléfono" width="16" height="16" style="display: block;">
                    </td>
                    <td style="vertical-align: middle;">
                        <span style="font-family: Arial, sans-serif; color: ${theme.textColor}; font-size: 14px;">${contact}</span>
                    </td>
                </tr>
                </table>
                <table cellpadding="0" cellspacing="0" border="0" style="margin: 8px 0 0 0;">
                <tr>
                    <td style="padding-right: 16px; vertical-align: middle;">
                        <a href="https://www.upcnecochea.com.ar" target="_blank" style="text-decoration: none;">
                            <img src="${theme.icons.web}" alt="Web" width="18" height="18" style="display: block;">
                        </a>
                    </td>
                    <td style="padding-right: 16px; vertical-align: middle;">
                        <a href="https://www.instagram.com/upcnecochea/?hl=es" target="_blank" style="text-decoration: none;">
                            <img src="${theme.icons.instagram}" alt="Instagram" width="18" height="18" style="display: block;">
                        </a>
                    </td>
                    <td style="padding-right: 16px; vertical-align: middle;">
                        <a href="https://www.facebook.com/p/UPC-Necochea-100063634868118/" target="_blank" style="text-decoration: none;">
                            <img src="${theme.icons.facebook}" alt="Facebook" width="18" height="18" style="display: block;">
                        </a>
                    </td>
                    <td style="vertical-align: middle;">
                        <a href="https://x.com/necocheaupc" target="_blank" style="text-decoration: none;">
                            <img src="${theme.icons.x}" alt="X" width="18" height="18" style="display: block;">
                        </a>
                    </td>
                </tr>
                </table>
            </td>
            <td style="vertical-align: middle; text-align: right; width: 35%;">
            </td>
        </tr>
        </table>
    </td>
</tr>
</table>`;
}




async function copyHtmlSignature() {
    try {
        const signatureHTML = generateSignatureHTML();
        

        if (navigator.clipboard) {
            await navigator.clipboard.writeText(signatureHTML);
            showAlert('✓ Firma HTML copiada al portapapeles', 'success');
        } else {

            const textArea = document.createElement('textarea');
            textArea.value = signatureHTML;
            textArea.style.position = 'absolute';
            textArea.style.left = '-9999px';
            document.body.appendChild(textArea);
            textArea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textArea);
            
            if (success) {
                showAlert('✓ Firma HTML copiada al portapapeles', 'success');
            } else {
                throw new Error('execCommand failed');
            }
        }
        
    } catch (error) {
        console.error('Error al copiar HTML:', error);
        showAlert('❌ Error al copiar HTML', 'error');
    }
}




function showAlert(message, type = 'success') {
    const alertContainer = document.getElementById('alertContainer');
    

    if (!alertContainer) {
        console.error('Alert container not found');
        alert(message);
        return;
    }
    

    const alertElement = document.createElement('div');
    

    alertElement.style.cssText = `
        background: #28a745 !important;
        color: white !important;
        padding: 1rem 1.5rem !important;
        border-radius: 8px !important;
        margin-bottom: 10px !important;
        font-weight: 500 !important;
        font-size: 0.95rem !important;
        font-family: Arial, sans-serif !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
        opacity: 0 !important;
        transform: translateX(100%) !important;
        transition: all 0.3s ease !important;
        pointer-events: auto !important;
        max-width: 300px !important;
        word-wrap: break-word !important;
        display: block !important;
        position: relative !important;
    `;
    
    // Agregar clases CSS también
    alertElement.className = `alert ${type}`;
    alertElement.textContent = message;
    
    // Aplicar color según el tipo
    if (type === 'error') {
        alertElement.style.background = '#dc3545 !important';
    } else if (type === 'warning') {
        alertElement.style.background = '#ffc107 !important';
        alertElement.style.color = '#212529 !important';
    } else if (type === 'info') {
        alertElement.style.background = '#17a2b8 !important';
    }
    
    // Agregar al container
    alertContainer.appendChild(alertElement);
    
    // Mostrar con animación
    setTimeout(() => {
        alertElement.style.opacity = '1';
        alertElement.style.transform = 'translateX(0)';
        alertElement.classList.add('show');
    }, 10);
    

    setTimeout(() => {
        alertElement.style.opacity = '0';
        alertElement.style.transform = 'translateX(100%)';
        alertElement.classList.remove('show');
        setTimeout(() => {
            if (alertContainer.contains(alertElement)) {
                alertContainer.removeChild(alertElement);
            }
        }, 300);
    }, 3000);
}


function toggleTheme() {
    const themeToggle = document.getElementById('themeToggle');
    currentTheme = themeToggle.checked ? 'light' : 'dark';
    updatePreview();
}

function validatePhoneInput(event) {
    const char = String.fromCharCode(event.which);
    const isNumber = /[0-9]/.test(char);
    const isSpace = char === ' ';
    const isPlus = char === '+';
    const isValidChar = isNumber || isSpace || isPlus;
    
    if (!isValidChar) {
        event.preventDefault();
        return false;
    }
    
    const currentValue = event.target.value;
    if (currentValue.length >= 20 && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        return false;
    }
    
    return true;
}

function cleanPhoneInput(event) {
    const input = event.target;
    const cleaned = input.value.replace(/[^0-9\s+]/g, '');
    const truncated = cleaned.substring(0, 20);
    
    if (input.value !== truncated) {
        input.value = truncated;
        updatePreview();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const copyHtmlButton = document.getElementById('copyHtmlButton');
    const themeToggle = document.getElementById('themeToggle');

    fullNameInput.addEventListener('input', updatePreview);
    positionInput.addEventListener('input', updatePreview);
    contactInput.addEventListener('input', updatePreview);
    copyHtmlButton.addEventListener('click', copyHtmlSignature);
    themeToggle.addEventListener('change', toggleTheme);
    contactInput.addEventListener('keypress', validatePhoneInput);
    contactInput.addEventListener('input', cleanPhoneInput);

    fullNameInput.addEventListener('input', validateForm);
    positionInput.addEventListener('input', validateForm);
    contactInput.addEventListener('input', validateForm);

    validateForm();
    updatePreview();
});


function validateForm() {
    const isValid = fullNameInput.value.trim() && 
                   positionInput.value.trim() && 
                   contactInput.value.trim();
    
    const copyHtmlButton = document.getElementById('copyHtmlButton');
    

    if (copyHtmlButton) {
        copyHtmlButton.disabled = !isValid;
        if (isValid) {
            copyHtmlButton.style.opacity = '1';
            copyHtmlButton.style.cursor = 'pointer';
        } else {
            copyHtmlButton.style.opacity = '0.6';
            copyHtmlButton.style.cursor = 'not-allowed';
        }
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
});


updatePreview();
