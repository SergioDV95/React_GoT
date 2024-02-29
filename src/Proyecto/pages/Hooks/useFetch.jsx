import { useState, useEffect } from "react";

const useFetch = (URL, method) => {
	const [datos, setDatos] = useState(null);
	const options = {
		method: method,
		url: URL,
	};
	useEffect(() => {
		fetch(options.url)
			.then(res => res.json())
			.then(res => setDatos(res));
	}, [options.url]);

	try {
		return datos;
	} catch (e) {
		console.log(e);
	}
};

export default useFetch;
