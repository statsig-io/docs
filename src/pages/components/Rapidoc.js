import React from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import('rapidoc');

export default function Rapidoc(props) {
		let {apiUrl} = props
		if (ExecutionEnvironment.canUseDOM) {
				/// Make sure we only import the rapidoc web component in case we are on the client side
				return (
					<rapi-doc 
							header-color={"#004876"}
							nav-text-color={"#004876"}
							primary-color={"#ff9e1b"}
							nav-bg-color={"#ffffff"}
							id="thedoc"
							allow-search={false}
							render-style={"read"}
							allow-try={true}
							show-header={false}
							allow-authentication={true}
							regular-font="Roboto"
							use-path-in-nav-bar={true}
							style={{height: "80vh", width: "100%"}}
							mono-font="monospace" theme={"light"}
							spec-url={apiUrl}/>
				)}
		return <div/>
}
