
    var calculatePercents = function (carbohydrateGrams, fatGrams, proteinGrams) {
        let totalGrams = carbohydrateGrams + fatGrams + proteinGrams;

        if (isNaN(totalGrams) || totalGrams == 0) {
            return {
                carbohydratePercent: 0,
                fatPercent: 0,
                proteinPercent: 0
            };
        }
        
        return {
            carbohydratePercent: carbohydrateGrams / totalGrams,
            fatPercent: fatGrams / totalGrams,
            proteinPercent: proteinGrams / totalGrams
        };
    };

    var app = new Vue({
        el: '#app',
        data: {
            carbohydrateGrams: 2,            
            fatGrams: 6,            
            proteinGrams: 2,            
        },
        computed: {
            carbohydratePercent: function() {
                return calculatePercents(this.carbohydrateGrams, this.fatGrams, this.proteinGrams).carbohydratePercent;
            },
            fatPercent: function() {
                return calculatePercents(this.carbohydrateGrams, this.fatGrams, this.proteinGrams).fatPercent;
            },
            proteinPercent: function() {
                return calculatePercents(this.carbohydrateGrams, this.fatGrams, this.proteinGrams).proteinPercent;
            }
        }
    });

