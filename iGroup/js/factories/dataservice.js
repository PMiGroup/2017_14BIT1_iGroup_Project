(function() {
  angular
      .module("pokemonFacts")
      .factory("DataService", DataService);

      function DataService() {
        var dataObj = {
          pokemonData: pokemonData,
          quizQuestions: quizQuestions,
          correctAnswers: correctAnswers
        };
        return dataObj;
      }

  var correctAnswers = [0, 3, 2, 0, 1, 2, 0, 1, 0, 0];

  var quizQuestions = [
    { //Cau1 - 0
      type: "text",
      text: "How much can a charmander height?",
      possibilities: [
        {
          answer: "2.00 feet"
        },
        {
          answer: "2.50 feet"
        },
        {
          answer: "2.04 feet"
        },
        {
          answer: "2.03 feet"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau2 - 3
      type: "text",
      text: "How much can a Charizard weight?",
      possibilities: [
        {
          answer: "199 lbs"
        },
        {
          answer: "200 lbs"
        },
        {
          answer: "200.5 lbs"
        },
        {
          answer: "199.5 lbs"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau3 - 2
      type: "image",
      text: "Which is Blastoise?",
      possibilities: [
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009_f2.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/117.png"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau4 - 0
      type: "text",
      text: "What is Bulbasaur's weaknesses?",
      possibilities: [
        {
          answer: "Fire - Flying - Ice - Psychic"
        },
        {
          answer: "Ground - Rock - Water"
        },
        {
          answer: "Electric - Grass"
        },
        {
          answer: "Fire - Flying"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau5 - 1
      type: "text",
      text: "How many kinds of type Eevee can evolve in gen 1?",
      possibilities: [
        {
          answer: "4"
        },
        {
          answer: "3"
        },
        {
          answer: "2"
        },
        {
          answer: "1"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau6 - 2
      type: "image",
      text: "Which is pokemon belong to type of finghting?",
      possibilities: [
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/076.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/105.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/107.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/125.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/112.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau7 - 0
      type: "image",
      text: "Which is pokemon belong to type of water?",
      possibilities: [
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/134.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/144.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/147.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/148.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau8 - 1
      type: "text",
      text: "What is type of Eevee?",
      possibilities: [
        {
          answer: "Water"
        },
        {
          answer: "Normal"
        },
        {
          answer: "Fire"
        },
        {
          answer: "Electric"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau9 - 0
      type: "image",
      text: "Which is legendary pokemon?",
      possibilities: [
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/146.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/149.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/143.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/detail/141.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/137.png"
        },
        {
          answer: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/138.png"
        }
      ],
      selected: null,
      correct: null
    },
    { //Cau10 - 0
      type: "text",
      text: "What is type of Lapras?",
      possibilities: [
        {
          answer: "Water - Ice"
        },
        {
          answer: "Water - Flying"
        },
        {
          answer: "Water"
        },
        {
          answer: "Water - Rock"
        }
      ],
      selected: null,
      correct: null
    }
  ];

  var pokemonData = [
      {
          name: "Bulbasaur - 001",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
          category: "Seed",
          height: "2.04 feet",
          weight: "15.2 lbs",
          type: "Grass - Poison",
          weaknesses: "Fire - Flying - Ice - Psychic",
          description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger."
      },
      {
          name: "Ivysaur - 002",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
          category: "Seed",
          height: "3.03 feet",
          weight: "28.7 lbs",
          type: "Grass - Poison",
          weaknesses: "Fire - Flying - Ice - Psychic",
          description: "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon."
      },
      {
          name: "Venusaur - 003",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
          category: "Seed",
          height: "6.07 feet",
          weight: "220.5 lbs",
          type: "Grass - Poison",
          weaknesses: "Fire - Flying - Ice - Psychic",
          description: "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people."
      },
      {
          name: "Charmander - 004",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
          category: "Lizard",
          height: "2.00 feet",
          weight: "18.7 lbs",
          type: "Fire",
          weaknesses: "Ground - Rock - Water",
          description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely."
      },
      {
          name: "Charmeleon - 005",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
          category: "Flame",
          height: "3.07 feet",
          weight: "41.9 lbs",
          type: "Fire",
          weaknesses: "Ground - Rock - Water",
          description: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color."
      },
      {
          name: "Charizard - 006",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
          category: "Flame",
          height: "5.07 feet",
          weight: "199.5 lbs",
          type: "Fire - Flying",
          weaknesses: "Ground - Rock - Water",
          description: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself."
      },
      {
          name: "Squirtle - 007",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
          category: "Tiny Turtle",
          height: "1.08 feet",
          weight: "19.8 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds."
      },
      {
          name: "Wartortle - 008",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png",
          category: "Turtle",
          height: "3.03 feet",
          weight: "49.6 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon's toughness as a battler."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      },
      {
          name: "Blastoise - 009",
          image_url: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png",
          category: "Shellfish",
          height: "5.03 feet",
          weight: "188.5 lbs",
          type: "Water",
          weaknesses: "Electric - Grass",
          description: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet."
      }
  ];
})();
