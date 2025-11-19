        document.getElementById('studentForm').addEventListener('submit', addStudent);

        function addStudent(event) {
            event.preventDefault(); 
            let studentName = document.getElementById('studentName').value.trim();
            if (studentName === '') {
                alert('Please enter a student name');
                return;
            }
            let li = document.createElement('li');
            li.classList.add('studentItem');

            let span = document.createElement('span');
            span.textContent = studentName;

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('btnEdit');
            editButton.addEventListener('click', function() {
                editStudent(li, span);
            });

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('btnDelete');
            deleteButton.addEventListener('click', function() {
                deleteStudent(li);
            });

            li.appendChild(span);
            li.appendChild(editButton);
            li.appendChild(deleteButton);

            document.getElementById('studentList').appendChild(li);
            document.getElementById('studentName').value = '';
        }

        function deleteStudent(studentElement) {
            studentElement.remove();
        }
        function editStudent(studentElement, studentNameElement) {
            let newName = prompt('Enter the new name:', studentNameElement.textContent);
            if (newName !== null && newName.trim() !== '') {
                studentNameElement.textContent = newName.trim();
            }
        }
        function changeListStyle() {
            let students = document.querySelectorAll('.studentItem');
            students.forEach(student => {
                student.classList.toggle('highlight');
            });
        }

        let changeStyleButton = document.createElement('button');
        changeStyleButton.textContent = 'Highlight Students';
        changeStyleButton.style.marginTop = '20px';
        changeStyleButton.style.padding = '10px';
        changeStyleButton.addEventListener('click', changeListStyle);
        document.body.appendChild(changeStyleButton);