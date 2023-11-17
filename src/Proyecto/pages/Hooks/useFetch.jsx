import { useState, useEffect } from "react";

const useFetch = (URL) => {
	const [datos, setDatos] = useState(null);
	const options = {
		method: "GET",
		url: URL,
	};
	useEffect(() => {
		fetch(options.url)
			.then(text => text.json())
			.then(resp => setDatos(resp));
	}, [options.url]);

	try {
		return datos;
	} catch (e) {
		console.log(e);
	}
};

export default useFetch;
