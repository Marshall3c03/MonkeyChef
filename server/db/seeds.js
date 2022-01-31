use recipes;

db.dropDatabase();

db.recipes.insertMany([
    {
        "name" : "Balmoral Chicken",
        "ingredients" : [
            { "amount" : 4,
            "ingredient" : "chicken breasts" },
            { "amount" : 130,
            "unit" : "g",
            "ingredient" : "haggis" },
            { "amount" : 4,
            "ingredient" : "rashes of bacon" },
            { "amount" : 30,
            "unit" : "ml",
            "ingredient" : "olive oil" },
            { "amount" : 20,
            "unit" : "g",
            "ingredient" : "butter" },
        ],
        "method" : "1. Preheat oven to 180°C. 2. Slice down the side of each chicken breast, making a pocket. 3. Slice the haggis into small chunks and squidge (technical term) into the chicken pocket. 4. Wrap each breast in a rasher of bacon and secure with a toothpick if necessary. 5. Heat the oil and butter in a non-stick frying pan, sear the bacon wrapped around the chicken breasts. Give 2 minutes on each side. 6. Place in an oven proof dish and transfer to the oven for 35-40 minutes or until cooked through & piping hot. 7. Serve with the peppercorn sauce and a selection of vegetables and/ or mash potato.",
        "image": "https://www.carolinescooking.com/wp-content/uploads/2022/01/haggis-stuffed-chicken-Balmoral-featured-pic-sq.jpg",
        "dietary": "gluten-free",
        "category": "dinner",
        "servings" : 4
    },
    {
        "name" : "Easy butter chicken",
        "ingredients" : [
            { "amount" : 500 ,
              "unit" : "g",
              "ingredient" : "Skinless boneless chicken thighs"
            },
            { "amount" : 1 ,
              "ingredient" : "Lemon"
            },
            { "amount" : 2 ,
              "ingredient" : "Ground cumin"
            },
            { "amount" : 2 ,
              "unit" : "tsp",
              "ingredient" : "Paprika"
            },
            { "amount" : 1.5 ,
              "unit" : "tsp",
              "ingredient" : "Hot chilli powder"
            },
            { "amount" : 200 ,
              "unit" : "g",
              "ingredient" : "Natural yogurt"
            },
            { "amount" : 2 ,
              "unit" : "tbsp",
              "ingredient" : "Vegetable oil"
            },
            { "amount" : 1 ,
              "ingredient" : "Onion"
            },
            { "amount" : 3 ,
              "ingredient" : "Garlic cloves"
            },
            { "amount" : 1 ,
              "ingredient" : "Green chilli"
            },
            { "amount" : 1 ,
              "ingredient" : "Thumb-sized piece of ginger"
            },
            { "amount" : 1 ,
              "unit" : "tsp",
              "ingredient" : "Garam masala"
            },
            { "amount" : 2 ,
              "unit" : "tsp",
              "ingredient" : "Ground fenugreek"
            },
            { "amount" : 3 ,
              "unit" : "tbsp",
              "ingredient" : "Tomato purée"
            },
            { "amount" : 300 ,
              "unit" : "ml",
              "ingredient" : "Chicken stock"
            },
            { "amount" : 50 ,
              "unit" : "g",
              "ingredient" : "Flaked almonds"
            }
        ],
        "method" : "STEP 1: In a medium bowl, mix all the marinade ingredients with some seasoning. Chop the chicken into bite-sized pieces and toss with the marinade. Cover and chill in the fridge for 1 hr or overnight. STEP 2: In a large, heavy saucepan, heat the oil. Add the onion, garlic, green chilli, ginger and some seasoning. Fry on a medium heat for 10 mins or until soft. STEP 3: Add the spices with the tomato purée, cook for a further 2 mins until fragrant, then add the stock and marinated chicken. Cook for 15 mins, then add any remaining marinade left in the bowl. Simmer for 5 mins, then sprinkle with the toasted almonds. Serve with rice, naan bread, chutney, coriander and lime wedges, if you like.",
        "image": "https://img.buzzfeed.com/video-api-prod/assets/6e6a56c27c68410991ce7d4e4acc7dee/BFV8692_Easy_Butter_Chicken_Thumb.jpg",
        "dietary": "vegan",
        "category": "dinner",
        "servings" : 4
    },
    {
        "name" : "Thumbprint Cookies",

        "ingredients" : [
            { "amount" : 270,
              "unit" : "g",
              "ingredient" : "plain flour"
            },
            { "amount" : 100,
              "unit" : "g",
              "ingredient" : "sugar"
            },
            { "amount" : 1,
              "ingredient" : "egg"
            },
            { "amount" : 170,
              "unit" : "g",
              "ingredient" : "butter"
            }],
        
        "image": "https://www.livewellbakeoften.com/wp-content/uploads/2019/07/Thumbprint-Cookies-10-5.jpg",
        "dietary": "gluten-free",
        "category": "sweet",
        "servings" : 16
    },
    {
        "name" : "Mushroom soup",
        "ingredients" : [
            { "amount" : 90,
              "unit" : "g",
              "ingredient" : "butter"},
            { "amount" : 2,
              "ingredient" : "onion"},
            { "amount" : 1,
              "ingredient" : "garlic clove"},
            { "amount" : 500,
              "unit" : "g",
              "ingredient" : "mushrooms"},
            { "amount" : 2,
              "unit" : "tbsp",
              "ingredient" : "plain flour"},
            { "amount" : 1,
              "unit" : "l",
              "ingredient" : "hot chicken stock"},
            { "amount" : 1,
              "ingredient" : "bay leaf"},  
            { "amount" : 4,
              "unit" : "tbsp",
              "ingredient" : "single cream"},
            { "amount" : 1,
              "ingredient" : "small flat-leaf parsley"},     
            ],
        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mushroom_soup-9b55c55.jpg",
        "dietary": "dairy-free",
        "category": "lunch",
        "servings" : 8
    },
   
    {
        "name" : "Beef Burger",
        "ingredients" : [
            { "amount" : 1,
              "unit" : "kg",
              "ingredient" : "beef mince" },
            { "amount" : 1,
              "ingredient" : "onion" },
            { "amount" : 1,
              "ingredient" : "garlic clove" },
            { "amount" : 2,
              "unit" : "tsp",
              "ingredient" : "dijon mustard" },
            { "amount" : 1,
              "unit" : "tbsp",
              "ingredient" : "Worcestershire sauce" },
            { "amount" : 1,
              "ingredient" : "small handful of chopped fresh flatleaf parsley" },
            { "amount" : 1,
              "ingredient" : "large dill pickle, finely chopped" },
            { "amount" : 1,
              "ingredient" : "egg" },
            { "amount" : 8,
              "ingredient" : "rolls" }
            ],
      "method" : "Place all the ingredients for the burgers in a large bowl. Season and mix well. Cover and chill in the fridge for 1 hour. Using wet hands, shape the mixture into 8 burgers. If you want to cook them straight away skip to step 4. If you are freezing them; place flat between sheets of baking paper in a rigid freezerproof container. Freeze for up to 3 months. When ready to use, defrost the burgers completely in the fridge; this will take 3-4 hours. Heat a griddle pan or barbecue to hot. Brush both sides of the burgers with oil and cook for 3-4 minutes each side or until well browned and cooked. Meanwhile, preheat the grill to medium hot. Top each burger with a slice of cheese and grill for 2 minutes until bubbling. Toast the burger buns until lightly golden. Mix the mayonnaise with the mustard and spread over the base of each bun. Add some tomato, lettuce and avocado slices, then the burger, red onion slices and the other half of the bun. Serve with a small bowl of ketchup and fries, if you like.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/905610-1-eng-GB_burger-768x960.jpg",
      "category" : "dinner",
      "servings" : 8
    },  

    {
      "name" : "Buffalo Wings with Blue Cheese Sauce",
      "ingredients" : [
          { "amount" : 3,
            "unit" : "tbsp",
            "ingredient" : "plain flour" },
          { "amount" : 2,
            "unit" : "tsp",
            "ingredient" : "garlic powder" },
          { "amount" : 2,
            "unit" : "tsp",
            "ingredient" : "cayenne pepper" },
          { "amount" : 1,
            "unit" : "tsp",
            "ingredient" : "paprika" },
          { "amount" : 1.5,
            "unit" : "kg",
            "ingredient" : "chicken wings" },
          { "amount" : 120,
            "unit" : "ml",
            "ingredient" : "hot sauce" },
          { "amount" : 100,
            "unit" : "ml",
            "ingredient" : "salted butter" },
          { "amount" : 50,
            "unit" : "g",
            "ingredient" : "soft brown sugar" },
          { "amount" : 3,
            "unit" : "tbsp",
            "ingredient" : "runny honey" },
          { "amount" : 1,
            "unit" : "tbsp",
            "ingredient" : "white wine vinegar" },
          { "amount" : 40,
            "unit" : "g",
            "ingredient" : "salted butter" },
          { "amount" : 2,
            "unit" : "tbsp",
            "ingredient" : "plain flour" },
          { "amount" : 150,
            "unit" : "ml",
            "ingredient" : "whole milk" },
          { "amount" : 150,
            "unit" : "g",
            "ingredient" : "blue cheese (eg. stilton)" },
          { "amount" : 100,
            "unit" : "ml",
            "ingredient" : "soured cream" }
          ],
      "method" : "Mix the flour, garlic powder, cayenne pepper, paprika and a large pinch of salt in a large bowl. Add the chicken and toss to coat, then cover and chill for 30 minutes. For the buffalo sauce, mix all the ingredients in a small pan over a medium heat, stirring often, until smooth. Bring to a simmer, then set aside to cool. For the blue cheese sauce, melt the butter in a medium pan, then add the flour and cook, stirring, for 1 minute. Add the milk gradually, stirring, until smooth and thickened. Bring to a simmer, stirring, then remove from the heat and crumble in the cheese. Stir until smooth. Stir in the soured cream, then season to taste and leave to cool. Light the barbecue so the coals are glowing (and not directly underthe food) or the gas is on medium. Cook the wings for 10-15 minutes with the lid closed, turning from time to time. Transfer the wings to a large bowl and toss with the buffalo sauce, then return to the barbecue and cook for 10-15 minutes more, turning and basting with leftover buffalo sauce, until charred and cooked through. Serve the wings hot, with the cheese sauce and an apple and celery salad, if you like.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/06/01.Delicious-BBQ-buffalo-wings-960-768x960.jpg",
      "category" : "dinner",
      "servings" : 4,
      "notes" : ""
      },
      
      {
      "name" : "Slow Cooker Pulled Pork",
      "ingredients" : [
          { "amount" : 800,
            "unit" : "g",
            "ingredient" : "pork shoulder" },
          { "amount" : 2,
            "ingredient" : "red onions" },
          { "amount" : 4,
            "ingredient" : "garlic cloves" },
          { "amount" : 1,
            "unit" : "tbsp",
            "ingredient" : "ground cumin" },
          { "amount" : 1,
            "unit" : "tbsp",
            "ingredient" : "ground coriander" },
          { "amount" : 0.5,
            "unit" : "tsp",
            "ingredient" : "chilli powder" },
          { "amount" : 0.5,
            "unit" : "tsp",
            "ingredient" : "paprika" },
          { "amount" : 0.5,
            "unit" : "tsp",
            "ingredient" : "ground all spice" },
          { "amount" : 2,
            "unit" : "tsp",
            "ingredient" : "oregano" },
          { "amount" : 4,
            "unit" : "tbsp",
            "ingredient" : "tomato puree" },
          { "amount" : 4,
            "unit" : "tbsp",
            "ingredient" : "red wine vinegar" },
          { "amount" : 400,
            "unit" : "g",
            "ingredient" : "chopped tomatoes" }
          ],
      "method" : "Add all the ingredients (except the coriander, limes and Tabasco), some salt and pepper and 100ml water to your slow cooker and cook on low for 6 hours, or on high for 4 hours. There’s no need to stir the pork while it’s cooking so you can go out and leave it simmering (see Know-how below for how to cook it in a regular oven). Once the cooking time is up, check the seasoning then, using 2 forks, shred the meat to ‘pull’ it. Serve sprinkled with the coriander, with lime wedges for squeezing, hot sauce, if you like, and rice, as a jacket potato topper or in a Tex-Mex pasta bake.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/04/960_SLOW_COOKED_PULLED_PORK_FLATBREAD_GUACAMOLE_SALSA_02-768x960.jpg",
      "category" : "dinner",
      "servings" : 8,
      "notes" : ""
      },
      
      {
      "name" : "Ultimate Grilled Cheese Sandwich",
      "ingredients" : [
      { "amount" : 2,
        "ingredient" : "crusty white bread slices" },
      { "amount" : 25,
        "unit" : "g",
        "ingredient" : "cheddar" },
      { "amount" : 25,
        "unit" : "g",
        "ingredient" : "gruyere" },
      { "amount" : 25,
        "unit" : "g",
        "ingredient" : "mozzarella" },
      ],
      "method" : "Lightly toast the bread, then cool slightly. Spread butter on both sides of each slice, then divide the cheeses between them. Heat a splash of oil in the pan over a medium heat. Add both slices of bread, cheese-side up, then cover with the lid to help the cheese start to melt. After 2 minutes, remove the lid and continue frying until the underside of the bread is golden and the cheese looks melty. Carefully and quickly sandwich the 2 slices together so all the cheeses are in the middle, then gently press down with a spatula/fish slice and continue cooking until the cheese has melted and the bread is deep golden – it’s best to turn the sandwich every minute or so. Slice, then serve straightaway with gherkins and pickle/chutney.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2020/01/02.Delicious-January-2020-cheese-sandwich-768x960.jpg",
      "category" : "lunch",
      "servings" : 1,
      "notes" : ""
      },
      
      {
      "name" : "Triple Chocolate Cookies",
      "ingredients" : [
      { "amount" : 125,
        "unit" : "g",
        "ingredient" : "salted butter" },
      { "amount" : 100,
        "unit" : "g",
        "ingredient" : "golden caste sugar" },
      { "amount" : 25,
        "unit" : "g",
        "ingredient" : "dark muscovado sugar" },
      { "amount" : 1,
        "unit" : "tsp",
        "ingredient" : "vanilla bean paste" },
      { "amount" : 1,
        "ingredient" : "medium egg" },
      { "amount" : 2,
        "unit" : "tbsp",
        "ingredient" : "milk" },
      { "amount" : 100,
        "unit" : "g",
        "ingredient" : "plain flour" },
      { "amount" : 50,
        "unit" : "g",
        "ingredient" : "cocoa powder" },
      { "amount" : 75,
        "unit" : "g",
        "ingredient" : "chocolate chunks" },
      ],
      "method" : "Put the butter and both sugars in a large mixing bowl (or in the bowl of a food processor fitted with a paddle beater) and beat until soft, lightly and creamy (about 7-10 minutes). Stir in the vanilla bean paste. Mix the egg and milk together in a jug, then add to the bowl with the butter/sugar and mix until smooth. Add the flour, cocoa and chocolate chunks and beat to form a smooth dough. Heat the oven to 180ºC/160ºC fan/gas 4. Divide the dough into 14 equal amounts, then roll into rough balls (see tip). Space the balls out over the baking sheets, leaving room for them to spread as they bake. Chill the cookie balls for 30 minutes. Bake the cookies for 12-15 minutes, then remove from the oven. Working with one baking sheet at a time, give the baking sheet a short, sharp bang on the work surface (this knocks out any air in the puffed cookies and gives them the desired ripple effect). Repeat with the other baking sheet. Set both sheets on a wire rack to cool for 5 minutes. Lift the baking paper sheets and cookies onto the wire rack until the biscuits are cool enough to eat.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/09/triple-chocolate-cookies-768x960.jpg",
      "category" : "sweet",
      "servings" : 14,
      "notes" : ""
      },
      
      {
      "name" : "Eggs Benedict",
      "ingredients" : [
      { "amount" : 8,
        "ingredient" : "bacon slices" },
      { "amount" : 1,
        "unit" : "tbsp",
        "ingredient" : "white wine vinegar" },
      { "amount" : 4,
        "ingredient" : "english muffins" },
      { "amount" : 1,
        "unit" : "tbsp",
        "ingredient" : "chives" },
      { "amount" : 225,
        "unit" : "g",
        "ingredient" : "unsalted butter" },
      { "amount" : 2,
        "ingredient" : "eggs" },
      { "amount" : 1,
        "ingredient" : "juice of half a lemon" },
      { "amount" : 1,
        "ingredient" : "pinch of cayenne pepper" },
      ],
      "method" : "Put the bacon on the grill tray ready for cooking. Half-fill a large pan with water and bring to the boil. Add the vinegar and a pinch of salt. Split the muffins and line a baking tray with kitchen paper. Next, poach the eggs in 2 batches of four. Turn the vinegar water to a very gentle simmer (a few bubbles at the base of the pan, but no more). Break an egg into a teacup, then slide it into the pan. Repeat 3 times, then cook for 3 minutes. Carefully lift out the eggs with a slotted spoon onto the lined baking tray. Repeat with the other 4 eggs. Cover the poached eggs with cling film (or with a large upturned bowl) and set aside. Leave the water on a gentle simmer. For the hollandaise sauce, put the butter in a small pan and leave over a very low heat until melted. Carefully skim off any foam from the surface, then pour the clear melted butter into a small bowl, leaving behind the milky liquid that will have settled on the base of the pan. Discard the milky liquid, wipe the pan clean, then return the clear melted butter to the pan and put over a low heat. Fill a medium pan with about 5cm water and bring to a simmer. Sit a medium heatproof glass bowl over the pan without the base touching the water. Add the egg yolks and 2 tbsp cold water and whisk by hand or with an electric hand mixer until thick and mousse-like - it needs to feel warm when you dip in your little finger. Heat the grill to high. Increase the heat under the pan of clarified butter until it’s gently bubbling and hot. Remove the bowl containing the egg yolks from over the pan and very gradually drizzle in the hot clarified butter, whisking all the time, until the mixture becomes thick and glossy. Whisk in the lemon juice, cayenne pepper and salt to taste. Cover the bowl with cling film, sit it back over the pan of hot water and set aside off the heat. Toast the muffins until golden. Meanwhile, grill the bacon for 1-2 minutes until just cooked through but not crisp. Slide the poached eggs back into the just-simmering water and leave for 30 seconds. Reline the baking tray with kitchen paper, then lift out the eggs onto the tray and leave to drain briefly. Put 2 muffin halves on each of 4 warmed plates, spread with a little butter and top each half with a bacon rasher and a poached egg. Spoon some of the hollandaise sauce over each egg, sprinkle with chives and a little extra cayenne pepper and serve straightaway.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/09/eggs-benedict-768x960.jpg",
      "category" : "breakfast",
      "servings" : 4,
      "notes" : ""
      },
      
      {
      "name" : "Banoffee Pie",
      "ingredients" : [
      { "amount" : 175,
        "unit" : "g",
        "ingredient" : "plain flour" },
      { "amount": 50,
        "unit" : "g",
        "ingredient" : "icing sugar" },
      { "amount" : 205,
        "unit" : "g",
        "ingredient" : "butter" },
      { "amount" : 1,
        "ingredient" : "egg" },
      { "amount" : 115,
        "unit" : "g",
        "ingredient" : "light muscovado sugar" },
      { "amount" : 397,
        "unit" : "g",
        "ingredient" : "carnation caramel" },
      { "amount" : 0.5,
        "unit" : "tsp",
        "ingredient" : "sea salt" },
      { "amount" : 300,
        "unit" : "ml",
        "ingredient" : "double cream" },
      { "amount" : 1,
        "unit" : "tsp",
        "ingredient" : "instant coffee powder" },
      { "amount" : 2,
        "unit" : "tsp",
        "ingredient" : "caster sugar" },
      { "amount" : 5,
        "ingredient" : "medium ripe bananas" },
      { "amount" : 30,
        "unit" : "g",
        "ingredient" : "dark chocolate" },
      ],
      "method" : "Put a baking sheet on the middle shelf of the oven and heat the oven to 200°C/180°C fan/gas 6. For the pastry, sift the flour, icing sugar and a pinch of salt into a food processor. Add the butter and pulse briefly until the mixture resembles fine breadcrumbs. (Alternatively, sift the flour and icing sugar into a large bowl and rub in the butter using your fingertips.) In a small bowl, beat the egg yolk briefly with 2 tbsp cold water. Tip the crumb mixture into a large bowl, add the egg yolk mixture and bring together into a ball. Turn out onto a lightly floured surface and knead briefly until smooth. Shape into a disc, wrap in cling film and chill for 15 minutes. Once chilled, remove the pastry from the fridge, roll out to a circle 30cm wide and about 3mm thick, then use to line the prepared tin. Chill for another 15 minutes. Line the pastry case with foil and a layer of baking beans or uncooked rice and bake for 15-20 minutes until the edge is biscuit-coloured. Carefully remove the foil and beans/rice and bake for 6-8 minutes more or until crisp and golden. Set aside to cool. While the pastry case cools, make the toffee filling. Put the butter and sugar in a medium pan over a medium heat. Whisk continuously as the butter melts and the sugar dissolves until it comes together ina smooth toffee sauce with no trace of melted butter. Stir in the caramel, then bring to the boil and simmer for 3 minutes. Remove from the heat and stir in the sea salt, if using. Pour the filling into the case and chill for at least 1 hour before topping. For the topping, whip together the cream, coffee powder and caster sugar until just forming soft peaks. Thickly slice the bananas and scatter them evenly over the toffee sauce. Spoon over the cream topping, taking it right to the edges and swirling it attractively as you go. Chill for 1 hour. To serve, carefully remove the pie from the tin to a serving plate. Melt the chocolate in bursts in a microwave (or in a small bowl set over a pan of barely simmering water – don’t let the bowl touch the water), then drizzle it over the pie. Serve cut into wedges.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/941116-1-eng-GB_banoffee-pie-768x960.jpg",
      "category" : "sweet",
      "servings" : 12,
      "notes" : ""
      },
      
      {
      "name" : "Spiced Beef and Chirozo Empanada",
      "ingredients" : [
        { "amount" : 475,
          "unit" : "ml",
          "ingredient" : "boiling water" },
        { "amount" : 115,
          "unit" : "g",
          "ingredient" : "lard" },
        { "amount" : 1.5,
          "unit" : "tsp",
          "ingredient" : "salt" },
        { "amount" : 750,
          "unit" : "g",
          "ingredient" : "plain flour" },
        { "amount" : 600,
          "unit" : "g",
          "ingredient" : "beef shin" },
        { "amount" : 200,
          "unit" : "g",
          "ingredient" : "chorizo" },
        { "amount" : 1,
          "ingredient" : "onion" },
        { "amount" : 4,
          "ingredient" : "garlic cloves" },
        { "amount" : 1,
          "unit" : "tsp",
          "ingredient" : "paprika" },
        { "amount" : 1,
          "ingredient" : "pinch off cayenne pepper" },
        { "amount" : 1,
          "unit" : "tbsp",
          "ingredient" : "ground cumin" },
        { "amount" : 2,
          "unit" : "tbsp",
          "ingredient" : "tomato puree" },
        { "amount" : 2,
          "unit" : "tbsp",
          "ingredient" : "thyme" },
        { "amount" : 1,
          "unit" : "tbsp",
          "ingredient" : "oregano" },
        { "amount" : 1,
          "unit" : "l",
          "ingredient" : "beef stock" },
        { "amount" : 4,
          "ingredient" : "spring onions" }
      ],
      "method" : "To make the pastry, put the boiling water, lard and salt in a mixing bowl or jug, then stir to melt the lard. Put the flour in another mixing bowl, then gradually stir in the liquid, until it forms a smooth dough. As soon as it's cool enough, work it with your hands - the dough will become too stiff at the end to work with a spoon. Once all the water has been incorporated, tip the dough out onto a work surface and knead for a few minutes until smooth. th shortcrust, which shouldn't be handled too much). When it's soft and pliable, wrap in cling film and chill. To make the filling, heat a glug of oil in a large sauté pan or deep frying pan over a high heat. Toss the beef in the seasoned flour, shaking off the excess, then fry on all sides until browned and slightly caramelised (don’t crowd the pan – cook in batches if necessary). Transfer to a bowl and set aside. Add the chorizo to the pan and fry until it releases its oil and turns crisp, then turn down the heat, remove the chorizo with a slotted spoon and add to the beef bowl. Add the onion and garlic to the pan and cook gently for 5-10 minutes over a low-medium heat, stirring often, until the onion has softened but not coloured. Add the spices and cook for a few minutes, stirring, then add the tomato purée and herbs, and cook for a further few minutes. Return the meat to the pan, pour in enough stock to cover, then bring to a gentle simmer and cook, uncovered, for 2½-3 hours, stirring frequently, until the beef is very tender. If the mixture looks like it's becoming dry at any point, top up with any leftover stock or freshly boiled water. The liquid should reduce and thicken, but don't let it dry out. Once the beef is tender, stir in the spring onions and olives, then cook for another 5 minutes. Remove from the heat and leave to cool completely. When you're ready to assemble the empanadas, heat the oven to 200°C/180°C fan/gas 6. Roll out the pastry on a lightly floured surface to the thickness of a £1 coin. Cut out about 15 x 12-15cm diameter circles, using a small plate or saucer as a guide, re-rolling the pastry offcuts as necessary. Put around 2 tbsp of filling which should now be thick - leave behind any runny sauce) into the centre of each circle and brush the edges with water. You can crimp the edges (like a Cornish pasty) to seal or simply press them with a fork. Put the empanadas on baking sheets and bake for 25-30 minutes.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/712647-1-eng-GB_beef-empananads-768x960.jpg",
      "category" : "dinner",
      "servings" : 4,
      "notes" : ""
      },
      
      {
      "name" : "Cheese and Broccoli Bake",
      "ingredients" : [
        { "amount" : 300,
          "unit" : "g",
          "ingredient" : "macaroni" },
        { "amount" : 200,
          "unit" : "g",
          "ingredient" : "tenderstem broccoli" },
        { "amount" : 50,
          "unit" : "ml",
          "ingredient" : "olive oil" },
        { "amount" : 1,
          "ingredient" : "onion" },
        { "amount" : 50,
          "unit" : "g",
          "ingredient" : "plain flour" },
        { "amount" : 550,
          "unit" : "ml",
          "ingredient" : "semi-skimmed milk" },
        { "amount" : 100,
          "unit" : "g",
          "ingredient" : "spinach" },
        { "amount" : 60,
          "unit" : "g",
          "ingredient" : "cheddar" },
        { "amount" : 60,
          "unit" : "g",
          "ingredient" : "gruyere" },
        { "amount" : 40,
          "unit" : "g",
          "ingredient" : "breadcrumbs" }
      ],
      "method" : "Bring a large pan of salted water to the boil over a high heat. Add the macaroni and cook for 8 minutes or until it still has some bite (al dente). For the last 2 minutes add the broccoli, then drain and rinse under cold water to refresh. Cover with damp kitchen paper. Meanwhile in another large deep saucepan, warm the olive oil over a medium heat. Add the onion and gently fry for 10 minutes or until soft. Add the flour, turn up the heat slightly and cook for 2-3 minutes, stirring, until the flour turns a little darker and smells biscuity. Heat the oven to 200°C/ 180°C fan/gas 6. Turn the heat to low, then slowly add the milk, whisking all the time with a balloon whisk. Turn the heat to medium and stir until the mix thickens and boils gently. Add the spinach and half the grated cheeses. Stir until the spinach wilts and the cheese melts. Add the pasta and broccoli, season to taste, then pour into a 1.5 litre ovenproof dish (see make ahead). Mix the rest of the cheese with the breadcrumbs, then use to top the macaroni. Bake for 20-25 minutes until the top is deep golden brown and the sauce is bubbling. Serve with a sharply dressed green salad, if you like.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2018/07/612151-1-eng-GB_delicious_midweekbible_nov15_19015_maccheesespinachbroccoli-768x960.jpg",
      "category" : "dinner",
      "servings" : 4,
      "dietary" : "vegetarian",
      "notes" : ""
      },
      
      {
      "name" : "Root Vegetable and Lentil Tagine",
      "ingredients" : [
        { "amount" : 1,
          "unit" : "tbsp",
          "ingredient" : "olive oil" },
        { "amount" : 900,
          "unit" : "g",
          "ingredient" : "mixed root vegetables" },
        { "amount" : 3,
          "unit" : "tbsp",
          "ingredient" : "dried harissa" },
        { "amount" : 1,
          "ingredient" : "large handful fresh parsley" },
        { "amount" : 200,
          "unit" : "g",
          "ingredient" : "dried green lentils" },
        { "amount" : 800,
          "unit" : "g",
          "ingredient" : "chopped tomatoes" },
        { "amount" : 700,
          "unit" : "ml",
          "ingredient" : "vegetable stock" },
        { "amount" : 1,
          "ingredient" : "lemon" },
        { "amount" : 6,
          "ingredient" : "prunes" },
        { "amount" : 1,
          "ingredient" : "small cauliflower" },
        { "amount" : 500,
          "unit" : "g",
          "ingredient" : "rice" }
        ],
      "method" : "Heat the oil in a large heavy-based flameproof casserole (with a lid) over a medium heat. Add the root veg and fry for 10 minutes, stirring occasionally, until beginning to soften. Stir in the harissa paste, parsley stalks and lentils. Add the tomatoes and stock, then stir in the preserved lemon and prunes. Bring to a simmer, then cover and cook for 20-25 minutes, stirring occasionally, until the lentils are tender. Stir in the cauliflower, then bring back to a simmer. Season, then cook for 3-4 minutes, uncovered, until the cauliflower is starting to become tender. Add the cauliflower leaves, then cook for 2 minutes more. Serve with coconut yogurt and the parsley leaves scattered over the top, with rice or couscous.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2019/03/tagine-768x960.jpg",
      "category" : "dinner",
      "servings" : 6,
      "dietary" : "vegan",
      "notes" : ""
      },
      
      {
      "name" : "Vegan Pesto Spaghetti",
      "ingredients" : [
        { "amount" : 2,
          "unit" : "tbsp",
          "ingredient" : "olive oil" },
        { "amount" : 1,
          "ingredient" : "small onion" },
        { "amount" : 2,
          "ingredient" : "garlic cloves" },
        { "amount" : 1,
          "ingredient" : "courgette" },
        { "amount" : 400,
          "unit" : "ml",
          "ingredient" : "vegetable stock" },
        { "amount" : 150,
          "unit" : "g",
          "ingredient" : "spaghetti" },
        { "amount" : 50,
          "unit" : "g",
          "ingredient" : "broad beans" },
        { "amount" : 50,
          "unit" : "g",
          "ingredient" : "runner beans" },
        { "amount" : 1,
          "ingredient" : "lemon" },
        { "amount" : 50,
          "unit" : "g",
          "ingredient" : "green olives" },
        { "amount" : 130,
          "unit" : "g",
          "ingredient" : "vegan pesto" },
        ],
      "method" : "Heat 1 tbsp of the oil in a large pan over a medium heat. Add the chopped onion and cook for 5 minutes until softening. Add the garlic and cook for a further minute. Add the remaining 1 tbsp oil to the pan, then stir in the courgette and fry for 5 minutes until the edges are charred and the courgette slices are lightly coloured. Pour in the stock, stirring to combine, then bring to a simmer and add the spaghetti, broad beans, runner beans and lemon wedges. Simmer on a medium-high heat for 10 minutes or until the pasta is tender (al denté). Once the pasta has cooked and the stock has reduced, add the green olives and pesto, tossing everything together gently to combine. Serve with the lemon zest and juice, an extra drizzle of olive oil and, if you like, and basil leaves.",
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/08/960_ONE_PAN_PESTO_SPAGHETTI_LEMON_COURGETTES-768x960.jpg",
      "category" : "dinner",
      "servings" : 2,
      "dietary" : "vegan",
      "notes" : ""
      },
      
      {
      "name" : "Orzo with Roasted Veg Sauce",
      "ingredients" : [
          { "amount" : 1,
            "ingredient" : "large red onion" },
          { "amount" : 1,
            "ingredient" : "large red pepper" },
          { "amount" : 1,
            "ingredient" : "large yellow pepper" },
          { "amount" : 4,
            "ingredient" : "garlic cloves" },
          { "amount" : 5,
            "ingredient" : "plum tomatoes" },
          { "amount" : 1,
            "unit" : "tbsp",
            "ingredient" : "balsamic vinegar" },
          { "amount" : 100,
            "unit" : "g",
            "ingredient" : "orzo" },
          { "amount" : 200,
            "unit" : "ml",
            "ingredient" : "vegan vegetable stock" },
          { "amount" : 1,
            "ingredient" : "handful of basil leaves" },
          ],
      "method" : `Heat the oven to 180°C fan/gas 6. Put the onion, peppers and garlic in a roasting tin, drizzle with a little olive oil and add a good pinch of salt. Roast for about 20 minutes. Add the tomatoes and balsamic vinegar and stir. Return the vegetables to the oven and roast for a further 25-30 minutes. At this stage there should be a lovely concentrated sauce in the bottom of the roasting tin. Transfer everything to a food processor and whizz. Pour the sauce into a saucepan, add the orzo and simmer gently for about 10 minutes until the sauce has thickened and reduced and the orzo is starting to soften. Add the vegetable stock in small increments – you probably won’t need all of it. What you’re aiming for is a risotto-like texture, where the orzo is cooked al dente and the sauce is thick and rich. Garnish with basil leaves before serving.`,
      "image" : "https://www.deliciousmagazine.co.uk/wp-content/uploads/2021/06/960-Orzo-with-roasted-vegetable-sauce-768x960.jpg",
      "category" : "dinner",
      "servings" : 2,
      "dietary" : "vegan",
      "notes" : ""
      },
      
      {
      "name" : "Spiced carrot and lentil soup",
      "ingredients" : [
          { "amount" : 2,
            "unit" : "tbsp",
            "ingredient" : "cumin seeds"},
          { "amount" : 1,
            "unit" : "pinch",
            "ingredient" : "chili flakes"},
          { "amount" : 600,
	          "unit" : "g",
            "ingredient" : "carrot"},
          { "amount" : 140,
            "unit" : "g",
            "ingredient" : "red lentil"},
	        { "amount" : 1,
            "unit" : "l",
            "ingredient" : "hot vegetable stock"},
	        { "amount" : 125,
            "unit" : "ml",
            "ingredient" : "milk"
            }],
        "method" : "STEP 1Heat a large saucepan and dry-fry 2 tsp cumin seeds and a pinch of chilli flakes for 1 min, or until they start to jump around the pan and release their aromas.STEP 2Scoop out about half with a spoon and set aside. Add 2 tbsp olive oil, 600g coarsely grated carrots, 140g split red lentils, 1l hot vegetable stock and 125ml milk to the pan and bring to the boil. STEP 3Simmer for 15 mins until the lentils have swollen and softened. STEP 4 Whizz the soup with a stick blender or in a food processor until smooth (or leave it chunky if you prefer). STEP 5 Season to taste and finish with a dollop of plain yogurt and a sprinkling of the reserved toasted spices. Serve with warmed naan breads.",
        "image": "https://elizabethchloe.com/wp-content/uploads/2020/11/Spicy-Carrot-and-Lentil-Soup-Thumbnail-2.jpg",
        "dietary" : "gluten-free",
        "category" : "dinner",
        "servings" : 4,
        "notes" : "Add notes "
        },
            
        {
        "name": "Pizza dough",
        "ingredients": [
          {
            "amount": 1,
            "unit": "kg",
            "ingredient": "flour"},
          {
            "amount": 0.5,
            "unit": "l",
            "ingredient": "water"},
          {
            "amount": 3,
            "unit": "tbsp",
            "ingredient": "olive oil"},
          {
            "amount": 50,
            "unit": "g",
            "ingredient": "fresh yeast"},
          {
            "amount": 1,
            "unit": "tbsp",
            "ingredient": "salt"},
          {
            "amount": 1,
            "unit": "tsp",
            "ingredient": "sugar"
          }],
        "method": "Warm up the water, make sure it's not too hot. Add the sugar, stir to dissolve. Gently stir in the yeast, let it sit for 5-10 minutes. When it's ready, add it to the flour, add the salt and oil and start mixing it together.",
        "image": "https://img.taste.com.au/JBQ8zWnO/taste/2016/11/pizza-dough_1980x1320-118409-1.jpg",
        "dietary": "vegan",
        "category": "dinner",
        "servings": 4,	
        "notes" : "a true pizza needs to rise twice"
        },
        
        {
        "name": "Waffles",
        "ingredients": [
      {
          "amount": 200,
          "unit": "g",
          "ingredient": "butter"},
            {
              "amount": 200,
              "unit": "g",
              "ingredient": "sugar"
                    },
              {
              "amount": 3,
              "ingredient": "eggs"
              },
              {
              "amount": 0.5,
              "unit": "l",
              "ingredient": "milk"
              },
              {
              "amount": 500,
              "unit": "g",
              "ingredient": "plain flour"
              },
              {
              "amount": 2,
              "unit": "tsp",
              "ingredient": "baking powder"
              },
              {
              "amount": 2,
              "unit": "tsp",
              "ingredient": "vanilla extract"
              },
              {
              "amount": 1,
              "ingredient": "lemon"
              }
              ],
              "method": "Beat the eggs with the sugar for 5 minutes. Add melted butter, vanilla extract, zest of the lemon and the milk. Mix until combined. Sift in the flour and baking powder. Mix until combined.",
              "image": "https://bakingmischief.com/wp-content/uploads/2019/09/crispy-waffles-image-square.jpg",
              "dietary": "",
              "category": "breakfast",
              "servings": 4,	
              "notes" : "Soft, can be used for american pancakes as well."
              },
              
              
              
            {
            "name": "Saucy bean baked eggs",
            "ingredients": [
            {
            "amount": 800,
            "unit": "g",
            "ingredient": "cherry tomatoes(canned)"
            },
            {
            "amount": 400,
            "unit": "g",
            "ingredient": "mixed beans(canned)"
            },
            {
            "amount": 200,
            "unit": "g",
            "ingredient": "spinach"
            },
            {
            "amount": 4,
            "ingredient": "eggs"
            },
            {
            "amount": 50,
            "unit": "g",
            "ingredient": "ham"
            }
            ],
            "method": "STEP 1 Tip the tomatoes and bean salad into an ovenproof frying pan or shallow flameproof casserole dish. Simmer for 10 mins, or until reduced. Stir in the spinach and cook for 5 mins more until wilted. STEP 2 Heat the grill to medium. Make four indentations in the mixture using the back of a spoon, then crack one egg in each. Nestle the ham in the mixture, then grill for 4-5 mins, or until the whites are set and the yolks runny. Serve with rye bread, if you like.",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/saucy-bean-baked-eggs-d582e18.jpg",
            "dietary": "gluten-free",
            "category": "lunch",
            "servings": 2,	
            "notes" : "Best served with fresh bread"
            },
            
            {
            "name": "Curry soup",
            "ingredients": [
            {
            "amount": 1,
            "ingredient": "cauliflower"
            },
            {
            "amount": 1.5,
            "unit": "tbsp",
            "ingredient": "oil"
            },
            {
            "amount": 2,
            "unit": "tsp",
            "ingredient": "fennel seeds"
            },
            {
            "amount": 150,
            "unit": "g",
            "ingredient": "red lentils"
            },
            {
            "amount": 3,
            "unit": "tbsp",
            "ingredient": "curry paste"
            },
            {
            "amount": 0.5,
            "ingredient": "lemon"
            }
            ],
            "method": "STEP 1 Remove the outer leaves from the cauliflower, cut off the stalk and roughly chop, then cut the head into small florets. Toss a quarter of the florets in 1 tbsp oil and 1 tsp of the fennel seeds, season well, then tip into a roasting tin and set aside. STEP 2 Heat oven to 220C/200C fan/gas 7. Heat 0.5 tbsp oil in a saucepan over a medium heat and add the remaining fennel seeds, toast for 2 mins, then add the lentils and the remaining cauliflower. Stir in the curry paste, then add 1 litre water and bring to the boil. Simmer for 25 mins until the cauliflower is tender and the lentils are cooked through. STEP 3 Meanwhile, put the roasting tin of cauliflower in the oven and cook for 20 mins until crisp and slightly charred. Tip the soup mixture into a food processor and blitz until smooth, tip back into the pan to warm through, adding the lemon juice and a little water if it's too thick. Tip into bowls and top with the crispy cauliflower and fennel seeds to serve.",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0drsyBmEIj_ywNKt2zp1fvKYedEE17qsyjw&usqp=CAU",
            "dietary": "vegan",
            "category": "lunch",
            "servings": 3,	
            "notes" : "Not even sure how to bin it. It's blocking up the sink. Avoid this one!"
            },
            {
            "name": "Raspberry honey flapjacks",
            "ingredients": [
            {
            "amount": 150,
            "unit": "g",
            "ingredient": "butter"
            },
            {
            "amount": 150,
            "unit": "g",
            "ingredient": "light brown soft sugar"
            },
            {
            "amount": 4,
            "unit": "tbsp",
            "ingredient": "honey"
            },
            {
            "amount": 300,
            "unit": "g",
            "ingredient": "porridge oats"
            },
            {
            "amount": 100,
            "unit": "g",
            "ingredient": "raspberries(frozen/fresh)"
            }
            ],
            "method": "STEP 1 Heat oven to 200C/180C fan/gas 6 and line a 20 x 20cm baking tin with parchment. Melt the butter, sugar, honey and a pinch of salt in a pan. Once the mixture is bubbling and combined, stir in the oats. STEP 2 Tip the oat mixture into the lined baking tin and press down with the back of a spoon. Scatter over the raspberries, then lightly press them into the oat mixture. Bake for 25-30 mins until golden brown. Leave to cool, then cut into 9 or 12 flapjacks.",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/raspberry-honey-flapjacks-90b2df5.jpg?quality=90&resize=440,400",
            "dietary": "vegetarian",
            "category": "sweet",
            "servings": 10,	
            "notes" : "Stir raspberries into the mixture before adding to the baking tray."
            },
            {
            "name": "Sausage mustard apple hash",
            "ingredients": [
            {
            "amount": 450,
            "unit": "g",
            "ingredient": "potatoes"
            },
            {
            "amount": 30,
            "unit": "g",
            "ingredient": "butter"
            },
            {
            "amount": 2,
            "ingredient": "apples"
            },
            {
            "amount": 4,
            "ingredient": "pork sausages"
            },
            {
            "amount": 2,
            "unit": "tsp",
            "ingredient": "wholegrain mustard"
            },
            {
            "amount": 2,
            "unit": "tsp",
            "ingredient": "thyme"
            }
            ],
            "method": "STEP 1 Bring a large pan of salted water to the boil. Add the potatoes and cook for 4 mins. Drain and leave to steam dry in a colander. STEP 2 Heat half the butter and 1 tbsp olive oil in a large frying pan or shallow casserole dish over a medium-high heat. Add the apple wedges and fry on each side for 5 mins or until golden brown and starting to caramelise. Remove with a slotted spoon and set aside on a plate. STEP 3 In the same pan, heat the remaining butter and a little more oil over a medium heat and add the potatoes and sausage chunks. Fry for 10-15 mins, turning every so often until the potatoes and sausage are crisp and golden brown. Season to taste. Stir through the mustard and the apple wedges, then scatter over some thyme leaves, and serve with watercress salad.",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/sausage-mustard-apple-hash-26022bb.jpg",
            "dietary": "gluten-free",
            "category": "dinner",
            "servings": 2,	
            "notes" : ""
            },
            {"name": "Salmon & pea pasta",
            "ingredients": [
            {
            "amount": 240,
            "unit": "g",
            "ingredient": "fusilli"
            },
            {
            "amount": 25,
            "unit": "g",
            "ingredient": "butter"
            },
            {
            "amount": 1,
            "ingredient": "shallot"
            },
            {
            "amount": 2,
            "ingredient": "salmon fillets(skinless)"
            },
            {
            "amount": 140,
            "unit": "g",
            "ingredient": "creme fraiche"
            },
            {
            "amount": 0.5,
            "ingredient": "stock cube"
            }
            ],
            "method": "STEP 1 Bring a pan of water to the boil and cook the fusilli according to the pack instructions. STEP 2 Meanwhile, heat a knob of butter in a saucepan, then add the shallot and cook for 5 mins or until softened. STEP 3 Add the peas, salmon, crème fraîche and 50ml water. Crumble in the stock cube. STEP 4 Cook for 3-4 mins until cooked through, stir in the chives and some black pepper. Then stir through to coat the pasta. Serve in bowls.",
            "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salmonpasta-11bb3f0.jpg?quality=90&webp=true&resize=440,400",
            "dietary": "",
            "category": "dinner",
            "servings": 3,	
            "notes" : "Quick and easy."
            },
            {
              "name" : "Gluten-free Brownies",
              "ingredients" : [
                  { "amount" : 4,
                  "ingredient" : "eggs" },
                  { "amount" : 250,
                  "unit" : "g",
                  "ingredient" : "unsalted butter" },
                 { "amount" : 250,
                  "unit" : "g",
                  "ingredient" : "dark chocolate" },
                 { "amount" : 300,
                  "unit" : "g",
                  "ingredient" : "caster sugar" },
                { "amount" : 0.5,
                  "unit" : "tsp",
                  "ingredient" : "vanilla extract" },
                { "amount" : 100,
                  "unit" : "g",
                  "ingredient" : "gluten-free plain flour" },
                { "amount" : 60,
                  "unit" : "g",
                  "ingredient" : "cocoa powder" },
                { "amount" : 0.5,
                  "unit" : "tsp",
                  "ingredient" : "sea salt" },
                { "amount" : 150,
                  "unit" : "g",
                  "ingredient" : "milk chocolate" },
              ],
          "dietary" : "gluten-free",
          "category" : "snack",
          "servings" : 12,
          "method" : "Method Goes Here",
          "image" : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gluten-free-brownies-4be63ff.jpg",
          "notes" : ""
          },
          {
              "name" : "Chocolate, cardamom & hazelnut torte",
              "ingredients" : [
                  { "amount" : 8,
                  "ingredient" : "green cardamom pods" },
                  { "amount" : 150,
                  "unit" : "g",
                  "ingredient" : "hazelnuts" },
                 { "amount" : 150,
                  "unit" : "g",
                  "ingredient" : "dark chocolate" },
                 { "amount" : 125,
                  "unit" : "g",
                  "ingredient" : "butter" },
                { "amount":  6,
                  "ingredient" : "egg" },
                { "amount" : 125,
                  "unit" : "g",
                  "ingredient" : "caster sugar" },
                { "amount" : 15,
                  "unit" : "g",
                  "ingredient" : "cocoa powder" },
                { "amount" : 1,
                  "ingredient" : "creme fraiche" }
              ],
          "dietary" : "gluten-free",
          "category" : "sweet",
          "servings" : 8,
          "method" : "Method Goes Here",
          "image" : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-torte-d56ded1.jpg",
          "notes" : ""
          },
          {
              "name" : "Egg & tomato baps",
              "ingredients" : [
                  { "amount" :2,
                  "ingredient" : "tomato" },
                  { "amount" : 2,
                  "unit" : "tsp",
                  "ingredient" : "olive oil" },
                { "amount":  4,
                  "ingredient" : "egg" },
                { "amount" : 1,
                  "ingredient" : "parsley" },
                { "amount" : 1,
                  "ingredient" : "garlic clove"},
                { "amount" : 2,
                  "ingredient" : "wholewheat baps" }
              ],
          "dietary" : "dairy-free",
          "category" : "breakfast",
          "servings" : 2,
          "method" : "Method Goes Here",
          "image" : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/eggtomatobap_5639-223e135.jpg",
          "notes" : ""
          },
          {
              "name" : "Egg & rocket pizzas",
              "ingredients" : [
                  { "amount" : 2,
                  "ingredient" : "seeded wraps" },
                  { "amount" : 150,
                  "unit" : "g",
                  "ingredient" : "hazelnuts" },
                 { "amount" : 1,
                  "ingredient" : "red pepper" },
                 { "amount" : 2,
                  "ingredient" : "tomato" },
                { "amount":  2,
                  "ingredient" : "egg" },
                { "amount" : 2,
                  "unit" : "tbsp",
                  "ingredient" : "tomato purée" },
                { "amount" : 1,
                  "ingredient" : "dill" },
                { "amount" : 1,
                  "ingredient" : "parsley" },
                { "amount" : 65,
                  "unit" : "g",
                  "ingredient" : "rocket" },
                { "amount" : 0.5,
                  "ingredient" : "red onion" }
              ],
          "dietary" : "gluten-free",
          "category" : "dinner",
          "servings" : 2,
          "method" : "Method Goes Here",
          "image" : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/eggrocketpizzas_5729-ebc7e0d.jpg",
          "notes" : ""
          },
          {
              "name" : "Tuna & tomato pasta bake",
              "ingredients" : [
                  { "amount" : 500,
                  "unit" : "g",
                  "ingredient" : "pasta" },
                 { "amount" : 120,
                  "unit" : "g",
                  "ingredient" : "tuna" },
                { "amount" : 500,
                  "unit" : "ml",
                  "ingredient" : "milk" },
                 { "amount" : 4,
                  "unit" : "tbsp",
                  "ingredient" : "flour" },
                { "amount" : 150,
                  "unit" : "g",
                  "ingredient" : "mature cheddar" },
                { "amount" : 0.5,
                  "unit" : "tsp",
                  "ingredient" : "mustard powder" },
                { "amount" : 325,
                  "unit" : "g",
                  "ingredient" : "sweetcorn" },
                { "amount" : 2,
                  "ingredient" : "tomato" }
              ],
          "dietary" : "",
          "category" : "dinner",
          "servings" : 5,
          "method" : "Method Goes Here",
          "image" : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tuna-tomato-pasta-bake-2e58450.jpg",
          "notes" : ""
          },
          {
              "name" : "Toad-in-the-hole",
              "ingredients" : [
                  { "amount" : 12,
                  "ingredient" : "chipolata" },
          
                 { "amount" : 1,
                  "unit" : "tbsp",
                  "ingredient" : "sunflower oil" },
                { "amount" : 140,
                  "unit" : "g",
                  "ingredient" : "plain flour" },
                 { "amount" : 2,
                  "ingredient" : "egg" },
                { "amount" : 175,
                  "unit" : "ml",
                  "ingredient" : "semi-skimmed milk" },
              ],
          "dietary" : "",
          "category" : "dinner",
          "servings" : 4,
          "method" : "Method Goes Here",
          "image" : "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-736458_11-5ff6be2.jpg",
          "notes" : ""
          },

          {
            "name" : "Simple White Cake",
            "ingredients" : [
                { "amount" : 1,
                  "unit" : "cup",
                  "ingredient" : "white sugar" },
                { "amount" : 0.5,
                  "unit" : "cup",
                  "ingredient" : "butter" },
                { "amount" : 2,
                  "ingredient" : "egg"},
                { "amount" : 2,
                  "unit" : "tsp",
                  "ingredient" : "vanilla extract"},
                { "amount" : 1.5,
                  "unit" : "tsp",
                  "ingredient" : "baking powder"},
                { "amount" : 0.5,
                  "unit" : "cup",
                  "ingredient" : "milk"  
                }],
            "method" : "Step 1 Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners. Step 2 In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.Step 3 Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch.",
            "image": "https://www.nelliebellie.com/wp-content/uploads/2014/11/homemade-white-cake-recipe.png",
            "dietary": "",
            "category": "sweet",
            "servings" : 12,
            "notes" : ""
        },
        {
          "name" : "Greek salad",
          "ingredients" : [
              { "amount" : 6,
                "unit" : "tbsp",
                "ingredient" : "extra virgin olive oil"
              },
              { "amount" : 2,
                "unit" : "tbsp",
                "ingredient" : "fresh lemon juice"
              },
              { "amount" : 0.5,
           "unit" : "tsp",
                "ingredient" : "chopped garlic"
              },
              { "amount" : 0.5,
                "unit" : "tsp",
                "ingredient" : "dried dill"
         },
         { "amount" : 3,
                "ingredient" : "tomato"
          },
          { "amount" : 1,
                "ingredient" : "cucumber"
          },
         { "amount" : 0.5,
                "ingredient" : "red onion"
         },	
              { "amount" : 1,
                "ingredient" : "bell pepper"
         },	
          { "amount" : 1,
                "unit" : "cup",
                "ingredient" : "pitted black olives"
          },
          { "amount" : 0.5,
                "unit" : "cup",
                "ingredient" : "crumbled feta"
          }	
              ],
    
    "dietary" : "vegetarian",
    "category" : "dinner",
    "servings" : 6,
          "notes" : "Add notes ",
          "method" : "Make dressing: Whisk the olive oil, lemon juice, garlic, vinegar, oregano, and dill together until blended. Season to taste with salt and freshly ground black pepper. This can be prepared 3 hours ahead. Let stand at room temperature. Re-whisk before using. Combine salad ingredients: Combine the tomatoes, cucumber, onion, bell pepper, olives in a bowl. Toss with dressing. Sprinkle with cheese and serve",
          "image": "https://www.simplyrecipes.com/thmb/au60mVTA5EPLLknjdtQ9BYO0OC4=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__08__dads-greek-salad-horiz-a-1600-bc71b85bc907414a9bb3179a923b58fc.jpg"
      },
      {
        "name" : "Granola",
        "ingredients" : [
            { "amount" : 3,
              "unit" : "cup",
              "ingredient" : "rolled oats"
            },
            { "amount" : 1.5,
              "unit" : "cup",
              "ingredient" : "almonds"
            },
            { "amount" : 0.5,
	       "unit" : "cup",
              "ingredient" : "pumpkin seeds"
            },
            { "amount" : 2,
              "unit" : "tsp",
              "ingredient" : "cinnamon"
	     },
	     { "amount" : 0.5,
               "unit" : "tsp",
              "ingredient" : "salt"
	      },
	      { "amount" : 0.5,
                "unit" : "cup",
              "ingredient" : "maple syrup"
	
            }],
	
	"dietary" : "protein",
	"category" : "breakfast",
	"servings" : 6,
        "notes" : "Add notes ",
        "method" : "	1.Preheat the oven to 325°F and line a baking sheet with parchment paper. 2. In a large bowl, add the rolled oats, almonds, pumpkin seeds, cinnamon and salt and stir to combine. 3. In a small bowl, add the melted coconut oil, maple syrup and vanilla extract and whisk to combine. 4. Drizzle the wet ingredients over the dry ingredients and mix until everything is well coated. 5. Pour the granola onto a parchment paper-lined baking sheet and use a spatula or spoon to spread it into an even layer. 6. Transfer the baking sheet to the oven for 20 minutes, remove it from the oven and give it stir on the baking sheet, then return it to the oven for a final 10-15 minutes until golden brown. 7. Once baked, remove it from the oven, add flaked coconut and raisins, then allow to cool completely. (If you want the granola to be extra chunky, add an extra drizzle of maple syrup over the top of the warm granola to help it stick together as it cools.) 8. Once cooled, the granola can be stored in an air-tight container in the cupboard for up to a week or frozen for up to 3 months.",
        "image": "https://www.thelastfoodblog.com/wp-content/uploads/2020/07/granola-close-up-2.jpg"
    },
    {
      "name" : "Garlic Butter Steak",
      "ingredients" : [
          { "amount" : 1,
            "ingredient" : "ribeye steak"
          },
          { "amount" : 3,
            "unit" : "tbsp",
            "ingredient" : "olive oil"
          },
          { "amount" : 3,
       "unit" : "tbsp",
            "ingredient" : "butter"
          },
          { "amount" : 3,
            "unit" : "cloves",
            "ingredient" : "garlic"
     },
     { "amount" : 2,
       "ingredient" : "rosemary sprig"
      },
      { "amount" : 3,
        "ingredient" : "thyme sprig"
      }],
      "dietary" : "protein",
      "category" : "dinner",
      "servings" : 2,
      "notes" : "Add notes",
      "method" : "1. Preheat oven to 200°F (95°C).2. Generously season all sides of the steak with salt and pepper.3. Transfer to a wire rack on top of a baking sheet, then bake for about 45 minutes to an hour until the internal temperature reads about 125°F (51° C) for medium-rare. Adjust the bake time based on if you like your steak more rare or more well-done (you monster).4. Heat the canola oil in a pan over high heat until smoking. Do not use olive oil, as its smoke point is significantly lower than that of canola oil and will smoke before reaching the desired cooking temperature.5. Sear the steak for 30 seconds on the first side, then flip.6. Add the butter, garlic, rosemary, and thyme and swirl around the pan.7. Transfer the garlic and herbs on top of the steak and baste the steak with the butter using a large spoon.8. Baste for about 30 seconds, then flip and baste the other side for about 15 seconds.9. Turn the steak on its side and cook to render off any excess fat.10. Rest the steak on a cutting board or wire rack for about 10 minutes. Slicing the steak before the resting period has finished will result in a lot of the juices leaking out, which may not be desirable. 11. Slice the steak into 0.5 -inch (1 cm) strips, then fan out the slices and serve.",
      "image": "https://natashaskitchen.com/wp-content/uploads/2020/03/Pan-Seared-Steak-4-500x500.jpg"
  },
]);

