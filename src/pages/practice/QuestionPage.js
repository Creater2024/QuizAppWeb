import React, { useEffect, useState } from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import Question from "../../components/question/Question";
import NavbarSide from "../../components/navbar/NavbarSide";
import CustomSelect from "../../components/customInput/CustomSelect";
import Grid from "@mui/material/Grid";
export default function QuestionPage() {
  const [subject, setSubject] = useState(null);
  const [topic, setTopic] = useState(null);
  const [subTopic, setSubTopic] = useState(null);
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
  const labelSubject = "Subject";
  const optionListSubject = [
    {
      id: 52,
      name: "Maths",
    },
    {
      id: 102,
      name: "Physics",
    },
    {
      id: 152,
      name: null,
    },
    {
      id: 254,
      name: "",
    },
    {
      id: 303,
      name: "",
    },
    {
      id: 352,
      name: "",
    },
    {
      id: 402,
      name: "daf",
    },
  ];
  const handleSubjectChange = (value) => {
    if (value == null || value == undefined) {
      setSubject(null);
    } else {
      setSubject(value);
    }
    setTopic(null);
    setSubTopic(null);
  };
  const labelTopic = "Topic";
  const optionListTopic = [
    {
      id: 152,
      name: "kinematics",
      subjectId: 102,
    },
  ];
  const handleTopicChange = (value) => {
    if (value == null || value == undefined) {
      setTopic(null);
    } else {
      setTopic(value);
    }
    setSubTopic(null);
  };
  const labelSubTopic = "Sub-Topic";
  const optionListSubTopic = [
    {
      id: 253,
      name: "Newtons laws of motion",
      topicId: 152,
      subjectId: 102,
    },
  ];
  const handleSubTopicChange = (value) => {
    if (value == null || value == undefined) {
      setSubTopic(null);
    } else {
      setSubTopic(value);
    }
  };
  return (
    <div>
      <div className="select-container">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CustomSelect
              label={labelSubject}
              options={optionListSubject}
              onChange={handleSubjectChange}
              selectedOption={subject}
            />
          </Grid>
          <Grid item xs={4}>
            {subject != null && subject != undefined && (
              <CustomSelect
                label={labelTopic}
                options={optionListTopic}
                onChange={handleTopicChange}
                selectedOption={topic}
              />
            )}
          </Grid>
          <Grid item xs={4}>
            {topic != null && topic != undefined && (
              <CustomSelect
                label={labelSubTopic}
                options={optionListSubTopic}
                onChange={handleSubTopicChange}
                selectedOption={subTopic}
              />
            )}
          </Grid>
        </Grid>
      </div>
      <div>
        {questionList.map((question, index) => (
          <Question key={question.id} index={index + 1} question={question} />
        ))}
      </div>
    </div>
  );
}
