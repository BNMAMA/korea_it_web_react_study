import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Main from "../components/Main/Main";

function Index() {
	const [todoList, setTodoList] = useState(() => {
		const localStorageTodoList = localStorage.getItem("todoList");
		return localStorageTodoList ? JSON.parse(localStorageTodoList) : [];
	});
	const [filter, setFilter] = useState("all");
	const [searchText, setSearchText] = useState("");

	// useEffect(() => {
	// 	let localStorageTodoList = localStorage.getItem("todoList");
	// 	if (!localStorageTodoList) {
	// 		localStorage.setItem("todoList", JSON.stringify([]));
	// 		localStorageTodoList = [];
	// 		setTodoList(localStorageTodoList);
	// 	} else {
	// 		setTodoList(JSON.parse(localStorageTodoList));
	// 	}
	// }, []);

	useEffect(() => {
		let localStorageTodoList = localStorage.getItem("todoList");
		const todoListJson = JSON.stringify(todoList);
		if (localStorageTodoList !== todoListJson) {
			localStorage.setItem("todoList", todoListJson);
		}
	}, [todoList]);

	const filterTodoList = todoList
		.filter((todo) => {
			if (filter === "all") {
				return true;
			} else if (filter === "complete") {
				return todo.isComplete;
			} else if (filter === "incomplete") {
				return !todo.isComplete;
			}
		})
		.filter((todo) => {
			if (searchText.trim().length === 0) {
				return true;
			}
			return todo.content.includes(searchText);
		});
	return (
		<Layout
			filter={filter}
			setFilter={setFilter}
			setSearchText={setSearchText}
		>
			<Main todoList={filterTodoList} setTodoList={setTodoList} />
		</Layout>
	);
}

export default Index;