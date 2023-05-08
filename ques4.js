let countries = ["India","Australia","Switzerland","Malaysia","Neitherland","Ireland","England","America","Srilanka","Nepal","Bhutan"];
countries_with_and = [];
for(const country of countries) {
    if (country.includes("and")){
        countries_with_and.push(country);
    }
}
if (countries_with_and.length>0) {
    console.log(countries_with_and);
}else{
    console.log("All these countries are without and");
}
