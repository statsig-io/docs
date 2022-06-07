import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import('rapidoc');

export default function Rapidoc(props) {
  let {apiUrl} = props

	const rapidoc = <rapi-doc 
											header-color={"#004876"}
											nav-text-color={"#004876"}
											primary-color={"#ff9e1b"}
											nav-bg-color={"#ffffff"}
											id='rapidoc'
											allow-search={false}
											render-style={"read"}
											allow-try={true}
											show-header={false}
											allow-authentication={true}
											regular-font="Roboto"
											use-path-in-nav-bar={true}
											style={{height: "80vh", width: "100%"}}
											mono-font="monospace" theme={"light"}/>

	useEffect(() => {
		setTimeout(() => {
			var data = require('../../../docs/console-api/openapi/main.json');

			const el = document.getElementById("rapidoc");
			el.loadSpec(data)
		}, 30)
	}, []);

  if (ExecutionEnvironment.canUseDOM) {
    /// Make sure we only import the rapidoc web component in case we are on the client side
    return (
			rapidoc
		)
	}
  return <div/>

}
