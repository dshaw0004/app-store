import gbl from "@/app/Global.module.css";
import stl from "./index.module.css";
import {redirect} from 'next/navigation';

import Image from "next/image";
enum AppPlatform {
    'ANDROID',
    'WINDOWS',
    'LINUX'
}

interface props {
  app_id: string;
	title: string;
	url: string;
	platform: AppPlatform;
	image?: string;
}

export default function Card({ app_id, title, url, platform, image }: props) {
	return (
		<div className={stl.card}>
			<div className={stl.floatingOption}>
				<strong className="text-xs">{platform}</strong>
			</div>
			<div className={stl.cardUpper}>
				<Image
					src={!!image ? image : "/appbucket.png"}
					alt={`${title} app logo`}
					width={100}
					height={100}

				/>
			</div>
			<div className={stl.cardBottom}>
				<h4 className="">{title}</h4>
				<a
					href={`/application/${app_id}`}
					// to={`/download/${props.title}`}
					// state={{ title: props.title, url: props.url, fromCard: true }}
					className={gbl.btn}
				>
					Download
				</a>
			</div>
		</div>
	);
}
