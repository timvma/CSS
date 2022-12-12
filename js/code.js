

const templates = document.querySelectorAll('template')


function createCode(template) {
  
    let preELement = document.createElement('pre')
    let codeElement = document.createElement('code')
    let copyButtonElement = document.createElement('button')
    copyButtonElement.setAttribute('class','copy-code')
    copyButtonElement.textContent = 'Copy'

    copyButtonElement.addEventListener('click', ()=> {
        navigator.clipboard.writeText(codeElement.textContent);
        copyButtonElement.textContent ='Copied'
    })

    preELement.addEventListener('mouseleave', ()=> {
        copyButtonElement.textContent ='Copy'
    })

    preELement.append(copyButtonElement)

    codeElement.textContent = template.innerHTML
    
    preELement.append(codeElement)
    
    return preELement
}

if(templates)
templates.forEach(template => {
    let code = createCode(template)
    template.parentElement.append(code)
});


