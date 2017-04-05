var Graph = function (vertices, edgesArray) {
  this.vertices = vertices || {};
  /* Example of a graph containing two vertices, 1 and 2
    {
      1: [Vertex]
    },
    {
      2: [Vertex]
    }
  */
  this.edges = edgesArray || [];
  /*
    [
      [1,2],
      [2,1]
    ]
  */
};

// A vertex is a node in a graph.
Graph.prototype.Vertex = function (id) {
  if (id === null || id === undefined) {
    return "Need an id to create a new vertex."
  }
  this.id = id;
}

// List all vertices in this graph.
Graph.prototype.listVertices = function () {
  return Object.keys(this.vertices);
};

// List all edgess in this graph.
Graph.prototype.listEdges = function () {
  return this.edges;
};

// Add a vertex to a graph.
Graph.prototype.addVertex = function (id) {
  var newVertex = new this.Vertex(id);
  this.vertices[id] = newVertex;
  return +id + " added to vertices.";
};

// Remove a vertex from a graph
Graph.prototype.removeVertex = function (id) {
  if (id in this.vertices) {
    delete this.vertices.id;
    // Loop through edges to remove references to this deleted vertex,
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i][0] === id || this.edges[i][1] === id) {
        this.edges.splice(i, 1);
        i--;
      }
    }
  }
};

// Add an edge between two vertices.
Graph.prototype.addEdge = function (v1, v2) {
  // Confirm that both vertices are present in vertices object.
  if (v1 in this.vertices && v2 in this.vertices) {
    // Confirm that edges don't already exist.
    if (this.edges.indexOf([v1, v2]) === -1 &&
        this.edges.indexOf([v2, v1]) === -1
       ) {
      this.edges.push([v1, v2]);
      this.edges.push([v2, v1]);
      return "Edge added between " + v1 + " and " + v2 + "."
    } else {
      return "One or both edges already exists in this graph."
    } 
  } else {
    return "One or both vertices does not exist in this graph.";
  }
};

// Remove an edge from two vertices.
Graph.prototype.removeEdge = function (v1, v2) {
  // Confirm that both vertices are present in vertices object.
  if (v1 in this.vertices && v2 in this.vertices) {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i][0] === v1 && this.edges[i][1] === v2 || 
          this.edges[i][1] === v2 && this.edges[i][1] === v1 ) {
        this.edges.splice(i, 1);
        i--;
      }
    }
  }
  return this.edges;
};