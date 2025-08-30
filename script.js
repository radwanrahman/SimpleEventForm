const form = document.getElementById('regForm');
const tableBody = document.getElementById('dataTable');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  // Get values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const event = document.getElementById('event').value;
  const date = document.getElementById('date').value;

  // Create new row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td class="border px-3 py-2">${name}</td>
    <td class="border px-3 py-2">${email}</td>
    <td class="border px-3 py-2">${phone}</td>
    <td class="border px-3 py-2">${age}</td>
    <td class="border px-3 py-2">${gender}</td>
    <td class="border px-3 py-2">${event}</td>
    <td class="border px-3 py-2">${date}</td>
  `;

  // Append row
  tableBody.appendChild(row);

  // Reset form
  form.reset();
});
