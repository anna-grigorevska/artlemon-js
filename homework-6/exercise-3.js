/*В задании из пятого урока, взять массив со студентами и вывести их на страницу согласно сверстанной HTML-структуре, 
рядом с каждым студентом вывести крестик - по нажатию на который студент будет удален
(удаляется как со страницы, так и с объекта), если был удален последний студент написать текстовое сообщение (“Студенты не найдены”)
*/

let students = [
  {
    name: 'Ivan',
    estimate: 4,
    course: 1,
    active: true,
    email: 'dfcafc@gmail.com',
    date: '23:00 01.12.2020'
  },
  {
    name: 'Ivan',
    estimate: 4,
    course: 3,
    active: true,
    email: 'dfcafc@gmail.com',
    date: '23:00 01.12.2020'
  },
  {
    name: 'Ivan',
    estimate: 2.9,
    course: 3,
    active: false,
    email: 'dfcafc@gmail.com',
    date: '23:00 01.12.2020'
  },
];

function draw(students){
  const tbody = document.getElementById('tbody');
  let studentsNotFound = document.getElementById('no-students');

  let template = '';

  for (i in students){
    const className = getClassByEstimation(students[i].estimate);
    let activeClassName = 'inactive';
    if(students[i].active){
      activeClassName = 'active';
    }
    template += `
      <tr class="${className}">
        <td> 
          <form onsubmit="changeName(this, ${i});return false;">
            <input value="${students[i].name}" name="name" type="text" maxlength="15" class="form-control"/>
            <span>Имя должно содержать только буквы</span>
          </form> 
        </td>
        <td>
          <form onsubmit="changeEstimate(this, ${i});return false;">
            <input value="${students[i].estimate}" name="estimate" type="text" class="form-control"/>
          </form> 
        </td>
        <td>
          <form onsubmit="changeCourse(this, ${i});return false;">
            <input value="${students[i].course}" name="course" type="text" class="form-control"/>
            <span>Введите целое число от 1 до 5</span>
          </form> 
        </td>
        <td>
          <form onsubmit="changeEmail(this, ${i});return false;">
            <input value="${students[i].email}" name="email" placeholder="@gmail.com" type="email" class="form-control"/>
            <span>Введите валидный email</span>
          </form> 
        </td>
        <td>${students[i].active}</td>
        <td class="${activeClassName}"> 
          <img src="./Circle_Green.png" alt="Circle_Green" class="active" onclick="toggleStatus(${i})"/>
          <img src="./Circle_Red.png" alt="Circle_Red" class="inactive" onclick="toggleStatus(${i})"/>
        </td>
        <td>${students[i].date}</td>
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

function averageRatingStudents(students){
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
      <td class="${getClassByEstimation(result[1])}">${result[1]}</td>
      <td class="${getClassByEstimation(result[2])}">${result[2]}</td>
      <td class="${getClassByEstimation(result[3])}">${result[3]}</td>
      <td class="${getClassByEstimation(result[4])}">${result[4]}</td>
      <td class="${getClassByEstimation(result[5])}">${result[5]}</td>      
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

function drawAll(){
  draw(students);
  amountInactiveStudents(students);
  averageRatingStudents(students);
  amountInactiveStudentsByCourse(students);
}

/*Добавить текстовое поле ввода - ввод имени студента, поле ввода для курса, 
оценки и checkbox для активности студента, по нажатии на кнопку 
“Добавить” - студент новый добавляется в список студентов*/

function validateName(name){
  const re = /^[a-zа-яё]+$/;
  return re.test(name.toLowerCase());
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

function addStudent(form){
  const name = form.name.value;
  const course = +form.course.value;
  const email = form.email.value;
  const errorEl = document.getElementById('error-add-student');
  let validation = '';
  if(!validateName(name)){
    validation += '<p>Имя должно содержать только буквы</p>';
  }
  if(!(course >= 1 && course <= 5)){
    validation += '<p>Введите курс от 1 до 5</p>';
  }
  if(!validateEmail(email)){
  validation += '<p>Введите валидный email</p>';
  }
  if(validation.length === 0){
    students.unshift({
      name: name,
      estimate: +form.estimate.value,
      course: course,
      email: email,
      active: form.active.checked
    });
    errorEl.innerHTML = '';
    drawAll();
  }else{
    errorEl.innerHTML = validation;
    form.classList.add('error');
  }
}


/*В ряде предыдущих заданий - выделять красным цветом тех студентов которые имеют оценку 3 и менее. 
которые от 3 до 4  - желтым и которые 4 и выше - зеленым.
*/

function getClassByEstimation(estimation){
  if(estimation <= 3){
    return 'red';
  } else if(estimation >= 3 && estimation <= 4){
    return 'yellow';
  } else {
    return 'green';
  }
}

/*Добавить для каждого студента иконку по нажатию на которую студент переводится в статус неактивный из активного и наоборот - 
при этом для двух состояний иконки тоже должны быть разными и изменять*/


function toggleStatus(index){
  if(students[index].active){
    students[index].active = false;
  } else {
    students[index].active = true;
  }
  draw(students);
}

function changeEstimate(form, index){
  students[index].estimate = +form.estimate.value;
  drawAll();

}

function changeName(form, index){
  const value = form.name.value;
  if(validateName(value)){
    students[index].name = value;
    drawAll();
  }else{
    form.classList.add('error');
  }
}

function changeCourse(form, index){
  const value =  +form.course.value;
  if(value >= 1 && value <= 5){
    students[index].course = value;
    drawAll();
  }else{
    form.classList.add('error');
  }
}

function changeEmail(form, index){
  const value = form.email.value;
  if(validateEmail(value)){
    students[index].email = value;
    drawAll();
  }else{
    form.classList.add('error');
  }
}



