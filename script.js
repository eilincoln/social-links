function mode() {
    const body = document.body

    if (body.classList.contains("light")) {
        body.classList.remove("light")
    } else {
        body.classList.add('light')
    }
}