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

    const orderId = 'VIC-' + Math.floor(100000 + Math.random() * 900000);
    
    // ለሁለቱ የትዕዛዝ ተቀባዮች የሚሄደው መልዕክት
    const smsMessage = `📦 አዲስ ትዕዛዝ ከቪክቶሪ\nID: ${orderId}\nስም: ${name}\nስልክ: ${phone}\nፓኬጅ: ${packageType}\nአድራሻ: ${details}`;

    // ለኢፌክቲቭ የስልክ አይነቶች (አንድ ላይ በኮማ ወይም በሰሚኮሎን መለየት)
    // አብዛኛው ስልክ ላይ ሁለቱንም ቁጥሮች በአንድ ላይ ለመሙላት ይረዳል
    const phoneNumbers = "+251941343597;+251935728526"; 
    
    // የኤስኤምኤስ ሊንክ መፍጠር
    const smsUrl = `sms:${phoneNumbers}?body=${encodeURIComponent(smsMessage)}`;
    
    alert('🎉 ትዕዛዝዎ ተዘጋጅቷል!\n"እሺ" ሲሉ ወደ ስልክዎ የኤስኤምኤስ መላኪያ ይወስድዎታል፣ እባክዎ ለትዕዛዝ ተቀባዮቹ "Send" የሚለውን ይጫኑ።');
    
    // ወደ ኤስኤምኤስ መተግበሪያ መውሰጃ
    window.location.href = smsUrl;
}
