var products = [
  { title: 'Botín', price: 800.44, category: 'Botines', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/004632000F88356_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/adidas-icon.png' },
  { title: 'Ojotas', price: 300.99, category: 'Ojotas', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/004632000F88356_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/adidas-icon.png' },
  { title: 'Zapatillas', price: 1120.00, category: 'Calzado', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/005030000D65804_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/puma-icon.png' },
  { title: 'Short', price: 320.44, category: 'Vestimenta', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/077652619598012_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/nike-icon.png' },
  { title: 'Pantalón', price: 360.44, category: 'Natación', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/077632604336703_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/nike-icon.png' },

  { title: 'Botín', price: 800.44, category: 'Botines', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/004632000F88356_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/adidas-icon.png' },
  { title: 'Ojotas', price: 300.99, category: 'Ojotas', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/004632000F88356_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/adidas-icon.png' },
  { title: 'Zapatillas', price: 1120.00, category: 'Calzado', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/005030000D65804_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/puma-icon.png' },
  { title: 'Short', price: 320.44, category: 'Vestimenta', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/077652619598012_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/nike-icon.png' },
  { title: 'Pantalón', price: 360.44, category: 'Natación', image: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/077632604336703_1.jpg', brand: 'http://remote.fizzmod.com/ibNZlyN7LX319Mlx/frontend/images/nike-icon.png' }  
];



$( document ).ready(function() {

  $('.slider').bxSlider({
    controls: false,
  });

  var container = document.getElementById('container');
      
  for (var i = 0; i < products.length; i++) {
    var galleryItem = document.createElement('div');
    galleryItem.className ='gallery-item';
    container.appendChild(galleryItem);

    var productImg = document.createElement('img');
    galleryItem.appendChild(productImg);
    productImg.className = 'product-image';
    productImg.setAttribute('data-index', i + 1);
    productImg.src = products[i].image;

      if (((i + 1) % 2)!= 0){
      galleryItem.className +=' offer';
    }

    var productTitle = document.createElement('p');
    productTitle.className = 'product-name';
    galleryItem.appendChild(productTitle);
    productTitle.innerHTML = products[i].title;

    var productPrice = document.createElement('p');
    productPrice.className = 'product-price';
    productPrice.setAttribute('data-index', i + 1);
    galleryItem.appendChild(productPrice);
    productPrice.innerHTML = '$' + products[i].price;

    var productBrand = document.createElement('img');
    productBrand.className = 'product-logo';
    galleryItem.appendChild(productBrand);
    productBrand.src = products[i].brand;

    var productCategory = document.createElement('p');
    productCategory.className = 'product-category';
    galleryItem.appendChild(productCategory);
    productCategory.innerHTML = products[i].category;
  }

  $('.product-image').hover(function(){
    var index = $(this).data('index');
    $("p[data-index='" + index +"']").css({'color': 'green', 'font-size': '17px'});
  }, function(){
    var index = $(this).data('index');
    $("p[data-index='" + index +"']").css({'color': 'red', 'font-size': '15px'});
  });

  $('.product-image').click(function(){
    console.log($(this));
  });

$('.dropbtn').click(function(){
  var index = $(this).data('index');
  console.log($(".dropdown-content[data-index='" + index +"']"));
  $(".dropdown-content[data-index='" + index +"']").toggle();
});

$(".brands-container").click(function(){
    $.get("http://remote.fizzmod.com/ajax.php", function(data){
        $(".brands-container").html(data);
    });
});


});