var response =  function(data, error){
    if(error){
        return error;
    }
    else
    return data;
};

function CityRepository(dbContext) {
    function getCities(req, res) {
        var params = [];
        dbContext.getQuery("select * FROM [SMS].[dbo].[Cities]", params, false, function (error, data) {
            console.log(data);          
            return res.json(response(data, error));
        });
    }

    return { getCities };
}

module.exports = CityRepository;