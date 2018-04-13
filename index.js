
'use strict';
var Alexa = require('alexa-sdk');

const HELP_MESSAGE = 'You can say tell me schedule of any date or squad of team name , or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';


var dates = [
    
    {   
        mydate: "7 april 18",
        mdate: "7 april",
        ydata: "7 april 2018",
        date: "Chennai Super Kings vs Mumbai Indians at 02:30 PM GMT in Wankhede Stadium, Mumbai"
    },
    {
        mydate: "8 april 18",
        mdate: "8 april",
        ydata: "8 april 2018",
        date: "Kings XI Punjab vs Delhi Daredevils at 10:30 AM GMT in Punjab Cricket Association IS Bindra Stadium, Mohali, and another match is of  Kolkata Knight Riders vs Royal Challengers Bangalore at 2:30 PM GMT in Eden Gardens, Kolkata"
    },
     {   
        mydate: "9 april 18",
        mdate: "9 april",
        ydata: "9 april 2018",
        date: "Sunrisers Hyderabad vs Rajasthan Royals at 2:30 PM GMT in Rajiv Gandhi International Stadium, Hyderabad"
    },
    
    {
        mydate: "10 april 18",
        mdate: "10 april",
        ydata: "10 april 2018",
        date: "Chennai Super Kings vs Kolkata Knight Riders at 2:30 PM GMT in MA Chidambaram Stadium, Chennai"
    },
     {   
        mydate: "11 april 18",
        mdate: "11 april",
        ydata: "11 april 2018",
        date: "Rajasthan Royals vs Delhi Daredevils at 2:30 PM GMT in Sawai Mansingh Stadium, Jaipur"
    },
    {
        mydate: "12 april 18",
        mdate: "12 april",
        ydata: "12 april 2018",
        date: "Sunrisers Hyderabad vs Mumbai Indians at 2:30 PM GMT in Rajiv Gandhi International Stadium, Hyderabad"
    },
     {   
        mydate: "13 april 18",
        mdate: "13 april",
        ydata: "13 april 2018",
        date: "Royal Challengers Bangalore vs Kings XI Punjab at 2:30 PM GMT in M.Chinnaswamy Stadium, Bengaluru"
    },
    {
        mydate: "14 april 18",
        mdate: "14 april",
        ydata: "14 april 2018",
        date: "Mumbai Indians vs Delhi Daredevils at 10:30 AM GMT in Wankhede Stadium, Mumbai   Kolkata Knight Riders vs Sunrisers Hyderabad at 2:30 PM GMT in Eden Gardens, Kolkata"
    },
     {   
        mydate: "15 april 18",
        mdate: "15 april",
        ydata: "15 april 2018",
        date: "Royal Challengers Bangalore vs Rajasthan Royals at 10:30 AM GMT in M.Chinnaswamy Stadium, Bengaluru   Kings XI Punjab vs Chennai Super Kings at 2:30 PM GMT in Punjab Cricket Association IS Bindra Stadium, Mohali"
    },
    {
        mydate: "16 april 18",
        mdate: "16 april",
        ydata: "16 april 2018",
        date: "Kolkata Knight Riders vs Delhi Daredevils at 2:30 PM GMT in Eden Gardens, Kolkata"
    },
     {   
        mydate: "17 april 18",
        mdate: "17 april",
        ydata: "17 april 2018",
        date: "Mumbai Indians vs Royal Challengers Bangalore at 2:30 PM GMT in Wankhede Stadium, Mumbai"
    },
    {
        mydate: "18 april 18",
        mdate: "18 april",
        ydata: "18 april 2018",
        date: "Rajasthan Royals vs Kolkata Knight Riders at 2:30 PM GMT in Sawai Mansingh Stadium, Jaipur"
    },
     {   
        mydate: "19 april 18",
        mdate: "19 april",
        ydata: "19 april 2018",
        date: "Kings XI Punjab vs Sunrisers Hyderabad at 2:30 PM GMT in Punjab Cricket Association IS Bindra Stadium, Mohali"
    },
    {
        mydate: "20 april 18",
        mdate: "20 april",
        ydata: "20 april 2018",
        date: "Chennai Super Kings vs Rajasthan Royals at 2:30 PM GMT in MA Chidambaram Stadium, Chennai"
    },
    	{   
        mydate: "21 april 18",
        mdate: "21 april",
        ydata: "21 april 2018",
        date: "Kolkata Knight Riders vs Kings XI Punjab at 10:30 AM GMT in Eden Gardens, Kolkata, and another match is of Jaipur Delhi Daredevils vs Royal Challengers Bangalore at 2:30 GMT in Feroz Shah Kotla, Delhi"
    },
    {
        mydate: "22 april 18",
        mdate: "22 april",
        ydata: "22 april 2018",
        date: "Sunrisers Hyderabad vs Chennai Super Kings at 10:30 AM GMT in Rajiv Gandhi International Stadium, Hyderabad, and another match is of Hyderabad Rajasthan Royals vs Mumbai Indians at 2:30 GMT in Sawai Mansingh Stadium, Jaipur"
    },
     {   
        mydate: "23 april 18",
        mdate: "23 april",
        ydata: "23 april 2018",
        date: "Delhi Daredevils vs Kings XI Punjab at 2:30 PM GMT in Feroz Shah Kotla, Delhi"
    },
    {
        mydate: "24 april 18",
        mdate: "24 april",
        ydata: "24 april 2018",
        date: "Mumbai Indians vs Sunrisers Hyderabad at 10:30 AM GMT in Wankhede Stadium, Mumbai"
    },
     {   
        mydate: "25 april 18",
        mdate: "25 april",
        ydata: "25 april 2018",
        date: "Royal Challengers Bangalore vs Chennai Super Kings at 10:30 AM GMT in M.Chinnaswamy Stadium, Bengaluru"
    },
    {
        mydate: "26 april 18",
        mdate: "26 april",
        ydata: "26 april 2018",
        date: "Sunrisers Hyderabad vs Kings XI Punjab at 2:30 PM GMT in Rajiv Gandhi International Stadium, Hyderabad"
    },
     {   
        mydate: "27 april 18",
        mdate: "27 april",
        ydata: "27 april 2018",
        date: "Delhi Daredevils vs Kolkata Knight Riders at 2:30 PM GMT in Feroz Shah Kotla, Delhi"
    },
    {
        mydate: "28 april 18",
        mdate: "28 april",
        ydata: "28 april 2018",
        date: "Chennai Super Kings vs Mumbai Indians at 2:30 PM GMT in MA Chidambaram Stadium, Chennai"
    },
     {   
        mydate: "29 april 18",
        mdate: "29 april",
        ydata: "29 april 2018",
        date: "Rajasthan Royals vs Sunrisers Hyderabad at 10:30 AM GMT in Sawai Mansingh Stadium, Jaipur, and another match is of Royal Challengers Bangalore vs Kolkata Knight Riders at 2:30 GMT in M.Chinnaswamy Stadium, Bengaluru"
    },
    {
        mydate: "30 april 18",
        mdate: "30 april",
        ydata: "30 april 2018",
        date: "Chennai Super Kings vs Delhi Daredevils at 2:30 PM GMT in MA Chidambaram Stadium, Chennai"
    },
	{   
        mydate: "1 may 18",
        mdate: "1 may",
        ydata: "1 may 2018",
        date: "Royal Challengers Bangalore vs Mumbai Indians at 2:30 PM GMT in M.Chinnaswamy Stadium, Bengaluru"
    },
    {
        mydate: "2 may 18",
        mdate: "2 may",
        ydata: "2 may 2018",
        date: "Delhi Daredevils vs Rajasthan Royals at 2:30 PM GMT in Feroz Shah Kotla, Delhi"
    },
     {   
        mydate: "3 may 18",
        mdate: "3 may",
        ydata: "3 may 2018",
        date: "Kolkata Knight Riders vs Chennai Super Kings at 2:30 PM GMT in Eden Gardens, Kolkata"
    },
    {
        mydate: "4 may 18",
        mdate: "4 may",
        ydata: "4 may 2018",
        date: "Kings XI Punjab vs Mumbai Indians at 2:30 PM GMT Holkar Cricket Stadium, Indore"
    },
     {   
        mydate: "5 may 18",
        mdate: "5 may",
        ydata: "5 may 2018",
        date: "Chennai Super Kings vs Royal Challengers Bangalore at 10:30 AM GMT in MA Chidambaram Stadium, Chennai, and another match is of Sunrisers Hyderabad vs Delhi Daredevils at 2:30 PM GMT in Rajiv Gandhi International Stadium, Hyderabad"
    },
    {
        mydate: "6 may 18",
        mdate: "6 may",
        ydata: "6 may 2018",
        date: "Mumbai Indians vs Kolkata Knight Riders at 10:30 AM GMT in Wankhede Stadium, Mumbai, and another match is of Kings XI Punjab vs Rajasthan Royals at 2:30 PM GMT in Holkar Cricket Stadium, Indore"
    },
	{   
        mydate: "7 may 18",
        mdate: "7 may",
        ydata: "7 may 2018",
        date: "Sunrisers Hyderabad vs Royal Challengers Bangalore at 02:30 PM GMT in Rajiv Gandhi International Stadium, Hyderabad"
    },
    {
        mydate: "8 may 18",
        mdate: "8 may",
        ydata: "8 may 2018",
        date: "Rajasthan Royals vs Kings XI Punjab at 2:30 PM GMT in Sawai Mansingh Stadium, Jaipur"
    },
     {   
        mydate: "9 may 18",
        mdate: "9 may",
        ydata: "9 may 2018",
        date: "Kolkata Knight Riders vs Mumbai Indians at 2:30 PM GMT in Eden Gardens, Kolkata"
    },
    {
        mydate: "10 may 18",
        mdate: "10 may",
        ydata: "10 may 2018",
        date: "Delhi Daredevils vs Sunrisers Hyderabad at 2:30 PM GMT in Feroz Shah Kotla, Delhi"
    },
     {   
        mydate: "11 may 18",
        mdate: "11 may",
        ydata: "11 may 2018",
        date: "Rajasthan Royals vs Chennai Super Kings at 2:30 PM GMT in Sawai Mansingh Stadium, Jaipur"
    },
    {
        mydate: "12 may 18",
        mdate: "12 may",
        ydata: "12 may 2018",
        date: "Kings XI Punjab vs Kolkata Knight Riders at 10:30 AM GMT in Holkar Cricket Stadium, Indore, and another match is of Royal Challengers Bangalore vs Delhi Daredevils at 2:30 GMT in M.Chinnaswamy Stadium, Bengaluru"
    },
     {   
        mydate: "13 may 18",
        mdate: "13 may",
        ydata: "13 may 2018",
        date: "Chennai Super Kings vs Sunrisers Hyderabad at 10:30 AM GMT in MA Chidambaram Stadium, Chennai, and another match is of Mumbai Indians vs Rajasthan Royals at 2:30 PM GMT in Wankhede Stadium, Mumbai"
    },
    {
        mydate: "14 may 18",
        mdate: "14 may",
        ydata: "14 may 2018",
        date: "Kings XI Punjab vs Royal Challengers Bangalore at 2:30 PM GMT in Holkar Cricket Stadium, Indore"
    },
     {   
        mydate: "15 may 18",
        mdate: "15 may",
        ydata: "15 may 2018",
        date: "Kolkata Knight Riders vs Rajasthan Royals at 2:30 PM GMT in Eden Gardens, Kolkata"
    },
    {
        mydate: "16 may 18",
        mdate: "16 may",
        ydata: "16 may 2018",
        date: "Mumbai Indians vs Kings XI Punjab at 2:30 PM GMT in Wankhede Stadium, Mumbai"
    },
     {   
        mydate: "17 may 18",
        mdate: "17 may",
        ydata: "17 may 2018",
        date: "Royal Challengers Bangalore vs Sunrisers Hyderabad at 2:30 PM GMT in M.Chinnaswamy Stadium, Bengaluru"
    },
    {
        mydate: "18 may 18",
        mdate: "18 may",
        ydata: "18 may 2018",
        date: "Delhi Daredevils vs Chennai Super Kings at 2:30 PM GMT in Feroz Shah Kotla, Delhi"
    },
     {   
        mydate: "19 may 18",
        mdate: "19 may",
        ydata: "19 may 2018",
        date: "Rajasthan Royals vs Royal Challengers Bangalore at 10:30 AM GMT in Sawai Mansingh Stadium, Jaipur, and another match is of Sunrisers Hyderabad vs Kolkata Knight Riders at 2;30 PM GMT in Rajiv Gandhi International Stadium, Hyderabad"
    },
    {
        mydate: "20 may 18",
        mdate: "20 may",
        ydata: "20 may 2018",
        date: "Delhi Daredevils vs Mumbai Indians at 10:30 AM GMT in Feroz Shah Kotla, Delhi, and another match is of Chennai Super Kings vs Kings XI Punjab at 2:30 PM GMT in MA Chidambaram Stadium, Chennai"
    },
    {
        mydate: "22 may 18",
        mdate: "22 may",
        ydata: "22 may 2018",
        date: "It is Qualifier 1 match between, TBC vs TBC at 2:30 PM GMT in Wankhede Stadium, Mumbai"
    },
     {   
        mydate: "23 may 18",
        mdate: "23 may",
        ydata: "23 may 2018",
        date: "It is Eliminator match between, TBC vs TBC at 2:30 PM GMT in Maharashtra Cricket Association Stadium, Pune"
    },
     {   
        mydate: "25 may 18",
        mdate: "25 may",
        ydata: "25 may 2018",
        date: "It is Qualifier 2 match between, TBC vs TBC at 2:30 PM GMT in Maharashtra Cricket Association Stadium, Pune"
    },
     {   
        mydate: "27 may 18",
        mdate: "27 may",
        ydata: "27 may 2018",
        date: "It is Final match between, TBC vs TBC at 2:30 PM GMT in Wankhede Stadium, Mumbai"
    }
    
    ];

