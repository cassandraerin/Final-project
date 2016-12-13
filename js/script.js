$(document).ready(function() {
	//var= gender (true/false or string)

$('.all-secs').css( {'height': (  $(window).height() )  } );

$('.all-secs').hide();

$('#sec1').show();

$('.all-secs').on('click', 'button', function() {
    // slide this section out of sight
    $('.all-secs').slideUp();
		var buttonValue = this.value;
		switch (buttonValue) {
			case ('clickRogue'):
				$('#rogue').slideDown();
			break;
			case ('clickHero'):
				$('#hero').slideDown();
			break;
			case ('clickSidekick'):
				$('#sidekick').slideDown();
			break;
			case ('clickVillain'):
				$('#villain').slideDown();
			break;
			case ('clickDropout'):
				$('#dropout').slideDown();
			break;
			default:
				$(this).parent().next().slideDown();
		}

		if ( $(this).attr("id") != "configreset" ) {
	 $(this).next().slideDown();
 } else {
		 $('#sec1').slideDown();
 }
});

$( "input" ).click(function() {
	$('.all-secs').slideUp();
	var id = this.id;
	switch (id) {
	case 'conjure':
		$('#sec7').slideDown();
		break;
		case 'ofcourse':
			$('#sec8').slideDown();
			break;
			case 'yes':
				$('#sec9').slideDown();
				break;
				case 'nope':
					$('#sec11').slideDown();
					break;
						case 'nah':
							$('#sec13').slideDown();
							break;
							case 'heck':
								$('#sec12').slideDown();
								break;
								case 'report':
									$('#sec14').slideDown();
									break;
									case 'after':
										$('#sec15').slideDown();
										break;
										case 'money':
											$('#sec16').slideDown();
											break;
											case 'help':
											  $('#sec17').slideDown();
												break;
												case 'everything':
													$('#sec18').slideDown();
													break;
	case 'telekenisis':
		$('#sec4').slideDown();
		break;
		case 'true':
			$('#sec5').slideDown();
			break;
			case 'lie':
				$('#sec6').slideDown();
				break;
				case 'go':
	  			$('#dropout').slideDown();
					break;
					case 'stop':
		  			$('#hero').slideDown();
						break;
						case 'take':
							$('#villain').slideDown();
							break;
							case 'yeah':
			  				$('#hero').slideDown();
								break;
								case 'Maybe':
									$('#rogue').slideDown();
									break;
									case 'no':
					  				$('#sidekick').slideDown();
										break;
case 'fly':
  $('#sec19').slideDown();
	break;
	case 'accept':
	  $('#sec20').slideDown();
		break;
		case 'decline':
			$('#sec21').slideDown();
			break;
			case 'include':
				$('#sec22').slideDown();
				break;

case 'none':
	$('#sec23').slideDown();
	break;
	case 'smart':
		$('#sec24').slideDown();
		break;
		case 'tech':
			$('#sec25').slideDown();
			break;
			case 'clean':
				$('#sec26').slideDown();
				break;
				case 'try':
					$('#sec27').slideDown();
					break;
					case 'charm':
						$('#sec28').slideDown();
						break;
						case 'head':
							$('#sec29').slideDown();
							break;
							case 'sit':
								$('#sec30').slideDown();
								break;
								case 'explain':
									$('#sec31').slideDown();
									break;
									case 'tell':
										$('#sec32').slideDown();
										break;

	/*default:
		alert('Nobody Wins!');*/
}
});

// click button= look at the section im in, then look at the next section and slide the next one down, the one im on has to go up. (order)
// down is show/ up is hide

//on.change('name') form exervcise (name=*) radio button value=id of sec
});
