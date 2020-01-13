'use strict'
$(document).ready(() => {

    $('.container-fluid').pagepiling({
        sectionsColor: ['white', '#d8dbe2', '#a9bcd0', '#58a4b0', '#373f51', '#1b1b1e']
    })

    document.querySelector('body').setAttribute('style', 'display: block')    
})

document.querySelectorAll('button').forEach((item, index) => {
    item.addEventListener('click', () => {
        switch (index) {
            case 0:
                window.open('https://www.linkedin.com/in/n2sml')
                break
            case 1:
                window.open('mailto:nssm@a.recife.ifpe.edu.br')
                break
            case 2:
                window.open('https://github.com/n2sml/')
                break

        }
    })
})