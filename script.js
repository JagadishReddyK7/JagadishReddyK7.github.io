    
    function getElementDescriptor(element) {
        if (!element) return 'N/A';

        // Start with the HTML tag name (e.g., "H1", "A", "P")
        let descriptor = element.tagName;
        
        // Add the ID if it exists (e.g., "#about")
        if (element.id) {
            descriptor += `#${element.id}`;
        }
        
        // Add the class names if they exist, formatted like a CSS selector (e.g., ".content-card")
        if (element.className && typeof element.className === 'string') {
            descriptor += `.${element.className.split(' ').join('.')}`;
        }
        
        return descriptor;
    }

    /**
     * Logs a user event to the console in the required format.
     * @param {string} eventType The type of event ('view' or 'click').
     * @param {string} eventObject A string describing the event's target.
     */
    function logUserEvent(eventType, eventObject) {
        // Get a standardized timestamp (e.g., "2025-10-05T10:15:00.123Z")
        const timestamp = new Date().toISOString();
        
        // Print the final formatted string to the console
        console.log(
            `${timestamp}, type_of_event (${eventType}), event_object: ${eventObject}`
        );
    }

    // This is the main function that sets up the tracking.
    // It waits for the HTML document to be fully loaded before running.
    document.addEventListener('DOMContentLoaded', () => {
        // Q1 Implementation: Capture the initial page view.
        // This runs once when the page is loaded.
        logUserEvent('view', `page: ${document.location.pathname}`);

        // Q2, Q3, Q4, Q5 Implementation: Capture all click events across all HTML tags.
        // A single event listener on the `document` efficiently captures every click
        // on the page through a process called event bubbling.
        document.addEventListener('click', (event) => {
            // `event.target` is the specific element the user clicked on.
            const clickedElementDescriptor = getElementDescriptor(event.target);
            
            // Log the click event with details about the clicked element.
            logUserEvent('click', clickedElementDescriptor);
        });
    });