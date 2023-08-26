const express = require("express");
const app = express();
const phonesData = require("../data/phones.json");

const PORT = process.env.PORT || 3001;

app.get("/phones", (req, res) => {
  res.json(phonesData);
});

// Route to show phone details by ID
app.get("/phones/:id", (req, res) => {
  const phoneId = parseInt(req.params.id);
  const phone = phonesData.find((phone) => phone.id === phoneId);

  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ message: "Phone not found" });
  }
});

app.listen(PORT, () => {
  console.log(`API server is running on port ${PORT}`);
});
