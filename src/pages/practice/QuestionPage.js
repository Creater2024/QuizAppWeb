import React from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import Question from "../../components/question/Question";
import NavbarSide from "../../components/navbar/NavbarSide";
export default function QuestionPage() {
  const questionList = [
    {
      id: 702,
      description:
        " Select the option that is related to the fifth number in the same way as the second number is related to the first number and the fourth number is related to the third number. 19:34::5:6::27:?",
      image: null,
      subject: {
        id: 52,
        name: "SSC Maths",
      },
      topic: {
        id: 102,
        name: "Percentage",
        subjectId: 52,
      },
      subTopic: {
        id: 152,
        name: "Calculation",
        topicId: 102,
        subjectId: 52,
      },
      optionsList: [
        {
          id: 52,
          value: "50",
          optionCorrect: false,
        },
        {
          id: 53,
          value: "52",
          optionCorrect: false,
        },
        {
          id: 54,
          value: "63",
          optionCorrect: true,
        },
        {
          id: 54,
          value: "67",
          optionCorrect: false,
        },
      ],
      solution: null,
    },
    {
      id: 703,
      description:
        "In a three digit number the digit in the unit's place is twice the digit in the ten's place and 1.5 times the digit in the hundred's place. If the sum of all the three digits of the number is 13,what is the number?",
      image: null,
      subject: {
        id: 52,
        name: "SSC Maths",
      },
      topic: {
        id: 102,
        name: "Percentage",
        subjectId: 52,
      },
      subTopic: {
        id: 152,
        name: "Calculation",
        topicId: 102,
        subjectId: 52,
      },
      optionsList: [
        {
          id: 52,
          value: "356",
          optionCorrect: false,
        },
        {
          id: 53,
          value: "456",
          optionCorrect: false,
        },
        {
          id: 54,
          value: "436",
          optionCorrect: true,
        },
        {
          id: 55,
          value: "626",
          optionCorrect: false,
        },
      ],
      solution: null,
    },
  ];
  return (
    <div>
      {questionList.map((question, index) => (
        <Question key={question.id} index={index + 1} question={question} />
      ))}
    </div>
  );
}
