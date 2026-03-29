import { useEffect, useState } from "react";

const Data = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const token = localStorage.getItem("token");

			if (!token) {
				setError("Missing auth token");
				setLoading(false);
				return;
			}

			try {
				const response = await fetch("https://api.example.com/data", {
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`,
						"Content-Type": "application/json",
					},
				});

				if (!response.ok) {
					throw new Error(`API request failed: ${response.status}`);
				}

				const result = await response.json();
				setData(result);
			} catch (err) {
				setError(err.message || "Something went wrong");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export default Data;