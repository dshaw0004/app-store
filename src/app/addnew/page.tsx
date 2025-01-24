"use client";
import Header from "@/Components/Header";
import DialogPopUp from "@/Components/DialogPopUp";
import {
        TextField,
        Select,
        MenuItem,
        Button,
        TextareaAutosize,
        Input
} from "@mui/material";
import { FormEvent, useState, useRef } from "react";
import './style.css';

const styles: { [key: string]: any } = {

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

// TODO: clear the form after submit

export default function AddNew() {
        const [formDisabled, setDisableForm] = useState(false);
        const [isPopUpOpen, setIsPopUpOpen] = useState<boolean>(false);
        const [message, setMessage] = useState<string>("");
        const refName = useRef<HTMLInputElement>(null);
        const refDesc = useRef<HTMLTextAreaElement>(null);
        const refAppLink = useRef<HTMLInputElement>(null);
        const refThumbLink = useRef<HTMLInputElement>(null);
        const refPlatform = useRef<HTMLInputElement>(null);
        const refVersion = useRef<HTMLInputElement>(null);


        function handleSubmit() {
                setDisableForm(true);
                setMessage("")
                const inputData = {
                        name: refName.current?.value,
                        description: refDesc.current?.value,
                        appLink: refAppLink.current?.value,
                        platform: refPlatform.current?.value,
                        thumbnail: refThumbLink.current?.value,
                        version: refVersion.current?.value,
                };
                console.log(inputData);
                fetch("https://dshaw0004.onrender.com/addnewapp", {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify(inputData),
                }).then((res) => {
                        if (res.ok) setMessage(prev => `${inputData.name} is successfully added.`);
                        else setMessage(prev => `something went wrong. we got ${res.status} status code back.`);
                        // console.log(e);
                        setIsPopUpOpen(true);
                });

                setDisableForm(false);
        }

        return (
                <>
                <Header />
                <main>
                        <h1>Add your app</h1>
                        <DialogPopUp title={'Add new app'} dialogBody={message} open={isPopUpOpen} setOpen={setIsPopUpOpen} />
                        <form
                        onSubmit={(e: FormEvent<HTMLFormElement>) => {
                                e.preventDefault();
                                handleSubmit();
                        }}
                        >
                                <div>
                                        <label htmlFor="appname">Name:</label>
                                        <input
                                                placeholder="App Name"
                                                type="text"
                                                name="appname"
                                                id="appname"
                                                ref={refName}
                                                className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                </div>
                                <div>
                                        <label htmlFor="appdesc">Description:</label>

                                        <TextareaAutosize
                                        name="appdesc"
                                        id="appdesc"
                                        ref={refDesc}
                                        maxRows={4}
                                        minRows={4}
                                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        >
                                        </TextareaAutosize>
                                </div>
                                <div>
                                        <label htmlFor="applink">Link:</label>
                                        <input type="url" name="applink" id="applink" ref={refAppLink} className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                </div>
                                <div>
                                        <label htmlFor="appthumbnail">Thumbnail:</label>
                                        <input
                                        type="url"
                                        name="appthumbnail"
                                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        ref={refThumbLink}
                                        id="appthumbnail"
                                        />
                                </div>
                                <div>
                                        <label htmlFor="appplatform">Platform:</label>
                                        <Select
                                        labelId="appplatform"
                                        id="appplatform"
                                        value={"ANDROID"}
                                        label="appplatform"
                                        inputRef={refPlatform}
                                        >
                                        <MenuItem value={"ANDROID"}>Android</MenuItem>
                                        <MenuItem value={"LINUX"}>Linux</MenuItem>
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
                                        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        />
                                </div>
                                <div>
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
