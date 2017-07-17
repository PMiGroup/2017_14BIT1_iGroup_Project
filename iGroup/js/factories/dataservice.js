(function() {
  angular
      .module("PMBOK")
      .factory("DataService", DataService);

      function DataService() {
        var dataObj = {
          knowledgeareaData: knowledgeareaData,
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

  knowledgeareaData = [
        {
            "name": "Project Integration Management",
            "image_url": "http://il2.picdn.net/shutterstock/videos/13709771/thumb/1.jpg",
            "initiating": "Develop Project Charter",
            "planning": "Develop PM Plan",
            "executing": "Direct and Mangement Project Work",
            "monitoring and controlling": "Monitor and Control Project Work, Perform integrated Change Control",
            "closing": "Close Project or Phase",
            "description": "This is covered first in the PMBOK® Guide, but it’s about bringing together everything you know so that you are managing your project holistically and not in individual process chunks. Because of that, it’s easier to study this knowledge area last. Skip this section of the book and come back to it later!"
        },
        {
            "name": "Project Scope Management",
            "image_url": "http://www.agatakopff.com/wp-content/uploads/2015/12/binoculars_boy.png ",
            "initiating": "",
            "planning": "Plan Scope Management, Collect Requirements,Define Scope, Create WBS",
            "executing": "",
            "monitoring and controlling": "Validate Scope, Control Scope",
            "closing": "",
            "description": "‘Scope’ is the way to define what your project will deliver. Scope management is all about making sure that everyone is clear about what the project is for and what it includes. It covers collecting requirements and preparing the work breakdown structure."
        },
        {
            "name": "Project Time Management",
            "image_url": "https://fthmb.tqn.com/wGBUAvyl5gi58f4rsLkqpdhOis0=/768x0/filters:no_upscale()/about/time-management-57c0895e3df78cc16e5a3623.png",
            "initiating": "",
            "planning": "Plan Schedule Management, Define Activities, Sequence Activities, Estimate Activities Resources, Estimate Activity Duration, Develop Schedule",
            "executing": "",
            "monitoring and controlling": "Control Schedule",
            "closing": "",
            "description": "Project time management isn’t about being personally more effective. It relates to how you manage the time people are spending on their project tasks, and how long the project takes overall. This knowledge area helps you understand the activities in the project, the sequence of those activities, and how long they are going to take. It’s also where you prepare your project schedule."
        },
        {
            "name": "Project Cost Management",
            "image_url": "http://assets.inoutput.io/How-to-fund-your-software-project-with-grants_image-3_161016_101551.jpg",
            "initiating": "",
            "planning": "Plan Cost Management, Estimate Costs, Determine Budget",
            "executing": "",
            "monitoring and controlling": "Control Costs",
            "closing": "",
            "description": "Cost management is, as you’d expect, all about handling the project’s finances. The big activity in this knowledge area is preparing your budget which includes working out how much each task is going to cost and then determining your project’s overall budget forecast. And, of course, it covers tracking the project’s expenditure against that budget and making sure that you are still on track not to overspend."
        },
        {
            "name": "Project Quality Management",
            "image_url": "https://image.freepik.com/free-vector/flat-check-list-design_1156-699.jpg",
            "initiating": "",
            "planning": "Plan quality management",
            "executing": "Perform quality assurance",
            "monitoring and controlling": "Control quality",
            "closing": "",
            "description": "Project quality management is quite a small knowledge area, as it only covers three processes. This area is where you’ll learn about and set up the quality control and quality management activities on your project so that you can be confident the result will meet your customers’ expectations."
        },
        {
            "name": "Project Human Resource Management",
            "image_url": "https://static1.squarespace.com/static/57b5c04615d5db700ba26ad9/t/57b7707715d5dbf599f32c40/1471639678687/shutterstock_181294877.jpg",
            "initiating": "",
            "planning": "Plan Human Resource management",
            "executing": "Acquire project team, Develop project team, Manage project team",
            "monitoring and controlling": "",
            "closing": "",
            "description": "Project human resource management relates to how you run your project team. First, you have to understand what resources you need to be able to complete your project, then you put your team together. After that, it’s all about managing the people on the team including giving them extra skills to do their jobs, if they need it, and learning how to motivate your team."
        },
        {
            "name": "Project Communications Management",
            "image_url": "https://teams.qiita.com/wp-content/uploads/2017/06/pixta_21832086_M-1024x563.jpg",
            "initiating": "",
            "planning": "Plan communication management",
            "executing": "Manage communications",
            "monitoring and controlling": "control communication",
            "closing": "",
            "description": "Given that a project manager’s job is often said to be about 80% communication, this is another small knowledge area. The three processes are planning, managing and controlling project communications. It’s here that you’ll write your communications plan for the project and monitor all the incoming and outgoing communications. There are strong links with human resource management and stakeholder management too, even if these aren’t explicit as I think they should be in the PMBOK® Guide."
        },
        {
            "name": "Project Risk Management",
            "image_url": "https://reciprocitylabs.com/wp-content/uploads/2016/03/bigstock-Set-of-flat-design-vector-illu-81236273_crop.jpg ",
            "initiating": "",
            "planning": "Plan risk management, Identify risks, Perform qualitative risk analysis, Perform quantiative risk analysis, Plan risk responses",
            "executing": "",
            "monitoring and controlling": "Control risks",
            "closing": "",
            "description": "The first step in project risk management is planning your risk management work, and then you quickly move on to identifying risks and understanding how to assess risks on your project. There is a lot of detail in this knowledge area, specifically around how you perform quantitative and qualitative risk assessments. Risk management isn’t a one-off activity, though, and this knowledge area also covers controlling your project risks going forward through the project life cycle."
        },
        {
            "name": "Project Procurement Management",
            "image_url": "https://s-media-cache-ak0.pinimg.com/originals/ef/9f/15/ef9f1543d4ff7342340a6270c42c4e48.jpg",
            "initiating": "",
            "planning": "Plan procurement management",
            "executing": "Conduct Procurements",
            "monitoring and controlling": "Control Procurements",
            "closing": "Close procurements",
            "description": "Procurement management isn’t something that you’ll have to do on all projects, but it is common. This knowledge area supports all your procurement and supplier work from planning what you need to buy, to going through the tendering and purchasing process to managing the work of the supplier and closing the contract when the project is finished. This has strong links to the work of financial tracking on your project and also to performance management. You'll have to manage the performance of your contractors as the project progresses."
        },
        {
            "name": "Project Stakeholder Management",
            "image_url": "https://image.freepik.com/free-vector/business-team-avatars-in-flat-design_23-2147532928.jpg",
            "initiating": "Identify stakeholders",
            "planning": "Plan stakeholder management",
            "executing": "Manage stakeholder engagement",
            "monitoring and controlling": "Control stakeholder engagement",
            "closing": "",
            "description": "The final knowledge area is, the most important. This takes you through the journey of identifying stakeholders, understanding their role and needs in the project and ensuring that you can deliver those. I think we'll see this area develop further in the next edition of the standard."
        }
        
];
})();
