const openCourseButtons = document.querySelectorAll('[data-modal-target]')
const closeCourseButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openPopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.courses-taken_1.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.courses-taken_1')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.courses-taken_2.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.courses-taken_2')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.courses-taken_3.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.courses-taken_3')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.courses-taken_4.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.courses-taken_4')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.courses-taken_e.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.courses-taken_e')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.project_1.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project_1')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.project_2.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project_2')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.project_3.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project_3')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.project_4.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project_4')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.project_5.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project_5')
        closePopUp(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.project_6.active')
    modals.forEach(modal => {
        closePopUp(modal)
    })
})

closeCourseButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.project_6')
        closePopUp(modal)
    })
})

function openPopUp(modal){
    if (modal == null){
        return
    }
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closePopUp(modal){
    if (modal == null){
        return
    }
    modal.classList.remove('active')
    overlay.classList.remove('active')
}