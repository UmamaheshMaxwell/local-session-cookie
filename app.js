localStorage.setItem('name', 'uma')
console.log(localStorage.getItem('name'))
localStorage.removeItem('name')

sessionStorage.setItem('name', 'swathi')
console.log(sessionStorage.getItem('name'))

sessionStorage.setItem('name', 'jagrav')
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')

document.cookie = 'firstname=person1; expires=' + new Date(9999, 0,1).toUTCString()
document.cookie = 'lastname=person2; expires=' + new Date(9999, 0,1).toUTCString()

console.log(document.cookie)
