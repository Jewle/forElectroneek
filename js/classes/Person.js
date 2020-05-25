
class DOMer {
    phonePlace = document.querySelector('#phone')
    namePlace = document.querySelector('input#fname')
    commentPlace = document.querySelector('textarea')
}


class Person extends DOMer{
   constructor(name,phone='',comment='') {
       super();

       this.name=name
       this.phone=phone
       this.comment=comment
   }

   send(){
        this.namePlace.value=this.name;
        this.phonePlace.value = this.phone;
        this.commentPlace.value=this.comment;

   }
}
