document.addEventListener('DOMContentLoaded', () => {
    const exploreButton = document.getElementById('explore-btn');
    const quickButton = document.getElementById('quick-btn');
    const dynamicContent = document.getElementById('dynamic-content');
    const optionsContainer = document.getElementById('options-container');

    if (exploreButton && quickButton) {
        exploreButton.addEventListener('click', () => showFileTypeOptions('Explore'));
        quickButton.addEventListener('click', () => showFileTypeOptions('Quick'));
    }

    function showFileTypeOptions(type) {
        optionsContainer.querySelectorAll('.option-button').forEach(button => {
            button.classList.remove('active');
        });
        
        if (type === 'Explore') {
            exploreButton.classList.add('active');
        } else {
            quickButton.classList.add('active');
        }

        dynamicContent.innerHTML = ''; // Clear previous options
        dynamicContent.classList.remove('hidden');

        const dropButton1 = document.createElement('a');
        dropButton1.href = '#';
        dropButton1.textContent = `Drop ${type} File Type 1`;
        dropButton1.className = 'dynamic-option';

        const dropButton2 = document.createElement('a');
        dropButton2.href = '#';
        dropButton2.textContent = `Drop ${type} File Type 2`;
        dropButton2.className = 'dynamic-option';

        dynamicContent.appendChild(dropButton1);
        dynamicContent.appendChild(dropButton2);
    }
});
