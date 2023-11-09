class LiaElement extends HTMLElement{
    connectedCallback(){        
        this.innerHTML  = "Lia was here";
    }
}

customElements.define("x-lia", LiaElement);

class CenterElement extends HTMLElement{
    connectedCallback(){        
        this.innerHTML  = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterElement);

class YearElement extends HTMLElement{
    connectedCallback(){        
        this.innerHTML  = new Date().getFullYear();
    }
}

customElements.define("x-fullyear", YearElement);

class TurquoiseElement extends HTMLElement{
    connectedCallback(){        
        this.innerHTML  = `<div style="color:turquoise">${this.innerHTML}</div>`;
    }
}

customElements.define("x-turquoise", TurquoiseElement);


class PaleVioletRedElement extends HTMLElement{
    connectedCallback(){        
        this.innerHTML  = `<div style="color:palevioletred">${this.innerHTML}</div>`;
    }
}

customElements.define("x-palevioletred", PaleVioletRedElement);

class ParagraphElement extends HTMLElement{
    connectedCallback(){        
        this.innerHTML  = `<p style="color:white"; "background-color:black">${this.innerHTML}</p>`;
    }
}

customElements.define("x-paragraph", ParagraphElement);