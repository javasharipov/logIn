document.getElementById('login-form').addEventListener('submit', function (e) {
	e.preventDefault()

	const firstname = document.getElementById('firstname').value
	const lastname = document.getElementById('lastname').value
	const age = document.getElementById('age').value
	const gender = document.getElementById('gender').value.toLowerCase()
	const country = document.getElementById('country').value

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

	document.getElementById('result-wrapper').appendChild(card)

	document.getElementById('firstname').value = ''
	document.getElementById('lastname').value = ''
	document.getElementById('age').value = ''
	document.getElementById('gender').value = ''
	document.getElementById('country').value = ''
})
