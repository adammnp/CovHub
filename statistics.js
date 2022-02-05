let url = 'https://data.gov.sg/api/action/datastore_search?resource_id=6c14814b-09b7-408e-80c4-db3d393c7c15&limit=100000';
run();
function run(){
  fetch(url)
  .then(response => response.json()) 
  .then(function(data){
    let content="";
    var cases = 0;  
    var date = new Date();
     date.setDate(date.getDate() - 1);
    
      for(var res in data.result.records[0])
      {
        function helps(res){
          return res._id;
        }
        console.log(helps(res));
        console.log(date);
        console.log(new Date(res.pr_date));
        if(new Date(res.pr_date)== date){  
            cases+=res.count_of_cases;
        }
      }
    content+=`"<div>'${cases}'</div>"`
    $("#stat").html(content);
  });
}