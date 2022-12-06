const getContent = async() => {

	const response = await fetch(`https://www.terriblytinytales.com/test.txt`,{
      method: "GET",
			headers: {
        "Content-Type": "application/json",
			},
	});
	const data = await response.text();
	return data;
};

export { getContent };