const app = Vue.createApp({

    data() {
        return {
            date2: 'dástum',
            selected:[
                "day6",
                "day24",
                "day30",
                "day23",
                "day29"
            ]
        }
    },
    methods: {
        days() {
            var dt = new Date();
            dt.toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' })
            var month = dt.getMonth();
            var year = dt.getFullYear();
            
            console.log(year+' ' + month+ 31)
            console.log(this.getDayName(new Date(year, month, 0),'hu-HU'))

            return daysInMonth = new Date(year, month, 0).getDate();
        },


        getDayName(dateStr,locale){
            var date = new Date(dateStr);
            return date.toLocaleDateString(locale, { weekday: 'long' });      
        },

        getDays(){

            var dt = new Date();
            var month = dt.getMonth();
            var year = dt.getFullYear();
            daysInMonth = new Date(year, month, 0).getDate();

            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date(year, month, 0).getDate();
            var dayName = days[d.getDay()];
            
            return dayName;
        },

        toggleActive(className){
            
            if(this.selected.indexOf(className)>-1){
                return true;
            }

            return false;



        },

        createClassName(day){
            return 'day'+day;
        },
        addSelected(selected){
            
            

            let hasSelected=false;
            
            console.log();
            if(this.selected.indexOf(selected)>-1){
                [].splice
            }else{
                this.selected.push(selected);
            }

            this.selected.forEach((value,key) => {
                if(value==selected){
                    hasSelected = true;

                }
                
            });
            console.log(this.selected)
        }
        
    },
});
app.mount('#app');