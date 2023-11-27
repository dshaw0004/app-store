import gbl from "@/app/Global.module.css";
import stl from "./index.module.css";

import Image from "next/image";

interface props {
	title: string;
	url: string;
	platfrom: "ANDROID" | "DESKTOP";
}

export default function Card({ title, url, platfrom }: props) {
	return (
		<div className={stl.card}>
			<div className={stl.floatingOption}>
				<strong className="text-xs">{platfrom}</strong>
			</div>
			<div className={stl.cardUpper}>
				<Image
					src="./next.svg"
					alt={`${title} app logo`}
					width={100}
					height={100}
				/>
			</div>
			<div className={stl.cardBottom}>
				<h4 className="">{title}</h4>
				<a
					href={url}
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
