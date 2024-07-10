import React, {useEffect, useState} from "react";
import NavbarTop from "../../components/navbar/NavbarTop";
import Question from "../../components/question/Question";
import NavbarSide from "../../components/navbar/NavbarSide";
import {
	getAllQuestionsApi,
	getAllSubjectApi,
	getAllSubTopicsByTopicApi,
	getAllTopicsBySubjectApi,
} from "../../utils/apihelper";
import CustomSelect from "../../components/customInput/CustomSelect";
import Grid from "@mui/material/Grid";
export default function QuestionPage() {
	const [subject, setSubject] = useState(null);
	const [topic, setTopic] = useState(null);
	const [subTopic, setSubTopic] = useState(null);
	const [subjectList, setSubjectList] = useState([]);
	const [topicList, setTopicList] = useState([]);
	const [subTopicList, setSubTopicList] = useState([]);
	const [questionList, setQuestionList] = useState([]);
	const getAllQuestions = (subjectId, topicId, subTopicId) => {
		getAllQuestionsApi(subjectId, topicId, subTopicId)
			.then((response) => {
				setQuestionList(response.data.data);
				// console.log("response received :", response.data.data);
			})
			.catch((error) => {
				// setError(error.message);
				console.log(error);
			});
	};
	const getAllSubjects = () => {
		getAllSubjectApi()
			.then((res) => {
				setSubjectList(res.data.data);
				// console.log("response received :", res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const getAllTopicsBySubject = (subjectId) => {
		getAllTopicsBySubjectApi(subjectId)
			.then((res) => {
				setTopicList(res.data.data);
				// console.log("response received :", res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const getAllSubTopicsByTopic = (topicId) => {
		getAllSubTopicsByTopicApi(topicId)
			.then((res) => {
				setSubTopicList(res.data.data);
				console.log("response received :", res.data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getAllQuestions();
		getAllSubjects();
	}, []);
	useEffect(() => {
		if (subject !== null && subject !== undefined) {
			getAllTopicsBySubject(subject?.id);
		}
	}, [subject]);
	useEffect(() => {
		if (topic !== null && topic !== undefined) {
			getAllSubTopicsByTopic(topic?.id);
		}
	}, [topic]);
	useEffect(() => {
		getAllQuestions(subject?.id, topic?.id, subTopic?.id);
	}, [subject, topic, subTopic]);
	const labelSubject = "Subject";
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
							options={subjectList}
							onChange={handleSubjectChange}
							selectedOption={subject}
						/>
					</Grid>
					<Grid item xs={4}>
						{subject != null && subject != undefined && (
							<CustomSelect
								label={labelTopic}
								options={topicList}
								onChange={handleTopicChange}
								selectedOption={topic}
							/>
						)}
					</Grid>
					<Grid item xs={4}>
						{topic != null && topic != undefined && (
							<CustomSelect
								label={labelSubTopic}
								options={subTopicList}
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
