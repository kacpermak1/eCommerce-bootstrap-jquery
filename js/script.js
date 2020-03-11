import {
  bestSellers,
  highHeels,
  mostWanted,
  scarfs,
  onSale,
  featured,
  blog,
  trends
} from "./db.js";

$(function() {

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
  };

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
  };

  loadHighHeels();

  const loadMostWanted = () => {
    for (let i = 0; i < mostWanted.imagesUrl.length; i++) {
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
  };

  loadMostWanted();

  const loadScarfs = () => {
    for (let i = 0; i < scarfs.imagesUrl.length; i++) {
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
  };

  loadScarfs();

  const loadOnSale = () => {
    for (let i = 0; i < onSale.imagesUrl.length; i++) {
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
  };

  loadOnSale();

  const loadFeatured = () => {
    
    featured.map(item => {
      const html = `
            <div class="col-12 col-md-3">
              <div class="card" id="card">
                <img class="card-img-top" src=${item.imageUrl} alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <h5>${item.price}</h5>
                    <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i>
                    Add To Cart</button>
                </div>
              </div>
              </div>`;

      $("#featured_list").append(html);
    })
  };

  loadFeatured();


  const loadBlog = () => {
    blog.map(item => {
      const html = `
             <div class="col-md-6 mt-5 blog-card">
                <div class="media">
                    <img src=${item.imgUrl} class="image-fluid mr-3" alt="medial" />
                </div>
                <div class="media-body">
                    <h5>${item.title}</h5>
                    <p>${item.desc}</p>
                    <p><i class="fa fa-user" aria-hidden="true"></i> ${item.user} ${item.date}</p>
                </div>
            </div>`;
      $("#blog").append(html);
    });
  };

  loadBlog();

  const loadTrends = () => {
    
    trends.map(item => {
      const html = `
            <div class="col-12 col-md-3">
              <div class="card" id="card">
                <img class="card-img-top" src=${item.imageUrl} alt="Card image cap">
                <div class="card-body">
                    <h4 class="card-title">${item.title}</h4>
                    <h5>${item.price}</h5>
                    <button class="btn btn-danger"><i class="fa fa-cart-plus" aria-hidden="true"></i>
                    Add To Cart</button>
                </div>
              </div>
              </div>`;

      $("#trends").append(html);
    })
  };

  loadTrends();

  const loadRecentPosts = () => {
    
    for(let i=blog.length-2; i<blog.length; i++){
      const html = `
             <div class="blog-card mb-3">
                <div class="media">
                    <img src=${blog[i].imgUrl} class="image-fluid mr-1" alt="medial" />
                </div>
                <div class="media-body">
                    <h6>${blog[i].title}</h6>
                </div>
            </div>`;
      $(".recent-posts").append(html);
    }
  };

  loadRecentPosts();


//test

//   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   const sum = arr.reduce(function(a, b) {
//     return a + b;
//   });

//   const desc = arr.sort(function(a, b) {
//     return b - a;
//   });

//   console.log(sum);
//   console.log(desc);

});
