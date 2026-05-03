var layer = document.querySelector("#nav .inner .rightNav .layer");
var menu = document.querySelector("#nav .inner .rightNav i");

// display
var leftContent = document.querySelector("#main #content div div .leftContent");
var rightContent = document.querySelector(
  "#main #content div div .rightContent",
);

function openMenu() {
  layer.classList.toggle("open");
}

function randNum() {
  var randomNumber = Math.floor(Math.random() * boxes.length);
  return randomNumber;
}

function checkHasError(num) {
  var error = ``;
  if (boxes[num].right.error) {
    error = `
        <div class="error d-flex align-items-center">
                  <i class="fa-solid fa-triangle-exclamation"></i>

                  <div class="rightError">
                    <h4>Extended Preparation Time</h4>
                    <p>
                      This recipe requires more than 45 minutes to prepare. Plan
                      accordingly!
                    </p>
                  </div>
                </div>
        `;
    return error;
  } else {
    return "";
  }
}

function getIngredients(num) {
  var Ingredients = "";
  for (var i = 0; i < boxes[num].right.Ingredients.length; i++) {
    Ingredients += `
     <div class="d-flex align-items-center">
                        <span
                          class="rounded-circle d-flex justify-content-center align-items-center"
                          >${i + 1}</span
                        >
                        <p>${boxes[num].right.Ingredients[i]}</p>
                      </div>
    `;
  }

  return Ingredients;
}

function getInstructions(num) {
  var Instructions = "";
  for (var i = 0; i < boxes[num].right.Instructions.length; i++) {
    Instructions += `
     <div class="d-flex align-items-center">
                        <span
                          class="d-flex align-items-center justify-content-center"
                          >${i + 1}</span
                        >
                        <p>
                          ${boxes[num].right.Instructions[i]}
                        </p>
                      </div>
    `;
  }

  return Instructions;
}

function gitNutrition(num) {
  var Nutrition = "";
  for (var i = 0; i < boxes[num].right.Nutrition.length; i++) {
    Nutrition += `
     <div class="box d-flex justify-content-between align-items-center">
  <div class="leftBox d-flex align-items-center">
    <div class="icon d-flex justify-content-center align-items-center">
      <i class="fa-solid fa-fire"></i>
    </div>

    <p>Calories</p>
  </div>

  <h3 class="rightBox">${boxes[num].right.Nutrition[i]}</h3>
</div>
    `;
  }

  return Nutrition;
}

function gitChef(num) {
  var chef = "";
  for (var i = 0; i < boxes[num].right.chef.length; i++) {
    chef += `
    <div class="box d-flex align-items-center">
                        <span class="d-flex justify-content-center align-items-center rounded-circle"><i class="fa-solid fa-check"></i></span>
                        <p>${boxes[num].right.chef[i]}</p>
                      </div>
    `;
  }

  return chef;
}

