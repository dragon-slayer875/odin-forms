const passFields = document.querySelectorAll('input[type="password"]')
passFields.forEach(element => {
    element.addEventListener("input", () => {
        if (passFields[0].value === passFields[1].value) {
            passFields.forEach(element => {
                element.classList = ""
            })
        } else {
            passFields.forEach(element => {
                element.classList = "error"
            })
        }
    })})