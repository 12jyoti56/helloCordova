var app = {
  count: 0,
  quotes: [
    "Believe in yourself.",
    "Stay curious.",
    "Keep it simple.",
    "Never give up.",
    "Dream big.",
    "Be kind always.",
    "Learn something new today.",
    "Make it happen!"
  ],

  initialize: function () {
    document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },

  onDeviceReady: function () {
    document.getElementById('status').innerText = "Cordova is ready!";
    this.showDate();
    this.startClock();
    this.showScreenSize();
    this.showQuote();
  },

  greetUser: function () {
    const name = document.getElementById('nameInput').value;
    const message = name ? `Hello, ${name}! 👋` : "Hello there!";
    document.getElementById('greetingMessage').innerText = message;
  },

  incrementCounter: function () {
    this.count++;
    document.getElementById('counter').innerText = this.count;
  },

  toggleTheme: function () {
    document.body.classList.toggle("dark-mode");
  },

  changeBackground: function () {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  },

  showDate: function () {
    const today = new Date();
    document.getElementById('date').innerText = today.toDateString();
  },

  startClock: function () {
    setInterval(() => {
      const now = new Date();
      document.getElementById('clock').innerText = now.toLocaleTimeString();
    }, 1000);
  },

  resetAll: function () {
    this.count = 0;
    document.getElementById('nameInput').value = "";
    document.getElementById('greetingMessage').innerText = "";
    document.getElementById('counter').innerText = "0";
    document.body.style.backgroundColor = "";
    document.body.classList.remove("dark-mode");
  },

  showQuote: function () {
    const random = Math.floor(Math.random() * this.quotes.length);
    document.getElementById('quote').innerText = this.quotes[random];
  },

  showScreenSize: function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('screenSize').innerText = `${width}px × ${height}px`;
  }
};

app.initialize();
