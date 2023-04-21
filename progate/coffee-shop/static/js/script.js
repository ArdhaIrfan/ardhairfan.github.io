// Menu Hamburger ===============================================
let hidden = document.getElementById('hidden');
let hamburger = document.getElementById('menu-icon');
hidden.style.display == 'none';

hamburger.addEventListener('click', () => {
    if (hidden.style.display == 'none') {
        hidden.style.display = 'flex';
    } else {
        hidden.style.display = 'none';
    }
})

// Intersection Observer ===============================================
let options = {
    root: null,
    rootMargin: "0px",
    threshold: .7,
  };

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, options);

const target = document.querySelectorAll(".target");
target.forEach(el => observer.observe(el));


// Active State Page Location ====================================
const pageLocation = location.pathname;

switch (pageLocation) {
    case '/progate/coffee-shop/menu.html':
        const activeProduct = document.getElementsByClassName('tab-product');
        activeProduct[0].classList.add('active');
        activeProduct[1].classList.add('active');
        break;
    case '/progate/coffee-shop/detail.html':
        const activeDetail = document.getElementsByClassName('tab-product');
        activeDetail[0].classList.add('active');
        activeDetail[1].classList.add('active');
        break;
    case '/progate/coffee-shop/store.html':
        const activeStore = document.getElementsByClassName('tab-store');
        activeStore[0].classList.add('active');
        activeStore[1].classList.add('active');
        break;
    case '/progate/coffee-shop/contact.html':
        const activeContact = document.getElementsByClassName('tab-contact');
        activeContact[0].classList.add('active');
        activeContact[1].classList.add('active');
        break;
}

// Menu Page Script
if (pageLocation === '/progate/coffee-shop/menu.html') {

    const cat = ["all_products", "coffee", "non_coffee", "tea"];

    // Add URL Parameters =====================================
    let addUrlParam = (key, value) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set(key, value);
        const newRelativePathQuery = window.location.pathname + "?" + searchParams.toString();
        history.pushState(null, "", newRelativePathQuery);
        // filter(searchParams.toString());
    }

    const category = document.getElementById('list').children;
    console.log(category);
    for (let i = 0; i < category.length; i++) {
        category[i].addEventListener('click', () => {
            addUrlParam("product", cat[i]);
            filter(cat[i]);
        })
    }

    // Product List ==============================================
    const productList = [
        {
            "id": 1,
            "name": "Aren Latte",
            "price": 18000,
            "imageUrl": "static/img/aren latte.png",
            "category": "coffee",
            "categoryName": "Coffee Based"
        },
        {
            "id": 2,
            "name": "Cafe Latte",
            "price": 24000,
            "imageUrl": "static/img/cafe latte.png",
            "category": "coffee",
            "categoryName": "Coffee Based"
        },
        {
            "id": 3,
            "name": "Caramel Latte",
            "price": 30000,
            "imageUrl": "static/img/caramel latte.png",
            "category": "coffee",
            "categoryName": "Coffee Based"
        },
        {
            "id": 4,
            "name": "Americano",
            "price": 18000,
            "imageUrl": "static/img/americano.png",
            "category": "coffee",
            "categoryName": "Coffee Based"
        },
        {
            "id": 5,
            "name": "Cappucino",
            "price": 24000,
            "imageUrl": "static/img/cappucino.png",
            "category": "coffee",
            "categoryName": "Coffee Based"
        },
        {
            "id": 6,
            "name": "butterscotch",
            "price": 18000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "coffee",
            "categoryName": "Coffee Based"
        },
        {
            "id": 7,
            "name": "Milkshake",
            "price": 22000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "non_coffee",
            "categoryName": "Non Coffee"
        },
        {
            "id": 8,
            "name": "Strawberry Juice",
            "price": 15000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "non_coffee",
            "categoryName": "Non Coffee"
        },
        {
            "id": 9,
            "name": "Chocolate",
            "price": 15000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "non_coffee",
            "categoryName": "Non Coffee"
        },
        {
            "id": 10,
            "name": "Coca Cola",
            "price": 10000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "non_coffee",
            "categoryName": "Non Coffee"
        },
        {
            "id": 11,
            "name": "Thai Tea",
            "price": 20000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "tea",
            "categoryName": "Tea Based"
        },
        {
            "id": 12,
            "name": "Avocado Tea",
            "price": 28000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "tea",
            "categoryName": "Tea Based"
        },
        {
            "id": 13,
            "name": "Jasmine Tea",
            "price": 24000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "tea",
            "categoryName": "Tea Based"
        },
        {
            "id": 14,
            "name": "Green Tea",
            "price": 22000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "tea",
            "categoryName": "Tea Based"
        },
        {
            "id": 15,
            "name": "Rose Tea",
            "price": 24000,
            "imageUrl": "static/img/butterscotch.png",
            "category": "tea",
            "categoryName": "Tea Based"
        }
    ];

    // Product Filter ==============================================
    function filter(catName) {
        const itemContainer = document.getElementById('menu');
        const title = document.getElementById('product_title');
        const sidebarlists = document.getElementById('list').children;
        Array.from(sidebarlists).forEach(element => {
            element.classList.remove('bold');
        });
        const sidebarOption = document.getElementById(catName);
        itemContainer.innerHTML = '';
        productList.forEach(element => {
            if (element.category === catName) {
                sidebarOption.classList.add('bold');
                title.innerHTML = `Our ${element.categoryName} Products`;
                const card = document.createElement('a');
                card.href = 'detail.html'
                const content = `
                <div class="item">
                    <h6>${element.name}</h6>
                    <p>Rp ${element.price},-</p>
                    <img src="${element.imageUrl}" alt="${element.name}">
                </div>
                `;
                card.innerHTML = content;
                itemContainer.appendChild(card);
            } else if (`all_products` === catName) {
                sidebarOption.classList.add('bold');
                title.innerHTML = `Our Products`;
                const card = document.createElement('a');
                card.href = 'detail.html'
                const content = `
                <div class="item">
                    <h6>${element.name}</h6>
                    <p>Rp ${element.price},-</p>
                    <img src="${element.imageUrl}" alt="${element.name}">
                </div>
                `;
                card.innerHTML = content;
                itemContainer.appendChild(card);
            };
        });
    }

    addUrlParam("product", cat[0]);
    filter(cat[0]);
}

// Footer Accordion
const footerTitle = document.getElementsByClassName('column-title');

Array.from(footerTitle).forEach(e => {
    const titleParent = e.parentElement;
    const footerList = titleParent.children;
    const chevron = e.lastElementChild;
    e.addEventListener('click', (children) => {
        Array.from(footerList).forEach(element => {
            if (element.classList.contains('show')) {
                element.classList.remove('show');
                chevron.style.transform = 'rotate(0deg)';
            } else {
                element.classList.add('show');
                chevron.style.transform = 'rotate(-90deg)';
            }
        })
    })
})