var boxes = [
  {
    left: {
      img: "./images/photo-1.webp",
      star: 4.8,
      reviews: "(445 reviews)",
      prep: "20 min",
      cook: "15 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Intermediate",
        span2: "Asian",
      },

      details: {
        h2: "Pad Thai",
        p: "Popular Thai stir-fried noodles with shrimp and peanuts",
      },

      error: false,

      Ingredients: [
        "200g rice noodles",
        "200g shrimp, peeled",
        "2 eggs",
        "3 tablespoons tamarind paste",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Bean sprouts",
        "Crushed peanuts",
        "Lime wedges and cilantro",
      ],

      Instructions: [
        "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
        "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
        "Heat wok over high heat. Scramble eggs and set aside.",
        "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes.",
        "Add scrambled eggs and bean sprouts. Toss everything together.",
        "Serve topped with crushed peanuts, lime wedges, and cilantro.",
      ],

      Nutrition: ["540 kcal", "32g", "62g", "16g", "4g", "1120mg"],

      chef: [
        "Don't oversoak noodles or they'll be mushy",
        "Cook on high heat for authentic wok flavor",
        "Balance sweet, sour, and salty flavors",
        "Prepare all ingredients before starting to cook",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-2.webp",
      star: 4.5,
      reviews: "(156 reviews)",
      prep: "20 min",
      cook: "35 min",
      servings: "2 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Mediterranean",
      },

      details: {
        h2: "Mediterranean Quinoa Bowl",
        p: "Healthy bowl with quinoa, vegetables, and tahini dressing",
      },

      error: true,

      Ingredients: [
        "1 cup quinoa",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red onion, sliced",
        "Kalamata olives",
        "Feta cheese, crumbled",
        "Fresh parsley",
        "Tahini dressing",
      ],

      Instructions: [
        "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
        "While quinoa cooks, prepare all vegetables and set aside.",
        "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
        "Fluff cooked quinoa with a fork and let cool slightly.",
        "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      ],

      Nutrition: ["480 kcal", "18g", "58g", "20g", "10g", "540mg"],

      chef: [
        "Don't oversoak noodles or they'll be mushy",
        "Let quinoa cool before adding fresh ingredients",
        "Make extra tahini dressing - it keeps well in the fridge",
        "Add grilled chicken or chickpeas for extra protein",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-3.webp",
      star: 4.5,
      reviews: "(324 reviews)",
      prep: "15 min",
      cook: "15 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Asian",
      },

      details: {
        h2: "Chicken Stir-Fry",
        p: "Quick and healthy stir-fry with colorful vegetables",
      },

      error: false,

      Ingredients: [
        "500g chicken breast, sliced",
        "2 bell peppers, sliced",
        "1 broccoli head, florets",
        "2 carrots, julienned",
        "3 tablespoons soy sauce",
        "2 tablespoons oyster sauce",
        "1 tablespoon sesame oil",
        "2 cloves garlic, minced",
        "Fresh ginger, grated",
      ],

      Instructions: [
        "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
        "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside",
        "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
        "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes.",
        "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
        "Serve immediately over steamed rice or noodles.",
      ],

      Nutrition: ["320 kcal", "34g", "18g", "12g", "5g", "840mg"],

      chef: [
        "Cut all ingredients before starting to cook",
        "Keep heat high for authentic stir-fry texture",
        "Don't overcrowd the wok or vegetables will steam",
        "Add cashews or peanuts for extra crunch",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-4.webp",
      star: 4.6,
      reviews: "(278 reviews)",
      prep: "15 min",
      cook: "20 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "American",
      },

      details: {
        h2: "Beef Tacos",
        p: "Flavorful Mexican tacos with seasoned ground beef",
      },

      error: false,

      Ingredients: [
        "500g ground beef",
        "8 taco shells",
        "1 onion, diced",
        "2 tablespoons taco seasoning",
        "Shredded lettuce",
        "Diced tomatoes",
        "Shredded cheddar cheese",
        "Sour cream",
        "Salsa",
      ],

      Instructions: [
        "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
        "Add diced onion and cook until softened, about 5 minutes.",
        "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
        "Warm taco shells according to package directions",
        "Fill each shell with seasoned beef.",
      ],

      Nutrition: ["420 kcal", "26g", "32g", "20g", "4g", "780mg"],

      chef: [
        "Drain excess fat from beef for healthier tacos",
        "Warm shells in oven for better texture",
        "Prepare all toppings before cooking beef",
        "Use ground turkey for a lighter option",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-5.webp",
      star: 4.7,
      reviews: "(312 reviews)",
      prep: "15 min",
      cook: "25 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Intermediate",
        span2: "Asian",
      },

      details: {
        h2: "Thai Green Curry",
        p: "Vibrant and aromatic curry with vegetables and coconut milk",
      },

      error: false,

      Ingredients: [
        "2 tablespoons green curry paste",
        "400ml coconut milk",
        "300g chicken breast, sliced",
        "1 red bell pepper, sliced",
        "100g green beans",
        "1 eggplant, cubed",
        "2 tablespoons fish sauce",
        "1 tablespoon palm sugar",
        "Fresh Thai basil leaves",
      ],

      Instructions: [
        "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
        "Add half the coconut milk and stir to combine with the curry paste.",
        "Add sliced chicken and cook until no longer pink, about 5 minutes.",
        "Add remaining coconut milk, vegetables, fish sauce, and palm sugar.",
        "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
        "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
      ],

      Nutrition: ["420 kcal", "26g", "22g", "26g", "5g", "890mg"],

      chef: [
        "Adjust spice level by using more or less curry paste",
        "Add vegetables in stages based on cooking time needed",
        "Fresh Thai basil is essential for authentic flavor",
        "Use full-fat coconut milk for richest, creamiest sauce",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-6.webp",
      star: 4.9,
      reviews: "(187 reviews)",
      prep: "10 min",
      cook: "15 min",
      servings: "2 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Seafood",
      },

      details: {
        h2: "Honey Garlic Salmon",
        p: "Pan-seared salmon with a sweet and savory glaze",
      },

      error: false,

      Ingredients: [
        "2 salmon fillets (6oz each)",
        "3 tablespoons honey",
        "2 tablespoons soy sauce",
        "4 cloves garlic, minced",
        "1 tablespoon olive oil",
        "1 teaspoon fresh ginger, grated",
        "Sesame seeds for garnish",
        "Green onions, sliced",
      ],

      Instructions: [
        "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
        "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
        "Heat olive oil in a large skillet over medium-high heat.",
        "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden.",
        "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
        "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
      ],

      Nutrition: ["380 kcal", "35g", "28g", "14g", "0g", "720mg"],

      chef: [
        "Don't overcook salmon - it should be slightly pink in the center",
        "Use wild-caught salmon for best flavor and nutrition",
        "Let the sauce caramelize slightly for deeper flavor",
        "Pair with steamed broccoli or asparagus for a complete meal",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-7.webp",
      star: 4.6,
      reviews: "(289 reviews)",
      prep: "20 min",
      cook: "30 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Asian",
      },

      details: {
        h2: "Vegetable Curry",
        p: "Hearty vegetarian curry with coconut milk",
      },

      error: true,

      Ingredients: [
        "2 potatoes, cubed",
        "1 cauliflower, florets",
        "2 carrots, sliced",
        "1 can chickpeas",
        "400ml coconut milk",
        "3 tablespoons curry powder",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "Fresh spinach",
      ],

      Instructions: [
        "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
        "Add potatoes and carrots, cook for 5 minutes.",
        "Pour in coconut milk and 1 cup water. Bring to simmer.",
        "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender.",
        "Stir in fresh spinach and cook until wilted.",
        "Serve hot over basmati rice or with naan bread.",
      ],

      Nutrition: ["380 kcal", "14g", "48g", "16g", "12g", "480mg"],

      chef: [
        "Add vegetables in order of cooking time needed",
        "Adjust curry powder amount to taste",
        "Use full-fat coconut milk for creamier curry",
        "Add protein like tofu or paneer if desired",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-8.webp",
      star: 4.5,
      reviews: "(189 reviews)",
      prep: "10 min",
      cook: "5 min",
      servings: "2 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Italian",
      },

      details: {
        h2: "Caprese Sandwich",
        p: "Fresh Italian sandwich with mozzarella, tomato, and basil",
      },

      error: false,

      Ingredients: [
        "1 ciabatta bread",
        "200g fresh mozzarella, sliced",
        "2 large tomatoes, sliced",
        "Fresh basil leaves",
        "3 tablespoons pesto",
        "2 tablespoons balsamic glaze",
        "Olive oil",
        "Salt and pepper",
      ],

      Instructions: [
        "Slice ciabatta bread in half horizontally.",
        "Toast bread lightly until just crispy.",
        "Spread pesto on both sides of bread.",
        "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
        "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
        "Close sandwich, cut in half, and serve immediately.",
      ],

      Nutrition: ["480 kcal", "22g", "48g", "22g", "3g", "680mg"],

      chef: [
        "Use ripe, in-season tomatoes for best flavor",
        "Buffalo mozzarella is traditional but harder to slice",
        "Toast bread lightly - not too crispy",
        "Add prosciutto or salami for a heartier sandwich",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-9.webp",
      star: 4.6,
      reviews: "(421 reviews)",
      prep: "15 min",
      cook: "20 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "American",
      },

      details: {
        h2: "Classic Beef Burger",
        p: "Juicy homemade burger with all the fixings",
      },

      error: false,

      Ingredients: [
        "500g ground beef (80/20)",
        "4 burger buns",
        "4 slices cheddar cheese",
        "Lettuce leaves",
        "Tomato slices",
        "Red onion, sliced",
        "Pickles",
        "Burger sauce or condiments",
      ],

      Instructions: [
        "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
        "Season patties generously with salt and pepper on both sides.",
        "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
        "Add cheese slices in the last minute of cooking and cover to melt.",
        "Toast burger buns lightly on the grill or in a pan.",
        "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
      ],

      Nutrition: ["650 kcal", "38g", "42g", "35g", "2g", "920mg"],

      chef: [
        "Don't press down on burgers while cooking - keeps them juicy",
        "Make indent in center to prevent burger from puffing up",
        "Let patties rest for 2-3 minutes before serving",
        "Toast buns for better texture and flavor",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-11.webp",
      star: 4.8,
      reviews: "(356 reviews)",
      prep: "10 min",
      cook: "15 min",
      servings: "2 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Seafood",
      },

      details: {
        h2: "Shrimp Scampi",
        p: "Garlicky shrimp in white wine butter sauce",
      },

      error: false,

      Ingredients: [
        "400g large shrimp, peeled",
        "300g linguine pasta",
        "6 cloves garlic, minced",
        "1/2 cup white wine",
        "4 tablespoons butter",
        "2 tablespoons olive oil",
        "Fresh parsley, chopped",
        "Lemon juice and zest",
        "Red pepper flakes",
      ],

      Instructions: [
        "Cook linguine according to package directions. Reserve 1 cup pasta water.",
        "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
        "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
        "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice.",
        "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
        "Garnish with parsley, lemon zest, and serve immediately.",
      ],

      Nutrition: ["520 kcal", "36g", "54g", "18g", "3g", "620mg"],

      chef: [
        "Use pork shoulder for best results - it stays moist",
        "Let pork rest before shredding for juicier meat",
        "Make your own BBQ sauce for better flavor",
        "Leftovers freeze well for up to 3 months",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-12.webp",
      star: 4.7,
      reviews: "(376 reviews)",
      prep: "15 min",
      cook: "20 min",
      servings: "2 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Asian",
      },

      details: {
        h2: "Teriyaki Chicken Bowl",
        p: "Sweet and savory chicken over rice with vegetables",
      },

      error: false,

      Ingredients: [
        "400g chicken thighs, sliced",
        "1/2 cup teriyaki sauce",
        "2 cups cooked rice",
        "1 broccoli head, florets",
        "1 carrot, julienned",
        "Sesame seeds",
        "Green onions, sliced",
        "1 tablespoon sesame oil",
      ],

      Instructions: [
        "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
        "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
        "Meanwhile, steam broccoli and carrots until tender-crisp.",
        "Divide rice between bowls.",
        "Top with teriyaki chicken and steamed vegetables.",
        "Garnish with sesame seeds and green onions. Serve hot.",
      ],

      Nutrition: ["540 kcal", "42g", "58g", "14g", "4g", "1240mg"],

      chef: [
        "Use chicken thighs for juicier meat",
        "Make homemade teriyaki sauce for better flavor control",
        "Add edamame for extra protein",
        "Meal prep by cooking rice and chicken ahead",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-13.webp",
      star: 4.8,
      reviews: "(234 reviews)",
      prep: "30 min",
      cook: "60 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Intermediate",
        span2: "Mediterranean",
      },

      details: {
        h2: "Greek Moussaka",
        p: "Traditional layered eggplant casserole with lamb",
      },

      error: true,

      Ingredients: [
        "3 large eggplants, sliced",
        "500g ground lamb",
        "400g canned tomatoes",
        "1 onion, diced",
        "3 cloves garlic, minced",
        "500ml béchamel sauce",
        "Cinnamon and oregano",
        "Olive oil",
      ],

      Instructions: [
        "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
        "Brush eggplant slices with olive oil, grill or bake until softened.",
        "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
        "Divide rice between bowls.",
        "Preheat oven to 180°C (350°F).",
        "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
        "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
      ],

      Nutrition: ["580 kcal", "36g", "32g", "32g", "8g", "820mg"],

      chef: [
        "Salt eggplant to remove bitterness",
        "Don't skip the resting time - it helps set the layers",
        "Use ground beef if lamb is unavailable",
        "Make ahead and reheat for easier serving",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-14.webp",
      star: 4.9,
      reviews: "(512 reviews)",
      prep: "90 min",
      cook: "12 min",
      servings: "2 people",
    },

    right: {
      top: {
        span1: "Intermediate",
        span2: "Italian",
      },

      details: {
        h2: "Margherita Pizza",
        p: "Classic Italian pizza with fresh mozzarella and basil",
      },

      error: true,

      Ingredients: [
        "300g pizza dough",
        "200g crushed tomatoes",
        "250g fresh mozzarella",
        "Fresh basil leaves",
        "2 tablespoons olive oil",
        "2 cloves garlic, minced",
        "Salt and pepper to taste",
        "Parmesan cheese for topping",
      ],

      Instructions: [
        "Let pizza dough come to room temperature and rest for 1 hour.",
        "Preheat oven to maximum temperature (usually 250°C/480°F).",
        "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
        "Roll out dough on a floured surface to desired thickness.",
        "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
        "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
      ],

      Nutrition: ["580 kcal", "24g", "68g", "22g", "4g", "920mg"],

      chef: [
        "Use a pizza stone for crispier crust",
        "Don't overload with toppings - less is more",
        "Add basil after baking to keep it fresh",
        "Let dough rest properly for best texture",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-15.webp",
      star: 4.9,
      reviews: "(478 reviews)",
      prep: "30 min",
      cook: "90 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Intermediate",
        span2: "Italian",
      },

      details: {
        h2: "Lasagna Bolognese",
        p: "Layered Italian pasta with rich meat sauce and béchamel",
      },

      error: true,

      Ingredients: [
        "12 lasagna sheets",
        "500g ground beef",
        "400g canned tomatoes",
        "1 onion, diced",
        "2 carrots, diced",
        "500ml béchamel sauce",
        "200g mozzarella, grated",
        "100g parmesan cheese",
        "Fresh basil",
      ],

      Instructions: [
        "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
        "Cook lasagna sheets according to package directions. Drain and set aside.",
        "Preheat oven to 180°C (350°F).",
        "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times.",
        "Top final layer with béchamel, mozzarella, and parmesan cheese.",
        "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
      ],

      Nutrition: ["680 kcal", "42g", "58g", "28g", "6g", "920mg"],

      chef: [
        "Make bolognese sauce a day ahead for better flavor",
        "Don't skip the resting time after baking",
        "Use fresh pasta sheets for best texture",
        "Freeze leftovers in individual portions",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-16.webp",
      star: 4.7,
      reviews: "(389 reviews)",
      prep: "20 min",
      cook: "30 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Intermediate",
        span2: "Asian",
      },

      details: {
        h2: "Chicken Tikka Masala",
        p: "Rich and creamy Indian curry with tender chicken pieces",
      },

      error: true,

      Ingredients: [
        "600g chicken breast, cubed",
        "1 cup plain yogurt",
        "2 tablespoons tikka masala paste",
        "400ml coconut cream",
        "1 onion, diced",
        "4 cloves garlic, minced",
        "2 tablespoons ginger, grated",
        "400g canned tomatoes",
        "Fresh cilantro for garnish",
      ],

      Instructions: [
        "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
        "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
        "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
        "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.",
        "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
        "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
      ],

      Nutrition: ["450 kcal", "38g", "24g", "22g", "4g", "760mg"],

      chef: [
        "Marinate chicken overnight for deeper flavor",
        "Use full-fat coconut cream for richest sauce",
        "Adjust spice level by varying the tikka paste amount",
        "Serve with naan bread and basmati rice",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-17.webp",
      star: 4.8,
      reviews: "(234 reviews)",
      prep: "15 min",
      cook: "20 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Italian",
      },

      details: {
        h2: "Creamy Spaghetti Carbonara",
        p: "A classic Italian pasta dish with eggs, cheese, and pancetta",
      },

      error: false,

      Ingredients: [
        "400g spaghetti pasta",
        "200g pancetta or guanciale, diced",
        "4 large eggs",
        "100g Pecorino Romano cheese, grated",
        "50g Parmesan cheese, grated",
        "Freshly ground black pepper",
        "Salt for pasta water",
      ],

      Instructions: [
        "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
        "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
        "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
        "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
        "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
        "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
      ],

      Nutrition: ["520 kcal", "28g", "62g", "18g", "3g", "680mg"],

      chef: [
        "Use room temperature eggs for a smoother sauce consistency",
        "Work quickly when mixing eggs with hot pasta to avoid scrambling",
        "Reserve extra pasta water - it's the secret to perfect creaminess",
        "Freshly grated cheese makes all the difference in flavor",
        "Never add cream - authentic carbonara is made with eggs only",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-18.webp",
      star: 4.4,
      reviews: "(198 reviews)",
      prep: "15 min",
      cook: "0 min",
      servings: "2 people",
    },

    right: {
      top: {
        span1: "Easy",
        span2: "Mediterranean",
      },

      details: {
        h2: "Caesar Salad",
        p: "Classic salad with crispy romaine and creamy dressing",
      },

      error: false,

      Ingredients: [
        "1 large romaine lettuce",
        "1/2 cup Caesar dressing",
        "1/2 cup parmesan cheese, shaved",
        "1 cup croutons",
        "2 anchovy fillets (optional)",
        "Lemon wedges",
        "Black pepper",
      ],

      Instructions: [
        "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
        "Place lettuce in a large salad bowl.",
        "Add Caesar dressing and toss until evenly coated.",
        "Add croutons and half the parmesan cheese. Toss gently.",
        "Top with remaining parmesan shavings and anchovies if using.",
        "Serve immediately with lemon wedges and fresh black pepper.",
      ],

      Nutrition: ["320 kcal", "12g", "18g", "22g", "3g", "680mg"],

      chef: [
        "Use cold, crisp lettuce for best texture",
        "Make homemade croutons for better flavor",
        "Add grilled chicken for a complete meal",
        "Don't dress salad until ready to serve",
      ],
    },
  },

  {
    left: {
      img: "./images/photo-19.webp",
      star: 4.7,
      reviews: "(267 reviews)",
      prep: "15 min",
      cook: "60 min",
      servings: "4 people",
    },

    right: {
      top: {
        span1: "Intermediate",
        span2: "Mediterranean",
      },

      details: {
        h2: "French Onion Soup",
        p: "Rich beef broth with caramelized onions and melted cheese",
      },

      error: true,

      Ingredients: [
        "4 large onions, thinly sliced",
        "4 tablespoons butter",
        "1 liter beef broth",
        "1/2 cup white wine",
        "2 bay leaves",
        "Fresh thyme",
        "Baguette slices",
        "200g Gruyère cheese, grated",
      ],

      Instructions: [
        "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
        "Add white wine and deglaze the pot, scraping up brown bits.",
        "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
        "Meanwhile, toast baguette slices until golden.",
        "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
        "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
      ],

      Nutrition: ["380 kcal", "18g", "36g", "18g", "4g", "980mg"],

      chef: [
        "Patience is key - don't rush the onion caramelization",
        "Use good quality beef broth for best flavor",
        "Gruyère can be substituted with Swiss cheese",
        "Watch carefully when broiling to avoid burning",
      ],
    },
  },
];

function displayInformation() {
  var num = randNum();
  var Ingredients = getIngredients(num);
  var Instructions = getInstructions(num);
  var Nutrition = gitNutrition(num);
  var chef = gitChef(num);
  var error = checkHasError(num);

  var left = `<div class="inner position-relative h-100">
                <img
                  class="d-block w-100 object-fit-cover h-100"
                  src="${boxes[num].left.img}"
                  alt="photo-1"
                />

                <div
                  class="layer d-flex flex-column justify-content-between align-items-start position-absolute"
                >
                  <div class="top rounded-pill d-flex align-items-center">
                    <i class="fa-solid fa-star"></i>
                    <span>${boxes[num].left.star}</span>
                    <span>${boxes[num].left.reviews}</span>
                  </div>

                  <div
                    class="bottom d-flex justify-content-around text-center align-items-center w-100"
                  >
                    <div class="box">
                      <i class="fa-solid fa-clock"></i>
                      <span>Prep Time</span>
                      <h5>${boxes[num].left.prep}</h5>
                    </div>

                    <div class="box">
                      <i class="fa-solid fa-fire-burner"></i>
                      <span>Cook Time</span>
                      <h5>${boxes[num].left.cook}</h5>
                    </div>

                    <div class="box">
                      <i class="fa-solid fa-users"></i>
                      <span>Servings</span>
                      <h5>${boxes[num].left.servings}</h5>
                    </div>
                  </div>
                </div>
              </div>`;

  var right = `<div class="inner">
                
                <div
                  class="details d-flex justify-content-between"
                >
                  <div class="liftDetails">
                  <div class="top d-flex align-items-center">
                  <span class="rounded-pill">${boxes[num].right.top.span1}</span>
                  <span class="rounded-pill">${boxes[num].right.top.span2}</span>
                </div>

                    <h2>${boxes[num].right.details.h2}</h2>
                    <p>
                      ${boxes[num].right.details.p}
                    </p>
                  </div>

                  <div class="rightDetails d-flex">
                    <div class="icon">
                      <i class="fa-solid fa-bookmark"></i>
                    </div>

                    <div class="icon">
                      <i class="fa-solid fa-share-nodes"></i>
                    </div>
                  </div>
                </div>

                ${error}

                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-Ingredients-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Ingredients"
                      type="button"
                      role="tab"
                      aria-controls="pills-Ingredients"
                      aria-selected="true"
                    >
                      <i class="fa-solid fa-list-check"></i> Ingredients
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Instructions-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Instructions"
                      type="button"
                      role="tab"
                      aria-controls="pills-Instructions"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-book-open"></i> Instructions
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Nutrition-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Nutrition"
                      type="button"
                      role="tab"
                      aria-controls="pills-Nutrition"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-chart-pie"></i> Nutrition
                    </button>
                  </li>

                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Chef-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Chef"
                      type="button"
                      role="tab"
                      aria-controls="pills-Chef"
                      aria-selected="false"
                    >
                      <i class="fa-solid fa-lightbulb"></i> Chef's Tips
                    </button>
                  </li>
                </ul>

                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-Ingredients"
                    role="tabpanel"
                    aria-labelledby="pills-Ingredients-tab"
                    tabindex="0"
                  >
                    <div class="list d-flex flex-column">
                      ${Ingredients}
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-Instructions"
                    role="tabpanel"
                    aria-labelledby="pills-Instructions-tab"
                    tabindex="0"
                  >
                    <div class="list d-flex flex-column">
                      ${Instructions}
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-Nutrition"
                    role="tabpanel"
                    aria-labelledby="pills-Nutrition-tab"
                    tabindex="0">

                    <div class="d-flex flex-wrap">
                      ${Nutrition}
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="pills-Chef"
                    role="tabpanel"
                    aria-labelledby="pills-Chef-tab"
                    tabindex="0"
                  >
                    <div class="list d-flex flex-column">
                       ${chef}
                    </div>
                  </div>
                </div>

                <a href="#content" class="button" onclick="displayInformation()">
                  <i class="fa-solid fa-rotate"></i> Try Another Recipe
                </a>
              </div>`;

  leftContent.innerHTML = left;
  rightContent.innerHTML = right;
}
