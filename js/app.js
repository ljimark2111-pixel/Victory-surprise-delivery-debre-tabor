// Mobile Drawer Menu Logic (የ 3 ሰረዙ ማውጫ መክፈቻና መዝጊያ)
function toggleDrawer() {
    const drawer = document.getElementById('drawerMenu');
    const overlay = document.getElementById('overlay');
    if (drawer && overlay) {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

// Order Form Submission Handling - Sends data via SMS
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

    const orderId = 'VIC-' + Math.floor(100000 + Math.random() * 900000);
    
    // በኤስኤምኤስ የሚላከው መልዕክት
    const smsMessage = `📦 አዲስ ትዕዛዝ ከቪክቶሪ\nID: ${orderId}\nስም: ${name}\nስልክ: ${phone}\nፓኬጅ: ${packageType}\nአድራሻ: ${details}`;

    // መልዕክቱ የሚላክላቸው የትዕዛዝ ተቀባይ ስልኮች
    const phoneNumbers = "+251941343597;+251935728526"; 
    
    const smsUrl = `sms:${phoneNumbers}?body=${encodeURIComponent(smsMessage)}`;
    
    alert('🎉 ትዕዛዝዎ ተዘጋጅቷል!\n"እሺ" ሲሉ ወደ ስልክዎ የኤስኤምኤስ መላኪያ ይወስድዎታል፣ እባክዎ ለትዕዛዝ ተቀባዮቹ "Send" የሚለውን ይጫኑ።');
    
    window.location.href = smsUrl;
}

// Tracking Simulation Logic
function simulateTracking() {
    const trackInput = document.getElementById('trackInput').value.trim();
    if (!trackInput) {
        alert('እባክዎ መጀመሪያ የትዕዛዝ መለያ ቁጥር (Order ID) ያስገቡ!');
        return;
    }
    alert(`የትዕዛዝ ቁጥር ${trackInput} የቀጥታ መረጃ በመፈለግ ላይ ነው...`);
}
