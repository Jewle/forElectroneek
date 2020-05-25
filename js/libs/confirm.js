$.confirm=function (options) {
    return new Promise((resolve, reject) => {
        const modal=$.modal({
                title:options.title,
                width:'400px',
                closeAble: true,
                content:options.content,
                onClose(){
                  modal.destroy()
                },
            footerButtons: [
                {text:'Remove', type:'secondary',handler(){
                        modal.close()
                        resolve()

                    }},
                {text:'Cancel', type:'danger',handler(){
                        modal.close()
                        reject()

                    }},
            ]

        });
       setTimeout( modal.open,100)
    });

}
