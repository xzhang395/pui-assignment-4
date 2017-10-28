
//Store viewed item across pages, Initialize each local storage variable
$(document).ready(function () {
    // localStorage.clear();    
    if (localStorage.getItem('clicked') == null) { localStorage.setItem("clicked", 0); }
    if (localStorage.getItem('cartItems') == null) { localStorage.setItem("cartItems", "[]"); }
    if (localStorage.getItem('savedItems') == null) { localStorage.setItem("savedItems", "[]"); }
    //All product data
    var data = [
        {
            pic: "1", // Original image source:OnePetHub https://i.pinimg.com/564x/a6/4b/0c/a64b0ca1a024af63fb7809bbe0d8106f.jpg
            name: 'CURIOUS JIMMY',
            price: 15,
            color: [
                "red",
                "blue",
                "yellow"
            ],
            qty: 1,
            msg: "",
            dscrp: "Jimmy is a curious cat. He loves to star at moving things, especially birds. If you don’t have any cat, Jimmy can be your best company when you relaxing on couch. If you do have a cat, your cat would also enjoy time with Jimmy.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "2", // Original image source:by MosMea at Etsy https://www.etsy.com/listing/217540385/boston-terrier-dog-shaped-pillow-stuffed
            name: "STARY DARY",
            price: 18,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Not feeling safe at home? Get Stary Dary to watch for anything evil and protect you from nightmare",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "3",// Original image source:by MosMea at Etsy https://www.etsy.com/listing/176933745/cute-cuddly-toy-dormouse-soft-plush?utm_source=Pinterest&utm_medium=PageTools&utm_campaign=Share
            name: "SLEEPY PHILLY",
            price: 18,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Want to have a nice sleep like a baby squirrel in winter? Get Sleepy Philly and enjoy some good cuddling with yourself!",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "4",
            name: "SWAGGY PUG ",// Original image source:By Pottery Barn Kids  https://www.potterybarnkids.com/products/animal-shaped-pillows/
            price: 15,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Always love the way a pug walks? Don't own a pug but still want to be the cool person with a cool pug. Get Swaggy Pug for your home and Add some coolness to your life",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "5",// Original image source:By notonthehighstreet.com https://www.notonthehighstreet.com/lisaangelhomewareandgifts/product/vintage-inspired-fox-cushion
            name: "FOXY FOXY ",
            price: 25,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "What is better than a pair of twin foxes? Enjoy some cuteness with the flower prints Foxy Foxy. It comes in two so you don't have to fight with your roomates or signaficant other.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "6",// Original image source:By Pottery Barn Kids  https://www.potterybarnkids.com/products/animal-shaped-pillows/
            name: "ANGRY LARY",
            price: 18,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Like cats, some people are cold outside but warm inside. They tends to be on their own and grumpy all the time. But inside, they are simply little kittens. Know someone like this? Get Angry Lary for them!",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "7", // Original image source:by TheLadyBirdDesign at Etsy https://www.etsy.com/listing/484241168/geometric-cat-decorative-pillow-throw?ref=search_recently_viewed-12
            name: "POKE CAT",
            price: 18,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Hey! Polka Dots lovers, this is a pillow for you! The simple design is perfect for any sort of styles.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "8",//Original image source:by pattihaskins at Etsy https://www.etsy.com/listing/494518775/decorative-pillow-pit-bull-shaped-large
            name: "SKETCHY DOG",
            price: 15,
            color: "yellow",
            qty: 1,
            msg: "",
            dscrp: "Sometimes simple is simply the best. Get the sketchy dog and have friends ask you: 'did you make this?'",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "9",//Original image source:by dukesdogsupplies.com https://www.dukesdogsupplies.com/collections/home-goods/products/boston-terrier-illustration-pillow
            name: "PUP PUG",
            price: 18,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Pugs are not the best looking dogs, but they are certainly unique. You may say:'but this is not even a pug!' Right, that is a conversation starter for you and your guest to start taking about all the dog species.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "10",//Original image source:by dhgate https://www.dhgate.com/product/throw-pillow-covers-cute-pug-pet-black-dog/388080286.html#sc1-12-1b;frsh|1396863603
            name: "SADDY PUGGY",
            price: 18,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Having a bad day? Don't worry. There is always a pug sadder than you. Get the Saddy Puggy to cry together.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "11",//Original image source:by society6.com https://society6.com/product/black-cat-00h_pillow#s6-1520847p26a18v129a25v193
            name: "SNEAKY PEAKY",
            price: 12,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Sneaky peaky is always peaking you. He is the big brother in the house but he would never judge anything you do.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "12",//Original image source:by wellappointedhouse.com http://www.wellappointedhouse.com/cat-shaped-pillow.html
            name: "NERDY CAT",
            price: 12,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "People always think cats are evil or naughty. But what about a naughty cat? Don't you want a cat that loves fourier transform and Markov Chain Monte Carlo? As a smart person, all your belongings should look smart.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "13",// Original image source:by pattihaskins at Etsy https://www.etsy.com/listing/258368582/decorative-pillow-dog-pillow-animal
            name: "BOSSY DOG",
            price: 12,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Golden Retriever is one of the sweetest bog ever. The Bossy Dog is a Golden Retriever, but he is not sweet. He would look at you with contempt. Looking at him in the eyes makes you become introspective. Want to change some bad habit? Get the bossy dog in your home!",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "14",// Original image source:By Pottery Barn Kids  https://www.potterybarnkids.com/products/animal-shaped-pillows/
            name: "CAT GANG",
            price: 12,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Ali, Bob, Cam and Dave the coolest cat gang in the neighborhood. They own all the trash cans and cardboard boxes in the recycling bins. Get the cat gang, the highest power is yours.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
        {
            pic: "15",
            name: "BRIT PUG",// Original image source:by pattihaskins at Etsy https://www.etsy.com/listing/481029666/french-bulldog-shaped-large-decorative
            price: 12,
            color: "white",
            qty: 1,
            msg: "",
            dscrp: "Why is this pug pink? Is he hot? Is he shy? or is he naked? It doesn't matter why because the Brit Pug doesn't care. Be yourself and don't let people judge you. Be like the Brit Pug.",
            matrl: "Cotton, Hemp",
            size: "12*18"
        },
    ]
    //object constructor for items
    var Item = function (picture, name, price, color, qty, size, msg) {
        this.picture = picture
        this.name = name
        this.price = price
        this.color = color
        this.qty = qty
        this.size = size
        this.msg = msg
    }
    //add new item to cart
    function addItem(picture, name, price, color, qty, size, msg) {
        var cart = JSON.parse(localStorage.getItem("cartItems"));
        var item = new Item(picture, name, price, color, qty, size, msg);
        cart.push(item)
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }
    //remove intem from cart
    function removeItem(index) {
        var cart = JSON.parse(localStorage.getItem("cartItems"));
        cart.splice(index, 1);//remove 1 item at index from the array
        localStorage.setItem("cartItems", JSON.stringify(cart));
    }

    //show all items from data
    for (var i = 0; i < data.length; i++) {
        $(".products").append(
            "<div class='gallery'><a class='viewbutton' id='" + i + "' href='detail.html'><div class='container'><img src='" + "img/" + data[i].pic + "_white" + ".jpg" + "'><div class='middle'><div class='text'>View</div></div></div></a><div class='desc'>" + data[i].name + "<br><h7>" + "$" + data[i].price + "</h7></div></div>"
        );
    };
    //Update product detail page when click on view
    $(document).on('click', '.viewbutton', function () {
        var index = Number(this.id);
        vieweditem = index;
        localStorage.setItem('clicked', index);
    });
    var quantity = "";
    for (var i = 1; i < 11; i++) {
        quantity = quantity + "<option value=" + i + ">" + i + "</option>"
    }
    var vieweditem = localStorage.getItem('clicked');
    //parse size string to get hight and width in number for future manipulation
    var tempsize = data[vieweditem].size.split("*");
    var h = tempsize[0];
    var w = tempsize[1];
    //change content on detail page dynamically
    $(".detail").append(
        "<div class='detailleft'><img src='" + "img/" + data[vieweditem].pic + "_white" + ".jpg" + "' width='100%' ></div><div class='detailright'><h1>" + data[vieweditem].name + "</h1><h2>$15</h2><div id='options'>"
        + " <select name='' id='color'><option value='white'>white</option><option value='blue'>blue</option></select>"
        + "<div id='option-spacing'><select name='' id='size'><option value=1>small</option><option value=2>large</option></select></div><div id='option-spacing'>Qty<select name='' id='qty'>" + quantity + "</select></div><br/>"
        + "<p class='note'>*You can add customization message when check out</p></div><div><div class='button addtocart'>Add to cart</div>"
        + "<a class='heart'><svg version='1.1' id='heart' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='20px'viewBox='0 0 83.9 71.9' width='25px'>"
        + "<path class='st0' d='M22.2,0C16.5,0,10.8,2.1,6.5,6.5c-8.7,8.6-8.7,22.7,0,31.3l33.3,33.3c1.1,1.1,3.1,1.1,4.2,0C55.2,60,66.3,49,77.4,37.9c8.7-8.6,8.7-22.7,0-31.3S54.7-2.1,46,6.5l-4,4l-4.1-4.1C33.6,2.1,27.9,0,22.2,0z'/></svg></a></div>"
        + "<div class='description'>"
        + "<hr><p>" + data[vieweditem].dscrp + "</p>"
        + "<p><b>Material:</b> " + data[vieweditem].matrl + "<b id='dimention'>Dimention:</b><span id='sizeid'>" + h + "''" + "x" + w + "''" + "</span></p>"
        + "</div></div>"
    );
    //when color selection changes
    $("#color").change(function () {
        var color = $("#color option:selected").val();
        $(".detailleft img").replaceWith(
            "<img src='" + "img/" + data[vieweditem].pic + "_" + color + ".jpg" + "' width='100%' >"
        );
    })
    var quantitySelected = 1;
    var sizescale = 1;
    var s = "small";
    //when quantity selection changes
    $("#qty").change(function () {
        quantitySelected = $("#qty option:selected").val();
    })
    //when size selection changes
    $("#size").change(function () {
        sizescale = $("#size option:selected").val();
        s = $("#size option:selected").text();
        $(".detailright h2").replaceWith("<h2>$" + data[vieweditem].price * sizescale + "</h>");
        var th = h * sizescale;//temporary dimension for large sizes
        var tw = w * sizescale;
        $("#sizeid").replaceWith("<span id='sizeid'>" + th + "''" + "x" + tw + "''" + "</span>");//the dimension is doubled when size is large
    })
    //Add to cart
    $(".addtocart").click(function () {
        var color = $("#color option:selected").val();
        var vieweditem = localStorage.getItem('clicked');
        var picture = data[vieweditem].pic;
        var name = data[vieweditem].name;
        var price = data[vieweditem].price * sizescale;
        addItem(picture, name, price, color, quantitySelected, s);
        location.reload();//reload page to update view

    });
    //when clicked on remove button on shopping cart page
    $(document).on('click', '.remove', function () {
        id = this.id;
        var temp = id.split("_");//Use the number after '_' as index
        var i = Number(temp[1]);
        removeItem(i);
        location.reload();//reload page to update view
    });
    var subtotal = 0;
    var tax = 0;
    var total = 0;
    var currentCart = JSON.parse(localStorage.getItem("cartItems"));
    for (var i = 0; i < currentCart.length; i++) {
        $('.cart-item').append(
            "<tr><td><img src='img/" + currentCart[i].picture + "_" + currentCart[i].color + ".jpg" + "' width='250px'></td>"
            + "<td><a href='#'>" + currentCart[i].name + "</a><br><div class='message'>"
            + "<i class='fa fa-plus-circle' aria-hidden='true'></i><span class='customize'>Add customization message</span></div></td>"
            + "<td class='numCell'>" + currentCart[i].size + "</td><td class='numCell'>$" + currentCart[i].price + "</td><td class='center'><input type='number' class='qty' value='" + currentCart[i].qty + "' min='1'></td><td>"
            + "<div class='remove' id=" + "cart_" + i + "><i class='fa fa-times-circle' aria-hidden='true'></i></div></td><td class='numCell'>$" + currentCart[i].price * currentCart[i].qty + "</td></tr>"
        )
        // calculate subtotal,tax and total
        subtotal = currentCart[i].price * currentCart[i].qty + subtotal;
        tax = Math.round(subtotal * 6) / 100;
        total = tax + subtotal + 4;
    };
    //Update subtotal,tax and total
    $("#Subtotal").replaceWith("<td id='Subtotal'>$" + subtotal + "</td>");
    $("#Tax").replaceWith("<td id='Tax'>$" + tax + "</td>");
    $("#Total").replaceWith("<td id='Total'>$" + total + "</td>");
    //Update number on cart icon
    $(".badge").append(
        JSON.parse(localStorage.getItem("cartItems")).length
    );
    //save time object constructor
    var sItem = function (index, picture, name, price) {
        this.index = index
        this.picture = picture
        this.name = name
        this.price = price
    }
    //save item function
    function saveItem(index, picture, name, price) {
        var saved = JSON.parse(localStorage.getItem("savedItems"));
        var item = new sItem(index, picture, name, price);
        saved.push(item)
        localStorage.setItem("savedItems", JSON.stringify(saved));
    }
    function undosaveItem(indexinsaved) {
        var saved = JSON.parse(localStorage.getItem("savedItems"));
        saved.splice(indexinsaved, 1);//remove 1 item at index from the array
        localStorage.setItem("savedItems", JSON.stringify(saved));
    }
    //save item

    var saved = JSON.parse(localStorage.getItem("savedItems"));
    var arrNames = [];
    Object.keys(saved).forEach(function (key) {
        //get the value of name
        var val = saved[key].index;
        //push the name string in the array
        arrNames.push(val);
    });
    var isSaved = jQuery.inArray(vieweditem, arrNames) !== -1;
    $("#heart").click(function () {
        if (isSaved == false) {
            var picture = data[vieweditem].pic;
            var name = data[vieweditem].name;
            var price = data[vieweditem].price * sizescale;
            var index = vieweditem;
            saveItem(index, picture, name, price);
            // console.log("save");
        } else {
            // console.log("unsave");
            // console.log("issaved?" + isSaved);
            var indexinsaved = jQuery.inArray(vieweditem, arrNames);
            // alert(indexinsaved);
            undosaveItem(indexinsaved);
        }
        location.reload();//reload page to update view
        // console.log(JSON.parse(localStorage.getItem("savedItems")));
        // console.log(jQuery.inArray(vieweditem, arrNames));
    })

    if (jQuery.inArray(vieweditem, arrNames) !== -1) {
        $("#heart").css("fill", "#f47676");//change style of the save button
    }
    else { $("#heart").css("fill", "#9B9B9B"); }

    //show svaed items in shopping cart page
    for (var i = 0; i < saved.length; i++) {
        $(".container-saved").append(
            "<div class='gallery'><a class='viewbutton' id='" + i + "' href='detail.html'><div class='container'><img src='" + "img/" + data[i].pic + "_white" + ".jpg" + "'><div class='middle'><div class='text'>View</div></div></div></a><div class='desc'>" + data[i].name + "<br><h7>" + "$" + data[i].price + "</h7></div></div>"
        );
    };
});