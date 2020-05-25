
// const fighters=[
// 	{name:"Khabib", surname:"Nurmagomedov",record:"28-0",ig:"khabib_nurmagomedov",nextFight:"Tony",fightFrom:"Dagestan,Russia",img:"https://pbs.twimg.com/profile_images/785882139803856896/1C9ezviq_400x400.jpg"},
// 	{name:"Tony",surname:"Ferguson",record:"25-3",ig:"tonyfergusonXT",nextFight:"Khabib",fightFrom:"Oxnord,USA",img:"https://mmaoctagon.ru/wp-content/uploads/iblock/8c5/1105694.jpg"},
// 	{name:"Dustin",surname:"Poirier",record:"25-6",ig:"dustinpoirier",nextFight:"Dan",fightFrom:"Lafayette,Louisiana",img:"https://sun9-37.userapi.com/c604727/v604727281/438a9/38mcxlMLi10.jpg?ava=1"},
// 	// {name:"Jusin",surname:"Gaethje",record:"25-6",ig:"unkno$",nextFight:"Conor",fightFrom:"USA",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6hoaK7zoYn9EN7V11F5d6RJ6Qi9XgfV3F-5Vmtk7ZBrO9ldyL"}
// ]


// $.ajax({
// 	url: "https://$$$.sherdog.com/fighter/Khabib-Nurmagomedov-56035",
// 	dataType: 'html',
// 	success: function(data) {
// 		console.log(data)
// 	}
// });

//masked phone




































	const modal=$.modal({
		title:"Форма отправки",
		closeAble:true,
		content:`<div class="form-wrapper">

		<form action="" method="post">
		<label for="fname">Имя <span class="requiredMark">*</span></label>
	<div class="form-control">
		<input id="fname" type="text" name="fname" required >
	</div>

	<label for="phone">Телефон <span class="requiredMark">*</span> </label>
	<div class="form-control">
		<input id="phone" type="text" name="phone"  required  maxlength="14" >
		</div>

		<label for="city">Город <span class="requiredMark">*</span> </label>
	<div class="form-control">
		<select name="city" id="city"  required>
	<option value="0" disabled>Город</option>
		<option value="Москва">Москва</option>
		<option value="Тюмень">Тюмень</option>
		<option value="Омск">Омск</option>
		</select>
		</div>
		<label for="goods">Выберите товар</label>
		<div class="form-control">
		
			<select name="goods" id="goods" required>
				<option value="0" seleced></option>
				<option value="Банан">Банан</option>
				<option value="Арбуз">Арбуз</option>
				<option value="Мандарин">Мандарин</option>

			</select>
		</div>
		

		<label for="dol">Должность </label>
		<div class="form-control">
		<input id="dol" type="text" name="dol"  required>
	</div>

	<label for="email">Почта <span class="requiredMark">*</span> </label>
	<div class="form-control">
		<input id="email" type="email" name="email" required >
	</div>

	<input type="submit" value="Отправить">
		</form>

		</div>`,
		width:"50%",
		footerButtons:[


		]


	})



	function _bindPhoneMask (selector){
		const element = document.querySelector(selector)

		element.addEventListener('input',()=>{
			element.value = element.value.replace(/[A-Za-zА-Яа-яЁё]/, '')
			if(element.value.length<2){
				let array = element.value.split('')
				array.unshift('+7(')
				element.value = array.join('')
			}

			if(element.value.length === 6){
				let array = element.value.split('')
				array.push(')')
				element.value = array.join('')
			}
		})
	}

	_bindPhoneMask('#phone')









// function _createWrapper(fht){
// 	const content=`
// 		<p style="color: black" class="fighter-name" >Name:<b>${fht.name}</b></p>
// 		<p style="color: black" class="fighter-surname" >Surname:<b>${fht.surname}</b></p>
// 		<p style="color: black" class="fighter-surname" >Record:<b>${fht.record}</b></p>
// 		<p style="color: black" class="fighter-surname" >IG:<b><a href="https://instagram.com/${fht.ig}">${fht.ig}</a></b></p>
// 		<p style="color: black" class="fighter-surname" >Fight From:<b>${fht.fightFrom}</b></p>
// 		<p style="color: black" class="fighter-surname" >NextFight:<b>${fht.nextFight}</b></p>`
// 	const container=document.createElement('div')
// 	container.classList.add('fighter-$rap')
// 	container.insertAdjacentHTML('afterbegin', `
//      <div class="fighter-title"><p class="font-$eight-normal">${fht.name}.</p></div>
//          <div class="fighter-body">
//             <img src="${fht.img}" alt="">
//                       </div>
//          <div class="fighter-footer">
//                    <button class="btn btn-success" data-show="show">Show</button>
//    <button class="btn btn-danger" data-remove="remove">Remove</button>
// </div>`)
// 	container.addEventListener('click',(e)=>{
// 		console.log('PRESSSSSED')
// 		e.preventDefault()
// 		if(e.target.dataset.show==='show'){
// 			modal.setContent(content)
// 			modal.setTitle(`<p style="color: black">${fht.name}</p>`)
// 			modal.open()
// 		}
// 		if(e.target.dataset.remove==='remove'){
//
// 			$.confirm({
// 				title:"<p>Are you sure?</p>",
// 				content:`<p>You are removing ${fht.name}'s card</p>`,
//
// 			}).then(()=>{
// 				container.parentNode.removeChild(container)
// 			}).catch(()=>{
// 				console.log('Catch')
// 			})
//
//
// 		}
// 	})
//
// 	return container;
// }
//
// function display(){
// 	const $rapper=document.createElement('div')
// 	$rapper.classList.add('fighter-container')
// 	fighters.forEach(fht=>{
// 		$rapper.appendChild(_createWrapper(fht))
// 	})
//
// document.querySelector('.main-container').appendChild($rapper);
//
// }
//
// display()

