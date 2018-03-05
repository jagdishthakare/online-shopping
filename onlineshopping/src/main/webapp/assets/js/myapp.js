$(function(){
	// solving the active menu problem
	switch(menu){
	
	case 'Home':
		$('#home').addClass('active');
		break;
	
	case 'About Us':
		$('#about').addClass('active');
		break;
		
	case 'Contact Us':
		$('#contact').addClass('active');
		break;
		
	case 'All Products':
		$('#listProducts').addClass('active');
		break;
		
	default :
		if(menu == "Home") break;
		$('#listProducts').addClass('active');
	    $('#a_'+menu).addClass('active');
		break;
		
	}
	
	// code for jquery datatable

	
	var $table = $('#productListTable');
	
	//execute the below code only where we have this table
	if($table.length){
		
		console.log('Inside the table!');
		
		var jsonUrl = '';
		if (window.categoryId == '') {
			jsonUrl = window.contextRoot + '/json/data/all/products';
			
			console.log('Inside the table true !');
		} else {
			jsonUrl = window.contextRoot + '/json/data/category/'+ window.categoryId +'/products';
			
			console.log('Inside the table f f!');
		}

		
		
		$table
		        .DataTable( {
			
			lengthMenu: [ [3,5,10,-1], ['3 Records', '5 Records', '10 Records', 'ALL'] ],
			pageLength: 5,
			
			ajax : {
				url: jsonUrl,
				dataSrc: ''
			},
			
			columns : [
			            
			            {
			            	data: 'name'			            		
			            },
			            
			            {
			            	data: 'brand'
			            },
			            
			            {
			            	data: 'unitPrice',
			            	mRender: function(data, type, row) {
								return '&#8377; ' + data
							}
			            },
			            
			            {
			            	data: 'quantity'
			            },
			            
			            {
			            	data: 'id',
			            	mRender: function(data, type, row) {
			            		
			            		var str = '';
			            		str += '<a href="'+window.contextRoot+ '/show/'+data+'/product">View</a>';
			            		str += '<a href="'+window.contextRoot+ '/cart/add/'+data+'/product">Add to Cart</a>';
			            		
			            		return str;
			            		
			            	}
			            }		       
			            
			            ]
			 
						
		});
		
	}
	
	
	
}) 