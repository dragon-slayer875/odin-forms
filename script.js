const passFields = document.querySelectorAll('input[type="password"]')
passFields.forEach(element => {
    element.addEventListener("change", () => {
        if (parent[0].value === parent[1].value) {
            passFields.forEach(element => {
                element.classList = ""
            })
        } else {
            passFields.forEach(element => {
                element.classList = "error"
            })
        }
    })})