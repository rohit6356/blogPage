
const gridcontainer = document.querySelector('.grid-container')

const xml = new XMLHttpRequest();
xml.getResponseHeader('Content-type', 'application/json')
xml.open("GET", "../posts.json",true);
xml.onload = function(){
    if(this.status === 200){
        const obj = JSON.parse(this.responseText);
        const arr = obj.posts;

         arr.map((element) => {
      
        const main_div = document.createElement("div");
        main_div.className = "grid-item";
        const div_2 = document.createElement("div");
        div_2.className = "notification";
        const P1 = document.createElement("p")
        const p1text = document.createTextNode("24 MAY")
        div_2.appendChild(P1)
        P1.appendChild(p1text)
        main_div.appendChild(div_2);
        const img = document.createElement("img");
        img.setAttribute("src" , "./images/blog-one.jpg")
        img.className="img"
        main_div.appendChild(img)
        const div_3 = document.createElement("div")
        div_3.className = "wedge"
        
        const div_4 = document.createElement("div")
        div_4.className = "left"
        div_3.appendChild(div_4)

        const p2 = document.createElement("p")
        p2.classNamec="author"
        const text1 = document.createTextNode(element.author)
        const i1 = document.createElement("i")
        i1.classList.add("fa-solid", "fa-user")
        p2.appendChild(i1)
        div_4.appendChild(p2);
        p2.appendChild(text1)

        const div_5 = document.createElement("div")
        div_4.className = "right"
        div_3.appendChild(div_5)

        const p3 = document.createElement("p")
        const text2 = document.createTextNode("15 |")
        const text3 = document.createTextNode("25")
        const i2 = document.createElement("i")
        const i3 = document.createElement("i")
        i2.classList.add("fa-solid", "fa-heart")
        i3.classList.add("fa-solid", "fa-comment")
        p3.appendChild(i2)
        p3.appendChild(text2)
        p3.appendChild(i3)
        p3.appendChild(text3)
        div_5.appendChild(p3);
        main_div.appendChild(div_3)
        
        const title = document.createElement("h3")
        const titletext = document.createTextNode(element.title)
        title.className="title"
        title.appendChild(titletext)
        main_div.appendChild(title);

        gridcontainer.appendChild(main_div);
        const p4 = document.createElement("p")
        p4.className = "disc"
        const desc = document.createTextNode(element.desc)
        p4.appendChild(desc)
        main_div.appendChild(p4)
        
        })
        
       
    }
    else{
        console.log("some error occured");
    }
}
xml.send();
