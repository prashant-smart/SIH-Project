
let college_data=localStorage.getItem('college_data');
college_data=JSON.parse(college_data);


var addrowsss = document.getElementById('addrows');
let parentContainer=document.getElementById('list');
let count=0;
addrowsss.textContent = "Add College";




addrowsss.addEventListener('click', () => {
	
	if (count == 0) {
        list.removeChild(info);			
    }
	// Create rowsss
	rowsss = document.createElement('div');
	document.getElementById('list').append(rowsss);
	rowsss.setAttribute('class', 'rowsss group');

	// Create Label
	label = document.createElement('label');
	rowsss.append(label);
	
	label.innerHTML += 'College Name';

	// Create Input Field
    let input_feild=document.createElement('input');
    input_feild.type = 'text';
    input_feild.setAttribute('list',`list-items-${count}`);
    input_feild.className='input';
    
    let datalist=document.createElement('datalist');
    datalist.id=`list-items-${count}`;
    datalist.class=`datalist`;
    let option = document.createElement("option");
        college_data.forEach((elm) => {
            option.value = elm.name;    
        });
    datalist.appendChild(option);
    count++;
	rowsss.append(input_feild);
	rowsss.append(datalist);

	// Create Delete Button
	deleteBtn = document.createElement('button');
	rowsss.append(deleteBtn);
	deleteBtn.setAttribute('class','delete');
    if(parentContainer.childElementCount==4){
        addrowsss.disabled=true;
        addrowsss.setAttribute('title','You can add atmost four colleges');
    }
	

	
});

// List Manager
var list = document.getElementById('list');

list.addEventListener('click', (event) => {
	if (event.target.tagName == 'BUTTON') {
		if (event.target.className == 'delete') {
			deleteBtn = event.target;
			deleterowsss = deleteBtn.parentNode;
			deleterowsss.remove(deleteBtn);
			
			rowssssAdded -= 1;
            count--;
			if (count == 0) {
				list.appendChild(info);			
			}
            if(parentContainer.childElementCount!=4){
                addrowsss.disabled=false;
                addrowsss.removeAttribute('title');
            }
			// console.log(rowssssAdded);
		}
	}
});

// rowsss Counter
var rowssssAdded = 0;
var info = document.createElement('div');

info.setAttribute('id','info');
info.style.textAlign = "center";		
info.textContent = "No College have been added.";
list.appendChild(info);	


