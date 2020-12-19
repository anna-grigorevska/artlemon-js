// function f(){

// }

// f.prototype.min = function(a, b){
//   if(a < b){
//     return a;
//   }

//   return b;
// };

// let a = new f();
// console.log(a.min(2, 3)); //2

// //ключевое слово class

// class Rectangle{
//   constructor(w, h){
//     this.width = w;
//     this.height = h;
//   }

//   perimetr(){
//     return(this.width + this.height) * 2;
//   }

//   square(){
//     return this.width * this.height;
//   }
// }

// let rect = new Rectangle(3, 7);
// console.log(rect.width); //3

// let rect2 = new Rectangle(4, 1);

// console.log(rect.perimetr()); //20
// console.log(rect2.perimetr()); //10

// console.log(rect.square()); //21
// console.log(rect2.square()); //4




// // function Rect(w, h){
// //     this._width = w;
// //     this._height = h;

// //     this.getWidth = function(){
// //         return this._width;
// //     }

// //     this.setWidth = function(w){
// //         this._width = w;
// //     }
// // } -- АНАЛОГ НИЖЕ


// class Rectangle2 {
//   constructor(w, h){
//     this.width = w;
//     this.height = h;
//   }

//   get width(){
//     return this._width;
//   }

//   set width(w){
//     this._width = w;
//   }

//   get height(){
//     return this._height;
//   }

//   set height(h){
//     this._height = h;
//   }

//   perimetr(){
//     return (this._width + this._height)*2;
//   }

//   square(){
//     return this._width * this._height;
//   }
// }

// let rec3 = new Rectangle2(3, 7);
// console.log(rec3); // Rectangle2 {_width: 3, _height: 7}


//запросы к серверу

//  POST, GET, DELETE, PUSH, 
/*
VER REQUEST_URI HTTP/VERSION

head1: value1
head2: value2
....

*/

//ОТПРАВКА ЗАПРОСА

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://evgeniychvertkov.com/api/student/', true);
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// xhr.setRequestHeader("X-Authorization-Token", "bde23f58-341b-11eb-a483-f1c3feb07438");

// xhr.send();

// xhr.onreadystatechange = function(){
//   if(xhr.readyState != 4) return;

//   if(xhr.status == 200){
//     console.log(JSON.parse(xhr.responseText));
//   }
// } //ВЫВЕЛИ СТУДЕНТОВ КОТОРЫЕ ЕСТЬ НА СЕРВЕРЕ В КОНСОЛЬ


function Student(){
  this.students = [];
  this.currentPage = 1;
}

Student.prototype.render = function(){
  let tbody = document.querySelector(".students tbody");
  tbody.innerHTML = "";

  let self = this;
  for(let i = 0; i < this.students.length; i++){
    let tr = document.createElement("TR");

    if(this.students[i].is_active){
      tr.className = "active";
    }else{
      tr.className = "not-active";
    }

    let td = document.createElement("TD");
    td.innerHTML = this.students[i].first_name;
    td.addEventListener("click", 
      (function(index, td){
        return function(event){
          let inputForClear = document.querySelector(".input");
          if(inputForClear !== null){
            let value = inputForClear.value;
            let cell = inputForClear.closest("td");
            cell.innerHTML = "<span>" + value + "</span>";
          }
          let input = document.createElement("input")
          input.type = "text";
          input.className = "input";
          input.value = self.students[index].first_name;
          td.innerHTML = "";
          td.appendChild(input);

          input.addEventListener("keydown", function(event){
            if(event.keyCode === 13){
              self.students[index].first_name = event.target.value;
              self.update(self.students[index]);
            }
          });

          input.focus();
        };
      }) (i, td));
    tr.appendChild(td);

    td = document.createElement("TD");
    td.innerHTML = this.students[i].course;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.innerHTML = this.students[i].estimate;
    tr.appendChild(td);

    td = document.createElement("TD");
    td.innerHTML = "Удалить";
    td.addEventListener("click", (function(index) {
      return function(event){
        self.removeOnServer(index);
        self.render();
      };
  })(i));
    tr.appendChild(td);

    tbody.appendChild(tr);
  }
};

Student.prototype.remove = function(index){
  this.students.splice(index, 1);
};

Student.prototype.removeOnServer = function(index){
  let self = this;

  function callback(response){
    if(!response.is_error){
      self.remove(index);
      self.render();
    }
  }

  this.send("DELETE", 'https://evgeniychvertkov.com/api/student/' + this.students[index].id + '/', callback, this.students[index]);
};

Student.prototype.send = function(method, url, callback, obj){
    let self = this;

    let data = obj || false;

    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);

    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.setRequestHeader("X-Authorization-Token", "bde23f58-341b-11eb-a483-f1c3feb07438");

    if(data){
        xhr.send(JSON.stringify(data));
    }else{
        xhr.send();
    }
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status == 200) {
            let response = JSON.parse(xhr.responseText);
            callback(response);
        }
    }
};

Student.prototype.getAll = function(){
  let self = this;

  function callback(response){
    if(!response.is_error){
      self.students = response.students;
      self.render();
    }
  }

  this.send("GET", 'https://evgeniychvertkov.com/api/student/', callback);

}; //соединили два функционала - по работе с сервером и обработку данных на стороне клиента

Student.prototype.add = function(student){
  let self = this;

  function callback(response){
    if(!response.is_error){
      self.students.push(response.student);
      self.render();
    }
  }

  this.send("POST", 'https://evgeniychvertkov.com/api/student/', callback, student);
};

Student.prototype.addPage = function() {
 this.currentPage++;
 this.render();
}

Student.prototype.update = function(student){
  let self = this;
  function callback(response){
      if(!response.is_error){
      self.render();
    }
  }
  this.send("PUT", 'https://evgeniychvertkov.com/api/student/', callback, student);
};

window.onload = function(){
  let student = new Student();
  student.getAll();
  let button = document.getElementById("add");

  button.addEventListener("click", function(event){
    let data = new FormData(event.target.closest("form"));
    student.add({
      first_name: data.get("first_name"),
      course: data.get("course"),
      estimate: data.get("estimate"),
      is_active: data.get("is_active") !== null
    });
  });
  document.addEventListener("scroll", function(event){
    let posY = window.scrollY;
    let height = document.body.scrollHeight;

    let procent = ((posY + window.innerHeight)/height) * 100;
    if(procent > 70){
      student.addPage();
    }
  });
};

