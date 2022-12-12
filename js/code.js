

const templates = document.querySelectorAll('template')


function createCode(template) {
    let parent = template.parentElement
    let preELement = document.createElement('pre')
    let codeElement = document.createElement('code')
    
    codeElement.textContent = template.innerHTML
    


    preELement.append(codeElement)
    parent.append(preELement)
}


if(templates)
templates.forEach(template => {
    //template.nextElementSibling.textContent = template.innerHTML 
    createCode(template)
});


const copyCode = document.querySelectorAll('.copy-code')

if(copyCode)
copyCode.forEach(btn => {
    btn.addEventListener('click', ()=> {
        navigator.clipboard.writeText(btn.previousElementSibling.textContent);
        btn.textContent ='Copied'
    })

    btn.parentElement.addEventListener('mouseleave', ()=> {
        btn.textContent ='Copy'
    })
});


