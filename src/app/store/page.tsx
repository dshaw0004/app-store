"use client";
import Card from "@/Components/Card";
import Header from "@/Components/Header";
import { useEffect, useState } from "react";
import stl from "./index.module.css";
import Link from "next/link";
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';


interface data {
	appURL: string;
	description: string;
	name: string;
}
enum AppPlatform {
    'ANDROID',
    'WINDOWS',
    'LINUX'
}
type AppInfoType = {
    platform: AppPlatform;
    download_link: string;
    description: string;
    thumbnail: string;
    version: string;
    app_id: string;
    author: string;
    name: string;
}

export default function Store() {
  const [apps, setApps] = useState<Array<AppInfoType>>([]);
  useEffect(()=> {
      (async function(){
          const res = await fetch("https://dshaw0004.pythonanywhere.com/apps");
          if(!res.ok){
              throw "can not get response from the server";
          }
          const data = await res.json();
          setApps(data as AppInfoType[]);
      })()
  }, [])
	return (
		<>
			<Header />
			<main>
				<div className={stl.cardContainer}>
				{apps.length > 0 ? apps.map(app => (
					<Card
						key={app.app_id}
						app_id={app.app_id}
						title={app.name}
						url={app.download_link}
						platform={app.platform}
						image={app.thumbnail}
					/>
				)): (
				<>
				{Array(12).fill(1).map((_, index) => (
					<Stack key={index} spacing={0.5}>
						<Skeleton variant="rectangular" animation="wave" width={250} height={230} />
						<Skeleton variant="rounded" animation="wave" width={250} height={65} />
					</Stack>
				))}
				</>
				)}
				</div>
			</main>
		</>
	);
}

/*
					<Card
						title="Imagic"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Imagic%20(v1.2.0stable).exe?alt=media&token=9c52ac6d-b988-4588-b242-25ec289b06c4"
						platform="DESKTOP"
						image={'/imagic.png'}
					/>
					<Card
						title="codeQRcreator"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/codeQRcreator_v1.0.0.exe?alt=media&token=97b0c2b1-1d2b-41b9-9130-6a57f880b39f"
						platform="DESKTOP"
						image={'/codeQRcreator.png'}
					/>
					<Card
						title="Dictionary"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Dictionary.apk?alt=media&token=624c3f9e-e32d-422f-a1af-cdc0f028a38f"
						platform="ANDROID"
					/>

					<Card
						title="Flip a Coin"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Flip%20a%20coin.apk?alt=media&token=d7c5dae1-1092-4e87-baa2-8187368b4a90"
						platform="ANDROID"
					/>
					<Card
						title="Scanner"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/Scanner.apk?alt=media&token=3c6d8961-ed02-464f-87aa-af02d6a67a58"
						platform="ANDROID"
					/>
					<Card
						title="PySpammer"
						url="https://firebasestorage.googleapis.com/v0/b/pythons-apps-by-ds.appspot.com/o/PySpammer.exe?alt=media&token=db15f8c7-4099-4838-9c3f-de8984249d50"
						platform="DESKTOP"
					/>
 *
 */
