document.addEventListener('DOMContentLoaded', () => {
    const numberTable = document.getElementById('number-table');

    for (let i = 0; i <= 999; i++) {
        const numberCell = document.createElement('div');
        numberCell.className = 'number-cell';
        numberCell.textContent = i.toString().padStart(3, '0');
        numberCell.id = `number-${i}`;
        numberTable.appendChild(numberCell);
    }

    fetch('specialNumbers.json')
        .then(response => response.json())
        .then(data => {
            const specialNumbers = data.specialNumbers || [];

            specialNumbers.forEach(number => {
                const numberCell = document.getElementById(`number-${number}`);
                if (numberCell) {
                    numberCell.classList.add('special-cell');
                }
            });
        })
        .catch(error => {
            console.error('Error fetching special numbers:', error);
        });
});
