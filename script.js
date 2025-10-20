
const form = document.getElementById('signatureForm');
const fullNameInput = document.getElementById('fullName');
const positionInput = document.getElementById('position');
const contactInput = document.getElementById('contact');
const logoSelect = document.getElementById('logoSelect');


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
        background: './bgmail.svg',
        nameColor: '#FFE211',
        textColor: '#FFFFFF',
        icons: {
            phone: './icons/phone.png',
            web: './icons/web.png'
        }
    },
    light: {
        background: './bgmailwhite.svg',
        nameColor: '#1C4235',
        textColor: '#525252',
        icons: {
            phone: './iconswhite/phone.png',
            web: './iconswhite/web.png'
        }
    }
};

const logoConfig = {
    'main-upc': {
        normal: './logos/main-upc.png',
        white: './logos/main-upc-white.png',
        name: 'UPC Principal'
    },
    'usina-energia': {
        normal: './logos/usina-energia.png',
        white: './logos/usina-energia-white.png',
        name: 'Usina Energía'
    },
    'usina-fundacion': {
        normal: './logos/usina-fundacion.png',
        white: './logos/usina-fundacion-white.png',
        name: 'Usina Fundación'
    },
    'usina-internet': {
        normal: './logos/usina-internet.png',
        white: './logos/usina-internet-white.png',
        name: 'Usina Internet'
    },
    'usina-salud': {
        normal: './logos/usina-salud.png',
        white: './logos/usina-salud-white.png',
        name: 'Usina Salud'
    },
    'usina-sepelios': {
        normal: './logos/usina-sepelios.png',
        white: './logos/usina-sepelios-white.png',
        name: 'Usina Sepelios'
    }
};

let currentTheme = 'dark';
let currentLogo = 'main-upc';

function getCurrentLogoURL() {
    const logo = logoConfig[currentLogo];
    return currentTheme === 'dark' ? logo.white : logo.normal;
}

