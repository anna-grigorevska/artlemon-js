/*В задании из пятого урока, взять массив со студентами и вывести их на страницу согласно сверстанной HTML-структуре, 
рядом с каждым студентом вывести крестик - по нажатию на который студент будет удален
(удаляется как со страницы, так и с объекта), если был удален последний студент написать текстовое сообщение (“Студенты не найдены”)
*/

let students = [
  {
    name: 'Ivan',
    estimate: 4,
    course: 1,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 4,
    course: 3,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 2.9,
    course: 3,
    active: false
  },
  {
    name: 'Ivan',
    estimate: 3.4,
    course: 3,
    active: false
  },
  {
    name: 'Ivan',
    estimate: 4.7,
    course: 3,
    active: true
  },
  {
    name: 'Ivan', 
    estimate: 3,
    course: 1,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 2,
    course: 4,
    active: false
  },
  {
    name: 'Ivan',
    estimate: 5,
    course: 2,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 2,
    course: 1,
    active: false
  },
  {
    name: 'Ivan', 
    estimate: 5,
    course: 5,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 3.5,
    course: 1,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 3.1,
    course: 4,
    active: false
  },
  {
    name: 'Ivan',
    estimate: 4.4,
    course: 4,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 2.4,
    course: 2,
    active: false
  },
  {
    name: 'Ivan',
    estimate: 2.7,
    course: 5,
    active: false
  },
  {
    name: 'Ivan',
    estimate: 4.9,
    course: 5,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 4.2,
    course: 4,
    active: true
  },
  {
    name: 'Ivan',
    estimate: 4,
    course: 5,
    active: true
  }
];

function draw(students){
  const tbody = document.getElementById('tbody');
  let studentsNotFound = document.getElementById('no-students');

  let template = '';

  for (i in students){
    template += `
      <tr>
        <td>${students[i].name}</td>
        <td>${students[i].estimate}</td>
        <td>${students[i].course}</td>
        <td>${students[i].active}</td>
        <td><button class="btn-delete" onclick="deleteStudent(${i})">+</button></td>      
      </tr>
    `;
  }

  if(!students.length){
    studentsNotFound.classList.add('show');
  }else{
    studentsNotFound.classList.remove('show');
  }

  tbody.innerHTML = template;
}

function deleteStudent(index){
  students.splice(index, 1);

  draw(students);
  amountInactiveStudents(students);
  averageRatingStudents(students);
  amountInactiveStudentsByCourse(students);
}

draw(students);


/*Вывести статистику средних оценок в разрезе курса и статистику по количеству неактивных
 студентов в разрезе каждого курса и общее количество неактивных студентов*/

function averageRatingStudents (students){
  let tbodyEstimate = document.getElementById('tbody-estimate');
  let result = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };
  for (let i = 1; i <= 5; i++){
    let amountStudents = 0;
    let sumEstimate = 0;
    for(student of students){
      if(student.course === i ){
        amountStudents++;
        sumEstimate += student.estimate;
      }
    }
    result[i] = (sumEstimate / amountStudents).toFixed(2);
  }
  tbodyEstimate.innerHTML = `
    <tr>
      <td>${result[1]}</td>
      <td>${result[2]}</td>
      <td>${result[3]}</td>
      <td>${result[4]}</td>
      <td>${result[5]}</td>      
    </tr>
  `;
}


function amountInactiveStudents(students){
  let amountInactiveStudents = document.getElementById('amountInactiveStudents');
  let result = 0;

  for(student of students){
    if(!student.active){
      result++;
    }
  }
  amountInactiveStudents.innerText = result;
}


function amountInactiveStudentsByCourse(students){
  let tbodyInactive = document.getElementById('tbody-inactive');
  let result = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  };
  for(let i = 1; i <= 5; i++){
    let amountStudents = 0;
    for(student of students){
      if(!student.active && student.course === i){
        amountStudents++;
      }
    }
    result[i] = amountStudents;
  }
  tbodyInactive.innerHTML = `
    <tr>
      <td>${result[1]}</td>
      <td>${result[2]}</td>
      <td>${result[3]}</td>
      <td>${result[4]}</td>
      <td>${result[5]}</td>      
    </tr>
  `;
}

amountInactiveStudents(students);
averageRatingStudents(students);
amountInactiveStudentsByCourse(students);

/*Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса, 
оценки и checkbox для активности студента, по нажатии на кнопку 
“Добавить” - студент новый добавляется в список студентов*/

function addStudent(form){
  students.unshift({
    name: form.name.value,
    estimate: form.estimate.value,
    course: form.course.value,
    active: form.active.checked
  });
  draw(students);
  amountInactiveStudents(students);
  averageRatingStudents(students);
  amountInactiveStudentsByCourse(students);
}