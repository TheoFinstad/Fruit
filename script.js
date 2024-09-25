var api = "./app.json"

fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    

        // ------------------------- S1
        data.forEach(element => {
            if (element.name == "Apple") {
                console.log(element.nutritions.calories);
                document.write(`⁠Hvor mange kalorier er det i et eple? => ${element.nutritions.calories}`)
            }
            
        });
        // -------------------------- S2
        data.forEach(element => {
            if (element.name == "Avocado") {
                console.log(element.nutritions.fat);
                document.write(`Hva er fettinnholdet i en avokado? => ${element.nutritions.fat}`)
            }
        })
        // ----------------------------S3
        let arr=[]
        data.forEach(element => {
            console.log(element.nutritions.sugar);
            arr.push(element.nutritions.sugar)
            
        });
        console.log(arr);
        console.log(Math.max(...arr));
        document.write(`Hvilken frukt inneholder mest sukker? => ${Math.max(...arr)}`)

        S4
        data.forEach(element => {
            if (element.name = "Mango") {
                console.log(element.nutritions.carbohydrates);
                document.write(`Hvor mange karbohydrater er det i en mango? => ${element.nutritions.carbohydrates}`)
            }
        });
       
        // -----------------------------S4
  data.forEach(element => {
            if (element.name == "Strawberry") {
                console.log(element.nutritions.protein);
                document.write(`Proteininnhold i jordbær => ${element.nutritions.protein}`)
            }
            //-------------------------S5
            data.forEach(element => {
                if (element.name == "Orange");
                document.write(`Hva er kaloriene i en appelsin? => ${element.nutritions.calories}`)
            })
   