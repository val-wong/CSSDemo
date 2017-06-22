var usersArray=[];

$(document).ready(function(){
	console.log("inside app");

	var myApiCall = function(){

		var userQuery = "https://randomuser.me/api/?results=10&nat=us&inc=gender,name,location,email,picture";

		$.ajax({
			url: userQuery,
			method: 'GET',
			dataType: 'jsonp'
		}).done(function(response){
			
			var userData = response.results;
			for (var i = 0; i < userData.length; i++) {
				// console.log(userData[i].name.first)
				var user = {
					name: userData[i].name.title + "." + userData[i].name.first + " " + userData[i].name.last,
					email: userData[i].email,
					address: userData[i].location.street + "," + userData[i].location.city + "," + userData[i].location.state + "," + userData[i].location.postcode,
					image: userData[i].picture.large,
					userid: i
				}
				usersArray.push(user);
			}

			 console.log(usersArray);
			 displayUsers();

		});//ajax ends

	}//function ends

	myApiCall();

	var displayUsers = function(){

		for (var i = 0; i < usersArray.length; i++) {

			var parentDiv = $("<div class='col-md-3 user'>");
			parentDiv.attr("data-id", usersArray[i].userid);
		
			parentDiv.append("<p>" + usersArray[i].name + "</p>");
			
			var imageTag = $("<img class='img-responsive img-thumbnail' alt='user images' style='width:100%;'>");
			imageTag.attr("src", usersArray[i].image);
			parentDiv.append(imageTag);
			
			$("#userList").append(parentDiv);
		}
		
	}

	$(document).on("click", ".user", function(){
		var userClicked = $(this).attr('data-id');
		console.log(userClicked);
	});
});