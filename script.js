const toggleMenu = document.getElementById('toggleMenu')
const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')

toggleMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    openMenu.classList.toggle('hidden')
    closeMenu.classList.toggle('hidden')
})

const page = {
    curr: 1,
    next: 2,
    prev: 3,
}

const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')

function changeProfile(way) {
    if (way === 1) {
        page.curr = page.curr + 1 === 5 ? (page.curr = 1) : page.curr + 1
        page.prev = page.prev + 1 === 5 ? (page.prev = 1) : page.prev + 1
        page.next = page.next + 1 === 5 ? (page.next = 1) : page.next + 1
    } else {
        page.curr = page.curr - 1 === 0 ? (page.curr = 4) : page.curr - 1
        page.prev = page.prev - 1 === 0 ? (page.prev = 4) : page.prev - 1
        page.next = page.next - 1 === 0 ? (page.next = 4) : page.next - 1
    }

    first.classList.add('hidden')
    second.classList.add('hidden')
    third.classList.add('hidden')
    fourth.classList.add('hidden')

    switch (page.curr) {
        case 1:
            first.classList.remove('hidden')
            break
        case 2:
            second.classList.remove('hidden')
            break
        case 3:
            third.classList.remove('hidden')
            break
        case 4:
            fourth.classList.remove('hidden')
            break
        default:
            break
    }
}

function validateEmail() {
    const mail = document.getElementById('email')
    const errText = document.getElementById('errText')

    if (
        !mail.value ||
        !/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(mail.value)
    ) {
        mail.classList.add(...['border', 'border-BrightRed'])
        errText.classList.remove('hidden')
    } else {
        errText.classList.add('hidden')
        mail.classList.remove(...['border', 'border-BrightRed'])
    }
}
