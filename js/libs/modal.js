// function _createButtons(options){
//     let HTMLbuttons='';
//     const props=options || {}
//
//     for(let i=0;i<props.footerButtons.length;i++){
//         HTMLbuttons+="<button class='btn btn-"+props.footerButtons[i].type+" ' onclick=props.footerButtons["+i+"]."+props.footerButtons[i].handler.name+"();>"+props.footerButtons[i].text+"</button>"
//     }
//     return HTMLbuttons;
// }

Element.prototype.appendafter=function(e){
  e.parentNode.insertBefore(this,e.nextSibling)
}

function _createModalFooter(buttons=[]){
	if(buttons.length===0){
		return document.createElement('div')
	}
	const wrap = document.createElement('div')
	wrap.classList.add('modal-footer')
	buttons.forEach((b)=>{
		const $b=document.createElement('button')
		$b.textContent=b.text;
		$b.classList.add('btn')
		$b.classList.add(`btn-${b.type || 'secondary'}`)
		$b.onclick=b.handler || function () {}
		wrap.appendChild($b)
	})

	return wrap;
}


function _createModal(options){
	//Ининциализация options каждая константа-поле в объекте options . Объект options заменяется на props или {}
	const defaultContent=`<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas consequatur dolor est asperiores, distinctio, nulla aut</p><p> Eligendi minima qui, laborum odio magnam error blanditiis, facilis reprehenderit eum nobis beatae consequuntur?</p>`
	const cross='<span class="modal-close" data-close="true">&times;</span>';
	const props=options || {};
	const content=props.content || defaultContent;
	const defaultTitle='TITLE';
	const width=props.width.toString()+";" || "600px;"
	const title=props.title || defaultTitle;
	let closeAble=props.closeAble===true || props.closeAble===false ? props.closeAble : true; // В closeable должен попадать либо true либо false жесткое сравнение
	closeAble=closeAble ? cross : '';



	const modal=document.createElement('div')
	modal.classList.add('vmodal')
	modal.insertAdjacentHTML('afterbegin',`
				
				<div class="modal-overlay" data-close="true">	
						<div class="modal-window" style="width:${width}">
					<div class="modal-header">
						<span class="modal-title" data-title="title">`+title+`</span>
						`+closeAble+`
					</div>
					<div class="modal-body" data-content>
						`+content+`
					</div>
					
						
					</div>
				</div>
			</div>
				

		`)
	const footer =_createModalFooter(props.footerButtons)
	document.body.appendChild(modal)
	footer.appendafter(modal.querySelector('[data-content]'))
	return modal;


}






$.modal=function(options) {
	const modal ={
		open() {
			$modal.classList.add('open')
		},
		close() {
			if(options.closeAble===true)// здесь closeable не полностью отрабатывает
				$modal.classList.remove('open')
			if(typeof options.onClose ==='function'){
				options.onClose();
			}
		},
		destroy() {

		}
	}
	const listener=(e)=>{
		if(e.target.dataset.close==='true'){
			modal.close()
		}

		}

	const $modal = _createModal(options)
	$modal.addEventListener('click',listener)

		return Object.assign(modal,{
			destroy(){
				$modal.parentNode.removeChild($modal)
				$modal.removeEventListener('click',listener)

			},
			setContent(cnt){
				$modal.querySelector('[data-content]').innerHTML=cnt;
			},
			setTitle(title){
				$modal.querySelector('[data-title]').innerHTML=title;

			}

		});

}







