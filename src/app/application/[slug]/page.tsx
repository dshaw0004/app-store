import Header from "@/Components/Header";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import gbl from '@/app/Global.module.css';
import DownloadIcon from "@/Components/Icons/DownloadIcon";

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

export default async function Page({params, }:{params: Promise<{slug: string}>}){
  const slug = (await params).slug
  const res = await fetch(`https://dshaw0004.pythonanywhere.com/app/${slug}`);
  if(!res.ok){
    return <h1>App not found.</h1>
  }
  const data: AppInfoType = await res.json() as AppInfoType;
  return <>
    <Header/>
    <main style={{maxWidth: "80ch", margin: "auto"}}>

      <div className="bg-gray-100 p-4 rounded-lg">
        <center>
          <Image src={data.thumbnail || '/appbucket.png'} alt={data.name} width={200} height={200} quality={75} loading="lazy"/>
        </center>
      </div>
      <Typography className="text-4xl" variant="h1">{data.name}</Typography>
      <div className="p-2 border-box my-4" aria-label="about the application">
        <Typography variant='h2' className="underline text-xl font-black">About:</Typography>
        <Typography>{data.description}</Typography>
        <Typography variant="subtitle1" className="font-bold">Made by- {data.author}</Typography>
        <Typography variant="subtitle1" className="font-bold">version- {data.version}</Typography>
      </div>
				<a
					href={data.download_link}
					// to={`/download/${props.title}`}
					// state={{ title: props.title, url: props.url, fromCard: true }}
					className="p-2 bg-blue-900 border border-teal-400 w-fit text-white text-2xl font-bold rounded-xl flex flex-row justify-around items-center gap-2"
				>
					<span>Download</span> 
          <DownloadIcon color="#ffffff"/>
				</a>

  </main>
  </>
}
