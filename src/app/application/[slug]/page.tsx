import Header from "@/Components/Header";
import Image from "next/image";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import gbl from '@/app/Global.module.css';

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
  <main>
  <center>

  <Image src={data.thumbnail} alt={data.name} width={150} height={150} quality={75} loading="lazy"/>
  <Typography variant="h1">{data.name}</Typography>
  <Typography variant="subtitle1">by- {data.author}</Typography>
  <Typography>{data.description}</Typography>
				<a
					href={data.download_link}
					// to={`/download/${props.title}`}
					// state={{ title: props.title, url: props.url, fromCard: true }}
					className={gbl.btn}
				>
					Download
				</a>

  </center>
  </main>
  </>
}
