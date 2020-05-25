

const sorting =(arr,cond=false)=>{
    if(cond) {
        for (let k = 0; k < arr.length; k++) {
            for (let u = k; u < arr.length; u++) {
                if (arr[k] < arr[u]) {

                    let p = arr[u];
                    arr[u] = arr[k];
                    arr[k] = p;
                }
            }
        }
    }
    else {
        for (let i = 0; i < arr.length; i++) {
            for (let j = i; j < arr.length; j++) {
                if (arr[i] > arr[j]) {

                    let p = arr[j];
                    arr[j] = arr[i];
                    arr[i] = p;
                }
            }
        }
    }
    return arr;
};


