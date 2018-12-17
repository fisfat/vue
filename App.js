new Vue({
    el: "#vue-app",
    data: {
        name: '',
        website: "http://google.com",
        parse: '<a href="http://google.com">click here</a>',
        age: '',
        x: 0,
        y:0
    },
    methods: {
        greetings: function(time){
            return 'hello ' + time + this.name
        },
        add: function(val){
            this.age += val;
        },
        subt: function(val){
            this.age -= val;
        },
        axis: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        logname: function(){
            console.log('inputed');
        }

    }  
})