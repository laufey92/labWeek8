/*// app.js
const greeting = require('./src/greeting');
console.log(greeting('Totoro'));
*/

const app = require("./src.api");
const PORT = process.evn.PORT || 3000;
app.listen(PORT, () => {
	console.log("Server running on port" + PORT);
});