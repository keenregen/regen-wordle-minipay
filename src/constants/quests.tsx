import { DifficultyButton } from '@src/models/quest';
export const EASY_GAME_TIME = 180;
export const MEDIUM_GAME_TIME = 300;
export const HARD_GAME_TIME = 420;

export const quests = [
  {
    name: 'Regenerative Agriculture',
    image: '/quests/quest-1z.png',
    link: 'regenerative_agriculture',
    disabled: false,
  },
  {
    name: 'Regenerative Energy',
    image: '/quests/quest-2z.png',
    link: 'regenerative_energy',
    disabled: false,
  },
  {
    name: 'Regenerative Buildings',
    image: '/quests/quest-3z.png',
    link: 'regenerative_buildings',
    disabled: false,
  },
  {
    name: 'Regenerative Forestry',
    image: '/quests/quest-4z.png',
    link: 'regenerative_forestry',
    disabled: false,
  },
  {
    name: 'Regenerative Water Management',
    image: '/quests/quest-5z.png',
    link: 'water_management',
    disabled: false,
  },
  {
    name: 'Regenerative Waste Management',
    image: '/quests/quest-6z.png',
    link: 'waste_management',
    disabled: false,
  },
];

export const difficultyButtons: DifficultyButton[] = [
  {
    id: 'easy',
    name: 'EASY',
    link: 'easy',
  },
  {
    id: 'medium',
    name: 'MEDIUM',
    link: 'medium',
  },
  {
    id: 'hard',
    name: 'HARD',
    link: 'hard',
  },
];

