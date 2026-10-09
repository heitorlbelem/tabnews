import database from "../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum;");
  console.log(result.rows);
  return response.json({ message: "Olá mundo!" });
}

export default status;
