function bubbleSort(arrayNumber){

    let n = arrayNumber.length;
    let trocado;

    do{
        trocado = false;
        for(let i = 0; i < n - 1; i++){

            if(arrayNumber[i] > arrayNumber[i + 1]){

                let temp = arrayNumber[i];

                arrayNumber[i] = arrayNumber[i + 1];

                arrayNumber[i + 1] = temp;

                trocado = true
            }

        }

    } while (trocado)

    return arrayNumber
}



function selectionSort(arrayNumber){
    let n = arrayNumber.length

    for(let i = 0; i < n - 1; i++){

        let minIndex = i;

        for(let j = i + 1; j < n; j++ ){

            if(arrayNumber[j] < arrayNumber[minIndex]){
                minIndex = j
            }

            let temp = arrayNumber[i]
            arrayNumber[i] = arrayNumber[minIndex]
            arrayNumber[minIndex] = temp

        }

        return arrayNumber
    }
}

const arrayNumber = [10 ,20 ,85 ,106 ,1005 ,36 ,1 ,59, 
    18 ,24 ,22]

console.log(arrayNumber)

console.log("+".repeat(40))

console.log(bubbleSort(arrayNumber))

console.log("-".repeat(40))

console.log(selectionSort(arrayNumber))