module.exports = function(router){
    var homeController = require('../controllers/home.controller');

    router.get('/api/home/list', homeController.home_list)
    router.get('/api/home/list/:id', homeController.home_id)

    router.post('/api/home/search', homeController.home_search)

    router.get('/api/nganh/:id', homeController.nganh_list)
    router.get('/api/lop/:id', homeController.lop_list)
    router.get('/api/bo/:id', homeController.bo_list)

}