const url = "https://chimpu.xyz/api/post.php";
const phoneNumber = "9876898790";

const formData = new FormData();
formData.append("phone", phoneNumber);

fetch(url, {
  method: "POST",
  body: formData,
})
  .then((response) => {
    if (response.ok) {
      console.log("Response Headers:", response.headers);

      return response.text();
    } else {
      console.error(
        "Failed to make the POST request:",
        response.status,
        response.statusText
      );
    }
  })
  .then((responseText) => {
    console.log("\nResponse Content:", responseText);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
