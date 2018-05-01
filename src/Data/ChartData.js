export const SchoolData =
  {
    'School 1':{
    	'Year 7': {
				english: {
				  all: [74, 75, 73, 75],
			    female: [74, 76, 75, 73],
				  male: [75, 74,72, 77]
				},
				maths: {
			    all: [73, 75, 73, 77],
				  female: [74, 77, 72, 78],
				  male: [72, 72, 75, 75]
				}, 
				science: {
				  all: [76, 78, 79, 75],
				  female: [74, 80, 81, 78],
				  male: [78, 75, 77, 73]
				}	
		  },
      'Year 9': {
	      english: {
				  all: [71, 73, 68, 71],
				  female: [68, 75, 69, 73],
				  male: [72, 71,69, 70]
				},
				maths: {
				  all: [69, 71, 68, 71],
				  female: [67,69, 66, 69],
				  male: [70, 67, 71, 74]
				}, 
				science: {
				  all: [72, 71, 71, 74],
				  female: [75, 69, 74, 75],
				  male: [70, 72, 69, 73]
				}		
	    }
		},
    
	  'School 2':{
	    'Year 7': {	  
				english: {
				  all: [71, 73, 68, 71],
				  female: [68, 75, 69, 73],
				  male: [72, 71,69, 70]
				},
				maths: {
				  all: [69, 71, 68, 71],
				  female: [67,69, 66, 69],
				  male: [70, 67, 71, 74]
				}, 
				science: {
				  all: [72, 71, 71, 74],
				  female: [75, 69, 74, 75],
				  male: [70, 72, 69, 73]
				}	
		  },  
		  'Year 9': {
		  	english: {
					  all: [74, 75, 73, 75],
				    female: [74, 76, 75, 73],
					  male: [75, 74,72, 77]
					},
				maths: {
			    all: [73, 75, 73, 77],
				  female: [74, 77, 72, 78],
				  male: [72, 72, 75, 75]
				}, 
				science: {
				  all: [76, 78, 79, 75],
				  female: [74, 80, 81, 78],
				  male: [78, 75, 77, 73]
				}	
	    }	  
	  } 
	}
   
export const StudentData = {
	'School 1':{
		schoolName: 'School 1',
	  data: [
	    {id:132, name: 'Dave', scores:[88, 86, 85, 82]},
	    {id:224, name: 'Sally', scores:[83, 82, 81, 87]},
	    {id:432, name: 'Bill', scores:[78, 81, 80, 81]},
	    {id:343, name: 'Roger', scores:[75, 76, 73, 74]},
	    {id:553, name: 'Wendy', scores:[77, 76, 72, 78]},
	    {id:566, name: 'Sam', scores:[91, 86, 88, 82]},
	    {id:347, name: 'Cathy', scores:[73, 69, 70, 74]}
    ]
  },
  'School 2': {
  	schoolName: 'School 2',
  	data: [
	    {id:531, name: 'Sven', scores:[86, 84, 83, 81]},
	    {id:456, name: 'Charlie', scores:[81, 80, 83, 84]},
	    {id:835, name: 'William', scores:[76, 83, 82, 80]},
	    {id:536, name: 'Rebecca', scores:[73, 75, 74, 72]},
	    {id:865, name: 'Laura', scores:[73, 77, 74, 76]},
	    {id:562, name: 'Sara', scores:[90, 87, 85, 84]},
	    {id:256, name: 'Saul', scores:[72, 67, 72, 73]}
    ]
  }
}

export const SchoolGroups = {
	'School 1': {
		
		groups: [
		  {
		  	school: 'School 1',
		    groupName: 'group1',
		    groupData: [132, 224, 566],
		  },
		  { 
		  	school: 'School 1',
		  	groupName: 'group2',
		  	groupData: [347, 343, 553]
		  }
		]
  },
  'School 2': {
  	
		groups: [
		  {
		  	school: 'School 2',
		    groupName: 'boys',
		    groupData: [531, 456, 835, 256],
		  },
		  { 
		  	school: 'School 2',
		  	groupName: 'girls',
		  	groupData: [865, 562, 536]
		  }
		]
  }
}

export const RegionData = {
 
  English: {
		State: [72, 74, 73, 75],
		School1: [64, 62, 63, 63],
		School2: [73, 72, 72, 73],
    School3: [74, 76, 76, 77],
		School4: [71, 70, 72, 73],
		School5: [74, 76,76, 77]

  },

  Maths: {
		State: [72, 71, 74, 73],
		School1: [65, 67, 66, 66],
		School2: [72, 71, 73, 74],
    School3: [76, 75, 75, 73],
		School4: [69, 68, 71, 72],
		School5: [77, 75, 74, 76]
},

  Science: {
	  State: [71, 72, 70, 73],
		School1: [68, 70, 69, 70],
		School2: [72, 71,69, 71],
		School3: [71, 70, 68, 69],
		School4: [69, 68, 71, 73],
		School5: [73, 74, 75, 73]		
  }
} 