export const agricultureQuestions = [
  {
    question: 'What is regenerative agriculture?',
    options: [
      {
        id: '1',
        option: 'A farming method that focuses on maximizing crop yield',
      },
      {
        id: '2',
        option:
          'A sustainable farming practice that aims to restore soil health',
      },
      {
        id: '3',
        option:
          'A technique to increase pesticide use for higher crop productivity',
      },
      {
        id: '4',
        option: 'A process of genetically modifying crops for better growth',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      'Which of the following is a key principle of regenerative agriculture?',
    options: [
      { id: '1', option: 'Monocropping and excessive chemical use' },
      { id: '2', option: 'Reducing biodiversity and habitat preservation' },
      { id: '3', option: 'Using cover crops and crop rotation' },
      { id: '4', option: 'Overgrazing and deforestation' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'Why is regenerative agriculture important?',
    options: [
      { id: '1', option: 'It leads to higher profits for farmers' },
      { id: '2', option: 'It helps reduce greenhouse gas emissions' },
      {
        id: '3',
        option: 'It requires less labor compared to conventional farming',
      },
      {
        id: '4',
        option: 'It promotes the use of synthetic fertilizers and pesticides',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question: 'What is the role of cover crops in regenerative agriculture?',
    options: [
      { id: '1', option: 'To increase soil erosion' },
      { id: '2', option: 'To provide food for pests and insects' },
      {
        id: '3',
        option: 'To improve soil fertility and prevent nutrient loss',
      },
      { id: '4', option: 'To reduce water infiltration' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'Which farming practice helps promote regenerative agriculture?',
    options: [
      { id: '1', option: 'Tillage farming with deep plowing' },
      { id: '2', option: 'No-till farming with minimal soil disturbance' },
      { id: '3', option: 'Indiscriminate use of chemical fertilizers' },
      { id: '4', option: 'Continuous monocropping without rotation' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      'What is the purpose of agroforestry in regenerative agriculture?',
    options: [
      { id: '1', option: 'To clear land for more intensive crop production' },
      {
        id: '2',
        option: 'To reduce biodiversity and increase soil degradation',
      },
      {
        id: '3',
        option: 'To integrate trees with crops for ecosystem benefits',
      },
      { id: '4', option: 'To eliminate the need for pest control measures' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the primary goal of regenerative agriculture?',
    options: [
      { id: '1', option: 'Maximize short-term profits' },
      { id: '2', option: 'Improve soil health and ecosystem resilience' },
      { id: '3', option: 'Increase reliance on synthetic inputs' },
      { id: '4', option: 'Minimize carbon sequestration' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      'How does regenerative agriculture contribute to water conservation?',
    options: [
      { id: '1', option: 'By promoting excessive irrigation practices' },
      {
        id: '2',
        option: 'By using synthetic chemicals that reduce water pollution',
      },
      {
        id: '3',
        option: 'By improving soil structure for better water retention',
      },
      { id: '4', option: 'By clearing natural vegetation near water bodies' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the impact of regenerative agriculture on biodiversity?',
    options: [
      { id: '1', option: 'It leads to a decrease in species diversity' },
      { id: '2', option: 'It has no significant impact on biodiversity' },
      {
        id: '3',
        option: 'It promotes habitat restoration and increases biodiversity',
      },
      {
        id: '4',
        option: 'It encourages the use of genetically modified organisms',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which practice helps sequester carbon in regenerative agriculture?',
    options: [
      { id: '1', option: 'Intensive use of synthetic fertilizers' },
      { id: '2', option: 'Deforestation for more cropland' },
      { id: '3', option: 'Planting trees and perennial crops' },
      { id: '4', option: 'Excessive tilling and soil disturbance' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the role of livestock in regenerative agriculture?',
    options: [
      { id: '1', option: 'To deplete soil nutrients' },
      { id: '2', option: 'To increase greenhouse gas emissions' },
      { id: '3', option: 'To contribute to nutrient cycling and soil health' },
      { id: '4', option: 'To reduce biodiversity on grazing lands' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'How does regenerative agriculture impact water quality?',
    options: [
      { id: '1', option: 'It promotes chemical runoff and water pollution' },
      { id: '2', option: 'It reduces the availability of clean water sources' },
      {
        id: '3',
        option: 'It improves water quality by minimizing chemical use',
      },
      { id: '4', option: 'It encourages excessive irrigation practices' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the role of composting in regenerative agriculture?',
    options: [
      { id: '1', option: 'To increase reliance on synthetic fertilizers' },
      { id: '2', option: 'To deplete soil organic matter' },
      { id: '3', option: 'To improve soil structure and fertility' },
      { id: '4', option: 'To increase pesticide use for higher crop yield' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'Which farming method is aligned with regenerative agriculture?',
    options: [
      { id: '1', option: 'Conventional, chemical-intensive farming' },
      { id: '2', option: 'Genetically modified organism (GMO) farming' },
      { id: '3', option: 'Organic farming with minimal chemical inputs' },
      { id: '4', option: 'Overgrazing and land degradation' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the long-term benefit of regenerative agriculture?',
    options: [
      { id: '1', option: 'Decreased soil fertility' },
      { id: '2', option: 'Increased reliance on synthetic inputs' },
      { id: '3', option: 'Enhanced ecosystem services and resilience' },
      { id: '4', option: 'Reduced crop productivity' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
];

export const energyQuestions = [
  {
    question: 'What is regenerative energy?',
    options: [
      { id: '1', option: 'Energy generated from non-renewable sources' },
      { id: '2', option: 'Energy produced from fossil fuels' },
      {
        id: '3',
        option: 'Energy derived from sustainable and renewable sources',
      },
      { id: '4', option: 'Energy obtained through wind turbines' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'Which of the following is a renewable energy source?',
    options: [
      { id: '1', option: 'Coal' },
      { id: '2', option: 'Natural gas' },
      { id: '3', option: 'Solar power' },
      { id: '4', option: 'Oil' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the role of wind turbines in regenerative energy?',
    options: [
      { id: '1', option: 'To produce greenhouse gases' },
      { id: '2', option: 'To generate electricity from wind power' },
      { id: '3', option: 'To extract and burn fossil fuels' },
      { id: '4', option: 'To consume large amounts of water' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question: 'What is the primary benefit of regenerative energy sources?',
    options: [
      { id: '1', option: 'High cost and limited availability' },
      {
        id: '2',
        option: 'Environmental sustainability and reduced carbon emissions',
      },
      { id: '3', option: 'Reliance on finite resources' },
      { id: '4', option: 'Increasing pollution levels' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question: "Which renewable energy source uses the Earth's internal heat?",
    options: [
      { id: '1', option: 'Solar power' },
      { id: '2', option: 'Hydropower' },
      { id: '3', option: 'Geothermal energy' },
      { id: '4', option: 'Biomass energy' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the purpose of solar panels in regenerative energy?',
    options: [
      { id: '1', option: 'To increase carbon emissions' },
      { id: '2', option: 'To convert sunlight into electricity' },
      { id: '3', option: 'To extract and burn fossil fuels' },
      { id: '4', option: 'To reach wind energy' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      'Which of the following is an example of a regenerative energy system?',
    options: [
      { id: '1', option: 'Traditional coal power plants' },
      { id: '2', option: 'Hydrofracking for natural gas extraction' },
      { id: '3', option: 'Solar farms and wind parks' },
      { id: '4', option: 'Oil drilling in offshore platforms' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the environmental impact of regenerative energy?',
    options: [
      { id: '1', option: 'Increased pollution and carbon emissions' },
      {
        id: '2',
        option:
          'Reduced reliance on fossil fuels and lower greenhouse gas emissions',
      },
      { id: '3', option: 'Depletion of natural resources' },
      { id: '4', option: 'Higher water consumption' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question: 'What is the role of hydropower in regenerative energy?',
    options: [
      { id: '1', option: 'To deplete freshwater resources' },
      {
        id: '2',
        option: 'To obtain energy from flowing or falling water',
      },
      { id: '3', option: 'To extract and burn fossil fuels' },
      { id: '4', option: 'To increase air pollution' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      'Which renewable energy source relies on plant and animal matter?',
    options: [
      { id: '1', option: 'Wind power' },
      { id: '2', option: 'Solar power' },
      { id: '3', option: 'Geothermal energy' },
      { id: '4', option: 'Biomass energy' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '4',
  },
  {
    question: 'What is the role of tidal energy in regenerative energy?',
    options: [
      { id: '1', option: 'To increase reliance on fossil fuels' },
      { id: '2', option: 'To obtain energy from ocean tides' },
      { id: '3', option: 'To extract and burn biomass' },
      { id: '4', option: 'To increase air pollution' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question: 'Which renewable energy source utilizes the heat from the sun?',
    options: [
      { id: '1', option: 'Hydropower' },
      { id: '2', option: 'Solar energy' },
      { id: '3', option: 'Wind power' },
      { id: '4', option: 'Biomass energy' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      'What is the primary challenge of integrating renewable energy into the power grid?',
    options: [
      { id: '1', option: 'High cost and limited availability' },
      { id: '2', option: 'Intermittency and grid stability' },
      { id: '3', option: 'Increased reliance on fossil fuels' },
      { id: '4', option: 'Environmental pollution' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      "Which renewable energy source uses the Earth's gravitational force?",
    options: [
      { id: '1', option: 'Hydropower' },
      { id: '2', option: 'Solar power' },
      { id: '3', option: 'Wind power' },
      { id: '4', option: 'Geothermal energy' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '1',
  },
  {
    question: 'What is the role of bioenergy in regenerative energy?',
    options: [
      { id: '1', option: 'To increase greenhouse gas emissions' },
      { id: '2', option: 'To convert fossil fuels into electricity' },
      { id: '3', option: 'To generate energy from organic matter' },
      { id: '4', option: 'To increase reliance on fossil fuels' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
];

export const buildingQuestions = [
  {
    question: 'What is a regenerative building?',
    options: [
      { id: '1', option: 'A building with high energy consumption' },
      { id: '2', option: 'A building that uses only non-renewable materials' },
      {
        id: '3',
        option: 'A building that generates more energy than it consumes',
      },
      { id: '4', option: 'A building with no focus on sustainability' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative building design principle?',
    options: [
      { id: '1', option: 'Excessive use of non-recyclable materials' },
      { id: '2', option: 'Limited consideration for energy efficiency' },
      { id: '3', option: 'Integration of renewable energy systems' },
      { id: '4', option: 'Disregard for indoor environmental quality' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the role of passive design in regenerative buildings?',
    options: [
      { id: '1', option: 'To increase energy consumption' },
      {
        id: '2',
        option: 'To rely solely on mechanical systems for heating and cooling',
      },
      { id: '3', option: 'To optimize natural lighting and ventilation' },
      { id: '4', option: "To ignore the building's impact on the environment" },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of circular economy in regenerative buildings?',
    options: [
      { id: '1', option: 'To maximize waste generation and disposal' },
      { id: '2', option: 'To prioritize linear material flows' },
      { id: '3', option: 'To minimize resource consumption and promote reuse' },
      { id: '4', option: 'To rely on non-renewable resources' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'Which of the following is a regenerative building practice?',
    options: [
      { id: '1', option: 'Excessive use of single-use plastics' },
      { id: '2', option: 'High reliance on fossil fuel-based energy sources' },
      { id: '3', option: 'Water-efficient fixtures and rainwater harvesting' },
      {
        id: '4',
        option: 'Limited consideration for occupant health and well-being',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the goal of regenerative building design?',
    options: [
      { id: '1', option: 'To maximize waste generation' },
      { id: '2', option: 'To prioritize short-term economic gains' },
      {
        id: '3',
        option:
          'To construct buildings that positively impact the environment and occupants',
      },
      {
        id: '4',
        option: 'To increase energy consumption and greenhouse gas emissions',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which aspect of regenerative buildings focuses on reducing water usage?',
    options: [
      { id: '1', option: 'Integration of energy-efficient lighting systems' },
      { id: '2', option: 'Implementation of green roofs' },
      {
        id: '3',
        option: 'Use of low-flow fixtures and water recycling systems',
      },
      { id: '4', option: 'Disregard for indoor air quality' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the purpose of green materials in regenerative buildings?',
    options: [
      { id: '1', option: 'To maximize resource depletion' },
      { id: '2', option: 'To prioritize non-recyclable materials' },
      { id: '3', option: 'To reduce the environmental impact of the building' },
      { id: '4', option: 'To increase energy consumption' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative building approach for enhancing indoor air quality?',
    options: [
      { id: '1', option: 'Limited consideration for ventilation systems' },
      { id: '2', option: 'Excessive use of toxic building materials' },
      {
        id: '3',
        option:
          'Implementation of natural ventilation and air filtration systems',
      },
      { id: '4', option: 'Disregard for occupant comfort' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of green infrastructure in regenerative buildings?',
    options: [
      { id: '1', option: 'To increase energy consumption' },
      { id: '2', option: 'To prioritize non-renewable resources' },
      { id: '3', option: 'To manage stormwater and promote biodiversity' },
      { id: '4', option: 'To disregard occupant comfort and well-being' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of net-zero energy in regenerative buildings?',
    options: [
      { id: '1', option: 'To generate more energy than the building consumes' },
      { id: '2', option: 'To rely solely on non-renewable energy sources' },
      { id: '3', option: 'To disregard energy efficiency measures' },
      { id: '4', option: 'To prioritize high energy consumption' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '1',
  },
  {
    question:
      'Which of the following is a regenerative building strategy for reducing waste?',
    options: [
      { id: '1', option: 'Excessive use of single-use plastics' },
      { id: '2', option: 'Implementation of recycling programs' },
      {
        id: '3',
        option: 'Disregard for material selection and waste management',
      },
      { id: '4', option: 'Limited consideration for occupant health' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question: 'What is the role of biophilic design in regenerative buildings?',
    options: [
      {
        id: '1',
        option: 'To prioritize artificial lighting and ventilation systems',
      },
      { id: '2', option: 'To increase reliance on non-renewable materials' },
      {
        id: '3',
        option:
          'To incorporate nature and natural elements into the built environment',
      },
      { id: '4', option: 'To disregard indoor air quality' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative building approach for enhancing indoor air quality?',
    options: [
      { id: '1', option: 'Limited consideration for ventilation systems' },
      { id: '2', option: 'Excessive use of toxic building materials' },
      {
        id: '3',
        option:
          'Implementation of natural ventilation and air filtration systems',
      },
      { id: '4', option: 'Disregard for occupant comfort' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the goal of regenerative buildings in terms of occupant well-being?',
    options: [
      {
        id: '1',
        option: 'To prioritize occupant discomfort and health issues',
      },
      { id: '2', option: 'To maximize noise pollution and stress levels' },
      {
        id: '3',
        option: 'To construct healthy and productive indoor environments',
      },
      {
        id: '4',
        option: 'To increase energy consumption and greenhouse gas emissions',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
];

export const forestryQuestions = [
  {
    question: 'What is regenerative forestry?',
    options: [
      { id: '1', option: 'An approach that focuses on clear-cutting forests' },
      {
        id: '2',
        option: 'A practice that promotes sustainable timber harvesting',
      },
      { id: '3', option: 'A method that disregards ecosystem restoration' },
      { id: '4', option: 'A strategy that leads to deforestation' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question:
      'Which of the following is a key principle of regenerative forestry?',
    options: [
      {
        id: '1',
        option:
          'Maximizing timber extraction without considering reforestation',
      },
      { id: '2', option: 'Maintaining monoculture plantations' },
      { id: '3', option: 'Promoting biodiversity and ecosystem health' },
      { id: '4', option: 'Ignoring the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the goal of regenerative forestry practices?',
    options: [
      { id: '1', option: 'To deplete forest resources without replenishment' },
      {
        id: '2',
        option: 'To prioritize short-term profit over long-term sustainability',
      },
      { id: '3', option: 'To restore and enhance forest ecosystems' },
      { id: '4', option: 'To accelerate deforestation rates' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to tree planting?',
    options: [
      {
        id: '1',
        option: 'Planting single species in large-scale monocultures',
      },
      { id: '2', option: 'Promoting mixed-species and diverse forests' },
      { id: '3', option: 'Clearing land for agricultural expansion' },
      { id: '4', option: 'Disregarding local community involvement' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '2',
  },
  {
    question: 'What is the concept of agroforestry in regenerative forestry?',
    options: [
      { id: '1', option: 'Clearing forests for agricultural purposes' },
      { id: '2', option: 'Promoting single-species tree plantations' },
      {
        id: '3',
        option: 'Integrating trees with agricultural crops or livestock',
      },
      { id: '4', option: 'Neglecting soil health and fertility' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to forest management?',
    options: [
      {
        id: '1',
        option: 'Excessive use of chemical pesticides and herbicides',
      },
      { id: '2', option: 'Encouraging clear-cutting for timber production' },
      { id: '3', option: 'Implementing sustainable logging practices' },
      { id: '4', option: 'Ignoring wildlife conservation' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of forest restoration in regenerative forestry?',
    options: [
      { id: '1', option: 'To accelerate deforestation rates' },
      { id: '2', option: 'To prioritize single-species reforestation' },
      {
        id: '3',
        option: 'To restore degraded forests and improve ecosystem resilience',
      },
      { id: '4', option: 'To disregard soil erosion and water quality' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative practice for preventing wildfires?',
    options: [
      { id: '1', option: 'Neglecting forest health and fuel buildup' },
      { id: '2', option: 'Promoting the use of toxic fire retardants' },
      { id: '3', option: 'Implementing controlled burns and forest thinning' },
      { id: '4', option: 'Disregarding the impact on air quality' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of sustainable timber harvesting in regenerative forestry?',
    options: [
      {
        id: '1',
        option:
          'Maximizing timber extraction without considering reforestation',
      },
      { id: '2', option: 'Clear-cutting forests for short-term profit' },
      {
        id: '3',
        option: 'Promoting selective logging and responsible forest management',
      },
      { id: '4', option: 'Ignoring the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to protecting forest ecosystems?',
    options: [
      { id: '1', option: 'Excessive use of chemical fertilizers' },
      { id: '2', option: 'Promoting land conversion for industrial purposes' },
      { id: '3', option: 'Conserving natural habitats and wildlife corridors' },
      { id: '4', option: 'Neglecting soil erosion control' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of carbon sequestration in regenerative forestry?',
    options: [
      {
        id: '1',
        option: 'Accelerating carbon emissions through deforestation',
      },
      { id: '2', option: 'Promoting carbon-intensive industrial practices' },
      { id: '3', option: 'Absorbing and storing carbon dioxide in forests' },
      { id: '4', option: 'Disregarding the impact of greenhouse gases' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to timber processing?',
    options: [
      {
        id: '1',
        option: 'Maximizing waste generation and inefficient resource use',
      },
      { id: '2', option: 'Promoting energy-intensive production methods' },
      {
        id: '3',
        option:
          'Implementing sustainable and efficient manufacturing practices',
      },
      { id: '4', option: 'Disregarding the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of community engagement in regenerative forestry?',
    options: [
      { id: '1', option: 'Neglecting local knowledge and perspectives' },
      { id: '2', option: 'Promoting exclusionary decision-making processes' },
      {
        id: '3',
        option: 'Fostering collaboration and empowering local communities',
      },
      { id: '4', option: 'Disregarding social and cultural values' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to protecting forest biodiversity?',
    options: [
      { id: '1', option: 'Clearing forests for agricultural expansion' },
      {
        id: '2',
        option: 'Promoting the use of harmful pesticides and herbicides',
      },
      {
        id: '3',
        option:
          'Conserving old-growth forests and protecting endangered species',
      },
      { id: '4', option: 'Ignoring ecological connectivity' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of sustainable forest certification in regenerative forestry?',
    options: [
      { id: '1', option: 'Maximizing deforestation rates for commercial gain' },
      { id: '2', option: 'Promoting unregulated timber harvesting' },
      {
        id: '3',
        option:
          'Implementing third-party certification to ensure sustainable forest management',
      },
      { id: '4', option: 'Disregarding the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
];

export const waterQuestions = [
  {
    question: 'What is regenerative water management?',
    options: [
      { id: '1', option: 'A practice that depletes water resources' },
      { id: '2', option: 'An approach that focuses on water pollution' },
      {
        id: '3',
        option: 'A method that aims to restore and enhance water ecosystems',
      },
      { id: '4', option: 'A strategy that disregards water conservation' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a key principle of regenerative water management?',
    options: [
      {
        id: '1',
        option: 'Maximizing water consumption without considering conservation',
      },
      { id: '2', option: 'Promoting unsustainable water extraction practices' },
      {
        id: '3',
        option: 'Conserving water resources and protecting water quality',
      },
      { id: '4', option: 'Ignoring the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the goal of regenerative water management practices?',
    options: [
      { id: '1', option: 'To deplete water sources without replenishment' },
      {
        id: '2',
        option:
          'To prioritize short-term water consumption over long-term sustainability',
      },
      {
        id: '3',
        option: 'To restore and improve water ecosystems and availability',
      },
      { id: '4', option: 'To accelerate water pollution rates' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to water conservation?',
    options: [
      {
        id: '1',
        option: 'Promoting excessive water usage in agricultural practices',
      },
      {
        id: '2',
        option: 'Neglecting water-efficient technologies and infrastructure',
      },
      {
        id: '3',
        option:
          'Implementing water-saving measures and sustainable irrigation methods',
      },
      { id: '4', option: 'Disregarding the impact on local ecosystems' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of watershed management in regenerative water management?',
    options: [
      {
        id: '1',
        option:
          'Ignoring the interconnectedness of water sources and ecosystems',
      },
      { id: '2', option: 'Promoting unregulated water extraction' },
      {
        id: '3',
        option:
          'Managing water resources at a watershed scale for sustainable use',
      },
      {
        id: '4',
        option: 'Disregarding the impact on water-dependent industries',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to wastewater treatment?',
    options: [
      {
        id: '1',
        option: 'Discharging untreated wastewater into natural water bodies',
      },
      {
        id: '2',
        option: 'Promoting the use of chemical-intensive treatment processes',
      },
      {
        id: '3',
        option:
          'Implementing sustainable and natural wastewater treatment systems',
      },
      { id: '4', option: 'Ignoring the impact on human health' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of green infrastructure in regenerative water management?',
    options: [
      {
        id: '1',
        option: 'Neglecting the use of natural systems for water management',
      },
      {
        id: '2',
        option: 'Promoting unsustainable urban development practices',
      },
      {
        id: '3',
        option:
          'Using natural vegetation and landscapes to manage stormwater and enhance water quality',
      },
      { id: '4', option: 'Disregarding the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative practice for enhancing water ecosystems?',
    options: [
      { id: '1', option: 'Clearing riparian vegetation along water bodies' },
      {
        id: '2',
        option: 'Promoting the use of harmful chemicals in water management',
      },
      {
        id: '3',
        option: 'Restoring and protecting wetlands, rivers, and lakes',
      },
      { id: '4', option: 'Ignoring the impact of water scarcity' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of rainwater harvesting in regenerative water management?',
    options: [
      {
        id: '1',
        option:
          'Disregarding the potential of rainwater as a valuable resource',
      },
      {
        id: '2',
        option: 'Promoting wasteful practices in rainwater utilization',
      },
      {
        id: '3',
        option: 'Collecting and storing rainwater for various purposes',
      },
      {
        id: '4',
        option:
          'Neglecting the impact of rainfall patterns on water availability',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to addressing water pollution?',
    options: [
      {
        id: '1',
        option: 'Discharging untreated industrial effluents into water bodies',
      },
      {
        id: '2',
        option: 'Promoting the use of toxic chemicals in agriculture',
      },
      {
        id: '3',
        option:
          'Implementing pollution prevention measures and adopting eco-friendly practices',
      },
      { id: '4', option: 'Ignoring the impact on aquatic ecosystems' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of water-sensitive urban design in regenerative water management?',
    options: [
      {
        id: '1',
        option: 'Neglecting the integration of water systems in urban areas',
      },
      { id: '2', option: 'Promoting excessive water consumption in cities' },
      {
        id: '3',
        option:
          'Designing urban spaces to manage stormwater and promote water conservation',
      },
      { id: '4', option: 'Disregarding the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative practice for groundwater management?',
    options: [
      {
        id: '1',
        option: 'Overexploiting groundwater resources without replenishment',
      },
      { id: '2', option: 'Promoting unregulated drilling of wells' },
      {
        id: '3',
        option: 'Implementing sustainable groundwater recharge methods',
      },
      { id: '4', option: 'Ignoring the impact on surface water sources' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of water stewardship in regenerative water management?',
    options: [
      {
        id: '1',
        option:
          'Disregarding the responsibility of individuals and organizations in water conservation',
      },
      { id: '2', option: 'Promoting wasteful water usage practices' },
      {
        id: '3',
        option:
          'Taking collective action to protect and restore water resources',
      },
      { id: '4', option: 'Neglecting the impact on local ecosystems' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to water reuse?',
    options: [
      {
        id: '1',
        option:
          'Discharging treated wastewater directly into natural water bodies',
      },
      { id: '2', option: 'Promoting the use of non-renewable water sources' },
      {
        id: '3',
        option: 'Implementing water recycling systems for non-potable purposes',
      },
      { id: '4', option: 'Ignoring the impact on public health' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the goal of regenerative irrigation practices?',
    options: [
      { id: '1', option: 'Maximizing water evaporation rates' },
      { id: '2', option: 'Promoting inefficient irrigation methods' },
      {
        id: '3',
        option:
          'Optimizing water use and minimizing water waste in agriculture',
      },
      { id: '4', option: 'Disregarding the impact on crop productivity' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
];

export const wasteQuestions = [
  {
    question: 'What is regenerative waste management?',
    options: [
      {
        id: '1',
        option: 'A practice that encourages landfilling and incineration',
      },
      {
        id: '2',
        option:
          'An approach that promotes the excessive use of single-use products',
      },
      {
        id: '3',
        option:
          'A method that aims to minimize waste generation and maximize resource recovery',
      },
      {
        id: '4',
        option: 'A strategy that disregards the impact on human health',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a key principle of regenerative waste management?',
    options: [
      {
        id: '1',
        option: 'Maximizing waste production without considering recycling',
      },
      { id: '2', option: 'Promoting the use of non-recyclable materials' },
      {
        id: '3',
        option:
          'Reducing, reusing, and recycling waste to minimize environmental impact',
      },
      { id: '4', option: 'Ignoring the impact on local communities' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question: 'What is the goal of regenerative waste management practices?',
    options: [
      { id: '1', option: 'To maximize waste generation and landfilling' },
      {
        id: '2',
        option:
          'To prioritize short-term convenience over long-term sustainability',
      },
      {
        id: '3',
        option:
          'To minimize waste, conserve resources, and reduce environmental harm',
      },
      { id: '4', option: 'To accelerate pollution rates' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to waste reduction?',
    options: [
      { id: '1', option: 'Promoting single-use plastic products' },
      { id: '2', option: 'Neglecting recycling initiatives' },
      {
        id: '3',
        option:
          'Implementing source reduction strategies and encouraging reusable alternatives',
      },
      { id: '4', option: 'Disregarding the impact on local ecosystems' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of circular economy in regenerative waste management?',
    options: [
      {
        id: '1',
        option: 'Ignoring the potential for waste recovery and recycling',
      },
      { id: '2', option: 'Promoting linear production and disposal systems' },
      {
        id: '3',
        option:
          'Designing waste systems that prioritize resource circulation and minimize waste',
      },
      { id: '4', option: 'Disregarding the impact on waste workers' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to organic waste management?',
    options: [
      { id: '1', option: 'Dumping organic waste in landfills' },
      {
        id: '2',
        option:
          'Promoting the use of chemical-intensive waste treatment processes',
      },
      {
        id: '3',
        option:
          'Implementing composting and anaerobic digestion for organic waste recycling',
      },
      { id: '4', option: 'Ignoring the impact on soil health' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of extended producer responsibility in regenerative waste management?',
    options: [
      {
        id: '1',
        option:
          'Disregarding the responsibility of producers in waste management',
      },
      { id: '2', option: 'Promoting unregulated production and consumption' },
      {
        id: '3',
        option:
          'Holding producers accountable for the entire life cycle of their products, including waste management',
      },
      { id: '4', option: 'Neglecting the impact on human health' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to plastic waste management?',
    options: [
      { id: '1', option: 'Burning plastic waste in open incinerators' },
      {
        id: '2',
        option: 'Promoting the use of non-recyclable plastic materials',
      },
      {
        id: '3',
        option:
          'Implementing plastic recycling programs and encouraging the use of biodegradable alternatives',
      },
      { id: '4', option: 'Ignoring the impact on marine ecosystems' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of waste-to-energy in regenerative waste management?',
    options: [
      {
        id: '1',
        option: 'Disregarding the potential for energy recovery from waste',
      },
      {
        id: '2',
        option: 'Promoting unsustainable energy production from waste',
      },
      {
        id: '3',
        option:
          'Converting waste into usable energy through processes like incineration or anaerobic digestion',
      },
      { id: '4', option: 'Neglecting the impact on air quality' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to hazardous waste management?',
    options: [
      { id: '1', option: 'Dumping hazardous waste in uncontrolled sites' },
      {
        id: '2',
        option: 'Promoting the use of toxic chemicals without proper disposal',
      },
      {
        id: '3',
        option:
          'Implementing safe and environmentally sound practices for handling and treating hazardous waste',
      },
      { id: '4', option: 'Ignoring the impact on worker safety' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of community engagement in regenerative waste management?',
    options: [
      {
        id: '1',
        option: 'Excluding local communities from waste management decisions',
      },
      {
        id: '2',
        option: 'Promoting top-down approaches without community involvement',
      },
      {
        id: '3',
        option:
          'Engaging and involving communities in waste reduction and recycling initiatives',
      },
      { id: '4', option: 'Disregarding the impact on public health' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of waste auditing in regenerative waste management?',
    options: [
      {
        id: '1',
        option: 'Neglecting the importance of waste data and analysis',
      },
      { id: '2', option: 'Promoting wasteful consumption practices' },
      {
        id: '3',
        option:
          'Assessing and analyzing waste generation patterns to identify opportunities for improvement',
      },
      { id: '4', option: 'Ignoring the impact on resource conservation' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'Which of the following is a regenerative approach to construction and demolition waste management?',
    options: [
      {
        id: '1',
        option:
          'Dumping construction waste in landfills without sorting or recycling',
      },
      {
        id: '2',
        option: 'Promoting the use of non-recyclable construction materials',
      },
      {
        id: '3',
        option:
          'Implementing waste management plans that prioritize waste reduction, recycling, and reuse',
      },
      { id: '4', option: 'Ignoring the impact on local biodiversity' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the concept of upcycling in regenerative waste management?',
    options: [
      {
        id: '1',
        option:
          'Discarding waste materials without considering their potential value',
      },
      { id: '2', option: 'Promoting the use of non-recyclable materials' },
      {
        id: '3',
        option:
          'Transforming waste materials into new products of higher value',
      },
      { id: '4', option: 'Disregarding the impact on waste workers' },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
  {
    question:
      'What is the role of education and awareness in regenerative waste management?',
    options: [
      {
        id: '1',
        option:
          'Neglecting the importance of informing the public about waste management practices',
      },
      {
        id: '2',
        option:
          'Promoting misinformation and confusion regarding waste reduction',
      },
      {
        id: '3',
        option:
          'Raising awareness and educating the public about waste reduction, recycling, and sustainable practices',
      },
      {
        id: '4',
        option: 'Ignoring the impact on public perception and behavior',
      },
      { id: '5', option: 'None of the other choices' },
    ],
    correctAnswer: '3',
  },
];
