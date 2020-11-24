/*Задан массив объектов студентов вида [{name: “Ivan”, estimate: 4, course: 1, active: true},{name: “Ivan”, 
  estimate: 3, course: 1, active: true},{name: “Ivan”, estimate: 2, course: 4, active: false},{name: “Ivan”, 
  estimate: 5, course: 2, active: true}] - заполнить его более большим количеством студентов. 
   Написать функцию которая возвращает: среднюю оценку студентов в разрезе каждого курса: 
  {1: 3.2, 2: 3.5, 3: 4.5, 4: 3, 5: 4.5} с учетом только тех студентов которые активны. 
   Посчитать количество неактивных студентов в разрезе каждого курса и общее количество неактивных студентов.*/
   
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

  function activeStudents (students){
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
        if(student.active && student.course === i ){
          amountStudents++;
          sumEstimate += student.estimate;
        }
      }
      result[i] = sumEstimate / amountStudents;
    }
    return result;
  }


  function amountInactiveStudents (students){
    let result = 0;
    for(student of students){
      if(!student.active){
        result++;
      }
    }
    return result;
  }

  function amountInactiveStudentsByCourse (students){
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
    return result;
  }