db.planner.insertMany([
  {
    "name" : "Balmoral Chicken",
    "ingredients" : [
        { "amount" : 4,
        "ingredient" : "chicken breasts" },
        { "amount" : 130,
        "unit" : "g",
        "ingredient" : "haggis" },
        { "amount" : 4,
        "ingredient" : "rashes of bacon" },
        { "amount" : 30,
        "unit" : "ml",
        "ingredient" : "olive oil" },
        { "amount" : 20,
        "unit" : "g",
        "ingredient" : "butter" },
    ],
    "method" : "1. Preheat oven to 180°C. 2. Slice down the side of each chicken breast, making a pocket. 3. Slice the haggis into small chunks and squidge (technical term) into the chicken pocket. 4. Wrap each breast in a rasher of bacon and secure with a toothpick if necessary. 5. Heat the oil and butter in a non-stick frying pan, sear the bacon wrapped around the chicken breasts. Give 2 minutes on each side. 6. Place in an oven proof dish and transfer to the oven for 35-40 minutes or until cooked through & piping hot. 7. Serve with the peppercorn sauce and a selection of vegetables and/ or mash potato.",
    "image": "https://www.carolinescooking.com/wp-content/uploads/2022/01/haggis-stuffed-chicken-Balmoral-featured-pic-sq.jpg",
    "dietary": "gluten-free",
    "category": "dinner",
    "servings" : 4
}
])