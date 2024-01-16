"use client";
import Header from "@/Components/Header";
import {
	TextField,
	Select,
	MenuItem,
	Button,
	TextareaAutosize,
} from "@mui/material";
import { FormEvent, useState, useRef } from "react";

const styles: { [key: string]: any } = {
	form: {
		width: "clamp(200px, 80%, 800px)",
		marginInline: "auto",
		border: "1px solid black",
		display: "flex",
		flexDirection: "column",
		gap: "0.5em",
		padding: "0.5em 1em",
	},
	submitBTN: {
		border: "0.1px solid currentColor",
		padding: "0.5ch 1.5ch",
		borderRadius: "1ch",
		backgroundColor: "#12ef78",
		color: "#125945",
		":hover": {
			backgroundColor: "red",
		},
	},
};

export default function AddNew() {
	const [formDisabled, setDisableForm] = useState(false);
	const refName = useRef<HTMLInputElement>(null);
	const refDesc = useRef<HTMLTextAreaElement>(null);
	const refAppLink = useRef<HTMLInputElement>(null);
	const refThumbLink = useRef<HTMLInputElement>(null);
	const refPlatform = useRef<HTMLInputElement>(null);
	const refVersion = useRef<HTMLInputElement>(null);

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setDisableForm(true);
		const inputData = {
			name: refName.current?.value,
			description: refDesc.current?.value,
			appLink: refAppLink.current?.value,
			platform: refPlatform.current?.value,
			thumbnail: refThumbLink.current?.value,
			version: refVersion.current?.value,
		};
		// fetch("https://dshaw0004.onrender.com/appstore/appsinfo/add", {
		// 	method: "POST",
		// 	headers: {
		// 		"Content-Type": "application/json",
		// 	},
		// 	body: JSON.stringify(inputData),
		// }).then((res) => {
		// 	if (res.status === 200) alert("successfully added");
		// 	else
		// 		alert(`something went wrong. we got ${res.status} status code back.`);
		// 	console.log(e);
		console.log(process.env.NEXT_PUBLIC_KEY);
		// });
		console.log(inputData);
		setDisableForm(false);
	}

	return (
		<>
			<Header />
			<main>
				<form
					style={styles.form}
					onSubmit={(e: FormEvent<HTMLFormElement>) => {
						handleSubmit(e);
					}}
				>
					<div>
						<label htmlFor="appname">App Name:</label>
						{/* <input type="text" name="appname" id="appname" ref={refName} /> */}

						<TextField
							label="App Name"
							variant="outlined"
							type="text"
							name="appname"
							id="appname"
							inputRef={refName}
						/>
					</div>
					<div>
						<label htmlFor="appdesc">App Description:</label>

						<TextareaAutosize
							name="appdesc"
							id="appdesc"
							ref={refDesc}
						></TextareaAutosize>
					</div>
					<div>
						<label htmlFor="applink">Link:</label>
						<input type="url" name="applink" id="applink" ref={refAppLink} />
					</div>
					<div>
						<label htmlFor="appthumbnail">Thumbnail:</label>
						<input
							type="url"
							name="appthumbnail"
							ref={refThumbLink}
							id="appthumbnail"
						/>
					</div>
					<div>
						<label htmlFor="appplatform">Platform:</label>

						{/* <select name="appplatform" id="appplatform" ref={refPlatform}>
							<option value="ANDROID">Android</option>
							<option value="WINDOWS">Windows</option>
						</select> */}
						<Select
							labelId="appplatform"
							id="appplatform"
							value={"ANDROID"}
							label="appplatform"
							inputRef={refPlatform}
						>
							<MenuItem value={"ANDROID"}>Android</MenuItem>
							<MenuItem value={"WINDOWS"}>Windows</MenuItem>
						</Select>
					</div>
					<div>
						<label htmlFor="appversion">Version:</label>
						<input
							type="text"
							name="appversion"
							id="appversion"
							ref={refVersion}
						/>
					</div>
					<div>
						{/* <input
							type="submit"
							value={"submit"}
							style={styles.submitBTN}
							disabled={formDisabled}
						/> */}

						<Button
							variant="contained"
							type="submit"
							disabled={formDisabled}
							style={styles.submitBTN}
						>
							Submit
						</Button>
					</div>
				</form>
			</main>
		</>
	);
}
