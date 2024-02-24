import backendAPI from "./Services/api";



export const renderBestBooks = async () => {
    const bestBooksList = document.querySelector('.best-books');
    try {
        const bestSellersData = await backendAPI.getBestSellers();
        const markup = bestSellersData.map(({ books, list_name }) => {
            return `<li class="bestsellers-item">${list_name}
                <ul class="bestsellers-books-list"> 
                    ${books.map(({ book_image, title, author }) => { // if() {}else{}
                        return `<li class="bestsellers-books-item">
                            <img class="bestsellers-books-img" src='${book_image}' alt="" />
                            <h3 class="bestsellers-book-title">${title}</h3>
                            <p class="bestsellers-book-author">${author}</p>
                        </li>`}).join('\n')}
                </ul>
                <button class="bestsellers-btn" type="button">See more</button>
            </li>`;        
        }).join('\n');
        
        bestBooksList.insertAdjacentHTML('beforeend', markup);

    } catch (error) {
        console.error("Error fetching best sellers:", error);
    }
}

renderBestBooks();