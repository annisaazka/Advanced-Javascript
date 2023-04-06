const urls = [
    "https://www.boredapi.com/api/activity",
    "https://www.boredapis.com/api/activity",
    "https://www.boredapis2.com/api/activity",
];
  
Promise.all(
    urls.map((url) =>
      fetch(url)
        .then((response) => response.json())
        .then((data) => ({ data, url }))
        .catch(() => ({ error: true, url }))
    )
)

.then((results) => {
    const validResult = results.find((result) => !result.error);
    console.log(validResult);
})

.catch((error) => console.log(error));