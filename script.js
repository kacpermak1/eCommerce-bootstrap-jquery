$(function() {

  const bestSellers = {
    imagesUrl: [
      "./assets/pexels-photo-206410.jpeg",
      "./assets/pexels-photo-235497.jpeg",
      "./assets/pexels-photo-247855.jpeg",
      "./assets/pexels-photo-245931.jpeg"
    ],
    imageTitles: ["Title 1", "Title 2", "Title 3", "Title 4"],
    prices: ["60€", "30€", "40€", "20€"]
  };

  const highHeels = {
    imagesUrl: [
      "./assets/show1.jpg",
      "./assets/show2.jpg",
      "./assets/show3.jpg",
      "./assets/show4.jpg"
    ],
    imageTitles: ["Title 1", "Title 2", "Title 3", "Title 4"],
    prices: ["99€", "39€", "49€", "49€"]
  };

  const mostWanted = {
    imagesUrl: [
        "./assets/belts-823257_1920-540x500.jpg",
        "./assets/fashion-731827_1920-540x500.jpg",
        "./assets/jeans-428614_1920-540x500.jpg"
    ],
    imageTitles: ["FITT BELTS", "Magnolia Dress", "Dark Blue Jeans"],
    prices: ["9.99€", "19.99€", "29.99€"]
  };

  const scarfs = {
    imagesUrl: [
        "./assets/a-neckerchief-1315912_1920-540x500.jpg",
        "./assets/a-neckerchief-1315916_1920-540x500.jpg",
        "./assets/a-neckerchief-1317830_1920-540x500.jpg"
    ],
    imageTitles: ["Istwick Scarf", "Jennifer Scarf", "Andora Scarf"],
    prices: ["2.99€", "19.99€", "9.99€"]
  };

  const onSale = {
    imagesUrl: [
        "./assets/woman-1484279_1920-540x500.jpg",
        "./assets/key-692199_1920-540x500.jpg",
        "./assets/cute-955782_1920-540x500.jpg"
    ],
    imageTitles: ["Marina Style", "Jennifer Style", "Mango Shirt"],
    prices: ["9.99€", "12.99€", "19.99€"]
  };

  const featured = {
    imagesUrl: [
      "./assets/pexels-photo-220449.jpeg",
      "./assets/pexels-photo-731794.jpeg",
      "./assets/pexels-photo-245931.jpeg",
      "./assets/pexels-photo-247206.jpeg"
    ],
    imageTitles: ["Black Shirt", "Blue Shirt", "Bra", "Jacket"],
    prices: ["20€", "180€", "16€", "59€"]
  };

  const loadBestSellers = () => {
    for (let i = 0; i < bestSellers.imagesUrl.length; i++) {
      const html = `
            <div class="col-12 col-md-3">
              <div class="card" id="card">
                <img class="card-img-top" src=${bestSellers.imagesUrl[i]} alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">${bestSellers.imageTitles[i]}</h4>
                    <h5>${bestSellers.prices[i]}</h5>
                    <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i>
                    Add To Cart</button>
                </div>
              </div>
              </div>`;

      $("#products_list").append(html);
    }
  }

  loadBestSellers();

  const loadHighHeels = () => {
    for (let i = 0; i < highHeels.imagesUrl.length; i++) {
      const html = `
            <div class="col-12 col-md-3">
              <div class="card" id="card">
                <img class="card-img-top" src=${highHeels.imagesUrl[i]} alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">${highHeels.imageTitles[i]}</h4>
                    <h5>${highHeels.prices[i]}</h5>
                    <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i>
                    Add To Cart</button>
                </div>
              </div>
              </div>`;

      $("#high-heels-list").append(html);
    }
  }

  loadHighHeels();


 const loadMostWanted = () => {

    for (let i=0; i<mostWanted.imagesUrl.length;i++){
    
    const html = `
    <div class="media mt-5">
        <img src=${mostWanted.imagesUrl[i]} class="img-fluid mr-3" alt="media-img"/>
        <div class="media-body mt-2">
            <h5>${mostWanted.imageTitles[i]}</h5>
            <h6>${mostWanted.prices[i]}</h6>
            <button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true">Add to cart</i></button>
        </div>
    </div>`;

    $("#most-wanted").append(html);
    }
 }

 loadMostWanted();

 const loadScarfs = () => {

    for (let i=0; i<scarfs.imagesUrl.length;i++){
    
    const html = `
    <div class="media mt-5">
        <img src=${scarfs.imagesUrl[i]} class="img-fluid mr-3" alt="media-img"/>
        <div class="media-body mt-2">
            <h5>${scarfs.imageTitles[i]}</h5>
            <h6>${scarfs.prices[i]}</h6>
            <button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true">Add to cart</i></button>
        </div>
    </div>`;

    $("#scarfs").append(html);
    }
 }

 loadScarfs();

 const loadOnSale = () => {

    for (let i=0; i<onSale.imagesUrl.length;i++){
    
    const html = `
    <div class="media mt-5">
        <img src=${onSale.imagesUrl[i]} class="img-fluid mr-3" alt="media-img"/>
        <div class="media-body mt-2">
            <h5>${onSale.imageTitles[i]}</h5>
            <h6>${onSale.prices[i]}</h6>
            <button class="btn btn-success"><i class="fa fa-cart-plus" aria-hidden="true">Add to cart</i></button>
        </div>
    </div>`;

    $("#on-sale").append(html);
    }
 }

 loadOnSale();

 const loadFeatured = () => {
    for (let i = 0; i < featured.imagesUrl.length; i++) {
      const html = `
            <div class="col-12 col-md-3">
              <div class="card" id="card">
                <img class="card-img-top" src=${featured.imagesUrl[i]} alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">${featured.imageTitles[i]}</h4>
                    <h5>${featured.prices[i]}</h5>
                    <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i>
                    Add To Cart</button>
                </div>
              </div>
              </div>`;

      $("#featured_list").append(html);
    }
  }

  loadFeatured();


  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


  const example = () => {

  const arr = ["Test1","Test2","Test3"];
  arr.map(num => {
      let html = `<h2>${num}</h2>`;
      $("#example").append(html);
  });
}

example();

  const sum = arr.reduce(function(a, b) {
    return a + b;
  });

  const desc = arr.sort(function(a, b) {
    return b - a;
  });

  console.log(sum);
  console.log(desc);
});
