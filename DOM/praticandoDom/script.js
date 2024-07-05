function addContact(){
    const contactSection = document.getElementById('contacts-list')

    const h3 = document.createElement("h3")
    h3.innerText = "CONTATOS:"

    const ul = document.createElement("ul")

    const nameLi = document.createElement("li")

    nameLi.innerText = "Nome: "
    const nameInput = document.createElement("input")
    nameInput.type ="text"
    nameInput.name = "fullname"

    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))

    
    const phoneli = document.createElement("li")

    phoneli.innerText = "Telefone: "
    const phoneInput = document.createElement("input")
    nameInput.type ="text"
    nameInput.name = "phone"

    phoneli.appendChild(phoneInput)
    ul.appendChild(phoneli)
    ul.appendChild(document.createElement('br'))

    const addressLi = document.createElement("li")
    addressLi.innerHTML = "<label for='address'>Endereço: </label>"
    const addressInput = document.createElement("input")
    addressInput.type = "text"
    addressInput.name = "address"
    addressInput.id = "address"
    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)
    ul.appendChild(document.createElement('br'))
    contactSection.append(h3, ul)

}

function removeContact(){
    const contactSection = document.getElementById("contacts-list")

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')
    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}