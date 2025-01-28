const descarger = (url) => {
    let xhr = new XMLHttpRequest()
    xhr.responseType = 'blob'
    xhr.open('GET', url[0])
    xhr.send()
    xhr.onload = () => {
        const blob = xhr.response
        let a = document.createElement('a')
        a.style = 'display: none'
        document.body.appendChild(a)
        let enlace = window.URL.createObjectURL(blob)
        a.href = enlace
        a.download = url[1]
        a.click()
        window.URL.revokeObjectURL(enlace)
    }
}

export default descarger