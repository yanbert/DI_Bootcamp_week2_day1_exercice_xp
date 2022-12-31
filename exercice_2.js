/**
 * Dans l'exercice, Nous allons manipuler le element du tableau
 * modifier,supprimer,ajouter et lister selons les positions
 */

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

console.log(myWatchedSeries)

let myWatchedSeriesLength = myWatchedSeries.length

let myWatchedSeriesSentence = "I watched 24 hours clock";

console.log(myWatchedSeriesSentence + " , " + myWatchedSeries[0] + " , " + myWatchedSeries[1] + " and " + myWatchedSeries[1])

myWatchedSeries.splice(2, 2, "friend")

console.log(myWatchedSeries)

myWatchedSeries.push("ecole des champions")

console.log(myWatchedSeries)

myWatchedSeries.unshift("il etait une fois en chine")

console.log(myWatchedSeries)

myWatchedSeries.splice(1, 2)

console.log(myWatchedSeries)

console.log("money heist".charAt(2))

console.log(myWatchedSeries)