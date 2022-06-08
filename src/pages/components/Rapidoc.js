import React, { useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import('rapidoc');

export default function Rapidoc(props) {
  let {id, apiFile} = props

	useEffect(() => {
		setTimeout(() => {
			var data = require('../../../docs/console-api/openapi/'.concat(apiFile));

			const el = document.getElementById(id);
			el.loadSpec(data)
		}, 30)
	}, []);

  if (ExecutionEnvironment.canUseDOM) {
    /// Make sure we only import the rapidoc web component in case we are on the client side
    return (
			<rapi-doc 
				id={id}
				style={{"height": "120vh"}}
				allow-search={false}
				update-route={false}
				render-style="view" // Controls how to api gets rendered
				layout='column'
				allow-try={true} // Enable ability for users to run commands
				show-header={false} // Disable user changing api spec file
				allow-authentication={true} // Enable user passing STATSIG-API-KEY at top of file
				use-path-in-nav-bar={false} // Disable using paths in side bar
				show-method-in-nav-bar='as-colored-block' // Enables small tags in nav bar
			/>
		)
	}
  return <div/>

}
