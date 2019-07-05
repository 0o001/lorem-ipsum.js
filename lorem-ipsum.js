class LoremIpsum extends HTMLElement {
  
  constructor() {

    super()

  }

  connectedCallback() {

      const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus semper id dolor et semper.
                    In porttitor tellus non lacinia viverra.
                    Mauris faucibus dui id gravida suscipit.
                    Duis et nunc vitae justo vulputate varius.
                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed nunc nisi, facilisis eget velit quis, auctor interdum erat.
                    Aenean commodo odio odio, a tempus odio pulvinar in.
                    Ut semper tellus nulla.
                    Phasellus non nisl nisi.
                    Fusce fermentum iaculis urna, sed dictum sem pulvinar et.
                    Etiam ac sollicitudin eros, nec egestas dui. Donec euismod pretium nibh, ut laoreet turpis maximus vitae.
                    Vestibulum purus neque, dignissim ac ligula ut, consequat porta nunc.
                    Donec placerat porta turpis, in malesuada erat pulvinar vel.`

    if(this.hasAttribute('length')) {

      return this.attachShadow({mode: 'open'}).textContent = text.substr(0, this.getAttribute('length'))

    }

    if(this.hasAttribute('row')) {

        return this.attachShadow({mode: 'open'}).textContent = text.repeat(this.getAttribute('row'))

    }

    return this.attachShadow({mode: 'open'}).textContent = text

  }

}

window.customElements.define('lorem-ipsum', LoremIpsum)