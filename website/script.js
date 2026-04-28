// SDLC Playbook - Main JavaScript
// Interactive functionality for the playbook website

// Global state
let selectedRoles = []; // Array to store multiple selected roles
let currentPhase = '';

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button based on scroll position
function handleScrollButton() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (!scrollBtn) return;
    
    if (window.scrollY > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
}

// Add smooth reveal animations
function addRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    // Observe task cards
    const cards = document.querySelectorAll('.task-card, .category-section');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    // Hide loading screen after animation
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContainer = document.getElementById('main-container');
        
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        if (mainContainer) {
            mainContainer.classList.remove('hidden');
        }
    }, 3000);
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Initialize scroll button handler
    window.addEventListener('scroll', handleScrollButton);
});

// Initialize all event listeners
function initializeEventListeners() {
    const phaseSelect = document.getElementById('phase-select');
    const launchBtn = document.getElementById('launch-btn');
    
    if (phaseSelect) {
        phaseSelect.addEventListener('change', handlePhaseChange);
    }
    
    if (launchBtn) {
        launchBtn.addEventListener('click', launchPlaybook);
    }
}

// Handle phase selection change
function handlePhaseChange(event) {
    currentPhase = event.target.value;
    updateLaunchButton();
}

// Update launch button state (only needs phase)
function updateLaunchButton() {
    const launchBtn = document.getElementById('launch-btn');
    if (!launchBtn) return;
    
    if (currentPhase) {
        launchBtn.style.opacity = '1';
        launchBtn.style.cursor = 'pointer';
        launchBtn.disabled = false;
    } else {
        launchBtn.style.opacity = '0.6';
        launchBtn.style.cursor = 'not-allowed';
        launchBtn.disabled = true;
    }
}

// Launch playbook - show role selection
function launchPlaybook() {
    if (!currentPhase) {
        alert('Please select a phase to continue.');
        return;
    }
    
    // Update phase dropdown with current selection
    const phaseSelectInline = document.getElementById('phase-select-inline');
    if (phaseSelectInline) {
        phaseSelectInline.value = currentPhase;
    }
    
    // Switch to playbook section
    showSection('playbook-section');
    
    // Reset role selection
    selectedRoles = [];
    clearAllRoles();
    
    // Load content with all roles by default
    loadPhaseContent(currentPhase, selectedRoles);
    
    // Add reveal animations after content loads
    setTimeout(() => {
        addRevealAnimations();
    }, 100);
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle role dropdown
function toggleRoleDropdown() {
    const dropdown = document.getElementById('roleDropdown');
    if (!dropdown) return;
    
    const isVisible = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';
}

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
    const dropdown = document.getElementById('roleDropdown');
    const btn = document.getElementById('roleSelectBtn');
    if (dropdown && btn && !event.target.closest('.multi-select-wrapper')) {
        dropdown.style.display = 'none';
    }
});

// Update role selection (real-time)
function updateRoleSelection() {
    const checkboxes = document.querySelectorAll('.multi-select-options input[type="checkbox"]');
    selectedRoles = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);
    
    updateSelectedRolesText();
}

// Update the button text to show selected roles
function updateSelectedRolesText() {
    const textElement = document.getElementById('selectedRolesText');
    if (!textElement) return;
    
    if (selectedRoles.length === 0) {
        textElement.textContent = 'Select Roles...';
    } else if (selectedRoles.length === 1) {
        const roleLabels = {
            'product-owner': 'Product Owner',
            'scrum-master': 'Scrum Master',
            'tech-lead': 'Tech Lead',
            'developer': 'Developer',
            'qa-engineer': 'QA Engineer',
            'devops-engineer': 'DevOps Engineer',
            'security-engineer': 'Security Engineer',
            'ux-designer': 'UX Designer',
            'business-analyst': 'Business Analyst',
            'project-manager': 'Project Manager'
        };
        textElement.textContent = roleLabels[selectedRoles[0]] || selectedRoles[0];
    } else {
        textElement.textContent = `${selectedRoles.length} roles selected`;
    }
}

