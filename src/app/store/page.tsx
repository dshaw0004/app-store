"use client";
import Card from "@/Components/Card";
import Header from "@/Components/Header";
import { useEffect, useState } from "react";
import stl from "./index.module.css";

interface data {
	appURL: string;
	description: string;
	name: string;
}

export default function Store() {
	return (
		<>
			<Header />
			<main>
				<div className={stl.cardContainer}>
					<Card
						title="Imagic"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Imagic%20(v1.2.0stable).exe?alt=media&token=9c52ac6d-b988-4588-b242-25ec289b06c4"
						platfrom="DESKTOP"
					/>
					<Card
						title="codeQRcreator"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/codeQRcreator_v1.0.0.exe?alt=media&token=97b0c2b1-1d2b-41b9-9130-6a57f880b39f"
						platfrom="DESKTOP"
					/>
					<Card
						title="Dictionary"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Dictionary.apk?alt=media&token=624c3f9e-e32d-422f-a1af-cdc0f028a38f"
						platfrom="ANDROID"
					/>

					<Card
						title="Flip a Coin"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Flip%20a%20coin.apk?alt=media&token=d7c5dae1-1092-4e87-baa2-8187368b4a90"
						platfrom="ANDROID"
					/>
					<Card
						title="Scanner"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Scanner.apk?alt=media&token=3c6d8961-ed02-464f-87aa-af02d6a67a58"
						platfrom="ANDROID"
					/>
					<Card
						title="PySpammer"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/PySpammer.exe?alt=media&token=db15f8c7-4099-4838-9c3f-de8984249d50"
						platfrom="DESKTOP"
					/>
				</div>
			</main>
		</>
	);
}
