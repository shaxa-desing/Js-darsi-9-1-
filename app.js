
// textContent and innerHTMl

const titleText = document.querySelector('#title')
// console.log(titleText.textContent)
titleText.innerHTML += ' o`rgandik'


const listIteam = document.querySelectorAll('.list-iteam')
// console.log(listIteam.innerHTML)
// listIteam.textContent

listIteam.forEach((iteam) => {
  if (iteam.textContent  === 'JavaScript') {
		iteam.innerHTML += ' o`rganyabman'
	} else {
		iteam.innerHTML += ' o`rgandim'
	}
   console.log(iteam.innerHTML)
})

