/*
 * Bootstrap-based responsive mashup
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );

var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
//to avoid errors in workbench: you can remove this when you have added an app
var app;
require.config( {
	baseUrl: (config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "" ) + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {

	var control = false;
	qlik.setOnError( function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		if ( !control ) {
			control = true;
			$( '#popup' ).delay( 1000 ).fadeIn( 1000 ).delay( 11000 ).fadeOut( 1000 );
		}
	} );

	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );
	if ( $( 'ul#qbmlist li' ).length === 0 ) {
		$( '#qbmlist' ).append( "<li><a>No bookmarks available</a></li>" );
	}
	$( "body" ).css( "overflow: hidden;" );
	function AppUi ( app ) {
		var me = this;
		this.app = app;
		app.global.isPersonalMode( function ( reply ) {
			me.isPersonalMode = reply.qReturn;
		} );
		app.getAppLayout( function ( layout ) {
			$( "#title" ).html( layout.qTitle );
			$( "#title" ).attr( "title", "Last reload:" + layout.qLastReloadTime.replace( /T/, ' ' ).replace( /Z/, ' ' ) );
			//TODO: bootstrap tooltip ??
		} );
		app.getList( 'SelectionObject', function ( reply ) {
			$( "[data-qcmd='back']" ).parent().toggleClass( 'disabled', reply.qSelectionObject.qBackCount < 1 );
			$( "[data-qcmd='forward']" ).parent().toggleClass( 'disabled', reply.qSelectionObject.qForwardCount < 1 );
		} );
		app.getList( "BookmarkList", function ( reply ) {
			var str = "";
			reply.qBookmarkList.qItems.forEach( function ( value ) {
				if ( value.qData.title ) {
					str += '<li><a data-id="' + value.qInfo.qId + '">' + value.qData.title + '</a></li>';
				}
			} );
			str += '<li><a data-cmd="create">Create</a></li>';
			$( '#qbmlist' ).html( str ).find( 'a' ).on( 'click', function () {
				var id = $( this ).data( 'id' );
				if ( id ) {
					app.bookmark.apply( id );
				} else {
					var cmd = $( this ).data( 'cmd' );
					if ( cmd === "create" ) {
						$( '#createBmModal' ).modal();
					}
				}
			} );
		} );
		$( "[data-qcmd]" ).on( 'click', function () {
			var $element = $( this );
			switch ( $element.data( 'qcmd' ) ) {
				//app level commands
				case 'clearAll':
					app.clearAll();
					break;
				case 'back':
					app.back();
					break;
				case 'forward':
					app.forward();
					break;
				case 'lockAll':
					app.lockAll();
					break;
				case 'unlockAll':
					app.unlockAll();
					break;
				case 'createBm':
					var title = $( "#bmtitle" ).val(), desc = $( "#bmdesc" ).val();
					app.bookmark.create( title, desc );
					$( '#createBmModal' ).modal( 'hide' );
					break;
			}
		} );
	}

	//callbacks -- inserted here --
	//open apps -- inserted here --
	var app = qlik.openApp('dashboard.qvf', config);

	var app1 = qlik.openApp('大屏样式.qvf', config);

	var app2 = qlik.openApp('daodao.qvf', config);


	//get objects -- inserted here --
	app2.getObject('QV034','Fzfpu');
	app1.getObject('QV017','KTCg');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	app1.getObject('QV016','JjZPPq');
	
	
	app1.getObject('QV09','tGqYu');
	app1.getObject('QV05','GGHvDsm');
	app1.getObject('QV033','djgkFag');
	app1.getObject('QV032','BxFJtL');
	app1.getObject('QV031','GhzmQ');
	app1.getObject('QV030','DJRaD');
	app1.getObject('QV029','WpyvmK');
	app1.getObject('QV028','TRazCs');
	app1.getObject('QV027','PBKEMGN');
	app1.getObject('QV026','aGCGqtn');
	app1.getObject('QV025','jgwCL');
	app1.getObject('QV024','XTeJvA');
	app1.getObject('QV015','wPNzAs');
	app1.getObject('QV015-1','sbWYnWJ');
	app1.getObject('QV022','JPFbEnd');
	app1.getObject('QV020','rkwVxY');
	app1.getObject('QV023','JjBJxgy');
	app1.getObject('QV021','TKdybd');
	app1.getObject('QV019','AUWJAm');
	app1.getObject('QV018','NYTNcg');
	
	app1.getObject('QV013','yyfSDS');
	app1.getObject('QV012','XFQXs');
	app1.getObject('QV011','PBKEMGN');
	app1.getObject('QV010','aGCGqtn');
	
	app1.getObject('QV08','tcFyJG');
	app1.getObject('QV07','Wpnavd');
	app1.getObject('QV06','YPLWMax');
	
	app1.getObject('QV04','tAKj');
	app1.getObject('QV03','FKDAq');
	app1.getObject('QV02','xUDDwd');
	app1.getObject('QV01','FmxAkp');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	app.getObject('QV039','nfJbkU');
	app.getObject('QV038','mdjbT');
	app.getObject('QV037','kEKUb');
	app.getObject('QV036','pBCmz');
	app.getObject('QV035','QzMLpRb');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
		
	//create cubes and lists -- inserted here --
	if ( app ) {
		new AppUi( app );
	}

} );
