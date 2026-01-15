'use strict';

const list = document.querySelector('ul');

function sortList() {
  const employees = [...list.children];

  employees.sort(
    (a, b) =>
      Number(b.dataset.salary.replace('$', '')) -
      Number(a.dataset.salary.replace('$', '')),
  );

  employees.forEach((employee) => list.append(employee));
}

function getEmployees() {
  return [...list.children].map((employee) => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: Number(employee.dataset.salary.replace('$', '')),
    age: employee.dataset.age,
  }));
}

sortList(list);
getEmployees(list);
