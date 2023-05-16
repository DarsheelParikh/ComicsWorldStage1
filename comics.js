AFRAME.registerComponent("comics", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards()
    },
  
    comicContainer: function () {
      const thumbNailsRef = [
        {
          id: "spider-man",
          title: "Spiderman",
          url: "",
        },
        {
          id: "batman",
          title: "Batman",
          url: "",
        },
  
        {
          id: "wolverine",
          title: "Wolverine",
          url: "",
        },
        {
          id: "the-flash",
          title: "The Flash",
          url: "",
        },
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id)
        // Thumbnail Element
       const thumbnail = this.createThumbnail(item)
       borderEl.appendChild(thumbnail)
        // Title Text Element
        const titleEl = this.createTitleEl(position, item)
        borderEl.appendChild(titleEl)
        this.placesContainer.appendChild(borderEl);
      }
    },
    createBorder:function(position,id){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("id", id)
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
        primitive:"box", 
        radiusInner: 9, radiusOuter: 10
      })
      entityEl.setAttribute("position", position)
      entityEl.setAttribute("material", {
        color: "red", opacity: 0.4
      })
      return entityEl
    },
  
    createThumbnail:function(item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("visible", true)
      entityEl.setAttribute("geometry", {
        primitive: "box",
        radius : 9
      })
      entityEl.setAttribute("material", {src:item.url})
    },
  
    createTitleEl:function(position, item){
      const entityEl = document.createElement("a-entity")
      entityEl.setAttribute("text", {
        font:"exo2bold",
        align: "center",
        width: 60,
        color: "blue",
        value: item.title
      })
  
      const elposition = position
      elposition.y = -20
      entityEl.setAttribute("position", elposition)
      entityEl.setAttribute("visible", true)
      return entityEl
    }
    
    
  });
  