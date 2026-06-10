// Mobile Drawer Menu Logic
function toggleDrawer() {
    const drawer = document.getElementById('drawerMenu');
    const overlay = document.getElementById('overlay');
    if (drawer && overlay) {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Order Form Submission Handling
function handleOrderSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('customerName').value;
    const phone = document.getElementById('customerPhone').value;
    const packageType = document.getElementById('packageType').value;
    const details = document.getElementById('deliveryDetails').value;

    if (!name || !phone || !details) {
        alert('እባክዎን ሁሉንም መረጃዎች በትክክል ይሙሉ!');
        return;
    }

    // Generate a random Order ID for Debre Tabor delivery
    const orderId = 'VIC-' + Math.floor(100000 + Math.random() * 900000);
    
    // Save details to localStorage to show in Profile/Tracking
    localStorage.setItem('lastOrderId', orderId);
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerPhone', phone);
    
    alert(`🎉 ማዘዣዎ በስኬት ተመዝግቧል!\nየማዘዣ መለያ ቁጥር (Order ID)፦ ${orderId}\nይህንን ቁጥር በመያዝ የቀጥታ ጉዞውን መከታተል ይችላሉ።`);
    
    // Redirect to tracking page
    window.location.href = 'tracking.html';
}

// Tracking Simulation Logic
function simulateTracking() {
    const trackInput = document.getElementById('trackInput').value.trim();
    const trackingStatus = document.getElementById('trackingStatus');
    
    if (!trackInput) {
        alert('እባክዎ መጀመሪያ የትዕዛዝ መለያ ቁጥር (Order ID) ያስገቡ!');
        return;
    }

    // Simple simulation response
    alert(`የትዕዛዝ ቁጥር ${trackInput} የቀጥታ መረጃ በመፈለግ ላይ ነው...`);
}

// Load Profile Data if exists
document.addEventListener('DOMContentLoaded', () => {
    const savedName = localStorage.getItem('customerName');
    const savedPhone = localStorage.getItem('customerPhone');
    
    const profName = document.getElementById('profName');
    const profPhone = document.getElementById('profPhone');
    
    if (savedName && profName) {
        profName.textContent = savedName;
    }
    if (savedPhone && profPhone) {
        profPhone.textContent = savedPhone;
    }
});
