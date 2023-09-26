const explorer = {
    id:"1",
    name: "root",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "public",
        isFolder: true,
        items: [
          {
            id:"3",
            name: "assets",
            isFolder: true,
            items: [
              {
                id:"4",
                name: "favicon.ico",
                isFolder: false,
                items: []
              },
            ]
          },
          {
            id:"5",
            name: "img",
            isFolder: true,
            items: [
              {
                id:"6",
                name: "header.png",
                isFolder: false,
              }
            ]
          }
        ]
      },
      {
        id:"7",
        name: "src",
        isFolder: true,
        items: [
          {
            id:"8",
            name: "App.js",
            isFolder: false,
            items: []
          },
          {
            id:"9",
            name: "Index.js",
            isFolder: false,
            items: []
          },
          {
            id:"10",
            name: "styles.css",
            isFolder: false,
            items: []
          }
        ]
      },
      {
        id:"11",
        name: "package.json",
        isFolder: false,
        items: []
      }
    ]
  };
  
  export default explorer;