

// window.localStorage.clear();

const $ = document.querySelector.bind(document);

const titleWin = $(".title-win");
const titleLoser = $(".title-loser");
const btnWin = $(".win");
const btnLoser = $(".loser");


const app = {

    setLocal(key, value) {
        localStorage.setItem(key, value);
    },

    handleWin() {
        let value = localStorage.getItem("win")
        this.setLocal("win", ++value);
        this.render();
    },

    handleLoser() {
        let value = localStorage.getItem("loser")
        this.setLocal("loser", ++value);
        this.render();
    },

    render() {
        titleWin.innerText = localStorage.getItem("win")
        titleLoser.innerText = localStorage.getItem("loser")
    },

    run() {
        btnWin.addEventListener("click", this.handleWin.bind(this));
        btnLoser.addEventListener("click", this.handleLoser.bind(this));
        this.render();
    }
}

app.run()