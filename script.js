function printText(text) {
    var printedText = document.getElementById("printed-text");
    async function query(data) {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/bigscience/bloom-560m",
        {
          headers: { Authorization: "Bearer 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" },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      return result;
    }
    
    query({"inputs": text.replace(/\s+$/, "")}).then((response) => {
      printedText.innerText =JSON.stringify(response[0].generated_text.replace(/(\\{1,2}(.|\n)|\n)/g, ""));
    });
    
    
  }
  