export async function getBooks(category,startIndex){
    let books_in_category=[];

    await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${category}"
    &key=AIzaSyDx59Zky8nzghjMIiz6vat5T5LUv4DWEz0&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`)
    .then((response)=>{ 
        return response.json() 
    })
    .then((data)=>{
        books_in_category = data.items;
    })
    .catch(()=>{console.log("Ошибка!")});

    return books_in_category;
}

