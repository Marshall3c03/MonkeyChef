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
        "method" : "1. Preheat oven to 180°C. \n 2. Slice down the side of each chicken breast, making a pocket. \n 3. Slice the haggis into small chunks and squidge (technical term) into the chicken pocket. \n 4. Wrap each breast in a rasher of bacon and secure with a toothpick if necessary. \n 5. Heat the oil and butter in a non-stick frying pan, sear the bacon wrapped around the chicken breasts. Give 2 minutes on each side. \n 6. Place in an oven proof dish and transfer to the oven for 35-40 minutes or until cooked through & piping hot. \n 7. Serve with the peppercorn sauce and a selection of vegetables and/ or mash potato.",
        "image": "https://www.carolinescooking.com/wp-content/uploads/2022/01/haggis-stuffed-chicken-Balmoral-featured-pic-sq.jpg"
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
            { 
              "ingredient" : "Thumb-sized piece"
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
        "image": "https://img.buzzfeed.com/video-api-prod/assets/6e6a56c27c68410991ce7d4e4acc7dee/BFV8692_Easy_Butter_Chicken_Thumb.jpg"
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
        
        "image": "https://www.livewellbakeoften.com/wp-content/uploads/2019/07/Thumbprint-Cookies-10-5.jpg"
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

        "image": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/mushroom_soup-9b55c55.jpg"
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
    "method" : "1. Preheat oven to 180°C. \n 2. Slice down the side of each chicken breast, making a pocket. \n 3. Slice the haggis into small chunks and squidge (technical term) into the chicken pocket. \n 4. Wrap each breast in a rasher of bacon and secure with a toothpick if necessary. \n 5. Heat the oil and butter in a non-stick frying pan, sear the bacon wrapped around the chicken breasts. Give 2 minutes on each side. \n 6. Place in an oven proof dish and transfer to the oven for 35-40 minutes or until cooked through & piping hot. \n 7. Serve with the peppercorn sauce and a selection of vegetables and/ or mash potato.",
    "image": "https://www.carolinescooking.com/wp-content/uploads/2022/01/haggis-stuffed-chicken-Balmoral-featured-pic-sq.jpg"
}
])