// import workflowFile from "./data/epigenomics-workflow.js";
// import workflowFile from "./data/cycles_50.js";
import workflowFile from "./data/epigenomics_workflow.js";
import go from "gojs";
import colorTasks from "./colours";

// TODO: 1) Make a colours.js or json that includes
//          the colours of the nodes based on their names.
//       2) Sort the Tasks with a Topological order.
// console.log(wf.workflow.jobs);

const getIDFromName = (str) => {
  const seperatedStr = str.split("_");
  // This converts the str in int. e.x:  + '0001' --> 1
  return +seperatedStr[seperatedStr.length - 1];
};

let workflowType = workflowFile.name.split("-")[0].toLowerCase();
let tasks = [];
let edges = [];

workflowFile.workflow.jobs.forEach(task => {
  const id = getIDFromName(task.name);
  task.children.forEach((childName) => {
    let targetID = getIDFromName(childName);
    edges.push({ from: id, to: targetID });
  });

  let fill = task.children.length === 0 ? "lightgreen" : "lightgray";
  fill = task.parents.length === 0 ? "red" : fill;
  tasks.push({
    key: id,
    name: task.name,
    fill: fill,
    rank: 0,
    start: 0,
    end: 0,
    machine_id: 0,
    // figure: 'RoundedRectangle',
    // size: new go.Size(15, 15)
  });
  tasks = colorTasks(tasks, workflowType);
});

// For conciseness. See the "Building Parts" intro page for more
const $ = go.GraphObject.make;

let diagram = $(go.Diagram, "myDiagramDiv", {
  initialAutoScale: go.Diagram.UniformToFill,
  layout: $(go.LayeredDigraphLayout),
});

let layout = diagram.layout;
layout.layerSpacing = 200;
layout.columnSpacing = 2;
layout.direction = 90;
layout.packOption = 7;

function showClickedNode(e, obj) {
  console.log(obj.part, e);

  // Update the id
  document.getElementById("task-name").innerHTML = obj.part.lb.name;
  // Update the rank
  document.getElementById("task-rank").innerHTML = obj.part.lb.rank;
  // Update the start
  document.getElementById("task-start").innerHTML = obj.part.lb.start;
  // Update the end
  document.getElementById("task-end").innerHTML = obj.part.lb.end;
  // Update the end
  document.getElementById("task-machine-id").innerHTML = obj.part.lb.machine_id;
}

let nodeSchemaBasic = $(
  go.Node,
  "Spot",
  { click: showClickedNode },
  {
    locationSpot: go.Spot.Center,
  },
  $(
    go.Shape,
    "RoundedRectangle",
    {
      fill: "lightgray",
      stroke: null,
      desiredSize: new go.Size(40, 40),
    },
    new go.Binding("fill", "fill")
  ),
  $(
    go.TextBlock,
    { margin: 3 }, // some room around the text
    // bind TextBlock.text to Node.data.key
    new go.Binding("text", "key")
  )
);

// the node template describes how each Node should be constructed
diagram.nodeTemplate = nodeSchemaBasic;

// the Model holds only the essential information describing the diagram
diagram.model = new go.GraphLinksModel(tasks, edges);

// enable Ctrl-Z to undo and Ctrl-Y to redo
diagram.undoManager.isEnabled = true;