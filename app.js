document.querrySelector('login-form').addEventListener('submit', function (e) {
	e.preventDefault()

	const firstname = document.querrySelector('firstname').value
	const lastname = document.querrySelector('lastname').value
	const age = document.querrySelector('age').value
	const gender = document.querrySelector('gender').value.toLowerCase()
	const country = document.querrySelector('country').value

	const maleImage = 'https://cdn-icons-png.freepik.com/512/18/18148.png'

	const femaleImage =
		'https://cdn0.iconfinder.com/data/icons/woman-user-human-avatar-person-profile-business/100/02-1User_14-512.png'

	const genderImage = gender === 'male' ? maleImage : femaleImage

	const card = document.createElement('div')
	card.classList.add('card')
	card.innerHTML = `
    <img src="${genderImage}" alt="${gender}">
    <p><strong>${firstname} ${lastname}</strong></p>
    <p>Age: ${age}</p>
    <p>Country: ${country}</p>
  `

	document.querrySelector('result-wrapper').appendChild(card)

	document.querySelector('firstname').value = ''
	document.querrySelector('lastname').value = ''
	document.querrySelector('age').value = ''
	document.querrySelector('gender').value = ''
	document.querrySelector('country').value = ''
})
