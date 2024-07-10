import axios from "axios";
export function getAllQuestionsApi(subjectId, topicId, subTopicId) {
	return axios.get("http://localhost:8080/api/v1/question/getAllQuestion", {
		params: {
			subject_id: subjectId,
			topic_id: topicId,
			sub_topic_id: subTopicId,
		},
	});
}
export function getAllSubjectApi() {
	return axios.get("http://localhost:8080/api/v1/subject/getAllSubjects");
}
export function getAllTopicsBySubjectApi(subjectId) {
	return axios.get("http://localhost:8080/api/v1/subject/getAllTopics", {
		params: {
			subject_id: subjectId,
		},
	});
}
export function getAllSubTopicsByTopicApi(topicId) {
	return axios.get("http://localhost:8080/api/v1/topic/getAllSubTopic", {
		params: {
			topic_id: topicId,
		},
	});
}