var handlers = {
    'hellointent' : function() {
        this.response.speak("Welcome to VIVO IPL, you can ask me about schedule of IPL or about teams squad").listen();
        this.emit(':responseReady');
    },
    
    'teamintent' : function() {
        
        var myteam = this.event.request.intent.slots.team.resolutions.resolutionsPerAuthority[0].values[0].value.id;
        var b = "There is no team in IPL you have asked for";
        
        if ( myteam == "csk")
        {
       b="Harbhajan Singh, Shane Watson, Dwayne Bravo, M.S. Dhoni(captain and wicketkeeper), Suresh Raina, Ravindra Jadeja, Murali Vijay, Karn Sharma, Kedar Jadhav, Ambati Rayudu, Imran Tahir, Faf du Plessis, Deepak Chahar, Sam Billings, Mark Wood, Shardul Thakur, Dhruv Shorey, Lungisani Ngidi, Monu Kumar,Mitchell Santner, Kshitiz Sharma, Chaitanya Bishnoi, Kanishk Seth, N Jagadeesan, KM Asif";
        
        }
        else if ( myteam == "rcb")
        {
       b="Parthiv Patel (wicketkeeper), Brendon McCullum, AB de Villiers, Tim Southee, Virat Kohli (captain), Umesh Yadav, Mandeep Singh, Chris Woakes, Moeen Ali, Anirudha Joshi, Yuzvendra Chahal, Colin de Grandhomme, Aniket Choudhary, Pawan Negi, Manan Vohra, Quinton de Kock (wicketkeeper), Murugan Ashwin, Corey Anderson, Sarfaraz Khan, Navdeep Saini, Pavan Deshpande, Mohammed Siraj, Washington Sundar, Kulwant Khejroliya";
        
        }
        else if ( myteam == "rr")
        {
       b="Ajinkya Rahane (captain), Dhawal Kulkarni, Stuart Binny, Ben Laughlin, Anureet Singh, Jos Buttler (wicketkeeper), Jaydev Unadkat, Ben Stokes, Ankit Sharma, Sanju Samson (wk), Dushmantha Chameera, Prashant Chopra, Krishnappa Gowtham, Rahul Tripathi, Jatin Saxena, Shreyas Gopal, Zahir Khan, Mahipal Lomror, D Arcy Short, Jofra Archer, Aryaman Birla, Sudhesan Midhun";
        
        }
        else if ( myteam == "mi")
        {
      b="Jean-Paul Duminy, Rohit Sharma (captain), Kieron Pollard, Pradeep Sangwan, Saurabh Tiwary, Aditya Tare (wicketkeeper), Mitchell McClenaghan, Suryakumar Yadav, Pat Cummins, Ben Cutting, Akila Dananjaya, Evin Lewis, Siddhesh Lad, Jasprit Bumrah, Hardik Pandya, Mustafizur Rahman, Ishan Kishan, MD Nidheesh, Krunal Pandya, Rahul Chahar, Sharad Lumba, Tajinder Singh, Anukul Roy, Mayank Markande, Mohsin Khan";
        
        }
        else if ( myteam == "kkr")
        {
       b="Dinesh Karthik (captain and wicketkeeper), Piyush Chawla, Mitchell Johnson, Robin Uthappa (wk), Vinay Kumar, Ishank Jaggi, Sunil Narine, Mitchell Starc, Andre Russell, Chris Lynn, Apoorv Wankhade, Kuldeep Yadav, Nitish Rana, Cameron Delport, Javon Searles, Rinku Singh, Shubman Gill, Kamlesh Nagarkoti, Shivam Mavi";
       
        }
        else if ( myteam == "kp")
        {
       b="Yuvraj Singh, Chris Gayle, Manoj Tiwary, Ravichandran Ashwin (captain), Aaron Finch, Mayank Agarwal, David Miller, Mohit Sharma, Karun Nair, Akshdeep Nath, Lokesh Rahul (wicketkeeper), Axar Patel, Ankit Rajpoot, Marcus Stoinis, Barinder Sran, Andrew Tye, Ben Dwarshuis, Pardeep Sahu, Mayank Dagar, Mujeeb Ur Rahman, Manzoor Dar";
        
        }
        else if ( myteam == "dd")
        {
       b="Gautam Gambhir (captain), Amit Mishra, Naman Ojha (wicketkeeper), Daniel Christian, Jason Roy, Glenn Maxwell, Shahbaz Nadeem, Mohammed Shami, Colin Munro, Trent Boult, Harshal Patel, Jayant Yadav, Vijay Shankar, Gurkeerat Singh Mann, Chris Morris, Shreyas Iyer, Kagiso Rabada, Rahul Tewatia, Avesh Khan, Rishabh Pant (wicketkeeper), Sayan Ghosh, Sandeep Lamichhane, Abhishek Sharma, Prithvi Shaw, Manjot Kalra";
        
        }
        else if ( myteam == "srh")
        {
       b="Shakib Al Hasan, Yusuf Pathan, Shikhar Dhawan, Wriddhiman Saha (wicketkeeper), Bhuvneshwar Kumar, Alex Hales, Shreevats Goswami , Siddarth Kaul, Manish Pandey, Mohammad Nabi, Bipul Sharma, Kane Williamson (captain), Chris Jordan, Carlos Brathwaite, Sandeep Sharma, Sachin Baby, Mehdi Hasan, Ricky Bhui, Deepak Hooda, Billy Stanlake, T Natarajan, Tanmay Agarwal, Basil Thampi, Rashid Khan, K Khaleel Ahmed";
        
        }
        this.response.speak(b);
        this.emit(':responseReady');
    },
     'dateintent' : function() {
        
        var mydate = this.event.request.intent.slots.date.value;
        
         var date;
        for (var key in dates) {
        if (dates.hasOwnProperty(key)) {
             if(dates[key]["mydate"].toUpperCase()==mydate.toUpperCase() || dates[key]["mdate"].toUpperCase()==mydate.toUpperCase() || dates[key]["ydata"].toUpperCase()==mydate.toUpperCase())
             date = dates[key]["date"];
             //else
             //date = "no team";
         }
        }
        this.response.speak("On "+ mydate + " there is match of " + date);
        this.emit(':responseReady');
    },
    
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    }
};


exports.handler = (event, context, callback)=>{
    var alexa = Alexa.handler(event, context, callback);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
