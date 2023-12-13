import React from "react";
import Button from "../Button";
import { footerData } from "@/lib/data";
type Props = {};

const Socialicons = (props: Props) => {
	return (
		<div className="flex gap-2">
			{footerData.socialmedia.map((item) => {
				const Icon = item.icon;
				return (
					<Button key={item.id} variant="round">
						<Icon className={"h-4"} />
					</Button>
				);
			})}
		</div>
	);
};

export default Socialicons;