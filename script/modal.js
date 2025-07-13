// Image Modal JavaScript for Enhanced Portfolio

function openModal(imageSrc, caption) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalLoading = document.getElementById('modalLoading');
  
  // Show modal and loading
  modal.classList.add('active');
  modalLoading.style.display = 'block';
  modalImage.style.display = 'none';
  modalCaption.style.display = 'none';
  
  // Prevent body scroll when modal is open
  document.body.style.overflow = 'hidden';
  
  // Load image
  const img = new Image();
  img.onload = function() {
    modalImage.src = imageSrc;
    modalCaption.textContent = caption;
    
    // Hide loading and show content
    modalLoading.style.display = 'none';
    modalImage.style.display = 'block';
    modalCaption.style.display = 'block';
  };
  
  img.onerror = function() {
    modalLoading.style.display = 'none';
    modalCaption.textContent = 'Error loading image';
    modalCaption.style.display = 'block';
  };
  
  img.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  const modalLoading = document.getElementById('modalLoading');
  
  modal.classList.remove('active');
  
  // Reset modal content
  modalImage.src = '';
  modalCaption.textContent = '';
  modalLoading.style.display = 'none';
  
  // Restore body scroll
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal when clicking on the image itself
  modalImage.addEventListener('click', function(e) {
    closeModal();
  });
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Prevent scrolling when modal is open
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('imageModal');
  
  // Prevent scroll when modal is active
  modal.addEventListener('wheel', function(e) {
    if (modal.classList.contains('active')) {
      e.preventDefault();
    }
  });
  
  // Prevent touch scrolling on mobile
  modal.addEventListener('touchmove', function(e) {
    if (modal.classList.contains('active')) {
      e.preventDefault();
    }
  });
});

// Add smooth transitions for better UX
document.addEventListener('DOMContentLoaded', function() {
  const imageContainers = document.querySelectorAll('.image-container');
  
  imageContainers.forEach(container => {
    const img = container.querySelector('img');
    
    // Add loading state
    img.addEventListener('load', function() {
      container.classList.add('loaded');
    });
    
    // Handle image loading errors
    img.addEventListener('error', function() {
      container.classList.add('error');
      console.warn('Failed to load image:', img.src);
    });
  });
});

// Optional: Add keyboard navigation within modal
document.addEventListener('keydown', function(e) {
  const modal = document.getElementById('imageModal');
  if (modal.classList.contains('active')) {
    switch(e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'Enter':
      case ' ':
        closeModal();
        break;
    }
  }
});

// Add double-click to close functionality
document.addEventListener('DOMContentLoaded', function() {
  const modalImage = document.getElementById('modalImage');
  
  modalImage.addEventListener('dblclick', function(e) {
    closeModal();
  });
});