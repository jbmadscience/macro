
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

    var safeDivide = function (dividend, divisor) {
        var result = dividend/divisor;
        return (isNaN(result)) ? 0 : result;
    };

    var app = new Vue({
        el: '#app',
        data: {
            carbohydrateGrams: "",            
            fatGrams: "",            
            proteinGrams: "",            
        },
        computed: {
            carbohydrateCalories: function() {
                return this.carbohydrateGrams*4;
            },
            fatCalories: function() {
                return this.fatGrams*9;
            },
            proteinCalories: function() {
                return this.proteinGrams*4;
            },
            totalCalories: function() {
                return this.carbohydrateCalories + this.fatCalories + this.proteinCalories;
            },
            carbohydratePercent: function() {
                return safeDivide(this.carbohydrateCalories, this.totalCalories);
            },
            fatPercent: function() {
                return safeDivide(this.fatCalories, this.totalCalories);
            },
            proteinPercent: function() {
                return safeDivide(this.proteinCalories, this.totalCalories);
            }
        },
        filters: {
            percent: function(value) {
                return (value*100).toFixed(2) + "%";
            }
        },
        methods: {
            clear: function() {
                this.carbohydrateGrams = 0;
                this.fatGrams = 0;
                this.proteinGrams = 0;
            }
        }

    });

