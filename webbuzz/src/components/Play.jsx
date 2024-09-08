// src/Trivia.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const cricketHistoryQuestions = [
    {
      question: "Who won the first-ever Cricket World Cup in 1975?",
      options: ["Australia", "England", "West Indies", "India"],
      answer: "West Indies"
    },
    {
      question: "In which year did Sachin Tendulkar make his Test debut?",
      options: ["1988", "1990", "1992", "1994"],
      answer: "1988"
    },
    {
      question: "Which team won the 1983 Cricket World Cup?",
      options: ["West Indies", "Australia", "India", "England"],
      answer: "India"
    },
    {
      question: "Who was the captain of the Australian cricket team during the 2003 Cricket World Cup?",
      options: ["Ricky Ponting", "Steve Waugh", "Michael Clarke", "Shane Warne"],
      answer: "Ricky Ponting"
    },
    {
      question: "Which cricketer is known for the famous 'Bodyline' series?",
      options: ["Don Bradman", "Douglas Jardine", "Jack Hobbs", "Bill Woodfull"],
      answer: "Douglas Jardine"
    },
    {
      question: "What was the venue of the first-ever One Day International match?",
      options: ["Melbourne Cricket Ground", "The Oval", "Lord’s", "Eden Gardens"],
      answer: "Lord’s"
    },
    {
      question: "Who was the first cricketer to score a double century in ODIs?",
      options: ["Sachin Tendulkar", "Virender Sehwag", "Chris Gayle", "Ricky Ponting"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Who holds the record for the most Test runs in a calendar year?",
      options: ["Steve Smith", "Virat Kohli", "Sachin Tendulkar", "Kane Williamson"],
      answer: "Virat Kohli"
    },
    {
      question: "Which team won the first-ever T20 World Cup in 2007?",
      options: ["India", "Pakistan", "Australia", "England"],
      answer: "India"
    },
    {
      question: "Who was the captain of the West Indies team that won the 1975 World Cup?",
      options: ["Clive Lloyd", "Viv Richards", "Gary Sobers", "Frank Worrell"],
      answer: "Clive Lloyd"
    }
  ];
