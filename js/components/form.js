//Актиация формы
const activateModal = ()=>{
    document.body.insertAdjacentHTML('afterbegin',`<button class="main-button" onclick="modal.open()">Открыть форму</button>`)
}
// Инициализация модального окна с формой
const modal=$.modal({
    title:"Форма отправки",
    closeAble:true,
    content:`<div class="form-wrapper">

		<form action="" method="post">
		<label for="fname">ФИО <span class="requiredMark">*</span></label>
	<div class="form-control">
		<input id="fname" type="text" name="fname" required >
	</div>

	<label for="phone">Телефон <span class="requiredMark">*</span> </label>
	<a href="#" class="addnew" onclick="addNewPhoneField()">+</a>
	
	<div class="form-control" data-phone="phone">
		<input id="phone" type="text" name="phone" class="phone-field"  required  maxlength="14" >
		<div class="added-phones"></div>
         
		</div>
		
		<label for="comment"></label>
		<textarea name="comment" id="comment" cols="30" rows="10" ></textarea>
	<input type="submit" value="Отправить" >
		</form>

		</div>`,
    width:"50%",
    footerButtons:[]
})
//Создание инстсанса класса Person
const sender = new Person('Иванов Иван Иванович',"+79618138956", "Это коментарий для теста")
//Добавление нового поля ввода телефона
const addNewPhoneField=()=>{
    const phoneContainer = document.querySelector('.form-control .added-phones')
        const lastChildNodeNum = phoneContainer.childNodes.length+2;
        phoneContainer.innerHTML+=`<input type="text" class="phone-field" placeholder="Телефон ${lastChildNodeNum}">`;
};


document.querySelector('input[type=submit]').addEventListener('click',(e)=>{
    e.preventDefault()
    sender.send()
});