// Clear all role selections
function clearAllRoles() {
    const checkboxes = document.querySelectorAll('.multi-select-options input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    selectedRoles = [];
    updateSelectedRolesText();
}

// Apply role filter
function applyRoleFilter() {
    if (!currentPhase) {
        console.warn('No phase selected');
        return;
    }
    
    toggleRoleDropdown();
    loadPhaseContent(currentPhase, selectedRoles);
}

// Handle phase change inside playbook section
function handlePhaseChangeInPlaybook() {
    const phaseSelectInline = document.getElementById('phase-select-inline');
    if (phaseSelectInline) {
        currentPhase = phaseSelectInline.value;
        
        // Reload content with new phase and current role selection
        loadPhaseContent(currentPhase, selectedRoles);
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Load phase content with role filtering
function loadPhaseContent(phaseId, selectedRolesArray) {
    const phaseData = playbookData[phaseId];
    const phaseContent = document.getElementById('phase-content');
    
    if (!phaseContent) {
        console.error('Phase content container not found');
        return;
    }
    
    if (!phaseData) {
        phaseContent.innerHTML = '<div class="no-tasks-message"><p>Phase data not found.</p></div>';
        return;
    }
    
    // Build HTML content
    let html = `
        <div class="phase-header-section">
            <h2 class="phase-title">${phaseData.title}</h2>
            <p class="phase-description">${phaseData.description}</p>
        </div>
    `;
    
    // Filter and display categories
    phaseData.categories.forEach(category => {
        // Filter tasks based on selected roles
        let tasks = category.tasks;
        
        // If roles are selected, filter to show only tasks matching any selected role
        if (selectedRolesArray && selectedRolesArray.length > 0) {
            // Collect all role names for all selected roles
            let allRoleNames = [];
            selectedRolesArray.forEach(roleId => {
                const roleNames = roleMapping[roleId];
                if (roleNames && roleNames.length > 0) {
                    allRoleNames = allRoleNames.concat(roleNames);
                }
            });
            
            // Filter tasks that match any of the role names
            if (allRoleNames.length > 0) {
                tasks = tasks.filter(task => allRoleNames.includes(task.responsible));
            }
        }
        
        // Only show category if it has tasks for selected roles or is a diagram
        if (tasks.length > 0 || category.isDiagram) {
            html += `
                <div class="category-section">
                    <div class="category-header">
                        <h3 class="category-title">${category.name}</h3>
                        ${!category.isDiagram ? `<span class="task-count">${tasks.length} Task${tasks.length !== 1 ? 's' : ''}</span>` : ''}
                    </div>
            `;
            
            // Special handling for diagram sections
            if (category.isDiagram) {
                html += `
                    <div class="diagram-container">
                        <img src="images/safe-lean-startup-cycle.png" 
                             alt="SAFe Lean Startup Cycle" 
                             class="phase-diagram"
                             onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'padding:40px; text-align:center; color:#008DFC;\\'><h3>📊 SAFe Lean Startup Cycle Diagram</h3><p style=\\'margin-top:20px; color:#C0C0C0;\\'>Image not found. Please save the diagram as:<br/><strong>safe-lean-startup-cycle.png</strong><br/>in the <strong>website/images/</strong> folder.</p></div>';" />
                    </div>
                `;
                
                // Show diagram outcome below image
                if (category.diagramOutcome) {
                    html += `
                        <div class="diagram-outcome">
                            <p>${escapeHtml(category.diagramOutcome)}</p>
                        </div>
                    `;
                }
            }
            // Handle grouped tasks with shared outcome
            else if (category.groupedOutcome) {
                html += `
                    <div class="grouped-outcome-banner">
                        <div class="outcome-icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                            </svg>
                        </div>
                        <div class="outcome-content">
                            <h4 class="outcome-label">Outcome</h4>
                            <p class="outcome-text">${escapeHtml(category.groupedOutcome)}</p>
                        </div>
                    </div>
                    <div class="tasks-grid">
                `;
                
                tasks.forEach(task => {
                    html += createTaskCard(task);
                });
                
                html += `</div>`;
            }
            // Regular tasks with individual outcomes
            else {
                html += `<div class="tasks-grid">`;
                
                tasks.forEach(task => {
                    html += createTaskCard(task);
                });
                
                html += `</div>`;
            }
            
            html += `</div>`;
        }
    });
    
    if (selectedRolesArray && selectedRolesArray.length > 0 && !html.includes('category-section')) {
        html += `
            <div class="no-tasks-message">
                <p>No tasks found for the selected roles in this phase.</p>
                <button onclick="clearAllRoles(); applyRoleFilter();" 
                        class="launch-button" style="max-width: 300px; margin: 20px auto;">
                    <span class="btn-text">VIEW ALL TASKS</span>
                </button>
            </div>
        `;
    }
    
    // Show loading skeleton briefly for better UX
    phaseContent.innerHTML = `
        <div class="skeleton-card skeleton">
            <div class="skeleton-title skeleton"></div>
            <div class="skeleton-text skeleton"></div>
            <div class="skeleton-text skeleton"></div>
        </div>
        <div class="skeleton-card skeleton">
            <div class="skeleton-title skeleton"></div>
            <div class="skeleton-text skeleton"></div>
            <div class="skeleton-text skeleton"></div>
        </div>
    `;
    
    // Set actual content after brief delay for smoother experience
    setTimeout(() => {
        phaseContent.innerHTML = html;
        
        // Add reveal animations to new content
        setTimeout(() => {
            addRevealAnimations();
        }, 50);
    }, 200);
}

// Create task card HTML
function createTaskCard(task) {
    // Safely escape user content
    const safeTitle = escapeHtml(task.title || 'Untitled Task');
    const safeResponsible = escapeHtml(task.responsible || 'Not assigned');
    const safeOutcome = task.outcome ? escapeHtml(task.outcome) : '';
    const safeDescription = task.description ? escapeHtml(task.description) : '';
    
    // Toolkit data
    const hasToolkit = task.toolkit && task.toolkit.file;
    const toolkitData = hasToolkit ? JSON.stringify(task.toolkit).replace(/"/g, '&quot;') : '';
    
    return `
        <div class="task-card">
            <div class="task-card-main">
                <div class="task-header">
                    <div class="task-title">${safeTitle}</div>
                    ${hasToolkit ? `
                    <button class="toolkit-badge" onclick='openToolkitViewer(${toolkitData})' title="View Toolkit">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 3V7M15 3V7M4 11H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>Toolkit</span>
                    </button>
                    ` : ''}
                </div>
                <div class="task-meta">
                    <div class="task-meta-item">
                        <svg class="meta-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M2 14C2 11.2386 4.68629 9 8 9C11.3137 9 14 11.2386 14 14" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        <span class="task-label">Responsible:</span>
                        <span class="task-value">${safeResponsible}</span>
                    </div>
                    ${safeOutcome ? `
                    <div class="task-meta-item task-outcome-meta">
                        <svg class="meta-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2L9.5 6L14 6.5L10.5 10L11.5 14.5L8 12L4.5 14.5L5.5 10L2 6.5L6.5 6L8 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                        </svg>
                        <span class="task-label">Outcome:</span>
                        <span class="task-value">${safeOutcome}</span>
                    </div>
                    ` : ''}
                </div>
                ${safeDescription ? `
                <div class="task-description">
                    <p>${safeDescription}</p>
                </div>
                ` : ''}
            </div>
        </div>
    `;
}

// Open task details in modal
function openTaskModal(cardElement, taskId) {
    if (!cardElement) {
        console.error('Invalid card element');
        return;
    }
    
    try {
        const taskTitleElement = cardElement.querySelector('.task-title');
        const responsibleElement = cardElement.querySelector('.task-meta-item:nth-child(1) .task-value');
        const outcomeElement = cardElement.querySelector('.task-outcome-meta .task-value');
        const descriptionElement = cardElement.querySelector('.task-description p');
        
        if (!taskTitleElement || !responsibleElement) {
            console.error('Missing required task elements');
            return;
        }
        
        const taskTitle = escapeHtml(taskTitleElement.textContent);
        const responsible = escapeHtml(responsibleElement.textContent);
        const outcome = outcomeElement ? escapeHtml(outcomeElement.textContent) : '';
        const description = descriptionElement ? escapeHtml(descriptionElement.textContent) : '';
    
    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" id="taskModal" onclick="closeTaskModal(event)">
            <div class="modal-container" onclick="event.stopPropagation()">
                <div class="modal-header">
                    <div class="modal-title-section">
                        <h2 class="modal-title">${taskTitle}</h2>
                        ${description ? `<p class="modal-description">${description}</p>` : ''}
                    </div>
                    <button class="modal-close" onclick="closeTaskModal()" aria-label="Close modal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
                
                <div class="modal-meta">
                    <div class="modal-meta-item">
                        <svg class="meta-icon" width="18" height="18" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.5"/>
                            <path d="M2 14C2 11.2386 4.68629 9 8 9C11.3137 9 14 11.2386 14 14" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        <span class="modal-label">Responsible:</span>
                        <span class="modal-value">${responsible}</span>
                    </div>
                    ${outcome ? `
                    <div class="modal-meta-item">
                        <svg class="meta-icon" width="18" height="18" viewBox="0 0 16 16" fill="none">
                            <path d="M8 2L9.5 6L14 6.5L10.5 10L11.5 14.5L8 12L4.5 14.5L5.5 10L2 6.5L6.5 6L8 2Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
                        </svg>
                        <span class="modal-label">Outcome:</span>
                        <span class="modal-value">${outcome}</span>
                    </div>
                    ` : ''}
                </div>
                
                <div class="modal-content">
                    <div class="details-grid">
                        <div class="detail-card">
                            <div class="detail-header">
                                <svg class="detail-icon" width="22" height="22" viewBox="0 0 20 20" fill="none">
                                    <path d="M9 5L7 7L5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="10" cy="10" r="8" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M10 10L10 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                    <circle cx="10" cy="7" r="0.5" fill="currentColor"/>
                                </svg>
                                <h4>Best Practices</h4>
                            </div>
                            <div class="detail-content">
                                <p class="placeholder-text">Content to be added</p>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-header">
                                <svg class="detail-icon" width="22" height="22" viewBox="0 0 20 20" fill="none">
                                    <rect x="4" y="3" width="12" height="14" rx="1" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M7 7H13M7 10H13M7 13H10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <h4>Tasks to be Done</h4>
                            </div>
                            <div class="detail-content">
                                <p class="placeholder-text">Content to be added</p>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-header">
                                <svg class="detail-icon" width="22" height="22" viewBox="0 0 20 20" fill="none">
                                    <rect x="3" y="4" width="14" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M7 9L9 11L13 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <h4>Tools Required</h4>
                            </div>
                            <div class="detail-content">
                                <p class="placeholder-text">Content to be added</p>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-header">
                                <svg class="detail-icon" width="22" height="22" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="7" r="3" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M4 17C4 14.2386 6.68629 12 10 12C13.3137 12 16 14.2386 16 17" stroke="currentColor" stroke-width="1.5"/>
                                </svg>
                                <h4>POC / Contact Points</h4>
                            </div>
                            <div class="detail-content">
                                <p class="placeholder-text">Content to be added</p>
                            </div>
                        </div>
                        
                        <div class="detail-card">
                            <div class="detail-header">
                                <svg class="detail-icon" width="22" height="22" viewBox="0 0 20 20" fill="none">
                                    <path d="M8 3C6.89543 3 6 3.89543 6 5V15C6 16.1046 6.89543 17 8 17H15C16.1046 17 17 16.1046 17 15V7L13 3H8Z" stroke="currentColor" stroke-width="1.5"/>
                                    <path d="M13 3V7H17" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
                                    <path d="M9 11H14M9 13H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                                </svg>
                                <h4>Links / URLs</h4>
                            </div>
                            <div class="detail-content">
                                <p class="placeholder-text">Content to be added</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Trigger animation
    setTimeout(() => {
        const modal = document.getElementById('taskModal');
        if (modal) {
            modal.classList.add('active');
        }
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    } catch (error) {
        console.error('Error opening task modal:', error);
    }
}

// Close task modal
function closeTaskModal(event) {
    // If event is provided and it's not clicking on the overlay, ignore
    if (event && event.target.classList && !event.target.classList.contains('modal-overlay')) {
        return;
    }
    
    const modal = document.getElementById('taskModal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Close modal on Escape key and add global keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeTaskModal();
        // Also close dropdown if open
        const dropdown = document.getElementById('roleDropdown');
        if (dropdown && dropdown.style.display !== 'none') {
            toggleRoleDropdown();
        }
    }
    
    // Ctrl/Cmd + H for Home
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
        e.preventDefault();
        showHome();
    }
    
    // Ctrl/Cmd + B for About (B for "about/Brand")
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        showAbout();
    }
});

// Navigation functions
function showHome() {
    // Reset state when going home
    selectedRoles = [];
    currentPhase = '';
    
    showSection('home-section');
}

function showAbout() {
    showSection('about-section');
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toolkit Viewer Functions
function openToolkitViewer(toolkit) {
    const modalHTML = `
        <div class="toolkit-modal-overlay" id="toolkitModal" onclick="closeToolkitViewer(event)">
            <div class="toolkit-modal-container" onclick="event.stopPropagation()">
                <div class="toolkit-modal-header">
                    <div class="toolkit-header-content">
                        <svg class="toolkit-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
                            <path d="M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9 3V7M15 3V7M4 11H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div>
                            <h2 class="toolkit-title">${escapeHtml(toolkit.name)}</h2>
                            <p class="toolkit-description">${escapeHtml(toolkit.description || '')}</p>
                        </div>
                    </div>
                    <div class="toolkit-header-actions">
                        <a href="${toolkit.file}" download class="toolkit-download-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 15V3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Download</span>
                        </a>
                        <button class="toolkit-close" onclick="closeToolkitViewer()" aria-label="Close">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
                
                <div class="toolkit-preview" id="toolkitPreview">
                    <div class="toolkit-preview-loading">
                        <div class="loading-spinner"></div>
                        <p>Loading document preview...</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Animate in
    setTimeout(() => {
        const modal = document.getElementById('toolkitModal');
        if (modal) {
            modal.style.opacity = '1';
        }
    }, 10);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Load and render the Word document
    loadWordDocument(toolkit.file);
}

// Load and render Word document using Mammoth.js
function loadWordDocument(filePath) {
    const previewContainer = document.getElementById('toolkitPreview');
    
    // Fetch the document file
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Document not found');
            }
            return response.arrayBuffer();
        })
        .then(arrayBuffer => {
            // Convert Word document to HTML using Mammoth
            return mammoth.convertToHtml({ arrayBuffer: arrayBuffer }, {
                styleMap: [
                    "p[style-name='Heading 1'] => h1:fresh",
                    "p[style-name='Heading 2'] => h2:fresh",
                    "p[style-name='Heading 3'] => h3:fresh",
                    "p[style-name='Title'] => h1.document-title:fresh",
                    "b => strong"
                ]
            });
        })
        .then(result => {
            // Display the rendered HTML
            previewContainer.innerHTML = `
                <div class="toolkit-document-content">
                    ${result.value}
                </div>
            `;
            
            // Log any warnings
            if (result.messages.length > 0) {
                console.log('Mammoth conversion messages:', result.messages);
            }
        })
        .catch(error => {
            console.error('Error loading document:', error);
            previewContainer.innerHTML = `
                <div class="toolkit-preview-error">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" stroke-width="2"/>
                        <line x1="12" y1="8" x2="12" y2="12" stroke-width="2" stroke-linecap="round"/>
                        <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                    <h3>Unable to Load Document</h3>
                    <p>The document file could not be found or loaded. Please download the template to view it.</p>
                </div>
            `;
        });
}

function closeToolkitViewer(event) {
    if (event && event.target !== event.currentTarget && event.type !== 'click') {
        return;
    }
    
    const modal = document.getElementById('toolkitModal');
    if (modal) {
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Keyboard shortcuts for toolkit viewer
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const toolkitModal = document.getElementById('toolkitModal');
        if (toolkitModal) {
            closeToolkitViewer();
        }
    }
});

// Console log for debugging
console.log('%c SDLC Playbook Loaded ', 'background: #008DFC; color: #FFFFFF; font-size: 16px; font-weight: bold; padding: 10px;');
console.log('IT @ MBRDI - Digital Engineering Excellence');

