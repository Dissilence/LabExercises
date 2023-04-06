const axios = require("axios");
const Minion = require("../models/minionModel");

exports.get = async (req, res) => {
  try {
    const response = await axios.get("https://ffxivcollect.com/api/minions");
    const minions = response.data.map(
      (minion) =>
        new Minion(
          minion.ID,
          minion.Name_en,
          minion.Description_en,
          minion.Icon
        )
    );
    res.status(200).json(minions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