const cricketPlayersQuestions = [
    {
      question: "Who is the highest run-scorer in Test cricket?",
      options: ["Sachin Tendulkar", "Brian Lara", "Ricky Ponting", "Jacques Kallis"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Which cricketer is known as 'The Little Master'?",
      options: ["Sachin Tendulkar", "Sunil Gavaskar", "Virat Kohli", "Rahul Dravid"],
      answer: "Sunil Gavaskar"
    },
    {
      question: "Who holds the record for the most ODI centuries?",
      options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "AB de Villiers"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "Who is known as 'Captain Cool'?",
      options: ["MS Dhoni", "Virat Kohli", "Ricky Ponting", "Steve Waugh"],
      answer: "MS Dhoni"
    },
    {
      question: "Which cricketer has the nickname 'The Universe Boss'?",
      options: ["Chris Gayle", "AB de Villiers", "Kieron Pollard", "Andre Russell"],
      answer: "Chris Gayle"
    },
    {
      question: "Who is the leading wicket-taker in T20 Internationals?",
      options: ["Yuzvendra Chahal", "Rashid Khan", "Sunil Narine", "Imran Tahir"],
      answer: "Rashid Khan"
    },
    {
      question: "Which player holds the record for the fastest century in ODIs?",
      options: ["AB de Villiers", "Virat Kohli", "Chris Gayle", "Ricky Ponting"],
      answer: "AB de Villiers"
    },
    {
      question: "Who is known for the 'Helicopter Shot'?",
      options: ["MS Dhoni", "Ricky Ponting", "Yuvraj Singh", "Adam Gilchrist"],
      answer: "MS Dhoni"
    },
    {
      question: "Who has the record for the most catches in ODIs?",
      options: ["Ricky Ponting", "MS Dhoni", "Sachin Tendulkar", "Kumar Sangakkara"],
      answer: "Kumar Sangakkara"
    },
    {
      question: "Who is the only cricketer to have taken a five-wicket haul in all formats of the game?",
      options: ["Rashid Khan", "Jasprit Bumrah", "Shaun Tait", "Shakib Al Hasan"],
      answer: "Shakib Al Hasan"
    }
  ];
const cricketRulesQuestions = [
    {
      question: "What is the maximum number of overs allowed in a T20 match?",
      options: ["20", "30", "40", "50"],
      answer: "20"
    },
    {
      question: "How many players are there in a cricket team?",
      options: ["9", "10", "11", "12"],
      answer: "11"
    },
    {
      question: "What is the term used for a bowler who delivers six consecutive legal balls without being scored off?",
      options: ["Maiden Over", "Dot Ball", "Wide Ball", "No Ball"],
      answer: "Maiden Over"
    },
    {
      question: "How many runs are awarded for hitting the ball over the boundary without it touching the ground?",
      options: ["4", "6", "8", "10"],
      answer: "6"
    },
    {
      question: "What is the name of the fielding position directly behind the batsman?",
      options: ["Slip", "Gully", "Wicketkeeper", "Third Man"],
      answer: "Wicketkeeper"
    },
    {
      question: "What is the maximum number of overs a bowler can bowl in an ODI match?",
      options: ["5", "10", "15", "20"],
      answer: "10"
    },
    {
      question: "Which type of delivery is illegal if it is bowled above the batsman’s waist height?",
      options: ["Full Toss", "Short Ball", "Wide", "No Ball"],
      answer: "No Ball"
    },
    {
      question: "How many runs is a batsman awarded if the ball hits the helmet of a batsman while batting?",
      options: ["1", "2", "3", "5"],
      answer: "5"
    },
    {
      question: "In which scenario is a 'Dead Ball' called?",
      options: ["When the ball hits the helmet", "When the bowler oversteps the crease", "When the ball hits the stumps", "When a player is injured"],
      answer: "When a player is injured"
    },
    {
      question: "What is the term for a delivery that is not considered a legitimate delivery?",
      options: ["Wide", "No Ball", "Dead Ball", "Byes"],
      answer: "No Ball"
    }
  ];
const cricketTournamentsQuestions = [
    {
      question: "Which team won the 2021 ICC T20 World Cup?",
      options: ["India", "Australia", "England", "Pakistan"],
      answer: "Australia"
    },
    {
      question: "Which country has hosted the most Cricket World Cups?",
      options: ["India", "Australia", "England", "South Africa"],
      answer: "England"
    },
    {
      question: "Who won the inaugural ICC Champions Trophy in 1998?",
      options: ["Sri Lanka", "India", "Australia", "South Africa"],
      answer: "Sri Lanka"
    },
    {
      question: "Which team won the 2015 ICC Cricket World Cup?",
      options: ["Australia", "New Zealand", "India", "Pakistan"],
      answer: "Australia"
    },
    {
      question: "Which tournament is known as the 'IPL'?",
      options: ["Indian Premier League", "International Premier League", "Indian Practice League", "International Practice League"],
      answer: "Indian Premier League"
    },
    {
      question: "Who won the 2018 ICC Under-19 Cricket World Cup?",
      options: ["India", "Australia", "Pakistan", "South Africa"],
      answer: "India"
    },
    {
      question: "Which team has won the most number of ICC T20 World Cups?",
      options: ["West Indies", "India", "Australia", "England"],
      answer: "West Indies"
    },
    {
      question: "Which country hosted the 2019 ICC Cricket World Cup?",
      options: ["India", "Pakistan", "England", "Australia"],
      answer: "England"
    },
    {
      question: "What is the official name of the tournament known as 'The Ashes'?",
      options: ["England vs Australia", "India vs Pakistan", "West Indies vs Australia", "South Africa vs England"],
      answer: "England vs Australia"
    },
    {
      question: "Which tournament is considered the premier domestic one-day competition in England?",
      options: ["County Championship", "Royal London One-Day Cup", "T20 Blast", "NatWest Trophy"],
      answer: "Royal London One-Day Cup"
    }
  ];
  
  


const PlayTrivia = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [feedback, setFeedback] = useState({});
  const { category } = useParams();
  let questions =[];
  if(category=='cricketHistory'){
    questions = cricketHistoryQuestions
  }
  else if(category=='cricketPlayers'){
    questions=cricketPlayersQuestions
  }else if(category=='cricketRules'){
    questions=cricketRulesQuestions
  }else{
    questions=cricketTournamentsQuestions
  }

  const handleOptionClick = (questionIndex, option) => {
    const correctAnswer = questions[questionIndex].answer;
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: option
    });
    setFeedback({
      ...feedback,
      [questionIndex]: option === correctAnswer ? 'correct' : 'incorrect'
    });
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Cricket Trivia</h1>
      {questions.map((q, index) => (
        <div key={index} className="mb-6">
          <p className="text-xl font-semibold mb-2">{q.question}</p>
          {q.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(index, option)}
              className={`block w-full py-2 px-4 mb-2 text-left rounded ${
                selectedAnswers[index] === option
                  ? feedback[index] === 'correct'
                    ? 'bg-green-500 text-white'
                    : 'bg-red-500 text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default PlayTrivia;
