var greeting = document.getElementById('greeting')
function login() {
    var username = prompt ('enter your name')
    if(username === '' || username === null) {
        alert('please enter your username')
    } else {
        greeting.innerHTML = `Bem Vindo $(username)!`

        let logoutBtn = document.createElement('button')
        logoutBtn;innerText = 'log out'

        logoutBtn.onclick = logoutBtn

        greeting.appendChild(logoutBtn)

    }
}

function logout() {
    alert('you logged out')
    greeting.innerHTML = 'até mais...'
}
