import workflowFile from "./data/epigenomics-workflow";
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

workflowFile.workflow.jobs.forEach((task) => {
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
    machine_id: 0
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

// the template for each attribute in a node's array of item data
var itemTempl = $(
    go.Panel,
    "Horizontal",
    $(
      go.Shape,
      {
        desiredSize: new go.Size(15, 15),
        strokeJoin: "round",
        strokeWidth: 3,
        stroke: null,
        margin: 2,
      },
      new go.Binding("figure", "figure"),
      new go.Binding("fill", "color"),
      new go.Binding("stroke", "color")
    ),
    $(
      go.TextBlock,
      {
        stroke: "#e333",
        font: "bold 14px sans-serif",
      },
      new go.Binding("text", "name")
    )
  );
// define the Node template, representing an entity
let nodeSchema = $(
    go.Node,
    "Auto", // the whole node panel
    {
      selectionAdorned: true,
      resizable: true,
      fromSpot: go.Spot.AllSides,
      toSpot: go.Spot.AllSides,
      isShadowed: true,
      shadowOffset: new go.Point(3, 3),
      shadowColor: "#C5C1AA",
    },
    new go.Binding("location", "location").makeTwoWay(),
    // whenever the PanelExpanderButton changes the visible property of the "LIST" panel,
    // clear out any desiredSize set by the ResizingTool.
    new go.Binding("desiredSize", "visible", function (v) {
      return new go.Size(NaN, NaN);
    }).ofObject("LIST"),
    // define the node's outer shape, which will surround the Table
    $(go.Shape, "RoundedRectangle", {
      fill: "white",
      stroke: "#eeeeee",
      strokeWidth: 2,
    }),
    $(
      go.Panel,
      "Table",
      { margin: 8, stretch: go.GraphObject.Fill },
      $(go.RowColumnDefinition, {
        row: 0,
        sizing: go.RowColumnDefinition.None,
      }),
      // the table header
      $(
        go.TextBlock,
        {
          row: 0,
          alignment: go.Spot.Center,
          margin: new go.Margin(0, 24, 0, 2), // leave room for Button
          font: "bold 16px sans-serif",
        },
        new go.Binding("text", "key")
      ),
      // the collapse/expand button
      $(
        "PanelExpanderButton",
        "LIST", // the name of the element whose visibility this button toggles
        { row: 0, alignment: go.Spot.TopRight }
      ),
      // the list of Panels, each showing an attribute
      $(
        go.Panel,
        "Vertical",
        {
          name: "LIST",
          row: 1,
          padding: 3,
          alignment: go.Spot.TopLeft,
          defaultAlignment: go.Spot.Left,
          stretch: go.GraphObject.Horizontal,
          itemTemplate: itemTempl,
        },
        new go.Binding("itemArray", "items")
      )
    ) // end Table Panel
  ); // end Node

function showClickedNode(e, obj){
    console.log(obj.part.lb);
    
    // Update the id
    document.getElementById('task-name').innerHTML = obj.part.lb.name;
    // Update the rank
    document.getElementById('task-rank').innerHTML = obj.part.lb.rank;
    // Update the start
    document.getElementById('task-start').innerHTML = obj.part.lb.start;
    // Update the end
    document.getElementById('task-end').innerHTML = obj.part.lb.end;
    // Update the end
    document.getElementById('task-machine-id').innerHTML = obj.part.lb.machine_id;
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

function init() {
  if (window.goSamples) goSamples(); // init for these samples -- you don't need to call this
  var $ = go.GraphObject.make; // for conciseness in defining templates

  myDiagram = $(
    go.Diagram,
    "myDiagramDiv", // must name or refer to the DIV HTML element
    {
      allowDelete: false,
      allowCopy: false,
      layout: $(go.ForceDirectedLayout),
      "undoManager.isEnabled": true,
    }
  );

  var colors = {
    red: "#be4b15",
    green: "#52ce60",
    blue: "#6ea5f8",
    lightred: "#fd8852",
    lightblue: "#afd4fe",
    lightgreen: "#b9e986",
    pink: "#faadc1",
    purple: "#d689ff",
    orange: "#fdb400",
  };

  // the template for each attribute in a node's array of item data
  var itemTempl = $(
    go.Panel,
    "Horizontal",
    $(
      go.Shape,
      {
        desiredSize: new go.Size(15, 15),
        strokeJoin: "round",
        strokeWidth: 3,
        stroke: null,
        margin: 2,
      },
      new go.Binding("figure", "figure"),
      new go.Binding("fill", "color"),
      new go.Binding("stroke", "color")
    ),
    $(
      go.TextBlock,
      {
        stroke: "#333333",
        font: "bold 14px sans-serif",
      },
      new go.Binding("text", "name")
    )
  );

  // define the Node template, representing an entity
  myDiagram.nodeTemplate = $(
    go.Node,
    "Auto", // the whole node panel
    {
      selectionAdorned: true,
      resizable: true,
      layoutConditions: go.Part.LayoutStandard & ~go.Part.LayoutNodeSized,
      fromSpot: go.Spot.AllSides,
      toSpot: go.Spot.AllSides,
      isShadowed: true,
      shadowOffset: new go.Point(3, 3),
      shadowColor: "#C5C1AA",
    },
    new go.Binding("location", "location").makeTwoWay(),
    // whenever the PanelExpanderButton changes the visible property of the "LIST" panel,
    // clear out any desiredSize set by the ResizingTool.
    new go.Binding("desiredSize", "visible", function (v) {
      return new go.Size(NaN, NaN);
    }).ofObject("LIST"),
    // define the node's outer shape, which will surround the Table
    $(go.Shape, "RoundedRectangle", {
      fill: "white",
      stroke: "#eeeeee",
      strokeWidth: 2,
    }),
    $(
      go.Panel,
      "Table",
      { margin: 8, stretch: go.GraphObject.Fill },
      $(go.RowColumnDefinition, {
        row: 0,
        sizing: go.RowColumnDefinition.None,
      }),
      // the table header
      $(
        go.TextBlock,
        {
          row: 0,
          alignment: go.Spot.Center,
          margin: new go.Margin(0, 24, 0, 2), // leave room for Button
          font: "bold 16px sans-serif",
        },
        new go.Binding("text", "key")
      ),
      // the collapse/expand button
      $(
        "PanelExpanderButton",
        "LIST", // the name of the element whose visibility this button toggles
        { row: 0, alignment: go.Spot.TopRight }
      ),
      // the list of Panels, each showing an attribute
      $(
        go.Panel,
        "Vertical",
        {
          name: "LIST",
          row: 1,
          padding: 3,
          alignment: go.Spot.TopLeft,
          defaultAlignment: go.Spot.Left,
          stretch: go.GraphObject.Horizontal,
          itemTemplate: itemTempl,
        },
        new go.Binding("itemArray", "items")
      )
    ) // end Table Panel
  ); // end Node

  // create the model for the E-R diagram
  var nodeDataArray = [
    {
      key: "Products",
      items: [
        {
          name: "ProductID",
          iskey: true,
          figure: "Decision",
          color: colors.red,
        },
        {
          name: "ProductName",
          iskey: false,
          figure: "Hexagon",
          color: colors.blue,
        },
        {
          name: "SupplierID",
          iskey: false,
          figure: "Decision",
          color: "purple",
        },
        {
          name: "CategoryID",
          iskey: false,
          figure: "Decision",
          color: "purple",
        },
      ],
    },
    {
      key: "Suppliers",
      items: [
        {
          name: "SupplierID",
          iskey: true,
          figure: "Decision",
          color: colors.red,
        },
        {
          name: "CompanyName",
          iskey: false,
          figure: "Hexagon",
          color: colors.blue,
        },
        {
          name: "ContactName",
          iskey: false,
          figure: "Hexagon",
          color: colors.blue,
        },
        {
          name: "Address",
          iskey: false,
          figure: "Hexagon",
          color: colors.blue,
        },
      ],
    },
    {
      key: "Categories",
      items: [
        {
          name: "CategoryID",
          iskey: true,
          figure: "Decision",
          color: colors.red,
        },
        {
          name: "CategoryName",
          iskey: false,
          figure: "Hexagon",
          color: colors.blue,
        },
        {
          name: "Description",
          iskey: false,
          figure: "Hexagon",
          color: colors.blue,
        },
        {
          name: "Picture",
          iskey: false,
          figure: "TriangleUp",
          color: colors.pink,
        },
      ],
    },
    {
      key: "Order Details",
      items: [
        { name: "OrderID", iskey: true, figure: "Decision", color: colors.red },
        {
          name: "ProductID",
          iskey: true,
          figure: "Decision",
          color: colors.red,
        },
        {
          name: "UnitPrice",
          iskey: false,
          figure: "Circle",
          color: colors.green,
        },
        {
          name: "Quantity",
          iskey: false,
          figure: "Circle",
          color: colors.green,
        },
        {
          name: "Discount",
          iskey: false,
          figure: "Circle",
          color: colors.green,
        },
      ],
    },
  ];
  myDiagram.model = $(go.GraphLinksModel, {
    copiesArrays: true,
    copiesArrayObjects: true,
    nodeDataArray: nodeDataArray,
    linkDataArray: linkDataArray,
  });
}
