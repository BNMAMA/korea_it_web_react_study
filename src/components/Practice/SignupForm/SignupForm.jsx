import { useEffect, useState } from "react";

function SignupForm() {
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	});
	const [error, setError] = useState({});
	const [isDisabled, setIsDisabled] = useState(true);

	const inputOnChangeHandler = (e) => {
		const { name, value } = e.target;

		setFormValues((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const signupClickHandler = () => {
		alert("성공적으로 가입되었습니다.");
	};

	useEffect(() => {
		setIsDisabled(true);
		const newErrors = {};

		if (!formValues.email.includes("@") && formValues.email.length > 0) {
			newErrors.email = "이메일 형식에 맞게 입력해주세요.";
		}
		if (formValues.password.length < 8 && formValues.password.length > 0) {
			newErrors.password = "비밀번호는 8자리 이상이어야 합니다.";
		}

		setError(newErrors);

		if (
			Object.keys(newErrors).length === 0 &&
			formValues.email &&
			formValues.password
		) {
			setIsDisabled(false);
		}
	}, [formValues]);
	return (
		<div>
			<div>
				<input
					type="email"
					name="email"
					placeholder="이메일"
					value={formValues.email}
					onChange={inputOnChangeHandler}
				/>
				{error.email && <p>{error.email}</p>}
			</div>
			<div>
				<input
					type="password"
					name="password"
					placeholder="비밀번호"
					value={formValues.password}
					onChange={inputOnChangeHandler}
				/>
				{error.password && <p>{error.password}</p>}
			</div>
			<button disabled={isDisabled} onClick={signupClickHandler}>
				가입하기
			</button>
		</div>
	);
}

export default SignupForm;

//이메일 인풋에 입력이 될때 유효성 검사 실시
//골뱅이 포함 여부에 따라서 없으면 에러메시지로
//"이메일 형식에 맞게 입력해주세요." 출력
//비밀번호 인풋에 입력이 될때 유효성 검사 실시
//8자리 이상인지 여부에 따라서 안되면 에러메시지로
//"비밀번호는 8자리 이상이어야 합니다." 출력
//에러메시지가 아예 없으면 버튼 활성화 하나라도 있으면 비활
//버튼을 누르면 alert 가입이 되었습니다