function updatePreview() {
    const fullName = fullNameInput.value.trim() || defaultData.name;
    const position = positionInput.value.trim() || defaultData.position;
    const contact = contactInput.value.trim() || defaultData.contact;

    const theme = themeConfig[currentTheme];
    
    const previewContainer = document.getElementById('previewSignature');
    previewContainer.innerHTML = `
        <div style="position: relative; width: 500px; height: 170px; font-family: Arial, sans-serif; padding: 32px; display: flex; align-items: center; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); overflow: hidden;">
            <img src="${theme.background}" alt="Background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;">
            <div style="width: 60%; position: relative; z-index: 2;">
                <div style="font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; color: ${theme.nameColor}; margin: 0 0 4px 0; line-height: 1.1; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">${fullName}</div>
                <div style="font-family: Arial, sans-serif; font-size: 16px; color: ${theme.textColor}; margin: 0 0 16px 0; line-height: 1.2; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">${position}</div>
                <div style="margin: 0 0 16px 0; display: flex; align-items: center;">
                    <img src="${theme.icons.phone}" alt="Teléfono" style="width: 16px; height: 16px; margin-right: 8px;">
                    <span style="font-family: Arial, sans-serif; color: ${theme.textColor}; font-size: 14px; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">${contact}</span>
                </div>
                <div style="margin: 8px 0 0 0; display: flex; align-items: center;">
                    <img src="${theme.icons.web}" alt="Web" style="width: 16px; height: 16px; margin-right: 8px;">
                    <a href="https://www.upcnecochea.com.ar" target="_blank" style="font-family: Arial, sans-serif; color: ${theme.textColor}; font-size: 14px; text-decoration: none; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">www.upcnecochea.com.ar</a>
                </div>
            </div>
            <div style="width: 40%; text-align: right; position: relative; z-index: 2;">
                <img src="${getCurrentLogoURL()}" alt="${logoConfig[currentLogo].name}" style="max-width: 170px; object-fit: contain;">
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
    
    return `<table cellpadding="0" cellspacing="0" border="0" style="width: 500px; height: 170px; background-image: url('${theme.background}'); background-size: cover; background-position: center; background-repeat: no-repeat; font-family: Arial, sans-serif;">
<tr>
    <td style="padding: 32px 32px; vertical-align: middle;">
        <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; height: 100%;">
        <tr>
            <td style="vertical-align: middle; width: 60%;">
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
            <td style="vertical-align: middle; text-align: right; width:40%;">
                <img src="${getCurrentLogoURL()}" alt="${logoConfig[currentLogo].name}" style="max-width: 120px; max-height: 60px; object-fit: contain;">
            </td>
        </tr>
        </table>
    </td>
</tr>
</table>`;
}

function createTempSignatureElement() {
    const fullName = fullNameInput.value.trim() || defaultData.name;
    const position = positionInput.value.trim() || defaultData.position;
    const contact = contactInput.value.trim() || defaultData.contact;
    
    const theme = themeConfig[currentTheme];
    
    const tempDiv = document.createElement('div');
    tempDiv.className = 'temp-signature';
    tempDiv.style.cssText = `
        position: absolute;
        top: -9999px;
        left: -9999px;
        width: 500px;
        height: 170px;
        font-family: Arial, sans-serif;
        padding: 32px;
        display: flex;
        align-items: center;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        overflow: hidden;
    `;
    
    tempDiv.innerHTML = `
        <img src="${theme.background}" alt="Background" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 0;">
        <div style="width: 60%; position: relative; z-index: 2;">
            <div style="font-family: Arial, sans-serif; font-size: 18px; font-weight: bold; color: ${theme.nameColor}; margin: 0 0 4px 0; line-height: 1.1; text-shadow: 0 1px 2px rgba(0,0,0,0.3);">${fullName}</div>
            <div style="font-family: Arial, sans-serif; font-size: 16px; color: ${theme.textColor}; margin: 0 0 16px 0; line-height: 1.2; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">${position}</div>
            <div style="margin: 0 0 16px 0; display: flex; align-items: center;">
                <img src="${theme.icons.phone}" alt="Teléfono" style="width: 16px; height: 16px; margin-right: 8px;">
                <span style="font-family: Arial, sans-serif; color: ${theme.textColor}; font-size: 14px; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">${contact}</span>
            </div>
            <div style="margin: 8px 0 0 0; display: flex; align-items: center;">
                <img src="${theme.icons.web}" alt="Web" style="width: 16px; height: 16px; margin-right: 8px;">
                <a href="https://www.upcnecochea.com.ar" target="_blank" style="font-family: Arial, sans-serif; color: ${theme.textColor}; font-size: 14px; text-decoration: none; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">www.upcnecochea.com.ar</a>
            </div>
        </div>
        <div style="width: 40%; text-align: right; position: relative; z-index: 2;">
            <img src="${getCurrentLogoURL()}" alt="${logoConfig[currentLogo].name}" style="max-width: 160px; max-height: 80px; object-fit: contain;">
        </div>
    `;
    
    return tempDiv;
}

async function copySignatureImage() {
    try {
        showAlert('🔄 Generando imagen...', 'info');
        
        const previewElement = document.getElementById('previewSignature');
        
        if (!previewElement || !previewElement.firstElementChild) {
            throw new Error('No hay vista previa para generar');
        }

        // Crear un elemento temporal optimizado para captura
        const tempElement = createTempSignatureElement();
        document.body.appendChild(tempElement);
        
        // Esperar un momento para que las imágenes se carguen
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const canvas = await html2canvas(tempElement, {
            backgroundColor: null,
            scale: 4,
            useCORS: true,
            allowTaint: true,
            foreignObjectRendering: false,
            logging: false,
            width: 500,
            height: 170,
            removeContainer: false,
            imageTimeout: 3000,
            svgRendering: true,
            ignoreElements: function(element) {
                return false;
            },
            scrollX: 0,
            scrollY: 0,
            windowWidth: 500,
            windowHeight: 170,
            x: 0,
            y: 0,
            letterRendering: true
        });

        canvas.toBlob(async function(blob) {
            // Limpiar elemento temporal
            if (tempElement && document.body.contains(tempElement)) {
                document.body.removeChild(tempElement);
            }
            
            if (!blob) {
                throw new Error('Error al generar la imagen');
            }

            try {
                if (navigator.clipboard && ClipboardItem) {
                    const clipboardItem = new ClipboardItem({ 'image/png': blob });
                    await navigator.clipboard.write([clipboardItem]);
                    showAlert('✓ Imagen de firma copiada al portapapeles', 'success');
                } else {
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'firma-upc-necochea.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                    showAlert('✓ Imagen descargada (copiar manualmente)', 'warning');
                }
            } catch (clipboardError) {
                console.error('Error al copiar al portapapeles:', clipboardError);
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'firma-upc-necochea.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                URL.revokeObjectURL(url);
                showAlert('✓ Imagen descargada (copiar manualmente)', 'warning');
            }
        }, 'image/png');
        
    } catch (error) {
        console.error('Error al generar imagen:', error);
        showAlert('❌ Error al generar imagen: ' + error.message, 'error');
        
        // Limpiar elemento temporal en caso de error
        const tempElement = document.querySelector('.temp-signature');
        if (tempElement && document.body.contains(tempElement)) {
            document.body.removeChild(tempElement);
        }
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


function handleLogoChange() {
    currentLogo = logoSelect.value;
    updatePreview();
}

function toggleTheme() {
    const themeToggle = document.getElementById('themeToggle');
    currentTheme = themeToggle.checked ? 'light' : 'dark';
    updatePreview();
}

function validateContactInput(event) {
    const currentValue = event.target.value;
    if (currentValue.length >= 20 && !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
        return false;
    }
    
    return true;
}

function cleanContactInput(event) {
    const input = event.target;
    const truncated = input.value.substring(0, 20);
    
    if (input.value !== truncated) {
        input.value = truncated;
        updatePreview();
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const copyImageButton = document.getElementById('copyImageButton');
    const themeToggle = document.getElementById('themeToggle');

    fullNameInput.addEventListener('input', updatePreview);
    positionInput.addEventListener('input', updatePreview);
    contactInput.addEventListener('input', updatePreview);
    logoSelect.addEventListener('change', handleLogoChange);
    copyImageButton.addEventListener('click', copySignatureImage);
    themeToggle.addEventListener('change', toggleTheme);
    contactInput.addEventListener('keypress', validateContactInput);
    contactInput.addEventListener('input', cleanContactInput);

    fullNameInput.addEventListener('input', validateForm);
    positionInput.addEventListener('input', validateForm);
    contactInput.addEventListener('input', validateForm);
    logoSelect.addEventListener('change', validateForm);

    // Initialize logo select
    logoSelect.value = currentLogo;

    // Initialize theme toggle to match currentTheme
    themeToggle.checked = currentTheme === 'light';

    validateForm();
    updatePreview();
});


function validateForm() {
    const isValid = fullNameInput.value.trim() && 
                   positionInput.value.trim() && 
                   contactInput.value.trim();
    
    const copyImageButton = document.getElementById('copyImageButton');
    

    if (copyImageButton) {
        copyImageButton.disabled = !isValid;
        if (isValid) {
            copyImageButton.style.opacity = '1';
            copyImageButton.style.cursor = 'pointer';
        } else {
            copyImageButton.style.opacity = '0.6';
            copyImageButton.style.cursor = 'not-allowed';
        }
    }
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
});


updatePreview();
