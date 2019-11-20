var graph = new Graph();
graph.addVertex("bahansen");
graph.addVertex("ejrobins");
graph.addVertex("bmhosang");
graph.addVertex("semuremb");
graph.addVertex("djdibbs");
graph.addVertex("mdmaas");
graph.print(); // 1 -> | 2 -> | 3 -> | 4 -> | 5 -> | 6 ->
graph.addEdge("bahansen", "ejrobins");
graph.addEdge("bahansen", "djdibbs");
graph.addEdge("ejrobins", "bmhosang");
graph.addEdge("ejrobins", "djdibbs");
graph.addEdge("bmhosang", "semuremb");
graph.addEdge("semuremb", "djdibbs");
graph.addEdge("semuremb", "mdmaas");
graph.print(); // "bahansen" -> "ejrobins", "djdibbs" | "ejrobins" -> "bahansen", "bmhosang", "djdibbs" | "bmhosang" -> "ejrobins", "semuremb" | "semuremb" -> "bmhosang", "djdibbs", "mdmaas" | "djdibbs" -> "bahansen", "ejrobins", "semuremb" | "mdmaas" -> "semuremb"

console.log('graph size (number of vertices):', graph.size()); // => 6
console.log('graph relations (number of edges):', graph.relations()); // => 7
graph.traverseDFS("bahansen", function(vertex) { console.log(vertex); }); // => 1 2 3 4 5 6
console.log('---');

graph.traverseBFS("bahansen", function(vertex) { console.log(vertex); }); // => 1 2 5 3 4 6
console.log("---");
graph.traverseDFS("notreal", function(vertex) { console.log(vertex); }); // => 'Vertex not found'
graph.traverseBFS("notreal", function(vertex) { console.log(vertex); }); // => 'Vertex not found'