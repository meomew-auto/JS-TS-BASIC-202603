//import JSON FILES
//with {type: 'json'} - import attribute -> noi cho runtime biet day la fiel JSON , hay parse
///
//{
// ""
// }
// -> 1 object binh thuong
import customers from "./customers.json" with { type: "json" };
import customersDev from "./customers-dev.json" with { type: "json" };

console.log(customers.minimal);
