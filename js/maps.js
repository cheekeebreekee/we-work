$(function(){

	(function(){

		/* Main map */

		function initialize() {     
			var myLatlng = new google.maps.LatLng(61.254384, 82.146770),
				myOptions = {
					zoom: 3,
					center: myLatlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					scrollwheel: false
				},
				map = new google.maps.Map(document.getElementById("map_markers"), myOptions),
				styles = [{
					stylers: [
						{ saturation: -100 },
						{ hue: '#c5c5c5' },
						{ visibility: 'simplified' }
					]
				},{
					featureType: 'water',
					elementType: 'labels',
					stylers : [{visibility: 'off'}]
				},{
					featureType: 'administrative',
					elementType: 'labels',
					stylers : [{visibility: 'off'}]
				}],
				infoWindow = new google.maps.InfoWindow(),

				/* Markers opts and texts */

				markersList = [{
					'image': 'img/team.png',
					'positionX': 39.766424,
					'positionY': 12.127910,
					'quantity': '123 965',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				},{
					'image': 'img/team.png',
					'positionX': 54.258882,
					'positionY': 17.225566,
					'quantity': '12 965',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				},{
					'image': 'img/team.png',
					'positionX': 58.349933,
					'positionY': 41.483378,
					'quantity': '1 965',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				},{
					'image': 'img/team.png',
					'positionX': 45.205354,
					'positionY': 60.995096,
					'quantity': '1 965',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				},{
					'image': 'img/team.png',
					'positionX': 66.084963,
					'positionY': 84.725565,
					'quantity': '12 965',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				},{
					'image': 'img/team.png',
					'positionX': 40.170577,
					'positionY': 108.104471,
					'quantity': '12 365',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				},{
					'image': 'img/team.png',
					'positionX': 68.524260,
					'positionY': 151.874001,
					'quantity': '1 965',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				},{
					'image': 'img/team.png',
					'positionX': 58.257575,
					'positionY': 127.791970,
					'quantity': '12 396',
					'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus ex leo, eget vulputate purus consectetur in. Duis ante orci, imperdiet quis mauris quis, blandit auctor nisl. Praesent sit amet orci nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum suscipit congue fermentum. Nunc tempor commodo augue blandit mattis. Vivamus a sagittis est, vitae blandit turpis.'
				}];

			map.setOptions({styles: styles});

			/* Add markers */

			(function(){
				var i = 0;
				for (; i < markersList.length; i+=1) {					
					var data = markersList[i],
						markerPosition = new google.maps.LatLng(data.positionX, data.positionY),
						positionX = data.positionX,
						positionY = data.positionY,
						marker = new RichMarker({
					        position: markerPosition,
					        map: map,
					        shadow: 'none',
					        draggable: false,
					        content: '<div class="map_icon"><span class="map_link"><span class="map_man"></span><span class="map_quant">'+data.quantity+'</span></span><div class="map_nose"></div>'
				        }),
				        image = data.image,
				        text = data.text;
				    (function (marker, data) {
	                    google.maps.event.addListener(marker, "click", function () {
	                    	//map.setCenter(marker.getPosition());
	                        infoWindow.setContent('<div class="infowindow_inner"><h5 class="iw_heading"><img src="'+image+'" alt="team" /></h5><p>'+text+'</p></div>');
	                        infoWindow.open(map, marker);
	                    });
	                })(marker, data);
				};
			}());
		};
		window.onload = initialize;
	}());
});