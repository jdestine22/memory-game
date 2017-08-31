$(document).ready(function(){
//assign var app constructed object
$("button").on("click", function(){
  var app = {
// assign cards array within object
teams:["<img src='teams/76ers.png' class='sixers'>","<img src='teams/76ers.png' class='sixers'>","<img src='teams/bucks.png' class='bucks'>","<img src='teams/bucks.png' class='bucks'>","<img src='teams/cavs.png' class='cavs'>","<img src='teams/cavs.png' class='cavs'>", "<img src='teams/celtics.png' class='celtics'>","<img src='teams/celtics.png' class='celtics'>", "<img src='teams/clippers.png' class='clippers'>","<img src='teams/clippers.png' class='clippers'>",
"<img src='teams/heat.png' class='heat'>","<img src='teams/heat.png' class='heat'>", "<img src='teams/hornets.png' class='hornets'>","<img src='teams/hornets.png' class='hornets'>", "<img src='teams/nuggets.png' class='nuggets'>", "<img src='teams/nuggets.png' class='nuggets'>", "<img src='teams/pelicans.png' class='pelicans'>","<img src='teams/pelicans.png' class='pelicans'>", "<img src='teams/raptors.png' class='raptors'>","<img src='teams/raptors.png' class='raptors'>",
"<img src='teams/rockets.png' class='rockets'>","<img src='teams/rockets.png' class='rockets'>", "<img src='teams/spurs.png' class='spurs'>","<img src='teams/spurs.png' class='spurs'>", "<img src='teams/thunder.png' class='thunder'>", "<img src='teams/thunder.png' class='thunder'>", "<img src='teams/timberwolves.png' class='timberwolves'>","<img src='teams/timberwolves.png' class='timberwolves'>", "<img src='teams/warriors.png' class='warriors'>",
"<img src='teams/warriors.png' class='warriors'>", "<img src='teams/wizards.png' class='wizards'>","<img src='teams/wizards.png' class='wizards'>"],


    // cards:[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,14,14,15,15],
//Initialize function for object to be shuffled
    init: function() {
// shuffle cards built-in method
        app.shuffle();

    },
  // call shuffle function
      shuffle: function(){
  //set functions
        var random = 0;
        var temp = 0;
  // for loop

        for(i = 1; i < app.teams.length; i++){
          random = Math.round(Math.random() * i);
          console.log(random);
          temp = app.teams[i];
          app.teams[i]= app.teams[random];
          app.teams[random]= temp;
        }
        app.assignTeams();
        console.log('Shuffled Teams Array :' + app.teams);


  },
    assignTeams: function(){
      $(".nbaCard").each(function(index){
        $(this).attr('data-team-value', app.teams[index]);
      });
      app.clickHandlers();
    },
      clickHandlers: function(){
        $(".nbaCard").on("click", function(){
          $(this).html('<src"">' + $(this).data('teamValue')).addClass('selected');
            $(this).toggleClass("rotate");
          app.checkMatch();
        })
      },
      checkMatch: function(){
        if($(".selected").length == 2) {
          if ($(".selected").first().data('teamValue') == $(".selected").last().data('teamValue')) {
            $(".selected").each(function() {
              $(this).animate({opacity: 0}).removeClass('unmatched');
            });
            $(".selected").each(function() {
              $(this).removeClass('selected');
            });
            app.checkWin();
          } else {
              setTimeout(function() {
                $(".selected").each(function(){
                    $(this).html('').removeClass('selected');
                      $(this).toggleClass("rotate");
                })
              }, 1000);
          }
        }
      },
      checkWin: function() {
        if($('.unmatched').length === 0){
          $('.nbaContainer').html('<iframe width="560" height="315" src="https://www.youtube.com/embed/zu1z-HASL4E?autoplay=1&rel=0"frameborder="0" allowfullscreen></iframe>');
        }
      }
  };

  app.init();

  })
})
