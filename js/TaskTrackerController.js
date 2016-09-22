(function() {
    function TaskTrackerController() {
        var self = this;

        self.tasksList = [];
        console.log(self.tasksList);
       /* jsonService
            . getProductData()
            .success(function(data) {
                Array.prototype.push.apply(self.taskList, data);
            })
            .error(function() {
                console.log('XHR Failed to Get All Products Data');
            });*/
        self.addTask = function addTask() {

            self.data = {
                name: self.name,
                date: self.date,
                assigned: self.assigned
            };

            self.tasksList.push(self.data);
            console.log(self.tasksList);
            self.name = self.date = self.assigned = '';


        };
    };
/*    TaskTrackerController.$inject = ['jsonService'];
*/    angular
        .module('taskTracker')
        .controller('TaskTrackerController', TaskTrackerController);
})();
