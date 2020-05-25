const createFlag =()=>{
    const flagContainer = document.querySelector('.flag')
    flagContainer.append(createBody())

}


const createBody = ()=>{
   const Body = document.createElement('div')
    Body.classList.add('body-section')

    for (let i=1;i<60;i++) {
        const BodyContainer = document.createElement('p')
        
        BodyContainer.classList.add('white')

        if(i/20 > 1 && i/20 < 2)
        {
            BodyContainer.classList.remove('white')
            BodyContainer.classList.add('blue')
        }

        if(i/20 >=2 && i/20 < 3)
        {
            BodyContainer.classList.remove('white')
            BodyContainer.classList.remove('blue')
            BodyContainer.classList.add('red')
        }

        Array(80).fill('O').forEach(e=>BodyContainer.innerHTML+=e);
        Body.append(BodyContainer)

    }
    return Body;

}

